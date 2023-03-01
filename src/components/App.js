import React from "react";

import { Jogo } from "./Jogo";
import { Letras } from "./Letras";

export function App() {

    const [palavraSelecionada, setPalavraSelecionada] = React.useState("");
    const [letrasSelecionadas, setletrasSelecionadas] = React.useState([]);
    const [quantidadeErros, setQuantidadeErros] = React.useState(0);

    return (
        <>
            <Jogo 
            palavraSelecionada={palavraSelecionada}
            setPalavraSelecionada={setPalavraSelecionada}
            letrasSelecionadas={letrasSelecionadas} 
            setletrasSelecionadas={setletrasSelecionadas}
            quantidadeErros={quantidadeErros} 
            setQuantidadeErros={setQuantidadeErros}
            />
            <Letras />
        </>
    );
}