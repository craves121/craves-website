import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Checkout() {

  const { state } = useLocation();

  const product = state?.product || "";
  const price = Number(state?.price || 0);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [quantity, setQuantity] = useState(1);

  const total = price * quantity;

  return (
    <div className="min-h-screen bg-[#1a0f0a] text-white py-12">

      <div className="max-w-2xl mx-auto bg-[#2a1810] rounded-3xl shadow-2xl p-8">

        <h1 className="text-4xl font-bold text-yellow-400 text-center mb-8">
          Checkout
        </h1>

        <div className="space-y-4">

          <div>
            <label className="block mb-2">Product</label>
            <input
              value={product}
              readOnly
              className="w-full p-3 rounded bg-[#1a0f0a]"
            />
          </div>

          <div>
            <label className="block mb-2">Price</label>
            <input
              value={`₹${price}`}
              readOnly
              className="w-full p-3 rounded bg-[#1a0f0a]"
            />
          </div>

          <div>
            <label className="block mb-2">Full Name</label>
            <input
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="w-full p-3 rounded bg-[#1a0f0a]"
            />
          </div>

          <div>
            <label className="block mb-2">Phone Number</label>
            <input
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              className="w-full p-3 rounded bg-[#1a0f0a]"
            />
          </div>

          <div>
            <label className="block mb-2">Address</label>
            <textarea
              value={address}
              onChange={(e)=>setAddress(e.target.value)}
              className="w-full p-3 rounded bg-[#1a0f0a]"
            />
          </div>

          <div>
            <label className="block mb-2">Pincode</label>
            <input
              value={pincode}
              onChange={(e)=>setPincode(e.target.value)}
              className="w-full p-3 rounded bg-[#1a0f0a]"
            />
          </div>

          <div>
            <label className="block mb-2">Quantity</label>

            <select
              value={quantity}
              onChange={(e)=>setQuantity(Number(e.target.value))}
              className="w-full p-3 rounded bg-[#1a0f0a]"
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={5}>5</option>
            </select>

          </div>

          <div className="text-2xl font-bold text-yellow-400 text-center mt-6">
            Total: ₹{total}
          </div>

          <button
            className="w-full bg-green-500 hover:bg-green-600 py-4 rounded-xl text-xl font-bold mt-6"
          >
            Proceed to Payment
          </button>

        </div>

      </div>

    </div>
  );

}