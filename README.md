# 🗂️ Gestor de Inventário/Coleções

Projeto final do módulo React - **Grupo 4**

## 👥 Equipe

| Nome | Responsabilidade | Documento |
|------|------------------|-----------|
| **Welder** | Context API + Setup + Integração | [📄 Abrir tutorial](https://docs.google.com/document/d/1M6Qzi4TKtLpN2CQ9NhT8VEQx04jE9o6O/edit?usp=sharing&ouid=111506582589075026526&rtpof=true&sd=true) |
| **Robert** | React Router + Páginas | [📄 Abrir tutorial](https://docs.google.com/document/d/1D1lo7akPj2bJMSSv3DbjDyU3HXaUYZ23/edit?usp=drive_link&ouid=111506582589075026526&rtpof=true&sd=true) |
| **Isabelle** | Formulário Controlado | [📄 Abrir tutorial](https://docs.google.com/document/d/1OFAYzmuUOHzMnCbQlcpaLNeraUTb-F0s/edit?usp=drive_link&ouid=111506582589075026526&rtpof=true&sd=true) |
| **Daniel** | ItemCard + Persistência | [📄 Abrir tutorial](https://docs.google.com/document/d/1udjKzhpielbTYnYEWdAHjh4Kg9wC5yOE/edit?usp=drive_link&ouid=111506582589075026526&rtpof=true&sd=true) |
| **Karen** | Componentes Visuais (Header, Footer, Categoria) | [📄 Abrir tutorial](https://docs.google.com/document/d/1gGL-kund06A80ZSA34pw2Lhrx82ERVK9/edit?usp=drive_link&ouid=111506582589075026526&rtpof=true&sd=true) |

> 📁 [Pasta com todos os documentos](https://drive.google.com/drive/folders/1XHAcZJWn3oydZsLmbOpWtGiCaosGKshl?usp=drive_link)

---

## 🚀 Como começar

### 1. Clonar o repositório
```bash
git clone https://github.com/WelderBM/final-project-group-4.git
cd final-project-group-4
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Criar sua branch
```bash
# Robert
git checkout -b feature/rotas

# Isabelle
git checkout -b feature/formulario

# Daniel
git checkout -b feature/itemcard-storage

# Karen
git checkout -b feature/componentes-visuais
```

### 4. Abrir seu tutorial e codar! 💻

### 5. Ao terminar, salvar o trabalho
```bash
git add .
git commit -m "feat: descrição do que você fez"
git push origin NOME-DA-SUA-BRANCH
```

---

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.jsx .............. Karen
│   ├── Footer.jsx .............. Karen
│   ├── Categoria.jsx ........... Karen
│   ├── FormularioItem.jsx ...... Isabelle
│   └── ItemCard.jsx ............ Daniel
├── pages/
│   ├── PaginaInicio.jsx ........ Robert
│   ├── PaginaInventario.jsx .... Robert
│   ├── PaginaDetalhes.jsx ...... Robert
│   └── PaginaNaoEncontrada.jsx . Robert
├── contexts/
│   └── InventarioContext.jsx ... Welder
├── App.jsx ..................... Welder
├── main.jsx .................... Welder
└── index.css ................... Welder
```

---

## ⏱️ Cronograma

| Fase | O que | Quem | Tempo |
|------|-------|------|-------|
| 1 | Setup inicial já feito | Welder | ✅ |
| 2 | Desenvolvimento em paralelo | Todos | ~2h |
| 3 | Integração final | Welder | ~1h |

---

## 🆘 Problemas comuns

**"Não consigo fazer push"**
```bash
git branch  # verifica se está na branch certa
git status  # verifica se fez commit
```

**"Preciso fazer pull primeiro"**
```bash
git pull origin SUA-BRANCH
git push origin SUA-BRANCH
```

**"Esqueci de criar a branch"**
```bash
git checkout -b feature/SUA-BRANCH  # cria agora, seu código vai junto
```

---

## 🎯 Funcionalidades do App

- ✅ Dashboard com estatísticas da coleção
- ✅ Formulário para adicionar itens
- ✅ Lista de itens com cards
- ✅ Página de detalhes de cada item
- ✅ Remoção de itens
- ✅ Persistência com localStorage (dados salvos mesmo após F5)

---

**Dúvidas? Chama o Welder!** 🤙
