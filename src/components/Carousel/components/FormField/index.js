import React from 'react';

function FormField({label, type, valor, nome, onChange}){
    return(
        <div>
            <label>
                {label}: 
                <input 
                    type={type}
                    valor={valor}
                    nome={nome}
                    onChange={onChange}
                />
            </label>
        </div>
    );
}
export default FormField;