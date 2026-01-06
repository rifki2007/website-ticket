import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "../components/Button";

const CheckoutPage = () => {
  const { token } = useAuth();
  const navigate = useNavigate();

  // 🔐 Proteksi halaman
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  const handlePayment = () => {
    alert("Payment successful! (Simulated)");
    navigate("/"); // 🔁 kembali ke halaman Home
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
        
        {/* Header */}
        <div className="bg-blue-600 text-white text-center py-4">
          <h1 className="text-2xl font-bold">Checkout</h1>
          <p className="text-sm opacity-90">Complete your payment</p>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            <p className="text-gray-600 mb-1">Total Payment</p>
            <p className="text-3xl font-bold text-green-600">
              Rp 50.000
            </p>
          </div>

          <div className="border-t pt-4 mb-6 text-sm text-gray-500">
            <p>• Ticket will be sent to your email</p>
            <p>• Payment is non-refundable</p>
          </div>

          <Button
            onClick={handlePayment}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Pay Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
