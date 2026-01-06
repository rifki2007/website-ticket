import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "../components/Button";
import { fetchEventById } from "../services/eventService";

const EventDetailPage = () => {
  const { id } = useParams(); // ✅ id dibuat di sini
  const navigate = useNavigate();
  const { token } = useAuth();
  const [event, setEvent] = useState(null);

  // ✅ useEffect DI DALAM component
  useEffect(() => {
    fetchEventById(id).then((res) => {
      setEvent(res.data);
    });
  }, [id]);

  const handleBuy = () => {
    if (!token) {
      navigate("/login");
    } else {
      navigate("/checkout");
    }
  };

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 py-10 px-4 flex justify-center">
      <div className="bg-white shadow-xl rounded-xl max-w-3xl w-full overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-80 object-cover"
        />

        <div className="p-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">
            {event.title}
          </h1>
          <p className="text-gray-600 mb-4">{event.description}</p>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
            <p className="text-sm text-gray-500">
              Date: {event.date}
            </p>
            <p className="text-xl font-semibold text-green-600">
              Rp {event.price.toLocaleString()}
            </p>
          </div>

          <Button
            onClick={handleBuy}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
          >
            Buy Ticket
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;