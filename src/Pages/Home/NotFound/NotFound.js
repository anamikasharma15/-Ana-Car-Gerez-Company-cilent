import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='error-bg'>
            <div className='dark-overlay'>
                <h1 className='error-msg'>404 !!</h1>
                <p className='error-msg2'>Page not Found</p>
            </div>
        </div>
    );
};

export default NotFound;