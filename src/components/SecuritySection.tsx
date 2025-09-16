export default function SecuritySection() {
  const securityFeatures = [
    "We are HIPAA, GDPR, and Uganda Data Privacy compliant",
    "We don't train our models on your data",
    "We do not store any audio",
    "We are SOC 2 Type 2 and ISO 27001 certified"
  ]

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">
                A secure partner you can trust
              </h2>

              <div className="space-y-6">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center text-teal-900 font-bold text-sm">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <span className="text-teal-100">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-teal-400">
                <p className="text-teal-200 text-sm mb-2">
                  WE ARE PARTNERING WITH THE COALITION FOR HEALTH AI
                </p>
                <p className="text-teal-100 text-sm">
                  TO ADVANCE AI GOVERNANCE IN HEALTHCARE
                </p>
                <div className="mt-4">
                  <span className="text-white font-bold">+ CHAI</span>
                </div>
              </div>

              <div className="mt-8">
                <button className="text-teal-200 hover:text-white">
                  Read more →
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-64 h-64 bg-teal-700 rounded-full flex items-center justify-center">
                <div className="w-32 h-32 bg-teal-600 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
