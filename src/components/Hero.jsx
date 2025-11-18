import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.25),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.25),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(59,130,246,0.25),transparent_40%)] blur-3xl opacity-60" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="py-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-blue-100 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Now available on Expo Go 54
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
              Face scanning that scores your LooksMaxxing
            </h1>
            <p className="mt-6 text-blue-100/90 text-lg max-w-xl">
              FaceMaxiing analyzes facial symmetry, skin clarity, and other visual cues to estimate your LooksMaxxing score. Fast, private, and built for iPhone.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#download" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition">Get the app</a>
              <a href="#how" className="inline-flex items-center justify-center rounded-xl bg-slate-800/70 text-white px-5 py-3 font-semibold border border-white/10">How it works</a>
            </div>
            <p className="mt-4 text-xs text-blue-200/70">No photos leave your device • Built with on-device ML</p>
          </div>

          <div className="relative h-[520px] lg:h-[640px]">
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0" />
            <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
