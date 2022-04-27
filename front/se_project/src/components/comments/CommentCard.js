import React from 'react'
import "./CommentCard.css"

export default function CommentCard() {
	return (
		<div className='comment-card'>

			<div className='artAd-inputs'>
				<div style={{ marginTop: "1rem" }}>
					<label style={{ color: "#bb1542", fontWeight: "bold" }}>نام کارشناس</label>
					<br />
					<label>  توضیحات تکمیلی:</label>
				</div>
				<textarea type="text" className='comment-inp' />
			</div>
		</div>
	)
}
