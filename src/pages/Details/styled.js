import styled from "styled-components"

export const Container = styled.div`
    padding: 4rem 0;

    h1{
    margin: 3rem 0;
    }
    .movie{
        display: flex;
        align-items: center;
        justify-content: center;

    }
    img{
        width: 300px;
        border-radius: 1rem;
    }

    .details{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 4rem;
        max-width: 50%;
    }
    .Stck{
        padding: 2rem 4rem;
    }
    
        .ButtomBTN {
        align-items: center;
    }
    span{
        line-height: 120%;
        margin-bottom: 1rem;
        font-size: 120%;
    }
    .release-date{
        opacity: 0.5;
    }
    
    .Linkto{
        text-decoration: none;
    }

 
`