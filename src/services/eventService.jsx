import api from "./api";
import { mockEvents } from "./mockData";

/** PUBLIC */
export const fetchEvents = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data: mockEvents }), 300);
  });
};

/** PUBLIC */
export const fetchEventById = (id) => {
  return new Promise((resolve) => {
    const event = mockEvents.find((e) => e.id === Number(id));
    setTimeout(() => resolve({ data: event }), 300);
  });
};

/** PROTECTED */
export const checkoutTicket = (payload) => {
  return api.post("/checkout", payload);
};
