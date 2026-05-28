export default function ProductCard({ weight, price }) {
  return (

    <div className="bg-[#2a1810] p-8 rounded-2xl text-center shadow-lg">

      <h3 className="text-3xl font-bold">
        {weight}
      </h3>

      <p className="text-2xl mt-4 text-yellow-400">
        ₹{price}
      </p>

      <a
        href="https://wa.me/917093234539"
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-6 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-bold transition"
      >
        Order Now
      </a>

    </div>

  )
}