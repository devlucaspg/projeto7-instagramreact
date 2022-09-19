import React from "react";

function Post(props) {

    function Video() {
        return (
            <video loop="loop" autoPlay muted>
                <source src={props.videoMP4} type="video/mp4" />
                <source src={props.videoOGG} type="video/ogg" />
            </video>
        )
    };

    function Foto() {
        return (
            <img src={props.foto} alt={props.alt}/>
        )
    };

    function Media() {
        if (props.foto !== undefined) {
            return <Foto />
        } if (props.videoMP4 !== undefined && props.videoOGG !== undefined) {
            return <Video />
        }
    }

    const [like, setLike] = React.useState(false);

    function curtir() {
        setLike(!like);
    }
    
    return (
        <li class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imagem} alt={`Foto de perfil de ${props.nome}`}/>
                    {props.nome}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <Media />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline" onClick={curtir} class=""></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imgPerfilCurtiu} alt={`Foto de perfil de ${props.perfilCurtiu}`}/>
                    <div class="texto">
                        Curtido por <strong>{props.perfilCurtiu}</strong> e <strong>outras {props.curtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </li>
    )
}


export default function Posts() {
    const posts = [
      {nome: "meowed", imagem: "./media/meowed.svg", videoMP4: "./media/pato-e-gato.mp4", videoOGG: "./media/pato-e-gato.ogg", imgPerfilCurtiu: "./media/9gag.svg", perfilCurtiu: "9gag", curtidas: "1.357"},
      {nome: "nathyohana1", imagem: "./media/nathy.png", foto: "./media/cat-escondendo.jpeg", alt: "Gatinhho se escondendo", imgPerfilCurtiu: "./media/simonscat.png", perfilCurtiu: "simonscatofficial", curtidas: "937"},
      {nome: "barked", imagem: "./media/barked.svg", foto: "./media/doguinhos.png", alt: "Dois doguinhos fofos brincando", imgPerfilCurtiu: "./media/respondeai.svg", perfilCurtiu: "respondeai", curtidas: "23.110"},
      {nome: "simonscatofficial", imagem: "./media/simonscat.png", videoMP4: "./media/simonscat-crop.mp4", videoOGG: "./media/simonscat-crop.ogg", imgPerfilCurtiu: "./media/nathy.png", perfilCurtiu: "nathyohana1", curtidas: "216.005"},
      {nome: "nathyohana1", imagem: "./media/nathy.png", foto: "./media/gato-fofo.png", alt: "Filhotinho lindo, olhando pra câmera", imgPerfilCurtiu: "./media/barked.svg", perfilCurtiu: "barked", curtidas: "519"},
      {nome: "meowed", imagem: "./media/meowed.svg", foto: "./media/gato-telefone.svg", alt: "Gatinho mexendo no telefone", imgPerfilCurtiu: "./media/respondeai.svg", perfilCurtiu: "respondeai", curtidas: "4.682"},
      {nome: "barked", imagem: "./media/barked.svg", foto: "./media/dog.svg", alt: "Doguinho tirando um cochilo no chão", imgPerfilCurtiu: "./media/nathy.png", perfilCurtiu: "nathyohana1", curtidas: "3.289"}
      
  ]
    return (
        <ul class="posts">
            {posts.map((p) => <Post nome={p.nome} imagem={p.imagem} videoMP4={p.videoMP4} videoOGG={p.videoOGG} foto={p.foto} alt={p.alt} imgPerfilCurtiu={p.imgPerfilCurtiu} perfilCurtiu={p.perfilCurtiu} curtidas={p.curtidas}/>)}
        </ul>
    )
}