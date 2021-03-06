import React, { useState } from "react"
import { Background, Pages } from "./start";
import { buttonDivStyle, backButtonStyle, challengeStyle, challengeTitleStyle, ingredientAreaStyle, ingredientsStyle, nextButtonStyle } from "./styles/Ingredients.styles";


export interface IngredientsProps{
    options:any;
    setPage:any;
    setBackground:any;
}

export default function Ingredients (props: IngredientsProps){

    return(
        <div style={challengeStyle}>
            <div style={challengeTitleStyle}>
                Your ingredients are:
            </div>
            <div style={ingredientAreaStyle}>
                <div style={ingredientsStyle}>
                    Protein:<br/> {props.options.Protein}
                </div >
                <div style={ingredientsStyle}>
                    Vegetable:<br/> {props.options.Vegetable}
                </div>
                <div style={ingredientsStyle}>
                Method:<br/> {props.options.Method}
                </div>
                <div style={ingredientsStyle}>
                    Carb:<br/> {props.options.Carb}
                </div>
                <div style={ingredientsStyle}>
                    Herbs:<br/> {props.options.Herbs}
                </div>
                <div style={ingredientsStyle}>
                    Bonus:<br/> {props.options.Bonus}
                </div>
            </div>
            <div style={buttonDivStyle}>
                <button style={backButtonStyle} onClick={(e) => {
                        props.setPage(Pages.Home)
                        props.setBackground(Background.Home)
                    }
                }>
                    Back
                </button>
                <button style={nextButtonStyle} onClick={(e) => 
                    {
                        props.setPage(Pages.Challenge)
                        props.setBackground(Background.Challenge)
                    }
                }>
                    Next
                </button>
            </div>
        </div>
    );
}