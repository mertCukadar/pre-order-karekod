import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karekod Bildirim",
  description: "Karekod Bildirim sistemi ile işletmenizin her bir departmanı hakkında detaylı geri bildirimler toplayabilir, müşteri memnuniyetini artırabilir ve hizmet kalitenizi yükseltebilirsiniz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
