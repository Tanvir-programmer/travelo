import ContactPage from "./_components/Contact";
import Contact from "./_components/Contact";
import Hero from "./_components/Hero";
import Packages from "./_components/Packages";
import PriorityPage from "./_components/PriorityPage";
import Reviews from "./_components/Reviews";

import TopDestinations from "./_components/TopDestinations";
import Trustpoint from "./_components/Trustpoint";
import UserCard from "./_components/UserCard";

export default function Home() {
  return (
    <div>
      <UserCard></UserCard>
      <Hero></Hero>
      <Packages></Packages>
      <TopDestinations></TopDestinations>
      <PriorityPage></PriorityPage>
      <Trustpoint></Trustpoint>
      <Reviews></Reviews>
      <ContactPage></ContactPage>
    </div>
  );
}
