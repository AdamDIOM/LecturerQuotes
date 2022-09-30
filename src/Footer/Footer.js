import { Col, Row } from "react-bootstrap";
import "./Footer.css";

export default function Footer(){
    return(
            <Row className="footer">
                <Col sm={{span: 4, order: 1}} xs={{span: 6, order: 1}} className="footerCol ">
                    <a href="https://github.com/AdamDIOM/LecturerQuotes/issues" target="_blank" rel="noreferrer">Report a bug!</a>
                </Col>
                <Col sm={{span: 4, order: 2}} xs={{span: 12, order: 3}} className="highlightCol">
                    <a href="https://github.com/AdamDIOM/LecturerQuotes" target="_blank" rel="noreferrer">Open source: Contribute here!</a>
                </Col>
                <Col sm={{span: 4, order: 3}} xs={{span: 6, order: 2}} className="footerCol">
                    <a href="https://adamd.fyi" target="_blank" rel="noreferrer">Get in touch</a>
                </Col>
            </Row>
    )
}