import Header from '@/components/Header'
import Footer from '@/components/Footer'

/**
 * Support Page
 * Help center, FAQ, and support resources for Mediloop users.
 */

export default function SupportPage() {
  const faqs = [
    {
      question: "How do I get my UHID?",
      answer: "You can apply for your UHID through our web platform or mobile app. The process involves identity verification and takes approximately 24-48 hours."
    },
    {
      question: "Is my health data secure?",
      answer: "Yes, Mediloop uses bank-grade encryption and follows strict privacy regulations. You have full control over who can access your data."
    },
    {
      question: "How do I book an appointment?",
      answer: "Use the Mediloop app or web platform to search for providers, check availability, and book appointments directly."
    },
    {
      question: "What if I forget my password?",
      answer: "Click 'Forgot Password' on the login page. We'll send a secure reset link to your registered email address."
    },
    {
      question: "Can I access my records offline?",
      answer: "Yes, our mobile app allows you to download and view your essential health records offline for up to 30 days."
    },
    {
      question: "How do I connect with healthcare providers?",
      answer: "Search for providers in your area through our platform. You can view their profiles, read reviews, and book appointments."
    }
  ]

  const resources = [
    {
      title: "User Guide",
      description: "Complete guide to using Mediloop platform",
      icon: "📖"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      icon: "🎥"
    },
    {
      title: "API Documentation",
      description: "Technical documentation for developers",
      icon: "💻"
    },
    {
      title: "Security Center",
      description: "Privacy and security information",
      icon: "🔒"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Support Center</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get help with Mediloop. Find answers to common questions and access our support resources.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Support</h3>
              <div className="space-y-4">
                <a href="/contact" className="block p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">💬</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Live Chat</h4>
                      <p className="text-gray-700 text-sm">Chat with our support team</p>
                    </div>
                  </div>
                </a>
                <a href="mailto:support@mediloop.co" className="block p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📧</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email Support</h4>
                      <p className="text-gray-700 text-sm">support@mediloop.co</p>
                    </div>
                  </div>
                </a>
                <a href="tel:+256414320000" className="block p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📞</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone Support</h4>
                      <p className="text-gray-700 text-sm">+256 414 320 000</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">System Status</h3>
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-900 font-medium">All Systems Operational</span>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                View real-time status of Mediloop services and planned maintenance.
              </p>
              <a href="#" className="text-teal-600 hover:text-teal-700 font-semibold text-sm">
                View Status Page →
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Help Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{resource.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{resource.description}</p>
                <button className="text-teal-600 hover:text-teal-700 font-semibold text-sm">
                  Access →
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-xl mb-8">Our support team is here to assist you with any questions.</p>
          <a href="/contact" className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Contact Support
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}