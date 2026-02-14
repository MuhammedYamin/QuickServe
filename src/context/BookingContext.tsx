import React, { createContext, useContext, useState, ReactNode } from 'react';

type Service = {
  id: string;
  title: string;
  category: string;
  price: number;
};

type BookingContextType = {
  bookings: Service[];
  addBooking: (service: Service) => boolean;
  removeBooking: (id: string) => void;
};

const BookingContext = createContext<BookingContextType | undefined>(
  undefined
);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookings, setBookings] = useState<Service[]>([]);


  const addBooking = (service: Service) => {
  const alreadyBooked = bookings.some(b => b.id === service.id);
  if (alreadyBooked) {
    return false; 
  }
  setBookings(prev => [...prev, service]);
  return true;
};
const removeBooking = (id: string) => {
  setBookings(prev => prev.filter(item => item.id !== id));
};




  return (
    <BookingContext.Provider value={{ bookings, addBooking, removeBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {


  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within BookingProvider');
  }
  return context;
}
