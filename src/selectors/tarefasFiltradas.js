import { selector } from "recoil";
import { lista } from "../atoms/listaTarefas";
import { status } from "../atoms/filtroAtual";

export const tarefas = selector({
    key: 'tarefas',
    get: ({ get }) => {
        const todasTarefas = get(lista);
        const situacao = get(status);

        if (situacao === 'todas') {
            return todasTarefas;
        }
        if (situacao === 'pendentes')
            return todasTarefas.filter((tarefa) => !tarefa.concluida);
        
        if (situacao === 'concluidas')
            return todasTarefas.filter((tarefa) => tarefa.concluida)
    }
});