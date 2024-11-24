import "../Menu.css";
import data from "../data";
import MenuHeader from "./MenuHeader";
import Menu from "./Menu";

function MenuPage() {
  return (
    <>
      <MenuHeader />
      <Menu data={data} />
    </>
  );
}

export default MenuPage;
