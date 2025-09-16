export default function PartnersSection() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-gray-600 font-medium uppercase tracking-wide text-sm mb-6">
            PARTNERED WITH UGANDA'S LEADING HEALTH INSTITUTIONS
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-70">
          <img
            src="/uganda-ministry-of-health-logo.png"
            alt="Uganda Ministry of Health"
            className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
          />
          <img
            src="/mulago-hospital-logo.png"
            alt="Mulago National Referral Hospital"
            className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
          />
          <img
            src="/nssf-uganda-logo.png"
            alt="NSSF Uganda"
            className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
          />
          <img
            src="/joint-medical-store-logo.png"
            alt="Joint Medical Store"
            className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
          />
        </div>
      </div>
    </section>
  )
}
