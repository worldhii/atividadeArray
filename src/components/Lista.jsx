import { useState } from "react";
 
function Lista({ itens, busca, onExcluir }) {
 
    return (
        <>

        

        <div className="lista">
            <h2>Lista de Coisas: </h2>

            
 
            {itens.length > 0 ? (
                
                itens.map((item, index) => (
                <p key={index}>
                {item}{' '}

                
 
                <button onClick={() => onExcluir(index)}>
                 Excluir
                </button>
                 </p>

                ))
            ) : (
                <p>Não existe</p>
            )}
 
       </div>

        </>
    )
}
 
export default Lista
 