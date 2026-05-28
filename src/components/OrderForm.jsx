import { useState } from "react"

export default function OrderForm() {

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [pack, setPack] = useState("250g")
  const [quantity, setQuantity] = useState("1")

  const handleSubmit = (e) => {
    e.preventDefault()

    const message =
      `Hello CRAVE'S!%0A` +
      `Name: ${name}%0A` +
      `Phone: ${phone}%0A` +
      `Pack Size: ${pack}%0A` +
      `Quantity: ${quantity}`

    window.open(
      `https://wa.me/917093234539?text=${message}`,
      "_blank"
    )
  }

  return (

    <section className="px-6 py-20">

      <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
        Place Your Order 🛒
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-[#2a1810] p-10 rounded-3xl shadow-2xl flex flex-col gap-6"
      >

        {/* NAME */}
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-4 rounded-xl bg-[#1a0f0a] text-white outline-none"
          required
        />

        {/* PHONE */}
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="p-4 rounded-xl bg-[#1a0f0a] text-white outline-none"
          required
        />

        {/* PACK SIZE */}
        <select
          value={pack}
          onChange={(e) => setPack(e.target.value)}
          className="p-4 rounded-xl bg-[#1a0f0a] text-white outline-none"
        >
          <option>250g</option>
          <option>500g</option>
          <option>1kg</option>
        </select>

        <select
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="p-4 rounded-xl bg-[#1a0f0a] text-white outline-none"
        >
            <option value="1">1 Jar</option>
            <option value="2">2 Jars</option>
            <option value="3">3 Jars</option>
            <option value="5">5 Jars</option>
        </select>

        {/* BUTTON */}
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 py-4 rounded-xl text-xl font-bold transition"
        >
          Order on WhatsApp
        </button>

      </form>

    </section>
  )
}   