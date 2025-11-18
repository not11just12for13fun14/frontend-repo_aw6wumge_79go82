function CTA() {
  return (
    <section id="download" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_60%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Start your FaceMaxxing journey today</h2>
        <p className="mt-3 text-blue-100/90">Download on iPhone via Expo Go 54. Scan instantly, learn quickly, and improve gradually.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-6 py-3 font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition">Open in Expo Go</a>
          <a href="#" className="inline-flex items-center justify-center rounded-xl bg-slate-800/70 text-white px-6 py-3 font-semibold border border-white/10">Join TestFlight</a>
        </div>
        <p className="mt-3 text-xs text-blue-200/70">Requires iOS 16+ • Works offline</p>
      </div>
    </section>
  )
}

export default CTA
