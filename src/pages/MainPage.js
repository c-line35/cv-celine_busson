import React from 'react';
import Main from '../components/Main';
import  Form  from '../components/Form';


const MainPage = ({ firstName, setFirstName}) => {
    return (
        <div>
            {firstName
                ?<Main firstName={ firstName } setFirstName={ setFirstName } />
                :<Form firstName={ firstName } setFirstName={ setFirstName } />
            } 
        </div>
      

    );
};

export default MainPage;


