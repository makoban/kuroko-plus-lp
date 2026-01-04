from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os

def create_rounded_rectangle_mask(size, radius):
    mask = Image.new('L', size, 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle([(0, 0), size], radius, fill=255)
    return mask

def add_shadow(image, offset=(5, 5), blur=10, shadow_color=(0, 0, 0, 50)):
    # Create a larger canvas for the shadow
    w, h = image.size
    padding = blur * 2
    canvas_size = (w + padding * 2, h + padding * 2)
    
    # Create shadow layer
    shadow = Image.new('RGBA', canvas_size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(shadow)
    
    # Draw shadow rectangle
    shadow_box = [
        (padding + offset[0], padding + offset[1]),
        (padding + w + offset[0], padding + h + offset[1])
    ]
    draw.rounded_rectangle(shadow_box, radius=20, fill=shadow_color)
    
    # Blur shadow
    shadow = shadow.filter(ImageFilter.GaussianBlur(blur))
    
    # Paste original image
    image_pos = (padding, padding)
    shadow.paste(image, image_pos, image)
    
    return shadow

def create_chat_bubble(text, is_user=True, color="#E5E5EA", text_color="#000000", width=300):
    # Create a simple chat bubble image
    # This is a simplified version, ideally we would render text properly
    # For now, we'll create a colored rectangle
    
    height = 80
    if len(text) > 20:
        height = 120
        
    img = Image.new('RGBA', (width, height), (0,0,0,0))
    draw = ImageDraw.Draw(img)
    
    bubble_color = "#007AFF" if is_user else "#E5E5EA"
    text_color = "#FFFFFF" if is_user else "#000000"
    
    # Draw bubble
    draw.rounded_rectangle([(0, 0), (width, height)], radius=15, fill=bubble_color)
    
    return img

def create_mobile_ui(pc_screenshot_path, output_path):
    # Load PC screenshot
    try:
        pc_screen = Image.open(pc_screenshot_path).convert("RGBA")
    except Exception as e:
        print(f"Error loading image: {e}")
        return

    # Create a mobile screen canvas (iPhone 15 Pro resolution approx 1179x2556, scaled down)
    mobile_w, mobile_h = 1179 // 2, 2556 // 2  # ~590x1278
    canvas = Image.new('RGBA', (mobile_w, mobile_h), "#F2F2F7") # iOS system gray background
    draw = ImageDraw.Draw(canvas)
    
    # 1. Header
    header_h = 120
    draw.rectangle([(0, 0), (mobile_w, header_h)], fill="#FFFFFF")
    
    # Add status bar elements (simplified)
    # Time
    try:
        font = ImageFont.truetype("/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc", 24)
        font_large = ImageFont.truetype("/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc", 32)
        font_regular = ImageFont.truetype("/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc", 24)
    except:
        font = ImageFont.load_default()
        font_large = ImageFont.load_default()
        font_regular = ImageFont.load_default()
        
    draw.text((40, 20), "9:41", fill="#000000", font=font)
    
    # App Title
    draw.text((mobile_w//2 - 60, 60), "KUROKO+", fill="#FF58B1", font=font_large) # Pink title
    
    # 2. Chat Area (Simulated)
    # We will crop parts of the PC screen to simulate chat bubbles or create new ones
    # Since extracting text from image is hard without OCR, let's create simulated bubbles
    # matching the "pink/pop" style
    
    current_y = header_h + 40
    
    # User bubble (Right)
    user_bubble_w = 300
    user_bubble_h = 80
    draw.rounded_rectangle(
        [(mobile_w - user_bubble_w - 20, current_y), (mobile_w - 20, current_y + user_bubble_h)],
        radius=16, fill="#FF58B1"
    )
    draw.text((mobile_w - user_bubble_w, current_y + 25), "この案件のKPIについて...", fill="#FFFFFF", font=font_regular)
    
    current_y += user_bubble_h + 20
    
    # AI/Partner bubble (Left)
    partner_bubble_w = 350
    partner_bubble_h = 80
    draw.rounded_rectangle(
        [(20, current_y), (20 + partner_bubble_w, current_y + partner_bubble_h)],
        radius=16, fill="#FFFFFF"
    )
    draw.text((40, current_y + 25), "KPIですね。重要業績評価指標...", fill="#000000", font=font_regular)
    
    current_y += partner_bubble_h + 40
    
    # 3. "Auto-detected" Popup Card (The "Magic" part)
    # This should look like it popped up automatically
    card_w = mobile_w - 40
    card_h = 200
    
    # Card shadow/glow
    shadow_offset = 10
    draw.rounded_rectangle(
        [(20 + shadow_offset, current_y + shadow_offset), (20 + card_w + shadow_offset, current_y + card_h + shadow_offset)],
        radius=20, fill="#00000020"
    )
    
    # Card body
    draw.rounded_rectangle(
        [(20, current_y), (20 + card_w, current_y + card_h)],
        radius=20, fill="#FFFFFF", outline="#FFEB3B", width=4
    )
    
    # Card Content
    # Icon
    draw.ellipse([(40, current_y + 30), (90, current_y + 80)], fill="#FFF9C4") # Light yellow circle
    # We can't draw complex icons easily, so just a symbol
    draw.text((55, current_y + 40), "💡", fill="#FBC02D", font=font_large)
    
    # Title
    draw.text((110, current_y + 40), "KPI (重要業績評価指標)", fill="#000000", font=font_large)
    
    # Description
    desc = "組織の目標達成度合いを計測するための\n定量的な指標のことです。"
    draw.text((40, current_y + 100), desc, fill="#666666", font=font_regular, spacing=10)
    
    # "Auto-detected" badge
    badge_w = 120
    badge_h = 30
    badge_x = mobile_w - badge_w - 40
    badge_y = current_y - 15
    draw.rounded_rectangle(
        [(badge_x, badge_y), (badge_x + badge_w, badge_y + badge_h)],
        radius=15, fill="#FF58B1"
    )
    draw.text((badge_x + 15, badge_y + 2), "自動検出 ✨", fill="#FFFFFF", font=font)

    # 4. Bottom Action Bar (Mic)
    bar_h = 100
    draw.rectangle([(0, mobile_h - bar_h), (mobile_w, mobile_h)], fill="#FFFFFF")
    
    # Mic Button
    mic_size = 70
    mic_x = (mobile_w - mic_size) // 2
    mic_y = mobile_h - bar_h + (bar_h - mic_size) // 2
    draw.ellipse([(mic_x, mic_y), (mic_x + mic_size, mic_y + mic_size)], fill="#FF58B1")
    draw.text((mic_x + 20, mic_y + 15), "🎤", fill="#FFFFFF", font=font_large)
    
    # Save the UI image
    canvas.save(output_path)
    print(f"Created mobile UI at {output_path}")
    
    return output_path

if __name__ == "__main__":
    # Ensure directory exists
    os.makedirs('/home/ubuntu/kuroko-plus-lp/images', exist_ok=True)
    
    # Create the mobile UI image
    # We use the full screen screenshot as reference/source, but we are mostly drawing from scratch 
    # to ensure high quality text and shapes for the mockup
    ui_path = create_mobile_ui(
        '/home/ubuntu/kuroko-plus-lp/images/app_screen_full.png',
        '/home/ubuntu/kuroko-plus-lp/images/mobile_ui_generated.png'
    )
    
    # Now composite this into the phone frame
    # We'll reuse the composite logic from previous script or just do it here simply
    
    frame_path = '/home/ubuntu/kuroko-plus-lp/images/mockup_frame_pink.png'
    if os.path.exists(frame_path) and os.path.exists(ui_path):
        frame = Image.open(frame_path).convert("RGBA")
        screen = Image.open(ui_path).convert("RGBA")
        
        # We need to fit the screen into the frame
        # The frame has a white screen area we detected before: (711, 380) to (1322, 1652) -> 611x1272
        # Our generated UI is 590x1278 (approx)
        
        target_w, target_h = 611, 1272
        top_left = (711, 380)
        
        # Resize screen to fit exactly
        screen_resized = screen.resize((target_w, target_h), Image.LANCZOS)
        
        # Create a mask for rounded corners of the screen area
        mask = Image.new('L', (target_w, target_h), 0)
        draw = ImageDraw.Draw(mask)
        draw.rounded_rectangle([(0, 0), (target_w, target_h)], radius=40, fill=255)
        
        # Paste screen onto frame
        frame.paste(screen_resized, top_left, mask)
        
        frame.save('/home/ubuntu/kuroko-plus-lp/images/mockup_mobile_final.png')
        print("Created final mobile mockup at /home/ubuntu/kuroko-plus-lp/images/mockup_mobile_final.png")
