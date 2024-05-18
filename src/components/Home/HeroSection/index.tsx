// Style
import styles from "./HeroSection.module.css";
// Image
import ProfilePicture from "@assets/Images/Profile.png";

export default function HeroSection() {
  return (
    <section className="flex flex-row justify-between items-center z-10 relative min-h-[90vh] overflow-hidden">
      <div className={`${styles.heroRight}`}></div>

      <div className="w-full flex flex-col space-y-10 ">
        <div className="flex flex-col space-y-1 w-full ">
          <span className="text-[41px] text-palette-primary-yellow">
            HELLO!
          </span>
          <h1 className="text-[120px] text-white font-bold">I'M MOBIN</h1>
          <p className="text-white opacity-50 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            perferendis, omnis, fugiat sit veritatis minima rerum repellendus
            dolore, eaque iusto quae voluptatem ut sequi! Id ab omnis nemo sed
            sapiente? Hic enim corrupti quidem explicabo dignissimos
            consequuntur maiores id, necessitatibus molestias iure consequatur
            quaerat itaque cum laboriosam suscipit velit unde repellat ratione
            non animi dolore. Suscipit molestias nesciunt quod quia.
          </p>
        </div>
        <button className="bg-palette-primary-yellow rounded-2xl py-4 w-2/3 ">
          Download Resume
        </button>
      </div>
      <div className="w-full z-20">
        <img src={ProfilePicture} />
      </div>
    </section>
  );
}
