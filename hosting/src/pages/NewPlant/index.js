import { Input } from "../../components/Input";
import { Label } from "../../components/Label";
import { Main } from "./styles";
import { useHistory } from "react-router-dom";
import { Button } from "../../components/Button";
import { useState } from "react";
import { useAuthContext } from "../../data/hooks/useAuthContext";
import Loader from "../../components/Loader";
import { useFamily } from "../../data/hooks/useFamily";

const NewPlant = () => {
  const authContext = useAuthContext();
  const history = useHistory();
  const family = useFamily();

  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState({
    ok: false,
    error: false,
  });

  const [data, setData] = useState({
    name: "",
  });

  function handleChange({ target }) {
    const { id, value } = target;
    setData({ ...data, [id]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await family?.createPlant(authContext?.familyCode, data);
      setLoaded({ ok: true, error: false });
      setTimeout(() => {
        setLoading(false);
        history.push("/");
      }, 1000);
    } catch (err) {
      console.log(err.message);
      setLoaded({ ok: false, error: true });
      setLoading(false);
    }
  }

  return (
    <Main onSubmit={(e) => handleSubmit(e)}>
      <h1>Cadastre uma nova plantinha</h1>
      <section className="inputs">
        <Label for="password">Nome da plantinha:</Label>
        <Input
          defaultValue={data.name}
          onChange={handleChange}
          required
          id="name"
          name="name"
        />
      </section>
      <Button type="submit">Criar</Button>
      {loading && <Loader loaded={loaded} />}
    </Main>
  );
};

export default NewPlant;
