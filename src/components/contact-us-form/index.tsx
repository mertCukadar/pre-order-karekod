'use client';
import React, { useState } from 'react';

export default function ContactUs() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('https://9wirpkaf35.execute-api.eu-central-1.amazonaws.com/dev/CollectRequestForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const result = await response.json();
      alert(`Mesajınız iletildi! \n\n Ekip arkadaşlarımız en kısa sürede sizinle iletişime geçeceklerdir.`);
    } catch (error) {
      console.error('API request error:', error);
      alert('Mesajınız iletilemedi. Lütfen tekrar deneyin.');
    }

    // Formu temizleme
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div id="contact-form" className="min-h-screen flex items-center justify-center p-2">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">Bize Ulaşın</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Ad</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="phone">Telefon</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="message">Mesaj</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              required
            ></textarea>
          </div>
          <button className="w-full bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-500">Gönder</button>
        </form>
      </div>
    </div>
  );
}
