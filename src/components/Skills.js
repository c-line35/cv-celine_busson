import React from 'react';

const Skills = () => {
    return (
        <div>
            <div className='skills'>
                <div className='background'>
                        <div className='background__3'></div>
                </div> 
                <h2 className="skills__title">Compétences</h2>
                <div className='skills__list'>
                    <p>Compétences relationnelles:
                        <ul>
                            <li>Ecoute</li>
                            <li>Communication</li>
                            <li>Empathie</li>
                        </ul>
                    </p>
                    <p>Autonomie</p>
                    <p>Adaptation</p>
                    <p>Perévérence</p>
                </div> 
            </div>
            <p className='conclusion'>Consciente que mon apprentissage ne fait que commencer, je suis prête à accepter tous les défis pour accroître mes compétences dans mon nouveau métier.</p>
            <p className='conclusion'>Pour plus d'informations à mon sujet, contactez moi:<br/>
                <a href ='mailto:bussonceline@sfr.fr'>bussonceline@sfr.fr</a>
                <p>06.25.28.70.60</p> 
            </p>
        </div>
    );
};

export default Skills;