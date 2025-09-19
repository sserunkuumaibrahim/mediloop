import Header from '@/components/Header'
import Footer from '@/components/Footer'

/**
 * Citizen Data Control Page
 * Explains how Mediloop empowers Ugandans to control and access their health data securely.
 */

export default function DataControlPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Citizen Data Control</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Mediloop puts every Ugandan in control of their medical data. Access, share, and manage your health records securely - anywhere, anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Data, Your Control</h3>
            <p className="text-gray-700 mb-6">
              With Mediloop, you own your health data. Decide who can access it, when, and for what purpose.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Full ownership of medical records</li>
              <li>• Granular privacy controls</li>
              <li>• Consent-based sharing</li>
              <li>• Data portability</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure & Private</h3>
            <p className="text-gray-700 mb-6">
              Your health data is protected with enterprise-grade security and complies with Ugandan data privacy laws.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• End-to-end encryption</li>
              <li>• HIPAA & GDPR compliant</li>
              <li>• Regular security audits</li>
              <li>• No data sold or shared without consent</li>
            </ul>
          </div>
        </div>

        <div className="bg-teal-50 rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How Data Control Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Access</h3>
              <p className="text-gray-700 text-sm">View all your medical records in one place</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Control</h3>
              <p className="text-gray-700 text-sm">Set permissions for data sharing</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Share</h3>
              <p className="text-gray-700 text-sm">Grant temporary access to providers</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">Monitor</h3>
              <p className="text-gray-700 text-sm">Track who accesses your data</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Take Control of Your Health Data</h2>
          <p className="text-xl mb-8">Join Mediloop and own your healthcare journey.</p>
          <a href="/contact" className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get Started
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
