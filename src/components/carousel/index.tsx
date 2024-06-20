'use client';
import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import './style.css';

export function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2800 })]);

  return (
    <div className="embla rounded-sm shadow-2xl shadow-slate-500 max-w-2xl" ref={emblaRef}>
    <div className="embla__container">
      <Image src="/main_page.png" alt="main" width={200} height={200} className='embla__slide' layout="responsive" />
      <Image src="/qr-create.png" alt="qrcreate" width={200} height={200} className='embla__slide' layout="responsive" />
    </div>
  </div>
  );
}
