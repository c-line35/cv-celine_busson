import React from 'react';
import { BranchesOutlined } from '@ant-design/icons';

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
                    <p><BranchesOutlined /> Apprentissage <strong>Html 5</strong>, <strong>Css 3</strong>, <strong>Sass</strong> (notions au niveau des animations Css).</p>
                        <p><BranchesOutlined /> Apprentissage <strong>javaSript </strong>et <strong>React</strong> .</p>
                        <p><BranchesOutlined /> Apprentissage de <strong>Node JS</strong>, <strong>Express JS</strong>.</p>
                        <p><BranchesOutlined /> Réalisation d'<strong>API REST</strong>.</p>
                        <p><BranchesOutlined /> Utilisation de  bases de données relationnelles (<strong>MySQL</strong>, ORM Prisma) et non relationnelle (<strong>MongoDB</strong>, ORM Mongoose).</p>
                        <p><BranchesOutlined /> Notions en SEO et Accessibilité.</p>
                        <p><BranchesOutlined /> Notions en matière de sécurité.</p>
                    </div>
                    <div className='skills__list__soft'>
                        <h3>Soft Skills</h3>
                        <ul>
                            <li>Compétences relationnelles:</li>
                                <ul>
                                    <li>Ecoute</li>
                                    <li>Communication</li>
                                    <li>Empathie</li>
                                </ul>
                            <li>Autonomie</li>
                            <li>Adaptation</li>
                            <li>Persévérence</li> 
                        </ul>
                    </div> 
                </div>
            </div>
           
          
        </div>    
                
                  
    );
};

export default Skills;