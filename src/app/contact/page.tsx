import Header from '@/components/Header'
import Footer from '@/components/Footer'

/**
 * Contact Page
 * Get in touch with Mediloop for inquiries, partnerships, or support.
 */

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Have questions about Mediloop? Ready to partner with us? We're here to help build Uganda's digital health future.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                  <option>General Inquiry</option>
                  <option>Partnership Opportunity</option>
                  <option>Technical Support</option>
                  <option>Media Inquiry</option>
                  <option>Career Opportunity</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Office Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Address</h4>
                  <p className="text-gray-700">Plot 22B, Nakasero Road<br />Nakasero, Kampala, Uganda</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-700">+256 414 320 000</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-700">info@mediloop.co</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Business Hours</h4>
                  <p className="text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM EAT</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Support Options</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email Support</h4>
                    <p className="text-gray-700 text-sm">Get help from our support team within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone Support</h4>
                    <p className="text-gray-700 text-sm">Call us for immediate assistance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600">💬</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Live Chat</h4>
                    <p className="text-gray-700 text-sm">Chat with our support team online</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Healthcare?</h2>
          <p className="text-xl mb-8">Join thousands of Ugandans who trust Mediloop with their health data.</p>
          <a href="/uhid" className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get Your UHID Today
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}