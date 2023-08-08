import SectionTitle from "../../../Components/SheredSection/SectionTitle";
import Slider from "react-slick";
import { useState } from "react";
import { useEffect } from "react";
const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <section>
      <SectionTitle
        subHeading={"What Our Client Say"}
        mainHeading={"Testimonial"}
      />
      <div>
        <Slider {...settings}>
          {reviews.map((item) => (
            <section key={item._id} className="p-6">
              <div className="container max-w-xl mx-auto">
                <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-900 dark:text-gray-100">
                  <img
                    src="https://source.unsplash.com/random/100x100?4"
                    alt=""
                    className="w-20 h-20 rounded-full dark:bg-gray-500"
                  />
                  <blockquote className="max-w-lg text-lg italic font-medium text-center">
                    {item.details}
                  </blockquote>
                  <div className="text-center dark:text-gray-400">
                    <p>{item.name}</p>
                    <p>CEO of Company Co.</p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
