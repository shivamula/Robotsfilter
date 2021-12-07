import React from "react";

const Card = (props) => {
  const { name, email, id } = props;
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow text-overflow: ellipsis">
      <img src={`https://robohash.org/${id}?200*200`} alt="robots" />
      <div>
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;
