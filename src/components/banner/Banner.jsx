import styles from"./Banner.module.scss";

function Banner({imgSrc, alt, text=""}) {
    return(
        <div className={styles.Banner}>
            <img src={imgSrc} alt={alt}/>
            {text && 
            <p>{text}</p> }
        </div>
    )

}

export default Banner