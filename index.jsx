import React from "react";
import reactDOM from "react-dom/client";
import {Gretting, UserCARD} from "./Gretting";
import Task from "./Task";


const root = reactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Gretting tittle="titulo" name="juan" description="descripcion1" />
    <Gretting tittle="titulo2" name="jose" description="descripcion2" />
    <Gretting tittle="titulo3" name="manuel" description="descripcion3" />
    <UserCARD name='juan' amount={3200} married={true} address={[{street:'calle 5 # 16-28', city:'popayork'}, {relleno:'relleno', relleno0: 'relleno'}]} />
    <Task/>
  </>   
);


//vamos hacer una funcion que sume dos parametros 
