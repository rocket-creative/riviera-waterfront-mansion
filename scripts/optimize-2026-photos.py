#!/usr/bin/env python3
"""Build breakpoint WebPs for the 2026 Elena Kay set and lead the site galleries with them.

Breakpoints match tailwind screens and next.config deviceSizes:
393, 810, 1024, 1440, 1920. Originals are 1600 or 2400 wide, so nothing is upscaled
for the 3840 breakpoint; the largest real file is used instead.
"""

from __future__ import annotations

import shutil
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path(
    "/Volumes/13airMAIN/REPOS_TEMP/-elenakayphotography.com/RIV/watermark/watermarked"
)
OUT = ROOT / "public" / "images" / "2026"
DATA = ROOT / "app" / "lib" / "elenaKay2026.data.ts"
CONFIG = ROOT / "app" / "lib" / "imageConfig.ts"

BREAKPOINTS = (393, 810, 1024, 1440, 1920)
CREDIT = "by Elena Kay Photography"

ALTS = {
    "morrone-balcony-portrait.webp": "Bride and groom on the interior balcony overlooking the ballroom",
    "morrone-balcony-wave.webp": "Bride and groom waving from the interior balcony overlooking the ballroom",
    "morrone-barn-kiss.webp": "Bride and groom kissing beside the wooden barn doors and a floral arrangement",
    "morrone-bay-portrait.webp": "Bride and groom portrait with the bay behind them",
    "morrone-bride-lawn.webp": "Bride standing on the mansion lawn",
    "morrone-bride-train.webp": "Bride with her gown train on the waterfront grounds",
    "morrone-cake.webp": "Three-tier white wedding cake with roses displayed on a wine barrel",
    "morrone-cupola.webp": "Bride and groom in front of the mansion cupola",
    "morrone-dance-embrace.webp": "Bride and groom embracing on the dance floor",
    "morrone-dip-kiss.webp": "Groom dipping the bride for a kiss at the outdoor gazebo ceremony",
    "morrone-entrance.webp": "Bride and groom celebrating as they come through the brick entrance",
    "morrone-first-dance.webp": "Bride and groom during their first dance",
    "morrone-first-look-walk.webp": "Bride walking across the lawn toward the groom for a first look",
    "morrone-first-look.webp": "Bride and groom sharing a first look on the lawn in front of the mansion",
    "morrone-flower-embrace.webp": "Bride and groom embracing in front of the bay and flower beds",
    "morrone-flower-girl.webp": "Flower girl in a white dress beside the ceremony flower beds",
    "morrone-groom-aisle.webp": "Groom walking the outdoor ceremony aisle",
    "morrone-groom-portrait.webp": "Groom portrait on the wedding day",
    "morrone-just-married.webp": "Bride and groom celebrating just married in front of the waterfront gazebo",
    "morrone-lawn-walk.webp": "Bride and groom walking the waterfront lawn beside the bay",
    "morrone-mansion-lawn.webp": "Bride and groom on the lawn in front of the mansion and flower gardens",
    "morrone-menu.webp": "Printed wedding menu card on a reception table",
    "morrone-processional.webp": "Bride walking the outdoor ceremony aisle with her mother",
    "morrone-reception-hall.webp": "Bride and groom walking through the ballroom set for the reception",
    "morrone-stone-wall.webp": "Bride and groom portrait beside the stone garden wall",
    "morrone-sunglasses.webp": "Bride dancing in heart-shaped sunglasses during the reception",
    "morrone-table-setting.webp": "Reception table with white roses and a table number overlooking the water",
    "morrone-veil-wind.webp": "Bride and groom embracing on the lawn as her veil blows in the wind",
    "morrone-vows.webp": "Bride reading her vows to the groom on the lawn in front of the mansion",
    "pycior-ballroom-couple.webp": "Bride and groom standing in the grand ballroom set with gold chairs and white linens",
    "pycior-bay-couple.webp": "Bride and groom standing together beside the bay and flower beds",
    "pycior-bridal-party.webp": "Bride and groom kissing while the bridal party celebrates on the lawn",
    "pycior-cake-cutting.webp": "Bride and groom beside their wedding cake",
    "pycior-cake.webp": "Four-tier wedding cake with flowers against a brick wall",
    "pycior-first-dance.webp": "Bride and groom during their first dance in the ballroom",
    "pycior-first-look-garden.webp": "Bride and groom sharing a first look in the garden",
    "pycior-first-look-path.webp": "Bride walking toward the groom on the garden path for a first look",
    "pycior-flower-beds.webp": "Bride and groom standing together in front of the flower beds",
    "pycior-forehead.webp": "Bride and groom with their foreheads touching",
    "pycior-gazebo-night.webp": "Bride and groom inside the lighted waterfront gazebo at night",
    "pycior-groom-portrait.webp": "Groom portrait on the grounds",
    "pycior-lawn-cupola.webp": "Bride and groom on the lawn with the cupola behind them",
    "pycior-mansion-facade.webp": "Bride and groom on the lawn in front of the mansion facade",
    "pycior-reception-dance.webp": "Bride and groom dancing in the ballroom under the string lights",
    "pycior-reception-kiss.webp": "Bride and groom kissing beside the reception tables in the ballroom",
    "pycior-reception-room.webp": "Grand ballroom set for a reception with tall floral centerpieces and gold chairs",
    "pycior-veil-kiss.webp": "Bride and groom kissing as her veil catches the wind",
    "spano-ballroom.webp": "Bride and groom in the grand ballroom with gold chairs and set reception tables",
    "spano-bay-gaze.webp": "Bride and groom gazing toward the bay",
    "spano-bay-look.webp": "Bride and groom looking toward the bay from the flower gardens",
    "spano-bride-lookback.webp": "Bride looking back over her shoulder on the grounds",
    "spano-bride-portrait.webp": "Bridal portrait at the waterfront mansion",
    "spano-bride-train.webp": "Bride with her train on the waterfront lawn",
    "spano-embrace-bay.webp": "Bride and groom embracing by the bay",
    "spano-lawn-gaze.webp": "Bride and groom on the lawn with the bay behind the gardens",
    "spano-lawn-walk.webp": "Bride and groom walking the lawn beside the flower gardens",
    "spano-mansion-laugh.webp": "Bride and groom laughing in front of the mansion",
    "spano-mansion-portrait.webp": "Bride and groom portrait on the lawn with the mansion and string lights behind them",
    "spano-sweetheart-glasses.webp": "Sweetheart table with engraved glasses, florals, and place settings",
    "spano-waterfront-sunset.webp": "Bride and groom at sunset in the waterfront gardens with the gazebo and bay behind them",
}


def credit(text: str) -> str:
    return text if text.endswith(CREDIT) else f"{text} {CREDIT}"


def optimize() -> dict[str, list[int]]:
    if not SOURCE.is_dir():
        raise SystemExit(f"Missing source folder: {SOURCE}")

    files = sorted(p for p in SOURCE.glob("*.webp"))
    missing = [name for name in ALTS if not (SOURCE / name).exists()]
    extra = [p.name for p in files if p.name not in ALTS]
    if missing or extra:
        raise SystemExit(f"Alt map mismatch. missing={missing} extra={extra}")

    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir(parents=True)

    widths_by_file: dict[str, list[int]] = {}
    for src in files:
        with Image.open(src) as image:
            image.load()
            source_w, source_h = image.size
            widths = [width for width in BREAKPOINTS if width < source_w]
            widths.append(source_w)
            widths_by_file[src.name] = widths

            for width in widths:
                dest_dir = OUT / f"w{width}"
                dest_dir.mkdir(parents=True, exist_ok=True)
                dest = dest_dir / src.name
                if width == source_w:
                    shutil.copy2(src, dest)
                    continue
                height = max(1, round(source_h * (width / source_w)))
                resized = image.resize((width, height), Image.Resampling.LANCZOS)
                resized.save(dest, "WEBP", quality=80, method=6)

        print(f"{src.name}: {', '.join(str(w) for w in widths)}")

    return widths_by_file


def write_data(widths_by_file: dict[str, list[int]]) -> None:
    alt_lines = ",\n".join(
        f"  {name!r}: {credit(ALTS[name])!r}" for name in sorted(ALTS)
    )
    width_lines = ",\n".join(
        f"  {name!r}: [{', '.join(str(w) for w in widths_by_file[name])}]"
        for name in sorted(widths_by_file)
    )
    DATA.write_text(
        "/** Generated by scripts/optimize-2026-photos.py. Descriptions are credited to Elena Kay Photography. */\n"
        f"export const elenaKayAlts: Record<string, string> = {{\n{alt_lines},\n}};\n\n"
        f"export const elenaKayWidths: Record<string, number[]> = {{\n{width_lines},\n}};\n",
        encoding="utf-8",
    )
    print(f"Wrote {DATA.relative_to(ROOT)}")


def canon(name: str, widths_by_file: dict[str, list[int]]) -> str:
    master = widths_by_file[name][-1]
    return f"/images/2026/w{master}/{name}"


def paths(names: list[str], widths_by_file: dict[str, list[int]]) -> list[str]:
    return [canon(name, widths_by_file) for name in names]


def replace_slice(text: str, start: str, end: str, new_slice: str) -> str:
    s = text.find(start)
    if s < 0:
        raise SystemExit(f"Missing start marker: {start}")
    e = text.find(end, s + len(start))
    if e < 0:
        raise SystemExit(f"Missing end marker: {end}")
    return text[:s] + new_slice + text[e:]


def prepend_key(slice_text: str, key: str, new_paths: list[str]) -> str:
    if not new_paths:
        return slice_text
    marker = f"'{key}':"
    i = slice_text.find(marker)
    if i < 0:
        raise SystemExit(f"Missing key {key}")
    if slice_text.find(marker, i + len(marker)) != -1:
        raise SystemExit(f"Ambiguous key {key}")
    bracket = slice_text.find("[", i)
    window = slice_text[bracket : bracket + 500]
    if new_paths[0] in window:
        return slice_text
    if slice_text[bracket + 1] == "\n":
        block = "\n" + "\n".join(f"      '{path}'," for path in new_paths)
        return slice_text[: bracket + 1] + block + slice_text[bracket + 1 :]
    inline = "".join(f"'{path}', " for path in new_paths)
    return slice_text[: bracket + 1] + inline + slice_text[bracket + 1 :]


def prepend_hero(slice_text: str, new_paths: list[str]) -> str:
    marker = "hero: ["
    i = slice_text.find(marker)
    if i < 0:
        raise SystemExit("Missing hero")
    bracket = i + len(marker) - 1
    if new_paths[0] in slice_text[bracket : bracket + 500]:
        return slice_text
    block = "\n" + "\n".join(f"    '{path}'," for path in new_paths)
    return slice_text[: bracket + 1] + block + slice_text[bracket + 1 :]


def patch_config(widths_by_file: dict[str, list[int]]) -> None:
    def P(*names: str) -> list[str]:
        return paths(list(names), widths_by_file)

    text = CONFIG.read_text(encoding="utf-8")
    if "2026 Elena Kay Photography" not in text:
        text = text.replace(
            " * All paths below are confirmed to exist in /public/images/\n",
            " * All paths below are confirmed to exist in /public/images/\n"
            " * 2026 Elena Kay Photography images are listed first in each gallery they belong to.\n",
            1,
        )

    assignments = {
        "hero": P(
            "spano-waterfront-sunset.webp",
            "morrone-vows.webp",
            "pycior-mansion-facade.webp",
            "pycior-bay-couple.webp",
            "morrone-mansion-lawn.webp",
            "pycior-ballroom-couple.webp",
            "spano-lawn-walk.webp",
            "pycior-gazebo-night.webp",
        ),
        "pageHeroes": {
            "contact": P("morrone-mansion-lawn.webp", "spano-lawn-gaze.webp", "pycior-bay-couple.webp"),
            "tour": P(
                "pycior-mansion-facade.webp",
                "morrone-vows.webp",
                "spano-waterfront-sunset.webp",
                "pycior-ballroom-couple.webp",
            ),
            "vendors": P("pycior-bridal-party.webp", "spano-mansion-portrait.webp", "morrone-entrance.webp"),
            "rates": P("spano-waterfront-sunset.webp", "pycior-mansion-facade.webp"),
        },
        "homepage": {
            "whyChooseUs": P(
                "morrone-processional.webp",
                "morrone-first-look.webp",
                "pycior-bridal-party.webp",
                "morrone-first-look-walk.webp",
                "morrone-veil-wind.webp",
                "pycior-flower-beds.webp",
            ),
            "venue": P(
                "spano-mansion-portrait.webp",
                "morrone-lawn-walk.webp",
                "spano-lawn-gaze.webp",
                "pycior-first-look-path.webp",
                "morrone-flower-embrace.webp",
                "morrone-bay-portrait.webp",
            ),
        },
        "tour": {
            "entrance-lobby": P("morrone-entrance.webp"),
            "outdoor-ceremony": P(
                "morrone-vows.webp",
                "morrone-processional.webp",
                "morrone-just-married.webp",
                "morrone-dip-kiss.webp",
                "morrone-flower-girl.webp",
                "morrone-groom-aisle.webp",
            ),
            "outdoor-cocktail": P("pycior-gazebo-night.webp", "pycior-flower-beds.webp"),
            "main-ballroom": P(
                "pycior-ballroom-couple.webp",
                "spano-ballroom.webp",
                "morrone-reception-hall.webp",
                "pycior-reception-kiss.webp",
                "pycior-reception-room.webp",
                "pycior-cake.webp",
                "pycior-cake-cutting.webp",
                "morrone-cake.webp",
            ),
            "dancefloor": P(
                "morrone-sunglasses.webp",
                "pycior-reception-dance.webp",
                "morrone-first-dance.webp",
                "pycior-first-dance.webp",
                "morrone-dance-embrace.webp",
            ),
            "sweetheart-table": P("spano-sweetheart-glasses.webp"),
            "guest-seating": P(
                "morrone-reception-hall.webp",
                "morrone-table-setting.webp",
                "morrone-menu.webp",
                "pycior-reception-room.webp",
            ),
            "balconies": P("morrone-balcony-wave.webp", "morrone-balcony-portrait.webp"),
            "photo-locations": P(
                "spano-waterfront-sunset.webp",
                "pycior-mansion-facade.webp",
                "pycior-bay-couple.webp",
                "morrone-mansion-lawn.webp",
                "spano-lawn-walk.webp",
                "morrone-first-look.webp",
                "morrone-first-look-walk.webp",
                "pycior-first-look-path.webp",
                "morrone-veil-wind.webp",
                "morrone-flower-embrace.webp",
                "morrone-lawn-walk.webp",
                "spano-lawn-gaze.webp",
                "spano-mansion-portrait.webp",
                "morrone-bay-portrait.webp",
                "pycior-flower-beds.webp",
                "pycior-bridal-party.webp",
                "pycior-gazebo-night.webp",
                "morrone-barn-kiss.webp",
                "morrone-bride-lawn.webp",
                "morrone-bride-train.webp",
                "morrone-cupola.webp",
                "morrone-groom-portrait.webp",
                "morrone-stone-wall.webp",
                "pycior-first-look-garden.webp",
                "pycior-forehead.webp",
                "pycior-groom-portrait.webp",
                "pycior-lawn-cupola.webp",
                "pycior-veil-kiss.webp",
                "spano-bay-gaze.webp",
                "spano-bay-look.webp",
                "spano-bride-lookback.webp",
                "spano-bride-portrait.webp",
                "spano-bride-train.webp",
                "spano-embrace-bay.webp",
                "spano-mansion-laugh.webp",
            ),
        },
        "tourHeroes": {
            "entrance-lobby": P("morrone-entrance.webp"),
            "outdoor-ceremony": P("morrone-vows.webp"),
            "outdoor-cocktail": P("pycior-gazebo-night.webp"),
            "main-ballroom": P("pycior-ballroom-couple.webp"),
            "sweetheart-table": P("spano-sweetheart-glasses.webp"),
            "guest-seating": P("morrone-reception-hall.webp"),
            "dancefloor": P("morrone-sunglasses.webp"),
            "balconies": P("morrone-balcony-wave.webp"),
            "photo-locations": P("spano-waterfront-sunset.webp"),
        },
        "tourPreviews": {
            "entrance-lobby": P("morrone-entrance.webp"),
            "outdoor-ceremony": P("morrone-vows.webp", "morrone-processional.webp"),
            "outdoor-cocktail": P("pycior-gazebo-night.webp"),
            "main-ballroom": P("pycior-ballroom-couple.webp", "spano-ballroom.webp", "morrone-reception-hall.webp"),
            "sweetheart-table": P("spano-sweetheart-glasses.webp"),
            "guest-seating": P("morrone-reception-hall.webp"),
            "dancefloor": P("morrone-sunglasses.webp"),
            "balconies": P("morrone-balcony-wave.webp"),
            "photo-locations": P(
                "spano-waterfront-sunset.webp",
                "pycior-mansion-facade.webp",
                "pycior-bay-couple.webp",
                "morrone-mansion-lawn.webp",
            ),
        },
        "sections": {
            "vendors": P("pycior-bridal-party.webp"),
            "contact": P("morrone-mansion-lawn.webp"),
            "menu": P("morrone-menu.webp"),
            "rates": P("pycior-gazebo-night.webp", "morrone-mansion-lawn.webp"),
        },
        "menuBallroom": P(
            "pycior-ballroom-couple.webp",
            "spano-ballroom.webp",
            "morrone-reception-hall.webp",
            "pycior-reception-room.webp",
        ),
    }

    used = set()
    for group in (
        assignments["tour"],
        assignments["pageHeroes"],
        assignments["homepage"],
        assignments["hero"],
    ):
        if isinstance(group, list):
            for path in group:
                used.add(Path(path).name)
        else:
            for group_paths in group.values():
                for path in group_paths:
                    used.add(Path(path).name)
    missing = sorted(set(ALTS) - used)
    if missing:
        raise SystemExit(f"Photos not placed on the site: {missing}")

    def patch_block(start: str, end: str, keys: dict[str, list[str]]) -> None:
        nonlocal text
        s = text.find(start)
        e = text.find(end, s + len(start))
        block = text[s:e]
        for key, key_paths in keys.items():
            block = prepend_key(block, key, key_paths)
        text = text[:s] + block + text[e:]

    hero_s = text.find("  hero: [")
    hero_e = text.find("  pageHeroes:", hero_s)
    text = text[:hero_s] + prepend_hero(text[hero_s:hero_e], assignments["hero"]) + text[hero_e:]

    patch_block("  pageHeroes:", "  homepage:", assignments["pageHeroes"])
    patch_block("  homepage:", "  // Tour Section Galleries", assignments["homepage"])
    patch_block("  tour: {", "  // Tour grid preview images", assignments["tour"])
    patch_block("  tourPreviews:", "  // Tour detail page hero images", assignments["tourPreviews"])
    patch_block("  tourHeroes:", "  // Section CTA images", assignments["tourHeroes"])
    patch_block("  sections:", "  // Menu Section Hero Carousels", assignments["sections"])

    menu_s = text.find("    'ballroom': [")
    menu_e = text.find("    'exit-stations':", menu_s)
    menu_block = prepend_key(text[menu_s:menu_e], "ballroom", assignments["menuBallroom"])
    text = text[:menu_s] + menu_block + text[menu_e:]

    CONFIG.write_text(text, encoding="utf-8")
    print(f"Updated {CONFIG.relative_to(ROOT)}")


def main() -> None:
    widths = optimize()
    write_data(widths)
    patch_config(widths)


if __name__ == "__main__":
    main()
