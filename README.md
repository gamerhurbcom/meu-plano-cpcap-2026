# ⚓ Meu Plano CP-CAP 2026

Painel pessoal de estudos para a habilitação **Processamento de Dados** do concurso CP-CAP/2026 (Marinha do Brasil).

> Este projeto é de uso **pessoal**. Não é um produto comercial: não há cobrança, checkout, planos pagos ou venda de curso. É apenas um painel privado para você acompanhar seu próprio progresso de estudos.

## ✨ O que o painel oferece

- Dashboard com visão geral do progresso, contagem regressiva até 27/09/2026 e estatísticas
- Cronograma completo das 13 semanas de estudo, com checkboxes e anotações por dia
- Aulas organizadas em 6 módulos (Org. de Computadores, SO, Redes, Algoritmos/Java, Banco de Dados, Segurança da Informação)
- Matérias com peso estimado, prioridade e gráfico de distribuição
- Sistema de revisão espaçada (1, 3, 7, 14, 30 dias)
- Registro de simulados com gráfico de evolução
- Treino de redação com temas sugeridos e critérios de avaliação
- Sistema de anotações com categorias, busca e filtros
- Checklist do dia da prova
- Configurações com exportação/importação de dados em JSON e reset de progresso

Todo o progresso é salvo **apenas no seu navegador**, usando `localStorage`. Não há backend, banco de dados ou login.

## 🛠️ Tecnologias

- [Next.js](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## 🚀 Como instalar e rodar localmente

Pré-requisitos: [Node.js](https://nodejs.org/) 18+ instalado.

```bash
# instalar dependências
npm install

# rodar em modo desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

Outros comandos disponíveis:

```bash
npm run build   # gera a build de produção
npm run start   # roda a build de produção localmente
npm run lint    # verifica problemas de lint
```

## 📦 Variáveis de ambiente

Este projeto **não requer nenhuma variável de ambiente**. Não há integração com APIs externas nem banco de dados — tudo funciona localmente no navegador.

## 📤 Como subir para o GitHub

```bash
git init
git add .
git commit -m "primeira versão do painel de estudos"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

Sugestões de commits seguintes, conforme você for editando o conteúdo:

```bash
git commit -m "ajusta cronograma de estudos"
git commit -m "adiciona novas anotações de revisão"
git commit -m "ajustes visuais no dashboard"
```

## 🌐 Como hospedar no Netlify

1. Crie um repositório no GitHub e suba o projeto (passos acima)
2. Acesse [netlify.com](https://www.netlify.com/) e faça login
3. Clique em **"Add new site"**
4. Escolha **"Import an existing project"**
5. Conecte sua conta do GitHub
6. Selecione o repositório deste projeto
7. Configure o build:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
8. Clique em **Deploy site**

O arquivo `netlify.toml` já está configurado no projeto com essas opções e com o plugin oficial `@netlify/plugin-nextjs`, necessário para que rotas e funcionalidades do Next.js funcionem corretamente no Netlify.

## 📁 Estrutura do projeto

```
/app
  /dashboard        → página inicial com visão geral
  /cronograma        → cronograma das 13 semanas
  /aulas              → módulos e aulas
  /materias           → matérias, pesos e metas
  /revisoes           → revisão espaçada
  /simulados          → registro e evolução de simulados
  /redacao            → treino de redação
  /anotacoes          → anotações pessoais
  /checklist          → checklist do dia da prova
  /configuracoes      → perfil, backup e reset
/components           → componentes reutilizáveis (Sidebar, Header, cards...)
/data                 → conteúdo inicial (cronograma, aulas, matérias...)
/hooks                → hook useLocalStorage
/lib                  → funções utilitárias
/types                → tipos TypeScript
/public               → arquivos estáticos
```

## 📝 Licença de uso

Projeto pessoal, sem fins comerciais. Use e adapte como quiser para o seu próprio estudo.

Bons estudos e boa sorte no CP-CAP/2026! ⚓
