# FISGADOS - Frontend

FISGADOS é um aplicativo web divertido, educativo e espiritual, inspirado no Duolingo, que ensina sobre a Bíblia de forma interativa. Este é o frontend do projeto, construído com **React**, **Vite**, **Tailwind CSS**, com suporte a **tema claro/escuro**, **internacionalização (i18n)** e 100% **PWA** (Progressive Web App).

## 🌐 Tecnologias Utilizadas

- React
- Vite
- Tailwind CSS
- React Router DOM
- React-i18next
- Context API (para tema e idioma)
- PWA com Vite Plugin
- TypeScript

## 🚀 Começando

### Pré-requisitos

- Node.js v18+ recomendado
- npm ou yarn

### Instalação

```bash
# Instale as dependências
npm install
```

### Rodando localmente

```bash
npm run dev
```

O app estará disponível em: [http://localhost:5173](http://localhost:5173)

## 🌗 Tema Claro e Escuro

O tema pode ser alternado entre claro e escuro através do ícone no canto superior direito da navbar.

## 🌍 Internacionalização

O app atualmente suporta:

- 🇧🇷 Português
- 🇺🇸 Inglês

Você pode alternar o idioma no canto superior direito da navbar.

## 📱 PWA

Este projeto é uma Progressive Web App e pode ser instalado em dispositivos móveis ou desktops. Basta clicar em “Instalar app” no navegador ou usar o menu de opções no Chrome.

## 🗂 Estrutura do Projeto

```
src/
├── assets/            # Imagens e mascote
├── components/        # Componentes reutilizáveis como Navbar, Footer, Hero, Sections etc.
├── context/           # Contexto de tema e idioma
├── i18n/              # Configuração de internacionalização
├── pages/             # Páginas como Home, Login, Cadastro etc.
├── App.tsx            # Estrutura de rotas
├── main.tsx           # Renderização do React
└── index.css          # Tailwind + estilos globais
```

## 📄 Licença

Este projeto está sob a licença MIT. 

---

Feito com 💜 
