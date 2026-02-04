import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Long Island Wedding Catering Menu | Riviera Waterfront Mansion Massapequa NY',
  description: 'Chef inspired Continental wedding menu in Massapequa NY. Five hour top shelf open bar, customizable cocktail hour with butcher block carving stations, gourmet entrees, and professional wedding catering for Long Island celebrations.',
  alternates: {
    canonical: 'https://www.rivierawaterfrontmansion.com/menu'
  },
  openGraph: {
    title: 'Long Island Wedding Catering Menu | Riviera Waterfront Mansion',
    description: 'Chef inspired Continental wedding cuisine with five hour top shelf open bar and customizable Long Island wedding catering',
    url: 'https://www.rivierawaterfrontmansion.com/menu',
  },
};

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
              With seasonal wedding menu options added regularly, please request an updated menu for your Long Island celebration. All Riviera waterfront weddings include a five hour top shelf open bar serving premium liquors, craft beers, fine wines, champagne, and soft drinks throughout your reception.
            </p>
          </div>
        </section>

        {/* Important Notice */}
        <section className="bg-riviera-gold py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="font-cormorant text-2xl md:text-3xl font-light tracking-wide mb-2">
              Limited Long Island wedding dates available!
            </h2>
            <p className="text-sm tracking-wider mb-3">
              Please note: We only host weddings at our Massapequa waterfront venue
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

        {/* Menu Note */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-stone-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-cormorant text-xl font-light tracking-wide text-riviera-text mb-4">
              A note about our Long Island wedding menu images
            </h2>
            <p className="text-sm font-light text-riviera-text/80 leading-relaxed">
              Some images presented in our online Long Island wedding catering menu are AI generated placeholders, intended to assist in search functionality and provide descriptive alt text for visually impaired users. These images serve as temporary visual guides until we can replace them with our own food photography over the coming year. We appreciate your understanding and patience as we work to enhance our menu with authentic images of our chef prepared Continental cuisine.
            </p>
            <p className="text-sm font-light text-riviera-text/80 leading-relaxed mt-4">
              For additional details or inquiries about our Long Island wedding catering, menu customization, or dietary accommodations, please reach out to our experienced banquet team at <a href="tel:+15165415020" className="text-riviera-gold hover:underline">516-541-5020</a>. We are always eager to help and answer any questions about your Massapequa waterfront wedding menu.
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
                <li>• Premium top shelf liquors, craft beers, and fine wines</li>
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
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-3">COLD MEATS BOARD</h4>
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
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-3">ASSORTED CHEESEBOARD</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Smoked Gouda, Extra Sharp Cheddar, Colby Jack, Provolone, Swiss with Artisan Crackers: Whole Wheat, Cracked Pepper, Plain, Pita Chip Style Crackers Garlic, Sour Cream and Parmesan
                  </p>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-3">MEDITERRANEAN BOARD</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Grape Leaves, Kalamata Olives, Marinated Mushrooms, Pepperoncini, Feta Cheese, Giardiniera (cauliflower, carrots, celery, sliced green olives, serrano peppers)
                  </p>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-3">HOMEMADE ANTIPASTO SALAD</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    All Italian Favorites: Marinated Artichoke Hearts, Large Black Olives, Sun Dried Tomatoes, Provolone, Prosciutto, Salami, Ham, Pepperoni, Marinated Mushrooms, Pepperoncini in a Homemade Italian Dressing
                  </p>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-3">FARM FRESH VEGETABLE CRUDITÉ</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Individual Cones Filled With Fresh Crispy Julienne Carrots, Tri Color Peppers, Asparagus, Celery And Cherry Tomatoes Displayed on A Wooden Stand
                  </p>
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
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-3">RIVIERA'S SEAFOOD SALAD</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Large Shrimp, Medium Shrimp, New Zealand Green Shell Mussels, and Crabmeat in a Home Made (Secret Recipe) Dressing
                  </p>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-3">GREEK COUSCOUS SALAD</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Mediterranean Seasoned Couscous Cooked to Fluffy Perfection with Walnuts, Dried Cranberries, Red Seedless Grapes, and Feta Cheese
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-sm tracking-widest text-riviera-gold mb-3">PASSED HOT & COLD HORS D'OEUVRES</h4>
                <p className="text-sm font-light text-riviera-text/70">
                  Various Types of Hot and Cold Hors D'Oeuvres
                </p>
              </div>
            </div>

            {/* Carving Station */}
            <div className="mb-16">
              <h3 className="font-cormorant text-2xl font-light tracking-wide text-riviera-text mb-4">
                Butcher block carving station for your Long Island wedding
              </h3>
              <p className="text-sm tracking-wider text-riviera-gold mb-8">SELECT TWO CARVED MEATS FOR YOUR WEDDING COCKTAIL HOUR</p>
              <div className="grid md:grid-cols-2 gap-6">
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
                  <h4 className="text-sm tracking-widest text-riviera-text mb-2">MARINATED LONDON BROIL</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    with Garlic Bread, Horseradish Sauce, and Beef Gravy
                  </p>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-text mb-2">ROAST PORK TENDERLOIN</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    In A Garlic Herb Crust
                  </p>
                </div>
                <div>
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
                  <h4 className="text-sm tracking-widest text-riviera-text mb-2">GLAZED VIRGINIA HAM</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    with Roasted Pineapples and Dijon Mustard
                  </p>
                </div>
              </div>
            </div>

            {/* Hot Gourmet Dishes - Part 1 continues in next message due to length */}
          </div>
        </section>

        {/* Hot Gourmet Dishes */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h3 className="font-cormorant text-2xl font-light tracking-wide text-riviera-text mb-4 text-center">
              Hot gourmet dishes for your Long Island wedding cocktail hour
            </h3>
            <p className="text-sm tracking-wider text-riviera-gold mb-12 text-center">SELECT EIGHT HOT DISHES FOR YOUR MASSAPEQUA WATERFRONT WEDDING</p>

            {/* Poultry */}
            <div className="mb-12">
              <h4 className="font-cormorant text-xl font-light tracking-wide text-riviera-text mb-6">Poultry</h4>
              <div className="space-y-6">
                <div>
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
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">CHICKEN SCARPARIELLO</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Roasted Chicken, Italian Sausage, Potatoes, Onions, Peppers in a Lemon Garlic Sauce
                  </p>
                </div>
                <div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">CHICKEN FRANCESE</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Sauteed Chicken in A Lemon Butter White Wine Sauce
                  </p>
                </div>
                <div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">ARROZ CON POLLO</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Chicken and Rice with Veggies seasoned with Spanish Spices and Saffron
                  </p>
                </div>
                <div>
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
              <div className="space-y-6">
                <div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">TORTELLINI/FETTUCCINE ALFREDO</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Delicious tortellini/fettuccine smothered in our incredible Alfredo sauce
                  </p>
                </div>
                <div>
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
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">TORTELLINI CARBONARA</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Parmesan Cream Sauce with Bacon And Peas
                  </p>
                </div>
                <div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">RIVIERA'S PASTA</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Bow tie pasta with Sun dried Tomatoes, Artichoke Hearts and Mushrooms in a Garlic and Oil Sauce
                  </p>
                </div>
              </div>
            </div>

            {/* Vegan & Vegetarian */}
            <div className="mb-12">
              <h4 className="font-cormorant text-xl font-light tracking-wide text-riviera-text mb-6">Vegan & Vegetarian</h4>
              <div className="space-y-6">
                <div>
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
              <div className="space-y-6">
                <div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">FRIED CALAMARI</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Succulent crispy calamari
                  </p>
                </div>
                <div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">SEAFOOD PAELLA</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Clams, Mussels, Shrimp in a Saffron Seasoned Rice
                  </p>
                </div>
                <div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">SEAFOOD NEWBURG</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Scallops, Shrimp Crabmeat in a sherry white cream sauce
                  </p>
                </div>
                <div>
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
              <div className="space-y-6">
                <div>
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">SWEDISH MEATBALLS</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Made with a Combination of Ground Beef and Pork Baked and Served in a Cream Gravy Sauce
                  </p>
                </div>
                <div>
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
                  <h5 className="text-sm tracking-widest text-riviera-text mb-2">KIELBASA AND SAUERKRAUT</h5>
                  <p className="text-sm font-light text-riviera-text/70">
                    Savory Beef Kielbasa with Tangy Sauerkraut
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cocktail Hour Station Additions */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-stone-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-4 text-center">
              Premium cocktail hour station additions for your Long Island wedding
            </h2>
            <p className="text-sm text-riviera-text/70 mb-12 text-center">
              Elevate your Massapequa waterfront wedding with premium station additions. Call (516) 541 5020 for pricing and seasonal availability!
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm tracking-widest text-riviera-gold mb-3">SUSHI BAR</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Fresh assorted handcrafted gourmet sushi served with soy sauce and wasabi
                </p>
              </div>
              <div>
                <h3 className="text-sm tracking-widest text-riviera-gold mb-3">TACO BAR</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Create your fiesta with our build your own taco station
                </p>
              </div>
              <div>
                <h3 className="text-sm tracking-widest text-riviera-gold mb-3">OYSTER BAR</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Fresh clams and oysters served on the half shell with cocktail sauce, lemon, and various other sides
                </p>
              </div>
              <div>
                <h3 className="text-sm tracking-widest text-riviera-gold mb-3">BACON STATION</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Bacon, bacon, bacon! One of our most popular cocktail hour stations
                </p>
              </div>
              <div>
                <h3 className="text-sm tracking-widest text-riviera-gold mb-3">LOBSTER BAR</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Premium Maine lobster, chilled, pre cut, and cracked
                </p>
              </div>
              <div>
                <h3 className="text-sm tracking-widest text-riviera-gold mb-3">MAC & CHEESE</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Homestyle baked mac and cheese with toppings galore
                </p>
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
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-2">FRESH TOMATO AND MOZZARELLA</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    served on a bed of Mesclun Greens topped with an Aged Balsamic Vinaigrette
                  </p>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest text-riviera-gold mb-2">BRUSCHETTA ON TOASTED PARMESAN CRUSTED SEMOLINA BREAD</h4>
                  <p className="text-sm font-light text-riviera-text/70">
                    Vine Ripe Tomatoes, Black Olives, Red Onions, Celery, Provolone Cheese, Garlic with a Red Wine Vinaigrette Dressing On Mesclun Greens
                  </p>
                </div>
                <div>
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
              <div className="mb-12">
                <h4 className="font-cormorant text-xl font-light tracking-wide text-riviera-text mb-6">Beef</h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-2">PRIME RIB</h5>
                    <p className="text-sm font-light text-riviera-text/70">
                      Roasted Prime Rib served with an Au Jus Sauce
                    </p>
                  </div>
                  <div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-2">FILET MIGNON *Additional Cost</h5>
                    <p className="text-sm font-light text-riviera-text/70">
                      Grilled to Perfection. Served with a Bearnaise Sauce
                    </p>
                  </div>
                  <div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-2">NEW YORK SHELL STEAK</h5>
                    <p className="text-sm font-light text-riviera-text/70">
                      Grilled and served with caramelized onions and mushrooms
                    </p>
                  </div>
                  <div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-2">CHATEAUBRIAND</h5>
                    <p className="text-sm font-light text-riviera-text/70">
                      Sliced Filet Mignon served with a Creamy Sherry Mushroom Sauce
                    </p>
                  </div>
                  <div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-2">SURF & TURF *Additional Cost</h5>
                    <p className="text-sm font-light text-riviera-text/70">
                      Lobster Tail 4 oz. & Filet Mignon 8oz. Served Together
                    </p>
                  </div>
                </div>
              </div>

              {/* Poultry */}
              <div className="mb-12">
                <h4 className="font-cormorant text-xl font-light tracking-wide text-riviera-text mb-6">Poultry</h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-2">CHICKEN PRINCESS</h5>
                    <p className="text-sm font-light text-riviera-text/70">
                      Grilled Chicken Breast Stuffed with Asparagus, Red Roasted Peppers Topped with Mozzarella Cheese served with a Light Lemon Herb Sauce
                    </p>
                  </div>
                  <div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-2">ROAST DUCK A L'ORANGE</h5>
                    <p className="text-sm font-light text-riviera-text/70">
                      Roasted Succulent Duck Served in a Citrus Sauce
                    </p>
                  </div>
                  <div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-2">CHICKEN ROMANO</h5>
                    <p className="text-sm font-light text-riviera-text/70">
                      Sauteed Chicken Breast with Artichoke Hearts and Mushrooms Served in a Cognac Cream Sauce
                    </p>
                  </div>
                  <div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-2">CHICKEN PICCATA</h5>
                    <p className="text-sm font-light text-riviera-text/70">
                      Sauteed Chicken Breast Served with a Lemon Caper Sauce
                    </p>
                  </div>
                  <div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-2">CHICKEN CORDON BLEU</h5>
                    <p className="text-sm font-light text-riviera-text/70">
                      Breaded Chicken Breast Stuffed with Prosciutto and Swiss Cheese Served with a Mushroom Sauce
                    </p>
                  </div>
                </div>
              </div>

              {/* Seafood */}
              <div className="mb-12">
                <h4 className="font-cormorant text-xl font-light tracking-wide text-riviera-text mb-6">Seafood</h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-2">SALMON</h5>
                    <p className="text-sm font-light text-riviera-text/70">
                      Choose From: Lemon Dill Sauce OR Oreganata: Blended Herbs, Garlic, Basil, Sun Dried Tomatoes Bread Crumbs Encrusted on Broiled Salmon with a Garlic Scampi Sauce
                    </p>
                  </div>
                  <div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-2">STRIPED BASS (Seasonal)</h5>
                    <p className="text-sm font-light text-riviera-text/70">
                      Served with a Dijon Cream Sauce
                    </p>
                  </div>
                  <div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-2">STUFFED FLOUNDER</h5>
                    <p className="text-sm font-light text-riviera-text/70">
                      Filet Of Flounder Stuffed with Shrimp, Scallops, Crabmeat and Bread Crumbs
                    </p>
                  </div>
                  <div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-2">GRILLED SWORDFISH</h5>
                    <p className="text-sm font-light text-riviera-text/70">
                      Served with a Lemon Caper Sauce
                    </p>
                  </div>
                  <div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-2">STUFFED SHRIMP</h5>
                    <p className="text-sm font-light text-riviera-text/70">
                      Scallop and Crabmeat Stuffed Jumbo Shrimp with Lemon Butter Sauce
                    </p>
                  </div>
                </div>
              </div>

              {/* Vegan / Vegetarian */}
              <div className="mb-12">
                <h4 className="font-cormorant text-xl font-light tracking-wide text-riviera-text mb-6">Vegan / Vegetarian</h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-2">PORTABELLA MUSHROOM TOWER</h5>
                    <p className="text-sm font-light text-riviera-text/70">
                      Grilled Eggplant, Red Pepper, Yellow and Green Squash Stacked on Top of a Grilled Portabella Mushroom with a Balsamic Glaze
                    </p>
                  </div>
                  <div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-2">WILD MUSHROOM RISOTTO</h5>
                    <p className="text-sm font-light text-riviera-text/70">
                      With Aged Parmesan Cheese and Olive Oil
                    </p>
                  </div>
                  <div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-2">STUFFED EGGPLANT</h5>
                    <p className="text-sm font-light text-riviera-text/70">
                      Eggplant Stuffed with Carrots, Mushrooms, Celery, Onions, Bell Peppers, Asparagus and Seasoned Bread Crumbs
                    </p>
                  </div>
                </div>
              </div>

              {/* Pork / Veal */}
              <div className="mb-12">
                <h4 className="font-cormorant text-xl font-light tracking-wide text-riviera-text mb-6">Pork / Veal</h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-2">GRILLED BONE IN PORK CHOP</h5>
                    <p className="text-sm font-light text-riviera-text/70">
                      An Inch and Half Pork Chop Grilled to Perfection. Topped with your choice of Apple, Onion, Brown Sugar and Cinnamon Chutney OR Pineapple, Mango Cajun Sauce
                    </p>
                  </div>
                  <div>
                    <h5 className="text-sm tracking-widest text-riviera-text mb-2">VEAL MARSALA</h5>
                    <p className="text-sm font-light text-riviera-text/70">
                      Veal Cutlets Sauteed and Cooked in a Marsala Wine, Mushroom, Butter Sauce
                    </p>
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
                <span className="text-riviera-gold mt-1">✓</span>
                <p>Oval Tables Giving The Riviera The Barn Feel In An Elegant Manner</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-riviera-gold mt-1">✓</span>
                <p>Linens: Tablecloths And Napkins</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-riviera-gold mt-1">✓</span>
                <p>A Binder Filled With Important Information And Guidance For Your Special Day</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-riviera-gold mt-1">✓</span>
                <p>Entire Floor Suite With Two Balconies; One Overlooking the Ballroom and One Outside For You And Your Wedding Party</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-riviera-gold mt-1">✓</span>
                <p>Captain, Bartenders, Wait Staff, Bussers, Bar Back To Make Sure All Your Details And Wishes Are Executed To Perfection</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-riviera-gold mt-1">✓</span>
                <p>Bridal Attendant To See To Your Every Need</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-riviera-gold mt-1">✓</span>
                <p>A Personal Maitre'D Will Orchestrate Your Ceremony And Wedding Reception</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-riviera-gold mt-1">✓</span>
                <p>Full Access Of The Grounds Inside And Outside The Whole Time Here</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-riviera-gold mt-1">✓</span>
                <p>The Mansion Is For Your Full Enjoyment Since It Is Only You And Your Guests On Our Grounds As The Mansion Is One Event At A Time</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-riviera-gold mt-1">✓</span>
                <p>The Full Mansion Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Exit Stations */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-12 text-center">
              Add a late night exit station to your Long Island wedding
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm tracking-widest text-riviera-gold mb-3">WHITE CASTLE</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Did someone say white castle? We've got you covered.
                </p>
              </div>
              <div>
                <h3 className="text-sm tracking-widest text-riviera-gold mb-3">DONUT WALL</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Your guests can indulge in an assortment of sweet treats baked with love.
                </p>
              </div>
              <div>
                <h3 className="text-sm tracking-widest text-riviera-gold mb-3">HOT PRETZELS</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Hot and fresh gourmet pretzels. Your guests can enjoy a delicious salty pretzel or sweet cinnamon sugar pretzel served with cheese, mustard, or icing as a parting favor.
                </p>
              </div>
              <div>
                <h3 className="text-sm tracking-widest text-riviera-gold mb-3">DRINKS & CHIPS</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Choose from an assortment of your favorite snack chips and a variety of your favorite sports beverage that your guests will thank you for the next day.
                </p>
              </div>
              <div>
                <h3 className="text-sm tracking-widest text-riviera-gold mb-3">TACO BELL</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Grab everybody's late night favorite snack on your way home without the drive thru.
                </p>
              </div>
              <div>
                <h3 className="text-sm tracking-widest text-riviera-gold mb-3">ALL AMERICAN</h3>
                <p className="text-sm font-light text-riviera-text/70">
                  Long Island's favorite classic burger drive in. Your guests can enjoy All American's delicious cheeseburgers, hamburgers, and french fries as a unique parting favor at the end of your reception.
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
              Schedule a private tasting appointment at our Massapequa venue to sample our chef inspired Continental cuisine and design your perfect wedding menu
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-riviera-gold text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-white hover:text-riviera-text transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-riviera-dark-brown text-center"
              >
                REQUEST TASTING →
              </Link>
              <a 
                href="tel:+15165415020"
                className="border-2 border-white text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-white hover:text-riviera-dark-brown transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-riviera-dark-brown text-center"
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
                name: 'Menu'
              }
            ]
          })
        }}
      />
    </>
  );
}
