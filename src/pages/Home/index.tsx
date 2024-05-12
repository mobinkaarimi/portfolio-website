import Header from "@components/Header";
import styles from "./Home.module.css";
import ProfilePicture from "@assets/Images/Profile.png";
export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen  relative container mx-auto">
      <Header />
      <div className={`${styles.heroRight}`}></div>
      <section className="flex flex-row justify-between items-center z-10">
        <div className="flex flex-col space-y-1 w-full">
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
        <div className="w-full">
          <img src={ProfilePicture} />
        </div>
      </section>
    </main>
  );
}
