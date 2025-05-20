"use client";

import React from 'react';

const testimonials = [
  {
    name: 'John Smith',
    role: 'CEO, TechStart Inc.',
    content: 'DigitalAgency transformed our online presence. Their strategic approach and attention to detail resulted in a 200% increase in our conversion rates.',
    image: '/testimonials/john.jpg',
  },
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director, GrowthCo',
    content: 'Working with DigitalAgency has been a game-changer for our business. Their expertise in digital marketing helped us reach new markets and grow our customer base.',
    image: '/testimonials/sarah.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, InnovateX',
    content: 'The team at DigitalAgency delivered exceptional results. Their web design and development services helped us create a modern, user-friendly platform that our customers love.',
    image: '/testimonials/michael.jpg',
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Image</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 