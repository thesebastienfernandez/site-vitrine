import React from "react"
import {Card} from "../../components/Card";
import {Container} from "../../components/Container";


const Formations = () => {
    return(
        <Container title="Mes formations">
            <Card title="Certification Angular en 2020">
                <div className="content-column">
                    <p className="text-[#5EEAD4]">Mon compte CPF</p>
                    <p className="text-center">Formation sur Angular sur mon propre CPF pendant une période sans contrat dûe au COVID-19 pour diversifier mon expertise en Javascript</p>
                </div>       
            </Card>
            <Card title="Formation en alternance en développement front-end (bac+3) en 2019">
            <div className="content-column">
                <p className="text-[#5EEAD4]">Ecole du multimédia à Paris</p>
                <p className="text-center">Pendant un an, à raison de trois semaines en entreprise et de une semaine en école par mois, formation sur le développement front-end sur  HTML5, CSS3, SCSS, Javascript, jQuery, Vue.js, le PWA et Firebase</p>
            </div>
            </Card>
            <Card title="Diplôme intégrateur/développeur web (RNCP niveau 3 = bac+2) en 2017">
                <div className="content-column">
                    <p className="text-[#5EEAD4]">3W Academy à Paris</p>
                    <p className="text-center">Formation intensive sur le développement/intégration web. Languages étudiés : HTML5, CSS3, Javascript, jQuery, PHP, MySQL et Wordpress </p>
                </div>
            </Card>
            <Card title="Baccalauréat scientifique en 2007">
                <div className="content-column">
                    <p className="text-[#5EEAD4]">Académie de Versailles (78)</p>
                </div>
            </Card>
        </Container>
    )
}

export default Formations