import { Input } from "../../components/Input";
import { Label } from "../../components/Label";
import { Main } from "./styles";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../../components/Button";
import { useState } from "react";
import { Title } from "../../components/Title";
import { useAuth } from "../../data/hooks/useAuth";
import { useParent } from "../../data/hooks/useParent";
import Loader from "../../components/Loader";

const Register = () => {
  const auth = useAuth();
  const parent = useParent();
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState({
    ok: false,
    error: false,
  });

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange({ target }) {
    const { id, value } = target;
    setData({ ...data, [id]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await auth?.createAccount(data);
      await parent?.createParent(data);
      setLoaded({ ok: true, error: false });
      setTimeout(() => {
        history.push({ pathname: "/family", state: data?.email });
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
      <div className="title">
        <Title>Cadastro:</Title>
      </div>
      <section className="inputs">
        <Label for="name">Nome:</Label>
        <Input
          value={data.name}
          onChange={handleChange}
          required
          id="name"
          name="name"
        />
        <Label for="email">E-mail:</Label>
        <Input
          value={data.email}
          onChange={handleChange}
          required
          id="email"
          name="email"
          type="email"
        />
        <Label for="password">Senha:</Label>
        <Input
          value={data.password}
          onChange={handleChange}
          required
          id="password"
          name="password"
          type="password"
        />
      </section>
      <section className="register">
        <Link to="/login">Já tem cadastro? Faça login</Link>
      </section>
      <Button type="submit">Cadastrar</Button>
      {loading && <Loader loaded={loaded} />}
    </Main>
  );
};

export default Register;
