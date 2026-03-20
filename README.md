# 🗂️ Gestor de Inventário/Coleções

Uma aplicação React para gerenciar coleções pessoais de itens como vinis, cards, action figures e mais.

![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react)
![React Router](https://img.shields.io/badge/React_Router-7.13.1-CA4245?logo=reactrouter)
![Vite](https://img.shields.io/badge/Vite-8.0.1-646CFF?logo=vite)

---

## ✨ Funcionalidades

- ✅ **Dashboard** com estatísticas da coleção (total de itens, categorias, itens raros)
- ✅ **Formulário controlado** para adicionar novos itens com validação
- ✅ **Lista de itens** em cards com informações de raridade e categoria
- ✅ **Página de detalhes** para cada item via rota dinâmica
- ✅ **Remoção de itens** com confirmação
- ✅ **Persistência com localStorage** — dados mantidos após recarregar a página
- ✅ **Navegação SPA** sem recarregamento usando React Router
- ✅ **Design responsivo** para desktop e mobile

---

## 🚀 Como executar

```bash
# Clonar o repositório
git clone https://github.com/WelderBM/final-project-group-4.git
cd final-project-group-4

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

---

## 🏗️ Build para produção

```bash
# Gerar build otimizado
npm run build

# Pré-visualizar build
npm run preview
```

Os arquivos de produção serão gerados na pasta `dist/`.

---

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.jsx .............. Navegação principal com NavLink
│   ├── Footer.jsx .............. Rodapé com créditos
│   ├── Categoria.jsx ........... Badge de categoria
│   ├── FormularioItem.jsx ...... Formulário controlado com validação
│   └── ItemCard.jsx ............ Card de exibição de item
├── pages/
│   ├── PaginaInicio.jsx ........ Dashboard com estatísticas
│   ├── PaginaInventario.jsx .... Lista de itens + formulário
│   ├── PaginaDetalhes.jsx ...... Detalhes do item (rota dinâmica)
│   └── PaginaNaoEncontrada.jsx . Página 404
├── contexts/
│   └── InventarioContext.jsx ... Context API + localStorage
├── App.jsx ..................... Configuração de rotas
├── main.jsx .................... Entry point com providers
└── index.css ................... Estilos globais
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| React | 19.2.4 | Biblioteca UI |
| React Router DOM | 7.13.1 | Navegação SPA |
| Vite | 8.0.1 | Build tool |
| Context API | - | Gerenciamento de estado global |
| localStorage | - | Persistência de dados |

---

## 📚 Conceitos React Aplicados

### Context API
Gerenciamento de estado global para compartilhar dados entre componentes sem prop drilling.

```jsx
// Criação do contexto
const InventarioContext = createContext(null)

// Hook customizado para consumir
export function useInventario() {
  return useContext(InventarioContext)
}
```

### React Router
Navegação entre páginas sem recarregamento, incluindo rotas dinâmicas.

```jsx
// Rota dinâmica
<Route path="/item/:id" element={<PaginaDetalhes />} />

// Acessando parâmetro
const { id } = useParams()
```

### Formulário Controlado
Estado gerenciado pelo React com validação e handler único.

```jsx
const [form, setForm] = useState({ nome: '', categoria: '' })

const handleChange = (e) => {
  const { name, value } = e.target
  setForm(prev => ({ ...prev, [name]: value }))
}
```

### localStorage com useEffect
Persistência automática quando o estado muda.

```jsx
useEffect(() => {
  localStorage.setItem('minha-colecao', JSON.stringify(itens))
}, [itens])
```

---

## 👥 Equipe - Grupo 4

| Integrante | Responsabilidade |
|------------|------------------|
| **Welder** | Context API, Setup inicial, Integração final |
| **Daniel** | React Router, Páginas (Início, Inventário, Detalhes, 404) |
| **Isabelle** | Formulário controlado com validação |
| **Robert** | ItemCard, Link dinâmico, Integração com Categoria |
| **Karen** | Componentes visuais (Header, Footer, Categoria) |

---

## 📄 Licença

Projeto desenvolvido para fins educacionais — Módulo React, ITEAM 2024.

---

**Feito com 💜 pelo Grupo 4**
