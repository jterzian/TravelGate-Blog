import fs from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Função para buscar os dados (mesma lógica da Home)
async function getArtigo(slug: string) {
  try {
    const filePath = path.join(process.cwd(), 'data', 'artigos.json');
    const jsonData = await fs.readFile(filePath, 'utf8');
    const artigos = JSON.parse(jsonData);
    return artigos.find((a: any) => a.slug === slug);
  } catch (error) {
    return null;
  }
}

// SEO Dinâmico
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artigo = await getArtigo(slug);
  return {
    title: artigo?.titulo || 'Artigo não encontrado',
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artigo = await getArtigo(slug);

  if (!artigo) notFound();

  return (
    <main className="container mx-auto p-10">
      <Link href="/" className="text-blue-600 hover:underline mb-4 block">← Voltar</Link>
      <article className="bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold mb-4">{artigo.titulo}</h1>
        <p className="text-slate-500 mb-6">Por {artigo.autor} em {artigo.data}</p>
        <div className="text-lg leading-relaxed text-slate-800">
          {artigo.conteudo}
        </div>
      </article>
    </main>
  );
}