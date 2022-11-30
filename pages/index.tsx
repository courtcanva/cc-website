import WhyChooseUs from "../components/WhyChooseUs";
import Intro from "../components/Intro";
import Template from "../components/Template";
import useNavModal from "../hooks/useNavModal";
import Hero from "../components/Hero";
import Advantages from "../components/Advantages";
import NavBar from "../components/navbar";
import NavModal from "../components/navbar/NavModal";

export default function Home() {
  const { open: openMenuModal, close: closeMenuModal, state: navModalState } = useNavModal();
  return (
    <>
      <NavBar open={openMenuModal} state={navModalState} />
      <Hero />
      <WhyChooseUs />
      <Advantages />
      <Intro />
      <Template />
      {navModalState && <NavModal close={closeMenuModal} />}
    </>
  );
}
