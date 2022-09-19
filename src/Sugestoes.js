import React from "react";

function Sugestao(props) {

    const [seguir, setSeguir] = React.useState("Seguir");

    function mudarSeguir() {
        if (seguir === "Seguir") {
            setSeguir("Seguindo");
        } else {
            setSeguir("Seguir");
        }
    }
    return (
        <li class="sugestao">
            <div class="usuario">
                <img src={props.imagem} alt={`Foto de perfil de ${props.nome}`}/>
                <div class="texto">
                    <div class="nome">
                        {props.nome}
                    </div>
                    <div class="razao">
                        {props.situacao}
                    </div>
                </div>
            </div>

            <div class="seguir" onClick={mudarSeguir}>
                {seguir}
            </div>
        </li>
    );
}

export default function Sugestoes() {
    const sugestoes = [
        {imagem: "./media/bad.vibes.memes.svg", nome: "bad.vibes.memes", situacao: "Segue você"},
        {imagem: "./media/chibirdart.svg", nome: "chibirdart", situacao: "Segue você"},
        {imagem: "./media/razoesparaacreditar.svg", nome: "razoesparaacreditar", situacao: "Novo no Instagram"},
        {imagem: "./media/adorable_animals.svg", nome: "adorable_animals", situacao: "Segue você"},
        {imagem: "./media/smallcutecats.svg", nome: "smallcutecats", situacao: "Segue você"},
    ];

    return (
        <ul class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>
                    Ver tudo
                </div>
          </div>
            {sugestoes.map((s) => <Sugestao imagem={s.imagem} nome={s.nome} situacao={s.situacao} />)}
        </ul>
    )
}