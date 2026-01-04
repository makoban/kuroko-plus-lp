from PIL import Image, ImageDraw
import os

def composite(ui_path, output_path):
    frame_path = '/home/ubuntu/kuroko-plus-lp/images/mockup_frame_pink.png'
    
    if not os.path.exists(frame_path) or not os.path.exists(ui_path):
        print(f"Missing files for {output_path}")
        return

    frame = Image.open(frame_path).convert("RGBA")
    screen = Image.open(ui_path).convert("RGBA")
    
    frame_w, frame_h = frame.size
    target_w = int(frame_w * 0.88)
    target_h = int(frame_h * 0.92)
    
    screen_resized = screen.resize((target_w, target_h), Image.LANCZOS)
    
    mask = Image.new('L', (target_w, target_h), 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle([(0, 0), (target_w, target_h)], radius=60, fill=255)
    
    pos_x = (frame_w - target_w) // 2
    pos_y = (frame_h - target_h) // 2
    
    frame.paste(screen_resized, (pos_x, pos_y), mask)
    frame.save(output_path)
    print(f"Created composite at {output_path}")

if __name__ == "__main__":
    uis = [
        ('ui_summary.png', 'mockup_summary.png'),
        ('ui_explanation.png', 'mockup_explanation.png'),
        ('ui_settings.png', 'mockup_settings.png')
    ]
    
    for ui, out in uis:
        composite(
            f'/home/ubuntu/kuroko-plus-lp/images/{ui}',
            f'/home/ubuntu/kuroko-plus-lp/images/{out}'
        )
