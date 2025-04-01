# Mariana Mari Arquitetura

Este repositório contém o código-fonte do website portfólio de Mariana Mari, uma arquiteta especializada em design de interiores e projetos arquitetônicos.

## Tecnologias Utilizadas

- **TypeScript** - Linguagem principal utilizada no desenvolvimento.
- **React.js** - Biblioteca para a construção da interface do usuário.
- **Vite** - Ferramenta para otimização e build do projeto.
- **Tailwind CSS** - Framework CSS para estilização rápida e responsiva.
- **Drizzle ORM** - Utilizado para interação com banco de dados.

## Estrutura do Projeto

O repositório está organizado da seguinte forma:

- **attached_assets/** - Contém imagens e outros ativos utilizados no site.
- **client/** - Código-fonte da aplicação front-end.
- **server/** - Backend responsável por serviços e integrações.
- **shared/** - Módulos reutilizáveis entre front-end e back-end.
- **Configuração e dependências:**
  - `.gitignore` - Arquivos ignorados pelo Git.
  - `drizzle.config.ts` - Configuração do ORM.
  - `package.json` - Dependências do projeto.
  - `tailwind.config.ts` - Configuração do Tailwind CSS.
  - `vite.config.ts` - Configuração do Vite.

## Como Rodar o Projeto

1. Clone este repositório:
   ```sh
   git clone https://github.com/FranklinM077/MarianaMariArquitetura.git
   ```
2. Instale as dependências:
   ```sh
   cd MarianaMariArquitetura
   npm install
   ```
3. Execute o projeto:
   ```sh
   npm run dev
   ```
4. Acesse `http://localhost:5173/` no navegador.

## Contribuição

Se desejar contribuir, faça um fork do repositório e abra um pull request com suas sugestões e melhorias.

## Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usar e modificar conforme necessário.

