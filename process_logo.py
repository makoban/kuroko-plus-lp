from PIL import Image
import os

def process_logo(input_path, output_dir):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")

        # Simple background removal (assuming white/light background based on image)
        # For better results, we might need a more robust method, but let's try a simple threshold first
        # or just crop the circle if it's circular.
        # Looking at the user image, it seems to be a circular sticker on a white background.
        # Let's try to make the white background transparent.
        
        datas = img.getdata()
        newData = []
        for item in datas:
            # Change all white (also shades of whites) to transparent
            if item[0] > 240 and item[1] > 240 and item[2] > 240:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)

        img.putdata(newData)
        
        # Crop to content (remove empty transparent space)
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)

        # Save as main logo
        img.save(os.path.join(output_dir, "logo.png"), "PNG")
        
        # Create favicon (32x32)
        favicon = img.resize((32, 32), Image.Resampling.LANCZOS)
        favicon.save(os.path.join(output_dir, "favicon.ico"), "ICO")
        
        # Create apple-touch-icon (180x180)
        apple_icon = img.resize((180, 180), Image.Resampling.LANCZOS)
        apple_icon.save(os.path.join(output_dir, "apple-touch-icon.png"), "PNG")

        print(f"Logo processed and saved to {output_dir}")

    except Exception as e:
        print(f"Error processing logo: {e}")

if __name__ == "__main__":
    input_path = "/home/ubuntu/upload/アイコン.png"
    output_dir = "/home/ubuntu/kuroko-plus-lp/client/public"
    process_logo(input_path, output_dir)
