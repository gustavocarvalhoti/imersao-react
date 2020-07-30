import React, {useState} from 'react';
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";

function CadastroCategoria() {

    /* CONSTANTS */
    const categoryEmpty = {
        name: '',
        description: '',
        color: '',
    };

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

        const newLIst = [...categoryList, category.name];
        setCategoryList(newLIst);
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

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {
                category.name + ' ' +
                category.description + ' ' +
                category.color
            }</h1>
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
                <ul>
                    {
                        categoryList.map((category, index) => {
                            return <li key={`${category}${index}`}>{category}</li>
                        })
                    }
                </ul>
            </form>
        </PageDefault>
    )
}

export default CadastroCategoria;