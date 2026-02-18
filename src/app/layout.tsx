import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TravelGate - Seu Portal de Viagens",
  description: "Descubra destinos incríveis com SEO dinâmico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <nav className="bg-white border-b p-4 mb-6 shadow-sm">
          <div className="container mx-auto font-bold text-xl text-blue-600">
            <a href="/">✈️ TravelGate</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}