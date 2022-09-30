import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Main.css";

export default function Main(){
    const d = new Date();
    const date = (d.getDay() < 10 ? "0" + d.getDay() : d.getDay()) + "/" + (d.getMonth() < 10 ? "0" + d.getMonth() : d.getMonth()) + "/" + d.getFullYear();

    const [lecturer, setLecturer] = useState("Select Lecturer...");

    const lecturers = ["Kostadin", "Adi", "Ali", "Vahab"]

    return(
        <Container className="main">
            <Row className="lecturerRow">
                {lecturers.map((l, index)=>{
                    return <Col sm={12} md={6} className="lecturerCol">
                                <Button className="lecturerButton" onClick={ e => setLecturer(l)}>{l}</Button>
                            </Col>
                })}
            </Row>
            <p>{date} {lecturer}</p>
        </Container>
    )
}