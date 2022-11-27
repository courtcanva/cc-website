import HeroContainer from "../components/hero/HeroContainer";
import WhyChooseUs from "../components/WhyChooseUs";
import Intro from "../components/Intro";
import Template from "../components/Template";
import NavBar from "../components/navbar";
import useModal from "../components/navbar/modal";

export default function Home() {
  const { open: openMenuModal, Modal } = useModal();
  return (
    <>
      <NavBar open={openMenuModal} />
      <HeroContainer />
      <WhyChooseUs />
      <Intro />
      <Template />
      <Modal />
    </>
  );
}
