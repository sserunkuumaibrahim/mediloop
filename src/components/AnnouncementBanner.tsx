import { Button } from '@/components/ui/button'

export default function AnnouncementBanner() {
  return (
    <div className="bg-teal-50 border-b border-teal-100">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
          <span className="text-teal-900 font-medium">
            Mediloop: Digitalising Healthcare for Uganda
          </span>
          <span className="text-teal-700 text-sm sm:text-base">
            Universal access. Every citizen in control of their medical data—anywhere, anytime.
          </span>
          <a
            href="https://mediloop.ai/launch"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-teal-900 text-white border border-teal-900 hover:bg-teal-800 hover:border-teal-800 rounded px-4 py-2 text-sm"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  )
}
