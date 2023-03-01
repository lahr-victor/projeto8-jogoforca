import alfabeto from "../alfabeto";

export function Letras({letrasSelecionadas, setLetrasSelecionadas}) {

    function selecionarLetra(letra) {
        setLetrasSelecionadas([...letrasSelecionadas, letra]);
    }

    return (
        <div className="letras">            
            {alfabeto.map((letra) => (
                <button type="button" onClick={() => selecionarLetra(letra)}>
                    {letra}
                </button>
            ))}            
        </div>
    );
}