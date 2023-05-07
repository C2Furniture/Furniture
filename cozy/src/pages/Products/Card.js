import products from "../../products.json";
import { useState, useEffect,createContext } from "react";
import "../styles files/style products/card.css";


const UserContext = createContext();


function Card(props) {
  const [data, setData] = useState(products.products);
  const [filteredData, setFilteredData] = useState(products.products);

  const checked = props.checked;
  useEffect(() => {
    if (checked[0] !== undefined) {
        const filteredData = data.filter((element) => checked.includes(element.category));
        setFilteredData(filteredData);
    }else{
        setFilteredData(data);
    }
  }, [checked]);


  return (
    <>
      <div className="conCard">
        {filteredData.map((element) => {
          return (
            <>
              <div className="card">
                <img src={element.img} />
                <h3>{element.name}</h3>
                <p>{element.price} JD</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Card;
