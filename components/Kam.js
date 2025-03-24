import React,{useContext,useState} from 'react'
import { DataContext } from "../context/DataProvider";


const Kam = () => {
    
    const { dataLogin,setDataLogin } = useContext(DataContext);
      const [data, setData] = useState({});
      const handleChange = (e) => {
        e.preventDefault();
        setData((pre) => {
          return {
            ...pre,
            [e.target.name]: e.target.value,
          };
        });
      };
      const handleClick = (e) => {
        e.preventDefault();
        setDataLogin([...dataLogin, data]);
        console.log(dataLogin);
      };
  return (
    <div>
      <h1>Kam</h1>
      <form onSubmit={handleClick} className="form">
        <input
          type="text"
          name="role"
          placeholder="Enter role name:"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password:"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="roleId"
          placeholder="Enter role Id:"
          onChange={handleChange}
          required
        />
        <button type="submit">Add</button>
      </form>
     
    </div>
  )
}

export default Kam;