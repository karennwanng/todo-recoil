import { useRecoilState } from "recoil";
import { status } from "../atoms/filtroAtual"

function Filtro() {
    const [filtroAtivo, setFiltroAtivo] = useRecoilState(status)

    return (
        <div className="acoes acoes-espaco">
            <button onClick={() => setFiltroAtivo('todas')}>Todas</button>
            <button onClick={() => setFiltroAtivo('concluidas')}>Concluídas</button>
            <button onClick={() => setFiltroAtivo('pendentes')}>Pendentes</button>
        </div>
    )
}

export default Filtro;