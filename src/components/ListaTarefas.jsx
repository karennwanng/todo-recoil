import { useRecoilValue, useRecoilState } from "recoil";
import { tarefas } from "../selectors/tarefasFiltradas";
import { lista } from "../atoms/listaTarefas";

function ListaTarefas() {
    const tarefasFiltradas = useRecoilValue(tarefas)
    const [todasTarefas, setTodasTarefas] = useRecoilState(lista)

    return (
        <ul>
            {tarefasFiltradas.map((tarefa) => (
                <li key={tarefa.id} className="tarefa">
                    <span style={{ textDecoration: tarefa.concluida ? "line-through" : "none" }} >{tarefa.texto}</span>
                    <div className="acoes">
                        <button onClick={() => setTodasTarefas(todasTarefas.filter((item) => item.id !== tarefa.id))}>Remover</button>
                        <button onClick={() => setTodasTarefas(todasTarefas.map((item) => item.id === tarefa.id ? { ...item, concluida: !tarefa.concluida } : item))}>Concluir</button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default ListaTarefas;