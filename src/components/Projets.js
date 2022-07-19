import React from 'react';
import { Space, Tabs } from 'antd';
const { TabPane } = Tabs;
import projets from "../data/projets";
import Projet from './Projet';


const Projets = () => {

    return ( 
    
        <div className='projets' id="projects">
            <div className="projets__content">
                <h2>Mes projets</h2>
               
                  <Space
                    style={{
                      marginBottom: 24,
                      color: "rgba(162,22,107,1)",
                      background: "rgba(162,22,107,1)"
                    }}
                  >
                  </Space>
                    <Tabs tabPosition='left'>
                      {projets.map(projet=>(
                      <TabPane tab={projet.tab} key={projet.id}>
                        <Projet projet={projet} />
                      </TabPane>))}
                    </Tabs>
            </div>
          </div> 
      
    );
          
};

export default Projets;