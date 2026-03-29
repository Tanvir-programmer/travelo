import { getServerSession } from "next-auth";
import ContactPage from "./_components/Contact";
import Hero from "./_components/Hero";
import Packages from "./_components/Packages";
import PriorityPage from "./_components/PriorityPage";
import Reviews from "./_components/Reviews";

import TopDestinations from "./_components/TopDestinations";
import Trustpoint from "./_components/Trustpoint";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home({}) {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <Hero />
      <Packages />
      <TopDestinations />
      <PriorityPage />
      <Trustpoint />
      <Reviews />
      <ContactPage />
    </div>
  );
}
