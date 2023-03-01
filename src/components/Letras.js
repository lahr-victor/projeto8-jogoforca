import alfabeto from "../alfabeto";

export function Letras({jogoIniciado, letrasSelecionadas, setLetrasSelecionadas}) {

    function selecionarLetra(letra) {
        setLetrasSelecionadas([...letrasSelecionadas, letra]);
    }

    return (
        <div className="letras">            
            {alfabeto.map((letra) => (
                <button 
                type="button" 
                onClick={() => selecionarLetra(letra)}
                disabled={(!jogoIniciado || letrasSelecionadas.includes(letra) ? true : false)}
                >
                    {letra}
                </button>
            ))}            
        </div>
    );
}