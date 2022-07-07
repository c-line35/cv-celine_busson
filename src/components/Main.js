import React from 'react';
import FirstChapter from './FirstChapter';
import Projets from './Projets';
import Skills from './Skills';
import Studies from './Studies';
import 'antd/dist/antd.variable.min.css';
import { ConfigProvider } from 'antd';


ConfigProvider.config({ theme: { 
    primaryColor: "rgb(162, 22, 106)"
} });

const Main = ({ firstName, setFirstName }) => {
   
    return (
        <ConfigProvider>
        <div>
             <div className='background'>
                 <div className='background__1'></div>
            </div>
            <FirstChapter firstName={firstName} />   
            <Studies />      
            <Projets />   
            <Skills />        
         </div>    
         </ConfigProvider>            
       );
};

export default Main;             
                        
                           
                    
                   
               
           
       
 