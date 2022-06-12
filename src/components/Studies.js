import React from 'react';
import { Collapse } from 'antd';
const { Panel } = Collapse;
import { DoubleRightOutlined, BranchesOutlined } from '@ant-design/icons';


const Studies = () => {
    return (
        <div className='studies'>
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
                    <Panel header="Ma reconversion professionnelle" key="3">
                        <p><BranchesOutlined /> Apprentissage <strong>Html 5</strong>, <strong>Css 3</strong>, <strong>Sass</strong> (notions au niveau des animations Css).</p>
                        <p><BranchesOutlined /> Apprentissage <strong>javaSript </strong>et <strong>React</strong> .</p>
                        <p><BranchesOutlined /> Apprentissage de <strong>Node JS</strong>, <strong>Express JS</strong>.</p>
                        <p><BranchesOutlined /> Réalisation d'<strong>API REST</strong>.</p>
                        <p><BranchesOutlined /> Utilisation de  bases de données relationnelles (<strong>MySQL</strong>, ORM Prisma) et non relationnelle(<strong>MongoDB</strong>, ORM Mongoose).</p>
                        <p><BranchesOutlined /> Notions en SEO et Accessibilité.</p>
                        <p><BranchesOutlined /> Notions en matière de sécurité.</p>
                    </Panel>
                </Collapse>
            </div>
        </div>
    )
};

export default Studies;