import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroCarousel from '../components/HeroCarousel';
import MenuImage from '../components/MenuImage';
import Link from 'next/link';
import { imageConfig } from '../lib/imageConfig';

const m = imageConfig.menuImages as Record<string, string[]>;
const h = imageConfig.menuSectionHeroes;

function hasImages(slot?: string) {
  return !!(slot && m[slot] && m[slot].length > 0);
}

// Standard card with a photo, falls back to text-only when no image is available
function Item({ slot, alt, name, desc }: { slot?: string; alt: string; name: string; desc: string }) {
  if (!hasImages(slot)) return <TextItem name={name} desc={desc} />;
  return (
    <div>
      <div className="h-44 relative overflow-hidden mb-2 bg-stone-100">
        <MenuImage images={m[slot!]} alt={alt} />
      </div>
      <p className="text-xs tracking-widest uppercase text-riviera-gold mb-0.5 leading-snug">{name}</p>
      <p className="text-[11px] font-light text-riviera-text/60 leading-relaxed">{desc}</p>
    </div>
  );
}

// Printed-menu style item: serif name with small italic description below
function TextItem({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="text-center py-4 px-4">
      <p className="font-cormorant text-xl md:text-2xl font-light text-riviera-text mb-1.5 leading-tight">{name}</p>
      <p className="text-xs md:text-sm font-light text-riviera-text/65 italic leading-relaxed max-w-sm mx-auto">{desc}</p>
    </div>
  );
}

// Alias for prior callers; same printed-menu look, no card chrome
function TextOnlyTile({ name, desc }: { name: string; desc: string }) {
  return <TextItem name={name} desc={desc} />;
}

// Centered subsection heading with a thin gold rule below
function SubHead({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h4 className="font-cormorant text-2xl md:text-3xl font-light tracking-wide text-riviera-text mt-12 first:mt-0 text-center">
        {children}
      </h4>
      <div className="w-10 h-px bg-riviera-gold mx-auto mt-3 mb-8" />
    </>
  );
}

// Shared two-column menu list grid for text-only sections
const menuGrid = 'grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-1 max-w-3xl mx-auto';

// Image-card grid retained for the Grand Ballroom dinner section
const grid4 = 'grid grid-cols-1 lg:grid-cols-4 gap-4';

export default function MenuPage() {
  return (
    <>
      <Header />

      <main id="main">

        {/* ── Page Hero ─────────────────────────────────────────────────────────── */}
        <section className="bg-riviera-neutral">
          <div className="h-[460px] md:h-[640px] w-full overflow-hidden">
            <HeroCarousel images={h['page-hero']} interval={6000} alt="Riviera Waterfront Mansion Long Island wedding catering" />
          </div>
          <div className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-riviera-text mb-6">
                Long Island wedding catering and chef inspired menu
              </h1>
              <p className="text-lg md:text-xl font-light text-riviera-text/70 max-w-2xl mx-auto mb-4">
                Our chef inspired Continental wedding menu will wow you and your guests from your first bite until your last. Experience exceptional Long Island wedding catering at Riviera Waterfront Mansion in Massapequa, NY.
              </p>
              <p className="text-base font-light text-riviera-text/70 max-w-2xl mx-auto">
                With seasonal wedding menu options added regularly, please request an updated menu for your Long Island celebration. All Riviera waterfront weddings include a five hour top shelf open bar serving premium liquors, fine wines, champagne, and soft drinks throughout your reception.
              </p>
            </div>
          </div>
        </section>

        {/* ── Notice Bar ───────────────────────────────────────────────────────── */}
        <section className="bg-riviera-gold py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <p className="font-cormorant text-2xl md:text-3xl font-light tracking-wide mb-2">
              Limited Long Island wedding dates available!
            </p>
            <p className="text-lg font-light mb-4">
              Call us today to check wedding date availability at our Long Island venue
            </p>
            <a href="tel:+15165415020" className="inline-block text-2xl font-light hover:underline">
              (516) 541 5020
            </a>
            <p className="text-sm mt-4 font-light opacity-90">
              One wedding at a time with full exclusive use of our waterfront facility, grounds, and all amenities
            </p>
          </div>
        </section>

        {/* ── Open Bar ─────────────────────────────────────────────────────────── */}
        <section className="py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-8 text-center">
              Five hour top shelf open bar
            </h2>
            <div className="bg-riviera-neutral p-8">
              <ul className="text-base font-light text-riviera-text/80 space-y-3">
                <li>• Create 2 custom signature cocktails for your wedding day</li>
                <li>• Champagne toast, soft drinks, juices, and non-alcoholic beverages</li>
                <li>• Premium top shelf liquors and fine wines</li>
                <li>• Five hour top shelf open bar service included with every Riviera wedding</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Cocktail Hour ─────────────────────────────────────────────────────── */}
        <section className="bg-stone-50">
          <div className="h-[360px] md:h-[520px] w-full overflow-hidden">
            <HeroCarousel images={h['cocktail-hour']} interval={5500} alt="Cocktail hour at Riviera Waterfront Mansion" />

          </div>
          <div className="py-14 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">

              <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-2 text-center">
                Lavish cocktail hour
              </h2>
              <div className="w-16 h-px bg-riviera-gold mx-auto mb-12" />

              <SubHead>Gourmet cold displays &amp; artisan boards</SubHead>
              <div className={menuGrid}>
                <TextItem name="Seasonal Fruit Display" desc="Bountiful seasonal fruits beautifully arranged" />
                <TextItem name="Cold Meats Board" desc="Salami, Prosciutto, Mortadella, Pepperoni, Ham" />
                <TextItem name="Assorted Cheeseboard" desc="Smoked Gouda, Cheddar, Colby Jack, Provolone, Swiss with Artisan Crackers" />
                <TextItem name="Mediterranean Board" desc="Grape Leaves, Kalamata Olives, Mushrooms, Feta, Giardiniera" />
                <TextItem name="Homemade Antipasto Salad" desc="Artichoke Hearts, Olives, Sun Dried Tomatoes, Provolone, Prosciutto in Italian Dressing" />
                <TextItem name="Vegetable Crudité" desc="Individual Cones of Carrots, Peppers, Asparagus, Celery, Cherry Tomatoes" />
              </div>

              <SubHead>Passed hot &amp; cold hors d&apos;oeuvres</SubHead>
              <div className={menuGrid}>
                <TextItem name="Spanakopita" desc="Flaky phyllo dough filled with spinach and feta" />
                <TextItem name="Kobe Slider" desc="Grilled Kobe beef with cheese on a fresh golden bun" />
                <TextItem name="Spring Rolls" desc="Flaky wrapped Asian inspired vegetables" />
                <TextItem name="Miniature Empanadas" desc="Meat filled, crescent shaped pastry" />
                <TextItem name="Zucchini Sticks" desc="Lightly breaded and fried" />
                <TextItem name="Bourbon Chicken Bites" desc="White meat chicken wrapped in smoked bacon with a bourbon glaze" />
                <TextItem name="Fried Coconut Shrimp" desc="Jumbo shrimp battered with toasted coconut flakes" />
                <TextItem name="Mini Tacos" desc="Meat filling, fresh pico de gallo, sour cream" />
                <TextItem name="Date Night" desc="Dates stuffed with goat cheese, wrapped in prosciutto" />
                <TextItem name="Lemon Blueberry Crostini" desc="Toasted semolina bread with ricotta, blueberry jam, lemon zest" />
              </div>

              <SubHead>Gourmet cold salads</SubHead>
              <div className={menuGrid}>
                <TextItem name="Riviera's Seafood Salad" desc="Shrimp, Mussels, Crabmeat in a Secret Recipe Dressing" />
                <TextItem name="Greek Couscous Salad" desc="Mediterranean Couscous with Walnuts, Cranberries, Grapes, Feta" />
              </div>

              <SubHead>Butcher block carving station</SubHead>
              <p className="text-[11px] tracking-widest text-riviera-gold mb-6 uppercase text-center -mt-6">Select two carved meats</p>
              <div className={menuGrid}>
                <TextItem name="Brisket of Beef" desc="Cooked to Perfection with Mushroom Gravy" />
                <TextItem name="Pastrami" desc="Spicy Brown Mustard, Russian Dressing, Sliced Rye Bread" />
                <TextItem name="Marinated London Broil" desc="Garlic Bread, Horseradish Sauce, Beef Gravy" />
                <TextItem name="Roast Pork Tenderloin" desc="In a Garlic Herb Crust" />
                <TextItem name="Corned Beef" desc="Spicy Brown Mustard, Sauerkraut, Sliced Rye Bread" />
                <TextItem name="Roasted Whole Turkey" desc="With Cranberry Chutney" />
                <TextItem name="Glazed Virginia Ham" desc="Roasted Pineapples and Dijon Mustard" />
              </div>

            </div>
          </div>
        </section>

        {/* ── Hot Gourmet Dishes ───────────────────────────────────────────────── */}
        <section>
          <div className="h-[360px] md:h-[520px] w-full overflow-hidden">
            <HeroCarousel images={h['hot-gourmet']} interval={5000} alt="Hot gourmet dishes at Riviera Waterfront Mansion" />
          </div>
          <div className="py-14 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">

              <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-2 text-center">
                Hot gourmet dishes
              </h2>
              <div className="w-16 h-px bg-riviera-gold mx-auto mb-3" />
              <p className="text-[11px] tracking-widest text-riviera-gold mb-10 text-center uppercase">Select eight hot dishes</p>

              <SubHead>Poultry</SubHead>
              <div className={menuGrid}>
                <TextItem name="Chicken Pina Colada" desc="Sauteed Chicken with Pineapples in Cream of Coconut Sauce" />
                <TextItem name="Chicken Marsala" desc="Sauteed Chicken in Sweet Marsala Wine and Mushroom Sauce" />
                <TextItem name="Chicken Scarpariello" desc="Roasted Chicken, Sausage, Potatoes, Peppers in Lemon Garlic Sauce" />
                <TextItem name="Chicken Francese" desc="Sauteed Chicken in Lemon Butter White Wine Sauce" />
                <TextItem name="Arroz Con Pollo" desc="Chicken and Rice with Spanish Spices and Saffron" />
                <TextItem name="Sesame Chicken" desc="Chicken Breast in Sweet Honey Sauce with Sesame Seeds and Broccoli" />
                <TextItem name="Sweet &amp; Sour Chicken" desc="Fried Chicken Cubes with a Sweet and Sour Sauce" />
              </div>

              <SubHead>Pasta</SubHead>
              <div className={menuGrid}>
                <TextItem name="Tortellini / Fettuccine Alfredo" desc="Smothered in our incredible Alfredo sauce" />
                <TextItem name="Rigatoni with Prosciutto" desc="White Cream Sauce, Parmesan, Prosciutto, Peas" />
                <TextItem name="Penne Ala Vodka" desc="A fan favorite!" />
                <TextItem name="Pasta Primavera" desc="Bowtie Pasta with Fresh Vegetables in Garlic and Oil" />
                <TextItem name="Penne Bolognese" desc="Ground Beef and Pork in a Lite Cream Burgundy Sauce" />
                <TextItem name="Tortellini Carbonara" desc="Parmesan Cream Sauce with Bacon and Peas" />
                <TextItem name="Riviera's Pasta" desc="Bowtie Pasta with Sun Dried Tomatoes, Artichoke Hearts, Mushrooms in Garlic and Oil" />
              </div>

              <SubHead>Vegan &amp; Vegetarian</SubHead>
              <div className={menuGrid}>
                <TextItem name="Eggplant Rollatini" desc="Pan Fried Eggplant Stuffed with Ricotta, Mozzarella, Parmesan in Marinara" />
                <TextItem name="Vegetable Stir Fry" desc="Fresh Vegetables Sauteed with choice of Garlic Oil, Marinara, or Teriyaki" />
              </div>

              <SubHead>Seafood</SubHead>
              <div className={menuGrid}>
                <TextItem name="Fried Calamari" desc="Succulent crispy calamari" />
                <TextItem name="Seafood Paella" desc="Clams, Mussels, Shrimp in Saffron Seasoned Rice" />
                <TextItem name="Seafood Newburg" desc="Scallops, Shrimp, Crabmeat in a Sherry White Cream Sauce" />
                <TextItem name="Seafood Fra Diablo" desc="Mussels, Shrimp, Scallop, Clams in a Spicy Tomato Sauce" />
                <TextItem name="Jambalaya" desc="Shrimp, Chicken, Andouille Sausage in Seasoned Rice" />
                <TextItem name="Shrimp Scampi" desc="With Broccoli Over Rice or Pasta" />
                <TextItem name="White or Red Clam Sauce" desc="Fresh Clams and Seasoning Tossed with Linguine" />
                <TextItem name="Baked Clams" desc="Succulent Clams and Breadcrumbs Encased in a Natural Shell" />
              </div>

              <SubHead>Beef</SubHead>
              <div className={menuGrid}>
                <TextItem name="Swedish Meatballs" desc="Ground Beef and Pork Baked in a Cream Gravy Sauce" />
                <TextItem name="Beef Teriyaki" desc="Sliced Beef in Teriyaki Sauce with Chinese Vegetables over Lo Mein" />
                <TextItem name="Italian Meatballs" desc="Ground Beef and Pork in Our Homemade Tomato Sauce" />
                <TextItem name="Sausage &amp; Peppers" desc="Italian Sausage with Peppers and Onions in a Light Tomato Sauce" />
                <TextItem name="Beef Bourguignon" desc="Beef Stew Braised in Red Wine with Mushrooms, Carrots, Onions" />
                <TextItem name="Beef Stroganoff" desc="Thin Strips of Beef with Mushrooms in Sour Cream Gravy over Egg Noodle" />
                <TextItem name="Kielbasa &amp; Sauerkraut" desc="Savory Beef Kielbasa with Tangy Sauerkraut" />
              </div>

            </div>
          </div>
        </section>


        {/* ── Grand Ballroom ───────────────────────────────────────────────────── */}
        <section>
          <div className="h-[360px] md:h-[520px] w-full overflow-hidden">
            <HeroCarousel images={h['ballroom']} interval={6000} alt="Grand ballroom wedding reception at Riviera Waterfront Mansion" />
          </div>
          <div className="py-14 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">

              <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-3 text-center">
                Grand ballroom wedding reception
              </h2>
              <p className="text-center text-sm font-light text-riviera-text/70 mb-2">
                Seated plated dinner with champagne toast
              </p>
              <p className="text-center text-xs font-light text-riviera-text/50 mb-12">
                All entree choices served with seasonal vegetables and your choice of garlic mashed potatoes, rice pilaf, or roasted red bliss potatoes. Dietary restrictions and gluten free options available.
              </p>

              {/* Duet Plates / Starters */}
              <div className="mb-12">
                <h3 className="font-cormorant text-2xl font-light tracking-wide text-riviera-text mb-6">
                  Duet plates &amp; starters
                </h3>
                <div className={grid4}>
                  <Item slot="dinner-tomato-mozzarella" alt="Fresh tomato and mozzarella on mesclun greens" name="Fresh Tomato &amp; Mozzarella" desc="On a bed of Mesclun Greens with Aged Balsamic Vinaigrette" />
                  <Item slot="dinner-bruschetta" alt="Bruschetta on toasted parmesan semolina bread" name="Bruschetta" desc="Vine Ripe Tomatoes, Olives, Onions, Provolone on Mesclun Greens" />
                  <Item slot="dinner-warm-mozzarella-salad" alt="Warm mozzarella salad with strawberries and candied walnuts" name="Warm Mozzarella Salad" desc="Mesclun Greens with Strawberries, Candied Walnuts, Fried Mozzarella, Raspberry Vinaigrette" />
                </div>
              </div>

              {/* Main Entrees — note */}
              <p className="text-[11px] tracking-widest text-riviera-gold mb-8 uppercase">Select four entrees for your guests</p>

              {/* Beef */}
              <SubHead>Beef</SubHead>
              <div className={grid4}>
                <Item slot="dinner-prime-rib" alt="Prime rib with au jus sauce" name="Prime Rib" desc="Roasted Prime Rib with an Au Jus Sauce" />
                <Item slot="dinner-filet-mignon" alt="Filet mignon grilled to perfection" name="Filet Mignon *" desc="Grilled to Perfection with a Bearnaise Sauce (*additional cost)" />
                <Item slot="dinner-ny-shell-steak" alt="New York shell steak with caramelized onions" name="New York Shell Steak" desc="Grilled with Caramelized Onions and Mushrooms" />
                <Item slot="dinner-chateaubriand" alt="Chateaubriand sliced filet mignon" name="Chateaubriand" desc="Sliced Filet Mignon with a Creamy Sherry Mushroom Sauce" />
              </div>

              {/* Poultry */}
              <SubHead>Poultry</SubHead>
              <div className={grid4}>
                <Item slot="dinner-chicken-princess" alt="Chicken princess stuffed with asparagus and roasted peppers" name="Chicken Princess" desc="Stuffed with Asparagus, Red Roasted Peppers, Mozzarella with Lemon Herb Sauce" />
                <Item slot="dinner-roast-duck" alt="Roast duck a l'orange with citrus sauce" name="Roast Duck A L'Orange" desc="Roasted Succulent Duck in a Citrus Sauce" />
                <Item slot="dinner-chicken-romano" alt="Chicken romano with artichoke hearts and mushrooms" name="Chicken Romano" desc="Chicken Breast with Artichoke Hearts and Mushrooms in Cognac Cream Sauce" />
                <Item slot="dinner-chicken-piccata" alt="Chicken piccata with lemon caper sauce" name="Chicken Piccata" desc="Sauteed Chicken Breast with a Lemon Caper Sauce" />
                <Item slot="dinner-chicken-cordon-bleu" alt="Chicken Cordon Bleu stuffed with prosciutto and swiss" name="Chicken Cordon Bleu" desc="Breaded Chicken Stuffed with Prosciutto and Swiss Cheese, Mushroom Sauce" />
              </div>

              {/* Seafood */}
              <SubHead>Seafood</SubHead>
              <div className={grid4}>
                <Item slot="dinner-salmon" alt="Salmon with herb oreganata crust" name="Salmon" desc="Lemon Dill Sauce or Oreganata with Garlic Scampi Sauce" />
                <Item slot="dinner-striped-bass" alt="Striped bass with Dijon cream sauce" name="Striped Bass" desc="Served with a Dijon Cream Sauce (May through November)" />
                <Item slot="dinner-stuffed-flounder" alt="Stuffed flounder with shrimp and crabmeat" name="Stuffed Flounder" desc="Flounder Stuffed with Shrimp, Scallops, Crabmeat, Bread Crumbs" />
                <Item slot="dinner-grilled-swordfish" alt="Grilled swordfish with lemon caper sauce" name="Grilled Swordfish" desc="Served with a Lemon Caper Sauce" />
                <Item slot="dinner-stuffed-shrimp" alt="Stuffed shrimp with scallop and crabmeat" name="Stuffed Shrimp" desc="Scallop and Crabmeat Stuffed Jumbo Shrimp with Lemon Butter Sauce" />
              </div>

              {/* Vegan / Vegetarian */}
              <SubHead>Vegan / Vegetarian</SubHead>
              <div className={grid4}>
                <Item slot="dinner-portabella-mushroom-tower" alt="Portabella mushroom tower with grilled vegetables" name="Portabella Mushroom Tower" desc="Grilled Eggplant, Peppers, Squash Stacked on Portabella with Balsamic Glaze" />
                <Item slot="dinner-wild-mushroom-risotto" alt="Wild mushroom risotto with aged parmesan" name="Wild Mushroom Risotto" desc="With Aged Parmesan Cheese and Olive Oil" />
                <Item slot="dinner-stuffed-eggplant" alt="Stuffed eggplant with vegetables and bread crumbs" name="Stuffed Eggplant" desc="Eggplant Stuffed with Carrots, Mushrooms, Celery, Peppers, Asparagus, Bread Crumbs" />
              </div>

              {/* Pork / Veal */}
              <SubHead>Pork / Veal</SubHead>
              <div className={grid4}>
                <Item slot="dinner-pork-chop" alt="Grilled bone in pork chop with apple chutney" name="Grilled Bone-In Pork Chop" desc="Grilled to Perfection with Apple Brown Sugar Chutney or Pineapple Mango Cajun Sauce" />
                <Item slot="dinner-veal-marsala" alt="Veal marsala with mushroom butter sauce" name="Veal Marsala" desc="Veal Cutlets Sauteed in a Marsala Wine, Mushroom, Butter Sauce" />
              </div>

              {/* Coffee / Tea */}
              <div className="text-center mt-14 pt-10 border-t border-stone-100">
                <p className="font-cormorant text-xl font-light tracking-wide text-riviera-text mb-2">
                  Finish with tableside coffee and tea service
                </p>
                <p className="text-sm font-light text-riviera-text/60">
                  Regular and decaffeinated coffee and tea served tableside at your reception
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── Included Features ────────────────────────────────────────────────── */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 bg-riviera-neutral">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-12 text-center">
              Included wedding day features
            </h2>
            <div className="grid lg:grid-cols-2 gap-5 text-sm font-light text-riviera-text/80">
              {[
                'Oval Tables Giving The Riviera The Barn Feel In An Elegant Manner',
                'Linens: Tablecloths And Napkins',
                'A Binder Filled With Important Information And Guidance For Your Special Day',
                'Entire Floor Suite With Two Balconies; One Overlooking the Ballroom and One Outside',
                'Captain, Bartenders, Wait Staff, Bussers, Bar Back To Execute Your Every Detail',
                'Bridal Attendant To See To Your Every Need',
                "A Personal Maitre'D Will Orchestrate Your Ceremony And Wedding Reception",
                'Exclusive access to the entire mansion and grounds — one event at a time, entirely yours',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-riviera-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Enhancements, Add-ons & Exit Stations ───────────────────────────── */}
        <section className="bg-stone-50">
          <div className="h-[360px] md:h-[520px] w-full overflow-hidden">
            <HeroCarousel images={h['enhancements-combined']} interval={4500} alt="Wedding enhancements and exit stations at Riviera Waterfront Mansion" />
          </div>
          <div className="py-14 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">

              <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-2 text-center">
                Wedding enhancements, add-ons &amp; exit stations
              </h2>
              <div className="w-16 h-px bg-riviera-gold mx-auto mb-3" />
              <p className="text-xs text-riviera-text/50 mb-12 text-center tracking-wider uppercase">
                Call (516) 541 5020 for current pricing and seasonal availability
              </p>

              <SubHead>Welcome stations</SubHead>
              <div className={menuGrid}>
                <TextItem name="Welcome Snack Station" desc="Fruits, biscotti, and assorted Italian cookies for arriving guests" />
                <TextItem name="Bridal Suite Wrap Platter" desc="Assorted wraps for bridal suite arrival: ham, turkey, roast beef, veggie" />
                <TextItem name="Early Arrival for Photography" desc="Additional time on the grounds before your event begins" />
              </div>

              <SubHead>Cold cocktail hour additions</SubHead>
              <div className={menuGrid}>
                <TextItem name="Whole Lobster Station" desc="Chilled whole lobsters on a crushed ice display (market price)" />
                <TextItem name="Jumbo Shrimp Cocktail" desc="On crushed ice with cocktail sauce and lemon wedges" />
                <TextItem name="Alaskan Crab Legs" desc="Chilled Alaskan crab legs on a crushed ice display" />
                <TextItem name="Fresh Sushi Bar" desc="Traditional sushi boats with a large variety of handmade rolls" />
                <TextItem name="Fresh Clam &amp; Oyster Bar" desc="Shucked to order with Tabasco, lemon wedges, horseradish" />
                <TextItem name="Lobster Tail Station" desc="Chilled lobster tails on crushed ice display (market price)" />
                <TextItem name="Fresh Mozzarella Station" desc="Fresh mozzarella with prosciutto, cured meats, tomatoes, artisan breads" />
                <TextItem name="Rolling Bar" desc="Indoor or outdoor beer and wine rolling bar" />
                <TextItem name="Full Rolling Bar" desc="Indoor or outdoor rolling bar with full selection of top shelf alcohol" />
                <TextItem name="Ice Sculpture" desc="Choose from a large selection through Apple Ice Inc." />
              </div>

              <SubHead>Hot cocktail hour additions</SubHead>
              <div className={menuGrid}>
                <TextItem name="Bacon Station" desc="Bacon every way. Wrapped asparagus, stuffed mushrooms, BLT skewers, scallops, and more" />
                <TextItem name="Taco Bar Station" desc="Hard and soft shells with chopped meat, shredded chicken, and toppings" />
                <TextItem name="French Fry Station" desc="Waffle, curly, classic, or sweet potato fries with dips" />
                <TextItem name="Pierogi Station" desc="Sauteed onions, sour cream, chives, and cheddar" />
                <TextItem name="Additional Chafing Dish" desc="Choose from our variety of chafing dishes" />
                <TextItem name="Additional Carving Meat" desc="Choose from our variety of carving board meats" />
                <TextItem name="Baby Lamb Chops" desc="As an extra carving board meat or as passed hors d'oeuvres" />
                <TextItem name="Roast Suckling Pig" desc="Whole roasted suckling pig as an extra carving station" />
                <TextItem name="Mashed Potato Bar" desc="Choice of two: sweet, garlic, or plain with toppings" />
                <TextItem name="Mac &amp; Cheese Station" desc="Choice of two: smoked Gouda prosciutto, bacon cheddar, traditional" />
                <TextItem name="Gourmet Pasta Station" desc="Choose three pastas and three sauces from our full selection" />
                <TextItem name="Fried Chicken &amp; Glazed Donut" desc="Golden fried chicken meets pillowy glazed donuts" />
              </div>

              <SubHead>Viennese dessert display</SubHead>
              <p className="text-sm font-light text-riviera-text/70 mb-8 max-w-2xl mx-auto text-center -mt-6 italic">
                Our Viennese takes place in our cocktail hour room without taking away from your party time, adding a world of sweet treats for all your guests.
              </p>
              <div className={menuGrid}>
                <TextItem name="Full Viennese" desc="Cakes, pies, cannolis, rainbow cookies, pastries, cake pops, ice cream sundae bar" />
                <TextItem name="Donut Wall" desc="Assorted donuts displayed on a white wall" />
                <TextItem name="S'mores Station" desc="Cookies, chocolates, and crackers with open flames" />
                <TextItem name="Gelato Bar" desc="Choose four amazing flavors of gelato" />
                <TextItem name="Ice Cream Sundae Bar" desc="Two flavors with a full selection of toppings" />
                <TextItem name="Espresso &amp; Cordial Station" desc="After dinner cordials with our famous espresso and cappuccino" />
                <TextItem name="Roaming Cannoli" desc="Roaming service with freshly filled cannolis" />
                <TextItem name="Rainbow Explosion" desc="Rainbow cookies every way: crumb cake, black and white, cupcakes, stuffed brownies" />
              </div>

              <SubHead>Late night exit stations</SubHead>
              <p className="text-sm font-light text-riviera-text/70 mb-8 max-w-2xl mx-auto text-center -mt-6 italic">
                Send your guests home with a memorable parting treat. New options added regularly &mdash; call (516) 541 5020 for the latest.
              </p>
              <div className={menuGrid}>
                <TextItem name="White Castle Slider Station" desc="Iconic White Castle sliders served as guests head home" />
                <TextItem name="All American Burger Station" desc="Hamburgers, cheeseburgers, and french fries" />
                <TextItem name="Apple Cider Donut Station" desc="Warm cinnamon sugar apple cider donuts" />
                <TextItem name="Donut Wall" desc="Assorted donuts as guests head home" />
                <TextItem name="Hot Pretzel Station" desc="Hot pretzels with mustard and cheese sauce" />
                <TextItem name="Morning Glory Station" desc="Bacon, sausage, ham, egg and cheese on Kaiser rolls" />
                <TextItem name="Chips &amp; Gatorade Display" desc="Individually packaged chips, pretzels, Doritos, and Gatorade" />
                <TextItem name="Stuffed Bomboloni Bar" desc="Choice of two fillings: pistachio, Nutella, cannoli cream, or raspberry" />
                <TextItem name="Stuffed Garlic Knot Station" desc="Warm buttery garlic knots stuffed with ham, salami, or provolone" />
                <TextItem name="Ramen Exit Station" desc="Individual instant cups of ramen" />
                <TextItem name="Popcorn Station" desc="Individual bags of popcorn in an assortment of flavors" />
                <TextItem name="Empanada Station" desc="Corn flour beef and chicken empanadas with choice of additional filling" />
                <TextItem name="Custom Station" desc="Have an idea unlike any other — give us your vision and we will make it happen" />
              </div>

            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-center text-white bg-riviera-dark-brown">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide mb-6">
              Customize your Long Island wedding menu
            </h2>
            <p className="text-lg font-light mb-8 opacity-90">
              Contact our team to discuss your menu options and design your perfect Long Island waterfront wedding celebration.
            </p>
            <div className="flex flex-col lg:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-riviera-gold text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-white hover:text-riviera-text transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-riviera-dark-brown text-center"
              >
                INQUIRE ABOUT MENU →
              </Link>
              <a
                href="tel:+15165415020"
                className="border-2 border-white text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-white hover:text-riviera-dark-brown transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-riviera-dark-brown text-center"
              >
                CALL (516) 541 5020
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      {/* JSON-LD Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.rivierawaterfrontmansion.com' },
              { '@type': 'ListItem', position: 2, name: 'Menu', item: 'https://www.rivierawaterfrontmansion.com/menu' },
            ],
          }),
        }}
      />
    </>
  );
}
