

const ItemCard = ({item}) => {
    const {name,recipe,image,price}=item;
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius:"0 200px 200px 200px"}} className="w-[100px]" src={image} alt="" />
            <div>
                <h3 className="uppercase text-2xl">----------- {name} ---------------</h3>
                <p className="text-lg">{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default ItemCard;