'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from '@hello-pangea/dnd';
import Image from 'next/image';
import { imageConfig } from '../../lib/imageConfig';

// ─── Types ────────────────────────────────────────────────────────────────────

type Tab = 'tour' | 'menu' | 'menu-heroes' | 'site-images' | 'upload';
type UploadStatus = 'idle' | 'uploading' | 'done' | 'error';
type SiteGroup = 'page-heroes' | 'homepage' | 'tour-previews' | 'sections';
type MenuCategory = 'cocktail-hour' | 'enhancements' | 'dinner-plates' | 'exit-stations';
type SaveStatus = 'idle' | 'saving' | 'saved' | 'error';

// Static metadata for menu slots — labels & which folder they pull from
const MENU_SLOTS: Array<{
  key: string;
  label: string;
  category: MenuCategory;
}> = [
  // Cocktail Hour
  { key: 'cocktail-cold-meats-board',      label: 'Cold Meats Board',             category: 'cocktail-hour' },
  { key: 'cocktail-cheeseboard',           label: 'Assorted Cheeseboard',         category: 'cocktail-hour' },
  { key: 'cocktail-mediterranean-board',   label: 'Mediterranean Board',          category: 'cocktail-hour' },
  { key: 'cocktail-antipasto-salad',       label: 'Antipasto Salad',              category: 'cocktail-hour' },
  { key: 'cocktail-vegetable-crudite',     label: 'Vegetable Crudité',            category: 'cocktail-hour' },
  { key: 'cocktail-spanakopita',           label: 'Spanakopita',                  category: 'cocktail-hour' },
  { key: 'cocktail-kobe-slider',           label: 'Kobe Slider',                  category: 'cocktail-hour' },
  { key: 'cocktail-spring-rolls',          label: 'Spring Rolls',                 category: 'cocktail-hour' },
  { key: 'cocktail-miniature-empanadas',   label: 'Miniature Empanadas',          category: 'cocktail-hour' },
  { key: 'cocktail-zucchini-sticks',       label: 'Zucchini Sticks',             category: 'cocktail-hour' },
  { key: 'cocktail-bourbon-chicken-bites', label: 'Bourbon Chicken Bites',        category: 'cocktail-hour' },
  { key: 'cocktail-fried-coconut-shrimp',  label: 'Fried Coconut Shrimp',        category: 'cocktail-hour' },
  { key: 'cocktail-seafood-salad',         label: "Riviera's Seafood Salad",      category: 'cocktail-hour' },
  { key: 'cocktail-greek-couscous-salad',  label: 'Greek Couscous Salad',         category: 'cocktail-hour' },
  { key: 'cocktail-london-broil',          label: 'Marinated London Broil',       category: 'cocktail-hour' },
  { key: 'cocktail-roast-pork-tenderloin', label: 'Roast Pork Tenderloin',        category: 'cocktail-hour' },
  { key: 'cocktail-corned-beef',           label: 'Corned Beef',                  category: 'cocktail-hour' },
  { key: 'cocktail-glazed-virginia-ham',   label: 'Glazed Virginia Ham',          category: 'cocktail-hour' },
  { key: 'cocktail-chicken-pina-colada',   label: 'Chicken Pina Colada',          category: 'cocktail-hour' },
  { key: 'cocktail-chicken-scarpariello',  label: 'Chicken Scarpariello',         category: 'cocktail-hour' },
  { key: 'cocktail-chicken-francese',      label: 'Chicken Francese',             category: 'cocktail-hour' },
  { key: 'cocktail-arroz-con-pollo',       label: 'Arroz Con Pollo',              category: 'cocktail-hour' },
  { key: 'cocktail-sesame-chicken',        label: 'Sesame Chicken',               category: 'cocktail-hour' },
  { key: 'cocktail-rigatoni-prosciutto',   label: 'Rigatoni with Prosciutto',     category: 'cocktail-hour' },
  { key: 'cocktail-tortellini-carbonara',  label: 'Tortellini Carbonara',         category: 'cocktail-hour' },
  { key: 'cocktail-riviera-pasta',         label: "Riviera's Pasta",              category: 'cocktail-hour' },
  { key: 'cocktail-eggplant-rollatini',    label: 'Eggplant Rollatini',           category: 'cocktail-hour' },
  { key: 'cocktail-fried-calamari',        label: 'Fried Calamari',               category: 'cocktail-hour' },
  { key: 'cocktail-seafood-paella',        label: 'Seafood Paella',               category: 'cocktail-hour' },
  { key: 'cocktail-seafood-newburg',       label: 'Seafood Newburg',              category: 'cocktail-hour' },
  { key: 'cocktail-seafood-fra-diablo',    label: 'Seafood Fra Diablo',           category: 'cocktail-hour' },
  { key: 'cocktail-shrimp-scampi',         label: 'Shrimp Scampi',               category: 'cocktail-hour' },
  { key: 'cocktail-swedish-meatballs',     label: 'Swedish Meatballs',            category: 'cocktail-hour' },
  { key: 'cocktail-beef-teriyaki',         label: 'Beef Teriyaki',               category: 'cocktail-hour' },
  { key: 'cocktail-sausage-and-peppers',   label: 'Sausage and Peppers',          category: 'cocktail-hour' },
  { key: 'cocktail-kielbasa-sauerkraut',      label: 'Kielbasa and Sauerkraut',          category: 'cocktail-hour' },
  { key: 'cocktail-seasonal-fruit-display',   label: 'Seasonal Fruit Display',           category: 'cocktail-hour' },
  { key: 'cocktail-fruit-on-skewers',         label: 'Fruit on Skewers',                 category: 'cocktail-hour' },
  { key: 'cocktail-mini-tacos',               label: 'Mini Tacos',                       category: 'cocktail-hour' },
  { key: 'cocktail-date-night',               label: 'Date Night',                       category: 'cocktail-hour' },
  { key: 'cocktail-lemon-blueberry-crostini', label: 'Lemon Blueberry Crostini',         category: 'cocktail-hour' },
  { key: 'cocktail-brisket-of-beef',          label: 'Brisket of Beef',                  category: 'cocktail-hour' },
  { key: 'cocktail-pastrami',                 label: 'Pastrami',                         category: 'cocktail-hour' },
  { key: 'cocktail-roasted-whole-turkey',     label: 'Roasted Whole Turkey',             category: 'cocktail-hour' },
  { key: 'cocktail-chicken-marsala',          label: 'Chicken Marsala',                  category: 'cocktail-hour' },
  { key: 'cocktail-sweet-sour-chicken',       label: 'Sweet & Sour Chicken',             category: 'cocktail-hour' },
  { key: 'cocktail-fettuccine-alfredo',       label: 'Tortellini / Fettuccine Alfredo',  category: 'cocktail-hour' },
  { key: 'cocktail-penne-ala-vodka',          label: 'Penne Ala Vodka',                  category: 'cocktail-hour' },
  { key: 'cocktail-pasta-primavera',          label: 'Pasta Primavera',                  category: 'cocktail-hour' },
  { key: 'cocktail-penne-bolognese',          label: 'Penne Bolognese',                  category: 'cocktail-hour' },
  { key: 'cocktail-vegetable-stir-fry',       label: 'Vegetable Stir Fry',               category: 'cocktail-hour' },
  { key: 'cocktail-jambalaya',                label: 'Jambalaya',                        category: 'cocktail-hour' },
  { key: 'cocktail-clam-sauce',               label: 'White or Red Clam Sauce',          category: 'cocktail-hour' },
  { key: 'cocktail-baked-clams',              label: 'Baked Clams',                      category: 'cocktail-hour' },
  { key: 'cocktail-italian-meatballs',        label: 'Italian Meatballs',                category: 'cocktail-hour' },
  { key: 'cocktail-beef-bourguignon',         label: 'Beef Bourguignon',                 category: 'cocktail-hour' },
  { key: 'cocktail-beef-stroganoff',          label: 'Beef Stroganoff',                  category: 'cocktail-hour' },
  // Enhancements
  { key: 'enhance-jumbo-shrimp-cocktail',    label: 'Jumbo Shrimp Cocktail',        category: 'enhancements' },
  { key: 'enhance-sushi-bar-waterfront',     label: 'Fresh Sushi Bar',              category: 'enhancements' },
  { key: 'enhance-bacon-station-hero',       label: 'Bacon Station',                category: 'enhancements' },
  { key: 'enhance-french-fry-station',       label: 'French Fry Station',           category: 'enhancements' },
  { key: 'enhance-donut-wall-hero',          label: 'Donut Wall',                   category: 'enhancements' },
  { key: 'enhance-smores-station',           label: "S'mores Station",              category: 'enhancements' },
  { key: 'enhance-espresso-cordial-station', label: 'Espresso & Cordial Station',   category: 'enhancements' },
  { key: 'enhance-gelato-espresso-hero',     label: 'Gelato Bar',                   category: 'enhancements' },
  { key: 'enhance-burger-station',           label: 'All American Burger Station',  category: 'enhancements' },
  { key: 'enhance-donut-wall-close',          label: 'Donut Wall (Close-up)',            category: 'enhancements' },
  { key: 'enhance-welcome-snack-station',     label: 'Welcome Snack Station',            category: 'enhancements' },
  { key: 'enhance-bridal-suite-wrap-platter', label: 'Bridal Suite Wrap Platter',        category: 'enhancements' },
  { key: 'enhance-rolling-bar',               label: 'Rolling Bar',                      category: 'enhancements' },
  { key: 'enhance-full-rolling-bar',          label: 'Full Rolling Bar',                 category: 'enhancements' },
  { key: 'enhance-fresh-mozzarella-station',  label: 'Fresh Mozzarella Station',         category: 'enhancements' },
  { key: 'enhance-fresh-clam-oyster-bar',     label: 'Fresh Clam & Oyster Bar',          category: 'enhancements' },
  { key: 'enhance-whole-lobster-station',     label: 'Whole Lobster Station',            category: 'enhancements' },
  { key: 'enhance-lobster-tail-station',      label: 'Lobster Tail Station',             category: 'enhancements' },
  { key: 'enhance-alaskan-crab-legs',         label: 'Alaskan Crab Legs',               category: 'enhancements' },
  { key: 'enhance-ice-sculpture',             label: 'Ice Sculpture',                    category: 'enhancements' },
  { key: 'enhance-baby-lamb-chops',           label: 'Baby Lamb Chops',                  category: 'enhancements' },
  { key: 'enhance-roast-suckling-pig',        label: 'Roast Suckling Pig',               category: 'enhancements' },
  { key: 'enhance-mashed-potato-bar',         label: 'Mashed Potato Bar',                category: 'enhancements' },
  { key: 'enhance-mac-cheese-station',        label: 'Macaroni & Cheese Station',        category: 'enhancements' },
  { key: 'enhance-gourmet-pasta-station',     label: 'Gourmet Pasta Station',            category: 'enhancements' },
  { key: 'enhance-taco-bar-station',          label: 'Taco Bar Station',                 category: 'enhancements' },
  { key: 'enhance-fried-chicken-donut',       label: 'Fried Chicken & Glazed Donut',     category: 'enhancements' },
  { key: 'enhance-pierogi-station',           label: 'Pierogi Station',                  category: 'enhancements' },
  { key: 'enhance-full-viennese',             label: 'Full Viennese',                    category: 'enhancements' },
  { key: 'enhance-roaming-cannoli',           label: 'Roaming Cannoli',                  category: 'enhancements' },
  { key: 'enhance-rainbow-explosion',         label: 'Rainbow Explosion',                category: 'enhancements' },
  { key: 'enhance-ice-cream-sundae-bar',      label: 'Ice Cream Sundae Bar',             category: 'enhancements' },
  // Exit Stations
  { key: 'exit-hot-pretzel-station',          label: 'Hot Pretzel Station',              category: 'exit-stations' },
  { key: 'exit-chips-gatorade',               label: 'Chips & Gatorade Display',         category: 'exit-stations' },
  { key: 'exit-stuffed-bomboloni',            label: 'Stuffed Bomboloni Bar',            category: 'exit-stations' },
  { key: 'exit-stuffed-garlic-knot',          label: 'Stuffed Garlic Knot Station',      category: 'exit-stations' },
  { key: 'exit-ramen-station',                label: 'Ramen Exit Station',               category: 'exit-stations' },
  { key: 'exit-popcorn-station',              label: 'Popcorn Station',                  category: 'exit-stations' },
  { key: 'exit-morning-glory',                label: 'Morning Glory Station',            category: 'exit-stations' },
  { key: 'exit-empanada-station',             label: 'Empanada Station',                 category: 'exit-stations' },
  // Dinner Plates
  { key: 'dinner-tomato-mozzarella',         label: 'Fresh Tomato & Mozzarella',    category: 'dinner-plates' },
  { key: 'dinner-bruschetta',                label: 'Bruschetta',                   category: 'dinner-plates' },
  { key: 'dinner-warm-mozzarella-salad',     label: 'Warm Mozzarella Salad',        category: 'dinner-plates' },
  { key: 'dinner-prime-rib',                 label: 'Prime Rib',                    category: 'dinner-plates' },
  { key: 'dinner-filet-mignon',              label: 'Filet Mignon',                 category: 'dinner-plates' },
  { key: 'dinner-ny-shell-steak',            label: 'New York Shell Steak',         category: 'dinner-plates' },
  { key: 'dinner-chateaubriand',             label: 'Chateaubriand',                category: 'dinner-plates' },
  { key: 'dinner-surf-and-turf',             label: 'Surf & Turf',                  category: 'dinner-plates' },
  { key: 'dinner-chicken-princess',          label: 'Chicken Princess',             category: 'dinner-plates' },
  { key: 'dinner-roast-duck',                label: "Roast Duck A L'Orange",        category: 'dinner-plates' },
  { key: 'dinner-chicken-romano',            label: 'Chicken Romano',               category: 'dinner-plates' },
  { key: 'dinner-chicken-piccata',           label: 'Chicken Piccata',              category: 'dinner-plates' },
  { key: 'dinner-chicken-cordon-bleu',       label: 'Chicken Cordon Bleu',          category: 'dinner-plates' },
  { key: 'dinner-salmon',                    label: 'Salmon',                       category: 'dinner-plates' },
  { key: 'dinner-striped-bass',              label: 'Striped Bass',                 category: 'dinner-plates' },
  { key: 'dinner-stuffed-flounder',          label: 'Stuffed Flounder',             category: 'dinner-plates' },
  { key: 'dinner-grilled-swordfish',         label: 'Grilled Swordfish',            category: 'dinner-plates' },
  { key: 'dinner-stuffed-shrimp',            label: 'Stuffed Shrimp',               category: 'dinner-plates' },
  { key: 'dinner-portabella-mushroom-tower', label: 'Portabella Mushroom Tower',    category: 'dinner-plates' },
  { key: 'dinner-wild-mushroom-risotto',     label: 'Wild Mushroom Risotto',        category: 'dinner-plates' },
  { key: 'dinner-stuffed-eggplant',          label: 'Stuffed Eggplant',             category: 'dinner-plates' },
  { key: 'dinner-pork-chop',                 label: 'Grilled Bone-In Pork Chop',   category: 'dinner-plates' },
  { key: 'dinner-veal-marsala',              label: 'Veal Marsala',                 category: 'dinner-plates' },
];

const TOUR_SECTION_LABELS: Record<string, string> = {
  'entrance-lobby':   'Entrance & Lobby',
  'bridal-suite':     'Bridal Suite',
  'indoor-ceremony':  'Indoor Ceremony',
  'outdoor-ceremony': 'Outdoor Ceremony',
  'indoor-cocktail':  'Indoor Cocktail Hour',
  'outdoor-cocktail': 'Outdoor Cocktail Hour',
  'main-ballroom':    'Main Ballroom',
  'sweetheart-table': 'Sweetheart Table',
  'guest-seating':    'Guest Seating',
  'dancefloor':       'Dance Floor',
  'entertainment':    'Entertainment',
  'main-bar':         'Main Bar',
  'balconies':        'Balconies',
  'photo-locations':  'Photo Locations',
};

const MENU_CATEGORY_LABELS: Record<MenuCategory, string> = {
  'cocktail-hour':  'Cocktail Hour',
  'enhancements':   'Enhancements',
  'dinner-plates':  'Dinner Plates',
  'exit-stations':  'Exit Stations',
};

const MENU_HERO_SECTIONS: Array<{
  key: string;
  label: string;
  description: string;
  pool: MenuCategory | 'large' | 'medium';
}> = [
  { key: 'page-hero',     label: 'Page Hero',          description: 'Full-width carousel at the top of the menu page', pool: 'large' },
  { key: 'cocktail-hour', label: 'Cocktail Hour',       description: 'Hero slider at the top of the cocktail hour section', pool: 'cocktail-hour' },
  { key: 'hot-gourmet',   label: 'Hot Gourmet Dishes',  description: 'Hero slider above the hot gourmet dishes section', pool: 'cocktail-hour' },
  { key: 'enhancements',  label: 'Enhancements',        description: 'Hero slider at the top of the enhancements section', pool: 'enhancements' },
  { key: 'ballroom',      label: 'Grand Ballroom',      description: 'Hero slider at the top of the ballroom reception section', pool: 'medium' },
  { key: 'exit-stations', label: 'Exit Stations',       description: 'Hero slider at the top of the exit stations section', pool: 'enhancements' },
];

const SITE_GROUP_LABELS: Record<SiteGroup, string> = {
  'page-heroes':    'Page Heroes',
  'homepage':       'Homepage Sections',
  'tour-previews':  'Tour Previews',
  'sections':       'Section CTAs',
};

/** All site-image slots (page heroes, homepage, tour previews, section CTAs) */
const SITE_IMAGE_SLOTS: Array<{
  key: string;
  label: string;
  group: SiteGroup;
  pool: string; // which image folder to pull from
}> = [
  // Page Heroes
  { key: 'hero-contact',  label: 'Contact Page Hero',  group: 'page-heroes',   pool: 'large' },
  { key: 'hero-tour',     label: 'Tour Page Hero',      group: 'page-heroes',   pool: 'large' },
  { key: 'hero-vendors',  label: 'Vendors Page Hero',   group: 'page-heroes',   pool: 'large' },
  { key: 'hero-rates',    label: 'Rates Page Hero',     group: 'page-heroes',   pool: 'medium' },
  // Homepage Sections
  { key: 'homepage-whyChooseUs', label: 'Why Choose Us Image', group: 'homepage', pool: 'large' },
  { key: 'homepage-venue',       label: 'Venue CTA Image',     group: 'homepage', pool: 'medium' },
  // Tour Previews
  { key: 'tourpreview-entrance-lobby',   label: 'Entrance & Lobby',         group: 'tour-previews', pool: 'medium' },
  { key: 'tourpreview-bridal-suite',     label: 'Bridal Suite',             group: 'tour-previews', pool: 'medium' },
  { key: 'tourpreview-indoor-ceremony',  label: 'Indoor Ceremony',          group: 'tour-previews', pool: 'medium' },
  { key: 'tourpreview-outdoor-ceremony', label: 'Outdoor Ceremony',         group: 'tour-previews', pool: 'medium' },
  { key: 'tourpreview-indoor-cocktail',  label: 'Indoor Cocktail Hour',     group: 'tour-previews', pool: 'medium' },
  { key: 'tourpreview-outdoor-cocktail', label: 'Outdoor Cocktail Hour',    group: 'tour-previews', pool: 'medium' },
  { key: 'tourpreview-main-ballroom',    label: 'Grand Ballroom',           group: 'tour-previews', pool: 'medium' },
  { key: 'tourpreview-sweetheart-table', label: 'Sweetheart Table',         group: 'tour-previews', pool: 'medium' },
  { key: 'tourpreview-guest-seating',    label: 'Guest Seating',            group: 'tour-previews', pool: 'medium' },
  { key: 'tourpreview-dancefloor',       label: 'Dance Floor',              group: 'tour-previews', pool: 'medium' },
  { key: 'tourpreview-entertainment',    label: 'Entertainment',            group: 'tour-previews', pool: 'medium' },
  { key: 'tourpreview-main-bar',         label: 'Main Bar',                 group: 'tour-previews', pool: 'medium' },
  { key: 'tourpreview-balconies',        label: 'Balconies',                group: 'tour-previews', pool: 'medium' },
  { key: 'tourpreview-photo-locations',  label: 'Photo Locations',          group: 'tour-previews', pool: 'medium' },
  // Section CTAs
  { key: 'section-vendors', label: 'Vendors Section CTA', group: 'sections', pool: 'medium' },
  { key: 'section-contact', label: 'Contact Section CTA', group: 'sections', pool: 'medium' },
  { key: 'section-menu',    label: 'Menu Section CTA',    group: 'sections', pool: 'medium' },
  { key: 'section-rates',   label: 'Rates Section CTA',   group: 'sections', pool: 'medium' },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ImageManagerPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('tour');

  // Tour state
  const [tourSections, setTourSections] = useState<Record<string, string[]>>(
    () => JSON.parse(JSON.stringify(imageConfig.tour))
  );
  // tourPreviews — tracks the single "star" preview per section (first image in the array)
  const [tourPreviews, setTourPreviews] = useState<Record<string, string>>(
    () => Object.fromEntries(
      Object.entries(imageConfig.tourPreviews).map(([k, v]) => [
        k,
        Array.isArray(v) ? (v[0] ?? '') : (v as unknown as string),
      ])
    )
  );
  const [selectedSection, setSelectedSection] = useState<string>('bridal-suite');

  // Menu state
  const [menuImages, setMenuImages] = useState<Record<string, string[]>>(
    () => JSON.parse(JSON.stringify(imageConfig.menuImages))
  );
  const [menuCategory, setMenuCategory] = useState<MenuCategory>('cocktail-hour');
  const [pickerOpen, setPickerOpen] = useState<string | null>(null); // slot key

  // Menu section heroes state
  const [menuSectionHeroes, setMenuSectionHeroes] = useState<Record<string, string[]>>(
    () => JSON.parse(JSON.stringify(imageConfig.menuSectionHeroes))
  );
  const [selectedHeroSection, setSelectedHeroSection] = useState<string>('page-hero');
  const [heroPickerOpen, setHeroPickerOpen] = useState(false);

  // Site Images state (page heroes, homepage sections, tour previews, section CTAs)
  const [siteImages, setSiteImages] = useState<Record<string, string[]>>(() => {
    const ph = imageConfig.pageHeroes as Record<string, string[]>;
    const hp = imageConfig.homepage as Record<string, string[]>;
    const tp = imageConfig.tourPreviews as Record<string, string[]>;
    const sc = imageConfig.sections as Record<string, string[]>;
    return {
      'hero-contact':  [...(ph.contact  ?? [])],
      'hero-tour':     [...(ph.tour     ?? [])],
      'hero-vendors':  [...(ph.vendors  ?? [])],
      'hero-rates':    [...(ph.rates    ?? [])],
      'homepage-whyChooseUs': [...(hp.whyChooseUs ?? [])],
      'homepage-venue':       [...(hp.venue       ?? [])],
      ...Object.fromEntries(
        Object.keys(tp).map(k => [`tourpreview-${k}`, [...(tp[k] ?? [])]])
      ),
      'section-vendors': [...(sc.vendors ?? [])],
      'section-contact': [...(sc.contact ?? [])],
      'section-menu':    [...(sc.menu    ?? [])],
      'section-rates':   [...(sc.rates   ?? [])],
    };
  });
  const [siteGroup, setSiteGroup] = useState<SiteGroup>('page-heroes');
  const [sitePickerOpen, setSitePickerOpen] = useState<string | null>(null);

  // Available images pool from API
  const [availableImages, setAvailableImages] = useState<Record<string, string[]>>({});
  const [poolSearch, setPoolSearch] = useState('');

  // Save state
  const [saveStatus, setSaveStatus] = useState<SaveStatus>('idle');
  const [hasChanges, setHasChanges] = useState(false);

  // Upload state
  const [uploadFiles, setUploadFiles] = useState<File[]>([]);
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>('idle');
  const [uploadResults, setUploadResults] = useState<{ saved: string[]; errors: string[] } | null>(null);

  useEffect(() => {
    setMounted(true);
    fetch('/api/admin/list-images')
      .then(r => r.json())
      .then(setAvailableImages)
      .catch(console.error);
  }, []);

  // Mark dirty whenever state changes after mount
  useEffect(() => {
    if (mounted) setHasChanges(true);
  }, [tourSections, tourPreviews, menuImages, menuSectionHeroes, siteImages]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Tour DnD ────────────────────────────────────────────────────────────────

  const onDragEnd = useCallback((result: DropResult) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    const fromPool = source.droppableId === 'pool';
    const toPool   = destination.droppableId === 'pool';
    const fromSection = !fromPool ? source.droppableId : null;
    const toSection   = !toPool   ? destination.droppableId : null;

    // Extract image path from draggableId  (format: "pool||/path" or "section||key||index")
    let imagePath = '';
    if (fromPool) {
      imagePath = draggableId.replace('pool||', '');
    } else if (fromSection) {
      const idx = parseInt(draggableId.split('||')[2], 10);
      imagePath = tourSections[fromSection][idx];
    }

    setTourSections(prev => {
      const next = { ...prev };

      if (fromSection) {
        // Remove from source section
        next[fromSection] = [...prev[fromSection]];
        next[fromSection].splice(source.index, 1);
      }

      if (toSection) {
        // Add to destination section
        if (next[toSection] === prev[toSection]) {
          next[toSection] = [...prev[toSection]];
        }
        next[toSection].splice(destination.index, 0, imagePath);
      }

      return next;
    });
  }, [tourSections]);

  const removeFromSection = (sectionKey: string, idx: number) => {
    setTourSections(prev => ({
      ...prev,
      [sectionKey]: prev[sectionKey].filter((_, i) => i !== idx),
    }));
  };

  const setPreview = (sectionKey: string, path: string) => {
    setTourPreviews(prev => ({ ...prev, [sectionKey]: path }));
    // Also promote this image to position 0 in the tour-preview slideshow slot
    setSiteImages(prev => {
      const key = `tourpreview-${sectionKey}`;
      const existing = prev[key] ?? [];
      const reordered = [path, ...existing.filter(p => p !== path)];
      return { ...prev, [key]: reordered };
    });
  };

  // ── Save ─────────────────────────────────────────────────────────────────────

  const handleSave = async () => {
    setSaveStatus('saving');
    try {
      // Reconstruct structured config from flat siteImages state
      const builtTourPreviews = Object.fromEntries(
        Object.keys(imageConfig.tourPreviews).map(k => [k, siteImages[`tourpreview-${k}`] ?? []])
      );
      const res = await fetch('/api/admin/save-config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          hero: imageConfig.hero,
          pageHeroes: {
            contact:  siteImages['hero-contact']  ?? [],
            tour:     siteImages['hero-tour']     ?? [],
            vendors:  siteImages['hero-vendors']  ?? [],
            rates:    siteImages['hero-rates']    ?? [],
          },
          homepage: {
            whyChooseUs: siteImages['homepage-whyChooseUs'] ?? [],
            venue:       siteImages['homepage-venue']       ?? [],
          },
          tour: tourSections,
          tourPreviews: builtTourPreviews,
          sections: {
            vendors: siteImages['section-vendors'] ?? [],
            contact: siteImages['section-contact'] ?? [],
            menu:    siteImages['section-menu']    ?? [],
            rates:   siteImages['section-rates']   ?? [],
          },
          menuImages,
          menuSectionHeroes,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSaveStatus('saved');
        setHasChanges(false);
        setTimeout(() => setSaveStatus('idle'), 3000);
      } else {
        setSaveStatus('error');
      }
    } catch {
      setSaveStatus('error');
    }
  };

  // ── Upload ───────────────────────────────────────────────────────────────────

  const handleUpload = async () => {
    if (uploadFiles.length === 0) return;
    setUploadStatus('uploading');
    setUploadResults(null);
    try {
      const formData = new FormData();
      uploadFiles.forEach(f => formData.append('files', f));
      const res = await fetch('/api/admin/upload', { method: 'POST', body: formData });
      const data = await res.json();
      if (data.success) {
        setUploadStatus('done');
        setUploadResults({ saved: data.saved, errors: data.errors ?? [] });
        setUploadFiles([]);
        // Refresh available images pool
        fetch('/api/admin/list-images')
          .then(r => r.json())
          .then(setAvailableImages)
          .catch(console.error);
      } else {
        setUploadStatus('error');
        setUploadResults({ saved: [], errors: [data.error ?? 'Unknown error'] });
      }
    } catch (err) {
      setUploadStatus('error');
      setUploadResults({ saved: [], errors: [String(err)] });
    }
  };

  // ── Filtered pool ─────────────────────────────────────────────────────────────

  const masterPool = (availableImages['all'] ?? []).filter(p =>
    poolSearch === '' || p.toLowerCase().includes(poolSearch.toLowerCase())
  );

  const menuSlotsForCategory = MENU_SLOTS.filter(s => s.category === menuCategory);

  const activeSectionMeta = MENU_HERO_SECTIONS.find(s => s.key === selectedHeroSection);
  const heroPool = masterPool;

  if (!mounted) {
    return (
      <div className="min-h-screen bg-stone-100 flex items-center justify-center">
        <p className="text-stone-500 text-sm tracking-widest">LOADING ADMIN...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-100 font-sans">
      {/* Header */}
      <header className="bg-stone-900 text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-lg">
        <div>
          <h1 className="text-lg font-light tracking-widest uppercase">Image Manager</h1>
          <p className="text-xs text-stone-400 mt-0.5">Riviera Waterfront Mansion — dev tool</p>
        </div>
        <div className="flex items-center gap-4">
          {hasChanges && saveStatus === 'idle' && (
            <span className="text-xs text-amber-400 tracking-wider">Unsaved changes</span>
          )}
          {saveStatus === 'saved' && (
            <span className="text-xs text-emerald-400 tracking-wider">Saved! Refresh site pages to see changes.</span>
          )}
          {saveStatus === 'error' && (
            <span className="text-xs text-red-400 tracking-wider">Save failed — check terminal</span>
          )}
          <button
            onClick={handleSave}
            disabled={saveStatus === 'saving' || !hasChanges}
            className="bg-amber-600 hover:bg-amber-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs tracking-widest px-5 py-2.5 transition-colors uppercase"
          >
            {saveStatus === 'saving' ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-stone-800 px-6 flex gap-0 border-b border-stone-700">
        {(['tour', 'menu', 'menu-heroes', 'site-images', 'upload'] as Tab[]).map(tab => (
          <button
            key={tab}
            onClick={() => { setActiveTab(tab); setPoolSearch(''); }}
            className={`px-6 py-3 text-xs tracking-widest uppercase transition-colors ${
              activeTab === tab
                ? 'text-amber-400 border-b-2 border-amber-400'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            {tab === 'tour' ? 'Tour Gallery'
              : tab === 'menu' ? 'Menu Items'
              : tab === 'menu-heroes' ? 'Menu Heroes'
              : tab === 'site-images' ? 'Site Images'
              : 'Upload Images'}
          </button>
        ))}
      </div>

      {/* ── TOUR TAB ─────────────────────────────────────────────────────────── */}
      {activeTab === 'tour' && (
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex h-[calc(100vh-7rem)]">

            {/* Left: Section Selector */}
            <aside className="w-52 bg-stone-800 overflow-y-auto flex-shrink-0">
              {Object.keys(TOUR_SECTION_LABELS).map(key => (
                <button
                  key={key}
                  onClick={() => setSelectedSection(key)}
                  className={`w-full text-left px-4 py-3 text-xs tracking-wider border-b border-stone-700 transition-colors ${
                    selectedSection === key
                      ? 'bg-amber-600 text-white'
                      : 'text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  <span className="block">{TOUR_SECTION_LABELS[key]}</span>
                  <span className="text-stone-500 text-[10px]">
                    {selectedSection === key ? '' : `${tourSections[key]?.length ?? 0} photos`}
                  </span>
                </button>
              ))}
            </aside>

            {/* Center: Current Section Images */}
            <main className="flex-1 overflow-y-auto bg-stone-50 p-6">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-medium tracking-widest uppercase text-stone-700">
                    {TOUR_SECTION_LABELS[selectedSection]}
                  </h2>
                  <p className="text-xs text-stone-400 mt-1">
                    {tourSections[selectedSection]?.length ?? 0} photos assigned. Drag from the pool on the right, or drag to reorder. Click the star to set the preview thumbnail.
                  </p>
                </div>
              </div>

              <Droppable droppableId={selectedSection} direction="horizontal">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`flex flex-wrap gap-3 min-h-40 p-4 rounded border-2 border-dashed transition-colors ${
                      snapshot.isDraggingOver
                        ? 'border-amber-400 bg-amber-50'
                        : 'border-stone-300 bg-white'
                    }`}
                  >
                    {(tourSections[selectedSection] ?? []).map((imgPath, idx) => (
                      <Draggable
                        key={`${selectedSection}||${idx}`}
                        draggableId={`${selectedSection}||${idx}`}
                        index={idx}
                      >
                        {(prov, snap) => (
                          <div
                            ref={prov.innerRef}
                            {...prov.draggableProps}
                            {...prov.dragHandleProps}
                            className={`relative group flex-shrink-0 ${snap.isDragging ? 'opacity-80 shadow-xl' : ''}`}
                          >
                            <div className="relative w-36 h-36 overflow-hidden rounded bg-stone-200">
                              <Image
                                src={imgPath}
                                alt=""
                                fill
                                className="object-cover object-center"
                                sizes="144px"
                              />
                            </div>
                            {/* Preview star */}
                            <button
                              onClick={() => setPreview(selectedSection, imgPath)}
                              title="Set as preview thumbnail"
                              className={`absolute top-1 left-1 w-6 h-6 rounded-full flex items-center justify-center text-xs shadow transition-opacity ${
                                tourPreviews[selectedSection] === imgPath
                                  ? 'bg-amber-500 text-white opacity-100'
                                  : 'bg-black/50 text-white opacity-0 group-hover:opacity-100'
                              }`}
                            >
                              ★
                            </button>
                            {/* Remove button */}
                            <button
                              onClick={() => removeFromSection(selectedSection, idx)}
                              title="Remove from section"
                              className="absolute top-1 right-1 w-6 h-6 rounded-full bg-red-600 text-white text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow"
                            >
                              ×
                            </button>
                            <p className="text-[9px] text-stone-400 mt-1 truncate w-36 text-center">
                              {imgPath.split('/').pop()}
                            </p>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                    {(tourSections[selectedSection]?.length ?? 0) === 0 && !snapshot.isDraggingOver && (
                      <div className="flex items-center justify-center w-full text-stone-300 text-xs tracking-wider">
                        Drag photos here from the pool →
                      </div>
                    )}
                  </div>
                )}
              </Droppable>
            </main>

            {/* Right: Image Pool */}
            <aside className="w-72 bg-white border-l border-stone-200 flex flex-col flex-shrink-0">
              <div className="p-3 border-b border-stone-200">
                <p className="text-xs tracking-widest text-stone-500 uppercase mb-2">Image Pool</p>
                <input
                  type="text"
                  placeholder="Search filenames..."
                  value={poolSearch}
                  onChange={e => setPoolSearch(e.target.value)}
                  className="w-full text-xs border border-stone-200 px-3 py-2 text-stone-700 focus:outline-none focus:border-amber-400"
                />
                <p className="text-[10px] text-stone-400 mt-1">{masterPool.length} photos in master pool</p>
              </div>

              <Droppable droppableId="pool" direction="vertical">
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="flex-1 overflow-y-auto p-3 grid grid-cols-2 gap-2 content-start"
                  >
                    {masterPool.map((imgPath, idx) => (
                      <Draggable
                        key={`pool||${imgPath}`}
                        draggableId={`pool||${imgPath}`}
                        index={idx}
                      >
                        {(prov, snap) => (
                          <div
                            ref={prov.innerRef}
                            {...prov.draggableProps}
                            {...prov.dragHandleProps}
                            className={`cursor-grab active:cursor-grabbing ${snap.isDragging ? 'opacity-75 shadow-lg' : ''}`}
                          >
                            <div className="relative w-full h-28 overflow-hidden rounded bg-stone-100">
                              <Image
                                src={imgPath}
                                alt=""
                                fill
                                className="object-cover object-center"
                                sizes="128px"
                              />
                            </div>
                            <p className="text-[8px] text-stone-400 mt-0.5 truncate text-center leading-tight">
                              {imgPath.split('/').pop()}
                            </p>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </aside>
          </div>
        </DragDropContext>
      )}

      {/* ── MENU TAB ─────────────────────────────────────────────────────────── */}
      {activeTab === 'menu' && (
        <div className="h-[calc(100vh-7rem)] overflow-y-auto bg-stone-50">
          <div className="p-6">
            {/* Category tabs */}
            <div className="flex gap-2 mb-4">
              {(Object.keys(MENU_CATEGORY_LABELS) as MenuCategory[]).map(cat => (
                <button
                  key={cat}
                  onClick={() => { setMenuCategory(cat); setPoolSearch(''); }}
                  className={`px-4 py-2 text-xs tracking-widest uppercase transition-colors ${
                    menuCategory === cat
                      ? 'bg-amber-600 text-white'
                      : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
                  }`}
                >
                  {MENU_CATEGORY_LABELS[cat]}
                </button>
              ))}
            </div>

            <p className="text-xs text-stone-400 mb-5 tracking-wider">
              Click any card to manage its photos. Each slot supports multiple images — they auto-cycle as a slideshow on the menu page.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {menuSlotsForCategory.map(slot => {
                const slotImages = menuImages[slot.key] ?? [];
                const firstImage = slotImages[0] ?? '';
                return (
                  <div
                    key={slot.key}
                    className={`group relative shadow-sm overflow-hidden ${
                      slotImages.length === 0
                        ? 'bg-rose-50 ring-2 ring-rose-300'
                        : 'bg-white'
                    }`}
                  >
                    <button
                      onClick={() => { setPickerOpen(slot.key); setPoolSearch(''); }}
                      className="w-full text-left"
                      title="Click to manage photos"
                    >
                      <div className={`relative h-36 overflow-hidden ${slotImages.length === 0 ? 'bg-rose-100' : 'bg-stone-100'}`}>
                        {firstImage ? (
                          <Image
                            src={firstImage}
                            alt={slot.label}
                            fill
                            className="object-cover object-center group-hover:opacity-75 transition-opacity"
                            sizes="200px"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                            <svg className="w-7 h-7 text-rose-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            <span className="text-[9px] font-semibold tracking-widest uppercase text-rose-400">Add Photo</span>
                          </div>
                        )}
                        {/* MISSING badge */}
                        {slotImages.length === 0 && (
                          <span className="absolute top-1.5 left-1.5 bg-rose-500 text-white text-[8px] font-bold px-1.5 py-0.5 leading-none tracking-widest uppercase">
                            Missing
                          </span>
                        )}
                        {/* Slideshow count badge */}
                        {slotImages.length > 1 && (
                          <span className="absolute top-1.5 right-1.5 bg-amber-600 text-white text-[9px] font-medium px-1.5 py-0.5 leading-none">
                            {slotImages.length}
                          </span>
                        )}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="bg-black/60 text-white text-[10px] px-3 py-1.5 tracking-widest uppercase">
                            {slotImages.length === 0 ? 'Add Photo' : 'Manage'}
                          </span>
                        </div>
                      </div>
                    </button>
                    <div className="p-2">
                      <p className={`text-[10px] font-medium leading-tight ${slotImages.length === 0 ? 'text-rose-700' : 'text-stone-700'}`}>
                        {slot.label}
                      </p>
                      <p className={`text-[8px] mt-0.5 ${slotImages.length === 0 ? 'text-rose-400' : 'text-stone-400'}`}>
                        {slotImages.length === 0
                          ? 'no photos — click to add'
                          : `${slotImages.length} photo${slotImages.length > 1 ? 's — slideshow' : ''}`}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ── MENU HEROES TAB ──────────────────────────────────────────────────── */}
      {activeTab === 'menu-heroes' && (
        <div className="flex h-[calc(100vh-7rem)]">

          {/* Left: Section Selector */}
          <aside className="w-56 bg-stone-800 overflow-y-auto flex-shrink-0">
            {MENU_HERO_SECTIONS.map(sec => (
              <button
                key={sec.key}
                onClick={() => { setSelectedHeroSection(sec.key); setPoolSearch(''); }}
                className={`w-full text-left px-4 py-3 text-xs tracking-wider border-b border-stone-700 transition-colors ${
                  selectedHeroSection === sec.key
                    ? 'bg-amber-600 text-white'
                    : 'text-stone-300 hover:bg-stone-700'
                }`}
              >
                <span className="block">{sec.label}</span>
                <span className={`text-[10px] ${selectedHeroSection === sec.key ? 'text-amber-200' : 'text-stone-500'}`}>
                  {menuSectionHeroes[sec.key]?.length ?? 0} slides
                </span>
              </button>
            ))}
          </aside>

          {/* Center: Current Section Slides */}
          <main className="flex-1 overflow-y-auto bg-stone-50 p-6">
            {activeSectionMeta && (
              <>
                <div className="mb-4">
                  <h2 className="text-sm font-medium tracking-widest uppercase text-stone-700">
                    {activeSectionMeta.label}
                  </h2>
                  <p className="text-xs text-stone-400 mt-1">{activeSectionMeta.description}</p>
                  <p className="text-xs text-stone-400 mt-0.5">
                    {menuSectionHeroes[selectedHeroSection]?.length ?? 0} slides. Click + to add from the pool. Click × to remove. Drag to reorder.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 min-h-40 p-4 bg-white border-2 border-dashed border-stone-300 rounded mb-4">
                  {(menuSectionHeroes[selectedHeroSection] ?? []).map((imgPath, idx) => (
                    <div key={`${imgPath}-${idx}`} className="relative group flex-shrink-0">
                      <div className="relative w-36 h-36 overflow-hidden rounded bg-stone-200">
                        <Image
                          src={imgPath}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="144px"
                        />
                      </div>
                      {/* Slide order badge */}
                      <span className="absolute top-1 left-1 bg-black/60 text-white text-[9px] px-1.5 py-0.5 rounded">
                        {idx + 1}
                      </span>
                      {/* Move left */}
                      {idx > 0 && (
                        <button
                          onClick={() => {
                            setMenuSectionHeroes(prev => {
                              const arr = [...(prev[selectedHeroSection] ?? [])];
                              [arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]];
                              return { ...prev, [selectedHeroSection]: arr };
                            });
                          }}
                          title="Move left"
                          className="absolute bottom-1 left-1 w-5 h-5 rounded-full bg-stone-700 text-white text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow"
                        >
                          ‹
                        </button>
                      )}
                      {/* Move right */}
                      {idx < (menuSectionHeroes[selectedHeroSection]?.length ?? 0) - 1 && (
                        <button
                          onClick={() => {
                            setMenuSectionHeroes(prev => {
                              const arr = [...(prev[selectedHeroSection] ?? [])];
                              [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
                              return { ...prev, [selectedHeroSection]: arr };
                            });
                          }}
                          title="Move right"
                          className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-stone-700 text-white text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow"
                        >
                          ›
                        </button>
                      )}
                      {/* Remove */}
                      <button
                        onClick={() => {
                          setMenuSectionHeroes(prev => ({
                            ...prev,
                            [selectedHeroSection]: (prev[selectedHeroSection] ?? []).filter((_, i) => i !== idx),
                          }));
                        }}
                        title="Remove slide"
                        className="absolute top-1 right-1 w-6 h-6 rounded-full bg-red-600 text-white text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow"
                      >
                        ×
                      </button>
                      <p className="text-[9px] text-stone-400 mt-1 truncate w-36 text-center">
                        {imgPath.split('/').pop()}
                      </p>
                    </div>
                  ))}

                  {(menuSectionHeroes[selectedHeroSection]?.length ?? 0) === 0 && (
                    <div className="flex items-center justify-center w-full text-stone-300 text-xs tracking-wider">
                      No slides assigned — click photos in the pool to add →
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setHeroPickerOpen(true)}
                  className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white text-xs tracking-widest uppercase px-4 py-2 transition-colors"
                >
                  + Add Slide from Pool
                </button>
              </>
            )}
          </main>

          {/* Right: Pool preview */}
          <aside className="w-72 bg-white border-l border-stone-200 flex flex-col flex-shrink-0">
            <div className="p-3 border-b border-stone-200">
              <p className="text-xs tracking-widest text-stone-500 uppercase mb-1">
                Master Image Pool
              </p>
              <input
                type="text"
                placeholder="Search filenames..."
                value={poolSearch}
                onChange={e => setPoolSearch(e.target.value)}
                className="w-full text-xs border border-stone-200 px-3 py-2 text-stone-700 focus:outline-none focus:border-amber-400"
              />
              <p className="text-[10px] text-stone-400 mt-1">{heroPool.length} photos — click to add to slider</p>

            </div>
            <div className="flex-1 overflow-y-auto p-3 grid grid-cols-2 gap-2 content-start">
              {heroPool.map(imgPath => (
                <button
                  key={imgPath}
                  onClick={() => {
                    setMenuSectionHeroes(prev => ({
                      ...prev,
                      [selectedHeroSection]: [...(prev[selectedHeroSection] ?? []), imgPath],
                    }));
                  }}
                  className="group text-left"
                  title="Add to slider"
                >
                  <div className="relative w-full h-28 overflow-hidden rounded bg-stone-100 ring-2 ring-transparent group-hover:ring-amber-400 transition-all">
                    <Image
                      src={imgPath}
                      alt=""
                      fill
                      className="object-cover object-center"
                      sizes="128px"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                      <span className="text-white text-xs tracking-widest">+ ADD</span>
                    </div>
                  </div>
                  <p className="text-[8px] text-stone-400 mt-0.5 truncate text-center">
                    {imgPath.split('/').pop()}
                  </p>
                </button>
              ))}
            </div>
          </aside>
        </div>
      )}

      {/* ── Hero Picker Modal ─────────────────────────────────────────────────── */}
      {heroPickerOpen && activeSectionMeta && (
        <div
          className="fixed inset-0 bg-black/50 z-40 flex items-end sm:items-center justify-center p-4"
          onClick={() => setHeroPickerOpen(false)}
        >
          <div
            className="bg-white w-full max-w-3xl max-h-[80vh] overflow-y-auto rounded shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-stone-200 px-4 py-3 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-stone-700">
                  Add slide to: {activeSectionMeta.label}
                </p>
                <p className="text-xs text-stone-400 mt-0.5">
                  Click any photo to add it to the slider
                </p>
              </div>
              <button onClick={() => setHeroPickerOpen(false)} className="text-stone-400 hover:text-stone-700 text-2xl leading-none">
                ×
              </button>
            </div>
            <div className="p-4 grid grid-cols-3 sm:grid-cols-4 gap-3">
              {masterPool.map(imgPath => (
                <button
                  key={imgPath}
                  onClick={() => {
                    setMenuSectionHeroes(prev => ({
                      ...prev,
                      [selectedHeroSection]: [...(prev[selectedHeroSection] ?? []), imgPath],
                    }));
                    setHeroPickerOpen(false);
                  }}
                  className="group text-left"
                >
                  <div className="relative h-28 overflow-hidden rounded bg-stone-100 ring-2 ring-transparent group-hover:ring-amber-400 transition-all">
                    <Image src={imgPath} alt="" fill className="object-cover object-center" sizes="160px" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                      <span className="text-white text-xs tracking-widest">+ ADD</span>
                    </div>
                  </div>
                  <p className="text-[8px] text-stone-400 mt-1 truncate text-center">{imgPath.split('/').pop()}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── SITE IMAGES TAB ──────────────────────────────────────────────────── */}
      {activeTab === 'site-images' && (
        <div className="h-[calc(100vh-7rem)] overflow-y-auto bg-stone-50">
          <div className="p-6">
            {/* Group tabs */}
            <div className="flex flex-wrap gap-2 mb-4">
              {(Object.keys(SITE_GROUP_LABELS) as SiteGroup[]).map(g => (
                <button
                  key={g}
                  onClick={() => { setSiteGroup(g); setPoolSearch(''); }}
                  className={`px-4 py-2 text-xs tracking-widest uppercase transition-colors ${
                    siteGroup === g
                      ? 'bg-amber-600 text-white'
                      : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
                  }`}
                >
                  {SITE_GROUP_LABELS[g]}
                </button>
              ))}
            </div>

            <p className="text-xs text-stone-400 mb-5 tracking-wider">
              Every image slot on the site. Click any card to manage its photos. Multiple photos auto-cycle as a slideshow.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {SITE_IMAGE_SLOTS.filter(s => s.group === siteGroup).map(slot => {
                const slotImages = siteImages[slot.key] ?? [];
                const firstImage = slotImages[0] ?? '';
                return (
                  <div key={slot.key} className="group relative bg-white shadow-sm overflow-hidden">
                    <button
                      onClick={() => { setSitePickerOpen(slot.key); setPoolSearch(''); }}
                      className="w-full text-left"
                      title="Click to manage photos"
                    >
                      <div className="relative h-36 bg-stone-100 overflow-hidden">
                        {firstImage ? (
                          <Image
                            src={firstImage}
                            alt={slot.label}
                            fill
                            className="object-cover object-center group-hover:opacity-75 transition-opacity"
                            sizes="200px"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center text-stone-300 gap-1">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 3h18M3 21h18" />
                            </svg>
                            <span className="text-[8px] tracking-widest uppercase">No photo</span>
                          </div>
                        )}
                        {slotImages.length > 1 && (
                          <span className="absolute top-1.5 right-1.5 bg-amber-600 text-white text-[9px] font-medium px-1.5 py-0.5 leading-none">
                            {slotImages.length}
                          </span>
                        )}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="bg-black/60 text-white text-[10px] px-3 py-1.5 tracking-widest uppercase">
                            Manage
                          </span>
                        </div>
                      </div>
                    </button>
                    <div className="p-2">
                      <p className="text-[10px] font-medium text-stone-700 leading-tight">{slot.label}</p>
                      <p className="text-[8px] text-stone-400 mt-0.5">
                        {slotImages.length === 0
                          ? 'no photos'
                          : `${slotImages.length} photo${slotImages.length > 1 ? 's — slideshow' : ''}`}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ── Site Image Photo Manager Modal ───────────────────────────────────── */}
      {sitePickerOpen && (() => {
        const slotMeta = SITE_IMAGE_SLOTS.find(s => s.key === sitePickerOpen)!;
        const poolImages = masterPool;
        return (
          <div
            className="fixed inset-0 bg-black/60 z-40 flex items-center justify-center p-4"
            onClick={() => setSitePickerOpen(null)}
          >
            <div
              className="bg-white w-full max-w-3xl max-h-[90vh] flex flex-col rounded shadow-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="bg-stone-900 text-white px-5 py-4 flex items-center justify-between flex-shrink-0">
                <div>
                  <p className="text-sm font-light tracking-widest uppercase">{slotMeta.label}</p>
                  <p className="text-xs text-stone-400 mt-0.5">Photos auto-cycle as a slideshow on the live site</p>
                </div>
                <button onClick={() => setSitePickerOpen(null)} className="text-stone-400 hover:text-white text-2xl leading-none ml-4">×</button>
              </div>

              <div className="flex-1 overflow-y-auto">
                {/* Current photos */}
                <div className="px-5 pt-5 pb-4 border-b border-stone-100">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs tracking-widest text-stone-500 uppercase">
                      Assigned ({(siteImages[sitePickerOpen] ?? []).length})
                    </p>
                    {(siteImages[sitePickerOpen] ?? []).length > 0 && (
                      <button
                        onClick={() => setSiteImages(prev => ({ ...prev, [sitePickerOpen!]: [] }))}
                        className="text-[10px] text-red-400 hover:text-red-600 tracking-wider"
                      >
                        Clear all
                      </button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 min-h-16 p-3 bg-stone-50 border border-stone-200 rounded">
                    {(siteImages[sitePickerOpen] ?? []).length === 0 ? (
                      <p className="text-xs text-stone-300 tracking-wider m-auto">No photos yet — click below to add</p>
                    ) : (
                      (siteImages[sitePickerOpen] ?? []).map((src, idx) => (
                        <div key={`${src}-${idx}`} className="relative group flex-shrink-0">
                          <div className="relative w-20 h-20 overflow-hidden rounded bg-stone-200">
                            <Image src={src} alt="" fill className="object-cover" sizes="80px" />
                          </div>
                          <span className="absolute top-0.5 left-0.5 bg-black/50 text-white text-[8px] px-1 rounded leading-none py-0.5">
                            {idx + 1}
                          </span>
                          <button
                            onClick={() => setSiteImages(prev => ({
                              ...prev,
                              [sitePickerOpen!]: prev[sitePickerOpen!].filter((_, i) => i !== idx),
                            }))}
                            className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-600 text-white text-xs flex items-center justify-center shadow opacity-0 group-hover:opacity-100 transition-opacity"
                          >×</button>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Pool */}
                <div className="px-5 py-4">
                  <div className="flex items-center justify-between mb-3">
                  <p className="text-xs tracking-widest text-stone-500 uppercase">
                    Add from Master Pool
                  </p>
                    <input
                      type="text"
                      placeholder="Search filenames..."
                      value={poolSearch}
                      onChange={e => setPoolSearch(e.target.value)}
                      className="text-xs border border-stone-200 px-2 py-1 text-stone-700 focus:outline-none focus:border-amber-400 w-44"
                    />
                  </div>
                  <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                    {poolImages.map(imgPath => {
                      const added = (siteImages[sitePickerOpen] ?? []).includes(imgPath);
                      return (
                        <button
                          key={imgPath}
                          onClick={() => {
                            if (!added) {
                              setSiteImages(prev => ({
                                ...prev,
                                [sitePickerOpen!]: [...(prev[sitePickerOpen!] ?? []), imgPath],
                              }));
                            }
                          }}
                          disabled={added}
                          className={`group text-left ${added ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                          <div className={`relative w-full h-24 overflow-hidden rounded bg-stone-100 ring-2 transition-all ${
                            added ? 'ring-amber-400' : 'ring-transparent group-hover:ring-amber-400'
                          }`}>
                            <Image src={imgPath} alt="" fill className="object-cover object-center" sizes="120px" />
                            {added ? (
                              <div className="absolute inset-0 flex items-center justify-center bg-amber-400/20">
                                <span className="text-amber-700 text-sm">✓</span>
                              </div>
                            ) : (
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                                <span className="text-white text-xs tracking-widest">+ ADD</span>
                              </div>
                            )}
                          </div>
                          <p className="text-[8px] text-stone-400 mt-0.5 truncate text-center">{imgPath.split('/').pop()}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="border-t border-stone-200 px-5 py-3 flex items-center justify-between bg-stone-50 flex-shrink-0">
                <p className="text-xs text-stone-400">
                  {(siteImages[sitePickerOpen] ?? []).length} photo{(siteImages[sitePickerOpen] ?? []).length !== 1 ? 's' : ''} assigned
                </p>
                <button
                  onClick={() => setSitePickerOpen(null)}
                  className="bg-stone-900 hover:bg-stone-700 text-white text-xs tracking-widest uppercase px-5 py-2 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        );
      })()}

      {/* ── UPLOAD TAB ───────────────────────────────────────────────────────── */}
      {activeTab === 'upload' && (
        <div className="h-[calc(100vh-7rem)] overflow-y-auto bg-stone-50">
          <div className="p-6 max-w-2xl mx-auto">
            <h2 className="text-sm font-medium tracking-widest uppercase text-stone-700 mb-1">Upload to Master Pool</h2>
            <p className="text-xs text-stone-400 mb-2 tracking-wider">
              All uploaded images land in one master pool — available across every section of the site.
            </p>
            <div className="flex items-center gap-3 mb-6 bg-amber-50 border border-amber-200 px-4 py-3">
              <svg className="w-4 h-4 text-amber-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
              <p className="text-[11px] text-amber-800 tracking-wider">
                Images are auto-optimized on upload — resized to max 1920px wide, compressed to 82% quality, EXIF auto-rotated.
              </p>
            </div>

            {/* File drop zone */}
            <div className="mb-6">
              <label className="block w-full border-2 border-dashed border-stone-300 bg-white hover:border-amber-400 hover:bg-amber-50 transition-colors cursor-pointer p-10 text-center">
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png,.webp"
                  multiple
                  className="sr-only"
                  onChange={e => {
                    const selected = Array.from(e.target.files ?? []);
                    setUploadFiles(selected);
                    setUploadStatus('idle');
                    setUploadResults(null);
                  }}
                />
                {uploadFiles.length === 0 ? (
                  <div className="text-stone-400">
                    <svg className="w-10 h-10 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                    <p className="text-xs tracking-widest uppercase">Click to select images</p>
                    <p className="text-[10px] text-stone-300 mt-1">JPG, PNG, WebP — drop as many as you like</p>
                  </div>
                ) : (
                  <div className="text-stone-600">
                    <p className="text-sm font-medium">{uploadFiles.length} file{uploadFiles.length !== 1 ? 's' : ''} ready</p>
                    <p className="text-xs text-stone-400 mt-1">Will be optimized and added to master pool</p>
                    <p className="text-[10px] text-stone-300 mt-2">Click to change selection</p>
                  </div>
                )}
              </label>
            </div>

            {/* File list preview */}
            {uploadFiles.length > 0 && (
              <div className="mb-6 bg-white border border-stone-200 divide-y divide-stone-100">
                {uploadFiles.map(f => (
                  <div key={f.name} className="flex items-center justify-between px-4 py-2.5">
                    <span className="text-xs text-stone-600 truncate flex-1">{f.name}</span>
                    <span className="text-[10px] text-stone-400 ml-4 flex-shrink-0">
                      {(f.size / 1024 / 1024).toFixed(1)} MB
                    </span>
                  </div>
                ))}
                <div className="px-4 py-2 bg-stone-50 flex items-center justify-between">
                  <span className="text-[10px] text-stone-400">
                    Total: {(uploadFiles.reduce((s, f) => s + f.size, 0) / 1024 / 1024).toFixed(1)} MB
                  </span>
                  <button
                    onClick={() => { setUploadFiles([]); setUploadStatus('idle'); setUploadResults(null); }}
                    className="text-[10px] text-red-400 hover:text-red-600 tracking-wider"
                  >
                    Clear
                  </button>
                </div>
              </div>
            )}

            {/* Upload button */}
            <button
              onClick={handleUpload}
              disabled={uploadFiles.length === 0 || uploadStatus === 'uploading'}
              className="w-full bg-amber-600 hover:bg-amber-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs tracking-widest uppercase py-3.5 transition-colors"
            >
              {uploadStatus === 'uploading'
                ? `Optimizing & uploading ${uploadFiles.length} image${uploadFiles.length !== 1 ? 's' : ''}...`
                : `Optimize & upload to master pool`}
            </button>

            {/* Results */}
            {uploadResults && (
              <div className="mt-6 space-y-3">
                {uploadResults.saved.length > 0 && (
                  <div className="bg-emerald-50 border border-emerald-200 p-4">
                    <p className="text-xs font-medium text-emerald-800 tracking-wider mb-2">
                      {uploadResults.saved.length} image{uploadResults.saved.length !== 1 ? 's' : ''} optimized and uploaded
                    </p>
                    <div className="space-y-1">
                      {uploadResults.saved.map(p => (
                        <p key={p} className="text-[10px] text-emerald-700 font-mono">{p}</p>
                      ))}
                    </div>
                  </div>
                )}
                {uploadResults.errors.length > 0 && (
                  <div className="bg-red-50 border border-red-200 p-4">
                    <p className="text-xs font-medium text-red-800 tracking-wider mb-2">
                      {uploadResults.errors.length} error{uploadResults.errors.length !== 1 ? 's' : ''}
                    </p>
                    <div className="space-y-1">
                      {uploadResults.errors.map((e, i) => (
                        <p key={i} className="text-[10px] text-red-700">{e}</p>
                      ))}
                    </div>
                  </div>
                )}
                {uploadResults.saved.length > 0 && (
                  <p className="text-xs text-stone-500 tracking-wider">
                    Images are now in the master pool — switch to any tab to assign them to sections.
                  </p>
                )}
              </div>
            )}

            {/* Current pool count */}
            <div className="mt-8 pt-6 border-t border-stone-200">
              <p className="text-xs tracking-widest text-stone-500 uppercase mb-3">Current Master Pool</p>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-white border border-stone-200 p-3">
                  <p className="text-lg font-light text-stone-800">{(availableImages['pool'] ?? []).length}</p>
                  <p className="text-[10px] text-stone-400 tracking-wider mt-0.5">New uploads</p>
                </div>
                <div className="bg-white border border-stone-200 p-3">
                  <p className="text-lg font-light text-stone-800">{(availableImages['all'] ?? []).length}</p>
                  <p className="text-[10px] text-stone-400 tracking-wider mt-0.5">Total images</p>
                </div>
                <div className="bg-white border border-stone-200 p-3">
                  <p className="text-lg font-light text-stone-800">
                    {(['large','medium','cocktail-hour','enhancements','dinner-plates'] as const)
                      .reduce((s, k) => s + (availableImages[k]?.length ?? 0), 0)}
                  </p>
                  <p className="text-[10px] text-stone-400 tracking-wider mt-0.5">Legacy folders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Menu Item Photo Manager Modal ────────────────────────────────────── */}
      {pickerOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 flex items-center justify-center p-4"
          onClick={() => setPickerOpen(null)}
        >
          <div
            className="bg-white w-full max-w-3xl max-h-[90vh] flex flex-col rounded shadow-2xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="bg-stone-900 text-white px-5 py-4 flex items-center justify-between flex-shrink-0">
              <div>
                <p className="text-sm font-light tracking-widest uppercase">
                  {MENU_SLOTS.find(s => s.key === pickerOpen)?.label}
                </p>
                <p className="text-xs text-stone-400 mt-0.5">
                  Photos auto-cycle as a slideshow — add as many as you like
                </p>
              </div>
              <button
                onClick={() => setPickerOpen(null)}
                className="text-stone-400 hover:text-white text-2xl leading-none ml-4"
              >
                ×
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {/* Current assigned photos */}
              <div className="px-5 pt-5 pb-4 border-b border-stone-100">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs tracking-widest text-stone-500 uppercase">
                    Assigned ({(menuImages[pickerOpen] ?? []).length})
                  </p>
                  {(menuImages[pickerOpen] ?? []).length > 0 && (
                    <button
                      onClick={() => setMenuImages(prev => ({ ...prev, [pickerOpen!]: [] }))}
                      className="text-[10px] text-red-400 hover:text-red-600 tracking-wider"
                    >
                      Clear all
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 min-h-16 p-3 bg-stone-50 border border-stone-200 rounded">
                  {(menuImages[pickerOpen] ?? []).length === 0 ? (
                    <p className="text-xs text-stone-300 tracking-wider m-auto">
                      No photos yet — click photos below to add
                    </p>
                  ) : (
                    (menuImages[pickerOpen] ?? []).map((src, idx) => (
                      <div key={`${src}-${idx}`} className="relative group flex-shrink-0">
                        <div className="relative w-20 h-20 overflow-hidden rounded bg-stone-200">
                          <Image src={src} alt="" fill className="object-cover" sizes="80px" />
                        </div>
                        <span className="absolute top-0.5 left-0.5 bg-black/50 text-white text-[8px] px-1 rounded leading-none py-0.5">
                          {idx + 1}
                        </span>
                        <button
                          onClick={() => {
                            setMenuImages(prev => ({
                              ...prev,
                              [pickerOpen!]: prev[pickerOpen!].filter((_, i) => i !== idx),
                            }));
                          }}
                          title="Remove"
                          className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-600 text-white text-xs flex items-center justify-center shadow opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          ×
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Pool to add from */}
              <div className="px-5 py-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs tracking-widest text-stone-500 uppercase">
                    Add from Master Pool
                  </p>
                  <input
                    type="text"
                    placeholder="Search filenames..."
                    value={poolSearch}
                    onChange={e => setPoolSearch(e.target.value)}
                    className="text-xs border border-stone-200 px-2 py-1 text-stone-700 focus:outline-none focus:border-amber-400 w-44"
                  />
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                  {masterPool.map(imgPath => {
                      const added = (menuImages[pickerOpen] ?? []).includes(imgPath);
                      return (
                        <button
                          key={imgPath}
                          onClick={() => {
                            if (!added) {
                              setMenuImages(prev => ({
                                ...prev,
                                [pickerOpen!]: [...(prev[pickerOpen!] ?? []), imgPath],
                              }));
                            }
                          }}
                          disabled={added}
                          className={`group text-left ${added ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                          title={added ? 'Already added' : 'Click to add'}
                        >
                          <div className={`relative w-full h-24 overflow-hidden rounded bg-stone-100 ring-2 transition-all ${
                            added ? 'ring-amber-400' : 'ring-transparent group-hover:ring-amber-400'
                          }`}>
                            <Image src={imgPath} alt="" fill className="object-cover object-center" sizes="120px" />
                            {added ? (
                              <div className="absolute inset-0 flex items-center justify-center bg-amber-400/20">
                                <span className="text-amber-700 text-sm">✓</span>
                              </div>
                            ) : (
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                                <span className="text-white text-xs tracking-widest">+ ADD</span>
                              </div>
                            )}
                          </div>
                          <p className="text-[8px] text-stone-400 mt-0.5 truncate text-center">
                            {imgPath.split('/').pop()}
                          </p>
                        </button>
                      );
                    })}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-stone-200 px-5 py-3 flex items-center justify-between bg-stone-50 flex-shrink-0">
              <p className="text-xs text-stone-400">
                {(menuImages[pickerOpen] ?? []).length} photo{(menuImages[pickerOpen] ?? []).length !== 1 ? 's' : ''} assigned
              </p>
              <button
                onClick={() => setPickerOpen(null)}
                className="bg-stone-900 hover:bg-stone-700 text-white text-xs tracking-widest uppercase px-5 py-2 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
