import React, { Component } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
// import Slider from '../../components/slider/Slider'
import "../../assets/globals.css"
import "./Customer.css"


export default class Customer extends Component {
	render() {
		return (
			<div   >
				<Header />
				{/* <Slider /> */}
				<Breadcrumb first="صفحه اصلی" second="ثبت نام" active="به عنوان خریدار" />

<div className='cus-form-container'>
				<Form>
  <Row className="mb-3"  xs={1} md={2}>
    <Form.Group as={Col} style={{display: "flex"}}>
      <Form.Label>نام و نام خانوادگی:</Form.Label>
			<Col sm="5">
      <Form.Control  type="text"  id="general-inp" />
			</Col>
    </Form.Group>
		<br/><br/>
    <Form.Group as={Col}  style={{display: "flex"}}>
      <Form.Label>شماره  تماس:</Form.Label>
			<Col sm="5">
      <Form.Control  type="phone" id="general-inp" />
			</Col>    
			</Form.Group>
  </Row>


  <Row className="mb-3"  xs={1} md={2}>
    <Form.Group as={Col}  style={{display: "flex"}}>
      <Form.Label>رمز عبور:</Form.Label>
			<Col sm="5">
      <Form.Control  type="password" id="general-inp"/>
			</Col>   
			 </Form.Group>
<br/><br/>
		<Form.Group as={Col} style={{display: "flex"}}>
      <Form.Label>تکرار رمز عبور:</Form.Label>
			<Col sm="5">
      <Form.Control  type="password" id="general-inp"/>
			</Col>   
			 </Form.Group>
  </Row>


	<Row className="mb-3"  xs={1} md={2}>
	<div className='radio-btns'>

						<p style={{marginTop: "1rem"}}>جنسیت:</p>
						<div className='radio'>
							<input type="radio" id="womans" name="sexuality" value="woman" />
							<label htmlFor="womans">زن</label>
						</div>

						<div className='radio'>
							<input type="radio" id="mans" name="sexuality" value="man" />
							<label htmlFor="mans">مرد</label><br />
						</div>



					</div>
	</Row>

  {/* <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}

  {/* <Button variant="primary" type="submit">
    Submit
  </Button> */}
</Form>

</div>

				<div className='cus-buttons'>
					<button className='btnn sub-btn' type="submit">
						بازنشانی
					</button>

					<button className='btnn sub-btn' type="submit">
						ثبت
					</button>

				</div>


				<Footer />
			</div>
		)
	}
}
