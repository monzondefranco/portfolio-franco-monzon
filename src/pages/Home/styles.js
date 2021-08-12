import styled from 'styled-components'

export const ContainerHome = styled.div`
    flex-grow: 1;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: 18px;
    text-align: center;
    @media (min-width: 800px) {
        flex-direction: row;
        justify-content: space-between;
    }
`

export const Title = styled.div`
    width: 100%;
    font-size: 18px;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    @media (min-width: 800px) {
        width: 50%;
        margin-top: 0;
        text-align: left;
        font-size: 25px;
    }
`
export const P = styled.p`
    line-height: 50px;
`

export const Button = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 24px;
    margin-top: 30px;
    color: #ffffff;
    padding: 10px 15px;
    border-radius: 999px;
    background-color: #097eb5;
`

export const Person = styled.div`
    width: 100%;
    margin-top: 20px;
    @media (min-width: 800px) {
        width: 50%;
        margin-top: 0;
        text-align: left;
        font-size: 25px;
    }
`

export const Img = styled.img`
    width: 80%
    @media (min-width: 800px) {
        width: 100%;
    }
`