import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Main.css";

export default function Main(){
    const d = new Date();
    const date = (d.getDay() < 10 ? "0" + d.getDay() : d.getDay()) + "" + (d.getMonth() < 10 ? "0" + d.getMonth() : d.getMonth()) + "" + d.getFullYear();

    const [lecturer, setLecturer] = useState("Select Lecturer...");
    const [quote, setQuote] = useState("Enter Quote");

    const lecturers = ["Kostadin", "Adi", "Ali", "Vahab"]

    async function PingTwilio(quote, lecturer, date){
        alert(quote + lecturer + date);

        await fetch(`https://lecturerquotes-6778.twil.io/quote?quote=${quote}&lecturer=${lecturer}&date=${date}`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            }
          });

        alert("ping!");
    }

    return(
        <Container className="main">
            <Row className="lecturerRow">
                {lecturers.map((l, index)=>{
                    return <Col sm={12} md={6} className={"lecturerCol " + l}>
                                <Button className="lecturerButton" onClick={ e => setLecturer(l)}>{l}</Button>
                            </Col>
                })}
            </Row>
            <Row>
                <Col sm={12}>
                    <input className="textInput" onChange={e => setQuote(e.target.value)}></input>
                </Col>
                <Col sm={12}>
                    <Button className="lecturerButton" onClick={e => {PingTwilio(quote, lecturer, date)}}>Submit "{quote}" - {lecturer} {date}</Button>
                </Col>
            </Row>
            <h2>{quote} - {lecturer} {date}</h2>
        </Container>
    )
}