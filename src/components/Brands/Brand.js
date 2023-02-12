import './Brand.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Brand() {
  const [data, SetData] = useState([]);
  useEffect(()=> {
    const fetchData = async () => {
      const config = {
        headers:{
          "X-Country-Id": "TR",
          "X-Language-Id": "TR"
        }
      };
      const response = await axios.get("https://api.extrazone.com/tags/list", config);
      SetData(response.data);
      console.log(response)
    }
    fetchData();
  }, [])
  return (
    <div className="brand">
     {
        data.map(item => 
            <button className='brand-btn'>
                <img src={item.IconUrl} className="brand-icon"/>
                {item.Name}</button>
         )
     }
    </div>
  );
}

export default Brand;
