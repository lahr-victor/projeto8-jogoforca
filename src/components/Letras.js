import alfabeto from "../alfabeto";

export function Letras({jogoIniciado, 
                        palavraSelecionada, 
                        letrasSelecionadas, 
                        setLetrasSelecionadas,
                        quantidadeErros, 
                        setQuantidadeErros,
                        jogoFinalizado}) {



    function selecionarLetra(letra) {
        !palavraSelecionada.includes(letra) && setQuantidadeErros(quantidadeErros + 1);
        setLetrasSelecionadas([...letrasSelecionadas, letra]);
    }

    return (
        <div className="letras">            
            {alfabeto.map((letra) => (
                <button 
                type="button" 
                onClick={() => selecionarLetra(letra)}
                disabled={(!jogoIniciado || letrasSelecionadas.includes(letra) || jogoFinalizado ? true : false)}
                data-test="letter"
                >
                    {letra.toUpperCase()}
                </button>
            ))}            
        </div>
    );
}