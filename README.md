# ✈️ TravelGate-Blog

Este é um projeto de blog de viagens desenvolvido com **Next.js 15**, com foco em rotas dinâmicas, carregamento de dados e otimização de SEO.

## 🚀 Funcionalidades

* **Página Inicial**: Listagem dinâmica de destinos de viagem.
* **Rotas Dinâmicas**: Páginas individuais para cada artigo utilizando `[slug]`.
* **SEO Dinâmico**: Títulos e metadados gerados dinamicamente para cada destino.
* **Data Fetching**: Consumo de dados via JSON local com fallback para API.
* **Interface**: Desenvolvida com Tailwind CSS para garantir responsividade.

## 🛠️ Tecnologias Utilizadas

* [Next.js 15](https://nextjs.org/) (App Router)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Lucide React](https://lucide.dev/) (Ícones)

## 📁 Estrutura do Projeto

```text
├── data/           # Banco de dados JSON local
├── src/
│   ├── app/        # Rotas e layouts (App Router)
│   │   ├── artigos/
│   │   │   └── [slug]/ # Página dinâmica do artigo
│   │   ├── layout.tsx  # Layout global
│   │   └── page.tsx    # Home com listagem
🔧 Como Rodar o Projeto
Instale as dependências:

Bash
npm install
Inicie o servidor de desenvolvimento:

Bash
npm run dev
Acesse no navegador:
http://localhost:3000

📄 Requisitos da Atividade
[x] Criação de Projeto Next.js com App Router.

[x] Listagem de dados (Requisito 2).

[x] Página de Detalhes Dinâmica (Requisito 1).

[x] SEO Dinâmico (Requisito 3).

[x] Deploy na Vercel (Requisito 4).