import React from 'react';

const Header = () => {
    return ( 
    <div>
        <div className='background'>
            <div className='background__1'></div>
        </div>
        <div className='infos'>
            <img src='./assets/P1002089.JPG' alt='céline busson' />
            <div className='infos__content'>
                <div><strong>Céline Busson</strong></div>
                <div>Développeuse Web</div>
            </div>
        </div>
    </div>
    );
};

export default Header;