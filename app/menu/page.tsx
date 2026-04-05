import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { imageConfig } from '../lib/imageConfig';

const m = imageConfig.menuImages as Record<string, string>;

export default function MenuPage() {
  return (
    <>
      <Header />
      
      <main id="main">
        {/* Hero Section */}
        <section className="bg-riviera-neutral py-16 md:py-24 px-4 sm:px-6 lg:px-8">
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
        </section>

        {/* Important Notice */}
        <section className="bg-riviera-gold py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <p className="font-cormorant text-2xl md:text-3xl font-light tracking-wide mb-2">
              Limited Long Island wedding dates available!
            </p>
            <p className="text-lg font-light mb-4">
              Call us today to check wedding date availability at our Long Island venue
            </p>
            <a 
              href="tel:+15165415020"
              className="inline-block text-2xl font-light hover:underline"
            >
              (516) 541 5020
            </a>
            <p className="text-sm mt-4 font-light opacity-90">
              One wedding at a time with full exclusive use of our waterfront facility, grounds, and all amenities
            </p>
          </div>
        </section>

        {/* Open Bar */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-8 text-center">
              Five hour top shelf open bar for your Long Island wedding
            </h2>
            <div className="bg-riviera-neutral p-8">
              <ul className="text-base font-light text-riviera-text/80 space-y-3">
                <li>• Create 2 custom signature cocktails for your wedding day celebration</li>
                <li>• Champagne toast, soft drinks, juices, and non-alcoholic beverages</li>
                <li>• Premium top shelf liquors and fine wines</li>
                <li>• Five hour top shelf open bar service included with all Long Island weddings at Riviera Waterfront Mansion</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cocktail Hour */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-stone-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-12 text-center">
              Lavish cocktail hour for your Massapequa waterfront wedding
            </h2>

            {/* Cold Displays Hero */}
            <div className="overflow-hidden mb-10">
              <Image
                src={m['cocktail-hero-cold-displays']}
                alt="Full outdoor cocktail hour spread at Riviera Waterfront Mansion with cold displays, charcuterie boards, and fruit skewers"
                width={1200}
                height={600}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Cold Displays */}
            <div className="mb-16">
              <h3 className="font-cormorant text-2xl font-light tracking-wide text-riviera-text mb-8">
                Gourmet cold displays and artisan boards for Long Island wedding cocktail hour
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-3">FRESH SEASONAL FRUIT DISPLAY</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Bountiful seasonal fruits beautifully arranged for a fresh and delightful presentation.
                  </p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-cold-meats-board']}
                      alt="Italian cured meats board with salami, prosciutto, mortadella, pepperoni, and ham"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-2">COLD MEATS BOARD</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Italian Cured Meats: Salami, Prosciutto, Mortadella, Pepperoni, Ham
                  </p>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-3">FRESH SEASONAL FRUIT ON SKEWERS</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Colorful skewered fruit medley, showcasing seasonal freshness and vibrant flavors.
                  </p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-cheeseboard']}
                      alt="Assorted cheeseboard with smoked gouda, sharp cheddar, colby jack, provolone, and artisan crackers"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-2">ASSORTED CHEESEBOARD</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Smoked Gouda, Extra Sharp Cheddar, Colby Jack, Provolone, Swiss with Artisan Crackers: Whole Wheat, Cracked Pepper, Plain, Pita Chip Style Crackers Garlic, Sour Cream and Parmesan
                  </p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-mediterranean-board']}
                      alt="Mediterranean board with grape leaves, kalamata olives, feta cheese, pepperoncini and giardiniera"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-2">MEDITERRANEAN BOARD</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Grape Leaves, Kalamata Olives, Marinated Mushrooms, Pepperoncini, Feta Cheese, Giardiniera (cauliflower, carrots, celery, sliced green olives, serrano peppers)
                  </p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-antipasto-salad']}
                      alt="Homemade antipasto salad with marinated artichoke hearts, black olives, sun dried tomatoes, provolone, prosciutto and salami"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-2">HOMEMADE ANTIPASTO SALAD</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    All Italian Favorites: Marinated Artichoke Hearts, Large Black Olives, Sun Dried Tomatoes, Provolone, Prosciutto, Salami, Ham, Pepperoni, Marinated Mushrooms, Pepperoncini in a Homemade Italian Dressing
                  </p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-vegetable-crudite']}
                      alt="Farm fresh vegetable crudité served in individual wooden cones with julienne carrots, peppers, celery and cherry tomatoes"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-2">FARM FRESH VEGETABLE CRUDITÉ</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Individual Cones Filled With Fresh Crispy Julienne Carrots, Tri Color Peppers, Asparagus, Celery And Cherry Tomatoes Displayed on A Wooden Stand
                  </p>
                </div>
              </div>
            </div>

            {/* Passed Hors D&apos;oeuvres */}
            <div className="mb-16">
              <h3 className="font-cormorant text-2xl font-light tracking-wide text-riviera-text mb-8">
                Passed hot &amp; cold hors d&apos;oeuvres
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-spanakopita']}
                      alt="Spanakopita flaky phyllo dough filled with spinach and feta cheese"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-2">SPANAKOPITA</h4>
                  <p className="text-sm font-light text-riviera-text/70">Flaky phyllo dough filled with spinach and feta cheese</p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-kobe-slider']}
                      alt="Kobe slider with grilled Kobe beef and cheese on a fresh golden bun"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-2">KOBE SLIDER</h4>
                  <p className="text-sm font-light text-riviera-text/70">Grilled Kobe beef with cheese on a fresh golden bun</p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-spring-rolls']}
                      alt="Spring rolls with flaky wrapped Asian inspired vegetables"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-2">SPRING ROLLS</h4>
                  <p className="text-sm font-light text-riviera-text/70">Flaky wrapped Asian inspired vegetables</p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-miniature-empanadas']}
                      alt="Miniature empanadas meat filled crescent shaped pastry with dipping sauce"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-2">MINIATURE EMPANADAS</h4>
                  <p className="text-sm font-light text-riviera-text/70">Meat filled, crescent shaped pastry</p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-zucchini-sticks']}
                      alt="Zucchini sticks lightly breaded and fried"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-2">ZUCCHINI STICKS</h4>
                  <p className="text-sm font-light text-riviera-text/70">Lightly breaded and fried</p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-bourbon-chicken-bites']}
                      alt="Bourbon chicken bites juicy white meat chicken wrapped in smoked bacon and smothered in a bourbon glaze"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-2">BOURBON CHICKEN BITES</h4>
                  <p className="text-sm font-light text-riviera-text/70">Juicy white meat chicken wrapped in smoked bacon and smothered in a bourbon glaze</p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-fried-coconut-shrimp']}
                      alt="Fried coconut shrimp succulent jumbo shrimp battered with toasted coconut flakes"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-2">FRIED COCONUT SHRIMP</h4>
                  <p className="text-sm font-light text-riviera-text/70">Succulent jumbo shrimp battered with toasted coconut flakes and fried to perfection</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 pt-6 border-t border-stone-200">
                <div>
                  <p className="text-sm font-light text-riviera-text mb-0.5">Mini Tacos</p>
                  <p className="text-xs font-light text-riviera-text/60">Meat filling, topped with fresh pico de gallo and a dollop of sour cream</p>
                </div>
                <div>
                  <p className="text-sm font-light text-riviera-text mb-0.5">Date Night</p>
                  <p className="text-xs font-light text-riviera-text/60">Dates stuffed with goat cheese, wrapped in prosciutto</p>
                </div>
                <div>
                  <p className="text-sm font-light text-riviera-text mb-0.5">Lemon Blueberry Crostini</p>
                  <p className="text-xs font-light text-riviera-text/60">Toasted semolina bread topped with fresh ricotta, blueberry jam, and lemon zest</p>
                </div>
              </div>
            </div>

            {/* Gourmet Cold Salads */}
            <div className="mb-16">
              <h3 className="font-cormorant text-2xl font-light tracking-wide text-riviera-text mb-8">
                Gourmet Cold Salads
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-seafood-salad']}
                      alt="Riviera's seafood salad with large shrimp, New Zealand green shell mussels, and crabmeat in homemade dressing"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-2">RIVIERA&apos;S SEAFOOD SALAD</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Large Shrimp, Medium Shrimp, New Zealand Green Shell Mussels, and Crabmeat in a Home Made (Secret Recipe) Dressing
                  </p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-greek-couscous-salad']}
                      alt="Greek couscous salad with Mediterranean seasoned couscous, walnuts, dried cranberries, red seedless grapes, and feta cheese"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-2">GREEK COUSCOUS SALAD</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Mediterranean Seasoned Couscous Cooked to Fluffy Perfection with Walnuts, Dried Cranberries, Red Seedless Grapes, and Feta Cheese
                  </p>
                </div>
              </div>
            </div>

            {/* Carving Station */}
            <div className="mb-16">
              <div className="overflow-hidden mb-8">
                <Image
                  src={m['cocktail-hero-carving-station']}
                  alt="Chef carving London Broil and roast turkey at the butcher block carving station at Riviera Waterfront Mansion"
                  width={1200}
                  height={600}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <h3 className="font-cormorant text-2xl font-light tracking-wide text-riviera-text mb-4">
                Butcher block carving station for your Long Island wedding
              </h3>
              <p className="text-sm tracking-wider text-riviera-gold mb-8">SELECT TWO CARVED MEATS FOR YOUR WEDDING COCKTAIL HOUR</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-text mb-2">BRISKET OF BEEF</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Cooked To Perfection with Mushroom Gravy
                  </p>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-text mb-2">PASTRAMI</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    with Spicy Brown Mustard, Russian Dressing and Sliced Rye Bread (To make the perfect sandwich)
                  </p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-london-broil']}
                      alt="Marinated London Broil being sliced at the carving station with dramatic lighting"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-sm tracking-widest text-riviera-text mb-2">MARINATED LONDON BROIL</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    with Garlic Bread, Horseradish Sauce, and Beef Gravy
                  </p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-roast-pork-tenderloin']}
                      alt="Roast pork tenderloin in garlic herb crust sliced at the carving station"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-sm tracking-widest text-riviera-text mb-2">ROAST PORK TENDERLOIN</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    In A Garlic Herb Crust
                  </p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-corned-beef']}
                      alt="Corned beef carving station with spicy brown mustard, sauerkraut, and sliced rye bread"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-sm tracking-widest text-riviera-text mb-2">CORNED BEEF</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    with Spicy Brown Mustard, Sauerkraut, and Sliced Rye Bread
                  </p>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-text mb-2">ROASTED WHOLE TURKEY</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    with Cranberry Chutney
                  </p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-glazed-virginia-ham']}
                      alt="Glazed Virginia ham with roasted pineapples and Dijon mustard at the carving station"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-sm tracking-widest text-riviera-text mb-2">GLAZED VIRGINIA HAM</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    with Roasted Pineapples and Dijon Mustard
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hot Gourmet Dishes */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Hot Gourmet Hero */}
            <div className="overflow-hidden mb-10">
              <Image
                src={m['cocktail-hero-hot-gourmet']}
                alt="Guests serving themselves from gourmet chafing dishes at the outdoor cocktail hour at Riviera Waterfront Mansion"
                width={1200}
                height={600}
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
            <h3 className="font-cormorant text-2xl font-light tracking-wide text-riviera-text mb-4 text-center">
              Hot gourmet dishes for your Long Island wedding cocktail hour
            </h3>
            <p className="text-sm tracking-wider text-riviera-gold mb-12 text-center">SELECT EIGHT HOT DISHES FOR YOUR MASSAPEQUA WATERFRONT WEDDING</p>

            {/* Poultry */}
            <div className="mb-12">
              <h4 className="font-cormorant text-xl font-light tracking-wide text-riviera-text mb-6">Poultry</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-chicken-pina-colada']}
                      alt="Chicken pina colada sauteed chicken with diced fresh pineapples in cream of coconut sauce"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">CHICKEN PINA COLADA</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Sauteed Chicken with Diced Fresh Pineapples in a Cream of Coconut Sauce Topped with Fresh Toasted Coconut
                  </p>
                </div>
                <div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">CHICKEN MARSALA</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Sauteed Chicken in A Sweet Marsala Wine and Mushroom Sauce
                  </p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-chicken-scarpariello']}
                      alt="Chicken scarpariello roasted chicken with Italian sausage, potatoes, onions and peppers in lemon garlic sauce"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">CHICKEN SCARPARIELLO</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Roasted Chicken, Italian Sausage, Potatoes, Onions, Peppers in a Lemon Garlic Sauce
                  </p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-chicken-francese']}
                      alt="Chicken francese sauteed chicken in lemon butter white wine sauce with parsley"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">CHICKEN FRANCESE</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Sauteed Chicken in A Lemon Butter White Wine Sauce
                  </p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-arroz-con-pollo']}
                      alt="Arroz con pollo chicken and rice with vegetables seasoned with Spanish spices and saffron"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">ARROZ CON POLLO</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Chicken and Rice with Veggies seasoned with Spanish Spices and Saffron
                  </p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-sesame-chicken']}
                      alt="Sesame chicken cubed chicken breast in sweet honey sauce with sesame seeds and broccoli"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">SESAME CHICKEN</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Chicken Breast Cubed dressed in A Sweet Sauce made from honey, rice wine vinegar, brown sugar topped with Sesame Seeds and accompanied with Broccoli
                  </p>
                </div>
                <div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">SWEET AND SOUR CHICKEN</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Fried Chicken Cubes with a mouthwatering Sweet and Sour
                  </p>
                </div>
              </div>
            </div>

            {/* Pasta */}
            <div className="mb-12">
              <h4 className="font-cormorant text-xl font-light tracking-wide text-riviera-text mb-6">Pasta</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">TORTELLINI/FETTUCCINE ALFREDO</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Delicious tortellini/fettuccine smothered in our incredible Alfredo sauce
                  </p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-rigatoni-prosciutto']}
                      alt="Rigatoni with prosciutto in white cream sauce with parmesan cheese and peas"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">RIGATONI WITH PROSCIUTTO</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    White Cream Sauce with Parmesan Cheese Prosciutto and Peas
                  </p>
                </div>
                <div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">PENNE ALA VODKA</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    A Fan Favorite!
                  </p>
                </div>
                <div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">PASTA PRIMAVERA</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Bowtie Pasta with Fresh Vegetables in a Garlic and Oil Sauce
                  </p>
                </div>
                <div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">PENNE BOLOGNESE</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    A Mixture of Ground Beef And Pork Meat In A Lite Cream Burgundy Sauce
                  </p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-tortellini-carbonara']}
                      alt="Tortellini carbonara in parmesan cream sauce with bacon and peas"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">TORTELLINI CARBONARA</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Parmesan Cream Sauce with Bacon And Peas
                  </p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-riviera-pasta']}
                      alt="Riviera's pasta bowtie pasta with sun dried tomatoes, artichoke hearts, black olives and mushrooms in garlic and oil sauce"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">RIVIERA&apos;S PASTA</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Bow tie pasta with Sun dried Tomatoes, Artichoke Hearts and Mushrooms in a Garlic and Oil Sauce
                  </p>
                </div>
              </div>
            </div>

            {/* Vegan & Vegetarian */}
            <div className="mb-12">
              <h4 className="font-cormorant text-xl font-light tracking-wide text-riviera-text mb-6">Vegan &amp; Vegetarian</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-eggplant-rollatini']}
                      alt="Eggplant rollatini breaded pan fried eggplant stuffed with ricotta and mozzarella baked in homemade marinara sauce"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">EGGPLANT ROLLATINI</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Slices Of Breaded Pan Fried Eggplant Stuffed with Ricotta, Mozzarella, Parmesan Cheese, Baked and Placed on Top Of Our Homemade Marinara sauce
                  </p>
                </div>
                <div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">VEGETABLE STIR FRY</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Fresh Vegetables Sauteed And Topped with the sauce of your choice: Garlic and Oil, Marinara or Teriyaki
                  </p>
                </div>
              </div>
            </div>

            {/* Seafood */}
            <div className="mb-12">
              <h4 className="font-cormorant text-xl font-light tracking-wide text-riviera-text mb-6">Seafood</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-fried-calamari']}
                      alt="Fried calamari rings with marinara dipping sauce"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">FRIED CALAMARI</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Succulent crispy calamari
                  </p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-seafood-paella']}
                      alt="Seafood paella with clams, mussels, and shrimp in saffron seasoned rice"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">SEAFOOD PAELLA</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Clams, Mussels, Shrimp in a Saffron Seasoned Rice
                  </p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-seafood-newburg']}
                      alt="Seafood Newburg with scallops, shrimp and crabmeat in sherry white cream sauce"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">SEAFOOD NEWBURG</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Scallops, Shrimp Crabmeat in a sherry white cream sauce
                  </p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-seafood-fra-diablo']}
                      alt="Seafood fra diablo mussels and clams in a spicy tomato sauce"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">SEAFOOD FRA DIABLO</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Mussels, Shrimp, Scallop, Clams in A Spicy Tomato Sauce
                  </p>
                </div>
                <div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">JAMBALAYA</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Shrimp, Chicken, Andouille Sausage mixed in with Seasoned Rice
                  </p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-shrimp-scampi']}
                      alt="Shrimp scampi with broccoli over rice"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">SHRIMP SCAMPI</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    with Broccoli Over Rice or Pasta
                  </p>
                </div>
                <div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">WHITE OR RED CLAM SAUCE WITH LINGUINE</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Fresh clams and seasoning tossed with New England Red and New York White sauces
                  </p>
                </div>
                <div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">BAKED CLAMS</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    A blend of succulent clams and breadcrumbs encased in a natural shell
                  </p>
                </div>
              </div>
            </div>

            {/* Beef */}
            <div className="mb-12">
              <h4 className="font-cormorant text-xl font-light tracking-wide text-riviera-text mb-6">Beef</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-swedish-meatballs']}
                      alt="Swedish meatballs made with ground beef and pork served in cream gravy sauce over egg noodles"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">SWEDISH MEATBALLS</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Made with a Combination of Ground Beef and Pork Baked and Served in a Cream Gravy Sauce
                  </p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-beef-teriyaki']}
                      alt="Beef teriyaki slices of beef in teriyaki sauce with Chinese vegetables"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">BEEF TERIYAKI</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Slices of Beef in Teriyaki Sauce with Chinese Vegetables over Lo Mein Noodles
                  </p>
                </div>
                <div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">ITALIAN MEATBALLS</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Made with a Combination of Ground Beef and Pork Cooked in Our Homemade Tomato Sauce
                  </p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-sausage-and-peppers']}
                      alt="Sausage and peppers Italian sausage rounds with green peppers and onions in light tomato sauce"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">SAUSAGE AND PEPPERS</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Italian Sausage with Peppers and Onions in a Light Tomato Sauce
                  </p>
                </div>
                <div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">BEEF BOURGUIGNON</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Beef Stew Braised in Red Wine Sauce with Mushrooms Carrots and Onions
                  </p>
                </div>
                <div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">BEEF STROGANOFF</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Thin Strips of Beef with Onions, Mushrooms in a Sour Cream Gravy over Egg Noodle
                  </p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['cocktail-kielbasa-sauerkraut']}
                      alt="Kielbasa and sauerkraut savory beef kielbasa with tangy sauerkraut"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">KIELBASA AND SAUERKRAUT</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Savory Beef Kielbasa with Tangy Sauerkraut
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhancements */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-stone-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-4 text-center">
              Wedding enhancements and premium add-ons
            </h2>
            <p className="text-sm text-riviera-text/70 mb-2 text-center">
              Elevate your Massapequa waterfront wedding with premium station additions, Viennese dessert displays, and more.
            </p>
            <p className="text-xs text-riviera-text/50 mb-14 text-center tracking-wider">
              CALL (516) 541 5020 FOR CURRENT PRICING AND SEASONAL AVAILABILITY
            </p>

            {/* Welcome Stations */}
            <div className="mb-16">
              <h3 className="font-cormorant text-2xl font-light tracking-wide text-riviera-text mb-8">
                Welcome stations
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-3">WELCOME SNACK STATION</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Platters of fruits, biscotti, and assorted Italian cookies for your guests as they arrive
                  </p>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-3">BRIDAL SUITE WRAP PLATTER</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Assorted wrap platter for bridal suite arrival featuring ham, turkey, roast beef, and veggie options
                  </p>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-3">EARLY ARRIVAL FOR PHOTOGRAPHY</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Additional time on the grounds before your event begins for photography
                  </p>
                </div>
              </div>
            </div>

            {/* Cold Cocktail Hour Additions */}
            <div className="mb-16">
              <h3 className="font-cormorant text-2xl font-light tracking-wide text-riviera-text mb-8">
                Cold cocktail hour additions
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-3">ROLLING BAR</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Indoor or outdoor beer and wine rolling bar
                  </p>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-3">FULL ROLLING BAR</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Indoor or outdoor rolling bar with a full selection of top shelf alcohol
                  </p>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-3">FRESH MOZZARELLA STATION</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Fresh mozzarella perfectly paired with paper thin sliced imported prosciutto; assortment of cured meats, tomatoes, roasted peppers, and artisan breads
                  </p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['enhance-jumbo-shrimp-cocktail']}
                      alt="Jumbo shrimp cocktail displayed in a white vintage boat on crushed ice with cocktail sauce and lemon wedges"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-2">JUMBO SHRIMP COCKTAIL</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Display of jumbo shrimp cocktail served on crushed ice, presented with cocktail sauce and fresh lemon wedges
                  </p>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-3">FRESH CLAM & OYSTER BAR</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Fresh clams and oysters shucked to order, presented with Tabasco sauce, fresh lemon wedges, and horseradish sauce
                  </p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['enhance-sushi-bar-waterfront']}
                      alt="Fresh sushi bar on the outdoor waterfront deck at dusk with sushi boats displayed on a white table overlooking the water"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-2">FRESH SUSHI BAR</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Traditional sushi boats with a large variety of handmade rolls with vegetarian options, presented with soy sauce, sliced ginger, and wasabi
                  </p>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-3">WHOLE LOBSTER STATION</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Chilled whole lobsters served on a crushed ice display (market price)
                  </p>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-3">LOBSTER TAIL STATION</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Chilled lobster tails served on a crushed ice display (market price)
                  </p>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-3">ALASKAN CRAB LEGS</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Chilled Alaskan crab legs served on a crushed ice display (market price)
                  </p>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-3">ICE SCULPTURE</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Choose from a large selection of sculptures through Apple Ice Inc.
                  </p>
                </div>
              </div>
            </div>

            {/* Hot Cocktail Hour Additions */}
            <div className="mb-16">
              <h3 className="font-cormorant text-2xl font-light tracking-wide text-riviera-text mb-8">
                Hot cocktail hour additions
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-3">ADDITIONAL CHAFING DISH</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Choose from our variety of chafing dishes featured in our brochure
                  </p>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-3">ADDITIONAL CARVING MEAT</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Choose from our variety of carving board meats featured in our brochure
                  </p>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-3">BABY LAMB CHOPS</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Baby lamb chops served as an extra carving board meat or as passed hors d'oeuvres
                  </p>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-3">ROAST SUCKLING PIG</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Whole roasted suckling pig as an extra carving station
                  </p>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-3">MASHED POTATO BAR</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Choice of two: sweet mashed potatoes, garlic, or plain mashed red bliss potatoes. Served with a variety of toppings including maple syrup, brown sugar, marshmallows, sour cream, cheddar cheese, chives, bacon bits, and broccoli florets
                  </p>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-3">MACARONI & CHEESE STATION</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Choice of two: smoked Gouda and prosciutto, bacon and sharp cheddar, traditional mac and cheese with seasoned breadcrumbs, mushroom, ham and cheddar, or chicken, bacon, and sun-dried tomato
                  </p>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-3">GOURMET PASTA STATION</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Choose three pastas and three sauces. Pasta: penne, linguini, spaghetti, rigatoni, bowtie, fettuccini, or tortellini. Sauce: ala vodka, marinara, carbonara, alfredo, bolognese, red or blanco clam sauce
                  </p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['enhance-bacon-station-hero']}
                      alt="Full Bacon Station display in the ballroom with string lights overhead, BACON STATION sign, and rows of bacon-wrapped appetizers and stuffed mushrooms on tiered risers"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-2">BACON STATION</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Bacon displayed every way! Choice of four: bacon wrapped asparagus, bacon stuffed mushrooms, BLT skewers, bacon wrapped scallops, bacon wrapped pineapple, bacon wrapped melon, bacon-ricotta crostini bites, or bacon meatballs
                  </p>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-3">TACO BAR STATION</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Hard and soft shell tacos with chopped meat, shredded chicken, shredded cheeses, sour cream, diced onions, diced tomatoes, shredded lettuce, and salsa
                  </p>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-3">FRIED CHICKEN & GLAZED DONUT STATION</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Golden fried chicken meets pillowy glazed donuts in a crave-happy mashup
                  </p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['enhance-french-fry-station']}
                      alt="French fry late night station with baskets of fries and All American Drive-In themed packaging"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-2">FRENCH FRY STATION</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Choice of waffle fries, curly fries, classic french fries, and sweet potato fries, with dips and toppings available upon request
                  </p>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-3">PIEROGI STATION</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Choice of pierogies served with a variety of toppings: sauteed onions, sour cream, chives, bacon bits, and cheddar cheese
                  </p>
                </div>
              </div>
            </div>

            {/* Viennese */}
            <div>
              <h3 className="font-cormorant text-2xl font-light tracking-wide text-riviera-text mb-3">
                Viennese dessert display
              </h3>
              <p className="text-sm font-light text-riviera-text/70 mb-8 max-w-3xl">
                Our Viennese takes place in our cocktail hour room without taking away from your party time, adding a world of sweet treats for all your guests to enjoy as part of your five-hour reception.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-3">FULL VIENNESE</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Full display of assorted cakes, pies, cannolis, rainbow cookies, assortment of Italian cookies and pastries, cake shooters, cake pops, and an ice cream sundae bar with lots of different toppings
                  </p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['enhance-donut-wall-hero']}
                      alt="Donut wall with assorted glazed and frosted donuts displayed on a white pegboard wall at the Riviera Waterfront Mansion wedding reception"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-2">DONUT WALL</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Assorted donuts displayed on a white wall for your guests to enjoy (also available as an exit station)
                  </p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['enhance-smores-station']}
                      alt="Outdoor s&apos;mores station with open flames, assorted cookies, chocolates, crackers and toppings for custom s&apos;mores at an outdoor waterfront wedding"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-2">S&apos;MORES STATION</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Assorted cookies, chocolates, and crackers displayed with open flames to create your own custom s&apos;mores
                  </p>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-3">ROAMING CANNOLI</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Roaming service with freshly filled cannolis
                  </p>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-3">RAINBOW EXPLOSION</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Rainbow cookies in every way: crumb cake, black and white cookies, rainbow cookies, cannoli dipped in rainbow cookies, cupcakes, and rainbow cookie stuffed brownies
                  </p>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-3">ICE CREAM SUNDAE BAR</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Two ice cream flavors with a full selection of toppings for your guests to customize their own sundaes
                  </p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['enhance-espresso-cordial-station']}
                      alt="Espresso and cordial station with gelato bar display, espresso machine, and after dinner drinks at Riviera Waterfront Mansion"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-2">ESPRESSO & CORDIAL STATION</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Display of after dinner cordials accompanied by our famous espresso and cappuccino
                  </p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['enhance-gelato-espresso-hero']}
                      alt="So Sveglio gelato bar and espresso bar station with staff serving guests at the Riviera Waterfront Mansion wedding reception"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-2">GELATO BAR</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Choose four amazing flavors of gelato
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ballroom Reception */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-8 text-center">
              Grand ballroom wedding reception dining
            </h2>
            <div className="text-center mb-12">
              <p className="text-lg font-light text-riviera-text/80 mb-4">
                SEATED PLATED DINNER WITH CHAMPAGNE TOAST FOR YOUR LONG ISLAND WEDDING
              </p>
              <p className="text-sm font-light text-riviera-text/70 mb-2">
                All dietary restrictions can be accommodated at our Massapequa waterfront venue. Many of our Long Island wedding menu dishes can be made to your preference and gluten free options are available.
              </p>
              <p className="text-sm font-light text-riviera-text/70">
                All wedding entree choices are served with seasonal fresh vegetables and your choice of: garlic mashed potatoes, rice pilaf, or roasted red bliss potatoes
              </p>
            </div>

            {/* Duet Plates */}
            <div className="mb-16">
              <h3 className="font-cormorant text-2xl font-light tracking-wide text-riviera-text mb-8">
                Duet plates: elegant salads and starters for your Long Island wedding reception
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['dinner-tomato-mozzarella']}
                      alt="Fresh tomato and mozzarella on mesclun greens with balsamic vinaigrette"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-2">FRESH TOMATO AND MOZZARELLA</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    served on a bed of Mesclun Greens topped with an Aged Balsamic Vinaigrette
                  </p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['dinner-bruschetta']}
                      alt="Bruschetta on toasted parmesan crusted semolina bread with tomatoes and olives"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-2">BRUSCHETTA ON TOASTED PARMESAN CRUSTED SEMOLINA BREAD</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Vine Ripe Tomatoes, Black Olives, Red Onions, Celery, Provolone Cheese, Garlic with a Red Wine Vinaigrette Dressing On Mesclun Greens
                  </p>
                </div>
                <div>
                  <div className="aspect-square overflow-hidden mb-4">
                    <Image
                      src={m['dinner-warm-mozzarella-salad']}
                      alt="Warm mozzarella salad with fresh strawberries and candied walnuts"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-2">WARM MOZZARELLA SALAD</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Mesclun Greens With Fresh Strawberries, Candied Walnuts, Bread Fried Mozzarella Served with a Raspberry Vinaigrette
                  </p>
                </div>
              </div>
            </div>

            {/* Main Entrees */}
            <div className="mb-16">
              <h3 className="font-cormorant text-2xl font-light tracking-wide text-riviera-text mb-4">
                Main wedding entrees for your Massapequa waterfront reception
              </h3>
              <p className="text-sm tracking-wider text-riviera-gold mb-12">SELECT FOUR ENTREES FOR YOUR LONG ISLAND WEDDING GUESTS</p>

              {/* Beef */}
              <div className="mb-14">
                <h4 className="font-cormorant text-xl font-light tracking-wide text-riviera-text mb-6">Beef</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <div className="aspect-[4/3] overflow-hidden mb-3">
                      <Image
                        src={m['dinner-prime-rib']}
                        alt="Prime rib roasted and served with au jus sauce"
                        width={600}
                        height={450}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-1">PRIME RIB</h5>
                    <p className="text-sm font-light text-riviera-text/70">Roasted Prime Rib served with an Au Jus Sauce</p>
                  </div>
                  <div>
                    <div className="aspect-[4/3] overflow-hidden mb-3">
                      <Image
                        src={m['dinner-filet-mignon']}
                        alt="Filet mignon grilled to perfection with Bearnaise sauce"
                        width={600}
                        height={450}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-1">FILET MIGNON *Additional Cost</h5>
                    <p className="text-sm font-light text-riviera-text/70">Grilled to Perfection. Served with a Bearnaise Sauce</p>
                  </div>
                  <div>
                    <div className="aspect-[4/3] overflow-hidden mb-3">
                      <Image
                        src={m['dinner-ny-shell-steak']}
                        alt="New York shell steak grilled with caramelized onions and mushrooms"
                        width={600}
                        height={450}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-1">NEW YORK SHELL STEAK</h5>
                    <p className="text-sm font-light text-riviera-text/70">Grilled and served with caramelized onions and mushrooms</p>
                  </div>
                  <div>
                    <div className="aspect-[4/3] overflow-hidden mb-3">
                      <Image
                        src={m['dinner-chateaubriand']}
                        alt="Chateaubriand sliced filet mignon with creamy sherry mushroom sauce"
                        width={600}
                        height={450}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-1">CHATEAUBRIAND</h5>
                    <p className="text-sm font-light text-riviera-text/70">Sliced Filet Mignon served with a Creamy Sherry Mushroom Sauce</p>
                  </div>
                  <div>
                    <div className="aspect-[4/3] relative overflow-hidden mb-3">
                      <Image
                        src={m['dinner-surf-and-turf']}
                        alt="Surf and Turf - Lobster Tail and Filet Mignon"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-1">SURF &amp; TURF *Additional Cost</h5>
                    <p className="text-sm font-light text-riviera-text/70">Lobster Tail 4 oz. &amp; Filet Mignon 8oz. Served Together</p>
                  </div>
                </div>
              </div>

              {/* Poultry */}
              <div className="mb-14">
                <h4 className="font-cormorant text-xl font-light tracking-wide text-riviera-text mb-6">Poultry</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <div className="aspect-[4/3] overflow-hidden mb-3">
                      <Image
                        src={m['dinner-chicken-princess']}
                        alt="Chicken princess stuffed with asparagus and roasted red peppers, topped with mozzarella"
                        width={600}
                        height={450}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-1">CHICKEN PRINCESS</h5>
                    <p className="text-sm font-light text-riviera-text/70">Grilled Chicken Breast Stuffed with Asparagus, Red Roasted Peppers Topped with Mozzarella Cheese served with a Light Lemon Herb Sauce</p>
                  </div>
                  <div>
                    <div className="aspect-[4/3] overflow-hidden mb-3">
                      <Image
                        src={m['dinner-roast-duck']}
                        alt="Roast duck a l&apos;orange with citrus sauce and colorful vegetables"
                        width={600}
                        height={450}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-1">ROAST DUCK A L&apos;ORANGE</h5>
                    <p className="text-sm font-light text-riviera-text/70">Roasted Succulent Duck Served in a Citrus Sauce</p>
                  </div>
                  <div>
                    <div className="aspect-[4/3] overflow-hidden mb-3">
                      <Image
                        src={m['dinner-chicken-romano']}
                        alt="Chicken romano with artichoke hearts and mushrooms in cognac cream sauce"
                        width={600}
                        height={450}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-1">CHICKEN ROMANO</h5>
                    <p className="text-sm font-light text-riviera-text/70">Sauteed Chicken Breast with Artichoke Hearts and Mushrooms Served in a Cognac Cream Sauce</p>
                  </div>
                  <div>
                    <div className="aspect-[4/3] overflow-hidden mb-3">
                      <Image
                        src={m['dinner-chicken-piccata']}
                        alt="Chicken piccata with lemon caper sauce and rice pilaf"
                        width={600}
                        height={450}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-1">CHICKEN PICCATA</h5>
                    <p className="text-sm font-light text-riviera-text/70">Sauteed Chicken Breast Served with a Lemon Caper Sauce</p>
                  </div>
                  <div>
                    <div className="aspect-[4/3] relative overflow-hidden mb-3">
                      <Image
                        src={m['dinner-chicken-cordon-bleu']}
                        alt="Chicken Cordon Bleu - Breaded Chicken Breast Stuffed with Prosciutto and Swiss Cheese"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-1">CHICKEN CORDON BLEU</h5>
                    <p className="text-sm font-light text-riviera-text/70">Breaded Chicken Breast Stuffed with Prosciutto and Swiss Cheese Served with a Mushroom Sauce</p>
                  </div>
                </div>
              </div>

              {/* Seafood */}
              <div className="mb-14">
                <h4 className="font-cormorant text-xl font-light tracking-wide text-riviera-text mb-6">Seafood</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <div className="aspect-[4/3] overflow-hidden mb-3">
                      <Image
                        src={m['dinner-salmon']}
                        alt="Salmon with herb oreganata crust and seasonal vegetables"
                        width={600}
                        height={450}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-1">SALMON</h5>
                    <p className="text-sm font-light text-riviera-text/70">Choose From: Lemon Dill Sauce OR Oreganata: Blended Herbs, Garlic, Basil, Sun Dried Tomatoes Bread Crumbs Encrusted on Broiled Salmon with a Garlic Scampi Sauce</p>
                  </div>
                  <div>
                    <div className="aspect-[4/3] overflow-hidden mb-3">
                      <Image
                        src={m['dinner-striped-bass']}
                        alt="Striped bass with Dijon cream sauce and fresh vegetables"
                        width={600}
                        height={450}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-1">STRIPED BASS (Available May through November)</h5>
                    <p className="text-sm font-light text-riviera-text/70">Served with a Dijon Cream Sauce</p>
                  </div>
                  <div>
                    <div className="aspect-[4/3] overflow-hidden mb-3">
                      <Image
                        src={m['dinner-stuffed-flounder']}
                        alt="Stuffed flounder filled with shrimp, scallops, and crabmeat"
                        width={600}
                        height={450}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-1">STUFFED FLOUNDER</h5>
                    <p className="text-sm font-light text-riviera-text/70">Filet Of Flounder Stuffed with Shrimp, Scallops, Crabmeat and Bread Crumbs</p>
                  </div>
                  <div>
                    <div className="aspect-[4/3] overflow-hidden mb-3">
                      <Image
                        src={m['dinner-grilled-swordfish']}
                        alt="Grilled swordfish with lemon caper sauce and rice pilaf"
                        width={600}
                        height={450}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-1">GRILLED SWORDFISH</h5>
                    <p className="text-sm font-light text-riviera-text/70">Served with a Lemon Caper Sauce</p>
                  </div>
                  <div>
                    <div className="aspect-[4/3] overflow-hidden mb-3">
                      <Image
                        src={m['dinner-stuffed-shrimp']}
                        alt="Stuffed shrimp filled with scallop and crabmeat in lemon butter sauce"
                        width={600}
                        height={450}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-1">STUFFED SHRIMP</h5>
                    <p className="text-sm font-light text-riviera-text/70">Scallop and Crabmeat Stuffed Jumbo Shrimp with Lemon Butter Sauce</p>
                  </div>
                </div>
              </div>

              {/* Vegan / Vegetarian */}
              <div className="mb-14">
                <h4 className="font-cormorant text-xl font-light tracking-wide text-riviera-text mb-6">Vegan / Vegetarian</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="aspect-square overflow-hidden mb-3">
                      <Image
                        src={m['dinner-portabella-mushroom-tower']}
                        alt="Portabella mushroom tower with grilled eggplant and vegetables with balsamic glaze"
                        width={600}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-1">PORTABELLA MUSHROOM TOWER</h5>
                    <p className="text-sm font-light text-riviera-text/70">Grilled Eggplant, Red Pepper, Yellow and Green Squash Stacked on Top of a Grilled Portabella Mushroom with a Balsamic Glaze</p>
                  </div>
                  <div>
                    <div className="aspect-square overflow-hidden mb-3">
                      <Image
                        src={m['dinner-wild-mushroom-risotto']}
                        alt="Wild mushroom risotto with aged parmesan and olive oil"
                        width={600}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-1">WILD MUSHROOM RISOTTO</h5>
                    <p className="text-sm font-light text-riviera-text/70">With Aged Parmesan Cheese and Olive Oil</p>
                  </div>
                  <div>
                    <div className="aspect-square overflow-hidden mb-3">
                      <Image
                        src={m['dinner-stuffed-eggplant']}
                        alt="Stuffed eggplant with seasonal vegetables and seasoned bread crumbs"
                        width={600}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-1">STUFFED EGGPLANT</h5>
                    <p className="text-sm font-light text-riviera-text/70">Eggplant Stuffed with Carrots, Mushrooms, Celery, Onions, Bell Peppers, Asparagus and Seasoned Bread Crumbs</p>
                  </div>
                </div>
              </div>

              {/* Pork / Veal */}
              <div className="mb-12">
                <h4 className="font-cormorant text-xl font-light tracking-wide text-riviera-text mb-6">Pork / Veal</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="aspect-[4/3] overflow-hidden mb-3">
                      <Image
                        src={m['dinner-pork-chop']}
                        alt="Grilled bone in pork chop with apple chutney or mango cajun sauce"
                        width={600}
                        height={450}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-1">GRILLED BONE IN PORK CHOP</h5>
                    <p className="text-sm font-light text-riviera-text/70">An Inch and Half Pork Chop Grilled to Perfection. Topped with your choice of Apple, Onion, Brown Sugar and Cinnamon Chutney OR Pineapple, Mango Cajun Sauce</p>
                  </div>
                  <div>
                    <div className="aspect-[4/3] overflow-hidden mb-3">
                      <Image
                        src={m['dinner-veal-marsala']}
                        alt="Veal marsala with mushroom butter sauce and mashed potatoes"
                        width={600}
                        height={450}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-1">VEAL MARSALA</h5>
                    <p className="text-sm font-light text-riviera-text/70">Veal Cutlets Sauteed and Cooked in a Marsala Wine, Mushroom, Butter Sauce</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Finish */}
            <div className="text-center mb-16">
              <h3 className="font-cormorant text-2xl font-light tracking-wide text-riviera-text mb-4">
                Finish with tableside coffee and tea service
              </h3>
              <p className="text-sm font-light text-riviera-text/70">
                Regular and decaffeinated coffee and tea served tableside at your Long Island waterfront wedding reception
              </p>
            </div>
          </div>
        </section>
        {/* Wedding Day Features */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-riviera-neutral">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-12 text-center">
              Included wedding day features at Riviera Waterfront Mansion
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm font-light text-riviera-text/80">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-riviera-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>Oval Tables Giving The Riviera The Barn Feel In An Elegant Manner</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-riviera-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>Linens: Tablecloths And Napkins</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-riviera-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>A Binder Filled With Important Information And Guidance For Your Special Day</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-riviera-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>Entire Floor Suite With Two Balconies; One Overlooking the Ballroom and One Outside For You And Your Wedding Party</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-riviera-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>Captain, Bartenders, Wait Staff, Bussers, Bar Back To Make Sure All Your Details And Wishes Are Executed To Perfection</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-riviera-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>Bridal Attendant To See To Your Every Need</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-riviera-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>A Personal Maitre'D Will Orchestrate Your Ceremony And Wedding Reception</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-riviera-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>Exclusive access to the entire mansion and grounds — one event at a time, entirely yours</p>
              </div>
            </div>
          </div>
        </section>

        {/* Exit Stations */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-4 text-center">
              Add a late night exit station to your Long Island wedding
            </h2>
            <p className="text-sm text-riviera-text/70 mb-12 text-center">
              Send your guests home with a memorable parting treat. New options are added regularly — call (516) 541 5020 for the latest selections.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <div className="aspect-square overflow-hidden mb-4">
                  <Image
                    src={m['enhance-burger-station']}
                    alt="All American Drive-In late night exit station with crates of paper-wrapped cheeseburgers and french fries at a wedding reception"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm tracking-widest text-riviera-gold mb-2">ALL AMERICAN BURGER STATION</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Assortment of hamburgers, cheeseburgers, and french fries
                </p>
              </div>
              <div>
                <h3 className="text-sm tracking-widest text-riviera-gold mb-3">HOT PRETZEL STATION</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Hot pretzels with dipping sauces including mustard and cheese sauce
                </p>
              </div>
              <div>
                <h3 className="text-sm tracking-widest text-riviera-gold mb-3">CHIPS & GATORADE DISPLAY</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Assortment of individually packaged chips, pretzels, Doritos, Cheese Doodles, Fritos, and assorted bottles of Gatorade
                </p>
              </div>
              <div>
                <h3 className="text-sm tracking-widest text-riviera-gold mb-3">STUFFED BOMBOLONI BAR</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Stuffed bomboloni with your choice of two fillings: pistachio, Nutella, cannoli cream, or raspberry
                </p>
              </div>
              <div>
                <h3 className="text-sm tracking-widest text-riviera-gold mb-3">STUFFED GARLIC KNOT STATION</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Warm, buttery garlic knots stuffed with savory ham, salami, or melty provolone
                </p>
              </div>
              <div>
                <h3 className="text-sm tracking-widest text-riviera-gold mb-3">RAMEN EXIT STATION</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Individual instant cups of ramen
                </p>
              </div>
              <div>
                <h3 className="text-sm tracking-widest text-riviera-gold mb-3">POPCORN STATION</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Individual bags of popcorn with an assortment of flavors
                </p>
              </div>
              <div>
                <h3 className="text-sm tracking-widest text-riviera-gold mb-3">MORNING GLORY STATION</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Bacon egg and cheese, sausage egg and cheese, and ham egg and cheese sandwiches on Kaiser rolls
                </p>
              </div>
              <div>
                <h3 className="text-sm tracking-widest text-riviera-gold mb-3">EMPANADA STATION</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Corn flour beef and chicken empanadas with your choice of one additional flour empanada filling
                </p>
              </div>
              <div>
                <div className="aspect-square overflow-hidden mb-4">
                  <Image
                    src={m['enhance-donut-wall-close']}
                    alt="Close-up of assorted donuts on the white pegboard donut wall exit station at Riviera Waterfront Mansion"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm tracking-widest text-riviera-gold mb-2">DONUT WALL</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Assorted donuts displayed on a white wall for your guests to enjoy as they head home
                </p>
              </div>
              <div>
                <h3 className="text-sm tracking-widest text-riviera-gold mb-3">CUSTOM STATION</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Have a custom exit station unlike any other — give us your idea and we will make it happen
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-center text-white bg-riviera-dark-brown">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide mb-6">
              Customize your Long Island wedding menu
            </h2>
            <p className="text-lg font-light mb-8 opacity-90">
              Contact our team to discuss your menu options and design your perfect Long Island waterfront wedding celebration.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
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
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.rivierawaterfrontmansion.com'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Menu',
                item: 'https://www.rivierawaterfrontmansion.com/menu'
              }
            ]
          })
        }}
      />
    </>
  );
}
