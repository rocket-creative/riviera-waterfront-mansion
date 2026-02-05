'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import InlineCTA from '../components/InlineCTA';
import FAQSection from '../components/FAQSection';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatedSection } from '../components/AnimatedSection';
import { HoverScale } from '../components/HoverScale';
import { useScrollTriggerCleanup, useFadeInUp } from '../lib/useAnimations';
import { imageConfig } from '../lib/imageConfig';

const menuFAQs = [
  {
    question: 'Can we customize the wedding menu for dietary restrictions?',
    answer: 'Absolutely! All dietary restrictions can be accommodated including vegetarian, vegan, gluten free, kosher, and allergy specific needs. Our experienced banquet team will work with you to ensure every guest enjoys their meal. Many dishes can be customized to your preferences.'
  },
  {
    question: 'How many entrees can our guests choose from?',
    answer: 'Guests select from four entree options that you choose from our extensive menu. Options include premium beef cuts like prime rib and filet mignon, fresh seafood including salmon and stuffed flounder, poultry dishes like chicken princess, and vegetarian selections.'
  },
  {
    question: 'What is included in the cocktail hour?',
    answer: 'Our cocktail hour features gourmet cold displays and artisan boards, fresh seafood salad, eight hot gourmet dishes you select, two carved meats from our butcher block station, and passed hot and cold hors d\'oeuvres. Plus a five hour top shelf open bar with two custom signature cocktails.'
  },
  {
    question: 'Do you offer menu tastings before the wedding?',
    answer: 'Yes! We offer private tastings so you can sample our chef inspired Continental cuisine and make your final menu selections. Tastings are scheduled after you book your wedding date. Contact us at 516 541 5020 to learn more about arranging your tasting.'
  },
  {
    question: 'Is the bar package included or extra?',
    answer: 'A five hour top shelf open bar is included with all Long Island wedding packages at Riviera Waterfront Mansion. This includes premium liquors, craft beers, fine wines, champagne toast, and two custom signature cocktails created just for your celebration.'
  },
  {
    question: 'Can we add premium stations to cocktail hour?',
    answer: 'Yes! We offer premium station additions including a sushi bar, taco bar, oyster bar, bacon station, lobster bar, and mac and cheese station. Call 516 541 5020 for pricing and seasonal availability of these popular Long Island wedding upgrades.'
  },
  {
    question: 'What is served for the duet plate before dinner?',
    answer: 'Guests enjoy elegant salads and starters as their duet plate, such as fresh tomato and mozzarella on mesclun greens, bruschetta on toasted parmesan crusted bread, or warm mozzarella salad with strawberries and candied walnuts. All beautifully plated and served before the main entree.'
  },
  {
    question: 'Do you offer late night exit stations?',
    answer: 'Yes! Popular late night exit stations include White Castle, donut walls, hot pretzels, drinks and chips, Taco Bell, and All American burgers. These fun additions send guests home happy and are a beloved Long Island wedding tradition.'
  }
];

export default function MenuPage() {
  useScrollTriggerCleanup();
  const heroContentRef = useFadeInUp({ delay: 0.3, duration: 1.2 });

  return (
    <>
      <Header />
      
      <main id="main">
        {/* Hero Section - Editorial 2-Column Layout */}
        <section className="relative min-h-[80vh] overflow-hidden bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[80vh] gap-0">
            {/* Image Column - Full Height */}
            <div className="relative lg:col-span-7 h-[50vh] lg:h-auto order-1 lg:order-1 overflow-hidden">
              <Image 
                src="/images/large/_0359665-by-p.jpg"
                alt="Exquisite wedding catering at Riviera Waterfront Mansion Long Island wedding venue"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 58vw"
                quality={90}
              />
            </div>

            {/* Text Column */}
            <div className="lg:col-span-5 flex items-center order-2 lg:order-2 bg-white">
              <div ref={heroContentRef as any} className="px-6 sm:px-10 lg:px-12 xl:px-16 py-16 lg:py-20">
                <p className="text-riviera-gold text-xs sm:text-sm tracking-widest mb-6 font-light">
                  CHEF INSPIRED CONTINENTAL CUISINE
                </p>
                <h1 className="font-cormorant text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-wider text-riviera-text mb-6 leading-[1.1]">
                  WEDDING
                  <span className="block text-riviera-gold">CATERING</span>
                  <span className="block">& MENU</span>
                </h1>
                <p className="text-base sm:text-lg font-light text-riviera-text/70 mb-8 max-w-md leading-relaxed">
                  Experience exceptional Long Island wedding catering at Riviera Waterfront Mansion. Our chef inspired Continental menu will delight you and your guests from the first bite to the last.
                </p>
                <HoverScale effect="lift">
                  <a 
                    href="#menu-content"
                    className="bg-riviera-gold text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-text transition-all text-center block"
                  >
                    EXPLORE MENU →
                  </a>
                </HoverScale>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar - Menu Highlights */}
        <section className="bg-riviera-neutral py-10 md:py-12">
          <div className="mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <AnimatedSection animation="fadeInUp" delay={0}>
                <div className="text-4xl md:text-5xl font-light text-riviera-gold mb-2">5</div>
                <h3 className="text-xs tracking-widest text-riviera-text mb-1">HOUR OPEN BAR</h3>
                <p className="text-xs font-light text-riviera-text/70">Premium top shelf included</p>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={0.1}>
                <div className="text-4xl md:text-5xl font-light text-riviera-gold mb-2">2</div>
                <h3 className="text-xs tracking-widest text-riviera-text mb-1">SIGNATURE COCKTAILS</h3>
                <p className="text-xs font-light text-riviera-text/70">Create your custom drinks</p>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={0.2}>
                <div className="text-4xl md:text-5xl font-light text-riviera-gold mb-2">4</div>
                <h3 className="text-xs tracking-widest text-riviera-text mb-1">ENTREE SELECTIONS</h3>
                <p className="text-xs font-light text-riviera-text/70">For your reception dinner</p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="bg-riviera-text py-12 px-6 sm:px-8 lg:px-12">
          <AnimatedSection animation="fadeInUp" className="max-w-4xl mx-auto text-center text-white" as="div">
            <h2 className="font-cormorant text-2xl md:text-3xl font-light tracking-wide mb-3">
              Limited Long Island wedding dates available!
            </h2>
            <p className="text-sm tracking-wider mb-4 opacity-90">
              We only host weddings at our Massapequa waterfront venue
            </p>
            <p className="text-lg font-light mb-4">
              Call us today to check wedding date availability
            </p>
            <HoverScale effect="lift">
              <a 
                href="tel:+15165415020"
                className="inline-block text-2xl font-light hover:underline"
              >
                (516) 541 5020
              </a>
            </HoverScale>
            <p className="text-sm mt-4 font-light opacity-90">
              One wedding at a time with full exclusive use of our waterfront facility, grounds, and all amenities
            </p>
          </AnimatedSection>
        </section>

        {/* Menu Note */}
        <section className="py-12 px-6 sm:px-8 lg:px-12 bg-white">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fadeInUp" as="div">
              <p className="text-riviera-gold text-xs tracking-widest mb-3">PLEASE NOTE</p>
              <h2 className="font-cormorant text-xl font-light tracking-wide text-riviera-text mb-4">
                A note about our menu images
              </h2>
              <p className="text-sm font-light text-riviera-text/80 leading-relaxed">
                Some images presented in our online Long Island wedding catering menu are AI generated placeholders, intended to assist in search functionality and provide descriptive alt text for visually impaired users. These images serve as temporary visual guides until we can replace them with our own food photography. For additional details, menu customization, or dietary accommodations, please reach out to our experienced banquet team at <a href="tel:+15165415020" className="text-riviera-gold hover:underline">516-541-5020</a>.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Open Bar Section */}
        <section id="menu-content" className="py-16 md:py-24 px-6 sm:px-8 lg:px-12 bg-riviera-neutral">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fadeInUp" className="text-center mb-12" as="div">
              <p className="text-riviera-gold text-sm tracking-widest mb-3">INCLUDED WITH ALL WEDDINGS</p>
              <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-4">
                Five hour top shelf open bar
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="fadeInUp" delay={0.1} as="div">
              <div className="bg-white p-8 md:p-10">
                <ul className="text-base font-light text-riviera-text/80 space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-riviera-gold">✓</span>
                    Create 2 custom signature cocktails for your wedding day celebration
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-riviera-gold">✓</span>
                    Champagne toast, soft drinks, juices, and non-alcoholic beverages
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-riviera-gold">✓</span>
                    Premium top shelf liquors, craft beers, and fine wines
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-riviera-gold">✓</span>
                    Five hour top shelf open bar service included with all Long Island weddings
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Mid Page CTA - After Cocktail Hour Preview */}
        <InlineCTA
          eyebrow="EXPERIENCE OUR CULINARY EXCELLENCE"
          headline="Schedule a private tasting at our Long Island venue"
          description="Already impressed by our menu? Experience it firsthand with a private tasting at Riviera Waterfront Mansion. Sample our chef inspired Continental cuisine, customize your selections, and discuss dietary accommodations with our experienced banquet team."
          buttonText="REQUEST TASTING →"
          buttonHref="/contact"
          imageSrc={imageConfig.hero[0]}
          imageAlt="Gourmet cocktail hour at Riviera Waterfront Mansion Long Island wedding venue"
          imagePosition="right"
          background="white"
        />

        {/* Cocktail Hour - Cold Displays */}
        <section className="py-16 md:py-24 px-6 sm:px-8 lg:px-12 bg-riviera-neutral">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fadeInUp" className="text-center mb-12" as="div">
              <p className="text-riviera-gold text-sm tracking-widest mb-3">COCKTAIL HOUR</p>
              <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text">
                Gourmet cold displays and artisan boards
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'FRESH SEASONAL FRUIT DISPLAY', desc: 'Bountiful seasonal fruits beautifully arranged for a fresh and delightful presentation.' },
                { title: 'COLD MEATS BOARD', desc: 'Italian Cured Meats: Salami, Prosciutto, Mortadella, Pepperoni, Ham' },
                { title: 'FRESH SEASONAL FRUIT ON SKEWERS', desc: 'Colorful skewered fruit medley, showcasing seasonal freshness and vibrant flavors.' },
                { title: 'ASSORTED CHEESEBOARD', desc: 'Smoked Gouda, Extra Sharp Cheddar, Colby Jack, Provolone, Swiss with Artisan Crackers: Whole Wheat, Cracked Pepper, Plain, Pita Chip Style Crackers Garlic, Sour Cream and Parmesan' },
                { title: 'MEDITERRANEAN BOARD', desc: 'Grape Leaves, Kalamata Olives, Marinated Mushrooms, Pepperoncini, Feta Cheese, Giardiniera (cauliflower, carrots, celery, sliced green olives, serrano peppers)' },
                { title: 'HOMEMADE ANTIPASTO SALAD', desc: 'All Italian Favorites: Marinated Artichoke Hearts, Large Black Olives, Sun Dried Tomatoes, Provolone, Prosciutto, Salami, Ham, Pepperoni, Marinated Mushrooms, Pepperoncini in a Homemade Italian Dressing' },
                { title: 'FARM FRESH VEGETABLE CRUDITÉ', desc: 'Individual Cones Filled With Fresh Crispy Julienne Carrots, Tri Color Peppers, Asparagus, Celery And Cherry Tomatoes Displayed on A Wooden Stand' },
              ].map((item) => (
                <AnimatedSection key={item.title} animation="fadeInUp" as="div">
                  <HoverScale effect="lift">
                    <div className="bg-white overflow-hidden group border border-riviera-neutral/40 h-full flex flex-col">
                      <div className="relative aspect-[4/3] bg-white overflow-hidden border-b border-riviera-neutral/40">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-16 h-16 text-riviera-text/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xs tracking-widest text-riviera-gold mb-3">{item.title}</h3>
                        <p className="text-sm font-light text-riviera-text/70 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </HoverScale>
                </AnimatedSection>
              ))}
            </div>

            {/* Gourmet Cold Salads */}
            <div className="mt-16">
              <AnimatedSection animation="fadeInUp" className="mb-8" as="div">
                <h3 className="font-cormorant text-2xl font-light tracking-wide text-riviera-text">
                  Gourmet Cold Salads
                </h3>
              </AnimatedSection>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "RIVIERA'S SEAFOOD SALAD", desc: 'Large Shrimp, Medium Shrimp, New Zealand Green Shell Mussels, and Crabmeat in a Home Made (Secret Recipe) Dressing' },
                  { title: 'GREEK COUSCOUS SALAD', desc: 'Mediterranean Seasoned Couscous Cooked to Fluffy Perfection with Walnuts, Dried Cranberries, Red Seedless Grapes, and Feta Cheese' },
                  { title: 'PASSED HOT & COLD HORS D\'OEUVRES', desc: 'Various Types of Hot and Cold Hors D\'Oeuvres' },
                ].map((item) => (
                  <AnimatedSection key={item.title} animation="fadeInUp" as="div">
                  <HoverScale effect="lift">
                    <div className="bg-white overflow-hidden group border border-riviera-neutral/40 h-full flex flex-col">
                      <div className="relative aspect-[4/3] bg-white overflow-hidden border-b border-riviera-neutral/40">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-16 h-16 text-riviera-text/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h4 className="text-xs tracking-widest text-riviera-gold mb-3">{item.title}</h4>
                        <p className="text-sm font-light text-riviera-text/70 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </HoverScale>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Carving Station */}
        <section className="py-16 md:py-24 px-6 sm:px-8 lg:px-12 bg-riviera-neutral">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fadeInUp" className="text-center mb-12" as="div">
              <p className="text-riviera-gold text-sm tracking-widest mb-3">SELECT TWO CARVED MEATS</p>
              <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text">
                Butcher block carving station
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'BRISKET OF BEEF', desc: 'Cooked To Perfection with Mushroom Gravy' },
                { title: 'PASTRAMI', desc: 'with Spicy Brown Mustard, Russian Dressing and Sliced Rye Bread' },
                { title: 'MARINATED LONDON BROIL', desc: 'with Garlic Bread, Horseradish Sauce, and Beef Gravy' },
                { title: 'ROAST PORK TENDERLOIN', desc: 'In A Garlic Herb Crust' },
                { title: 'CORNED BEEF', desc: 'with Spicy Brown Mustard, Sauerkraut, and Sliced Rye Bread' },
                { title: 'ROASTED WHOLE TURKEY', desc: 'with Cranberry Chutney' },
                { title: 'GLAZED VIRGINIA HAM', desc: 'with Roasted Pineapples and Dijon Mustard' },
              ].map((item) => (
                <AnimatedSection key={item.title} animation="fadeInUp" as="div">
                  <HoverScale effect="lift">
                    <div className="bg-white overflow-hidden group border border-riviera-neutral/40 h-full flex flex-col">
                      <div className="relative aspect-[4/3] bg-white overflow-hidden border-b border-riviera-neutral/40">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-16 h-16 text-riviera-text/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xs tracking-widest text-riviera-text mb-2">{item.title}</h3>
                        <p className="text-sm font-light text-riviera-text/70 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </HoverScale>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Hot Gourmet Dishes */}
        <section className="py-16 md:py-24 px-6 sm:px-8 lg:px-12 bg-riviera-neutral">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fadeInUp" className="text-center mb-12" as="div">
              <p className="text-riviera-gold text-sm tracking-widest mb-3">SELECT EIGHT HOT DISHES</p>
              <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text">
                Hot gourmet dishes for cocktail hour
              </h2>
            </AnimatedSection>

            {/* Poultry */}
            <div className="mb-16">
              <AnimatedSection animation="fadeInUp" className="mb-8" as="div">
                <h3 className="font-cormorant text-2xl font-light tracking-wide text-riviera-text border-b border-riviera-neutral pb-4">
                  Poultry
                </h3>
              </AnimatedSection>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'CHICKEN PINA COLADA', desc: 'Sauteed Chicken with Diced Fresh Pineapples in a Cream of Coconut Sauce Topped with Fresh Toasted Coconut' },
                  { title: 'CHICKEN MARSALA', desc: 'Sauteed Chicken in A Sweet Marsala Wine and Mushroom Sauce' },
                  { title: 'CHICKEN SCARPARIELLO', desc: 'Roasted Chicken, Italian Sausage, Potatoes, Onions, Peppers in a Lemon Garlic Sauce' },
                  { title: 'CHICKEN FRANCESE', desc: 'Sauteed Chicken in A Lemon Butter White Wine Sauce' },
                  { title: 'ARROZ CON POLLO', desc: 'Chicken and Rice with Veggies seasoned with Spanish Spices and Saffron' },
                  { title: 'SESAME CHICKEN', desc: 'Chicken Breast Cubed dressed in A Sweet Sauce made from honey, rice wine vinegar, brown sugar topped with Sesame Seeds' },
                  { title: 'SWEET AND SOUR CHICKEN', desc: 'Fried Chicken Cubes with a mouthwatering Sweet and Sour Sauce' },
                ].map((item) => (
                  <AnimatedSection key={item.title} animation="fadeInUp" as="div">
                  <HoverScale effect="lift">
                    <div className="bg-white overflow-hidden group border border-riviera-neutral/40 h-full flex flex-col">
                      <div className="relative aspect-[4/3] bg-white overflow-hidden border-b border-riviera-neutral/40">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-16 h-16 text-riviera-text/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h4 className="text-xs tracking-widest text-riviera-text mb-2">{item.title}</h4>
                        <p className="text-sm font-light text-riviera-text/70 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </HoverScale>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Pasta */}
            <div className="mb-16">
              <AnimatedSection animation="fadeInUp" className="mb-8" as="div">
                <h3 className="font-cormorant text-2xl font-light tracking-wide text-riviera-text border-b border-riviera-neutral pb-4">
                  Pasta
                </h3>
              </AnimatedSection>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'TORTELLINI/FETTUCCINE ALFREDO', desc: 'Delicious tortellini/fettuccine smothered in our incredible Alfredo sauce' },
                  { title: 'RIGATONI WITH PROSCIUTTO', desc: 'White Cream Sauce with Parmesan Cheese Prosciutto and Peas' },
                  { title: 'PENNE ALA VODKA', desc: 'A Fan Favorite!' },
                  { title: 'PASTA PRIMAVERA', desc: 'Bowtie Pasta with Fresh Vegetables in a Garlic and Oil Sauce' },
                  { title: 'PENNE BOLOGNESE', desc: 'A Mixture of Ground Beef And Pork Meat In A Lite Cream Burgundy Sauce' },
                  { title: 'TORTELLINI CARBONARA', desc: 'Parmesan Cream Sauce with Bacon And Peas' },
                  { title: "RIVIERA'S PASTA", desc: 'Bow tie pasta with Sun dried Tomatoes, Artichoke Hearts and Mushrooms in a Garlic and Oil Sauce' },
                ].map((item) => (
                  <AnimatedSection key={item.title} animation="fadeInUp" as="div">
                  <HoverScale effect="lift">
                    <div className="bg-white overflow-hidden group border border-riviera-neutral/40 h-full flex flex-col">
                      <div className="relative aspect-[4/3] bg-white overflow-hidden border-b border-riviera-neutral/40">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-16 h-16 text-riviera-text/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h4 className="text-xs tracking-widest text-riviera-text mb-2">{item.title}</h4>
                        <p className="text-sm font-light text-riviera-text/70 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </HoverScale>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Vegan & Vegetarian */}
            <div className="mb-16">
              <AnimatedSection animation="fadeInUp" className="mb-8" as="div">
                <h3 className="font-cormorant text-2xl font-light tracking-wide text-riviera-text border-b border-riviera-neutral pb-4">
                  Vegan & Vegetarian
                </h3>
              </AnimatedSection>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'EGGPLANT ROLLATINI', desc: 'Slices Of Breaded Pan Fried Eggplant Stuffed with Ricotta, Mozzarella, Parmesan Cheese, Baked and Placed on Top Of Our Homemade Marinara sauce' },
                  { title: 'VEGETABLE STIR FRY', desc: 'Fresh Vegetables Sauteed And Topped with the sauce of your choice: Garlic and Oil, Marinara or Teriyaki' },
                ].map((item) => (
                  <AnimatedSection key={item.title} animation="fadeInUp" as="div">
                  <HoverScale effect="lift">
                    <div className="bg-white overflow-hidden group border border-riviera-neutral/40 h-full flex flex-col">
                      <div className="relative aspect-[4/3] bg-white overflow-hidden border-b border-riviera-neutral/40">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-16 h-16 text-riviera-text/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h4 className="text-xs tracking-widest text-riviera-text mb-2">{item.title}</h4>
                        <p className="text-sm font-light text-riviera-text/70 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </HoverScale>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Seafood */}
            <div className="mb-16">
              <AnimatedSection animation="fadeInUp" className="mb-8" as="div">
                <h3 className="font-cormorant text-2xl font-light tracking-wide text-riviera-text border-b border-riviera-neutral pb-4">
                  Seafood
                </h3>
              </AnimatedSection>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'FRIED CALAMARI', desc: 'Succulent crispy calamari' },
                  { title: 'SEAFOOD PAELLA', desc: 'Clams, Mussels, Shrimp in a Saffron Seasoned Rice' },
                  { title: 'SEAFOOD NEWBURG', desc: 'Scallops, Shrimp Crabmeat in a sherry white cream sauce' },
                  { title: 'SEAFOOD FRA DIABLO', desc: 'Mussels, Shrimp, Scallop, Clams in A Spicy Tomato Sauce' },
                  { title: 'JAMBALAYA', desc: 'Shrimp, Chicken, Andouille Sausage mixed in with Seasoned Rice' },
                  { title: 'SHRIMP SCAMPI', desc: 'with Broccoli Over Rice or Pasta' },
                  { title: 'WHITE OR RED CLAM SAUCE WITH LINGUINE', desc: 'Fresh clams and seasoning tossed with New England Red and New York White sauces' },
                  { title: 'BAKED CLAMS', desc: 'A blend of succulent clams and breadcrumbs encased in a natural shell' },
                ].map((item) => (
                  <AnimatedSection key={item.title} animation="fadeInUp" as="div">
                  <HoverScale effect="lift">
                    <div className="bg-white overflow-hidden group border border-riviera-neutral/40 h-full flex flex-col">
                      <div className="relative aspect-[4/3] bg-white overflow-hidden border-b border-riviera-neutral/40">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-16 h-16 text-riviera-text/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h4 className="text-xs tracking-widest text-riviera-text mb-2">{item.title}</h4>
                        <p className="text-sm font-light text-riviera-text/70 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </HoverScale>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Beef */}
            <div>
              <AnimatedSection animation="fadeInUp" className="mb-8" as="div">
                <h3 className="font-cormorant text-2xl font-light tracking-wide text-riviera-text border-b border-riviera-neutral pb-4">
                  Beef
                </h3>
              </AnimatedSection>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'SWEDISH MEATBALLS', desc: 'Made with a Combination of Ground Beef and Pork Baked and Served in a Cream Gravy Sauce' },
                  { title: 'BEEF TERIYAKI', desc: 'Slices of Beef in Teriyaki Sauce with Chinese Vegetables over Lo Mein Noodles' },
                  { title: 'ITALIAN MEATBALLS', desc: 'Made with a Combination of Ground Beef and Pork Cooked in Our Homemade Tomato Sauce' },
                  { title: 'SAUSAGE AND PEPPERS', desc: 'Italian Sausage with Peppers and Onions in a Light Tomato Sauce' },
                  { title: 'BEEF BOURGUIGNON', desc: 'Beef Stew Braised in Red Wine Sauce with Mushrooms Carrots and Onions' },
                  { title: 'BEEF STROGANOFF', desc: 'Thin Strips of Beef with Onions, Mushrooms in a Sour Cream Gravy over Egg Noodle' },
                  { title: 'KIELBASA AND SAUERKRAUT', desc: 'Savory Beef Kielbasa with Tangy Sauerkraut' },
                ].map((item) => (
                  <AnimatedSection key={item.title} animation="fadeInUp" as="div">
                  <HoverScale effect="lift">
                    <div className="bg-white overflow-hidden group border border-riviera-neutral/40 h-full flex flex-col">
                      <div className="relative aspect-[4/3] bg-white overflow-hidden border-b border-riviera-neutral/40">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-16 h-16 text-riviera-text/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h4 className="text-xs tracking-widest text-riviera-text mb-2">{item.title}</h4>
                        <p className="text-sm font-light text-riviera-text/70 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </HoverScale>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Premium Station Additions */}
        <section className="py-16 md:py-24 px-6 sm:px-8 lg:px-12 bg-riviera-text text-white">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fadeInUp" className="text-center mb-12" as="div">
              <p className="text-riviera-gold text-sm tracking-widest mb-3">ELEVATE YOUR COCKTAIL HOUR</p>
              <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide">
                Premium station additions
              </h2>
              <p className="text-sm font-light opacity-80 mt-4">
                Call (516) 541 5020 for pricing and seasonal availability!
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'SUSHI BAR', desc: 'Fresh assorted handcrafted gourmet sushi served with soy sauce and wasabi' },
                { title: 'TACO BAR', desc: 'Create your fiesta with our build your own taco station' },
                { title: 'OYSTER BAR', desc: 'Fresh clams and oysters served on the half shell with cocktail sauce, lemon, and various other sides' },
                { title: 'BACON STATION', desc: 'Bacon, bacon, bacon! One of our most popular cocktail hour stations' },
                { title: 'LOBSTER BAR', desc: 'Premium Maine lobster, chilled, pre cut, and cracked' },
                { title: 'MAC & CHEESE', desc: 'Homestyle baked mac and cheese with toppings galore' },
              ].map((item) => (
                <AnimatedSection key={item.title} animation="fadeInUp" as="div">
                  <HoverScale effect="lift">
                    <div className="bg-riviera-text overflow-hidden group">
                      <div className="relative aspect-[4/3] bg-white/10 overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-16 h-16 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="p-6 border border-white/20 border-t-0 group-hover:border-riviera-gold transition-colors">
                        <h3 className="text-xs tracking-widest text-riviera-gold mb-3">{item.title}</h3>
                        <p className="text-sm font-light opacity-80 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </HoverScale>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Editorial Photo Break */}
        <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
          <HoverScale scale={1.05} duration={1}>
            <Image 
              src={imageConfig.homepage.whyChooseUs}
              alt="Elegant ballroom reception at Riviera Waterfront Mansion"
              fill
              className="object-cover"
              sizes="100vw"
              quality={90}
            />
          </HoverScale>
          <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent" />
          <AnimatedSection animation="fadeInUp" delay={0.3} className="absolute inset-0 flex items-center justify-end" as="div">
            <div className="px-6 sm:px-8 lg:px-12 max-w-xl text-right">
              <p className="text-riviera-gold text-sm tracking-widest mb-4">RECEPTION DINNER</p>
              <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-white mb-4 leading-tight">
                Grand ballroom wedding reception dining
              </h2>
            </div>
          </AnimatedSection>
        </section>

        {/* Ballroom Reception - Duet Plates */}
        <section className="py-16 md:py-24 px-6 sm:px-8 lg:px-12 bg-riviera-neutral">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fadeInUp" className="text-center mb-8" as="div">
              <p className="text-riviera-gold text-sm tracking-widest mb-3">SEATED PLATED DINNER WITH CHAMPAGNE TOAST</p>
              <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-4">
                Duet plates: elegant salads and starters
              </h2>
              <p className="text-sm font-light text-riviera-text/70 max-w-2xl mx-auto">
                All dietary restrictions can be accommodated. Many dishes can be made to your preference and gluten free options are available.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'FRESH TOMATO AND MOZZARELLA', desc: 'served on a bed of Mesclun Greens topped with an Aged Balsamic Vinaigrette' },
                { title: 'BRUSCHETTA ON TOASTED PARMESAN CRUSTED SEMOLINA BREAD', desc: 'Vine Ripe Tomatoes, Black Olives, Red Onions, Celery, Provolone Cheese, Garlic with a Red Wine Vinaigrette Dressing On Mesclun Greens' },
                { title: 'WARM MOZZARELLA SALAD', desc: 'Mesclun Greens With Fresh Strawberries, Candied Walnuts, Bread Fried Mozzarella Served with a Raspberry Vinaigrette' },
              ].map((item) => (
                <AnimatedSection key={item.title} animation="fadeInUp" as="div">
                  <HoverScale effect="lift">
                    <div className="bg-white overflow-hidden group border border-riviera-neutral/40 h-full flex flex-col">
                      <div className="relative aspect-[4/3] bg-white overflow-hidden border-b border-riviera-neutral/40">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-16 h-16 text-riviera-text/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xs tracking-widest text-riviera-gold mb-3">{item.title}</h3>
                        <p className="text-sm font-light text-riviera-text/70 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </HoverScale>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Main Entrees */}
        <section className="py-16 md:py-24 px-6 sm:px-8 lg:px-12 bg-riviera-neutral">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fadeInUp" className="text-center mb-12" as="div">
              <p className="text-riviera-gold text-sm tracking-widest mb-3">SELECT FOUR ENTREES FOR YOUR GUESTS</p>
              <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-4">
                Main wedding entrees
              </h2>
              <p className="text-sm font-light text-riviera-text/70">
                All entrees served with seasonal fresh vegetables and your choice of: garlic mashed potatoes, rice pilaf, or roasted red bliss potatoes
              </p>
            </AnimatedSection>

            {/* Beef Entrees */}
            <div className="mb-16">
              <AnimatedSection animation="fadeInUp" className="mb-8" as="div">
                <h3 className="font-cormorant text-2xl font-light tracking-wide text-riviera-text">Beef</h3>
              </AnimatedSection>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'PRIME RIB', desc: 'Roasted Prime Rib served with an Au Jus Sauce' },
                  { title: 'FILET MIGNON *Additional Cost', desc: 'Grilled to Perfection. Served with a Bearnaise Sauce' },
                  { title: 'NEW YORK SHELL STEAK', desc: 'Grilled and served with caramelized onions and mushrooms' },
                  { title: 'CHATEAUBRIAND', desc: 'Sliced Filet Mignon served with a Creamy Sherry Mushroom Sauce' },
                  { title: 'SURF & TURF *Additional Cost', desc: 'Lobster Tail 4 oz. & Filet Mignon 8oz. Served Together' },
                ].map((item) => (
                  <AnimatedSection key={item.title} animation="fadeInUp" as="div">
                  <HoverScale effect="lift">
                    <div className="bg-white overflow-hidden group border border-riviera-neutral/40 h-full flex flex-col">
                      <div className="relative aspect-[4/3] bg-white overflow-hidden border-b border-riviera-neutral/40">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-16 h-16 text-riviera-text/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h4 className="text-xs tracking-widest text-riviera-text mb-2">{item.title}</h4>
                        <p className="text-sm font-light text-riviera-text/70 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </HoverScale>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Poultry Entrees */}
            <div className="mb-16">
              <AnimatedSection animation="fadeInUp" className="mb-8" as="div">
                <h3 className="font-cormorant text-2xl font-light tracking-wide text-riviera-text">Poultry</h3>
              </AnimatedSection>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'CHICKEN PRINCESS', desc: 'Grilled Chicken Breast Stuffed with Asparagus, Red Roasted Peppers Topped with Mozzarella Cheese served with a Light Lemon Herb Sauce' },
                  { title: "ROAST DUCK A L'ORANGE", desc: 'Roasted Succulent Duck Served in a Citrus Sauce' },
                  { title: 'CHICKEN ROMANO', desc: 'Sauteed Chicken Breast with Artichoke Hearts and Mushrooms Served in a Cognac Cream Sauce' },
                  { title: 'CHICKEN PICCATA', desc: 'Sauteed Chicken Breast Served with a Lemon Caper Sauce' },
                  { title: 'CHICKEN CORDON BLEU', desc: 'Breaded Chicken Breast Stuffed with Prosciutto and Swiss Cheese Served with a Mushroom Sauce' },
                ].map((item) => (
                  <AnimatedSection key={item.title} animation="fadeInUp" as="div">
                  <HoverScale effect="lift">
                    <div className="bg-white overflow-hidden group border border-riviera-neutral/40 h-full flex flex-col">
                      <div className="relative aspect-[4/3] bg-white overflow-hidden border-b border-riviera-neutral/40">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-16 h-16 text-riviera-text/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h4 className="text-xs tracking-widest text-riviera-text mb-2">{item.title}</h4>
                        <p className="text-sm font-light text-riviera-text/70 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </HoverScale>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Seafood Entrees */}
            <div className="mb-16">
              <AnimatedSection animation="fadeInUp" className="mb-8" as="div">
                <h3 className="font-cormorant text-2xl font-light tracking-wide text-riviera-text">Seafood</h3>
              </AnimatedSection>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'SALMON', desc: 'Choose From: Lemon Dill Sauce OR Oreganata: Blended Herbs, Garlic, Basil, Sun Dried Tomatoes Bread Crumbs Encrusted on Broiled Salmon with a Garlic Scampi Sauce' },
                  { title: 'STRIPED BASS (Seasonal)', desc: 'Served with a Dijon Cream Sauce' },
                  { title: 'STUFFED FLOUNDER', desc: 'Filet Of Flounder Stuffed with Shrimp, Scallops, Crabmeat and Bread Crumbs' },
                  { title: 'GRILLED SWORDFISH', desc: 'Served with a Lemon Caper Sauce' },
                  { title: 'STUFFED SHRIMP', desc: 'Scallop and Crabmeat Stuffed Jumbo Shrimp with Lemon Butter Sauce' },
                ].map((item) => (
                  <AnimatedSection key={item.title} animation="fadeInUp" as="div">
                  <HoverScale effect="lift">
                    <div className="bg-white overflow-hidden group border border-riviera-neutral/40 h-full flex flex-col">
                      <div className="relative aspect-[4/3] bg-white overflow-hidden border-b border-riviera-neutral/40">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-16 h-16 text-riviera-text/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h4 className="text-xs tracking-widest text-riviera-text mb-2">{item.title}</h4>
                        <p className="text-sm font-light text-riviera-text/70 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </HoverScale>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Vegan/Vegetarian Entrees */}
            <div className="mb-16">
              <AnimatedSection animation="fadeInUp" className="mb-8" as="div">
                <h3 className="font-cormorant text-2xl font-light tracking-wide text-riviera-text">Vegan / Vegetarian</h3>
              </AnimatedSection>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'PORTABELLA MUSHROOM TOWER', desc: 'Grilled Eggplant, Red Pepper, Yellow and Green Squash Stacked on Top of a Grilled Portabella Mushroom with a Balsamic Glaze' },
                  { title: 'WILD MUSHROOM RISOTTO', desc: 'With Aged Parmesan Cheese and Olive Oil' },
                  { title: 'STUFFED EGGPLANT', desc: 'Eggplant Stuffed with Carrots, Mushrooms, Celery, Onions, Bell Peppers, Asparagus and Seasoned Bread Crumbs' },
                ].map((item) => (
                  <AnimatedSection key={item.title} animation="fadeInUp" as="div">
                  <HoverScale effect="lift">
                    <div className="bg-white overflow-hidden group border border-riviera-neutral/40 h-full flex flex-col">
                      <div className="relative aspect-[4/3] bg-white overflow-hidden border-b border-riviera-neutral/40">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-16 h-16 text-riviera-text/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h4 className="text-xs tracking-widest text-riviera-text mb-2">{item.title}</h4>
                        <p className="text-sm font-light text-riviera-text/70 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </HoverScale>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Pork/Veal Entrees */}
            <div>
              <AnimatedSection animation="fadeInUp" className="mb-8" as="div">
                <h3 className="font-cormorant text-2xl font-light tracking-wide text-riviera-text">Pork / Veal</h3>
              </AnimatedSection>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'GRILLED BONE IN PORK CHOP', desc: 'An Inch and Half Pork Chop Grilled to Perfection. Topped with your choice of Apple, Onion, Brown Sugar and Cinnamon Chutney OR Pineapple, Mango Cajun Sauce' },
                  { title: 'VEAL MARSALA', desc: 'Veal Cutlets Sauteed and Cooked in a Marsala Wine, Mushroom, Butter Sauce' },
                ].map((item) => (
                  <AnimatedSection key={item.title} animation="fadeInUp" as="div">
                  <HoverScale effect="lift">
                    <div className="bg-white overflow-hidden group border border-riviera-neutral/40 h-full flex flex-col">
                      <div className="relative aspect-[4/3] bg-white overflow-hidden border-b border-riviera-neutral/40">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-16 h-16 text-riviera-text/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h4 className="text-xs tracking-widest text-riviera-text mb-2">{item.title}</h4>
                        <p className="text-sm font-light text-riviera-text/70 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </HoverScale>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Wedding Day Features */}
        <section className="py-16 md:py-24 px-6 sm:px-8 lg:px-12 bg-white">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fadeInUp" className="text-center mb-12" as="div">
              <p className="text-riviera-gold text-sm tracking-widest mb-3">INCLUDED WITH YOUR WEDDING</p>
              <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text">
                Wedding day features at Riviera
              </h2>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Oval Tables Giving The Riviera The Barn Feel In An Elegant Manner',
                'Linens: Tablecloths And Napkins',
                'A Binder Filled With Important Information And Guidance For Your Special Day',
                'Entire Floor Suite With Two Balconies; One Overlooking the Ballroom and One Outside',
                'Captain, Bartenders, Wait Staff, Bussers, Bar Back To Make Sure All Your Details Are Executed To Perfection',
                'Bridal Attendant To See To Your Every Need',
                "A Personal Maitre'D Will Orchestrate Your Ceremony And Wedding Reception",
                'Full Access Of The Grounds Inside And Outside The Whole Time',
                'The Mansion Is For Your Full Enjoyment Since It Is Only You And Your Guests',
                'The Full Mansion Experience',
              ].map((feature) => (
                <AnimatedSection key={feature} animation="fadeInUp" as="div">
                  <div className="flex items-start gap-3 p-4 bg-riviera-neutral/30">
                    <span className="text-riviera-gold mt-1">✓</span>
                    <p className="text-sm font-light text-riviera-text/80">{feature}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Late Night Exit Stations */}
        <section className="py-16 md:py-24 px-6 sm:px-8 lg:px-12 bg-riviera-neutral">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fadeInUp" className="text-center mb-12" as="div">
              <p className="text-riviera-gold text-sm tracking-widest mb-3">SEND GUESTS HOME HAPPY</p>
              <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text">
                Late night exit stations
              </h2>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'WHITE CASTLE', desc: "Did someone say white castle? We've got you covered." },
                { title: 'DONUT WALL', desc: 'Your guests can indulge in an assortment of sweet treats baked with love.' },
                { title: 'HOT PRETZELS', desc: 'Hot and fresh gourmet pretzels served with cheese, mustard, or icing.' },
                { title: 'DRINKS & CHIPS', desc: 'Choose from an assortment of your favorite snacks and beverages.' },
                { title: 'TACO BELL', desc: "Grab everybody's late night favorite snack on your way home." },
                { title: 'ALL AMERICAN', desc: "Long Island's favorite classic burger drive in as a unique parting favor." },
              ].map((item) => (
                <AnimatedSection key={item.title} animation="fadeInUp" as="div">
                  <HoverScale effect="lift">
                    <div className="bg-white overflow-hidden group border border-riviera-neutral/40 h-full flex flex-col">
                      <div className="relative aspect-[4/3] bg-white overflow-hidden border-b border-riviera-neutral/40">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-16 h-16 text-riviera-text/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xs tracking-widest text-riviera-gold mb-3">{item.title}</h3>
                        <p className="text-sm font-light text-riviera-text/70 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </HoverScale>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection 
          faqs={menuFAQs}
          title="Wedding catering & menu questions"
          eyebrow="YOUR MENU QUESTIONS ANSWERED"
          background="neutral"
        />

        {/* Final CTA - Book Wedding */}
        <CTASection
          eyebrow="READY TO SECURE YOUR WEDDING DATE?"
          headline="Book your Massapequa waterfront wedding today"
          description="Limited dates available for 2026 and 2027. Contact us to check availability, schedule an in person venue tour, arrange a private menu tasting, and begin planning your dream Long Island waterfront wedding."
          background="dark"
          buttons={[
            {
              text: 'CHECK AVAILABILITY →',
              href: '/contact',
              intent: 'schedule',
            },
            {
              text: 'CALL (516) 541 5020',
              href: 'tel:+15165415020',
              intent: 'call',
              external: true,
            },
          ]}
        />
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
                name: 'Wedding Menu'
              }
            ]
          })
        }}
      />
      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: menuFAQs.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
              }
            }))
          })
        }}
      />
    </>
  );
}
