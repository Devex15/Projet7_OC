function Banner({imgSrc, text=""}) {
    return(
        <div>
            <img src={imgSrc} alt=" "/>
            {text && 
            <p>{text}</p> }
        </div>
    )

}

export default Banner