import styles from "./tag.module.scss";


function Tag({ name }) {
    return (
      <div className={styles["tag-div"]}>
        <span className= {styles["tag-div__button"]}>{name}</span> {/*On utilise cette notation de classe à cause du tiret */}
      </div>
    );
  }
  
  export default Tag;