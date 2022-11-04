import { useState } from "react";
import { Button, Col, Container, Dropdown, Form, Row } from "react-bootstrap";
import "./Main.css";

export default function Main(){
    const d = new Date();
    const date = d.getFullYear() + "-" + (d.getMonth() < 9 ? "0" + (d.getMonth()+1) : d.getMonth()+1) + "-" + (d.getDate() < 10 ? "0" + d.getDate() : d.getDate());

    const DEF_LECTURER = "Select Lecturer...";
    const DEF_QUOTE = "Enter Quote";
    const [lecturer, setLecturer] = useState(DEF_LECTURER);
    const [quote, setQuote] = useState(DEF_QUOTE);

    const [dateDisplay, setDateDisplay] = useState(date);
    const [customDate, setCustomDate] = useState();

    const [selectedDate, setSelectedDate] = useState(date);

    const [buttonDisabled, setButtonDisabled] = useState(false);

    const lecturers = ["Kostadin", "Adi", "Ali", "Vahab", "Vini"]

    async function PingTwilio(quote, lecturer, date){
        
        // alert(quote + lecturer + date);

        if(lecturer === DEF_LECTURER || quote === DEF_QUOTE || quote === ""){
            alert("Ensure that lecturer and quote are both set")
        }
        else{
            setButtonDisabled(true);

            await fetch(`https://lecturerquotes-6778.twil.io/quote?quote=${quote}&lecturer=${lecturer}&date=${date}`, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'no-cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                }
            });

            await fetch(`https://adamdrummond.api.stdlib.com/lq@dev/?quote=${quote}&lecturer=${lecturer}&date=${date}`)

            alert("Done!");
            setButtonDisabled(false);
        }
    }

    return(
        <Container className="main">
            <Row className="lecturerRow">
                {lecturers.map((l, index)=>{
                    return <Col xs={6} className={"lecturerCol " + l} key={l}>
                                <Button className="lecturerButton" onClick={ e => setLecturer(l)}>{l}</Button>
                            </Col>
                })}
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <Dropdown className="dropdownWrapper">
                        <Dropdown.Toggle className="dateDropdown">
                            {dateDisplay}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item className="dropdownItem" onClick={e => {
                                setDateDisplay(date);
                                setSelectedDate(date);
                                }}>{date}</Dropdown.Item>
                            <Dropdown.Item className="dropdownItem" onClick={e => {
                                setDateDisplay(customDate);
                                setSelectedDate(customDate);
                                }}>Custom</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col xs={12} md={6} className="lecturerCol">
                    {/* <Button className="lecturerButton"> */}

                    <Form.Group className="">
                        <Form.Control className="lecturerButton" type="date" name="customDate" placeholder="Select Custom Date" onChange={e => {
                            setCustomDate(e.target.value);
                            setDateDisplay(e.target.value);
                            setSelectedDate(e.target.value);
                        }} /> 
                    </Form.Group>
                    {/* </Button> */}
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <input className="textInput" onChange={e => setQuote(e.target.value)}></input>
                </Col>
                <Col xs={12}>
                    <Button disabled={buttonDisabled} className="lecturerButton" onClick={e => {PingTwilio(quote, lecturer, selectedDate)}}>Submit</Button>
                </Col>
            </Row>
            <h2>"{quote}" - {lecturer} {selectedDate}</h2>
        </Container>
    )
}