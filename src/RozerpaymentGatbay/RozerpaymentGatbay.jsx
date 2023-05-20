import React from "react";
import { useCallback } from "react";
import useRazorpay from "react-razorpay";
import { withUser } from "../withProvider";

const RozerpaymentGatbay = ({ product, user }) => {
  console.log(product);
  const total = product.price * 100;

  const Razorpay = useRazorpay();

  const handlePayment = useCallback(() => {
    console.log("rozerpay");
    const options = {
      key: "rzp_test_OjT7zSlYQqcy9M",
      Key_Secret: "rzp_test_OjT7zSlYQqcy9M,SDtf8yWweKhC8BGL8FqzVfed",
      amount: total,
      currency: "INR",
      name: product.title,
      description: "Test Transaction",
      image: product.thumbnail,
      // order_id: order,
      handler: (res) => {
        console.log("payemet" , res);
      },
      prefill: {
        name: user.fullName,
        email: user.email,
        contact: "8630819248",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#f97316",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [product.thumbnail, product.title, Razorpay, total]);

  return (
    <div>
      <button
        onClick={handlePayment}
        className="bg-orange-500 rounded-md px-4 py-1 mt-2  text-white text-sm focus:ring-2 "
      >
        BUY NOW
      </button>
    </div>
  );
};

export default withUser(RozerpaymentGatbay);
