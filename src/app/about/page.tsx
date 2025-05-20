import React from 'react';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: 'With over 15 years of experience in digital marketing, Sarah leads our team with vision and expertise.',
    image: '/team/sarah.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'Creative Director',
    bio: 'Michael brings innovative design solutions and creative thinking to every project.',
    image: '/team/michael.jpg',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Strategist',
    bio: 'Emily specializes in developing data-driven marketing strategies that deliver results.',
    image: '/team/emily.jpg',
  },
  {
    name: 'David Wilson',
    role: 'Technical Lead',
    bio: 'David ensures our technical solutions are cutting-edge and reliable.',
    image: '/team/david.jpg',
  },
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Our Story
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
              Transforming businesses through innovative digital solutions since 2010
            </p>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900">Who We Are</h2>
          <p className="mt-4 text-gray-500">
            Founded in 2010, DigitalAgency has grown from a small team of passionate digital marketers
            to a full-service digital agency serving clients worldwide. Our mission is to help businesses
            thrive in the digital age by providing innovative solutions that drive growth and success.
          </p>
          <p className="mt-4 text-gray-500">
            We believe in the power of data-driven decisions, creative thinking, and collaborative
            partnerships. Our team of experts brings together diverse skills and experiences to deliver
            exceptional results for our clients.
          </p>

          <h2 className="mt-12 text-3xl font-extrabold text-gray-900">Our Values</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Innovation</h3>
              <p className="mt-2 text-gray-500">
                We constantly explore new technologies and strategies to stay ahead of the curve.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Excellence</h3>
              <p className="mt-2 text-gray-500">
                We strive for excellence in everything we do, delivering the highest quality results.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Partnership</h3>
              <p className="mt-2 text-gray-500">
                We build strong relationships with our clients, working together to achieve success.
              </p>
            </div>
          </div>

          <h2 className="mt-12 text-3xl font-extrabold text-gray-900">Our Team</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="h-48 w-48 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-400">Image Placeholder</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="mt-1 text-blue-600">{member.role}</p>
                <p className="mt-2 text-gray-500">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 