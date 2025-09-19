import Header from '@/components/Header'
import Footer from '@/components/Footer'

/**
 * Universal Health ID (UHID) Page
 * Detailed explanation of the UHID system, benefits, and implementation in Uganda.
 */

export default function UHIDPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Universal Health ID (UHID)</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            The Universal Health ID (UHID) is a secure, lifelong health identity for every Ugandan. It enables seamless access to care, secure data sharing, and true ownership of your medical records - anywhere, anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">How UHID Works</h3>
            <p className="text-gray-700 mb-6">
              Your UHID is linked to your national ID and provides a single, secure way to access healthcare services across Uganda.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Register once, access everywhere</li>
              <li>• Secure biometric verification</li>
              <li>• Integrated with government systems</li>
              <li>• Works offline in remote areas</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits for Citizens</h3>
            <p className="text-gray-700 mb-6">
              UHID empowers every Ugandan with control over their health data and seamless access to care.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• No more lost medical records</li>
              <li>• Faster emergency care</li>
              <li>• Access to telemedicine</li>
              <li>• Better health outcomes</li>
            </ul>
          </div>
        </div>

        <div className="bg-teal-50 rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">UHID Implementation Roadmap</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Pilot Launch</h3>
              <p className="text-gray-700">Starting in Kampala with 100 clinics</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">National Rollout</h3>
              <p className="text-gray-700">Expanding to all regions in Uganda</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Full Integration</h3>
              <p className="text-gray-700">Connected to all health systems</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your UHID Today</h2>
          <p className="text-xl mb-8">Register for your Universal Health ID and take control of your healthcare journey.</p>
          <a href="/contact" className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Register Now
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
