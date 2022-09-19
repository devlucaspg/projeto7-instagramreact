function Story(props) {
    return (
        <li class="story">
            <div class="circle">
                <div class="imagem">
                    <img src={props.imagem} alt={`Foto de perfil de ${props.nome}`}/>
                </div>
            </div>
            <div class="usuario">{props.nome}</div>
        </li>
    )
}

export default function Stories() {
    const stories = [
        {nome: "9gag", imagem: "./media/9gag.svg"},
        {nome: "meowed", imagem: "./media/meowed.svg"},
        {nome: "barked", imagem: "./media/barked.svg"},
        {nome: "nathanwpylestrangeplanet", imagem: "./media/nathanwpylestrangeplanet.svg"},
        {nome: "wawawicomics", imagem: "./media/wawawicomics.svg"},
        {nome: "respondeai", imagem: "./media/respondeai.svg"},
        {nome: "filomoderna", imagem: "./media/filomoderna.svg"},
        {nome: "memeriagourmet", imagem: "./media/memeriagourmet.svg"},
        {nome: "nathyohana1", imagem: "./media/nathy.png"}
    ]
    return (
        <ul class="stories">
            {stories.map((s) => <Story nome={s.nome} imagem={s.imagem}/>)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </ul>
    )
}