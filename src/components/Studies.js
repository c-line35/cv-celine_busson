import React from 'react';
import { Collapse } from 'antd';
const { Panel } = Collapse;
import { DoubleRightOutlined, BranchesOutlined } from '@ant-design/icons';


const Studies = () => {
    return (
        <div className='studies' id="studies">
            <div className='background'>
                <div className='background__2'></div>
            </div>
            <h2 className='studies__title'>Mon parcours</h2>
            <div className='studies__parcours'>  
                <Collapse accordion>
                <Panel header="Digital Systems Engineer" key="1">
                        <p><DoubleRightOutlined />Digital Systems Engineer dans une ESN depuis février 2023<br/><br/>
                        <li><BranchesOutlined />Mission pour une compagnie d'assurance: développement html, CSS, Java.</li>
                        <li><BranchesOutlined />Mission pour un opérateur télécom: device management, data analyse.</li>
                        </p>
                    </Panel>
                    <Panel header="Développeuse web" key="2">
                        <p><DoubleRightOutlined /> Développeuse web bénévole dans une association regroupant des assistants familiaux, depuis avril 2022.</p>
                    </Panel>
                    <Panel header="Parcours professionnel dans le milieu de la santé" key="3">
                        <p><DoubleRightOutlined /> Aide soignante: diverses missions d'intérim en EHPAD, été 2022.</p>
                        <p><DoubleRightOutlined /> Création d'un cabinet d'infirmière libérale à Mordelles (35) de 2014 à mars 2022.</p>
                        <p><DoubleRightOutlined /> Infirmière spécialisée en hémodialyse à l'AUB Santé de 2009 à 2013.</p>
                        <p><DoubleRightOutlined /> Infirmière à L'Hôpital à domicile 35 de 2007 à 2009.</p>
                        <p><DoubleRightOutlined /> Infirmière dans un EPHAD en 2006.</p>
                    </Panel>
                    <Panel header="Autres expériences" key="4">
                        <p><DoubleRightOutlined /> Vice-présidente d'une association culturelle sur la commune de Guichen pendant 2 ans.</p>
                        <p><DoubleRightOutlined /> Pompier volontaire de 2002 à 2007 sur la commune du Guichen (35).</p>
                       
                    </Panel>
                    <Panel header="Scolarité" key="5">
                        <p><DoubleRightOutlined /> 
                            Formation Java, Spring, Angular dans le cadre d'une POEI en lien avec Pôle emploi (octobre 2022 à janvier 2023).<br/>
                        </p>
                        <p><DoubleRightOutlined /> 
                            Formation de développeur web avec OpenClassRooms de décembre 2021 à juin 2022.<br/>
                            Tous mes projets ont été validés, je suis en attente de validation du diplôme Développeur web (RNCP niveau 5) par le jury final.
                        </p>
                        <p><DoubleRightOutlined /> Diplôme d'état infirmier obtenu en 2006 obtenu à l'IFSI Pontchaillou à Rennes.</p>
                        <p><DoubleRightOutlined /> Baccalauréat scientifique obtenu en 2002 au lycée Bréquigny à Rennes.</p>
                    </Panel>
                </Collapse>
            </div>       
        </div>
    )
};

export default Studies;          
                     
                   
                 
              
              
                   
               
   