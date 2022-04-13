import { Input } from "../../components/Input";
import { Label } from "../../components/Label";
import { Main } from "./styles";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../data/hooks/useAuthContext";
import { useAuth } from "../../data/hooks/useAuth";
import Loader from "../../components/Loader";
import Flor from "../../assets/flor.png";
import FlorSad from "../../assets/flor-sad.png";
import Flor2 from "../../assets/flor2.png";
import Flor2Sad from "../../assets/flor2-sad.png";
import Flor3 from "../../assets/flor3.png";
import Flor3Sad from "../../assets/flor3-sad.png";
import { FaArrowRight } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Title } from '../../components/Title';

const Home = () => {
  const auth = useAuth();
  const authContext = useAuthContext();
  const history = useHistory();

  const [flower, setFlower] = useState(false);
  const [sadFlower, setSadFlower] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState({
    ok: false,
    error: false,
  });

  const flowers = [Flor, Flor2, Flor3];
  const sadFlowers = [FlorSad, Flor2Sad, Flor3Sad];

  useEffect(() => {
    const num = Math.floor(Math.random() * 3);
    const f = flowers.find((res, index) => index === num);
    setFlower(f);
  }, []);

  console.log(flower);

  const firstCtx = document.getElementById("firstCtx");
  // const firstCtx = document.querySelector('#firstCtx').getContext('2d');
  // const secondCtx = document.getElementById('secondChart');

  console.log(firstCtx);

  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  return (
    <Main>
      <section className="health">
        <h3>
          Lembre-se de manter sua planta com nível de umidade entre: 400 e 600.
        </h3>
        <div className="levels">
          <div>
            <h2>Última medição:</h2>
            <span>Umidade: +- 200</span>
            <span>Luminosidade: +- 200</span>
          </div>
          <img src={flower} alt="imagem ilustrativa da saúde da planta" />
        </div>
        <section>
          <div className="boardTitle"><Title>Última medição</Title></div>
          <div className="boardContent">
            <div>
              <h4>Umidade:</h4>
              <h4>+-200</h4>
            </div>
            <div>
              <h4>Luz Solar:</h4>
              <h4>OK</h4>
            </div>
          </div>
        </section>
        <h4>
          Atente-se aos níveis extremos de umidade. Quando o sensor indicar 200
          o nível de umidade está muito alto, quando a umidade estiver muito
          baixa o sensor irá indicar um valor por volta de 1200.{" "}
        </h4>
      </section>
      <section className="graphicsWrapper">
        <button onClick={() => history.push("/parents")} className="parents">
          Pais da planta
          <FaArrowRight />
        </button>
        <h3 className="graphTitle">
          Acompanhamento da umidade dos últimos 7 dias:
        </h3>
        <section className="graphic">
          <Line options={options} data={data} />
        </section>
        <h3 className="graphTitle">
          Acompanhamento da luminosidade dos últimos 7 dias:
        </h3>
        <section className="graphic">
          <Line options={options} data={data} />
        </section>
      </section>
    </Main>
  );
};

export default Home;
