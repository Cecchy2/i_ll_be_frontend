import { Image, Nav } from "react-bootstrap";
import { GoHome } from "react-icons/go";
import { TbFriends } from "react-icons/tb";
import { BiChat } from "react-icons/bi";
import { BiParty } from "react-icons/bi";
import { RiCalendar2Line } from "react-icons/ri";

const Lateral = () => {
  return (
    <div>
      {/* ***********************************************Sidebar per desktop***********************************************  */}
      <div className="lateral d-none d-lg-block">
        <div className="d-flex justify-content-center">
          <Image src="/I'LLBE LOGO.webp" alt="logo" width={200} className="mt-5" roundedCircle />
        </div>

        <Nav.Link href="/" className="d-flex justify-content-center homeLink">
          <GoHome className="go-home" />
          <h6 className="ms-1 text-white">HOME</h6>
        </Nav.Link>
        <Nav.Link href="/amici" className="d-flex justify-content-center mt-2">
          <TbFriends className="go-home" />
          <h6 className="ms-1 text-white">AMICI</h6>
        </Nav.Link>
        <Nav.Link href="/chat" className="d-flex justify-content-center mt-2">
          <BiChat className="go-home" />
          <h6 className="ms-1 text-white">CHAT</h6>
        </Nav.Link>
        <Nav.Link href="/eventi" className="d-flex justify-content-center mt-2 ">
          <BiParty className="go-home" />
          <h6 className="ms-1 text-white">EVENTI</h6>
        </Nav.Link>
        <Nav.Link href="/calendar" className="d-flex justify-content-center mt-2 ">
          <RiCalendar2Line className="go-home" />
          <h6 className="ms-1 text-white">AGENDA</h6>
        </Nav.Link>
      </div>

      {/* ***********************************************Navbar per mobile*********************************************** */}
      <div className="d-lg-none fixed-bottom bg-dark p-2">
        <Nav className="d-flex justify-content-around">
          <Nav.Link href="/">
            <GoHome className="text-white" size={24} />
          </Nav.Link>
          <Nav.Link href="/amici">
            <TbFriends className="text-white" size={24} />
          </Nav.Link>
          <Nav.Link href="/chat">
            <BiChat className="text-white" size={24} />
          </Nav.Link>
          <Nav.Link href="/eventi">
            <BiParty className="text-white" size={24} />
          </Nav.Link>
          <Nav.Link href="/calendar">
            <RiCalendar2Line className="text-white" size={24} />
          </Nav.Link>
        </Nav>
      </div>
    </div>
  );
};

export default Lateral;
