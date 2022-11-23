import HeroContainer from "../components/hero/HeroContainer";
import WhyChooseUs from "../components/WhyChooseUs";
import {Poppins } from '@next/font/google'

const poppins = Poppins({weight: ['300','400','500','600','700','800','900']})

export default function Home() {
  return <div className={poppins.className}>
  <HeroContainer />
  <WhyChooseUs />
  </div>;
}
