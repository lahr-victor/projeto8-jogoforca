import React from "react";

import { Jogo } from "./Jogo";
import { Letras } from "./Letras";


import palavras from "../palavras";



export function App() {

    const [letrasSelecionadas, setletrasSelecionadas] = React.useState([]);
    const [quantidadeErros, setQuantidadeErros] = React.useState(0);

    return (
        <>
            <Jogo 
            letrasSelecionadas={letrasSelecionadas} 
            setletrasSelecionadas={setletrasSelecionadas}
            quantidadeErros={quantidadeErros} 
            setQuantidadeErros={setQuantidadeErros}
            />
            <Letras />
        </>
    );
}