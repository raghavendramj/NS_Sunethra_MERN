//Component One
function Yorker(props) {
    return <h1>Well Bowled! - {props.praise}</h1>
}

//Component Two
function ShortPicth(props) {
    return <h1>Handsome Shot! - {props.comment}</h1>
}

//Component Result!
function ResultOfADelivery(props) {
    const isBoundary = props.fourOrSix;
    // if (isBoundary) {
    //     return <ShortPicth comment="Good Ssshot!" />
    // } else {
    //     return <Yorker praise="Bulls Eye!" />
    // } 
    return isBoundary ? <ShortPicth comment="Good Ssshot!" /> : <Yorker praise="Bulls Eye!" />

}

export default ResultOfADelivery;