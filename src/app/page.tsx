'use client';

import { Experiences } from '@/components/Experiences/Experiences';
import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';

export default function Home() {
  return (
    <div className=" bg-gradient-to-r from-secondary-200 to-primary-100">
      <Header />
      <Hero />
      <Experiences />
    </div>
  );
}
