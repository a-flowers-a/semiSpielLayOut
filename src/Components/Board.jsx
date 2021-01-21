import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import InBoardCard from './InBoardCard';

function Board(){
    const [centerCardAtt, setCenterCardAtt] = useState({
        show: false,
        color: "",
        img: "",
        imgSrc: "",
        content: "",

    });
    const contents = [
        "¿This could be a great and big question?",
        "Shhhhhhhhh",
        "Depends on",
        "Don't buy it",

    ];
    const imgSrcs= [
        "../../assets/images/question-mark-4-xxl.png",
        "https://www.flaticon.com/svg/static/icons/svg/2857/2857714.svg",
        "../../assets/images/exclamation-xxl.png",
        "https://www.flaticon.com/svg/static/icons/svg/1043/1043533.svg",
    ];

    function handleCard(card){
        let color = "red";
        let img = "img";
        if(card === 1 || card === 3)// left/right
        {
            color = "black";
            img = "joker";
        }
        setCenterCardAtt({
            show: true,
            color: color,
            img: img,
            imgSrc: imgSrcs[card],
            content: contents[card],
        });
    }//handleCard
    return(
        <Grid
            container
            spacing={0}
            alignItems="center"
            justify="center"
            style={{ minHeight: "100%" }}
        >
            <Grid item className="board">
                <InBoardCard
                    cardClass="up-cards"
                    clickFunc={()=>{
                        handleCard(0);
                    }}
                    imgClass="imgs"
                    imgSrc={imgSrcs[0]}
                />
                <InBoardCard
                    cardClass="right-cards"
                    clickFunc={()=>{
                        handleCard(1);
                    }}
                    imgClass="imgs"
                    imgSrc={imgSrcs[1]}
                />
                <InBoardCard
                    cardClass="down-cards"
                    clickFunc={()=>{
                        handleCard(2);
                    }}
                    imgClass="imgs"
                    imgSrc={imgSrcs[2]}
                />
                <InBoardCard
                    cardClass="left-cards"
                    clickFunc={()=>{
                        handleCard(3);
                    }}
                    imgClass="imgs"
                    imgSrc={imgSrcs[3]}
                />
                {/*Here goes the card displayed in center*/}
                {centerCardAtt.show && (
                    <InBoardCard
                        cardClass={`center-card ${centerCardAtt.color}-card`}
                        imgClass={`in-card-${centerCardAtt.img}`}
                        imgSrc={centerCardAtt.imgSrc}
                        cardContent={centerCardAtt.content}
                        center={true}
                        clickFunc={() => 
                            setCenterCardAtt(prevValues=>{
                                return {
                                    ...prevValues,
                                    show:false
                                }
                            })
                        }
                    />
                )}
            </Grid>
        </Grid>
        
    );
}//Board

export default Board;