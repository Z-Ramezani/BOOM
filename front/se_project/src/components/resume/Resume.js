import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import TitleLine from '../title-line/TitleLine'
import "./Resume.css"

export default function Resume() {
	return (
		<div>
			<TitleLine lineTitle=" سوابق کاری " />


			<div className='dropdowns'>
				<Dropdown >
					<label >زمینه هنری</label>
					<Dropdown.Toggle id="account-button">
						<span id="account-text" >&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
					</Dropdown.Toggle>
					<Dropdown.Menu id="dropdown-menu">
						<Dropdown.Item href="/" id="dropdown-item">
							1111
						</Dropdown.Item>
						<Dropdown.Item href="/" id="dropdown-item">
							2222
						</Dropdown.Item>
						<Dropdown.Item href="/" id="dropdown-item">
							3333
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>


				<br />



				<Dropdown >
					<label >سبک کاری</label>
					<Dropdown.Toggle id="account-button">
						<span id="account-text" >&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
					</Dropdown.Toggle>
					<Dropdown.Menu id="dropdown-menu">
						<Dropdown.Item href="/" id="dropdown-item">
							111
						</Dropdown.Item>
						<Dropdown.Item href="/" id="dropdown-item">
							222
						</Dropdown.Item>
						<Dropdown.Item href="/" id="dropdown-item">
							333
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>



				<br />

				<div>
						<label className=''>سابقه فعالیت</label>
						<input className='history'  />
						<span> &nbsp; ماه &nbsp; </span>
					</div>



			</div>



		</div>
	)
}
