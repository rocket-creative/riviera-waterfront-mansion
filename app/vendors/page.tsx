'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { AnimatedSection } from '../components/AnimatedSection';
import { HoverScale } from '../components/HoverScale';
import { useStaggerChildren, useScrollTriggerCleanup } from '../lib/useAnimations';

export default function VendorsPage() {
  useScrollTriggerCleanup();

  return (
    <>
      <Header />
      
      <main id="main">
        {/* Hero Section */}
        <section className="bg-riviera-neutral py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp" className="max-w-4xl mx-auto text-center" as="div">
            <h1 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-riviera-text mb-6">
              Preferred Vendors
            </h1>
            <p className="text-lg md:text-xl font-light text-riviera-text/70 max-w-3xl mx-auto">
              Our Preferred Vendors have been hand picked by The Riviera at Massapequa. These professionals can help make your event a great success. Please click on the links below for additional information on their professional services. All vendors are listed in alphabetical order. For more information, don't hesitate to get in touch with our banquet department at (516) 541 5020.
            </p>
          </AnimatedSection>
        </section>

        {/* Vendors List */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            
            {/* Photography */}
            <div className="mb-16">
              <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-8">
                Photography
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-riviera-neutral p-6 hover:border-riviera-gold transition-colors">
                  <h3 className="text-lg font-light text-riviera-text mb-2">Elena Kay Photography</h3>
                  <a 
                    href="https://www.elenakayphotography.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-riviera-gold hover:underline block mb-1"
                  >
                    www.elenakayphotography.com
                  </a>
                  <a href="tel:6312135013" className="text-sm text-riviera-text/70 hover:text-riviera-text">
                    (631) 213 5013
                  </a>
                </div>

                <div className="border border-riviera-neutral p-6 hover:border-riviera-gold transition-colors">
                  <h3 className="text-lg font-light text-riviera-text mb-2">Jovon Photography & Video</h3>
                  <a 
                    href="https://www.Jovonphotographyandvideo.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-riviera-gold hover:underline block mb-1"
                  >
                    www.Jovonphotographyandvideo.com
                  </a>
                  <a href="tel:5169223535" className="text-sm text-riviera-text/70 hover:text-riviera-text">
                    (516) 922 3535
                  </a>
                </div>

                <div className="border border-riviera-neutral p-6 hover:border-riviera-gold transition-colors">
                  <h3 className="text-lg font-light text-riviera-text mb-2">Glenmar Studio</h3>
                  <a 
                    href="https://www.glenmarstudio.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-riviera-gold hover:underline block mb-1"
                  >
                    www.glenmarstudio.com
                  </a>
                  <a href="tel:5164844646" className="text-sm text-riviera-text/70 hover:text-riviera-text">
                    (516) 484 4646
                  </a>
                </div>

                <div className="border border-riviera-neutral p-6 hover:border-riviera-gold transition-colors">
                  <h3 className="text-lg font-light text-riviera-text mb-2">Wavelight Photography</h3>
                  <a 
                    href="https://wavelightphoto.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-riviera-gold hover:underline block mb-1"
                  >
                    wavelightphoto.com
                  </a>
                  <a href="tel:5164456937" className="text-sm text-riviera-text/70 hover:text-riviera-text">
                    (516) 445 6937
                  </a>
                </div>
              </div>
            </div>

            {/* DJ Entertainment */}
            <div className="mb-16">
              <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-8">
                DJ Entertainment
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-riviera-neutral p-6 hover:border-riviera-gold transition-colors">
                  <h3 className="text-lg font-light text-riviera-text mb-2">After Hours</h3>
                  <a 
                    href="https://www.afterhoursent.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-riviera-gold hover:underline block mb-1"
                  >
                    www.afterhoursent.com
                  </a>
                  <a href="tel:6317362921" className="text-sm text-riviera-text/70 hover:text-riviera-text">
                    (631) 736 2921
                  </a>
                </div>

                <div className="border border-riviera-neutral p-6 hover:border-riviera-gold transition-colors">
                  <h3 className="text-lg font-light text-riviera-text mb-2">Barattini Productions</h3>
                  <a 
                    href="https://www.BarattiniProductions.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-riviera-gold hover:underline block mb-1"
                  >
                    www.BarattiniProductions.com
                  </a>
                  <a href="tel:6319792662" className="text-sm text-riviera-text/70 hover:text-riviera-text">
                    (631) 979 2662
                  </a>
                </div>

                <div className="border border-riviera-neutral p-6 hover:border-riviera-gold transition-colors">
                  <h3 className="text-lg font-light text-riviera-text mb-2">Sensational Sounds</h3>
                  <a 
                    href="https://www.djsensationalsounds.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-riviera-gold hover:underline block mb-1"
                  >
                    www.djsensationalsounds.com
                  </a>
                  <a href="tel:6318642323" className="text-sm text-riviera-text/70 hover:text-riviera-text">
                    (631) 864 2323
                  </a>
                </div>

                <div className="border border-riviera-neutral p-6 hover:border-riviera-gold transition-colors">
                  <h3 className="text-lg font-light text-riviera-text mb-2">Variety Music</h3>
                  <a 
                    href="https://www.varietydj.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-riviera-gold hover:underline block mb-1"
                  >
                    www.varietydj.com
                  </a>
                  <a href="tel:5169222299" className="text-sm text-riviera-text/70 hover:text-riviera-text">
                    (516) 922 2299
                  </a>
                </div>
              </div>
            </div>

            {/* Bands */}
            <div className="mb-16">
              <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-8">
                Bands
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-riviera-neutral p-6 hover:border-riviera-gold transition-colors">
                  <h3 className="text-lg font-light text-riviera-text mb-2">Ready In 10</h3>
                  <a 
                    href="https://www.readyin10.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-riviera-gold hover:underline block mb-1"
                  >
                    www.readyin10.com
                  </a>
                  <a href="tel:5163174853" className="text-sm text-riviera-text/70 hover:text-riviera-text">
                    (516) 317 4853
                  </a>
                </div>
              </div>
            </div>

            {/* Lighting */}
            <div className="mb-16">
              <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-8">
                Lighting
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-riviera-neutral p-6 hover:border-riviera-gold transition-colors">
                  <h3 className="text-lg font-light text-riviera-text mb-2">Gal's Lights (Riviera Only)</h3>
                  <p className="text-sm text-riviera-text/70 mb-1">Edison & Tulle Lighting</p>
                  <a href="tel:5168042363" className="text-sm text-riviera-text/70 hover:text-riviera-text">
                    (516) 804 2363
                  </a>
                </div>
              </div>
            </div>

            {/* Limousines */}
            <div className="mb-16">
              <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-8">
                Limousines
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-riviera-neutral p-6 hover:border-riviera-gold transition-colors">
                  <h3 className="text-lg font-light text-riviera-text mb-2">Mark of Elegance</h3>
                  <a 
                    href="https://www.markofelegance.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-riviera-gold hover:underline block mb-1"
                  >
                    www.markofelegance.com
                  </a>
                  <a href="tel:5165067155" className="text-sm text-riviera-text/70 hover:text-riviera-text">
                    (516) 506 7155
                  </a>
                </div>

                <div className="border border-riviera-neutral p-6 hover:border-riviera-gold transition-colors">
                  <h3 className="text-lg font-light text-riviera-text mb-2">Dynasty Limousine</h3>
                  <a 
                    href="https://www.dynastylimosli.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-riviera-gold hover:underline block mb-1"
                  >
                    www.dynastylimosli.com
                  </a>
                  <a href="tel:6315878500" className="text-sm text-riviera-text/70 hover:text-riviera-text">
                    (631) 587 8500
                  </a>
                </div>
              </div>
            </div>

            {/* Florist */}
            <div className="mb-16">
              <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-8">
                Florist
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-riviera-neutral p-6 hover:border-riviera-gold transition-colors">
                  <h3 className="text-lg font-light text-riviera-text mb-2">Tim's Florist</h3>
                  <a 
                    href="https://www.timsflorist.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-riviera-gold hover:underline block mb-1"
                  >
                    www.timsflorist.com
                  </a>
                  <a href="tel:5165416001" className="text-sm text-riviera-text/70 hover:text-riviera-text">
                    (516) 541 6001
                  </a>
                </div>

                <div className="border border-riviera-neutral p-6 hover:border-riviera-gold transition-colors">
                  <h3 className="text-lg font-light text-riviera-text mb-2">Tom's Towers Flowers</h3>
                  <a href="tel:6314226714" className="text-sm text-riviera-text/70 hover:text-riviera-text">
                    (631) 422 6714
                  </a>
                </div>
              </div>
            </div>

            {/* Bakery */}
            <div className="mb-16">
              <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-8">
                Bakery
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-riviera-neutral p-6 hover:border-riviera-gold transition-colors">
                  <h3 className="text-lg font-light text-riviera-text mb-2">Batter Up Bakery</h3>
                  <a 
                    href="https://batterupbakeryny.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-riviera-gold hover:underline block mb-1"
                  >
                    batterupbakeryny.com
                  </a>
                  <a href="tel:5166814743" className="text-sm text-riviera-text/70 hover:text-riviera-text">
                    (516) 681 4743
                  </a>
                </div>

                <div className="border border-riviera-neutral p-6 hover:border-riviera-gold transition-colors">
                  <h3 className="text-lg font-light text-riviera-text mb-2">Francesco's Bakery</h3>
                  <a 
                    href="https://www.francescosbakery.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-riviera-gold hover:underline block mb-1"
                  >
                    www.francescosbakery.com
                  </a>
                  <a href="tel:5169316821" className="text-sm text-riviera-text/70 hover:text-riviera-text">
                    (516) 931 6821
                  </a>
                </div>
              </div>
            </div>

            {/* Décor/Backdrops */}
            <div className="mb-16">
              <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-8">
                Décor/Backdrops
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-riviera-neutral p-6 hover:border-riviera-gold transition-colors">
                  <h3 className="text-lg font-light text-riviera-text mb-2">Element Events</h3>
                  <a 
                    href="https://www.elementeventsli.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-riviera-gold hover:underline block mb-1"
                  >
                    www.elementeventsli.com
                  </a>
                  <a href="tel:6317867141" className="text-sm text-riviera-text/70 hover:text-riviera-text">
                    631 786 7141
                  </a>
                </div>
              </div>
            </div>

            {/* Fireworks */}
            <div className="mb-16">
              <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-8">
                Fireworks
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-riviera-neutral p-6 hover:border-riviera-gold transition-colors">
                  <h3 className="text-lg font-light text-riviera-text mb-2">Starfire Corporation</h3>
                  <p className="text-sm text-riviera-text/70 mb-1">Charles Rappa</p>
                  <a href="tel:6316244972" className="text-sm text-riviera-text/70 hover:text-riviera-text">
                    (631) 624 4972
                  </a>
                </div>

                <div className="border border-riviera-neutral p-6 hover:border-riviera-gold transition-colors">
                  <h3 className="text-lg font-light text-riviera-text mb-2">Grucci Fireworks</h3>
                  <a 
                    href="https://www.grucci.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-riviera-gold hover:underline block mb-1"
                  >
                    www.grucci.com
                  </a>
                  <a href="tel:6312860088" className="text-sm text-riviera-text/70 hover:text-riviera-text">
                    (631) 286 0088
                  </a>
                </div>

                <div className="border border-riviera-neutral p-6 hover:border-riviera-gold transition-colors">
                  <h3 className="text-lg font-light text-riviera-text mb-2">Volt Live</h3>
                  <a 
                    href="mailto:info@voltlive.com"
                    className="text-sm text-riviera-gold hover:underline block mb-1"
                  >
                    info@voltlive.com
                  </a>
                  <a href="tel:18006063716" className="text-sm text-riviera-text/70 hover:text-riviera-text">
                    1 800 606 3716
                  </a>
                </div>
              </div>
            </div>

            {/* Patio Heaters */}
            <div className="mb-16">
              <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-8">
                Patio Heaters
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-riviera-neutral p-6 hover:border-riviera-gold transition-colors">
                  <h3 className="text-lg font-light text-riviera-text mb-2">Rainbow Tents (Heater Rentals)</h3>
                  <a 
                    href="https://www.rainbowtents.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-riviera-gold hover:underline block mb-1"
                  >
                    www.rainbowtents.com
                  </a>
                  <a href="tel:6316657368" className="text-sm text-riviera-text/70 hover:text-riviera-text">
                    (631) 665 RENT
                  </a>
                </div>
              </div>
            </div>

            {/* Hotels */}
            <div className="mb-16">
              <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-8">
                Hotels
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-riviera-neutral p-6 hover:border-riviera-gold transition-colors">
                  <h3 className="text-lg font-light text-riviera-text mb-2">Courtyard Marriott</h3>
                  <p className="text-sm text-riviera-text/70 mb-1">2 Marriott Plaza</p>
                  <p className="text-sm text-riviera-text/70 mb-2">Farmingdale, New York 11735</p>
                  <a href="tel:6319276910" className="text-sm text-riviera-text/70 hover:text-riviera-text">
                    (631) 927 6910
                  </a>
                </div>
              </div>
            </div>

            {/* Live Painter */}
            <div className="mb-16">
              <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-8">
                Live Painter
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-riviera-neutral p-6 hover:border-riviera-gold transition-colors">
                  <h3 className="text-lg font-light text-riviera-text mb-2">Till Death Do Us Art</h3>
                  <p className="text-sm text-riviera-text/70 mb-1">Instagram: @Tildeathdous.art</p>
                  <a 
                    href="mailto:Paintmyweddingbyelle@gmail.com"
                    className="text-sm text-riviera-gold hover:underline block mb-1"
                  >
                    Paintmyweddingbyelle@gmail.com
                  </a>
                  <a href="tel:7186892686" className="text-sm text-riviera-text/70 hover:text-riviera-text">
                    (718) 689 2686
                  </a>
                </div>
              </div>
            </div>

            {/* Cigar Roller */}
            <div className="mb-16">
              <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-8">
                Cigar Roller
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-riviera-neutral p-6 hover:border-riviera-gold transition-colors">
                  <h3 className="text-lg font-light text-riviera-text mb-2">Village Cigar Headquarters</h3>
                  <a 
                    href="https://www.villagecigarhq.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-riviera-gold hover:underline block mb-1"
                  >
                    www.villagecigarhq.com
                  </a>
                  <a href="tel:6313079033" className="text-sm text-riviera-text/70 hover:text-riviera-text">
                    (631) 307 9033
                  </a>
                </div>
              </div>
            </div>

            {/* Clergy */}
            <div className="mb-16">
              <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-8">
                Clergy
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-riviera-neutral p-6 hover:border-riviera-gold transition-colors">
                  <h3 className="text-lg font-light text-riviera-text mb-2">NY Officiants</h3>
                  <a 
                    href="https://www.nyofficiants.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-riviera-gold hover:underline block mb-1"
                  >
                    www.nyofficiants.com
                  </a>
                  <a href="tel:5166622191" className="text-sm text-riviera-text/70 hover:text-riviera-text">
                    516 662 2191
                  </a>
                </div>

                <div className="border border-riviera-neutral p-6 hover:border-riviera-gold transition-colors">
                  <h3 className="text-lg font-light text-riviera-text mb-2">Long Island Wedding Officiants</h3>
                  <a 
                    href="https://longislandweddingofficiants.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-riviera-gold hover:underline block mb-1"
                  >
                    longislandweddingofficiants.org
                  </a>
                  <a 
                    href="mailto:joe@longislandweddingofficiants.org"
                    className="text-sm text-riviera-gold hover:underline block mb-1"
                  >
                    joe@longislandweddingofficiants.org
                  </a>
                  <a href="tel:9178637865" className="text-sm text-riviera-text/70 hover:text-riviera-text">
                    (917) 863 7865
                  </a>
                </div>
              </div>
            </div>

            {/* Bridal Dress */}
            <div className="mb-16">
              <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-8">
                Bridal Dress
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-riviera-neutral p-6 hover:border-riviera-gold transition-colors">
                  <h3 className="text-lg font-light text-riviera-text mb-2">Princess Bridals</h3>
                  <a 
                    href="https://princessbridals.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-riviera-gold hover:underline block mb-1"
                  >
                    princessbridals.com
                  </a>
                  <a href="tel:5162493005" className="text-sm text-riviera-text/70 hover:text-riviera-text">
                    (516) 249 3005
                  </a>
                </div>
              </div>
            </div>

            {/* Tuxedos */}
            <div className="mb-16">
              <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-8">
                Tuxedos
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-riviera-neutral p-6 hover:border-riviera-gold transition-colors">
                  <h3 className="text-lg font-light text-riviera-text mb-2">Esquire Tuxedos</h3>
                  <a 
                    href="https://www.esquiretuxedos.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-riviera-gold hover:underline block mb-1"
                  >
                    www.esquiretuxedos.com
                  </a>
                  <a href="tel:5163786060" className="text-sm text-riviera-text/70 hover:text-riviera-text">
                    (516) 378 6060
                  </a>
                </div>
              </div>
            </div>

            {/* Invitations */}
            <div className="mb-16">
              <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-8">
                Invitations
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-riviera-neutral p-6 hover:border-riviera-gold transition-colors">
                  <h3 className="text-lg font-light text-riviera-text mb-2">Gemini Invitations</h3>
                  <a 
                    href="https://www.geminiinvitations.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-riviera-gold hover:underline block mb-1"
                  >
                    www.geminiinvitations.com
                  </a>
                  <a href="tel:3473488145" className="text-sm text-riviera-text/70 hover:text-riviera-text">
                    (347) 348 8145
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-riviera-gold py-16 px-4 sm:px-6 lg:px-8 text-center text-white">
          <AnimatedSection animation="fadeInUp" className="max-w-3xl mx-auto" as="div">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wide mb-6">
              Request Your Date
            </h2>
            <p className="text-lg font-light mb-8 opacity-90">
              Contact our banquet department to learn more about our preferred vendors and check availability for your special day
            </p>
            <HoverScale effect="lift">
              <Link 
                href="/contact"
                className="inline-block bg-white text-riviera-text px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-text hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-riviera-gold"
              >
                CONTACT US →
              </Link>
            </HoverScale>
          </AnimatedSection>
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
                name: 'Vendors'
              }
            ]
          })
        }}
      />
    </>
  );
}
