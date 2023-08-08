import FoodCard from "../../Components/SheredSection/FoodCard";


const OrderTab = ({items}) => {
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-5 mt-10">
                {
                    items.map(item =><FoodCard
                    key={item._id}
                    item ={item}
                    />)
                }
            </div>
        </div>
    );
};

export default OrderTab;