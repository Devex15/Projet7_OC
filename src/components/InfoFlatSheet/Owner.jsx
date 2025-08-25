function Owner(host) {
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

export default Owner;