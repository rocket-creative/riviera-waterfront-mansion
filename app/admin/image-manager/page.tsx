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

type Tab = 'tour' | 'menu';
type MenuCategory = 'cocktail-hour' | 'enhancements' | 'dinner-plates';
type SaveStatus = 'idle' | 'saving' | 'saved' | 'error';

// Static metadata for menu slots — labels & which folder they pull from
const MENU_SLOTS: Array<{
  key: string;
  label: string;
  category: MenuCategory;
}> = [
  // Cocktail Hour
  { key: 'cocktail-hero-cold-displays',    label: 'Hero: Cold Displays',         category: 'cocktail-hour' },
  { key: 'cocktail-hero-carving-station',  label: 'Hero: Carving Station',        category: 'cocktail-hour' },
  { key: 'cocktail-hero-hot-gourmet',      label: 'Hero: Hot Gourmet',            category: 'cocktail-hour' },
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
  { key: 'cocktail-kielbasa-sauerkraut',   label: 'Kielbasa and Sauerkraut',      category: 'cocktail-hour' },
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
  { key: 'enhance-donut-wall-close',         label: 'Donut Wall (Close-up)',         category: 'enhancements' },
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
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function ImageManagerPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('tour');

  // Tour state
  const [tourSections, setTourSections] = useState<Record<string, string[]>>(
    () => JSON.parse(JSON.stringify(imageConfig.tour))
  );
  const [tourPreviews, setTourPreviews] = useState<Record<string, string>>(
    () => ({ ...imageConfig.tourPreviews })
  );
  const [selectedSection, setSelectedSection] = useState<string>('bridal-suite');

  // Menu state
  const [menuImages, setMenuImages] = useState<Record<string, string>>(
    () => ({ ...imageConfig.menuImages })
  );
  const [menuCategory, setMenuCategory] = useState<MenuCategory>('cocktail-hour');
  const [pickerOpen, setPickerOpen] = useState<string | null>(null); // slot key

  // Available images pool from API
  const [availableImages, setAvailableImages] = useState<Record<string, string[]>>({});
  const [poolSearch, setPoolSearch] = useState('');

  // Save state
  const [saveStatus, setSaveStatus] = useState<SaveStatus>('idle');
  const [hasChanges, setHasChanges] = useState(false);

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
  }, [tourSections, tourPreviews, menuImages]); // eslint-disable-line react-hooks/exhaustive-deps

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
  };

  // ── Save ─────────────────────────────────────────────────────────────────────

  const handleSave = async () => {
    setSaveStatus('saving');
    try {
      const res = await fetch('/api/admin/save-config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          hero: imageConfig.hero,
          homepage: imageConfig.homepage,
          tour: tourSections,
          tourPreviews,
          sections: imageConfig.sections,
          menuImages,
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

  // ── Filtered pool ─────────────────────────────────────────────────────────────

  const mediumPool = (availableImages['medium'] ?? []).filter(p =>
    poolSearch === '' || p.toLowerCase().includes(poolSearch.toLowerCase())
  );

  const menuPool = (availableImages[menuCategory] ?? []).filter(p =>
    poolSearch === '' || p.toLowerCase().includes(poolSearch.toLowerCase())
  );

  const menuSlotsForCategory = MENU_SLOTS.filter(s => s.category === menuCategory);

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
        {(['tour', 'menu'] as Tab[]).map(tab => (
          <button
            key={tab}
            onClick={() => { setActiveTab(tab); setPoolSearch(''); }}
            className={`px-6 py-3 text-xs tracking-widest uppercase transition-colors ${
              activeTab === tab
                ? 'text-amber-400 border-b-2 border-amber-400'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            {tab === 'tour' ? 'Virtual Tour Gallery' : 'Menu Items'}
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
                                className="object-cover"
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
                <p className="text-[10px] text-stone-400 mt-1">{mediumPool.length} photos</p>
              </div>

              <Droppable droppableId="pool" direction="vertical">
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="flex-1 overflow-y-auto p-3 grid grid-cols-2 gap-2 content-start"
                  >
                    {mediumPool.map((imgPath, idx) => (
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
                            <div className="relative w-full aspect-square overflow-hidden rounded bg-stone-100">
                              <Image
                                src={imgPath}
                                alt=""
                                fill
                                className="object-cover"
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
        <div className="flex h-[calc(100vh-7rem)]">

          {/* Left: Category tabs + menu items */}
          <main className="flex-1 overflow-y-auto bg-stone-50 p-6">
            {/* Category tabs */}
            <div className="flex gap-2 mb-6">
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

            <p className="text-xs text-stone-400 mb-4 tracking-wider">
              Click any photo to replace it with an image from the pool on the right. The star sets the pool filter.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {menuSlotsForCategory.map(slot => {
                const currentSrc = menuImages[slot.key];
                return (
                  <div key={slot.key} className="group relative bg-white rounded shadow-sm overflow-hidden">
                    <button
                      onClick={() => { setPickerOpen(slot.key); setPoolSearch(''); }}
                      className="w-full text-left"
                      title="Click to change photo"
                    >
                      <div className="relative aspect-square bg-stone-100 overflow-hidden">
                        {currentSrc ? (
                          <Image
                            src={currentSrc}
                            alt={slot.label}
                            fill
                            className="object-cover group-hover:opacity-75 transition-opacity"
                            sizes="200px"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-stone-300 text-xs">
                            No image
                          </div>
                        )}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="bg-black/60 text-white text-[10px] px-2 py-1 rounded tracking-wider">
                            CHANGE
                          </span>
                        </div>
                      </div>
                    </button>
                    <div className="p-2">
                      <p className="text-[10px] font-medium text-stone-700 leading-tight">{slot.label}</p>
                      <p className="text-[8px] text-stone-400 mt-0.5 truncate">
                        {currentSrc ? currentSrc.split('/').pop() : 'unset'}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </main>

          {/* Right: Image Pool for menu */}
          <aside className="w-72 bg-white border-l border-stone-200 flex flex-col flex-shrink-0">
            <div className="p-3 border-b border-stone-200">
              <p className="text-xs tracking-widest text-stone-500 uppercase mb-2">
                {MENU_CATEGORY_LABELS[menuCategory]} Pool
              </p>
              <input
                type="text"
                placeholder="Search filenames..."
                value={poolSearch}
                onChange={e => setPoolSearch(e.target.value)}
                className="w-full text-xs border border-stone-200 px-3 py-2 text-stone-700 focus:outline-none focus:border-amber-400"
              />
              <p className="text-[10px] text-stone-400 mt-1">{menuPool.length} photos</p>
              {pickerOpen && (
                <p className="text-[10px] text-amber-600 mt-1 tracking-wider">
                  Click a photo to assign it to: {MENU_SLOTS.find(s => s.key === pickerOpen)?.label}
                </p>
              )}
            </div>

            <div className="flex-1 overflow-y-auto p-3 grid grid-cols-2 gap-2 content-start">
              {menuPool.map(imgPath => (
                <button
                  key={imgPath}
                  onClick={() => {
                    if (pickerOpen) {
                      setMenuImages(prev => ({ ...prev, [pickerOpen]: imgPath }));
                      setPickerOpen(null);
                    }
                  }}
                  className={`text-left ${pickerOpen ? 'cursor-pointer ring-2 ring-transparent hover:ring-amber-400 rounded' : 'cursor-default'}`}
                >
                  <div className="relative w-full aspect-square overflow-hidden rounded bg-stone-100">
                    <Image
                      src={imgPath}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
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

      {/* ── Picker Overlay (Menu) ─────────────────────────────────────────────── */}
      {pickerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 flex items-end sm:items-center justify-center p-4"
          onClick={() => setPickerOpen(null)}
        >
          <div
            className="bg-white w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-stone-200 px-4 py-3 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-stone-700">
                  Choose photo for: {MENU_SLOTS.find(s => s.key === pickerOpen)?.label}
                </p>
                <p className="text-xs text-stone-400 mt-0.5">
                  Click any photo to assign it
                </p>
              </div>
              <button
                onClick={() => setPickerOpen(null)}
                className="text-stone-400 hover:text-stone-700 text-2xl leading-none"
              >
                ×
              </button>
            </div>
            <div className="p-4 grid grid-cols-3 sm:grid-cols-4 gap-3">
              {(availableImages[menuCategory] ?? []).map(imgPath => (
                <button
                  key={imgPath}
                  onClick={() => {
                    setMenuImages(prev => ({ ...prev, [pickerOpen!]: imgPath }));
                    setPickerOpen(null);
                  }}
                  className="group text-left"
                >
                  <div className="relative aspect-square overflow-hidden rounded bg-stone-100 ring-2 ring-transparent group-hover:ring-amber-400 transition-all">
                    <Image
                      src={imgPath}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="160px"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                      <span className="text-white text-xs tracking-widest">SELECT</span>
                    </div>
                  </div>
                  <p className="text-[8px] text-stone-400 mt-1 truncate text-center">
                    {imgPath.split('/').pop()}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
