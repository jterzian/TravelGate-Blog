import fs from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// REQUISITO 2: Força o SSG (Static Site Generation)
export const dynamic = 'force-static';

async function getArtigos() {
  const filePath = path.join(process.cwd(), 'data', 'artigos.json');
  const jsonData = await fs.readFile(filePath, 'utf8');
  return JSON.parse(jsonData);
}

// REQUISITO 2: Informa ao Next.js quais slugs existem para pré-renderizar
export async function generateStaticParams() {
  const artigos = await getArtigos();
  return artigos.map((artigo: any) => ({
    slug: artigo.slug,
  }));
}

// REQUISITO 3: SEO Dinâmico (Título da aba do navegador)
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artigos = await getArtigos();
  const artigo = artigos.find((a: any) => a.slug === slug);
  
  return {
    title: artigo?.titulo || 'Artigo não encontrado',
    description: artigo?.descricao || 'Descubra mais no TravelGate Blog',
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artigos = await getArtigos();
  const artigo = artigos.find((a: any) => a.slug === slug);

  if (!artigo) notFound();

  return (
    <main className="container mx-auto p-10 font-sans">
      <Link href="/" className="text-blue-600 hover:underline mb-6 inline-block">← Voltar para a Home</Link>
      <article className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-900">{artigo.titulo}</h1>
        <div className="flex gap-4 text-sm text-gray-500 mb-8 border-b pb-4">
          <span>✍️ Autor: {artigo.autor}</span>
          <span>📅 Data: {artigo.data}</span>
        </div>
        <div className="text-lg leading-relaxed text-gray-800 whitespace-pre-line">
          {artigo.conteudo}
        </div>
      </article>
    </main>
  );
}