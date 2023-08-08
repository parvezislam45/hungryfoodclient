import SectionTitle from "../../../Components/SheredSection/SectionTitle";
import img1 from '../../../assets/featured.jpg';
const Features = () => {
  return (
    <div style={{ 
        backgroundImage: `url("https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000")` 
      }} className="bg-fixed text-white">
      <SectionTitle
        subHeading={"----- Check It Out -----"}
        mainHeading={"From Our Menu"}
      />
      <div className="md:flex justify-center items-start pb-20 pt-12 px-36">
        <div>
          <img src={img1} alt="" />
        </div>
        <div className="md:ml-10 mt-20">
          <h4 className="text-2xl font-semibold">March 20 2023</h4>
          <h4 className="uppercase text-2xl font-semibold">Where Can we Get Some</h4>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            tenetur cumque repudiandae eveniet quod eius nobis sint, adipisci
            nostrum animi incidunt, ad fuga aliquam, delectus dolore velit sequi
            obcaecati numquam!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
