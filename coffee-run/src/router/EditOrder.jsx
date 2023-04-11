import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";
import Form from "../components/Form";

function Edit() {
  const { id } = useParams();
  const controller = new AbortController();

  const [drinkInfo, setDrinkInfo] = useState({
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
    setDrinkInfo((prev) => {
      return { ...prev, [name]: value };
    });
    // console.log(crewInfo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase.from("Drinks").update(drinkInfo).eq("id", id);
    setDrinkInfo({
        drinkFor: "",
        name: "",
        type: "",
        ice: "",
        milk: "",
        syrup: "",
        notes: "",
    });
    window.location = "/";
  };
  
  const handleDelete = async (e) => {
    e.preventDefault();
    
    await supabase.from("Drinks").delete().eq("id", id)
    window.location = "/";
  }

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("Drinks")
        .select()
        .eq("id", id);
        setDrinknfo(data[0]);
        // console.log(data, crewInfo);
    };
    fetchData();

    return () => controller.abort();
  }, []);

  return (
    <div className="Edit">
      <br/>
      <h2>Edit Drink Order</h2>
      <Form data={drinkInfo} onChange={handleChange} onSubmit={handleSubmit} />
      <br/>
      <button style={{backgroundColor: "#CE5959"}} onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Edit;