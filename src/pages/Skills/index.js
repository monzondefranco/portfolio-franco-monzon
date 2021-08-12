// import "./style.css";
import { Title, Content, ContentBox, Li, ContainerSkills } from './styles'

const Skills = () => {
return (
    <ContainerSkills>
    <h1>Skills</h1>
        <Content>
            <ContentBox>
                <Title>Languages:</Title>
                    <Li>CSS3</Li>
                    <Li>HTML5</Li>
                    <Li>Node.js</Li>
                    <Li>JavaScript</Li>
            </ContentBox>
            <ContentBox>
                <Title>Libraries:</Title>
                    <Li>Bootstrap</Li>
                    <Li>Express.js</Li>
                    <Li>Material-ui</Li>
                    <Li>React.js</Li>
                    <Li>React Native</Li>
                    <Li>Redux</Li>
            </ContentBox>
            <ContentBox>
                <Title>Tools:</Title>
                    <Li>Eslint</Li>
                    <Li>Webpack</Li>
                    <Li>Chrome Dev</Li>
                    <Li>Git & Gitlab</Li>
                    <Li>Jira/Trello</Li>
                    <Li>Transporter</Li>
                    <Li>DBeaver</Li>
            </ContentBox>
            <ContentBox>
                <Title>Uint Test:</Title>
                    <Li>Jest</Li>
                    <Li>React-test</Li>
                    <Li>SupperTest</Li>
            </ContentBox>
            <ContentBox>
                <Title>Database</Title>
                    <Li>Mysql</Li>
                    <Li>MongoDB</Li>
            </ContentBox>
            <ContentBox>
                <Title>Devops</Title>
                    <Li>Docker</Li>
                    <Li>Cloud</Li>
            </ContentBox>
        </Content>
    </ContainerSkills>
    );
};

export default Skills;