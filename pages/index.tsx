import WhyChooseUs from "../components/WhyChooseUs";
import Intro from "../components/Intro";
import Template from "../components/Template";
import NavBar from "../components/Navbar";
import useNavModal from "../hooks/useNavModal";
import NavModal from "../components/Navbar/NavModal";
import Hero from "../components/Hero";
import Advantages from "../components/Advantages";

export default function Home() {
  const { open: openMenuModal, close: closeMenuModal, state: navModalState } = useNavModal();
  return (
    <>
      <NavBar open={openMenuModal} />
      <Hero />
      <WhyChooseUs />
      <Advantages />
      <Intro />
      <Template />
      {navModalState && <NavModal close={closeMenuModal} />}
    </>
  );
}
