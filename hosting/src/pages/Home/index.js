import { Label } from "../../components/Label";
import { Main } from "./styles";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../data/hooks/useAuthContext";
import Flor from "../../assets/flor.png";
import FlorSad from "../../assets/flor-sad.png";
import Flor2 from "../../assets/flor2.png";
import Flor2Sad from "../../assets/flor2-sad.png";
import Flor3 from "../../assets/flor3.png";
import Flor3Sad from "../../assets/flor3-sad.png";
import { FaArrowRight } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Title } from "../../components/Title";
import { useFamily } from "../../data/hooks/useFamily";

const Home = () => {
  const authContext = useAuthContext();
  const history = useHistory();
  const family = useFamily();

  const [allFlowers, setAllFlowers] = useState(false);

  const [flower, setFlower] = useState(false);
  const [measurements, setMeasurements] = useState([]);
  const [flowerName, setFlowerName] = useState(false);

  const flowers = [Flor, Flor2, Flor3];
  const sadFlowers = [FlorSad, Flor2Sad, Flor3Sad];

  useEffect(() => {
    const num = Math.floor(Math.random() * 3);
    let f;
    if (
      allFlowers[flowerName]?.measurements[
        allFlowers[flowerName]?.measurements?.length - 1
      ].measurement <= 60 ||
      allFlowers[flowerName]?.measurements[
        allFlowers[flowerName]?.measurements?.length - 1
      ].measurement > 90
    ) {
      f = sadFlowers.find((res, index) => index === num);
    } else {
      f = flowers.find((res, index) => index === num);
    }
    setFlower(f);

    const measurements = [];
    const allMeasurements = measurements?.length - 1;
    const measurementsRange = allMeasurements - 500;
    allFlowers[flowerName]?.measurements.map((data, index) => {
      if (index > measurementsRange) measurements.push(data);
    });
    setMeasurements(measurements);
  }, [flowerName]);

  useEffect(() => {
    family
      .getPlants(authContext?.familyCode)
      .then((plants) => setAllFlowers(plants));
  }, []);

  useEffect(() => {
    setFlowerName(Object.keys(allFlowers)[1]);
  }, [allFlowers]);

  const dataH = {
    labels: measurements.map((data) => {
      const date = new Date(data?.date);
      return date?.getDate()+"/"+date.getMonth();
    }),
    datasets: [
      {
        label: "medidas",
        data: measurements.map((data) => data.measurement),
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

  const dataI = {
    labels: measurements.map((data) => {
      const date = new Date(data?.date);
      return date?.getDate()+"/"+date.getMonth();
    }),
    datasets: [
      {
        label: "medidas",
        data: measurements.map((data) => data.isIluminated),
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
        text: "Gr??fico da humidade",
      },
    },
  };

  return (
    <Main>
      <section className="health">
        <div className="setFlowerWrapper">
          <div>
            <Label green>Escolha qual florzinha quer monitorar:</Label>
            <select onClick={(e) => setFlowerName(e.target.value)}>
              <option />
              {Object.keys(allFlowers)?.map((flower) => {
                return (
                  <>
                    <option value={flower}>{flower}</option>
                  </>
                );
              })}
            </select>
            <br />
          </div>
        </div>
        <h3>{flowerName} deve manter n??veis de humidade entre 60% e 80%.</h3>
        <div className="levels">
          <div>
            <h2>??ltima medi????o:</h2>
            <span>
              Umidade: +-{" "}
              {flowerName &&
                allFlowers[flowerName]?.measurements[
                  allFlowers[flowerName]?.measurements?.length - 1
                ].measurement}
              %
            </span>
            <span>
              Luminosidade:{" "}
              {flowerName &&
              allFlowers[flowerName]?.measurements[
                allFlowers[flowerName]?.measurements?.length - 1
              ].isIluminated
                ? "Boa"
                : "N??o est?? boa"}
            </span>
          </div>
          <img src={flower} alt="imagem ilustrativa da sa??de da planta" />
        </div>
        <section>
          <div className="boardTitle">
            <Title>??ltima medi????o</Title>
          </div>
          <div className="boardContent">
            <div>
              <h4>Umidade:</h4>
              <h4>
                +-
                {flowerName &&
                  allFlowers[flowerName]?.measurements[
                    allFlowers[flowerName]?.measurements?.length - 1
                  ].measurement}
                %
              </h4>
            </div>
            <div>
              <h4>Luz Solar:</h4>
              <h4>
                {flowerName &&
                allFlowers[flowerName]?.measurements[
                  allFlowers[flowerName]?.measurements?.length - 1
                ].isIluminated
                  ? "Boa"
                  : "N??o est?? boa"}
              </h4>
            </div>
          </div>
        </section>
        <h4>
          Atente-se aos n??veis extremos de umidade. Quando o sensor indicar 90%
          de humidade, o n??vel de umidade est?? muito alto, quando a umidade
          estiver muito baixa o sensor ir?? indicar um valor por volta de 60%.{" "}
        </h4>
      </section>
      <section className="graphicsWrapper">
        <button onClick={() => history.push("/parents")} className="parents">
          Pais da planta
          <FaArrowRight />
        </button>
        <h3 className="graphTitle">
          Acompanhamento da umidade dos ??ltimos 7 dias:
        </h3>
        <section className="graphic">
          <Line options={options} data={dataH} />
        </section>
        <h3 className="graphTitle">
          Acompanhamento da luminosidade dos ??ltimos 7 dias:
        </h3>
        <section className="graphic">
          <Line options={options} data={dataI} />
        </section>
      </section>
    </Main>
  );
};

export default Home;
