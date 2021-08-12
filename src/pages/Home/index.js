import { Link } from 'react-router-dom'
import { ContainerHome, Title, P, Button, Person } from './styles.js'
import Avatar from '../../components/Avatar'

const Home = () => {
    return (
        <ContainerHome>
            <Title>
                <h1>
                    <P>Hi,</P>
                    <P>I am Franco</P>
                    <P>Software developer</P>
                </h1>
                <Link to="about">
                    <Button>More Info</Button>
                </Link>
            </Title>
            <Person>
                <Avatar defaultImage="/avatar.svg" hoverImage="/hover_avatar.svg" />
            </Person>
        </ContainerHome>
    )
}

export default Home
