import { useEffect, useState } from "react";
import Item from "../components/Item";

import "../Menu.css";

function MenuPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://react-fast-pizza-api.onrender.com/api/menu"
        );
        if (!response.ok) {
          throw new Error("Retrieving Data Failed!");
        }
        const retrivedData = await response.json();
        setData(retrivedData.data);
      } catch (error) {
        console.log(error.Message);
      }
    };

    getData();
  }, []);

  return (
    <div className="menu-container">
      {data.map((itemInfo) => (
        <Item itemInfo={itemInfo} key={itemInfo.id} />
      ))}
    </div>
  );
}

export default MenuPage;
