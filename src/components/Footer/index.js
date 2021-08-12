import { Container, Img } from './styles'

const Footer = () => {
    return (
        <Container>
            <a href="https://www.linkedin.com/in/franco-monzon-47abb61b0/" target="_blank" rel='linkedIn'>
                <Img
                    src={`${process.env.PUBLIC_URL}/Linkedin_icon.png`}
                    alt="LinkIn-icon"/>
            </a>
            <a href="https://gitlab.com/monzondefranco" target="_blank" rel='GitLab'>
                <Img
                    src={`${process.env.PUBLIC_URL}/GitLab_Logo.png`}
                    alt="Gitlab-icon"/>
            </a>
        </Container>
    )
}

export default Footer
