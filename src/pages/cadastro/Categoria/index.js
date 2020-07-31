import React, {useEffect, useState} from 'react';
import FormField from "../../../components/FormField";
import PageDefault from "../../../components/PageDefault";

function CadastroCategoria() {

    /* CONSTANTS */
    const categoryEmpty = {
        name: '',
        description: '',
        color: '',
    };

    //const URL = 'http://localhost:8080';
    const URL = 'https://gusflix.herokuapp.com';

    /* HANDLE */
    function handleChangeCategory(value) {
        /* Descobre o name - value.target.getAttribute('name') */
        setValue(value.target.getAttribute('name'), value.target.value);
    }

    function handleAddCategory(event) {
        event.preventDefault();
        if (!category.name || category.name.trim() === '') {
            alert('Valor inválido.');
            return;
        }

        if (categoryList.includes(category.name)) {
            alert('Esta categoria já existe, selecioe outra.');
            return;
        }

        setCategoryList([...categoryList, category]);
        setCategory(categoryEmpty);
    }

    /* FUNCTION */
    function setValue(key, value) {
        setCategory({
            ...category,
            [key]: value // nome: valor
        });
    }

    /* STATE */
    const [category, setCategory] = useState(categoryEmpty);
    const [categoryList, setCategoryList] = useState([]);

    /* USE EFECT - Quando atualizar uma coisa faz isso
    * [] = Uma unica vez
    * [category.name] = Quando essa variavel mudar
    * */
    useEffect(() => {
        fetch(`${URL}/categorias`)
            .then(async (response) => await response.json())
            .then((response) => {
                console.log(response);
                setCategoryList(
                    ...categoryList,
                    response
                );
            });

        /*
        setTimeout(() => {
            setCategoryList([
                ...categoryList,
                {
                    "id": 1,
                    name: 'Gustavo',
                    description: 'teste',
                    color: '#cdb1ff',
                },
                {
                    "id": 2,
                    name: 'Michelle',
                    description: 'teste',
                    color: '#cdb1ff',
                },
            ]);
        }, 2 * 1000);
        */
    }, [])

    return (
        <PageDefault>
            <h1>Cadastro de Categoria:</h1>
            <form onSubmit={handleAddCategory}>
                <FormField
                    name='name'
                    label='Nome'
                    value={category.name}
                    onChange={handleChangeCategory}
                />
                <FormField
                    name='description'
                    label='Descrição'
                    value={category.description}
                    onChange={handleChangeCategory}
                    type='textarea'
                />
                <FormField
                    name='color'
                    label='Color'
                    value={category.color}
                    onChange={handleChangeCategory}
                    typeInput='color'
                />
                <button>Cadastrar</button>
                {/* Monstra quando não tem nada na lista */}
                {
                    categoryList.length === 0 && (
                        <div>Loading...</div>
                    )
                }
                <ul>
                    {
                        categoryList.map((category, index) => {
                            return <li key={`${category.name}${index}`}>{category.name}</li>
                        })
                    }
                </ul>
            </form>
        </PageDefault>
    )
}

export default CadastroCategoria;