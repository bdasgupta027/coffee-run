import { useState } from "react";
import { Link } from "react-router-dom";

function Card({ id, drinkFor, name, type, ice, milk, syrup, notes}){
    return (
        <div className="Card" style={{width: "500px", height: "600px"}}>
            {/* <img 
                src="./assets/sticky-note.jpg"
                style={{
                    position: "absolute",
                    width: "185px",
                    margin: "10px 10px",
                    zIndex: "-100",
                }}
            /> */}
            <p className="name">
                <strong>For: {drinkFor}</strong>
                <br />
                <strong>Drink Name: {name}</strong>
            </p>
            <img 
            src={`./src/assets/${type}.png`}
            style={{
                position: "absolute",
                width: "300px",
                height: "400px",
                margin: "100px -150px",
                // zIndex: "-100",
            }}
            />
            <br/>
            <div className="links">
                <Link className="details" to={`/drinkdetails/${id}`}>
                    <button>Details</button>
                </Link>
                <Link to={`/editorder/${id}`}>
                    <button>Edit Order</button>
                </Link>
            </div>

        </div>
    )
}export default Card;