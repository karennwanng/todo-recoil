import { useState } from "react";
import { useRecoilState } from "recoil";
import { lista } from "../atoms/listaTarefas";

function Formulario() {
    const [digitado, setDigitado] = useState("");
    const [tarefas, setTarefas] = useRecoilState(lista);

    function enviar(evento) {
        evento.preventDefault();
        if (digitado.trim() === "") {
            return;
        }
        const novaTarefa = {id: Date.now(), texto: digitado, concluida: false}
        setTarefas([...tarefas, novaTarefa])
        setDigitado("")
    }

    return (
        <form className="formulario" onSubmit={enviar}>
            <input 
                value={digitado}
                onChange={(evento) => setDigitado(evento.target.value)}
            />
            <button>Adicionar</button>
        </form>
    );
}
export default Formulario;