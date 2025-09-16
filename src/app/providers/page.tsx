import Header from '@/components/Header'
import Footer from '@/components/Footer'

/**
 * Provider Network Page
 * Details Mediloop's network of clinics, hospitals, pharmacies, and labs across Uganda.
 */

export default function ProvidersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Provider Network</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Mediloop connects 1000+ clinics, hospitals, pharmacies, and labs across Uganda, enabling seamless care and data sharing for all citizens.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏥</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Hospitals</h3>
            <p className="text-gray-700">Major hospitals and medical centers</p>
            <p className="text-teal-600 font-semibold mt-2">200+ Connected</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏥</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Clinics</h3>
            <p className="text-gray-700">Primary care and specialty clinics</p>
            <p className="text-teal-600 font-semibold mt-2">500+ Connected</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💊</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Pharmacies</h3>
            <p className="text-gray-700">Retail and hospital pharmacies</p>
            <p className="text-teal-600 font-semibold mt-2">250+ Connected</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🧪</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Labs</h3>
            <p className="text-gray-700">Diagnostic and testing laboratories</p>
            <p className="text-teal-600 font-semibold mt-2">50+ Connected</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Join Our Network?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Better Patient Care</h3>
              <p className="text-gray-700">Access complete patient histories and coordinate care seamlessly.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Increased Efficiency</h3>
              <p className="text-gray-700">Reduce administrative burden with automated workflows and data sharing.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Government Compliance</h3>
              <p className="text-gray-700">Meet national health reporting requirements automatically.</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Provider Network</h2>
          <p className="text-xl mb-8">Connect your facility to Uganda's largest digital health network.</p>
          <a href="/contact" className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get Connected
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
