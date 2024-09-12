import React from "react"
import {Card} from "../../components/Card";
import {Container} from "../../components/Container";

const Works = () => {
    return(
        <Container title="Mes projets les plus récents">
            <Card title="Mémento de biohacking">
                <div className="content-column">
                    <a className="link-to-work" href="./biohacking">VOIR</a>
                </div>
            </Card>
            <Card title="Il faut sauver le soldat Testo">
                <div className="content-column">
                    <a className="link-to-work" href="./testosterone">VOIR</a>
                </div>
            </Card>
        </Container>
    )
}

export default Works