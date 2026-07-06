# ⚓ Meu Plano CP-CAP 2026

Painel pessoal de estudos para a habilitação **Processamento de Dados** do concurso CP-CAP/2026 (Marinha do Brasil).

> Este projeto é de uso **pessoal**. Não é um produto comercial: não há cobrança, checkout, planos pagos ou venda de curso. É apenas um painel privado para você acompanhar seu próprio progresso de estudos.

## ✨ O que o painel oferece

- Dashboard com visão geral do progresso, contagem regressiva até 27/09/2026 e estatísticas
- Cronograma completo das 13 semanas de estudo, com checkboxes e anotações por dia
- Aulas organizadas em 6 módulos (Org. de Computadores, SO, Redes, Algoritmos/Java, Banco de Dados, Segurança da Informação), **cada uma com conteúdo de estudo completo** (texto explicativo, exemplos e dicas de prova) — dá para estudar direto no painel, sem precisar de outro site só para anotação
- Matérias com peso estimado, prioridade e gráfico de distribuição
- Sistema de revisão espaçada (1, 3, 7, 14, 30 dias)
- Registro de simulados com gráfico de evolução
- Treino de redação com temas sugeridos e critérios de avaliação
- Sistema de anotações com categorias, busca e filtros
- Checklist do dia da prova
- Configurações com exportação/importação de dados em JSON e reset de progresso
- **Progresso compartilhado por e-mail**: ao abrir o site, você digita um e-mail (o mesmo combinado com seu colega) e todo o progresso feito sob esse e-mail fica salvo na nuvem (Firebase Firestore) e sincronizado em tempo real entre todos que usarem o mesmo e-mail

Não há senha nem autenticação real — é apenas uma chave de acesso compartilhada. Qualquer pessoa que souber o e-mail combinado acessa os mesmos dados.

## 🛠️ Tecnologias

- [Next.js](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Firebase Firestore (armazenamento em nuvem, sincronizado por e-mail)

## 🔥 Como configurar o Firebase

1. Acesse [console.firebase.google.com](https://console.firebase.google.com/) e crie um projeto novo (gratuito, plano Spark é suficiente)
2. No menu lateral, vá em **Firestore Database** → **Criar banco de dados** → escolha o modo **produção** (ou teste, para começar) e uma região
3. Nas regras do Firestore, para uso simples entre você e seu colega, pode usar (ajuste depois se quiser mais segurança):
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /usuarios/{email}/dados/{doc} {
         allow read, write: if true;
       }
     }
   }
   ```
4. Vá em **Configurações do projeto** (ícone de engrenagem) → **Seus apps** → clique no ícone `</>` (Web) → registre um app
5. Copie os valores de `firebaseConfig` gerados
6. Na raiz do projeto, copie `.env.local.example` para `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```
7. Preencha o `.env.local` com os valores copiados do Firebase:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=...
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
   NEXT_PUBLIC_FIREBASE_APP_ID=...
   ```
8. No Netlify, adicione essas mesmas variáveis em **Site settings → Environment variables** (elas começam com `NEXT_PUBLIC_` para funcionar no navegador)

Depois disso, ao abrir o site, digite o e-mail combinado com seu colega — os dois vão ver e editar o mesmo progresso.

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

O projeto precisa das credenciais do Firebase (veja a seção **🔥 Como configurar o Firebase** acima):

```
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
```

Elas são públicas (prefixo `NEXT_PUBLIC_`) porque são usadas no navegador — a segurança do banco fica por conta das regras do Firestore.

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
/components           → componentes reutilizáveis (Sidebar, Header, EmailGate, cards...)
/context              → EmailContext (e-mail da sessão compartilhada)
/data                 → conteúdo inicial (cronograma, aulas, matérias...)
/hooks                → hook useCloudStorage (sincroniza com o Firestore)
/lib                  → firebase.ts (config) e cloudData.ts (export/import/reset)
/types                → tipos TypeScript
/public               → arquivos estáticos
```

## 📝 Licença de uso

Projeto pessoal, sem fins comerciais. Use e adapte como quiser para o seu próprio estudo.

Bons estudos e boa sorte no CP-CAP/2026! ⚓
