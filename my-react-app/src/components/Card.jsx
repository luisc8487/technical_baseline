import React from "react";

const Card = ({label, src, kcal}) => {
  console.log(label, src, kcal);
  return src ? (
    <div className="card">
        <div className="card-header">
            <h2>{label}</h2>
        </div>
        <div className="card-body">
            <img src={src} />
        </div>
        <div className="card-footer">
            <div className="nutrients">
                <h3>{Math.round(kcal)} kcal</h3>
            </div>
        </div>
    </div>
  ) : null;
};

export default Card;
