import React from 'react'

export default function TitleLine(props) {
	return (
		<div>
			<div style={{ display: "flex", justifyContent: "center", marginTop:"5rem", marginBottom:"2rem" }}>
				<div className='h1-title-line'/>
				<span>{props.lineTitle}</span>
				<div className='h2-title-line' />
			</div>
		</div>
	)
}
