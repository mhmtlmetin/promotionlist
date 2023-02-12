import React from "react";
import { useEffect, useState} from "react";
import {useLocation} from 'react-router-dom';
import axios from "axios";
function Detail({...props}) {
    const [data, SetData] = useState([]);
    const location = useLocation()
  const { from } = location.state;
    useEffect(() => {
      const fetchData = async () => {
        const config = {
          headers: {
            "X-Country-Id": "TR",
            "X-Language-Id": "TR",
          },
        };
        const response = await axios.get(
          `https://api.extrazone.com/promotions?Id=${from}`,
          config
        );
        SetData(response.data);
        console.log(response.data);
      };
      fetchData();
    }, []);
    return (
        <>
        <p>detail work</p>
        </>
    )
}

export default Detail;