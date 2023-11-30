import React from "react";

export const Gretting = ({ tittle = "null", name = "user", description = "null" }) => {
  return (
    <div>
      <h1>
        el titulo es:{tittle}, el nombres {name} y la description es{" "}
        {description}
      </h1>
    </div>
  );
};

export function UserCARD(props){

  console.log(props)
  

}
