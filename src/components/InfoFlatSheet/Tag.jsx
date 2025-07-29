function Tag({ name }) {
    return (
      <div className="tag-div">
        <span className="tag-div__button">{name}</span>
      </div>
    );
  }
  
  export default Tag;