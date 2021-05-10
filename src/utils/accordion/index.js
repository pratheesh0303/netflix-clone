import React, { useState } from 'react';
import styled from 'styled-components';
import data from '../../data/accordion.json';
import styles from './accordion.module.css'

const Accordion = () => {
    
    let indexPlus;

    const [active, setActive] = useState();

    const eventHandler = (e, index) => {
        e.preventDefault();
        if(active === index){
            setActive();
            return;
        }
        setActive(index);
    }

    const indexCount = (index) => {
        indexPlus = index + 1;
        return indexPlus;
    }

    return(
        <div>
            <form>     
                { data.map((tab, index) => (
                    <div key={index}>
                        <h3>
                            <button 
                                className={styles.button}
                                onClick={(e) => eventHandler(e, index)}
                                aria-expanded={ active === index ? 'true' : 'false' }
                                aria-controls={ 'sect-' + indexCount(index) }
                                aria-disabled={ active === index ? 'true' : 'false' }
                                tabIndex={indexCount(index)}
                            >
                                <span className={styles.titleWrapper}>{tab.title}
                                    <span className={ active === index  ? styles.minus : styles.plus}></span>
                                </span>  
                            </button>
                        </h3>
                        <div id={ 'sect-' + indexCount(index) } className={ active === index  ? styles.panelOpen : styles.panelClose}>
                                { tab.description }
                        </div>
                    </div>
                    ))
                }
            </form>
        </div>
    );
}

export default Accordion;