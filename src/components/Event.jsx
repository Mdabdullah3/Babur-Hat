/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import useEventStore from "../store/eventStore";
import { SERVER } from "../config";
import Link from "next/link";

const EventProducts = () => {
  const { events, fetchEvents } = useEventStore();

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return (
    <div className="mt-8 w-11/12 mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {events.map((event) => (
          <div
            key={event._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 duration-300"
          >
            <img
              src={`${SERVER}${event.image.secure_url}`}
              alt={event.name}
              className="h-52 w-full"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {event.name}
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                {new Date(event.startDate).toLocaleDateString()} -{" "}
                {new Date(event.endDate).toLocaleDateString()}
              </p>
              <p className="text-gray-600 mt-4">{event.description}</p>
              <div className="flex items-center justify-between mt-6">
                <span className="text-lg font-semibold text-indigo-600">
                  {event.eventProducts.length} Products
                </span>
                <Link
                  href={`/event/${event?._id}`}
                  className="bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-500 focus:outline-none"
                >
                  View Event
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventProducts;
