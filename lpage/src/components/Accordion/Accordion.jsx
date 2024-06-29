import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import {ReactComponent as PlusIcon} from '../../assets/Plus.svg';
import styles from './Accordion.module.css';

const AccordionComponent = ({data}) => {
    return (
        <div>
                {
                    data.map((acc, idx) => {
                        return (
                        <Accordion className={styles.accordion}>
                            <AccordionSummary
                                expandIcon={< PlusIcon/>}
                                aria-controls={`panel${idx}-content`}
                                id={`panel${idx}-header`}
                                className={styles.questions}
                            >
                                {
                                    acc['ques']
                                }
                            </AccordionSummary>
                            <AccordionDetails className={styles.answers}>
                                {
                                    acc['answer']
                                }
                            </AccordionDetails>

                        </Accordion>
                        );
                    })
                }
        </div>
    );
}

export default AccordionComponent;