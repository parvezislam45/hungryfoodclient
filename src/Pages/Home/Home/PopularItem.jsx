import SectionTitle from "../../../Components/SheredSection/SectionTitle";
import ItemCard from "../../../Layout/ItemCard";
import useMenu from "../../../Hooks/useMenu";



const PopularItem = () => {
    const [menu]=useMenu()
    const popularItem = menu.filter(item =>item.category == "popular");
    return (
        <div className="mb-10">
           <SectionTitle
            subHeading={"Check it Out"}
           mainHeading={"From Our Menu"}
          /> 
          <div className="grid md:grid-cols-2 gap-10 mt-20">
         {
            popularItem.map(item => <ItemCard
            key={item._id}
            item={item}
            ></ItemCard>)
         }
          </div>

          
        </div>
    );
};

export default PopularItem;