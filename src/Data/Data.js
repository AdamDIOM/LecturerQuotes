import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import "./Data.css";

export default function Data(){

    

    const [data, setData] = useState({message:[
        {"fields":{"Quote":"| - Loading","Who":"","Date":""}, "index":0},
    ]});
    
    async function getDataFromDB(){
        await fetch(`https://adamdrummond.api.stdlib.com/lq@dev/?data=true`)
            .then((response) => response.json())
            .then((data) => {
                // data.message.map((e) => {
                //     console.log(e);
                // });
                setData(data);
            });
            return true;
    }

    useEffect(() => {
        getDataFromDB();
      }, [])

    return(
        <Row className="data">
            <h1>Quotes</h1>
            {data.message.map((e) => (
                <div className="quote" key={e.index}>{e.fields.Quote} - {e.fields.Lecturer} | {e.fields.Date}</div>
            ))}
        </Row>
    )
}