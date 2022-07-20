import React from 'react';
import { Tabs, Collapse } from 'antd';
const { TabPane } = Tabs;
const { Panel } = Collapse;
import projets from "../data/projets";
import Projet from './Projet';


const Projets = () => {

  const onChange = (key) => {
    console.log(key);
  };

  return ( 
    <div className='projets' id="projects">
      <div className="projets__content">
        <h2>Mes Réalisations</h2>
        <div className="projets__content__desktop">
          <Tabs tabPosition='left'>
            {projets.map(projet=>(
              <TabPane tab={projet.tab} key={projet.id}>
                <Projet projet={projet} />
              </TabPane>))}
          </Tabs>
        </div>
        <div className='projets__content__mobile'>
          <Collapse accordion  onChange={onChange}>
            {projets.map(projet=>(
              <Panel showArrow={false} header={projet.tab} key={projet.id}>
                <Projet projet={projet} />
              </Panel>))}
          </Collapse>
        </div>
      </div>
    </div>
  );       
};

export default Projets;