import React from 'react';
import Link from 'next/link';

const portfolioItems = [
  {
    title: 'E-commerce Website Redesign',
    category: 'Web Design & Development',
    description: 'Complete redesign of an e-commerce platform resulting in a 40% increase in conversion rates.',
    image: '/portfolio/ecommerce.jpg',
    link: '/portfolio/ecommerce-case-study',
  },
  {
    title: 'Social Media Campaign',
    category: 'Digital Marketing',
    description: 'Successful social media campaign that increased brand awareness by 200% and generated 5000+ leads.',
    image: '/portfolio/social-media.jpg',
    link: '/portfolio/social-media-case-study',
  },
  {
    title: 'Content Marketing Strategy',
    category: 'Content Strategy',
    description: 'Developed and executed a content strategy that increased organic traffic by 150% in 6 months.',
    image: '/portfolio/content.jpg',
    link: '/portfolio/content-case-study',
  },
  {
    title: 'Analytics Dashboard',
    category: 'Analytics & Reporting',
    description: 'Custom analytics dashboard providing real-time insights and improved decision-making.',
    image: '/portfolio/analytics.jpg',
    link: '/portfolio/analytics-case-study',
  },
];

export default function Portfolio() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Portfolio
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Explore our recent work and success stories
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Image Placeholder</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {item.category}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-500">{item.description}</p>
                <div className="mt-6">
                  <Link
                    href={item.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    View Case Study
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
} 