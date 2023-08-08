import { useState } from "react";
import Cover from "../../Components/SheredSection/Cover";
import useMenu from "../../Hooks/useMenu";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OrderTab from "./OrderTab";

const Order = () => {
  const [tabs, setTabs] = useState(0);
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category == "dessert");
  const pizza = menu.filter((item) => item.category == "pizza");
  const salad = menu.filter((item) => item.category == "salad");
  const soup = menu.filter((item) => item.category == "soup");
  const drink = menu.filter((item) => item.category == "drinks");
  return (
    <div>
      <Cover
        title={"Our Shop"}
        subTitle={"Would You Like to Try Our Dish"}
        img={`https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80`}
      />
      <div className="mt-10 text-center">
      <Tabs defaultIndex={tabs} onSelect={(index) => setTabs(index)}>
        <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
            <OrderTab items={salad}/>
        </TabPanel>
        <TabPanel>
        <OrderTab items={pizza}/>
        </TabPanel>
        <TabPanel>
        <OrderTab items={soup}/>
        </TabPanel>
        <TabPanel>
        <OrderTab items={dessert}/>
        </TabPanel>
        <TabPanel>
        <OrderTab items={drink}/>
        </TabPanel>
    </Tabs>
      </div>
    </div>
  );
};

export default Order;
