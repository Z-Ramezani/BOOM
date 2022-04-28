import React, { Component } from 'react'
import Footer from '../../components/footer/Footer'
// import Header from '../../components/header/Header'
// import Slider from '../../components/slider/Slider'
import "./Roles.css"
import "../../assets/globals.css"
import Button from '../../components/button/Button'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import { Col, Form, Row } from 'react-bootstrap'
import NavBar from '../../components/header/NavBar'


export default class Roles extends Component {

	render() {
		return (
			<div >
				{/* <Header /> */}
				<NavBar />

				{/* <Slider /> */}
				<Breadcrumb first="صفحه اصلی" second="ثبت نام" active="به عنوان هنرمند یا کارشناس" />


				<div className='cus-form-container'>
					<Form>
						<Row className="mb-3" xs={1} md={2}>
							<Form.Group as={Col} style={{ display: "flex" }}>
								<Form.Label className='role-label'>نام و نام خانوادگی:</Form.Label>
								<Col sm="5">
									<Form.Control type="text" id="general-inp" />
								</Col>
							</Form.Group>
							<br /><br />
							<Form.Group as={Col} style={{ display: "flex" }}>
								<Form.Label className='role-label'>کد ملی:</Form.Label>
								<Col sm="5">
									<Form.Control type="number" id="general-inp" />
								</Col>
							</Form.Group>
						</Row>


						<Row className="mb-3" xs={1} md={2}>
							<Form.Group as={Col} style={{ display: "flex" }}>
								<Form.Label className='role-label'>سال تولد:</Form.Label>
								<Col sm="5">
									<Form.Control type="number" id="general-inp" />
								</Col>
							</Form.Group>
							<br /><br />
							<Form.Group as={Col} style={{ display: "flex" }}>
								<Form.Label className='role-label'>شماره تماس:</Form.Label>
								<Col sm="5">
									<Form.Control type="number" id="general-inp" />
								</Col>
							</Form.Group>
						</Row>


						<Row className="mb-3" xs={1} md={2}>
							<Form.Group as={Col} style={{ display: "flex" }}>
								<Form.Label className='role-label'> ایمیل: </Form.Label>
								<Col sm="5">
									<Form.Control type="email" id="general-inp" />
								</Col>
							</Form.Group>
							<br /><br />
							<Form.Group as={Col} style={{ display: "flex" }}>
								<Form.Label className='role-label'>  راه ارتباطی جهت  <br /> نمایش در آگهی: </Form.Label>
								<Col sm="5">
									<Form.Control type="text" id="general-inp" />
								</Col>
							</Form.Group>
						</Row>


						<Row className="mb-3" md={2} lg={1}>
							<Form.Group as={Col} style={{ display: "flex" }}>
								<Form.Label className='role-label'> آدرس:</Form.Label>
								<Form.Control type="text" id="general-inp" />
							</Form.Group>
						</Row>


						<Row className="mb-3" xs={1} md={2}>
							<Form.Group as={Col} style={{ display: "flex" }}>
								<Form.Label className='role-label'> رمز عبور:</Form.Label>
								<Col sm="5">
									<Form.Control type="password" id="general-inp" />
								</Col>
							</Form.Group>
							<br /><br />
							<Form.Group as={Col} style={{ display: "flex" }}>
								<Form.Label className='role-label'> تکرار رمز عبور: </Form.Label>
								<Col sm="5">
									<Form.Control type="password" id="general-inp" />
								</Col>
							</Form.Group>
						</Row>




						<Row className="mb-3" xs={1} md={2}>
							<div className='radio-btns'>

								<p style={{ marginTop: "1rem" }}>جنسیت:</p>
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
				<div className='buttons'>


					<Button btnTitle="بازنشانی" />
					<Button btnTitle="ثبت نام به عنوان هنرمند" />
					<Button btnTitle="ثبت نام به عنوان کارشناس" />
				</div>

				<Footer />
			</div>
		)
	}
}
