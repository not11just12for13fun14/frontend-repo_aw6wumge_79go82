import { Menu, X } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-xl mt-4 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/5 border border-white/10 shadow-2xl shadow-blue-500/10">
          <div className="flex items-center gap-3 pl-4">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-fuchsia-500 p-[2px]">
              <div className="h-full w-full rounded-[10px] bg-slate-900 flex items-center justify-center text-white font-bold">F</div>
            </div>
            <div className="text-white font-semibold tracking-tight">FaceMaxiing</div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-blue-100 pr-4">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#how" className="hover:text-white transition-colors">How it works</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#download" className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-4 py-2 font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-shadow">Get the app</a>
          </nav>

          <button className="md:hidden pr-4 text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-2 rounded-xl backdrop-blur bg-white/5 border border-white/10 p-4 text-blue-100">
            <a href="#features" className="block py-2">Features</a>
            <a href="#how" className="block py-2">How it works</a>
            <a href="#faq" className="block py-2">FAQ</a>
            <a href="#download" className="block py-2 text-white font-medium">Get the app</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
