import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="https://i.ibb.co/hxvY3QhB/pexels-ollivves-1433052.jpg"
        alt="travel hero"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
};

export default Hero;
