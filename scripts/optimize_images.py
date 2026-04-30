"""
Converts banner images to WebP and resizes them to a max width.
Run from the project root: python scripts/optimize_images.py
Requires: pip install Pillow
"""

import os
from PIL import Image

BASE_DIR = os.path.join(os.path.dirname(__file__), "..", "images", "banners")
FILES = ["banner1_1.png", "banner1_3.png", "banner2_1.png"]
MAX_WIDTH = 1280
QUALITY = 82


def optimize():
    for filename in FILES:
        src_path = os.path.join(BASE_DIR, filename)
        if not os.path.exists(src_path):
            print(f"Skipping {filename} — not found")
            continue

        img = Image.open(src_path)
        w, h = img.size
        if w > MAX_WIDTH:
            ratio = MAX_WIDTH / w
            img = img.resize((MAX_WIDTH, int(h * ratio)), Image.LANCZOS)

        out_name = filename.replace(".png", ".webp")
        out_path = os.path.join(BASE_DIR, out_name)
        img.save(out_path, "WEBP", quality=QUALITY, method=6)

        orig_kb = os.path.getsize(src_path) // 1024
        new_kb = os.path.getsize(out_path) // 1024
        print(f"{filename} ({orig_kb} KB) -> {out_name} ({new_kb} KB)  [{img.size[0]}x{img.size[1]}]")


if __name__ == "__main__":
    optimize()
