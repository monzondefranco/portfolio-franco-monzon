import styled from 'styled-components'

export const ContainerSkills = styled.div`
    flex-grow: 1;
`

export const Content = styled.div`
    display: grid;
    font-size: 24px;
    grid-template-columns: 1fr 1fr 1fr;
    &@media (min-width: 800px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
`

export const ContentBox = styled.div`
    margin-bottom: 25px;
`

export const Title = styled.h1`
    background-color: #097eb5;
    color: #fff;
    font-size: 25px;
    border-radius: 5px;
    padding: 10px;
    display: inline-block;
`
export const Li = styled.li`
    margin: 0;
    margin-bottom: 10px;
`


