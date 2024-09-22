// Style
import "./HeroSection.css";
// Image
import ProfilePicture from "@assets/Images/Profile.png";
import LogoJS from "@assets/icons/1000_F_515640231_XLCISv1i3BzrmmpQrzEk5DOVpfLhQ0W5-transformed-removebg-preview.png";
export default function HeroSection() {
  return (
    <section
      id="#"
      className="flex flex-col-reverse md:flex-row justify-between items-center z-10 relative min-h-[90vh] overflow-y-hidden py-10 space-y-10 md:py-0 md:space-y-10"
    >
      <div className="w-full flex flex-col space-y-10 items-center md:items-start">
        <div className="flex flex-col space-y-0 md:space-y-6 w-full flex-wrap ">
          <span className="text-base md:text-[27px] lg:text-[41px] text-palette-primary-yellow ">
            HELLO!
          </span>
          <h1 className="text-5xl md:text-[45px] lg:text-[70px] xl:text-[120px] text-white font-bold">
            I'M MOBIN
          </h1>
          <p className="text-white opacity-85 max-w-xl pt-10">
            As a Front-end Developer with over 4 years of experience. Increased page load speeds by 15%, leading to higher
conversion rates. Skilled in building scalable front-end architectures. Achieved a 20% decrease in delivery time and a 15%
performance boost. Committed to continuous learning and seeking a collaborative role in a dynamic engineering team to drive
innovative solutions.
          </p>
        </div>
        <button className="bg-palette-primary-yellow rounded-2xl py-4 w-2/3">
          Download Resume
        </button>
      </div>
      <div className="w-full z-20 flex items-center justify-center">
        <img src={ProfilePicture} className="w-full md:w-4/5 h-auto" />
      </div>
    </section>
  );
}
