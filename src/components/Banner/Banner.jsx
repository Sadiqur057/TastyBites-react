import bannerImg from "../../assets/images/banner-img.png";
const bannerStyle = {
  backgroundImage: `url(${bannerImg})`,
};
const Banner = () => {
  return (
    <div style={bannerStyle} className="w-[90%] md:w-5/6 lg:w-4/5 mx-auto bg-cover bg-center rounded-2xl">
      <div className="w-full  text-center font-lexend rounded-2xl p-6 md:p-14 lg:p-32">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">Discover an exceptional cooking class tailored for you!</h1>
          <p className="text-sm md:text-base lg:text-lg font-light mt-4 md:mt-6 mb-6 lg:md-10 text-[#ffffffd9]">
          Discover secrets to great food with personalized help and hands-on practice. Lets cook up some tasty fun together and make tasty meals with expert.
          </p>
          <div className="flex gap-4 md:gap-7 justify-center">
            <button className="bg-c-primary btn rounded-3xl border-none hover:bg-emerald-500 ">Explore Now</button>
            <button className="btn btn-outline text-white rounded-3xl"> Our Feedback</button>
          </div>
        </div>
    </div>
  );
};

export default Banner;
