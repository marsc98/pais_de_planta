import { Main } from "./styles";
import { useHistory } from "react-router-dom";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import { ImLink } from "react-icons/im";
import { FaTelegram } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "../../data/hooks/useAuthContext";

const RegisterParent = () => {
  const history = useHistory();
  const authContext = useAuthContext();

  function handleClick(n) {
    navigator.clipboard.writeText(
      n === 1
        ? "https://t.me/pais_de_plantas_bot?start=/start"
        : authContext?.familyCode
    );
    toast.success(n === 1 ? "Link copiado!!" : "Código copiado", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <Main>
      <ToastContainer />
      <div className="title">
        <Title>Adicionar membro:</Title>
      </div>
      <section className="telegram">
        <h3>
          As notificações seram enviadas via telegram, para recebe-lás inicie
          uma conversa com nosso bot e aparte em start. Ele pedirá um código 
          que já está na sua área de transferência, ou seja, já demos crtl c,
          é só você dar crtl v lá no telegram quando ele pedir o código da família!.
        </h3>
        <a href="https://t.me/pais_de_plantas_bot?start=/start">
          <Button
            onClick={() => {
              navigator.clipboard.writeText(authContext?.familyCode);
            }}
            type="button"
            white
          >
            <FaTelegram className="telegramIcon" /> Chame o bot
          </Button>
        </a>
      </section>
      <section className="telegram">
        <h3>
          Para adicionar mais algum parente para sua plantinha envia o link
          abaixo:
        </h3>
        <Button
          white
          type="button"
          onClick={() => {
            handleClick(1);
          }}
        >
          <ImLink className="linkIcon" />
          Copie o link
        </Button>
      </section>
      <section>
        <h3>Código da família: {`${authContext?.familyCode}`}</h3>
        <Button
          white
          type="button"
          onClick={() => {
            handleClick(2);
          }}
        >
          Copiar
        </Button>
      </section>
      <div className="buttonWrapper">
        <Button cancel type="button" onClick={() => history.goBack()}>
          Cancelar
        </Button>
      </div>
    </Main>
  );
};

export default RegisterParent;
