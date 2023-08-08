import Slider from "react-slick";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
  
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img className=""
            src="https://www.ansto.gov.au/sites/default/files/styles/hero_image_2z/public/hero-images/Healthy%20food.jpg?h=10d202d3&itok=yuZT70xV"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://i.postimg.cc/QMWzxJz2/photo-1497888329096-51c27beff665.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://i.postimg.cc/7LMgVCJC/photo-1485963631004-f2f00b1d6606.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
