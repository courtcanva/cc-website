import WhyChooseUs from "../components/WhyChooseUs";
import Intro from "../components/Intro";
import Template from "../components/Template";
import NavBar from "../components/navbar";
import useNavModal from "../components/navbar/useNavModal";
import NavModal from "../components/navbar/NavModal";

export default function Home() {
  const { open: openMenuModal, close: closeMenuModal, state: navModalState } = useNavModal();
  return (
    <>
      <NavBar open={openMenuModal} />
      <HeroContainer />
      <WhyChooseUs />
      <Intro />
      <Template />
      {navModalState && <NavModal close={closeMenuModal} />}
    </>
  );
}
