function Banner({imgSrc, alt, text=""}) {
    return(
        <div>
            <img src={imgSrc} alt={alt}/>
            {text && 
            <p>{text}</p> }
        </div>
    )

}

export default Banner