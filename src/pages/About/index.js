import Card from './card'
import { Title, Typography } from '../../components/Typography'
import ListWrapper from '../../components/List'
import projects from '../../services/projects'


const About = () => {
    return (
        <div>
            <Title text="About Me" fontSize="1.75rem" fontWeight={700} />
            <Typography textAlign="center" >
            In a nutshell, I am passionate about solving problems with technology and innovation. <br></br> 
            I have great passion for software technologies and enjoy learning and implementing what I learn. <br></br>
            What keeps me constantly motivated is having challenges. When work starts being repetitive,<br></br> 
            I get involved in any activity that challenges me. <br></br>
            If you work with me, you'll find a hardworking person who always makes some time to help you whenever you need it. <br></br> 
            I'm not a machine, so you can also find a friend in me. <br></br>
            I'm used to working on multiple projects at the same time, so I don't need much time to get used to a new project.
            </Typography>
            <Title text="My Work" fontSize="1.75rem" fontWeight={700}/>
            <ListWrapper maxWidth="70rem">
            {projects.map((project) => (
                <Card
                    id={project.id}
                    key={project.id}
                    image={project.image}
                    descriptions={project.description}
                    link={project.link}
                />
            ))}
            </ListWrapper>
        </div>
    )
}
export default About
