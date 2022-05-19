import { Main } from "./styles";
import Logo from "../../assets/Logo.svg";
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { useAuth } from "../../data/hooks/useAuth";
import { useAuthContext } from "../../data/hooks/useAuthContext";

const Header = () => {
  const [navVisibility, setNavVisibility] = useState(false);
  const auth = useAuth();
  const authContext = useAuthContext();

  return (
    <Main navVisibility={navVisibility}>
      <a href="/">
        <img src={Logo} alt="logo" />
      </a>
      {authContext?.authenticated && (
        <section className="paths">
          <a href="/parents">Pais da planta</a>
          <a href="/create-plant">Nova plantinha</a>
          <button onClick={() => auth?.logout()}>Sair</button>
        </section>
      )}
      <nav>
        <button onClick={() => setNavVisibility(!navVisibility)}>
          <hr className="hamburguer" />
        </button>

        <ul id="menu">
          <div>
            <li>
              <div>
                <a href="/parents">Pais da planta</a>
              </div>
            </li>
            <li>
              <div>
                <a href="/create-plant">Nova plantinha</a>
              </div>
            </li>
            <li>
              <div>
                <button onClick={() => auth?.logout()}>Sair</button>
              </div>
            </li>
          </div>
          <div className="socialMidia">
            <span>Desenvolvido por: Marco Antônio Santos da Silva</span>
            <a
              href="https://github.com/marsc98"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
              <span>marsc98</span>
            </a>
          </div>
        </ul>
      </nav>
    </Main>
  );
};

export default Header;
