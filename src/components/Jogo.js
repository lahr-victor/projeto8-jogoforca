import React from 'react';

import imagemForca from "../imagemForca";
import palavras from "../palavras";

export function Jogo  ({setJogoIniciado, 
                        palavraSelecionada, 
                        setPalavraSelecionada, 
                        letrasSelecionadas, 
                        setLetrasSelecionadas, 
                        quantidadeErros, 
                        setQuantidadeErros,
                        setJogoFinalizado}) {



    function iniciarJogo() {
        setJogoIniciado(true);
        setLetrasSelecionadas([]);
        setQuantidadeErros(0);
        setJogoFinalizado(false);
    }

    function escolherPalavra() {
        iniciarJogo();
        const palavra = palavras[Math.floor(Math.random() * palavras.length)];
        return Array.from(palavra);
    }    

    function condicaoVitoria() {
        return (palavraSelecionada.every(letra => letrasSelecionadas.includes(letra)));           
    }

    function condicaoDerrota() {
        return (quantidadeErros === 6);
    }

    if (condicaoVitoria() || condicaoDerrota()) {
        setJogoFinalizado(true);
    }

    return (
        <div className="jogo">
            <img src={imagemForca[quantidadeErros]} alt={`Forca com ${quantidadeErros} erro(s)`} data-test="game-image"/>
            <div className="palavra">
                <button 
                type="button" 
                onClick={() => setPalavraSelecionada(escolherPalavra)}
                data-test="choose-word"
                >
                    Escolher Palavra
                </button>
                <h1 className={condicaoVitoria() ? "vitoria" : condicaoDerrota() ? "derrota" : ""} data-test="word">
                {palavraSelecionada.map((letra) => (
                    <>
                        {letrasSelecionadas.includes(letra) || condicaoDerrota() ? letra : "_"}
                    </>
                ))}
                </h1>
            </div>
        </div>
    );
}