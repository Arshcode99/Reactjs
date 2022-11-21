import React from 'react'
import styles from '../styles/careers.module.css'
import Img from '../public/Img.png' 
import Image from 'next/image'
import { Button, Container,Row,Col, Accordion} from 'react-bootstrap'
const Careers = () => {


  return (
    <>
    <section className={styles.Carrers} >
      <Container className="mt-5">
        <Row>
          <Col></Col>
        </Row>
      </Container>
      <Container fluid className="mt-5">
        <Row>
          <Col className="text-center ">
          <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.slidesharecdn.com%2Freactpp-140913113910-phpapp02%2F95%2Freactjs-code-impact-1-638.jpg%3Fcb%3D1410608441&f=1&nofb=1&ipt=679e721793164e01fc446fcb68264d0e095f084f31c9dd10a1fba221e004e325&ipo=images' style={{width:"82%", height:"55vh"}}></img>
          </Col>
        </Row>
      </Container>

      <Container className='mt-3 '>
        <Row>
          <Col>
            <h1 className='text-center'>Carrers</h1>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis pariatur quod, velit, ducimus necessitatibus illum perspiciatis dicta quaerat temporibus vitae quas repudiandae veritatis ex, porro voluptates. Deserunt magnam quisquam commodi vitae laudantium soluta nulla minus nostrum adipisci illum! Illo optio ratione labore ea a consectetur laudantium, sequi quibusdam, deleniti quaerat suscipit beatae saepe rerum odio dolore dolorum molestiae exercitationem! Earum culpa beatae excepturi esse exercitationem obcaecati aliquid nulla itaque possimus reprehenderit mollitia vitae deserunt voluptates a similique ipsa libero molestias minima dicta inventore, quisquam ea eveniet. Aspernatur accusantium ad quia iste corporis sint excepturi rem ea iure. Esse, rerum maxime!
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5 mb-5" >
        <Row>
          <Col md={5}>
            <h1>Job Proflies</h1> 
            <hr/>
          </Col>
        </Row>
       
        <Row className="mb-3 ">
          <Col md={5} className="mt-5" >
            <Accordion >
                <Accordion.Item eventKey="0" className="shadow">
                  <Accordion.Header><span className="fw-semibold">Sales</span></Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    <div className='mt-3'><Button>Apply</Button></div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="shadow mt-3">
                  <Accordion.Header><span className="fw-semibold">Frontend developer</span></Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    <div className='mt-3'><Button>Apply</Button></div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="shadow mt-3">
                  <Accordion.Header><span className="fw-semibold">Backend developer</span></Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    <div className='mt-3'><Button>Apply</Button></div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="shadow mt-3">
                  <Accordion.Header><span className="fw-semibold">Backend developer</span></Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    <div className='mt-3'><Button>Apply</Button></div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className="shadow mt-3">
                  <Accordion.Header><span className="fw-semibold">Backend developer</span></Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    <div className='mt-3'><Button>Apply</Button></div>
                  </Accordion.Body>
                </Accordion.Item>
                
            </Accordion>
          </Col>
          <Col md >
            <Image src={Img} className="mt-3" alt="Hey There?" />
          </Col>
        </Row>
      </Container>
      <Container className="mb-5">
        <Row>
          <Col>
            
          </Col>
        </Row>
      </Container>      
    </section> 
    
    </>
  )
}

export default Careers
