import { Parallax } from "react-parallax";

const Cover = ({ img, title, subTitle }) => {
  return (
    <div>
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
      >
        <div className="z-30 relative items-center justify-center w-full h-full overflow-auto">
        <div
          className="inset-0 h-[500px] bg-cover bg-center"
         
        ></div>
        <div className="absolute inset-0  z-30  flex flex-col items-center justify-center">
          <div className="shadow-2xl rounded-lg w-[700px]  h-[300px] bg-cover bg-center">
            <div className="relative bg-black h-full w-full bg-opacity-60 rounded-tr-lg rounded-br-lg">
              <div className="p-8">
                <h1 className="text-5xl text-white font-bold text-center mt-16">
                  {title}
                </h1>
                <p className="text-center font-normal text-lg text-white mt-4 uppercase">
                  {subTitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Parallax>
      
    </div>
  );
};

export default Cover;
