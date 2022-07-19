import React from 'react';

const FirstChapter = () => {
    return ( 
    <div>
        <div className='background'>
            <div className='background__1'></div>
        </div>
        <div className='infos'>
            <img src='./assets/P1002089.JPG' alt='céline busson' />
            <div className='infos__content'>
                <div className='infos__content__general'>
                    <span><strong>Céline Busson</strong></span>
                    <span>Développeuse Web</span>
                </div>
                <div className='infos__content__text'>
                    <ul>
                        <li>38 ans</li>
                        <li>Mariée, 3 enfants</li>
                        <li>Région rennaise</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
};

export default FirstChapter;