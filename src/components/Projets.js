import React, { useState } from 'react';
import { Radio, Space, Tabs } from 'antd';
const { TabPane } = Tabs;
import projets from "../data/projets";
import Projet from './Projet';


const Projets = () => {

    return ( 
    
        <div className='projets'>
            <div className="projets__content">
                <div className='projets__content__title'>Mes réalisations</div>
               
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