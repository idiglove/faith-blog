import React from "react"
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import './../css/style.css';
import { Helmet } from 'react-helmet';

const Header = () => (
    <div>
        <Helmet> 
            <title>Faith Blogs</title>
            <meta name="description" content="Faith Morante - Full Stack Web Developer - Blog about Coding" />
        </Helmet>
        <StickyHeader className="sticky-header"
            header={
                <div className="header-root">
                <Container className="header-container">
                    <Row>
                        <Col><h1 className="header-title"><a href="https://idiglove.github.io">Faith Morante</a></h1></Col>
                        <Col className="home-link">
                            <h1 className="">
                                <a href="/">Home</a>
                            </h1>
                        </Col>
                    </Row>
                </Container>
                </div>
            }
            >
        </StickyHeader>
    </div>
)

export default Header