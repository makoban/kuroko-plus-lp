from PIL import Image, ImageDraw, ImageFilter
import os

def composite_mockup():
    frame_path = '/home/ubuntu/kuroko-plus-lp/images/mockup_frame_pink.png'
    ui_path = '/home/ubuntu/kuroko-plus-lp/images/mobile_ui_generated.png'
    output_path = '/home/ubuntu/kuroko-plus-lp/images/mockup_mobile_final.png'
    
    if not os.path.exists(frame_path) or not os.path.exists(ui_path):
        print("Frame or UI image not found")
        return

    frame = Image.open(frame_path).convert("RGBA")
    screen = Image.open(ui_path).convert("RGBA")
    
    # Frame size is 1024x1792 (from generation)
    # We need to find the screen area (black area in the generated image)
    # Since it's generated, let's hardcode a reasonable guess or use center
    
    # Target screen area in the frame (approximate based on typical generation)
    # Let's assume the screen is centered and takes up ~90% width
    frame_w, frame_h = frame.size
    
    # Calculate target screen size
    target_w = int(frame_w * 0.88)
    target_h = int(frame_h * 0.92) # Adjust based on aspect ratio
    
    # Resize generated UI to fit
    screen_resized = screen.resize((target_w, target_h), Image.LANCZOS)
    
    # Create rounded mask
    mask = Image.new('L', (target_w, target_h), 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle([(0, 0), (target_w, target_h)], radius=60, fill=255)
    
    # Calculate position to center the screen
    pos_x = (frame_w - target_w) // 2
    pos_y = (frame_h - target_h) // 2
    
    # Paste
    frame.paste(screen_resized, (pos_x, pos_y), mask)
    
    # Save
    frame.save(output_path)
    print(f"Created final composite at {output_path}")

if __name__ == "__main__":
    composite_mockup()
