import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/Carousel/components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);

  function setValor(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValor(infosDoEvento.target.getAttribute('nome'), infosDoEvento.target.value);
  }

  useEffect(() => {
    console.log('fala rapaziada');

    const url = 'http://localhost:8080/categorias';
    fetch(url)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });

    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: 'Front-end',
    //       descricao: 'descricao show',
    //       cor: '#fff',
    //     },
    //     {
    //       id: 2,
    //       nome: 'Back-end',
    //       descricao: 'Outra descricao show',
    //       cor: '#fff',
    //     },
    //   ]);
    // }, 4 * 1000);
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {valores.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          valores,
        ]);

        setValores(valoresIniciais);
      }}
      >

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

        <Button>Cadastrar</Button>
      </form>

      <ul>
        {categorias.map((categoria) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
