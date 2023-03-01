import alfabeto from "../alfabeto";

export function Letras() {
    return (
        <div className="letras">            
            {alfabeto.map((letra) => (
                <button type="button">{letra}</button>
            ))}            
        </div>
    );
}