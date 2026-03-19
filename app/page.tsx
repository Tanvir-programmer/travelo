import Hero from "./_components/Hero";
import Packages from "./_components/Packages";
import PriorityPage from "./_components/PriorityPage";
import TopDestinations from "./_components/TopDestinations";
import Trustpoint from "./_components/Trustpoint";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Packages></Packages>
      <TopDestinations></TopDestinations>
      <PriorityPage></PriorityPage>
      <Trustpoint></Trustpoint>
    </div>
  );
}
