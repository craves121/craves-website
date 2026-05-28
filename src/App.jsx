import OrderForm from "./components/OrderForm"
import Gallery from "./components/Gallery"
import { motion } from "framer-motion"
import Footer from "./components/Footer"
import FloatingWhatsApp from "./components/FloatingWhatsApp"
import ProductCard from "./components/ProductCard"
import Benefits from "./components/Benefits"
import Navbar from "./components/Navbar"
import logo from "./assets/logo.png"

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0f0a] to-[#3b1608] text-white">

      <Navbar />

      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        id="home"
        className="flex flex-col items-center justify-center text-center px-6 py-10"
      >

        {/* LOGO */}
        <img
          src={logo}
          alt="Craves Logo"
          className="w-96 rounded-2xl shadow-2xl mb-10"
        />

        {/* TITLE */}
        <h1 className="text-7xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg">
          CRAVE'S 🔥
        </h1>

        {/* SUBTITLE */}
        <h2 className="text-5xl mt-4 font-semibold">
          Chicken Pickle
        </h2>

        {/* DESCRIPTION */}
        <p className="text-xl mt-6 text-orange-300 max-w-xl leading-relaxed">
          Authentic Andhra style homemade chicken pickle
          made with rich spices and love 😋
        </p>

        {/* WHATSAPP BUTTON */}
        <a
          href="https://wa.me/917093234539"
          target="_blank"
          rel="noreferrer"
          className="mt-8 bg-green-500 hover:bg-green-600 hover:scale-105 px-10 py-4 rounded-full text-xl font-bold transition duration-300 shadow-2xl"
        >
          Order on WhatsApp
        </a>

      </motion.section>

      {/* PRODUCTS SECTION */}
      <section
        id="products"
        className="px-6 py-16"
      >

        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
          Pack Sizes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <ProductCard weight="250g" price="249" />

          <ProductCard weight="500g" price="449" />

          <ProductCard weight="1kg" price="899" />

        </div>

      </section>

      <Benefits />

      <Gallery />

      <OrderForm />

      <Footer />

      <FloatingWhatsApp />

    </div>
  )
}  