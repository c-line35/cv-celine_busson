import React from 'react';
import FirstChapter from './FirstChapter';
import Projets from './Projets';
import Skills from './Skills';
import Studies from './Studies';


const Main = ({ firstName, setFirstName }) => {
   
    return (
        <div>
             <div className='background'>
                 <div className='background__1'></div>
            </div>
            <FirstChapter firstName={firstName} />   
            <Studies />      
            <Projets />   
            <Skills />        
         </div>                
       );
};

export default Main;             
                        
                           
                    
                   
               
           
       
 