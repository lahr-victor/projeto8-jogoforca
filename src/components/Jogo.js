import React from 'react';

import imagemForca from "../imagemForca";
import palavras from "../palavras";

function escolherPalavra() {
    return palavras[Math.floor(Math.random() * palavras.length)]
}

export function Jogo({palavraSelecionada, setPalavraSelecionada, letrasSelecionadas, letLetrasSelecionadas, quantidadeErros, setQuantidadeErros}) {
    return (
        <div className="jogo">
            <img src={imagemForca[quantidadeErros]} alt={`Forca com ${quantidadeErros} erro(s)`} />
            <div className="palavra">
                <button type="button" onClick={() => setPalavraSelecionada(escolherPalavra)}>Escolher Palavra</button>
                <h1>{palavraSelecionada}</h1>
            </div>
        </div>
    );
}