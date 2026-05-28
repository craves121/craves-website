export default function ProductCard({ weight, price }) {

  const handlePayment = () => {

    const options = {
      key: "rzp_live_SuoirRO4gb6031",

      amount: price * 100,

      currency: "INR",

      name: "CRAVE'S Chicken Pickle",

      description: `${weight} Chicken Pickle`,

      image: "/favicon.svg",

      handler: function (response) {

        alert(
          "Payment Successful 🎉\nPayment ID: " +
          response.razorpay_payment_id
        )

      },

      prefill: {
        name: "Customer",
        email: "customer@email.com",
        contact: "9999999999",
      },

      notes: {
        product: weight,
      },

      theme: {
        color: "#22c55e",
      },
    }

    const razor = new window.Razorpay(options)

    razor.open()
  }

  return (

    <div className="bg-[#2a1810] p-8 rounded-2xl text-center shadow-lg">

      <h3 className="text-3xl font-bold">
        {weight}
      </h3>

      <p className="text-2xl mt-4 text-yellow-400">
        ₹{price}
      </p>

      <button
        onClick={handlePayment}
        className="inline-block mt-6 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-bold transition"
      >
        Buy Now
      </button>

    </div>

  )
}