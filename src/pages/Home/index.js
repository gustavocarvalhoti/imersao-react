import React, {useEffect, useState} from 'react';
import BannerMain from "../../components/BannerMain";
import Carousel from '../../components/Carousel';
import categoriasRepository from "../../repository/categorias";
import PageDefault from "../../components/PageDefault";

function Home() {

    /* STATE */
    const [dadosIniciais, setDadosIniciais] = useState([]);

    /* USE EFFECT */
    useEffect(() => {
        categoriasRepository.getAllWithVideos()
            .then((result => {
                setDadosIniciais(result);
            }))
            .catch((err) => {
                console.log(err.message)
            });
    }, [])

    return (
        <PageDefault paddingAll={0}>
            {dadosIniciais.length === 0 && (<div>Loading...</div>)}
            {/*Imprimir o JSON na tela*/}
            {/*{JSON.stringify(dadosIniciais02)}*/}
            {dadosIniciais.map((categoria, indice) => {
                if (indice === 0) {
                    return (
                        <div key={categoria.id}>
                            <BannerMain
                                videoTitle={dadosIniciais[0].titulo}
                                url={dadosIniciais[0].videos[0].url}
                                videoDescription={dadosIniciais[0].videos[0].description}
                            />
                            <Carousel ignoreFirstVideo category={dadosIniciais[0]}/>
                        </div>
                    );
                }
                return (
                    <Carousel key={categoria.id} category={categoria}/>
                );
            })}
        </PageDefault>
    );
}

export default Home;