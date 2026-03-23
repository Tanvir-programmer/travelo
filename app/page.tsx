import { getServerSession } from "next-auth";
import ContactPage from "./_components/Contact";
import Hero from "./_components/Hero";
import Packages from "./_components/Packages";
import PriorityPage from "./_components/PriorityPage";
import Reviews from "./_components/Reviews";

import TopDestinations from "./_components/TopDestinations";
import Trustpoint from "./_components/Trustpoint";
import UserCard from "./_components/UserCard";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home({}) {
  const session = await getServerSession(authOptions);
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
      <div>
        <p>User Server</p>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
    </div>
  );
}
