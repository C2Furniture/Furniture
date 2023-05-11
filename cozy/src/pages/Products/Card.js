import products from "../../products.json";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../styles files/style products/card.css";
import { DataCardContext } from "./Context";
import axios from "axios";

function Card(props) {
  const navigate = useNavigate("/");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  console.log(data);

  useEffect(() => {
    axios.get("https://mocki.io/v1/2bdea504-cb31-41bd-bee6-d03426b2c97b")
    .then((response) => {
      setData(response.data.products);
      setFilteredData(response.data.products);
      console.log(response.data.products);
    });
  }, []);

  const checked = props.checked;
  useEffect(() => {
    if (checked[0] !== undefined) {
      const filteredData = data.filter((element) =>
        checked.includes(element.category)
      );
      setFilteredData(filteredData);
    } else {
      setFilteredData(data);
    }
  }, [checked]);


  const { dataCard,updateValue } = useContext(DataCardContext)
  function handlecard(index) {
    updateValue(filteredData[index])
    navigate("/prodect");
  }

  return (
    <>
      <div className="conCard">
        {filteredData.map((element, index) => {
          return (
            <>
              <div
                className="cardd"
                onClick={() => {
                  handlecard(index);
                }}
              >
                <img src={element.img} />
                <h3>{element.name}</h3>
                <p>{element.category}</p>
                <p className="price ">{element.price} JD</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Card;
