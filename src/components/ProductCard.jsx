export default function ProductCard({ weight, price }) {

  const handlePayment = () => {

    const options = {
      key: "rzp_live_SuoirRO4gb6031",

      amount: price * 100,

      currency: "INR",

      name: "CRAVE'S Chicken Pickle",

      description: `${weight} Chicken Pickle`,

      image: "/favicon.svg",

      handler: async function (response) {

        const order = {
          orderId: "ORD" + Date.now(),
          paymentId: response.razorpay_payment_id,
          name: "Customer",
          phone: "9999999999",
          address: "Not Provided",
          product: weight,
          quantity: 1,
          amount: price,
        };

        try {

          const res = await fetch(
            "https://script.google.com/macros/s/AKfycbzEbaFupFaEeJ20miijcjalONAtOhN7qEkNlv2RsWpU685YAG_4mEM_pu3GD66tM57hwQ/exec",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(order),
            }
          );

          const result = await res.json();

          if (result.success) {
            alert(
              "✅ Payment Successful!\n\nOrder saved successfully.\n\nPayment ID:\n" +
              response.razorpay_payment_id
            );
          } else {
            alert("Payment successful, but order could not be saved.");
          }

        } catch (error) {

          console.error(error);

          alert(
            "Payment successful, but failed to save order."
          );

        }

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
    };

    const razor = new window.Razorpay(options);

    razor.open();
  };

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

  );

}