import Cover from "../../Components/SheredSection/Cover";
import ItemCard from "../../Layout/ItemCard";

const MenuCategory = ({ items,title,img }) => {
  return (
    <div>
      {title && <Cover
        title={title}
        subTitle={"Would You Like to Try Our Dish"}
        img={img}
      />}
      <div className="grid md:grid-cols-2 gap-10 mt-20">
        {items.map((item) => (
          <ItemCard key={item._id} item={item}></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
