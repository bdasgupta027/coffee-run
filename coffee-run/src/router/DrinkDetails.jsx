import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";


function DrinkDetails({}) {
  const { id } = useParams();
  const controller = new AbortController();
  const [drinkInfo, setDrinkInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("Drinks")
        .select()
        .eq("id", id);
      setDrinkInfo(data[0]);
      // console.log(data, crewInfo);
    };
    fetchData();

    return () => controller.abort();
  }, []);

  return (
    <div className="DrinkDetails" style={{width: "500px", height: "500px"}}>
      <br />
      <h2>Drink Details</h2>
      {drinkInfo && (
        <div style={{ display: "flex", backgroundColor: "black", padding: "20px 30px"}}>
          <img src={`../src/assets/${drinkInfo.type}.png`}
          style={{
            position: "absolute",
            width: "200px",
            height: "300px",
            // margin: "100px -150px",
            // zIndex: "-100",
        }}
        />
          <div style={{ marginLeft: "200px", color: "white",}}>
            <p>This drink is for: {drinkInfo.drinkFor}</p>
            <p>Name of Drink: {drinkInfo.name}</p>
            <p>Type of Drink: {drinkInfo.type}</p>
            <p>Ice Level: {drinkInfo.ice}</p>
            <p>Milk: {drinkInfo.milk}</p>
            <p>Syrups: {drinkInfo.syrup}</p>
            <p>Extra notes: {drinkInfo.notes}</p>
            <p>Created At: {drinkInfo.created_at.slice(0, 10)}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DrinkDetails;
