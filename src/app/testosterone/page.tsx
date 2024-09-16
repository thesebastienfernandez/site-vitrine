'use client';
import { use, useState } from 'react';
import { Button } from '@/components/Button';



const Testosterone = () => {
    const [situation, setSituation] = useState(0);
    const [testoScore, setTestoScore] = useState(10);
    const [commentary, setCommentary] = useState("Et dépêchez vous, je n'ai pas que ça à faire !");
    const [name, setName] = useState('');
    const [responseSleep, setResponseSleep] = useState('');
    interface Food {
        lowSugar: boolean;
        lowFat: boolean;
        highProtein: boolean;
        average: boolean;
      }
    const [food, setFood] = useState<Food>({lowSugar: false, lowFat: false, highProtein: false, average:false});
    const [bodyFat, setBodyFat] = useState("");
    const [recovery, setRecovery] = useState("");
    const [attitude, setAttitude] = useState("");

    const finalCommentary = (score: number) => {
        if (score <= 2) {
            setCommentary("Avec aussi peu de testosterone, es-tu encore un homme ?");
        } else if (score > 2 && score <= 6) {
            setCommentary("Pitoyable");
        } else if (score > 6 && score <= 10) {
            setCommentary("Tu fonctionnes même pas à la moitié de ton potentiel masculin, as-tu encore des érections ?");
        } else if (score > 10 && score <= 13) {
            setCommentary("Médiocre mais il y a de l'espoir");
        } else if (score > 13 && score <= 16) {
            setCommentary("Tu es un vrai garçon");
        } else if (score > 16 && score <= 18) {
            setCommentary("Je parie que tu es plus solide que les autres 'hommes' de ton entourage");
        } else {
            setCommentary("Tu es au max de ta testo naturelle, fais gaffe à pas craquer ton pantalon");
        }
    }
    
    return (
        <div className="border-b-gray-700 p-4">
            <header className="mt-48 sm:mt-24">
                <h1 className="text-center lg:text-left">Il faut sauver le soldat Testo</h1>
            </header>
            <main className='flex justify-around'>
                <div>
                    {situation === 0 ?  
                        <div><p>Identifiez vous soldat</p>
                        <input className='mr-4 rounded h-[36px]' size={40} type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        <Button content="Valider" disabled={name.trim() === ""} onClick={() => {setSituation(1); setCommentary("Sérieusement, tu n'as pas trouvé plus original que ça ?")}}/></div> : null}
                   { situation === 1 ? 
                    <div>
                        <p>Bienvennue dans le service androgénique mon gars, si tu crois que ça va être fendard ici, tu te plantes bien deuxième classe <strong>{name}</strong> !</p>
                        <Button content='Allons-y!' disabled={false} onClick={() => {setSituation(2); setCommentary("...")}}/>
                    </div> : null}
                    
                        {situation === 2 ? 
                            <p>
                                Dors tu assez petit poussin ?<br/>
                                <input type="radio" name="sleeping" id="veryBadSleep" value="veryBadSleep" onChange={(e) => {setResponseSleep(e.target.value)}}  /><label htmlFor="veryBadSleep">Moins de 4h</label><br/>
                                <input type="radio" name="sleeping" id="badSleep" value="badSleep" onChange={(e) => {setResponseSleep(e.target.value)}}  /><label htmlFor="badSleep">Entre 4h et 6h</label><br/>
                                <input type="radio" name="sleeping" id="averageSleep" value="averageSleep" onChange={(e) => {setResponseSleep(e.target.value)}}  /><label htmlFor="averageSleep">Entre 6h et 7h</label><br/>
                                <input type="radio" name="sleeping" id="goodSleep" value="goodSleep" onChange={(e) => {setResponseSleep(e.target.value)}}  /><label htmlFor="goodSleep">Entre 7h et 9h</label><br/>
                                <input type="radio" name="sleeping" id="notGoodSleep" value="notGoodSleep" onChange={(e) => {setResponseSleep(e.target.value)}}  /><label htmlFor="notGoodSleep">Plus de 9h</label><br/>
                                <Button content='Suite' disabled={responseSleep===""} onClick={() => {
                                    setSituation(3);
                                    switch (responseSleep) {
                                        case "veryBadSleep":
                                            setTestoScore(testoScore-2);
                                            setCommentary("Tu es désormais candidat aux maladies neurodégénératives");
                                            break;
                                        case "badSleep":
                                            setTestoScore(testoScore-1);
                                            setCommentary("Discipline toi pour... mieux dormir");
                                            break;
                                        case "averageSleep":
                                            setTestoScore(testoScore+1);
                                            setCommentary("Pas mal, peut mieux faire");
                                            break;
                                        case "goodSleep":
                                            setTestoScore(testoScore+2);
                                            setCommentary("Bien");
                                            break;
                                        case "notGoodSleep":
                                            setTestoScore(testoScore-1);
                                            setCommentary("Tu ne dormirais pas un peu trop ?");
                                            break;
                                        default:
                                            break;
                                    };
                                }}/>
                            </p> : null
                        }
                        {
                            situation === 3 ?
                            <p>
                                Comment manges tu ?<br/>
                                <input type="checkbox" name="lowSugar" id="lowSugar" checked={food["lowSugar"] || false} onChange={(e) => setFood({...food, [e.target.name]: e.target.checked})}  /><label htmlFor="veryBadSleep">Je fais gaffe au sucre</label><br/>
                                <input type="checkbox" name="lowFat" id="lowFat" checked={food["lowFat"] || false} onChange={(e) => setFood({...food, [e.target.name]: e.target.checked})}  /><label htmlFor="badSleep">Le moins de gras possible</label><br/>
                                <input type="checkbox" name="highProtein" id="highProtein" checked={food["highProtein"] || false} onChange={(e) => setFood({...food, [e.target.name]: e.target.checked})}  /><label htmlFor="averageSleep">Pas mal de protéines</label><br/>
                                <input type="checkbox" name="average" id="average" checked={food["average"] || false} onChange={(e) => setFood({...food, [e.target.name]: e.target.checked})}  /><label htmlFor="goodSleep">Je mange comme tout le monde</label><br/>
                                <Button content='Suite' disabled={food.lowSugar === false && food.highProtein === false && food.lowFat === false && food.average === false} onClick={() => {
                                    setSituation(4);
                                    if(!food.lowSugar && !food.lowFat && !food.highProtein) {
                                        setTestoScore(testoScore-2);
                                        setCommentary("Je parie que tu as une adiposité importante, si ce n'est pas le cas aujourd'hui ce le sera demain");
                                    } else if(!food.lowSugar && food.highProtein && food.lowFat) {
                                        setTestoScore(testoScore-2);
                                        setCommentary("Tu as besoin de cholestérol, donc de gras pour fabriquer ta testo");
                                    } else if (food.lowSugar && food.highProtein && !food.lowFat) {
                                        setTestoScore(testoScore+2);
                                        setCommentary("T'es un bon toi");
                                    } else {
                                        setCommentary("Manges-tu encore comme quand tu étais enfant ?");
                                    }
                                }} />
                            </p> : null
                        }
                        {
                            situation === 4 ?
                            <p>
                                Quel est ton pourcentage de matière grasse ? <br />
                                <input type="radio" name="bodyFat" id="bfVeryTooSmall" value="bfVeryTooSmall" onChange={(e) => {setBodyFat(e.target.value)}}  /><label htmlFor="bfVeryTooSmall">Moins de 5%</label><br/>
                                <input type="radio" name="bodyFat" id="bfTooSmall" value="bfTooSmall" onChange={(e) => {setBodyFat(e.target.value)}}  /><label htmlFor="bfTooSmall">Entre 5 et 10%</label><br/>
                                <input type="radio" name="bodyFat" id="bfPerfect" value="bfPerfect" onChange={(e) => {setBodyFat(e.target.value)}}  /><label htmlFor="bfPerfect">Entre 10 et 15%</label><br/>
                                <input type="radio" name="bodyFat" id="bfLittleTooHigh" value="bfLittleTooHigh" onChange={(e) => {setBodyFat(e.target.value)}}  /><label htmlFor="bfLittleTooHigh">Entre 15 et 20%</label><br/>
                                <input type="radio" name="bodyFat" id="bfTooHigh" value="bfTooHigh" onChange={(e) => {setBodyFat(e.target.value)}}  /><label htmlFor="bfTooHigh">Entre 20 et 25%</label><br/>
                                <input type="radio" name="bodyFat" id="bfVeryTooHigh" value="bfVeryTooHigh" onChange={(e) => {setBodyFat(e.target.value)}}  /><label htmlFor="bfVeryTooHigh">Entre 25 et 35%</label><br/>
                                <input type="radio" name="bodyFat" id="bfLethal" value="bfLethal" onChange={(e) => {setBodyFat(e.target.value)}}  /><label htmlFor="bfLethal">Plus de 35%</label><br/>
                                <Button content='Suite' disabled={bodyFat===""} onClick={() => {
                                    switch (bodyFat) {
                                        case "bfVeryTooSmall":
                                            setTestoScore(testoScore-2);
                                            setCommentary("Nourris toi, tu fais peur à voir");
                                            break;
                                        case "bfTooSmall":
                                            setCommentary("Tu es peut-être un petit peu trop maigre");
                                                break;
                                        case "bfPerfect":
                                            setTestoScore(testoScore+2);
                                            setCommentary("Bien");
                                            break;
                                        case "bfLittleTooHigh":
                                            setCommentary("Tu as une petite bouée mon ami");
                                            break;
                                        case "bfTooHigh":
                                            setTestoScore(testoScore-1);
                                            setCommentary("Tu es un peu trop gros");
                                            break;
                                        case "bfVeryTooHigh":
                                            setTestoScore(testoScore-2);
                                            setCommentary("Tu es trop gros, désolé de te l'apprendre");
                                            break;
                                        case "bfLethal":
                                            setTestoScore(testoScore-2);
                                            setCommentary("Tu es en obésité morbide, reprends toi immédiatement");
                                            break;
                                        default:
                                            break;
                                    }
                                    setSituation(5);
                                }} />
                            </p> : null
                        }
                        {
                            situation === 5 ?
                            <p>
                                Comment gères tu ta récupération avec ton activité physique ? <br/>
                                <input type="radio" name="recovery" id="noRecovery" value="noRecovery" onChange={(e) => {setRecovery(e.target.value)}}  /><label htmlFor="noRecovery">Quelle récupération ?</label><br/>
                                <input type="radio" name="recovery" id="oneDayRecovery" value="oneDayRecovery" onChange={(e) => {setRecovery(e.target.value)}}  /><label htmlFor="oneDayRecovery">Je prends un jour de repos après une session intense</label><br/>
                                <input type="radio" name="recovery" id="twoDaysRecovery" value="twoDaysRecovery" onChange={(e) => {setRecovery(e.target.value)}}  /><label htmlFor="twoDaysRecovery">Je prends deux jours de repos après une session intense </label><br/>
                                <input type="radio" name="recovery" id="fullRecovery" value="fullRecovery" onChange={(e) => {setRecovery(e.target.value)}}  /><label htmlFor="fullRecovery">Avec deux jours de repos, je prends des compléments alimentaires et fais de la récupération active</label><br/>
                                <input type="radio" name="recovery" id="noTraining" value="noTraining" onChange={(e) => {setRecovery(e.target.value)}}  /><label htmlFor="noTraining">Quelle activité physique ?</label><br/>
                                <Button content='Suite' disabled={recovery===""} onClick={() => {
                                    setSituation(6);
                                    switch (recovery) {
                                        case "noRecovery":
                                            setTestoScore(testoScore-2);
                                            setCommentary("Ben oui, ton corps a besoin de récupérer, même un machine bien rôdée s'use avec le temps");
                                            break;
                                        case "oneDayRecovery":
                                            setCommentary("Pas mal mais pas assez");
                                            break;
                                        case "twoDaysRecovery":
                                            setTestoScore(testoScore+1);
                                            setCommentary("Tu es presque dans la récupération optimale");
                                            break;
                                        case "fullRecovery":
                                            setTestoScore(testoScore+2);
                                            setCommentary("Bien");
                                            break;
                                        case "noTraining":
                                            setTestoScore(testoScore-1);
                                            setCommentary("Tu me fais honte");
                                            break;
                                        default:
                                            break;
                                    }
                                }} />
                            </p> : null
                        }
                        {
                            situation === 6 ?
                            <p>
                                Ton attitude face à la vie <br/>
                                <input type="radio" name="attitude" id="victim" value="victim" onChange={(e) => {setAttitude(e.target.value)}}  /><label htmlFor="victim">La vie est trop dure, je subis</label><br/>
                                <input type="radio" name="attitude" id="passive" value="passive" onChange={(e) => {setAttitude(e.target.value)}}  /><label htmlFor="passive">Je me laisse porter par les évènements, le roseau dnas la tempête quoi</label><br/>
                                <input type="radio" name="attitude" id="nervousActive" value="nervousActive" onChange={(e) => {setAttitude(e.target.value)}}  /><label htmlFor="nervousActive">Je domine et je suis énervé facilement</label><br/>
                                <input type="radio" name="attitude" id="sereneActive" value="sereneActive" onChange={(e) => {setAttitude(e.target.value)}}  /><label htmlFor="sereneActive">Je suis généralement calme et je contrôle les évènements</label><br/>
                                <Button content='Suite' disabled={attitude===""} onClick={() => {
                                    setSituation(7);
                                    switch (attitude) {
                                        case "victim":
                                            setTestoScore(testoScore-2);
                                            setCommentary("Dors mieux et complémente-toi en magnésium (et chiale moins, on dirait un gosse)");
                                            break;
                                        case "passive":
                                            setTestoScore(testoScore-0.5);
                                            setCommentary("Tu manques d'ambitions petit poussin");
                                            break;
                                        case "nervousActive":
                                            setTestoScore(testoScore+0.5);
                                            setCommentary("Tu manques de confiance en toi, batis toi pour en avoir");
                                            break;
                                        case "sereneActive":
                                            setTestoScore(testoScore+2);
                                            setCommentary("Serait-ce de l'orgueil ?");
                                            break;
                                        default:
                                            break;
                                    }
                                }} />
                            </p> : null
                        }
                        {
                            situation === 7 ?
                            <p>
                                Résultat du sauvetage de la testo : {testoScore}/20
                                <Button content='Verdict' disabled={false} onClick={() => {finalCommentary(testoScore); setSituation(8)}} />
                            </p> : null
                        }
                    
                </div>
                <div>
                        <p>{commentary}</p>
                </div>
            </main>
        </div>
    )
}

export default Testosterone;