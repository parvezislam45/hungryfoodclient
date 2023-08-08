import { Helmet } from "react-helmet-async";
import Cover from "../../Components/SheredSection/Cover";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SheredSection/SectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category == "dessert");
  const pizza = menu.filter((item) => item.category == "pizza");
  const salad = menu.filter((item) => item.category == "salad");
  const soup = menu.filter((item) => item.category == "soup");
  const offered = menu.filter((item) => item.category == "offered");
  return (
    <div>
      <Helmet>
        <title>Hungry Hunter | Menu</title>
      </Helmet>
      <Cover
        title={"Our Menu"}
        subTitle={"Would You Like to Try Our Dish"}
        img={`https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80`}
      />
      <SectionTitle subHeading="Don't Miss" mainHeading="Our Offer" />
      <MenuCategory items={offered} />
      <MenuCategory
        items={dessert}
        title="Dessert"
        img={`https://plus.unsplash.com/premium_photo-1678715022988-417bbb94e3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80`}
      />
      <MenuCategory
        items={pizza}
        title="Pizza"
        img={`https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80`}
      />
      <MenuCategory
        items={salad}
        title="Salad"
        img={`https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80`}
      />
      <MenuCategory
        items={soup}
        title="Soup"
        img={`https://images.unsplash.com/photo-1607528971899-2e89e6c0ec69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80`}
      />
    </div>
  );
};

export default Menu;
