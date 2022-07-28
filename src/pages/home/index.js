import {Container} from "./styled"

function Home () {
    return(
    <Container>
    <ul>
        <li>
            <a href="#">
            <img src="https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/201906131220-uau-posters-filmes-john-wick-de-volta-ao-jogo-keanu-reeves.jpg"></img></a>
            <span>JOHN WICK</span>
        </li>
        <li>
            <a href="#">
            <img src="https://upload.wikimedia.org/wikipedia/pt/7/72/John_Wick_Chapter_2.png"></img></a>
            <span>JOHN WICK 2</span>
        </li>
        <li>
            <a href="#">
            <img src="https://upload.wikimedia.org/wikipedia/pt/e/e0/John_Wick_3_Parabellum.png"></img></a>
            <span>JOHN WICK 3</span>
        </li>
    </ul>
    </Container>
    )
}
export default Home;