import { Input } from "../../components/Input";
import { Label } from "../../components/Label";
import { Main } from "./styles";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Button } from "../../components/Button";
import { useState } from "react";
import { Title } from "../../components/Title";
import { useAuth } from "../../data/hooks/useAuth";
import { useParent } from "../../data/hooks/useParent";
import Loader from "../../components/Loader";
import { useAuthContext } from "../../data/hooks/useAuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFamily } from "../../data/hooks/useFamily";

const Family = () => {
  const authContext = useAuthContext();
  const parent = useParent();
  const family = useFamily();
  const history = useHistory();
  const location = useLocation();

  const [familyCode, setFamilyCode] = useState("");
  const [plantName, setplantName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      familyCode: familyCode,
      userId: location?.state,
    };
    const family = await parent.addToFamily(data);
    family
      ? toast.success("Família encontrada!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      : toast.error("Família não encontrada", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
    family && history.push("/login");
  }

  async function handleClick() {
    const data = {
      name: plantName,
      userId: location?.state,
    };
    const res = await family.createFamily(data);

    res
      ? toast.success("Família criada!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      : toast.error("Error ao criar família", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
    res &&
      setTimeout(() => {
        history.push("/login");
      }, 2000);
  }

  return (
    <>
      <ToastContainer />
      <Main hide1={!familyCode?.length > 0} hide2={!plantName?.length > 0}>
        <div>
          <div className="title">
            <Title>Código da família:</Title>
            <h3>
              Sua ou suas plantinhas já tem uma família? Se sim digite o código,
              se não aperte em "nova família".
            </h3>
          </div>
          <form onSubmit={(e) => handleSubmit(e)} className="inputWrapper">
            <Label>Código da família:</Label>
            <Input
              onChange={(e) => setFamilyCode(e.target.value)}
              placeholder="Código da família"
            />
            <div>
              <Button type="submit">Entrar para família</Button>
            </div>
          </form>
          <span>OU</span>
          <section>
            <div>
              <h2>Crie uma nova família:</h2>
              <br />
              <Label>Nome da plantinha:</Label>
              <Input
                onChange={(e) => setplantName(e.target.value)}
                placeholder="Nome da plantinha"
              />
              <br />
              <Button onClick={() => handleClick()} type="button">
                Criar
              </Button>
            </div>
          </section>
        </div>
      </Main>
    </>
  );
};

export default Family;
