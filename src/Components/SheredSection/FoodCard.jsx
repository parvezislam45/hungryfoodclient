

const FoodCard = ({item}) => {
    const {name,recipe,image,price}=item;
    return (
      
       
          <div className="container flex justify-center">
            <div className="w-[424px] h-[541px] py-5">
              <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                <img className="w-full h-full" src={image} alt="" />
                <div className="py-6 px-8 rounded-lg bg-white">
                  <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">{name}</h1>
                  <p className="text-gray-700 tracking-wide">{recipe}</p>
                  <button className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Buy Now</button>
                </div>
                <div className="absolute top-2 right-2 py-2 px-4 bg-black rounded-lg">
                  <span className="text-md text-white">${price}</span>
                </div>
              </div>
            </div>
          </div>
     
    );
};

export default FoodCard;