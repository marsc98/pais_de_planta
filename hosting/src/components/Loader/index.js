import { Main } from "./styles";
import { TailSpin } from "react-loader-spinner";
import { BsCheckLg } from "react-icons/bs";
import { BiErrorCircle } from "react-icons/bi";

const Loader = (props) => {
  return (
    <Main>
      {props?.loaded?.ok && <BsCheckLg className="ok"/>}
      {props?.loaded?.error && <BiErrorCircle className="error"/>}
      {!props?.loaded?.ok && !props?.loaded?.error && (
        <TailSpin
          ariaLabel="loading-indicator"
          type="TailSpin"
          color="#c4c4c4"
          height={100}
          width={100}
        />
      )}
    </Main>
  );
};

export default Loader;
