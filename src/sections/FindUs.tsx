export default function FindUs() {
  return (
    <section id="location" className="relative h-[500px] md:h-[600px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.419735944847!2d49.8676544!3d40.3776585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b7e7a8e8f8f!2sNizami%20Street%2C%20Baku!5e0!3m2!1sen!2saz!4v1"
        width="100%"
        height="100%"
        style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1)' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Baku Taste location on Google Maps"
        className="absolute inset-0"
      />

      <div className="absolute bottom-6 left-4 right-4 md:bottom-10 md:left-10 md:right-auto">
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl max-w-sm">
          <h3 className="font-serif font-bold text-navy text-xl mb-1">Baku Taste</h3>
          <p className="text-sm text-gray-500 mb-4">Fine Azerbaijani Cuisine</p>
          <div className="space-y-2 text-sm text-gray-600">
            <p className="flex items-start gap-2">
              <span className="text-gold mt-0.5">📍</span>
              <span>Nizami Street 125, Baku, Azerbaijan</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-gold">📞</span>
              <span>+994 12 555 12 12</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
