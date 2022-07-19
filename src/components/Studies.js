import React from 'react';
import { Collapse } from 'antd';
const { Panel } = Collapse;
import { DoubleRightOutlined } from '@ant-design/icons';


const Studies = () => {
    return (
        <div className='studies' id="studies">
            <div className='background'>
                <div className='background__2'></div>
            </div>
            <h2 className='studies__title'>Mon parcours</h2>
            <div className='studies__parcours'>  
                <Collapse accordion>
                    <Panel header="Scolarité" key="1">
                        <p><DoubleRightOutlined /> Baccalauréat scientifique obtenu en 2002 au lycée Bréquigny à Rennes.</p>
                        <p><DoubleRightOutlined /> Diplôme d'état infirmier obtenu en 2006 obtenu à l'IFSI Pontchaillou à Rennes.</p>
                        <p><DoubleRightOutlined /> Formation de développeur web avec OpenClassRooms de décembre 2021 à juin 2022.</p>
                    </Panel>
                    <Panel header="Parcours professionnel dans le milieu de la santé" key="2">
                        <p><DoubleRightOutlined /> Infirmière dans un EPHAD en 2006.</p>
                        <p><DoubleRightOutlined /> Infirmière à L'Hôpital à domicile 35 de 2007 à 2009.</p>
                        <p><DoubleRightOutlined /> Infirmière spécialisée en hémodialyse à l'AUB Santé de 2009 à 2013.</p>
                        <p><DoubleRightOutlined /> Création d'un cabinet d'infirmière libérale à Mordelles (35) de 2014 à mars 2022.</p>
                    </Panel>
                    <Panel header="Autres expériences" key="4">
                        <p><DoubleRightOutlined /> Pompier volontaire de 2002 à 2007 sur la commune du Guichen (35).</p>
                        <p><DoubleRightOutlined /> Vice-présidente d'une association culturelle sur la commune de Guichen pendant 2 ans.</p>
                       
                    </Panel>
                </Collapse>
            </div>       
        </div>
    )
};

export default Studies;          
                     
                   
                 
              
              
                   
               
   