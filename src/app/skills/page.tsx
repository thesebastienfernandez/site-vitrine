import React from "react"
import {Card} from "../../components/Card";
import {Container} from "../../components/Container";

const Skills = () => {
    return(
            <Container title="Mes compétences">
                <Card title="Languages de programmation">
                    <ul className="w-full mt-6 ml-6">
                        <li>Javascript</li>
                        <li>Typescript</li>
                        <li>React.js</li>
                        <li>Vue.js</li>
                        <li>Angular</li>
                    </ul>
                </Card>
                <Card title="Languages de description">
                    <ul className="w-full mt-6 ml-6">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>SCSS</li>
                        <li>Bootstrap</li>
                        <li>Responsive-design</li>
                        <li>Flexbox</li>
                    </ul>
                </Card>
                <Card title="Travail collaboratif">
                    <ul className="w-full mt-6 ml-6">
                        <li>Git</li>
                        <li>Jira</li>
                        <li>Méthode agile</li>
                    </ul>
                </Card>
                <Card title="Tests">
                    <ul className="w-full mt-6 ml-6">
                        <li>Jest</li>
                        <li>Storybook</li>
                    </ul>
                </Card>
                <Card title="Complémentaire">
                    <ul className="w-full mt-6 ml-6">
                        <li>Référencement naturel SEO</li>
                        <li>Architecture BEM</li>
                        <li>Méthode TDD</li>
                    </ul>
                </Card>
                <Card title="Veille technologique">
                    <ul className="w-full mt-6 ml-6">
                        <li>Next.js</li>
                        <li>Tailwind</li>
                    </ul>
                </Card>
            </Container>
    )
}

export default Skills