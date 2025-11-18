import { Camera, Cpu, BarChart3 } from 'lucide-react'

function Step({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-white font-semibold">{title}</h3>
      <p className="text-blue-100/80 mt-2 text-sm">{desc}</p>
    </div>
  )
}

function HowItWorks() {
  return (
    <section id="how" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-4">
          <Step icon={Camera} title="1. Capture" desc="Take a quick selfie or import a photo from your library." />
          <Step icon={Cpu} title="2. Analyze" desc="On‑device ML processes landmarks, symmetry, and proportions." />
          <Step icon={BarChart3} title="3. Score" desc="Receive an instant LooksMaxxing score with insights." />
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
