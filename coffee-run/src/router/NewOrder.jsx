import { useEffect, useState } from "react";
import { supabase } from "../client";
import Form from "../components/Form";

function NewOrder() {
  const controller = new AbortController();
  const [drinkInput, setDrinkInput] = useState({
    drinkFor: "",
    name: "",
    type: "",
    ice: "",
    milk: "",
    syrup: "",
    notes: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDrinkInput((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(drinkInput)
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // await supabase.from("Drinks").insert(drinkInput).select();
    // setDrinkInput({
    //     drinkFor: "",
    //     name: "",
    //     type: "",
    //     ice: "",
    //     milk: "",
    //     syrup: "",
    //     notes: "",
    // })
    // window.location = "/";
    // console.log("Drink input is: ", drinkInput);
    e.preventDefault();
    await supabase.from("Drinks").insert(drinkInput).select();
    window.location = "/";
    // console.log("hi")
  };

  useEffect(() => {
    return () => controller.abort();
  }, []);
  

  return (
    <div className="Create">
      <br/>
      <h2>Add your drink order here!</h2>
      <Form data={drinkInput} onChange={handleChange} onSubmit={handleSubmit}/>
    </div>
  );
}

export default NewOrder;
