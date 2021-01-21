import React from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Fab from "@material-ui/core/Fab";

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
                <HighlightOffIcon 
                    aria-label="close"
                    onClick={clickFunc}
                    className="close-btn"
                />
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