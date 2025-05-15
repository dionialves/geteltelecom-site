# 📱 Getel Telecom — Site Institucional

Este repositório contém o código-fonte do site institucional da **Getel Telecom**, desenvolvido com [Astro](https://astro.build/). O objetivo é fornecer uma presença online moderna, responsiva e de fácil manutenção para a empresa.

## 🚀 Tecnologias Utilizadas

* [Astro](https://astro.build/): Framework moderno para construção de sites estáticos rápidos e otimizados.
* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript): Para interatividade e funcionalidades dinâmicas.
* [Vite](https://vitejs.dev/): Ferramenta de build moderna utilizada internamente pelo Astro.
* [npm](https://www.npmjs.com/): Gerenciador de pacotes para instalação de dependências.

## 📁 Estrutura do Projeto

```
/
├── public/             # Arquivos públicos (imagens, ícones, etc.)
├── src/
│   ├── components/     # Componentes reutilizáveis (ex: Header, Footer)
│   ├── layouts/        # Layouts base para as páginas
│   ├── pages/          # Páginas do site (ex: index.astro, contato.astro)
│   └── scripts/        # Scripts JS usados para interatividade
├── astro.config.mjs    # Configurações do Astro
├── package.json        # Dependências e scripts do projeto
└── README.md           # Documentação do projeto
```

## 🛠️ Como Executar o Projeto Localmente

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/dionialves/geteltelecom-site.git
   cd geteltelecom-site
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

   O site estará disponível em `http://localhost:4321`.

## 📅 Páginas do Site

* `/`: Página inicial
* `/cobertura`: Informações sobre a área de cobertura
* `/contato`: Formulário de contato
* `/quemsomos`: Informações sobre a empresa

## 🔖 Scripts Disponíveis

* `npm run dev`: Inicia o servidor de desenvolvimento.
* `npm run build`: Gera a versão de produção do site na pasta `dist/`.
* `npm run preview`: Visualiza a versão de produção localmente.

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
