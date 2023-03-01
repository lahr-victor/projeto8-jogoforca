import React from "react";

import { Jogo } from "./Jogo";
import { Letras } from "./Letras";

export function App() {

    const [jogoIniciado, setJogoIniciado] = React.useState(false);
    const [palavraSelecionada, setPalavraSelecionada] = React.useState([]);
    const [letrasSelecionadas, setLetrasSelecionadas] = React.useState([]);
    const [quantidadeErros, setQuantidadeErros] = React.useState(0);
    const [jogoFinalizado, setJogoFinalizado] = React.useState(false);    

    return (
        <>
            <Jogo 
            jogoIniciado = {jogoIniciado}
            setJogoIniciado = {setJogoIniciado}
            palavraSelecionada = {palavraSelecionada}
            setPalavraSelecionada = {setPalavraSelecionada}
            letrasSelecionadas = {letrasSelecionadas}
            setLetrasSelecionadas = {setLetrasSelecionadas}
            quantidadeErros = {quantidadeErros}
            setQuantidadeErros = {setQuantidadeErros}
            setJogoFinalizado = {setJogoFinalizado}
            />
            <Letras 
            jogoIniciado = {jogoIniciado}
            palavraSelecionada = {palavraSelecionada}
            letrasSelecionadas = {letrasSelecionadas}
            setLetrasSelecionadas = {setLetrasSelecionadas}
            quantidadeErros = {quantidadeErros}
            setQuantidadeErros = {setQuantidadeErros}
            jogoFinalizado = {jogoFinalizado}
            setJogoFinalizado = {setJogoFinalizado}
            />
        </>
    );
}