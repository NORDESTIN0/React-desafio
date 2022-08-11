import styled from "styled-components"

export const Movielist = styled.ul`
   
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        column-gap: 3rem;
        row-gap: 4rem;
        padding-top: 2rem;
`
export const Container = styled.div`
    max-width: 89%;
`

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
img{
        width: 180px;
        width: 230px;
        border-radius: 7px;
    }
span{
        font-weight: bold;
        padding-top: 1rem;
    }
a{
        transition: all 0.3s;
    }    
a:hover {
        transform: scale(1.1);
    }
`