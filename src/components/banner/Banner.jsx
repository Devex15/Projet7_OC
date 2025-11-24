import styles from"./Banner.module.scss";

function Banner({imgSrc, alt, text=""}) {
    return(
        <div className={styles.Banner}>
            <div className={styles.Banner__imgWrapper} > {/* Ajout d'une div imWrapper afin de gérer le texte par rapport à l'image en mediaquery mobile  */}
                <img src={imgSrc} alt={alt}/>
                {text && 
                <p>{text}</p> }
            </div>
        </div>
    )

}

export default Banner