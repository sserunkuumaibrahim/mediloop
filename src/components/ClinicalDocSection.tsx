export default function ClinicalDocSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Clinical documentation for Uganda's health system
            <br />
            <span className="text-gray-600">AI-powered, local EHRs, and government-ready</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mediloop streamlines documentation for Ugandan providers - supporting government reporting, infectious disease tracking, maternal and child health, and more. Seamless integration with local EHRs and national health systems.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Video preview */}
          <div className="relative bg-gradient-to-br from-teal-600 to-green-700 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-green-700"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-8 border-l-white border-y-4 border-y-transparent ml-1"></div>
                </div>
              </div>
              {/* Floating UI elements to simulate the interface */}
              <div className="absolute top-6 left-6 bg-white rounded-lg p-4 shadow-lg max-w-xs">
                <div className="h-2 bg-gray-200 rounded mb-2"></div>
                <div className="h-2 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-2 bg-gray-200 rounded w-1/2"></div>
              </div>
              <div className="absolute bottom-6 right-6 bg-white rounded-lg p-4 shadow-lg max-w-xs">
                <div className="h-2 bg-green-200 rounded mb-2"></div>
                <div className="h-2 bg-green-200 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
