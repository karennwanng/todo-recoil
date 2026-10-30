To-do List com Recoil

Aplicação de lista de tarefas feita com React e Recoil, desenvolvida como exercício do curso de front-end da EBAC. Todo o estado da aplicação (a lista de tarefas e o filtro ativo) fica fora dos componentes, em átomos e seletores do Recoil.

Funcionalidades
Adicionar tarefas (campos vazios ou só com espaços são ignorados)
Marcar e desmarcar tarefas como concluídas
Remover tarefas
Filtrar entre todas, concluídas e pendentes
Interface responsiva, que se adapta a telas de celular e de computador
Como o estado funciona
Peça	Arquivo	O que faz
RecoilRoot	src/main.jsx	Habilita o Recoil para toda a aplicação
Átomo lista	src/atoms/listaTarefas.js	Guarda todas as tarefas
Átomo status	src/atoms/filtroAtual.js	Guarda o filtro ativo ('todas', 'concluidas' ou 'pendentes')
Seletor tarefas	src/selectors/tarefasFiltradas.js	Lê a lista e o filtro e devolve só as tarefas que devem aparecer

Os componentes usam useRecoilState para ler e alterar o estado, e useRecoilValue para apenas ler. Os botões de concluir e remover alteram o átomo da lista completa, e não a lista filtrada, para que as tarefas escondidas pelo filtro não se percam.

Cada tarefa é um objeto no formato:

js
{ id: 1730000000000, texto: "Estudar Recoil", concluida: false }
Tecnologias
React 18
Recoil
Vite
CSS puro (flexbox)

O projeto usa o React 18 porque o Recoil não é compatível com o React 19.

Estrutura de pastas
src/
├── atoms/
│   ├── filtroAtual.js
│   └── listaTarefas.js
├── selectors/
│   └── tarefasFiltradas.js
├── components/
│   ├── Filtro.jsx
│   ├── Formulario.jsx
│   └── ListaTarefas.jsx
├── App.jsx
├── App.css
└── main.jsx
Como rodar o projeto

Pré-requisito: Node.js instalado.

bash
# clonar o repositório
git clone https://github.com/karennwanng/todo-recoil.git

# entrar na pasta
cd todo-recoil

# instalar as dependências
npm install

# iniciar o servidor de desenvolvimento
npm run dev

Depois, abra o endereço localhost que aparecer no terminal.

Autora

Karen — @karennwanng