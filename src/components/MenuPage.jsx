import MenuData from "../MenuData";
import Header from "./Header";
import Menu from "./Menu";

function MenuPage() {
  return (
    <>
      <Header />
      <Menu data={MenuData} />
    </>
  );
}

export default MenuPage;
