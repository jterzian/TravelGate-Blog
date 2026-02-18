import Link from 'next/link';
import fs from 'fs/promises';
import path from 'path';

interface Artigo {
  slug: string;
  titulo: string;
  autor: string;
  data: string;
  descricao: string;
  conteudo: string;
}

export default async function Home() {
  const API_URL = 'https://crudcrud.com/api/086e6a5097ce49e5a7dba7dc82428028/artigos';
  let artigos: Artigo[] = [];

  try {
    const res = await fetch(API_URL, { next: { revalidate: 10 } });
    if (res.ok) {
      artigos = await res.json();
    }
    
    // Se a API estiver vazia, carrega do local para não dar erro na entrega
    if (artigos.length === 0) {
      const filePath = path.join(process.cwd(), 'data', 'artigos.json');
      const jsonData = await fs.readFile(filePath, 'utf8');
      artigos = JSON.parse(jsonData);
    }
  } catch (error) {
    const filePath = path.join(process.cwd(), 'data', 'artigos.json');
    const jsonData = await fs.readFile(filePath, 'utf8');
    artigos = JSON.parse(jsonData);
  }

  return (
    <main className="container mx-auto p-10">
      <h1 className="text-4xl font-extrabold mb-10 text-slate-900">TravelGate Blog</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {artigos.map((post) => (
          <div key={post.slug} className="group border p-6 rounded-xl shadow-sm hover:border-blue-500 transition-all bg-white">
            <h2 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">{post.titulo}</h2>
            <p className="text-slate-600 my-4 line-clamp-2">{post.descricao}</p>
            <Link href={`/artigos/${post.slug}`} className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
              Ler Destino
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}