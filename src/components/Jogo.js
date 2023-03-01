import React from 'react';

import imagemForca from "../imagemForca";
import palavras from "../palavras";

export function Jogo  ({jogoIniciado, 
                        setJogoIniciado, 
                        palavraSelecionada, 
                        setPalavraSelecionada, 
                        letrasSelecionadas, 
                        setLetrasSelecionadas, 
                        quantidadeErros, 
                        setQuantidadeErros}) {

    console.log(palavraSelecionada);

    function iniciarJogo() {
        setJogoIniciado(true);
        setLetrasSelecionadas([]);
        setQuantidadeErros(0);
    }

    function escolherPalavra() {
        iniciarJogo();
        const palavra = palavras[Math.floor(Math.random() * palavras.length)];
        return Array.from(palavra);
    }

    return (
        <div className="jogo">
            <img src={imagemForca[quantidadeErros]} alt={`Forca com ${quantidadeErros} erro(s)`} />
            <div className="palavra">
                <button type="button" onClick={() => setPalavraSelecionada(escolherPalavra)}>Escolher Palavra</button>
                <h1>
                {palavraSelecionada.map((letra) => (
                    <>
                        {letrasSelecionadas.includes(letra) ? letra : "_"}
                    </>
                ))}
                </h1>
            </div>
        </div>
    );
}