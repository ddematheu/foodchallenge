import CSS from 'csstype';

export const challengeTitleStyle: CSS.Properties = {
    marginBottom: '2.5vh',
    marginRight: '30vw',
    marginLeft: '30vw',
    maxWidth: '40vw',
    minWidth: '500px',
    color: 'black',
    fontSize: '55px',
    lineHeight: '65px',
    textAlign: "center",
    fontWeight: 'bolder',
    backgroundColor: 'hsla(0, 0%, 100%, 0.7)',
}

export const challengeStyle: CSS.Properties = {
    width: '100vw',
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    paddingTop: '30vh'
}

export const ingredientsStyle: CSS.Properties = {
    backgroundColor: 'pink',
    float: 'left',
    marginRight: '15%',
    width: '200px',
    height: '125px',
    color: 'black',
    padding: '0.25em 0.5em',
    fontSize: '20px',
    fontWeight: 'bolder',
    lineHeight: '50px',
    borderRadius: '50%',
    border: '2px solid black',
    textAlign: 'center',
    boxSizing: "border-box",
    MozBoxSizing: "border-box",
    WebkitBoxSizing: "border-box",
    marginBottom: '1.5vh',
    marginTop: '1.5vh'
}

export const ingredientAreaStyle: CSS.Properties = {
    marginTop: '2.5vh',
    marginRight: '22vw',
    marginLeft: '22vw',
    paddingLeft: '5vw',
    maxWidth: '56vw',
    minWidth: '100px',
    color: 'blue',
    height: '25vh',
    WebkitColumnCount: 3,
    WebkitColumnGap: '0.25vw',
    MozColumnCount: 3,
    MozColumnGap: '0.25vw',
    columnCount: 3,
    columnGap: '0.25vw',
    backgroundColor: 'hsla(0, 0%, 100%, 0.7)',
}

export const buttonDivStyle: CSS.Properties = {
    height: '100px',
    marginTop: '2vh',
    marginRight: '37.5vw',
    marginLeft: '37.5vw',
    maxWidth: '25vw',
    minWidth: '100px',
}

export const backButtonStyle: CSS.Properties = {
    float: 'left',
    width: '11.5vw',
    background: 'hsl(0,100%,50%,0.9)',
    borderRadius: '30px',
    border: '2px solid black',
    color: 'white',
    padding: '0.25em 1em',
    fontSize: '30px',
    fontWeight: 'bolder',
    lineHeight: '35px',
    marginRight: '2vw'
}

export const nextButtonStyle: CSS.Properties = {
    float: 'left',
    width: '11.5vw',
    borderRadius: '30px',
    border: '2px solid black',
    color: 'white',
    padding: '0.25em 1em',
    fontSize: '30px',
    lineHeight: '35px',
    fontWeight: 'bolder',
    background: 'hsl(120,100%,25%,0.9)',
}