import Template from "../components/Template";
import NavBar from "../components/navbar";
import useModal from "../components/navbar/modal";

export default function Home() {
  const { open: openMenuModal, Modal } = useModal();
  return (
    <>
      {/* To test scroll animation, uncomment the line below
      <div className="h-screen">123321</div> */}
      <NavBar open={openMenuModal} />
      <Template />
      <Modal />
    </>
  );
}
