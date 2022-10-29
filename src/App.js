import { useEffect,useState } from "react";
import axios from "axios"
import "./App.css";

function App() {
  const [companyList, setList] = useState([]);

  //useEffect here ++++++++++++++++++++++++++

  useEffect(() => {
    axios.post("http://demo2211087.mockable.io/mock").then((res) => {
      console.log(res.data.companies)
      setList(res.data.companies);
    })
  },[])


  return (
    <div  className="App">
      {
        companyList.map((company,i) => (
          <div key={i} className="singleItem">
            <h4>{company.name}</h4>
            <p>{company.email}</p>
            <p>{company.status}</p>
          </div>
        ))
      }
    </div>
  );
}

export default App;
