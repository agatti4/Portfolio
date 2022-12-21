// import MyTerminal from "./Terminal"

import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import { SocialIcon } from 'react-social-icons';
import resume from '../../components/Resume/resume.pdf'
import me from './images/me.png'

export default function Home() {
    return (
        <div>
            <Container className="text-center" style={{ overflowX: "hidden", overflowY: "hidden" }}>
                <Row className="align-items-center align-middle justify-content-center picAndType" >
                    <Col>
                        <div className="person">
                            <div className="containerMe">
                                <img className="circle" src="" alt="circle" />
                                <img className="imgMe" alt="me" src={me} />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="typeBox">
                            <h1 className="typewriter">My Name is Anthony</h1>
                        </div>
                        <br></br>
                        <div className="typeBox">
                            <h3 className="typewriter2">I am aspiring to be</h3>
                        </div>
                        <br></br>
                        <div className="typeBox">
                            <h3 className="typewriter3 text-warning">A Software Engineer</h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                </Row>
                <Row className="resources">
                    <Col>
                        <div>
                            <a href={resume} download="resume.pdf">
                                <Button className="resumeButton primary" data-aos="fade-up"><i className="fa fa-download"></i>Resume</Button>
                            </a>
                        </div>
                        <br></br>
                        <div>
                            <SocialIcon style={{ height: 75, width: 75 }} className="social" url="https://linkedin.com/in/anthony-j-gatti/" />
                            <SocialIcon style={{ height: 75, width: 75 }} className="social" bgColor="#181818" fgColor='white' url="https://github.com/agatti4" />
                            <SocialIcon style={{ height: 75, width: 75 }} className="social" url="https://www.instagram.com/agatti4/" />
                        </div>
                    </Col>
                </Row>


            </Container>

        </div>
    )
}