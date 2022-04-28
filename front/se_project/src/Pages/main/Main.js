import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import art from "../../assets/images/art.png";
// import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Footer from '../../components/footer/Footer';
// import Header from '../../components/header/Header';
import NavBar from '../../components/header/NavBar';

import Paginate from '../../components/pagination/Paginate';
import SearchBar from '../../components/search-bar/SearchBar';

import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlineDislike } from 'react-icons/ai';



export default function Main() {

	const [price, setPrice] = useState(0)



	useEffect(() => {
		setPrice(300000)
	});


	return (
		<>
			<NavBar />

			{/* <Breadcrumb /> */}

			<SearchBar />




			<div className='line-1'></div>


			<div style={{ width: "70vw", margin: "3rem auto" }}>
				<Row xs={1} md={2} lg={3} className="g-4">
					{Array.from({ length: 6 }).map((_, idx) => (
						<Col>


							<Card style={{backgroundColor: "#ecfdfc",   boxShadow: "3px 5px 5px rgb(174, 174, 174)"}}>
								<Card.Img variant="top" src={art} />
								<Card.Body>
									<Card.Title style={{ color: "#bb1542", fontWeight: "bold" }}> نام اثر </Card.Title>
									<Card.Text style={{ fontSize: "14px" }}>
										نام هنرمند
									</Card.Text>

<br/>
									<div style={{ display: "flex", justifyContent: "space-between" }}>


										<div>
											<Card.Text style={{ fontSize: "14px" }}>
												<AiOutlineLike size={20} />
												<span style={{ fontSize: "13px" }}>10</span>
												&nbsp;	&nbsp;
												<span style={{ fontSize: "13px" }}>20</span>
												<AiOutlineDislike size={20} />

											</Card.Text>
										</div>


										<div>
											<Card.Text style={{ fontSize: "14px" }}>
												<p > {price} <p style={{ fontSize: "12px" }}> تومان </p></p>

											</Card.Text>
										</div>

									</div>


								</Card.Body>
							</Card>


							{/* <Card>
  <Card.Img variant="top"  src={logo}  />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
 */}


						</Col>
					))}
				</Row>
			</div>


			<Paginate />

			<Footer />
		</>
	)
}
