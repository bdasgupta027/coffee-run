import { useState, useEffect } from "react";
import { supabase } from "../client";
import Card from "../components/Card";
import Summary from "../components/Summary";

function Home() {
  const controller = new AbortController();
  const [drinkList, setDrinkList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("Drinks")
        .select()
        .order("created_at", { ascending: true });
      setDrinkList(data);
    };
    fetchData();
    // console.log(crewList)
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="Home">
      <br/>
      <h2>List of Drinks</h2>
      <Summary data={drinkList}/>
      <br/>
      <div className="Drinks">
        {drinkList &&
          drinkList.map((drink) => (
            <Card
              key={drink.id}
              id={drink.id}
              name={drink.name}
              drinkFor = {drink.drinkFor}
              type={drink.type}
              ice={drink.ice}
              milk={drink.milk}
              syrup={drink.syrup}
              notes={drink.notes}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;