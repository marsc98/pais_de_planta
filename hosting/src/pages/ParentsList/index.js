import { Input } from "../../components/Input";
import { Label } from "../../components/Label";
import { Main, Parent } from "./styles";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";
import { Title } from "../../components/Title";
import { useAuth } from "../../data/hooks/useAuth";
import { useParent } from "../../data/hooks/useParent";
import Loader from "../../components/Loader";
import { CgAdd } from "react-icons/cg";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useFamily } from '../../data/hooks/useFamily';
import { useAuthContext } from '../../data/hooks/useAuthContext';

const ParentsList = () => {
  const auth = useAuth();
  const parent = useParent();
  const history = useHistory();
  const authContext = useAuthContext();
  const family = useFamily();

  const [loading, setLoading] = useState(false);
  const [parents, setParents] = useState();
  const [loaded, setLoaded] = useState({
    ok: false,
    error: false,
  });

  const list = [
    { name: "marco", phone: "999999999" },
    { name: "marco", phone: "999999999" },
    { name: "marco", phone: "999999999" },
    { name: "marco", phone: "999999999" },
    { name: "marco", phone: "999999999" },
    { name: "marco", phone: "999999999" },
    { name: "marco", phone: "999999999" },
  ];

  const listMap = parents?.map((parent) => {
    return (
      <Parent>
        <span>{parent?.name}</span>
        <span>{parent?.userName}</span>
      </Parent>
    );
  });

  useEffect(() => {
    family?.getFamily(authContext?.familyCode).then((res) => setParents(res?.parents))
  },[])

  return (
    <Main>
      <div className="title">
        <Title>Pais da planta:</Title>
        <h3>
          Os números cadastrados recébem as notificações sobre as plantas que
          estiverem com os sensores.
        </h3>
      </div>
      <div className="add">
        <button onClick={() => history.goBack()}>
          <IoMdArrowRoundBack /> <span>Voltar</span>
        </button>
        <button onClick={() => history.push("/parent-register")}>
          <span>Adicionar membro da família</span> <CgAdd className="addIcon"/>
        </button>
      </div>
      {listMap}
    </Main>
  );
};

export default ParentsList;
