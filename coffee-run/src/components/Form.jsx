import { useState, useEffect, useRef } from "react";

function Form({ data, onChange, onSubmit }){
    const inputRef = useRef(null);
    useEffect(() => {
        return () => {};
    }, [data]);

    return (
        <div className="Form">
            <form onSubmit={onSubmit}>
                <div className="drinkfor_input">
                    <label>
                        <strong>This drink is for:</strong><br />
                        <input
                            type="text"
                            name="drinkFor"
                            value={data.drinkFor}
                            onChange={onChange}
                            ref={inputRef}
                            required
                        />
                    </label>
                </div>
                <br />

                <div className="name_input">
                    <label>
                    <strong>Drink Name:</strong><br />
                        <input
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={onChange}
                            ref={inputRef}
                            required
                        />
                    </label>
                </div>
                <br />

                <div className="type_input">
                <strong>Type:</strong>
                    <label>
                        <input
                            type="radio"
                            id="type"
                            name="type"
                            value="refresher"
                            onChange={onChange}
                            defaultChecked={data.type === "refresher" ? true : null}
                            required
                        />
                        <span>Refresher</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            id="type"
                            name="type"
                            value="frappuccino"
                            onChange={onChange}
                            defaultChecked={data.type === "frappuccino" ? true : null}
                            required
                        />
                        <span>Frappuccino</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            id="type"
                            name="type"
                            value="icedlatte"
                            onChange={onChange}
                            defaultChecked={data.type === "icedlatte" ? true : null}
                            required
                        />
                        <span>Iced Latte</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            id="type"
                            name="type"
                            value="latte"
                            onChange={onChange}
                            defaultChecked={data.type === "latte" ? true : null}
                            required
                        />
                        <span>Latte</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            id="type"
                            name="type"
                            value="tea"
                            onChange={onChange}
                            defaultChecked={data.type === "tea" ? true : null}
                            required
                        />
                        <span>Tea</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            id="type"
                            name="type"
                            value="shakenespresso"
                            onChange={onChange}
                            defaultChecked={data.type === "shakenespresso" ? true : null}
                            required
                        />
                        <span>Shaken Espresso</span>
                    </label>
                </div>
                <br />

                <div className="ice_input">
                <strong>Ice Level:</strong>
                    <label>
                        <input
                            type="radio"
                            id="ice"
                            name="ice"
                            value="n/a"
                            onChange={onChange}
                            defaultChecked={data.type === "n/a" ? true : null}
                            required
                        />
                        <span>N/A (Hot Drink)</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            id="ice"
                            name="ice"
                            value="no ice"
                            onChange={onChange}
                            defaultChecked={data.type === "no ice" ? true : null}
                            required
                        />
                        <span>No Ice</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            id="ice"
                            name="ice"
                            value="lightice"
                            onChange={onChange}
                            defaultChecked={data.type === "lightice" ? true : null}
                            required
                        />
                        <span>Light Ice</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            id="ice"
                            name="ice"
                            value="regular"
                            onChange={onChange}
                            defaultChecked={data.type === "regular" ? true : null}
                            required
                        />
                        <span>Regular Ice</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            id="ice"
                            name="ice"
                            value="extraice"
                            onChange={onChange}
                            defaultChecked={data.type === "extraice" ? true : null}
                            required
                        />
                        <span>Extra Ice</span>
                    </label>
                </div>
                <br />

                <div className="milk_input">
                <strong>Milk:</strong>
                    <label>
                        <input
                            type="radio"
                            id="milk"
                            name="milk"
                            value="nomilk"
                            onChange={onChange}
                            defaultChecked={data.type === "nomilk" ? true : null}
                            required
                        />
                        <span>No Milk</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            id="milk"
                            name="milk"
                            value="standard"
                            onChange={onChange}
                            defaultChecked={data.type === "standard" ? true : null}
                            required
                        />
                        <span>2% Milk (Standard)</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            id="milk"
                            name="milk"
                            value="almond"
                            onChange={onChange}
                            defaultChecked={data.type === "almond" ? true : null}
                            required
                        />
                        <span>Almond Milk</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            id="milk"
                            name="milk"
                            value="breve"
                            onChange={onChange}
                            defaultChecked={data.type === "breve" ? true : null}
                            required
                        />
                        <span>Breve (Half & Half)</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            id="milk"
                            name="milk"
                            value="coconut"
                            onChange={onChange}
                            defaultChecked={data.type === "coconut" ? true : null}
                            required
                        />
                        <span>Coconut Milk</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            id="milk"
                            name="milk"
                            value="heavycream"
                            onChange={onChange}
                            defaultChecked={data.type === "heavycream" ? true : null}
                            required
                        />
                        <span>Heavy Cream</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            id="milk"
                            name="milk"
                            value="nonfat"
                            onChange={onChange}
                            defaultChecked={data.type === "nonfat" ? true : null}
                            required
                        />
                        <span>Nonfat Milk</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            id="milk"
                            name="milk"
                            value="oatmilk"
                            onChange={onChange}
                            defaultChecked={data.type === "oatmilk" ? true : null}
                            required
                        />
                        <span>Oatmilk</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            id="milk"
                            name="milk"
                            value="soy"
                            onChange={onChange}
                            defaultChecked={data.type === "soy" ? true : null}
                            required
                        />
                        <span>Soy Milk</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            id="milk"
                            name="milk"
                            value="sweetcream"
                            onChange={onChange}
                            defaultChecked={data.type === "sweetcream" ? true : null}
                            required
                        />
                        <span>Vanilla Sweet Cream</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            id="milk"
                            name="milk"
                            value="whole"
                            onChange={onChange}
                            defaultChecked={data.type === "whole" ? true : null}
                            required
                        />
                        <span>Whole Milk</span>
                    </label>
                </div>
                <br />

                <div className="syrup_input">
                <strong>Syrup:</strong>
                    <label>
                        <input
                            type="checkbox"
                            id="syrup"
                            name="syrup"
                            value="nosyrup"
                            onChange={onChange}
                            defaultChecked={data.type === "nosyrup" ? true : null}
                        />
                        <span>No Syrups</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            id="syrup"
                            name="syrup"
                            value="vanilla"
                            onChange={onChange}
                            defaultChecked={data.type === "vanilla" ? true : null}
                        />
                        <span>Vanilla Syrup</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            id="syrup"
                            name="syrup"
                            value="caramel"
                            onChange={onChange}
                            defaultChecked={data.type === "caramel" ? true : null}
                        />
                        <span>Caramel Syrup</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            id="syrup"
                            name="syrup"
                            value="whitemocha"
                            onChange={onChange}
                            defaultChecked={data.type === "whitemocha" ? true : null}
                        />
                        <span>White Mocha</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            id="syrup"
                            name="syrup"
                            value="mocha"
                            onChange={onChange}
                            defaultChecked={data.type === "mocha" ? true : null}
                        />
                        <span>Mocha</span>
                    </label>
                </div>
                <br />

                <div className="notes_input">
                    <label>
                        <strong>Extra notes:</strong><br />
                        <input
                            type="text"
                            name="notes"
                            value={data.notes}
                            onChange={onChange}
                            ref={inputRef}
                            required
                        />
                    </label>
                </div>
                <br />
                <input type="submit" className="button" />
            </form>
        </div>
    )
}export default Form;