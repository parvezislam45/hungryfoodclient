import Slider from "react-slick";
import SectionTitle from "../../Components/SheredSection/SectionTitle";

const Category = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
  };
  return (
    <section>
        <SectionTitle
         subHeading={'From 11 am to 10 pm'}
         mainHeading={'Order Online'}
        
        ></SectionTitle>
        <Slider {...settings}>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src='https://img.freepik.com/free-photo/burger-hamburger-cheeseburger_505751-3697.jpg?t=st=1691304100~exp=1691304700~hmac=2e04e814df807b17927bcf7d1cbfd18b3d9b78604c04ce1978cfb0ad052dec94' alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Name</h2> 
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src='https://img.freepik.com/free-photo/burger-hamburger-cheeseburger_505751-3697.jpg?t=st=1691304100~exp=1691304700~hmac=2e04e814df807b17927bcf7d1cbfd18b3d9b78604c04ce1978cfb0ad052dec94' alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Name</h2> 
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src='https://img.freepik.com/free-photo/burger-hamburger-cheeseburger_505751-3697.jpg?t=st=1691304100~exp=1691304700~hmac=2e04e814df807b17927bcf7d1cbfd18b3d9b78604c04ce1978cfb0ad052dec94' alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Name</h2> 
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src='https://img.freepik.com/free-photo/burger-hamburger-cheeseburger_505751-3697.jpg?t=st=1691304100~exp=1691304700~hmac=2e04e814df807b17927bcf7d1cbfd18b3d9b78604c04ce1978cfb0ad052dec94' alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Name</h2> 
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src='https://img.freepik.com/free-photo/burger-hamburger-cheeseburger_505751-3697.jpg?t=st=1691304100~exp=1691304700~hmac=2e04e814df807b17927bcf7d1cbfd18b3d9b78604c04ce1978cfb0ad052dec94' alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Name</h2> 
        </div>
      </div>
     
    </Slider>
    </section>
   
  );
};

export default Category;
