import React from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Fab from "@material-ui/core/Fab";
import { IconButton } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import CloseIcon from '@material-ui/icons/Close';

export default function InBoardCard(props){
    
    const {
        cardClass, imgClass,
        imgSrc, cardContent,
        center, clickFunc
    } = props;

    return(
        <div 
            className={cardClass}
            onClick={!center && clickFunc}
        >
            {center && (
                <Fab
                    className="close-fab"
                    aria-label="close"
                >
                    <CloseIcon 
                        onClick={clickFunc}
                    />
                </Fab>
            )}
            <img
                class={imgClass}
                src={imgSrc}
                alt="iconss"
            />
            {center && (
                <p>{cardContent}</p>
            )}
        </div>
    )
}//InBoardCard