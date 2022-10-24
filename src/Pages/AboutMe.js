import React from 'react'
import { Col, Container, Image, ListGroup, Row } from 'react-bootstrap'
import { NavbarGeneral } from '../Components/Navbar'

export const AboutMe = () => {
  return (
    <div>
        <header>
            <NavbarGeneral/>
        </header>
        
        <div>
                <div className="main-content">
                  <div className="container mt-2">
                    <Row>
                      <Col className="col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                        <div className="profile-card card rounded-lg shadow p-4 p-xl-5 mb-4 text-center position-relative overflow-hidden">
                          <div className="banner"></div>
                          <img src="https://avatars.githubusercontent.com/u/65980001?v=4" alt="" className="img-circle  mb-3"/>
                          <h3 className="mb-4">Kevin Veliz</h3>
                          <p className='text-justify'>
                            Desarrollador web, especializado en React. Me considero una persona eficaz y autodidacta. Además de tener responsalibidad
                            en todo lo que realizo.
                          </p>

                          <div className="social-links d-flex justify-content-center">
                          <div class="row align-items-start">
                            <h5>Programming Lenguagues</h5>
                            <div class="col">
                              JavaScript
                            </div>
                            <div class="col">
                              HTML | CSS
                            </div>
                            <div class="col">
                              Python
                            </div>
                          </div>

                          
                          </div>
                          <div className="social-links d-flex justify-content-center mt-2">
                          <div class="row align-items-start">
                            <h5>Frameworks</h5>
                            <div class="col">
                              React.JS
                            </div>
                            <div class="col">
                              Node.js
                            </div>
                          </div>
                          </div>

                          <div className="text-left mb-2">
                            <h5>Contacs</h5>
                            <p className="mb-2"><i className="fa fa-envelope mr-2"></i> veliz.kevin.o19@hotmail.com</p>
                            <p className="mb-2"><i className="fa fa-phone mr-2"></i> +593 96 814 4873</p>
                            <p className="mb-2"><i className="fa fa-globe mr-2"></i> <a href='https://github.com/KevinVeliz'>GitHub</a></p>
                          </div>

                        </div>
                      </Col>
                    </Row>

                  </div>
                </div>
              
        </div>

    </div>
  )
}
