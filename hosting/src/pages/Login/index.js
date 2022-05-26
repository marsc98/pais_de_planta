import { Input } from "../../components/Input";
import { Label } from "../../components/Label";
import { Main } from "./styles";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../data/hooks/useAuthContext";
import { useAuth } from "../../data/hooks/useAuth";
import Loader from "../../components/Loader";

const Login = () => {
  const auth = useAuth();
  const authContext = useAuthContext();
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState({
    ok: false,
    error: false,
  });

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleChange({ target }) {
    const { id, value } = target;
    setData({ ...data, [id]: value });
  }

  useEffect(() => {
    authContext?.authenticated && history.push("/");
  }, [authContext.authenticated]); // eslint-disable-line

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const d = await auth?.login(data);
      setLoaded({ ok: true, error: false });
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (err) {
      console.log(err.message);
      setLoaded({ ok: false, error: true });
      setLoading(false);
    }
  }

  return (
    <Main onSubmit={(e) => handleSubmit(e)}>
      <h1>Login</h1>
      <section className="inputs">
        <Label for="email">E-mail:</Label>
        <Input
          defaultValue={data.email}
          onChange={handleChange}
          required
          id="email"
          name="email"
          type="email"
        />
        <Label for="password">Senha:</Label>
        <Input
          defaultValue={data.password}
          onChange={handleChange}
          required
          id="password"
          name="password"
          type="password"
        />
      </section>
      <section className="register">
        <Link to={"/register"}>Não tem cadastro? Cadastre-se</Link>
      </section>
      <Button type="submit">Entrar</Button>
      {loading && <Loader loaded={loaded} />}
    </Main>
  );
};

export default Login;
