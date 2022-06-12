import React from 'react';

import FirstChapter from './FirstChapter';
import Projets from './Projets';
import Studies from './Studies';

const Main = ({ firstName, setFirstName }) => {
    console.log(firstName)
    return (
        <div>
            <div className='background'>
                <div className='background__1'></div>
            </div>
            <FirstChapter firstName={firstName} />
            <Studies />
            <Projets />
        </div>
    );
};

export default Main;