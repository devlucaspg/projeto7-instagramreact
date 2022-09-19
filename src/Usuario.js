import React from "react";

export default function Usuario() {

    const nomePadrao = "Catana"

    const [nome, setNome] = React.useState(nomePadrao);

    function mudarNome() {
        const nomePrompt = prompt("Digite seu novo nome de usuário");
            setNome(nomePrompt);
    }

    const fotoPadrao = "./media/catanacomics.png"

    const [foto, setFoto] = React.useState(fotoPadrao);

    function mudarFoto() {
        const fotoPrompt = prompt("Digite o link da sua nova foto de perfil");
            setFoto(fotoPrompt);
    }

    return (
        <div class="usuario">
            <img src={(foto === "" || foto === null) ? fotoPadrao : foto} onClick={mudarFoto} alt="Foto de perfil do usuário logado"/>
            <div class="texto">
                <strong>catanacomics</strong>
                <span>
                    {(nome === "" || nome === null) ? nomePadrao : nome}
                    <ion-icon name="pencil" onClick={mudarNome}></ion-icon>
                </span>
            </div>
        </div>
    );
}