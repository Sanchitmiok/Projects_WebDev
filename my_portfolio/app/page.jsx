import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Count from "@/components/Count";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiDownloadCloud } from "react-icons/fi";

// import CVDownloadButton from "@/components/CVDownloadButton"
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-6">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Software Developer</span>
            <h1 className="h2 mb-6">
              Hello i'm <br />
              <span className="text-accent">Sanchit Mishra</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Computer Science Engineering student at Delhi College of
              Engineering (DCE), class of 2026. Proficient in C++, skilled in
              Data Structures and Algorithms, and developing expertise in MERN
              Stack. Passionate about
              building dynamic web applications.
            </p>
            {/* Btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href="https://drive.google.com/file/d/16pMNQ1kISgHYQLFFAWLq2bIrXnaX95gz/view">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownloadCloud />
                </Button>
              </Link>
              {/* <CVDownloadButton/> */}
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* image */}
          <div>
            <Photo className="order-1 xl:order-none mb-2 xl:mb-0" />
          </div>
        </div>
      </div>
      <Count />
    </section>
  );
};

export default Home;
