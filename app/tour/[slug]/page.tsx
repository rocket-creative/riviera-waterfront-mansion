import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CTASection from '../../components/CTASection';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTourImages, getTourHero } from '../../lib/imageConfig';
import { AnimatedSection } from '../../components/AnimatedSection';
import { HoverScale } from '../../components/HoverScale';
import ResponsiveFillImage from '../../components/ResponsiveFillImage';
import TourDetailClient from './TourDetailClient';
import AnswerBlock from '../../components/AnswerBlock';
import JsonLd from '../../components/JsonLd';
import { tourRooms as tourSections } from '../../lib/pageAnswers';
import { pageGraph, placeInVenue } from '../../lib/schema';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const section = tourSections[slug as keyof typeof tourSections];
  
  if (!section) {
    return {};
  }

  const descriptionTrimmed = section.description.length > 160
    ? section.description.slice(0, 157) + '...'
    : section.description;

  return {
    title: `${section.title} | Riviera Waterfront Mansion`,
    description: descriptionTrimmed,
    alternates: {
      canonical: `https://www.rivierawaterfrontmansion.com/tour/${slug}`
    },
    openGraph: {
      title: `${section.title} | Riviera Waterfront Mansion`,
      description: descriptionTrimmed,
      url: `https://www.rivierawaterfrontmansion.com/tour/${slug}`,
      siteName: 'Riviera Waterfront Mansion',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: 'https://www.rivierawaterfrontmansion.com/og-tour.jpg',
          width: 1200,
          height: 630,
          alt: `${section.title} at Riviera Waterfront Mansion Long Island wedding venue`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${section.title} | Riviera Waterfront Mansion`,
      description: descriptionTrimmed,
      images: ['https://www.rivierawaterfrontmansion.com/og-tour.jpg'],
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(tourSections).map((slug) => ({
    slug,
  }));
}

export default async function TourSectionPage({ params }: Props) {
  const { slug } = await params;
  const section = tourSections[slug as keyof typeof tourSections];

  if (!section) {
    notFound();
  }

  const allSlugs = Object.keys(tourSections);
  const currentIndex = allSlugs.indexOf(slug);
  const previousSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;
  const images = getTourImages(slug);

  return (
    <>
      <Header />
      
      <main id="main">
        {/* Hero Section - Editorial 2-Column Layout */}
        <section className="relative min-h-dvh overflow-hidden bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-dvh gap-0">
            {/* Image Column - Full Height */}
            <div className="relative lg:col-span-7 h-[50svh] lg:h-auto order-1 lg:order-1 overflow-hidden">
              <ResponsiveFillImage
                src={getTourHero(slug)}
                alt={`${section.title} at Riviera Waterfront Mansion Long Island wedding venue in Massapequa, NY`}
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 58vw"
                quality={75}
              />
            </div>

            {/* Text Column */}
            <div className="lg:col-span-5 flex items-center order-2 lg:order-2 bg-white">
              <div className="px-6 sm:px-10 lg:px-12 xl:px-16 py-16 lg:py-20">
                {/* Breadcrumb */}
                <nav className="mb-6" aria-label="Breadcrumb">
                  <ol className="flex items-center gap-2 text-sm">
                    <li>
                      <Link 
                        href="/" 
                        className="text-riviera-text/60 hover:text-riviera-gold transition-colors"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="text-riviera-text/40">/</li>
                    <li>
                      <Link 
                        href="/tour" 
                        className="text-riviera-text/60 hover:text-riviera-gold transition-colors"
                      >
                        Tour
                      </Link>
                    </li>
                    <li className="text-riviera-text/40">/</li>
                    <li className="text-riviera-text" aria-current="page">{section.title}</li>
                  </ol>
                </nav>

                <p className="text-riviera-gold text-xs sm:text-sm tracking-widest mb-6 font-light">
                  VIRTUAL TOUR
                </p>
                <h1 className="font-cormorant text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-wider text-riviera-text mb-6 leading-[1.1]">
                  {section.title}
                </h1>
                <AnswerBlock>{section.description}</AnswerBlock>
                <HoverScale effect="lift">
                  <a 
                    href="#photo-gallery"
                    className="bg-riviera-gold text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-text transition-all text-center block max-w-md w-full"
                  >
                    VIEW PHOTOS →
                  </a>
                </HoverScale>
              </div>
            </div>
          </div>
        </section>

        {/* Photography Gallery - Magazine Style, Asymmetric Layouts */}
        <section id="photo-gallery" className="py-16 md:py-24 px-6 sm:px-8 lg:px-12 bg-riviera-neutral">
          <AnimatedSection animation="fadeInUp" className="text-center mb-12" as="div">
            <p className="text-riviera-gold text-sm tracking-widest mb-3">PHOTO GALLERY</p>
            <h2 className="font-cormorant text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-riviera-text">
              Explore Our {section.title}
            </h2>
          </AnimatedSection>

          <TourDetailClient images={images} sectionTitle={section.title} />
        </section>

        {/* Navigation Between Sections */}
        <section className="py-12 px-6 sm:px-8 lg:px-12 bg-riviera-neutral">
          <div className="max-w-7xl mx-auto flex flex-col gap-6">
            {/* VIEW ALL SPACES — full width centered on mobile, inline on lg */}
            <div className="flex justify-center">
              <HoverScale effect="lift">
                <Link
                  href="/tour"
                  className="bg-riviera-text text-white px-6 py-3 text-sm font-light tracking-widest hover:bg-riviera-gold transition-colors"
                >
                  VIEW ALL SPACES
                </Link>
              </HoverScale>
            </div>

            {/* PREVIOUS / NEXT row */}
            <div className="flex justify-between items-center">
              <div className="flex-1">
                {previousSlug && (
                  <Link
                    href={`/tour/${previousSlug}`}
                    className="group flex items-center gap-3 text-riviera-text hover:text-riviera-gold transition-colors"
                  >
                    <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <div>
                      <div className="text-xs tracking-widest text-riviera-gold mb-1">PREVIOUS</div>
                      <div className="text-sm font-light">{tourSections[previousSlug as keyof typeof tourSections].title}</div>
                    </div>
                  </Link>
                )}
              </div>

              <div className="flex-1 flex justify-end">
                {nextSlug && (
                  <Link
                    href={`/tour/${nextSlug}`}
                    className="group flex items-center gap-3 text-riviera-text hover:text-riviera-gold transition-colors"
                  >
                    <div className="text-right">
                      <div className="text-xs tracking-widest text-riviera-gold mb-1">NEXT</div>
                      <div className="text-sm font-light">{tourSections[nextSlug as keyof typeof tourSections].title}</div>
                    </div>
                    <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Book Tour */}
        <CTASection
          eyebrow="READY TO BOOK YOUR LONG ISLAND WATERFRONT WEDDING?"
          headline="Experience Our Venue in Person"
          description="Contact Riviera Waterfront Mansion today to check wedding date availability and schedule an in person tour of our historic Massapequa venue. See the spaces you have just explored come to life and envision your perfect celebration."
          background="dark"
          buttons={[
            {
              text: 'DOWNLOAD OUR WELCOME BROCHURE →',
              href: '/wedding-pricing',
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

      <JsonLd
        data={pageGraph({
          path: `/tour/${slug}`,
          name: section.title,
          description: section.description,
          crumbs: [
            { name: 'Home', path: '/' },
            { name: 'Tour', path: '/tour' },
            { name: section.title, path: `/tour/${slug}` },
          ],
          extra: [
            placeInVenue({
              path: `/tour/${slug}`,
              name: section.title,
              description: section.description,
            }),
          ],
        })}
      />
    </>
  );
}
