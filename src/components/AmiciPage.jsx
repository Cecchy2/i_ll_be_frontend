import { useEffect } from "react";
import { getAllUtenti } from "../redux/actions/amiciActions";
import { useDispatch, useSelector } from "react-redux";

const AmiciPage = () => {
  const dispatch = useDispatch();
  const utenti = useSelector((state) => state.amicizie.utenti);
  console.log(utenti);

  useEffect(() => {
    dispatch(getAllUtenti());
  }, [dispatch]);
  return (
    <div className="main">
      <h1>AmiciPage</h1>
    </div>
  );
};

export default AmiciPage;
