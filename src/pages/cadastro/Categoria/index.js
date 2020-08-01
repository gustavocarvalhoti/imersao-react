import React, {useEffect, useState} from 'react';
import Button from "../../../components/Button";
import FormField from "../../../components/FormField";
import PageDefault from "../../../components/PageDefault";
import useForm from "../../../hooks/useForm";
import categoriasRepository from "../../../repository/categorias";

function CadastroCategoria() {

    /* CONSTANTS */
    const initial = {
        titulo: '',
        descricao: '',
        cor: '',
    };

    /*USE CUSTOM HOOKS*/
    const {formData, handleChange, clearForm} = useForm(initial)

    /* STATE */
    const [valueList, setValueList] = useState([]);

    /* HANDLE */
    function handleAddCategory(event) {
        event.preventDefault();
        if (!formData.titulo || formData.titulo.trim() === '') {
            alert('Valor inválido.');
            return;
        }

        if (valueList.includes(formData.titulo)) {
            alert('Esta categoria já existe, selecioe outra.');
            return;
        }

        setValueList([...valueList, formData]);
        clearForm();
    }

    /* USE EFECT - Quando atualizar uma coisa faz isso
    * [] = Uma unica vez
    * [value.titulo] = Quando essa variavel mudar
    * */
    useEffect(() => {
        categoriasRepository
            .getAll()
            .then((result => {
                setValueList([...valueList, result]);
            }));
        // eslint-disable-next-line
    }, [])

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: </h1>
            <form>
                <FormField
                    name='titulo'
                    label='Nome'
                    value={formData.titulo}
                    onChange={handleChange}
                />
                <FormField
                    name='descricao'
                    label='Descrição'
                    value={formData.descricao}
                    onChange={handleChange}
                    type='textarea'
                />
                <FormField
                    name='cor'
                    label='Color'
                    value={formData.cor}
                    onChange={handleChange}
                    typeInput='color'
                />
                <Button onClick={handleAddCategory}>Cadastrar</Button>
                {/* Monstra quando não tem nada na lista */}
                {
                    valueList.length === 0 && (
                        <div>Loading...</div>
                    )
                }
                <ul>
                    {
                        valueList.map((value, index) => {
                            return <li key={`${value.titulo}${index}`}>{value.titulo}</li>
                        })
                    }
                </ul>
            </form>
        </PageDefault>
    )
}

export default CadastroCategoria;