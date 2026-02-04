import Header from './components/Header';
import Footer from './components/Footer';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Header />
      
      <main id="main" className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-light text-riviera-gold mb-6">404</h1>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-riviera-text mb-6">
            Page not found
          </h2>
          <p className="text-lg font-light text-riviera-text/70 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="bg-riviera-gold text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-brown transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
            >
              GO HOME →
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-riviera-gold text-riviera-gold px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-gold hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
