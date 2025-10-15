import React from 'react';
import { BranchesOutlined, CheckOutlined } from '@ant-design/icons';

const Skills = () => {
    return (
        <div>
            <div className='skills' id="skills">
                <div className='background'>
                        <div className='background__3'></div>
                </div> 
                <h2 className="skills__title">Compétences</h2>
                <div className='skills__list'>
                    <div className='skills__list__hard'>
                    <h3>Hard Skills</h3>
                    <p><BranchesOutlined /><strong>Html 5</strong>, <strong>Css 3</strong>, <strong>Sass</strong> (y compris animations Css).</p>
                        <p><BranchesOutlined /> <strong>javaSript </strong>et <strong>React</strong> .</p>
                        <p><BranchesOutlined /> <strong>Node JS</strong>, <strong>Express JS</strong>.</p>
                        <p><BranchesOutlined /> <strong>Java </strong>et <strong>Spring</strong>.</p>
                        <p><BranchesOutlined /> <strong>Angular</strong>.</p>
                        <p><BranchesOutlined /> Réalisation d'<strong>API REST (avec Node JS et Java Spring)</strong>.</p>
                        <p><BranchesOutlined /> Utilisation de  bases de données relationnelles (<strong>MySQL</strong>, ORM Prisma) et non relationnelle (<strong>MongoDB</strong>, ORM Mongoose).</p>
                        <p><BranchesOutlined /> BigQuery, Power BI.</p>
                        
                    </div>
                    <div className='skills__list__soft'>
                        <h3>Soft Skills</h3>
                        <div>
                            <li>Mes 15 ans d'expérience comme infirmière m'ont apportés des compétences relationnelles:</li>
                                <div className='experiences'>
                                    <li><CheckOutlined />Ecoute</li>
                                    <li><CheckOutlined />Communication</li>
                                    <li><CheckOutlined />Empathie</li>
                                </div>
                            <li>Dont 8 ans en en exercice libérale durant lesquelles j'ai dû faire preuve de:</li>
                                <div className='experiences'>
                                    <li><CheckOutlined />Autonomie</li>
                                    <li><CheckOutlined />Adaptabilité</li>
                                    <li><CheckOutlined />Créativité</li>
                                </div>
                            <li>Mon travail sur le device management et dans un environnement de production m'ont permis de développer: </li>
                                <div className='experiences'>
                                    <li><CheckOutlined />Rigueur</li>
                                    <li><CheckOutlined />Organisation</li>

                                </div>
                            
                        </div>
                    </div> 
                </div>
            </div>
           
          
        </div>    
                
                  
    );
};

export default Skills;