import React from 'react';
import FirstChapter from '../components/FirstChapter';
import Projets from '../components/Projets';
import Skills from '../components/Skills';
import Studies from '../components/Studies';
import 'antd/dist/antd.variable.min.css';
import { ConfigProvider, Anchor, BackTop } from 'antd';
const { Link } = Anchor;




ConfigProvider.config({ theme: { 
    primaryColor: "rgb(162, 22, 106)"
} });

const Main = () => {
  
    return (
        <ConfigProvider>
           <BackTop />
    <div className='nav'>
          <Anchor
          style={{
            width: '100%'
            }}>
            <Link href="#skills" title="Compétences" />
            <Link href="#studies" title="Parcours" />
            <Link href="#projects" title="Projets" />
          </Anchor>
      </div>
          <div className='page'>
            <FirstChapter />
            <Skills />    
            <Studies />      
            <Projets />
          </div>
  
        <p className='conclusion'>Consciente que mon apprentissage ne fait que commencer, je suis prête à accepter tous les défis pour accroître mes compétences dans mon nouveau métier.</p>
            <p className='conclusion'>Pour plus d'informations à mon sujet, contactez moi:<br/>
                <a href ='mailto:bussonceline@sfr.fr'>bussonceline@sfr.fr</a><br/>06.25.28.70.60
            </p>   
  
            
                   
         </ConfigProvider>            
       );
};

export default Main;             
                        
                           
                    
                   
               
           
       
 