import React, { useState, useEffect } from "react";

function Pokemon({ url }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (url) {
      fetch(url)
        .then((res) => res.json())
        .catch((error) => console.error(error))
        .then((dat) => {
          if (dat) {
            setData(dat);
          }
        });
    }
  }, [url]);

  return (
    <div className="card">
      <div className="card-header">
        <h2>{data ? `${data.id}. ${data.name}` : ""}</h2>
      </div>
      <div className="card-image">
        <img src={data ? data.sprites.front_default : ""} alt="Pokemon" />
      </div>
      <div className="card-body">
        <div className="poke-title">Types</div>
        {data
          ? data.types.map((el) => (
              <div className="text-center">{el.type.name}</div>
            ))
          : ""}
      </div>
    </div>
  );
}

export default Pokemon;
