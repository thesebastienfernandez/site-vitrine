'use client';
import React from "react";
import { useState } from 'react';
import {SuperSystem} from "@/components/biohacking/SuperSystem";
import { SuperLever } from "@/components/biohacking/SuperLever";
import { System } from "@/components/biohacking/System";
import { Lever } from "@/components/biohacking/Lever";

const BioHacking = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [systemSelected, setSelectSysytem] = useState(0);
    const handleClickOnSuperSystem = (x: number) => {
        activeIndex === x ? setActiveIndex(0) : setActiveIndex(x);
    }
    const handleClickOnSystem = (x: number) => {
        systemSelected === x ? setSelectSysytem(0) : setSelectSysytem(x);
    }
    return (
        <div>
            <main className="p-[2%]">
            <h1 className="mt-48 sm:mt-24 mb-8 text-center lg:text-left">Memento de biohacking</h1>
                <div className="flex justify-around flex-col lg:flex-row">
                <section>
                    <SuperSystem isActive={activeIndex === 1} title="Cardi-vasculo-pulmonaire" onShow={() => handleClickOnSuperSystem(1)}>
                        <System title="cardiaque" onSelect={() => handleClickOnSystem(1)} selected={systemSelected === 1}/>
                        <System title="vasculaire" onSelect={() => handleClickOnSystem(2)} selected={systemSelected === 2}/>
                        <System title="pulmonaire" onSelect={() => handleClickOnSystem(3)} selected={systemSelected === 3}/>
                    </SuperSystem>
                    <SuperSystem isActive={activeIndex === 2} title="Digestif" onShow={() => handleClickOnSuperSystem(2)}>
                        <System title="bouche" onSelect={() => handleClickOnSystem(4)} selected={systemSelected === 4}/>
                        <System title="estomac" onSelect={() => handleClickOnSystem(5)} selected={systemSelected === 5}/>
                        <System title="intestins" onSelect={() => handleClickOnSystem(6)} selected={systemSelected === 6}/>
                        <System title="évacuation" onSelect={() => handleClickOnSystem(7)} selected={systemSelected === 7}/>
                    </SuperSystem>
                    <SuperSystem isActive={activeIndex === 3} title="Musculo-articulo-osseux" onShow={() => handleClickOnSuperSystem(3)}>
                        <System title="musculature" onSelect={() => handleClickOnSystem(8)} selected={systemSelected === 8}/>
                        <System title="articulations" onSelect={() => handleClickOnSystem(9)} selected={systemSelected === 9}/>
                        <System title="squelette" onSelect={() => handleClickOnSystem(10)} selected={systemSelected === 10}/>
                    </SuperSystem>
                </section>
                <section>
                    <SuperLever title="Activité physique" haveContent={systemSelected !== 0 && systemSelected !== 5}>
                        {
                            systemSelected===1 ?  <Lever title="Coeur dilaté" description="Entraînement en aéorobie au moins 1h 5 fois par semaine"/> : null
                        }
                        {
                            systemSelected===1 ?  <Lever title="Coeur hypertrophié" description="Entraînement en intensité au moins 2-3 fois par semaine"/> : null
                        }
                        {
                            systemSelected===2 ?  <Lever title="Néovascularisation" description="Entraînement en aéorobie au moins 30 minutes 2 fois par semaine, viser la congestion"/> : null
                        }
                        {
                            systemSelected===3 ?  <Lever title="Poumons capacitants" description="Intervall training : 1 à 2 minutes d'efforts intense puis même temps de repos actif"/> : null
                        }
                        {
                            systemSelected===3 ?  <Lever title="Poumons plus amples" description="Exercices respiratoires"/> : null
                        }
                        {
                            systemSelected===4 ?  <Lever title="Entraînement des muscles de la bouche" description="Exercer ses masséters avec des chewing-gums, à la main ou autre accessoire pratique. Exercer sa langue"/> : null
                        }
                        {
                            systemSelected === 6 ?  <Lever title="Transit amélioré" description="Exercices physiques incluant des flexions et des torsions de la région abdominale. Ex : 3 séries de 50 crunchs vrillés"/> : null
                        }
                        {
                            systemSelected===7 ?  <Lever title="Préserver son rectum" description="Lors de la défecation, avoir les pieds relevés pour faire 'comme à la turc'"/> : null
                        }
                        {
                            systemSelected===8 ?  <Lever title="Renforcement musculaire" description="Entraînement de musculation"/> : null
                        }
                        {
                            systemSelected===9 ?  <Lever title="Renforcement articulaire" description="Modérer l'intensité avec des séances de récupération active"/> : null
                        }
                        {
                            systemSelected===10 ?  <Lever title="Stimulation osseuse" description="Générer des forces physiques sur l'os par l'entraînement de force par exemple"/> : null
                        }
                    </SuperLever>
                        
                    <SuperLever title="Nutrition" haveContent={systemSelected !== 0}>
                        {
                            systemSelected===1 ?  <Lever title="Sang fluide" description="Prise d'oméga 3 (DHA et EPA) quotidienne"/> : null
                        }
                        {
                            systemSelected===2 ?  <Lever title="Vaisseaux souples" description="Prise d'oméga 3 (DHA et EPA) quotidienne"/> : null
                        }
                        {
                            systemSelected===2 ?  <Lever title="Vaisseaux solides" description="Prise quotidienne de collagène"/> : null
                        }
                        {
                            systemSelected===3 || systemSelected===2 || systemSelected===1 ?  <Lever title="Organes préservés" description="Alimentation riche en vitamines et minéraux"/> : null
                        }
                        {
                            systemSelected===4 ?  <Lever title="Mastication" description="Bien digérer ses aliments en mâchant sa nourriture jusquà ce qu'elle soit comme de la purée liquide"/> : null
                        }
                        {
                            systemSelected===5 || systemSelected===6 ?  <Lever title="Bien-être intestinal" description="Alimentation riche en fruits, légumes et biotiques"/> : null
                        }
                        {
                            systemSelected===7 ?  <Lever title="Selles molles" description="Aliemtation riche en fruits et légumes"/> : null
                        }
                        {
                            systemSelected===8 ?  <Lever title="Récupération musculaire" description="Apport protéique quotidien conséquent (1,5 à 2 g de kilos de poids de corps maigre) si entraînement de force"/> : null
                        }
                        {
                            systemSelected===9 || systemSelected===10 ?  <Lever title="Récupération articulaire et osseuse" description="Apport quotidien de protéines de collagène (environ 10g)"/> : null
                        }
                    </SuperLever>
                    <SuperLever title="Sommeil" haveContent={systemSelected === 1 || systemSelected === 2 || systemSelected === 3}>
                        {
                            systemSelected===1 || systemSelected===2 || systemSelected===3 ?  <Lever title="Réparation nocturne" description="Au moins 7 heures de sommeil. Pas de lumière vive ou d'écran bleu 1 heure avant le coucher"/> : null
                        }
                    </SuperLever>
                </section>
                </div>
            </main>
        </div>
    )
}

export default BioHacking;