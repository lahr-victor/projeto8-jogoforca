import React from 'react';

import imagemForca from "../imagemForca";

export function Jogo({quantidadeErros, setQuantidadeErros}) {
    return (
        <div className="jogo">
            <img src={imagemForca[quantidadeErros]} alt={`Forca com ${quantidadeErros} erro(s)`} />
            <div className="palavra">
                <button type="button">Escolher Palavra</button>
                <h1>palavra</h1>
            </div>
        </div>
    );
}