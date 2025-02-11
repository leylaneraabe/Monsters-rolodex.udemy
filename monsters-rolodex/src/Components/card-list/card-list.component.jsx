import React from "react";
import { Card } from "../card/card.component";
import "./card-list.style.css";

export const Cardlist = (props) => (
  <div className="card-list">
    {console.log("props", props)}
    {props.monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
