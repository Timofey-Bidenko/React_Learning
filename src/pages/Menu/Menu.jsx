import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Item from "../../components/Item";
import CircularLoading from "../../components/CircularLoading";

import "./Menu.css";

function MenuPage() {
  const [fetchData, error, isLoading] = useFetch("https://react-fast-pizza-api.onrender.com/api/menu");

  const [data, setData] = useState(fetchData);
  useEffect(() => setData(fetchData), [fetchData])

  if (isLoading) {
    return <CircularLoading />;
  }
  if (error) {
    return <p className="error">Something went wrong. Please try again.</p>;
  }
  if (!data || !data.data) {
    return <p className="error">Order not found</p>;
  }

  return (
    <div className="menu-container">
      {data.data.map((itemInfo) => (
        <Item itemInfo={itemInfo} key={itemInfo.id} />
      ))}
    </div>
  );
}

export default MenuPage;
