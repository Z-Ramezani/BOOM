
import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ArtworkSlider.css"

// import logo from "../../assets/images/logo.png";


class ArtworkSlider extends React.Component {
	render() {
		return (

			<div className="slider-container"  >


				<Carousel >
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://picsum.photos/500/300?img=1"
							alt="First slide"
						/>

					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://picsum.photos/500/300?img=2"
							alt="Second slide"
						/>

					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://picsum.photos/500/300?img=3"
							alt="Third slide"
						/>

					</Carousel.Item>
				</Carousel>
			</div>

		)
	};
}
export default ArtworkSlider;