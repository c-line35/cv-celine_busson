import React from 'react';
import Header from '../components/Header';
import Projets from '../components/Projets';
import Skills from '../components/Skills';
import Studies from '../components/Studies';
import 'antd/dist/antd.variable.min.css';
import { ConfigProvider, Anchor, BackTop, Button } from 'antd';
import { ToTopOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
const { Link } = Anchor;


ConfigProvider.config({ theme: { 
    primaryColor: "rgb(162, 22, 106)"
} });

const style = {
  height: 20,
  width: 20,
  lineHeight: '20px',
  borderRadius: 10,
  backgroundColor: "rgba(255,227,187,1)",
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};

const Main = () => {
  
    return (
        <ConfigProvider>
    <div className='nav'>
          <Anchor
          style={{
            width: '100%'
            }}>
            <Link href="#skills" title="Compétences" />
            <Link href="#studies" title="Parcours" />
            <Link href="#projects" title="Réalisations" />
          </Anchor>
      </div>
          <main>
            <Header />
            <Skills />    
            <Studies />      
            <Projets />
        </main>
        <div className='backTop'>
            <BackTop >
             <div style={style}><ToTopOutlined/></div>
            </BackTop>
          </div>
  
        <div className='conclusion'>
          <div className='background__4'></div>
          <p>Forte des mes expériences passées et des projets que j'ai effectués, je suis prête à accepter tous les défis pour continuer à m'améliorer.</p>
        </div>
        
        <footer> 
          <div className='contact'>
            <h4>Contact:</h4>      
            <a href ='mailto:bussonceline@sfr.fr'><MailOutlined /> bussonceline@sfr.fr</a><br/>
            <a href="tel:+33625287060"><PhoneOutlined /> 06.25.28.70.60</a>
          </div>
          <div className='upload'>
            <Button type='primary'>
              <a href='./assets/cvweb.pdf' target="blank">Télécharger ce CV en PDF</a>
            </Button>
          </div>
        </footer> 
         </ConfigProvider>            
       );
};

export default Main;             
                        
                           
                    
                   
               
           
       
 