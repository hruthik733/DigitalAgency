"use client";

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';

// Lazy load components that are below the fold
const Services = dynamic(() => import('@/components/Services'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
  ssr: false
});

const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
  ssr: false
});

export default function Home() {
  return (
    <div>
      <Hero />
      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
        <Services />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
        <Testimonials />
      </Suspense>
    </div>
  );
}
