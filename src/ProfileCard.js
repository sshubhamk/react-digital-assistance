function ProfileCard(props) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="figure is-1by1">
          <img src={props.image} alt={props.title.toString()}></img>
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4"> {props.title}</p>
          <p className="subtitle is-6"> {props.handle}</p>
        </div>
        <div className="content">{props.description}</div>
      </div>
    </div>
  );

}

export default ProfileCard;