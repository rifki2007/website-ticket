import { useState, useEffect } from "react";
import CardEvent from "../components/CardEvent";
import Pagination from "../components/Pagination";
import { fetchEvents } from "../services/eventService";

const ITEMS_PER_PAGE = 6;

export default function HomePage() {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Ambil data dari API
  useEffect(() => {
    fetchEvents()
      .then((res) => setEvents(res.data))
      .catch((err) => console.error(err));
  }, []);

  const totalPages = Math.ceil(events.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentEvents = events.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-3xl font-bold text-center mb-8">
        Available Ticket
      </h1>

      <div className="p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentEvents.map((event) => (
            <CardEvent key={event.id} event={event} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
