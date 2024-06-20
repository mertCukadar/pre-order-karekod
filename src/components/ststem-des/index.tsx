'use client';
import React from 'react';

import { Carousel } from '../carousel';

export default function QRDefination() {
  const scrollToContactForm = () => {
    const contactFormElement = document.getElementById('contact-form');
    if (contactFormElement) {
      contactFormElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container flex md:flex-row flex-col items-center justify-center py-16">
        <div className="mb-6 p-16">
        <Carousel />
      </div>
      <div className='mb-6 p-8 max-w-xl items-center justify-center flex flex-col'>
        <div className="mb-6 max-w-2xl items-center justify-center flex flex-col">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Karekod Bildirim Sistemi Nedir?</h2>
          <p className="text-lg mb-4 text-gray-600">
            Sistemimiz, işletmenizin her departmanı için ayrı ayrı karekodlar oluşturmanızı sağlar. Bu karekodları müşterilerinize sunarak, onların her bir departman hakkında anlık geri bildirimde bulunmalarını mümkün kılabilirsiniz. Müşterileriniz, kolayca mobil cihazlarıyla karekodları taratarak deneyimlerini ve görüşlerini anında iletebilirler.
          </p>
        </div>
        <div className="mt-6 w-50">
        <button
          onClick={scrollToContactForm}
          className="bg-cyan-600 text-white py-2 px-4 rounded hover:bg-blue-500"
        >
          Sizi arayalım
        </button>
      </div>
      </div>
      
    </div>
  );
}
