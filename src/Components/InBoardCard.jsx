import React from 'react';

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
                <div
                    className="close-div"
                    onClick={clickFunc}
                >
                    x
                </div>
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