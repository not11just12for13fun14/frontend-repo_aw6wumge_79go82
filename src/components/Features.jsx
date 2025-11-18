import { ShieldCheck, Sparkles, Gauge, ScanFace } from 'lucide-react'

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/0 via-fuchsia-400/0 to-blue-400/0 group-hover:from-cyan-400/10 group-hover:via-fuchsia-400/10 group-hover:to-blue-400/10" />
      <div className="relative">
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-white font-semibold">{title}</h3>
        <p className="text-blue-100/80 mt-2 text-sm">{desc}</p>
      </div>
    </div>
  )
}

function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Designed for clear, fair, instant feedback</h2>
          <p className="text-blue-100/90 mt-3">FaceMaxiing focuses on what matters: symmetry, proportions, and clarity. No filters, no fluff.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Feature icon={ScanFace} title="Smart Scan" desc="Assess facial symmetry, angles, and golden ratio alignment." />
          <Feature icon={Gauge} title="LooksMaxxing Score" desc="Get a 1–100 score with category breakdowns and tips." />
          <Feature icon={ShieldCheck} title="Private by default" desc="Analysis runs on-device. Your photos never leave your phone." />
          <Feature icon={Sparkles} title="Actionable tips" desc="Small, realistic suggestions to improve presentation." />
        </div>
      </div>
    </section>
  )
}

export default Features
