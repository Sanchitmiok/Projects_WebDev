"use client";
import CountUp from "react-countup";
const counts = [
  {
    num: 10,
    text: "Year of experience",
  },
  {
    num: 20,
    text: "Technologies mastered",
  },
  {
    num: 30,
    text: "Project done",
  },
  {
    num: 40,
    text: "Code commits",
  },
];
const Count = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
      <div className="flex flex-wrap gap-6 max-w-[80vw]
       mx-auto xl:max-w-none">
        {counts.map((item, index) => {
          return(
            <div className="flex-1 flex gap-4 items-center justify-start xl:justify-start">
            <CountUp end={item.num}
            duration={5}
            delay={2}
            className="text-3xl xl:text-6xl font-semibold"/>
            <p className={`${item.text.length > 15 ?"max-w-[100px]":"max-w-[150px]:"} leading-snug text-white/80`}>{item.text}</p>
            </div>
          )
        })}
      </div>
      </div>
    </section>
  );
};

export default Count;
