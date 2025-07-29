function Owner(host) {
    return (
      <>
        <span className="nom-proprietaire">{host.name}</span>
        
        <img
          className="photo-proprietaire"
          src={host.picture}
          alt="Propriétaire"
        />
        
      </>
    );
}

export default Owner;