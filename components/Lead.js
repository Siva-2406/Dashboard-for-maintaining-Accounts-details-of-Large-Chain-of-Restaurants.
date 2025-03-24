import React,{useState, useContext} from 'react';
import { DataContext } from "../context/DataProvider";


const Lead = () => {
     const [data, setData] = useState({});
      const { project,setProject } = useContext(DataContext);
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
            setProject([...project, data]);
        
          };
  return (
    <div>
        <h1>Lead</h1>
        <form  onSubmit={handleClick}>
            <h1>create project</h1>
            <input type='text' name='project' placeholder='Project name: '  onChange={handleChange}/>
            <input type='text' name='pType' placeholder='Project type: '  onChange={handleChange}/>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default Lead