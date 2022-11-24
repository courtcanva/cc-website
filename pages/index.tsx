import HeroContainer from "../components/Hero/HeroContainer";
import WhyChooseUs from "../components/WhyChooseUs";


import Template from '../components/Template';

export default function Home() {
  return (
    <>
      {/* To test scroll animation, uncomment the line below
      <div className="h-screen">123321</div> */}
      <Template />
    
  <HeroContainer />
  <WhyChooseUs />
  </>
  );
}
