import React from "react";
import Image from "next/image";

export default function page() {
    return (
        <div className="w-full bg-gray-200 flex items-center justify-center p-10 md:flex-row flex-col">

        <div className="max-w-2xl mx-auto py-8 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Neden Karekod Bildirim? </h2>
          <p className="text-lg mb-4 text-gray-600">
            Bu sistem sayesinde, işletmenizin her bir departmanı hakkında detaylı geri bildirimler toplayabilir, müşteri memnuniyetini artırabilir ve hizmet kalitenizi yükseltebilirsiniz. Departman bazında elde edilen geri bildirimler, size işletmenizin güçlü ve zayıf yönlerini daha iyi analiz etme fırsatı sunar, böylece sürekli gelişim ve müşteri memnuniyeti sağlanır.          
          </p>
        </div>
        <div className=" max-w-2xl md:ml-16 mx-auto py-8 flex flex-col items-center justify-center">
          <Image src="/call_center.png" width={400} height={400} alt="call center" />
        </div>
      </div>
    );
}