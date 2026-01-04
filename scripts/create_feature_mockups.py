from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os

def create_base_ui(width=590, height=1278):
    canvas = Image.new('RGBA', (width, height), "#F2F2F7")
    draw = ImageDraw.Draw(canvas)
    
    # Header
    header_h = 120
    draw.rectangle([(0, 0), (width, header_h)], fill="#FFFFFF")
    
    try:
        font = ImageFont.truetype("/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc", 24)
        font_large = ImageFont.truetype("/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc", 32)
    except:
        font = ImageFont.load_default()
        font_large = ImageFont.load_default()
        
    draw.text((40, 20), "9:41", fill="#000000", font=font)
    draw.text((width//2 - 60, 60), "KUROKO+", fill="#FF58B1", font=font_large)
    
    # Bottom Bar
    bar_h = 100
    draw.rectangle([(0, height - bar_h), (width, height)], fill="#FFFFFF")
    mic_size = 70
    mic_x = (width - mic_size) // 2
    mic_y = height - bar_h + (bar_h - mic_size) // 2
    draw.ellipse([(mic_x, mic_y), (mic_x + mic_size, mic_y + mic_size)], fill="#FF58B1")
    draw.text((mic_x + 20, mic_y + 15), "🎤", fill="#FFFFFF", font=font_large)
    
    return canvas, draw, font, font_large

def create_summary_ui(output_path):
    canvas, draw, font, font_large = create_base_ui()
    width, height = canvas.size
    
    # Summary Card
    card_y = 160
    card_h = 400
    draw.rounded_rectangle([(20, card_y), (width - 20, card_y + card_h)], radius=20, fill="#FFFFFF")
    
    # Title
    draw.text((40, card_y + 30), "📝 会話の要約", fill="#FF58B1", font=font_large)
    
    # Content
    summary_text = [
        "・プロジェクトAの進捗確認",
        "・来週の定例会議は水曜日に変更",
        "・予算承認は明日までに提出",
        "・KPIの再設定が必要"
    ]
    
    y = card_y + 90
    for line in summary_text:
        draw.text((40, y), line, fill="#333333", font=font, spacing=10)
        y += 50
        
    # Badge
    draw.rounded_rectangle([(width - 140, card_y + 30), (width - 40, card_y + 70)], radius=10, fill="#E3F2FD")
    draw.text((width - 120, card_y + 38), "AI生成", fill="#2196F3", font=font)
    
    canvas.save(output_path)
    print(f"Created summary UI at {output_path}")

def create_explanation_ui(output_path):
    canvas, draw, font, font_large = create_base_ui()
    width, height = canvas.size
    
    # Chat bubbles
    y = 160
    draw.rounded_rectangle([(width - 300, y), (width - 20, y + 80)], radius=16, fill="#FF58B1")
    draw.text((width - 280, y + 25), "ROIの計算方法は？", fill="#FFFFFF", font=font)
    
    y += 100
    
    # Explanation Card (Popup)
    card_h = 250
    draw.rounded_rectangle([(20, y), (width - 20, y + card_h)], radius=20, fill="#FFFFFF", outline="#FFEB3B", width=4)
    
    draw.text((40, y + 30), "💡 ROI (投資利益率)", fill="#000000", font=font_large)
    draw.text((40, y + 90), "投資した費用に対して、どれだけの\n利益が得られたかを表す指標です。\n(利益 ÷ 投資額) × 100 で算出します。", fill="#666666", font=font, spacing=10)
    
    canvas.save(output_path)
    print(f"Created explanation UI at {output_path}")

def create_settings_ui(output_path):
    canvas, draw, font, font_large = create_base_ui()
    width, height = canvas.size
    
    y = 160
    draw.text((40, y), "⚙️ 設定", fill="#000000", font=font_large)
    y += 60
    
    settings = [
        ("知識レベル", "専門家"),
        ("解説の頻度", "高め"),
        ("音声認識言語", "日本語"),
        ("文字サイズ", "中")
    ]
    
    for label, value in settings:
        draw.rounded_rectangle([(20, y), (width - 20, y + 80)], radius=12, fill="#FFFFFF")
        draw.text((40, y + 25), label, fill="#000000", font=font)
        draw.text((width - 150, y + 25), value + " >", fill="#999999", font=font)
        y += 100
        
    canvas.save(output_path)
    print(f"Created settings UI at {output_path}")

if __name__ == "__main__":
    os.makedirs('/home/ubuntu/kuroko-plus-lp/images', exist_ok=True)
    create_summary_ui('/home/ubuntu/kuroko-plus-lp/images/ui_summary.png')
    create_explanation_ui('/home/ubuntu/kuroko-plus-lp/images/ui_explanation.png')
    create_settings_ui('/home/ubuntu/kuroko-plus-lp/images/ui_settings.png')
