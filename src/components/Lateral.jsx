import { Image, Nav } from "react-bootstrap";
import { GoHome } from "react-icons/go";
import { TbFriends } from "react-icons/tb";
import { BiChat } from "react-icons/bi";
import { BiParty } from "react-icons/bi";
import { RiCalendar2Line } from "react-icons/ri";

const Lateral = () => {
  return (
    <div className="lateral">
      <div className="d-flex justify-content-center">
        <Image src="/public/I'LLBE LOGO.webp" alt="logo" width={200} className="mt-5" roundedCircle />
      </div>

      <Nav.Link href="/" className="d-flex justify-content-center homeLink">
        <GoHome className="go-home" />
        <h5 className=" ms-1 text-white">HOME</h5>
      </Nav.Link>
      <Nav.Link href="/amici" className="d-flex justify-content-center mt-2">
        <TbFriends className="go-home" />
        <h5 className=" ms-1 text-white">AMICI</h5>
      </Nav.Link>
      <Nav.Link href="/chat" className="d-flex justify-content-center mt-2">
        <BiChat className="go-home" />
        <h5 className=" ms-1 text-white">CHAT</h5>
      </Nav.Link>
      <Nav.Link href="/eventi" className="d-flex justify-content-center mt-2 ">
        <BiParty className="go-home" />
        <h5 className=" ms-1 text-white">EVENTI</h5>
      </Nav.Link>

      <Nav.Link href="/calendar" className="d-flex justify-content-center mt-2 ">
        <RiCalendar2Line className="go-home" />
        <h5 className=" ms-1 text-white">CALENDARIO</h5>
      </Nav.Link>
    </div>
  );
};

export default Lateral;
