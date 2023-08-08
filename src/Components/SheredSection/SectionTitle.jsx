

const SectionTitle = ({mainHeading,subHeading}) => {
    return (
        <div>
            <p className="text-white text-2xl font-semibold text-center mt-5">{subHeading}</p>
           <h1 className="text-white text-5xl font-bold text-center">{mainHeading}</h1> 
           
        </div>
    );
};

export default SectionTitle;