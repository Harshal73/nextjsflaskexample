import React , {useState, useEffect} from 'react'

function index(){
  const [message, setMessege] = useState("messege");
  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then((response) => response.json())
      .then((data) => {

      setMessege(data.message);
      setPeople(data.people);
      console.log(data.people);
      });
  }, []);

 return (
  <div>
    <div>{message}</div>

    {people.map((person, index) => (
      <div key={index}> {person}</div>
    ))}
  </div>
 );
}
export default index;
 