import { whatsappHref } from "@/lib/business";

/** WhatsApp's glyph (phone in a speech bubble). */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.004 3C8.832 3 3.001 8.83 3 16.001c0 2.293.6 4.532 1.738 6.505L3 29l6.656-1.703a12.95 12.95 0 0 0 6.344 1.648h.005C23.175 28.945 29 23.113 29 15.945 29 12.47 27.646 9.205 25.19 6.75A12.9 12.9 0 0 0 16.004 3Zm0 23.756h-.004a10.76 10.76 0 0 1-5.486-1.503l-.394-.234-4.08 1.044 1.09-3.976-.256-.408a10.73 10.73 0 0 1-1.648-5.678c.002-5.954 4.847-10.798 10.806-10.798a10.73 10.73 0 0 1 7.637 3.169 10.73 10.73 0 0 1 3.16 7.64c-.003 5.955-4.847 10.744-10.825 10.744Zm5.925-8.07c-.325-.162-1.922-.948-2.22-1.057-.297-.108-.514-.162-.73.163-.217.325-.838 1.056-1.028 1.273-.189.217-.379.244-.704.081-.325-.162-1.372-.506-2.613-1.613-.966-.862-1.618-1.926-1.808-2.251-.189-.325-.02-.5.143-.663.146-.145.325-.379.487-.568.163-.19.217-.325.325-.542.109-.217.055-.406-.027-.569-.081-.162-.73-1.761-1-2.411-.264-.633-.532-.547-.73-.557l-.623-.011a1.2 1.2 0 0 0-.866.406c-.298.325-1.137 1.11-1.137 2.71 0 1.598 1.164 3.143 1.326 3.36.163.216 2.29 3.497 5.548 4.904.775.335 1.38.535 1.851.685.778.247 1.486.212 2.046.129.624-.093 1.922-.786 2.193-1.545.27-.758.27-1.408.19-1.544-.082-.135-.298-.217-.623-.38Z" />
    </svg>
  );
}

/** Floating WhatsApp button, pinned to the bottom-right corner on every section. */
export default function WhatsAppButton() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full bg-[#25D366] p-3.5 text-white shadow-lg shadow-black/25 ring-4 ring-white/80 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-orange-500 sm:right-6 sm:bottom-6"
    >
      {/* gentle pulse to draw the eye; off for visitors who prefer less motion */}
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30 motion-reduce:hidden"
      />
      <WhatsAppIcon className="size-7" />
      <span className="hidden pr-1.5 text-sm font-semibold sm:group-hover:inline">Chat on WhatsApp</span>
    </a>
  );
}
