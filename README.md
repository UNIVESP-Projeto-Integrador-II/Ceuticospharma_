# Projeto Integrador II - UNIVESP

# Descrição

O Projeto Integrador II apresenta um site desenvolvido para uma farmácia com o objetivo de divulgar preços de medicamentos, registrar produtos, gerenciar usuários e dados, utilizando JavaScript para as funcionalidades interativas e PostgreSQL como banco de dados. O sistema permite que administradores realizem o cadastro de medicamentos, incluindo detalhes como nome, descrição e preço, além de oferecer uma plataforma onde os usuários podem consultar esses preços. Também é possível cadastrar e gerenciar informações de clientes e diferentes tipos de usuários, como administradores e consumidores. A interface do site é projetada para ser intuitiva e responsiva, oferecendo uma experiência prática tanto para os clientes quanto para os administradores da farmácia.

# Colaboradores
* José Aparecido Gomes da Silva, RA: 2215539;
* Matheus Marcelo Pereira Menezes, RA: 2106424;

# Orientadora do Projeto
* Suelen Santos Alves 


# Requisitos do PI
* Framework web;
* Banco de dados
* Nuvem;
* Acessibilidade;
* API;
* Testes;

# Tecnologias Usadas
* [HTML](https://www.w3schools.com/html/default.asp);
* [CSS](https://www.w3schools.com/css/default.asp);
* [TypeScript](https://www.typescriptlang.org/);
* [React](https://pt-br.legacy.reactjs.org/);
* [ChakraUI](https://chakra-ui.com/);
* [PostgreSQL](https://www.postgresql.org/docs/);
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git);
* [GitHub](https://github.com/);
* [Vercel](https://vercel.com/docs);
* [API Whatsapp](https://business.whatsapp.com/developers/developer-hub);
* [API Vlibras Acessibilidade](https://vlibras.gov.br/doc/widget/installation/webpageintegration.html?_ga=2.205222480.1595640842.1682445746-816840059.1655413110);
  


# Instalação
Clone o repositório localmente usando o comando:
```bash
$ git clone https://github.com/UNIVESP-Projeto-Integrador-II/project.git
```
Mudar para o diretório do projeto:
```bash
$ cd Project
```
Instale o Yarn:
```bash
$ npm install --global yarn
```
Instale as dependências do projeto:
```bash
$ yarn install
```
Inicie o servidor local:
```bash
$ yarn dev
```

# Estrutura do Projeto
```
.
├── components
│   ├── Contexts
│   │   └── SidebarDrawerContext.tsx
│   ├── Form
│   │   └── Input.tsx
│   ├── Header
│   │   ├── index.tsx
│   │   ├── Logo.tsx
│   │   ├── NotificationsNav.tsx
│   │   ├── Profile.tsx
│   │   └── SearchBox.tsx
│   ├── HomePage
│   │   ├── Footer.tsx
│   │   ├── HeroTeste.tsx
│   │   ├── NavBar.tsx
│   │   ├── ProductAddToCart.tsx
│   │   └── Product.tsx
│   ├── Pagination
│   │   ├── index.tsx
│   │   └── PaginationItem.tsx
│   └── Sidebar
│       ├── index.tsx
│       ├── NavLink.tsx
│       ├── NavSection.tsx
│       └── SidebarNav.tsx
├── next-env.d.ts
├── package.json
├── package-lock.json
├── pages
│   ├── api
│   │   ├── login.tsx
│   │   ├── products
│   │   │   ├── index.tsx
│   │   │   └── list.tsx
│   │   ├── signup.tsx
│   │   ├── testedb.ts
│   │   └── users
│   │       └── index.ts
│   ├── _app.tsx
│   ├── dashboard.tsx
│   ├── _document.tsx
│   ├── index.tsx
│   ├── products
│   │   ├── index.tsx
│   │   ├── products.tsx
│   │   └── publish.tsx
│   └── users
│       ├── create.tsx
│       ├── login.tsx
│       ├── register.tsx
│       └── userList.tsx
├── README.md
├── styles
│   └── theme.ts
├── tsconfig.json
├── utils
│   ├── db.js
│   └── multer.js
├── yarn-error.log
└── yarn.lock

15 directories, 45 files
```
