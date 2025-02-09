'use client';

import { Experiences } from '@/components/Experiences/Experiences';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';
import { Projects } from '@/components/Projects/Projects';

export default function Home() {
  return (
    <div
      className=" bg-gradient-to-r from-secondary-200 to-primary-100"
      id="hero"
    >
      <Header />
      <Hero />
      <Projects />
      <Experiences />
      <Footer />
    </div>
  );
}
