import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/Carousel/components/FormField';



function CadastroCategoria(){

    const [categorias, setCategorias] = useState(['teste']);

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#fff'
    }

    const [valores, setValores] = useState(valoresIniciais);

    function setValor(chave, valor){
        setValores({
            ...valores,
            [chave]: valor
        })
    }

    function handleChange(infosDoEvento){
        setValor(
        infosDoEvento.target.getAttribute('nome'),
        infosDoEvento.target.value)
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {valores.nome}</h1>

            <form onSubmit={function handleSubmit(infosDoEvento){
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    valores,
                ]);

                setValores(valoresIniciais)
            }}>

                <div>
                    
                    <FormField
                        label="Cadastro de Categoria"
                        type="text"
                        nome="nome"
                        valor={valores.nome}
                        onChange={handleChange}
                    />

                    <FormField
                        label="Descrição"
                        type="textarea"
                        nome="descricao"
                        valor={valores.descricao}
                        onChange={handleChange}
                    />      

                    <FormField
                        label="Cor"
                        type="color"
                        nome="cor"
                        valor={valores.cor}
                        onChange={handleChange}
                    />

                </div>

                <button>Cadastrar</button>
            </form>

            <ul>
                {categorias.map((categoria, indice)=>{
                    return (
                        <li key={`${categoria} ${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;