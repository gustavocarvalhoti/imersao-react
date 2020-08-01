import React, {useEffect, useState} from 'react';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import {Link, useHistory} from 'react-router-dom';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';
import videosRepository from '../../../repository/videos';
import categoriasRepository from '../../../repository/categorias';

function CadastroVideo() {

    const history = useHistory();

    const [categorias, setCategorias] = useState([]);

    const categoryTitles = categorias.map(({titulo}) => titulo);

    const {handleChange, formData} = useForm({
        titulo: 'Video padrão',
        url: 'https://www.youtube.com/watch?v=jOAU81jdi-c',
        categoria: '',
    });

    useEffect(() => {
        categoriasRepository
            .getAll()
            .then((categoriasFromServer) => {
                setCategorias(categoriasFromServer);
            });
    }, []);

    function handleAddVideo(event) {
        event.preventDefault();
        const categoriaEscolhida = categorias.find((categoria) => {
            return categoria.titulo === formData.categoria;
        });

        videosRepository
            .create({
                titulo: formData.titulo,
                url: formData.url,
                categoriaId: categoriaEscolhida.id,
            })
            .then(() => {
                console.log('Cadastrou com sucesso!');
                history.push('/');
            });
    }

    return (
        <PageDefault>
            <h1>Cadastro de Video</h1>
            <form>
                <FormField
                    label="Título do Vídeo"
                    name="titulo"
                    value={formData.titulo}
                    onChange={handleChange}
                />
                <FormField
                    label="URL"
                    name="url"
                    value={formData.url}
                    onChange={handleChange}
                />
                <FormField
                    label="Categoria"
                    name="categoria"
                    value={formData.categoria}
                    onChange={handleChange}
                    suggestions={categoryTitles}
                />
                <Button onClick={handleAddVideo}>
                    Cadastrar
                </Button>
            </form>
            <br/>
            <br/>
            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageDefault>
    );
}

export default CadastroVideo;