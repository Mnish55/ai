import { LandingNavbar } from "@/components/landing-navbar";
import { UserButton } from "@clerk/nextjs";

const LandingPage = () => {
  return ( 
    <div className="h-full text-white">
      <LandingNavbar/>
    </div>
   );
}
 
export default LandingPage;