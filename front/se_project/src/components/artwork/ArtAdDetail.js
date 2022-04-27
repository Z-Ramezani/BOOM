import React from 'react'
import { Button, Card } from 'react-bootstrap'
import "./ArtAdDetail.css"
import logo from "../../assets/images/logo.png";
// import Slider from '../slider/Slider';
import ArtworkSlider from '../artworkSlider/ArtworkSlider';
import CommentCard from '../comments/CommentCard';

import "../../assets/globals.css"
import TitleLine from '../title-line/TitleLine';

export default function ArtAdDetail() {
	return (
		<div>
			<div className='adCard'>
				<Card style={{ display: "flex", justifyContent: "space-between" }}>

					<Card.Body>
						<Card.Text>

							<div className='artAd-inputs'>
								<label> نام اثر:</label>
								<input type="text" className='artAd-inp' />
							</div>

							<div className='artAd-inputs'>
								<label> ابعاد اثر:</label>
								<input type="number" className='artAd-inp' />
								<span> * </span>
								<input type="number" className='artAd-inp' />
								<span>سانتی متر</span>
							</div>

							<div className='artAd-inputs'>
								<label>  سبک کار:</label>
								<input type="text" className='artAd-inp' />
							</div>

							<div className='artAd-inputs'>
								<label>  متریال استفاده شده:</label>
								<input type="text" className='artAd-inp' />
							</div>

							<div className='artAd-inputs'>
								<label>  تاریخ ایجاد اثر: </label>
								<input type="number" className='artAd-inp ' />
								<span> / </span>
								<input type="number" className='artAd-inp ' />
								<span> / </span>
								<input type="number" className='artAd-inp ' />
							</div>

							<div className='artAd-price'>
								<p>999,000 تومان</p>
							</div>

							<div className='artAd-inputs'>

								<label>  توضیحات تکمیلی:</label>
								<input type="text" className='artAd-inp' />
							</div>

						</Card.Text>
					</Card.Body>



					<ArtworkSlider />

				</Card>
			</div>


			<div className='owner'>
				<div className='owner-inputs'>
					<div>
						<label> نام و نام خانوادگی صاحب اثر:</label>
						<input type="text" className='artAd-inp' />
					</div>

					<div>
						<label>  راه ارتباطی:</label>
						<input type="text" className='artAd-inp' />
					</div>
				</div>
			</div>


		<TitleLine lineTitle=" نظرات کارشناسان " />


			<CommentCard />
			<CommentCard />
		</div>

	)
}
