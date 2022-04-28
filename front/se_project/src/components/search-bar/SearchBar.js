import React from 'react'
import { Dropdown } from 'react-bootstrap'
import search from "../../assets/images/search.png"
import "./SearchBar.css"


export default function SearchBar() {
	return (
		<div className='search-filter-container'>

			<Dropdown >
				<label style={{ fontSize: "14px" }}> فیلتر </label>
				<Dropdown.Toggle id="account-button">
					<span id="account-text" >انتخاب کنید&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
				</Dropdown.Toggle>
				<Dropdown.Menu id="dropdown-menu-filter">
					<Dropdown.Item href="/" id="dropdown-item">
						انتخاب کنید
					</Dropdown.Item>
					<Dropdown.Item href="/" id="dropdown-item">
						....
					</Dropdown.Item>
					<Dropdown.Item href="/" id="dropdown-item">
						....
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>


			<div className="inner-input" >
				<img className="search-icon" src={search} alt="search" />
				<input
					id="search-inp"
					placeholder="جستجو"
				/>
			</div>


		</div>
	)
}
