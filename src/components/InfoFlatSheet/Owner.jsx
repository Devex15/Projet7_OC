import styles from "./owner.module.scss"; // On importe un module SCSS

function Owner({ host }) {
  return (
    <div className={styles.owner}>
      <span className={styles.name}>{host.name}</span>

      <img
        className={styles.picture}
        src={host.picture}
        alt={`Propriétaire : ${host.name}`}
      />
    </div>
  );
}

export default Owner;








{/* function Owner(host) {
  console.log(host);
    return (
      <>
        <span className="nom-proprietaire">{host.host.name}</span>
        
        <img
          className="photo-proprietaire"
          src={host.host.picture}
          alt="Propriétaire"
        />
        
      </>
    );
}

export default Owner; */}