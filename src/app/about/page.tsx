import React from "react"
import Image from 'next/image'
import myImage from '../../../public/assets/photo-cv.jpg'

const About = () => {
    return(
        <div className="border-b-gray-700 p-4">
            <header className="mt-48 sm:mt-24">
                <h1 className="text-center lg:text-left">à propos de moi</h1>
            </header>
            <main className="flex flex-col items-center sm:flex-row">
                <div className="p-4 border-solid border-4 border-[#5EEAD4] rounded">
                    <Image src={myImage} alt="picture of the author" width={800} height={800} title="Sébastien Fernandez - Dévelopeur front-end" />
                </div>
                <p className="p-4">
                    Bonjour,
                    je m&apos;apelle Sébastien Fernandez et cherche actuellement une entreprise qui pourrait me prendre en CDI en échange de mes services et de ma volonté à occuper le poste de développeur web au sein de celle-ci. 
                    Je souhaite monter en compétence dans le développement et plus particulièrement le côté front-end.
                    Si vous êtes intéressé(e), je me tiens à votre entière disposition pour répondre à vos questions. 
                    Je joins mon <a href="../../../assets/CV_Dev-front.pdf" download="CV_Dev-front.pdf"><strong className="underline underline-offset-4">CV</strong></a> et mon profil  <a href="https://www.linkedin.com/in/s%C3%A9bastien-fernandez-1aaa24148/"><strong className="underline underline-offset-4">Linkedin</strong></a> si vous souhaitez plus d&apos;informations.<br/><br/>
                    Pour vous parler un peu de moi, je pratique comme sport le cross-training et récemment je me tiens au courant des recherches sur le développement du corps humain. Vous noterez d&apos;ailleurs que <a href="../works"><strong className="underline underline-offset-4">mes applications</strong></a>  sont toutes en rapport avec le biohacking ou la physiologie<br/><br/>
                    Cordialement,
                    Sébastien FERNANDEZ
                    
                </p>
            </main>
        </div>
    )
}

export default About


