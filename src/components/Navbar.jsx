import { useState } from "react"
export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className="relative flex items-center justify-between px-8 py-6 bg-[#2a1810]">

      <h1 className="text-3xl font-bold text-yellow-400">
        CRAVE'S 🔥
      </h1>

        <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
        >
            ☰
        </button>

        <div className="hidden md:flex gap-8 text-xl">

        <a
            href="#home"
            className="hover:text-yellow-400 transition"
        >
            Home
        </a>

        <a
            href="#products"
            className="hover:text-yellow-400 transition"
        >
            Products
        </a>

        <a
            href="#contact"
            className="hover:text-yellow-400 transition"
        >
            Contact
        </a>

        </div>

        {
            menuOpen && (
                <div className="absolute top-24 left-0 w-full bg-[#2a1810] flex flex-col items-center gap-6 py-8 md:hidden text-xl">

                    <a href="#home" onClick={() => setMenuOpen(false)}>
                        Home
                    </a>

                    <a href="#products" onClick={() => setMenuOpen(false)}>
                        Products
                    </a>

                    <a href="#contact" onClick={() => setMenuOpen(false)}>
                        Contact
                    </a>

                </div>
            )
        }

    </nav>
  )
}