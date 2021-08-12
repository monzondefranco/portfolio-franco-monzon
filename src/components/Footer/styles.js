import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    padding: 10px 0;
    margin-top: 30px;
`

export const Img = styled.img`
    max-width: 60px;
    margin: 10px;
    &:not(:last-child) {
        margin-right: 10px;
    }
`