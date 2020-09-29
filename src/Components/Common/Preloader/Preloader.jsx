import React from 'react';
import preloader from '../../../Assets/Common/loader.svg';
import classes from './Preloader.module.css';

const Preloader = (props) => {
    return(
        <div className={classes.body}>
            <img src={preloader} className={classes.preloader}/>
        </div>
    );
}

export default Preloader;