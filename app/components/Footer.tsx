import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-riviera-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-light tracking-widest mb-4">CONTACT</h3>
            <address className="not-italic text-sm font-light leading-relaxed opacity-90">
              200 E Shore Dr<br />
              Massapequa, NY 11758<br />
              <a 
                href="tel:+15165415020" 
                className="hover:text-riviera-gold transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold"
              >
                (516) 541 5020
              </a>
            </address>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-sm font-light tracking-widest mb-4">OFFICE HOURS</h3>
            <div className="text-sm font-light leading-relaxed opacity-90">
              <p>Monday: Closed</p>
              <p>Tuesday to Sunday</p>
              <p>11:00 am to 7:00 pm</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-light tracking-widest mb-4">QUICK LINKS</h3>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              <Link 
                href="/tour" 
                className="text-sm font-light opacity-90 hover:text-riviera-gold transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold"
              >
                Online Tour
              </Link>
              <Link 
                href="/menu" 
                className="text-sm font-light opacity-90 hover:text-riviera-gold transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold"
              >
                Menu
              </Link>
              <Link 
                href="/vendors" 
                className="text-sm font-light opacity-90 hover:text-riviera-gold transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold"
              >
                Vendors
              </Link>
              <Link 
                href="/contact" 
                className="text-sm font-light opacity-90 hover:text-riviera-gold transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-sm font-light opacity-75">
            © 2026 Riviera Waterfront Mansion. All Rights Reserved.
          </p>
          <p className="text-xs font-light opacity-60 mt-2">
            Third generation, family owned and operated since 1947
          </p>
        </div>
      </div>
    </footer>
  );
}
