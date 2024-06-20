import React from 'react';
import Image from 'next/image';
import ContactUs from '@/components/contact-us-form';
import QRDefination from '@/components/defination-qr';
import VideoIntroduction from '@/components/video-instruction';
import Header from '@/components/header';
import QRDefinationSystem from '@/components/ststem-des';
import { BsQrCodeScan } from "react-icons/bs";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50">
      <Header />

      <QRDefinationSystem />

      <div className="w-full flex items-center justify-center py-14 mb-6">
        <BsQrCodeScan className="text-9xl text-cyan-600 animate-spin-slow" />
      </div>
      
      <VideoIntroduction />


    

      <div className="w-full bg-gray-100 flex items-center justify-center">
        <div className="container mx-auto py-8">
          <ContactUs />
        </div>
      </div>
      <footer className="w-full py-4 bg-gray-100 text-gray-600 text-center justify-between flex px-9">
        <p>&copy; 2024 Karekod Bildirim Sistemi. Tüm hakları saklıdır.</p>
        <p>+90 549 538 38 37</p>
      </footer>
    </div>
  );
}
