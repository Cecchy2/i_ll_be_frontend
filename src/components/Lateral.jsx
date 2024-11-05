import { Button, Form, Image } from "react-bootstrap";
import { GoHome } from "react-icons/go";
import { TbFriends } from "react-icons/tb";
import { BiChat } from "react-icons/bi";
import { BiParty } from "react-icons/bi";

const Lateral = () => {
  return (
    <div className="lateral">
      <div className="text-center mt-5">
        <Image src="/public/ILLBE LOGO.png" width={100} />
        <div className="d-flex justify-content-center mt-5">
          <GoHome className="go-home" />
          <h5 className=" ms-1 text-white">HOME</h5>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <TbFriends className="go-home" />
          <h5 className=" ms-1 text-white">AMICI</h5>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <BiChat className="go-home" />
          <h5 className=" ms-1 text-white">CHAT</h5>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <BiParty className="go-home" />
          <h5 className=" ms-1 text-white">EVENTI</h5>
        </div>

        <Form className="w-50 m-auto mt-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Cerca per nome o email " />
          </Form.Group>
          <Button variant="outline-info" type="submit">
            Cerca
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Lateral;
