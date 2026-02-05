import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Riviera Mansion',
  description: 'Learn how Riviera Mansion collects, uses, and protects your personal information. Our privacy policy explains your rights and our data practices.',
  alternates: {
    canonical: 'https://rivieramansion.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Riviera Mansion',
    description: 'Learn how Riviera Mansion collects, uses, and protects your personal information.',
    url: 'https://rivieramansion.com/privacy',
    siteName: 'Riviera Mansion',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | Riviera Mansion',
    description: 'Learn how Riviera Mansion collects, uses, and protects your personal information.',
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-stone-100">
      <div className="max-w-4xl mx-auto bg-white min-h-screen shadow-sm">
        {/* Header */}
        <div className="border-b border-stone-200 px-6 py-12 sm:px-12 sm:py-16">
          <Link 
            href="/"
            className="inline-flex items-center text-sm text-stone-600 hover:text-stone-900 mb-6 uppercase tracking-wider"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </Link>
          <h1 className="text-4xl sm:text-5xl font-light text-stone-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-stone-600">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="px-6 py-12 sm:px-12 sm:py-16 prose prose-stone max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-light text-stone-900 mb-4">Introduction</h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              Riviera Mansion ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light text-stone-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-light text-stone-900 mb-3 mt-6">Information You Provide</h3>
            <p className="text-stone-700 leading-relaxed mb-4">
              We collect information you voluntarily provide when you:
            </p>
            <ul className="list-disc pl-6 text-stone-700 space-y-2 mb-4">
              <li>Fill out inquiry or contact forms</li>
              <li>Request venue information or schedule tours</li>
              <li>Subscribe to our newsletter or communications</li>
              <li>Communicate with us via email or phone</li>
            </ul>
            <p className="text-stone-700 leading-relaxed mb-4">
              This may include your name, email address, phone number, event date, event type, and any other details you choose to share.
            </p>

            <h3 className="text-xl font-light text-stone-900 mb-3 mt-6">Automatically Collected Information</h3>
            <p className="text-stone-700 leading-relaxed mb-4">
              When you visit our website, we may automatically collect certain information about your device and browsing actions, including:
            </p>
            <ul className="list-disc pl-6 text-stone-700 space-y-2 mb-4">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website or source</li>
              <li>Click and navigation patterns</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light text-stone-900 mb-4">How We Use Your Information</h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-stone-700 space-y-2 mb-4">
              <li>Respond to your inquiries and provide venue information</li>
              <li>Schedule tours and consultations</li>
              <li>Send you updates about our services (with your consent)</li>
              <li>Improve our website and user experience</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraudulent or unauthorized activity</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light text-stone-900 mb-4">Cookies and Tracking</h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie preferences through our cookie consent banner.
            </p>

            <h3 className="text-xl font-light text-stone-900 mb-3 mt-6">Cookie Categories</h3>
            
            <div className="mb-6">
              <h4 className="text-lg font-medium text-stone-900 mb-2">Necessary Cookies</h4>
              <p className="text-stone-700 leading-relaxed">
                Essential for website functionality. These cannot be disabled as they enable core features like security and accessibility.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-medium text-stone-900 mb-2">Preference Cookies</h4>
              <p className="text-stone-700 leading-relaxed">
                Remember your settings and choices to provide a personalized experience.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-medium text-stone-900 mb-2">Analytics Cookies</h4>
              <p className="text-stone-700 leading-relaxed">
                Help us understand how visitors interact with our website by collecting and reporting anonymous information.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-medium text-stone-900 mb-2">Marketing Cookies</h4>
              <p className="text-stone-700 leading-relaxed">
                Used to deliver relevant advertisements and track campaign effectiveness.
              </p>
            </div>

            <p className="text-stone-700 leading-relaxed mt-4">
              We honor Global Privacy Control (GPC) signals. If your browser sends a GPC signal, we will automatically reject optional cookies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light text-stone-900 mb-4">Information Sharing</h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-stone-700 space-y-2 mb-4">
              <li><strong>Service Providers:</strong> Third parties who assist with website hosting, analytics, email delivery, and other business operations</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, sale, or transfer of business assets</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light text-stone-900 mb-4">Data Security</h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light text-stone-900 mb-4">Your Rights</h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-stone-700 space-y-2 mb-4">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Opt Out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a structured format</li>
            </ul>
            <p className="text-stone-700 leading-relaxed mt-4">
              To exercise these rights, please contact us using the information below.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light text-stone-900 mb-4">Children's Privacy</h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light text-stone-900 mb-4">Changes to This Policy</h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last updated" date at the top of this page.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light text-stone-900 mb-4">Contact Us</h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-stone-50 p-6 rounded">
              <p className="text-stone-700 mb-2">
                <strong>Riviera Mansion</strong>
              </p>
              <p className="text-stone-700 mb-2">
                Email: <a href="mailto:info@rivieramansion.com" className="underline hover:text-stone-900">info@rivieramansion.com</a>
              </p>
              <p className="text-stone-700">
                Phone: (555) 123 4567
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
