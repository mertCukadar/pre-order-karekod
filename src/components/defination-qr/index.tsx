'use client';
import React from "react";

export default function QRDefination() {
  const scrollToContactForm = () => {
    const contactFormElement = document.getElementById('contact-form');
    if (contactFormElement) {
      contactFormElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-6 max-w-2xl items-center justify-center flex flex-col">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">Karekod Bildirim Sistemi Nedir?</h2>
      <p className="text-lg mb-4 text-gray-600">
        Karekod bildirim sistemi, kullanıcıların karekodları tarayarak anında geri bildirimde bulunmasını sağlayan bir platformdur. Bu sistem sayesinde, işletmeler müşterilerinden anlık geri bildirimler alabilir ve hizmet kalitelerini artırabilirler.
      </p>
      <p className="text-lg mb-4 text-gray-600">
        Kullanıcılar, mobil cihazlarıyla karekodları tarayarak kolayca geri bildirimde bulunabilirler. Bu geri bildirimler doğrudan sisteme iletilir ve işletmeler tarafından değerlendirilebilir.
      </p>
      <div className="mt-6 w-50">
        <button
          onClick={scrollToContactForm}
          className="bg-cyan-600 text-white py-2 px-4 rounded hover:bg-blue-500"
        >
          Sizi arayalım
        </button>
      </div>
    </div>
  );
}
