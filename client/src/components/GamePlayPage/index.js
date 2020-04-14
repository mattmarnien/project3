import React from "react";
import "./style.css"
function GamePlay() {

    return (
        <>
            <div className="container  gamearea">
                <div className="row opponentRow1 grey lighten-2">
                   <div class="opponentHand  blue-grey lighten-4">
                        Opponent Hand
                   </div>
                </div>
                <div className="row opponentRow2 ">
                    <div className="col s2 ">
                       
                    </div>
                    <div className="col s10 opponentPlayedCardsArea light-blue lighten-2">
                         <div class="opponentPlayedCards purple lighten-2">
                           Opponent Played Cards Area
                        </div>
                    </div>
                </div>
                <div className="row playerRow1 lime lighten-5">
                    <div className="col s2 resourceArea red lighten-4">
                         Resource Area
                    </div>
                    <div className="col s10 userPlayedCardsArea light-blue lighten-5">
                         <div class="userPlayedCards purple lighten-4">
                        User Played Cards Area
                        </div>
                    </div>
                 </div>
                 <div className="row playerRow2 green lighten-5">
                    <div className="col s12 playerHandArea">
                        <div class="playerHand  blue-grey lighten-3">
                            Player Hand
                         </div>
                    </div>
                </div> 
            </div>

        </>
    )

}

export default GamePlay;

                    
                        /* Alternative player area layout */
                {/* <div className="col s2 lime lighten-5 row2col1">
                        Resource Area
                   </div>
                   <div className="col s10 blue lighten-5 row2col2">

                   </div> */}

                  /*  <div className="col s12">
                        <div className="row playerRow1 lime lighten-5">
                            <div className="col s2 resourceArea red lighten-4">
                                    Resource Area
                            </div>
                            <div className="col s10 playedCardsArea light-blue lighten-5">
                                <div class="playedCards purple lighten-4">
                                    Played Cards Area
                                </div>
                            </div>
                        </div>
                        <div className="row playerRow2 green lighten-5">
                            <div className="col s12 playerHandArea">
                                <div class="playerHand  blue-grey lighten-3">
                                    Player Hand
                                </div>
                            </div>
                        </div>
                    </div> */

                  /*   <div className="container  gamearea">
                    <div className="row opponentArea grey lighten-2">
                        Opponent Area
                    </div>
                    <div className="row playerArea brown lighten-4">
                         
                    </div>
                </div> */