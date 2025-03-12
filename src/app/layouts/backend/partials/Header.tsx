import React from 'react';

const HeaderMenu: React.FC = () => {
	return (
	
		<header className="header-main">
		<div className="container-fluid">
			<div className="row">
				<div className="col-6 col-sm-4 d-flex align-items-center header-left p-0">
				   <span className="header-toggle me-3">
					 <i className="iconoir-view-grid"></i>
				   </span>
				</div>

				<div className="col-6 col-sm-8 d-flex align-items-center justify-content-end header-right p-0">

					<ul className="d-flex align-items-center">

						<li className="header-cloud">
							<a aria-controls="cloudoffcanvasTops" className="head-icon"
							   data-bs-target="#cloudoffcanvasTops" data-bs-toggle="offcanvas"
							   href="#" role="button">
								<i className="iconoir-dew-point text-primary f-s-26 me-1"></i>
								<span className="f-w-600">26 <sup className="f-s-10">°C</sup></span>
							</a>

							<div aria-labelledby="cloudoffcanvasTops"
								 className="offcanvas offcanvas-end header-cloud-canvas"
								 id="cloudoffcanvasTops"
								 >
								<div className="offcanvas-body p-0">
									<div className="cloud-body">

										<div className="cloud-content-box">
											<div className="cloud-box bg-primary-900">
												<p className="mb-3">Mon</p>
												<h6 className="mt-4 f-s-13"> +29°C</h6>
												<span>
						<i className="ph-duotone  ph-cloud-fog text-white f-s-25"></i>
					  </span>
												<p className="f-s-13 mt-3"><i className="wi wi-raindrop"></i> 2%</p>
											</div>
											<div className="cloud-box bg-primary-800">
												<p className="mb-3">Tue</p>
												<h6 className="mt-4 f-s-13"> +29°C</h6>
												<span>
						<i className="ph-duotone  ph-cloud-sun text-white f-s-25"></i>
					  </span>
												<p className="f-s-13 mt-3"><i className="wi wi-raindrop"></i> 2%</p>
											</div>
											<div className="cloud-box bg-primary-700">
												<p className="mb-3 text-light">Wed</p>
												<h6 className="mt-4 f-s-13"> +20°C</h6>
												<span>
						<i className="ph-duotone  ph-sun-dim text-white f-s-25"></i>
					  </span>
												<p className="f-s-13 mt-3"><i className="wi wi-raindrop"></i> 1%</p>
											</div>
											<div className="cloud-box bg-primary-600">
												<p className="mb-3">Thu</p>
												<h6 className="mt-4 f-s-13"> +17°C</h6>
												<span>
						<i className="ph-duotone  ph-sun-dim text-white f-s-25"></i>
					  </span>
												<p className="f-s-13 mt-3"><i className="wi wi-raindrop"></i> 1%</p>
											</div>
											<div className="cloud-box bg-primary-500">
												<p className="mb-3">Fri</p>
												<h6 className="mt-4 f-s-13"> +18°C</h6>
												<span>
						<i className="ph-duotone  ph-sun-dim text-white f-s-25"></i>
					  </span>
												<p className="f-s-13 mt-3"><i className="wi wi-raindrop"></i> 1%</p>
											</div>
											<div className="cloud-box bg-primary-400">
												<p className="mb-3">Sat</p>
												<h6 className="mt-4 f-s-13"> +16°C</h6>
												<span>
						<i className="ph-duotone  ph-sun-dim text-white f-s-25"></i>
					  </span>
												<p className="f-s-13 mt-3"><i className="wi wi-raindrop"></i> 1%</p>
											</div>
											<div className="cloud-box bg-primary-300">
												<p className="mb-3">Sun</p>
												<h6 className="mt-4 f-s-13"> +29°C</h6>
												<span className="mb-3">
						<i className="ph-duotone  ph-sun-dim text-white f-s-25"></i>
					  </span>
												<p className="f-s-13 mt-3"><i className="wi wi-raindrop"></i> 1%</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>

						<li className="header-language">
							<div className="flex-shrink-0 dropdown" id="lang_selector">
								<a aria-expanded="false" className="d-block head-icon ps-0"
								   data-bs-toggle="dropdown"
								   href="#">
									<div className="lang-flag lang-en ">
				  <span className="flag rounded-circle overflow-hidden">
					<i className=""></i>
				  </span>
									</div>
								</a>
								<ul className="dropdown-menu language-dropdown header-card border-0">
									<li className="lang lang-en selected dropdown-item p-2" data-bs-placement="top"
										data-bs-toggle="tooltip" title="US">
				  <span className="d-flex align-items-center">
					<i className="flag-icon flag-icon-usa flag-icon-squared b-r-10 f-s-22"></i>
					<span className="ps-2">English</span>
				  </span>
									</li>
									<li className="lang lang-pt dropdown-item p-2" data-bs-title="tooltip" data-bs-placement="top" title="FR">
				  <span className="d-flex align-items-center">
					<i className="flag-icon flag-icon-fra flag-icon-squared b-r-10 f-s-22"></i>
					<span className="ps-2">Française </span>
				  </span>
									</li>
									<li className="lang lang-es dropdown-item p-2" data-bs-title="tooltip" data-bs-placement="top" title="UK">
				  <span className="d-flex align-items-center">
					<i className="flag-icon flag-icon-gbr flag-icon-squared b-r-10 f-s-22"></i>
					<span className="ps-2">English</span>
				  </span>
									</li>
									<li className="lang lang-es dropdown-item p-2" data-bs-title="tooltip" data-bs-placement="top" title="Ru">
				  <span className="d-flex align-items-center">
					  <i className="flag-icon flag-icon-rus flag-icon-squared b-r-10 f-s-22"></i>
					<span className="ps-2">Русская</span>
				  </span>
									</li>
									<li className="lang lang-es dropdown-item p-2" data-bs-title="tooltip" data-bs-placement="top" title="IT">
				  <span className="d-flex align-items-center">
					<i className="flag-icon flag-icon-ita flag-icon-squared b-r-10 f-s-22"></i>
					<span className="ps-2">française</span>
				  </span>
									</li>
								</ul>
							</div>

						</li>

						<li className="header-searchbar">
							<a aria-controls="offcanvasRight" className="d-block head-icon"
							   data-bs-target="#offcanvasRight" data-bs-toggle="offcanvas"
							   href="#" role="button">
								<i className="iconoir-search"></i>
							</a>

							<div aria-labelledby="offcanvasRight"
								 className="offcanvas offcanvas-end header-searchbar-canvas"
								 id="offcanvasRight"
								 >
								<div className="header-searchbar-header">
									<div className="d-flex justify-content-between mb-3">
										<form action="#" className="app-form app-icon-form w-100">
											<div className="position-relative">
												<input aria-label="Search" className="form-control search-filter"
													   placeholder="Search..."
													   type="search" />
												<i className="ti ti-search text-dark"></i>
											</div>
										</form>

										<div className="app-dropdown flex-shrink-0">
											<a aria-expanded="false"
											   className="h-35 w-35 d-flex-center b-r-15 overflow-hidden bg-light-secondary search-list-avtar ms-2"
											   data-bs-auto-close="outside" data-bs-toggle="dropdown"
											   href="#"
											   role="button">
												<i className="ph-duotone  ph-gear f-s-20"></i>
											</a>

											<ul className="dropdown-menu mb-3">
												<li className="dropdown-item mt-2">
													<a href="#">
														<h6 className="mb-0">Search Settings</h6>
													</a>
												</li>
												<li className="dropdown-item d-flex align-items-center justify-content-between">
													<a href="#">
														<h6 className="mb-0 text-secondary f-s-14">Safe Search
															Filtering</h6>
													</a>
													<div className="flex-shrink-0">
														<div className="form-check form-switch">
															<input checked
																   className="form-check-input form-check-primary"
																   id="searchSwitch"
																   type="checkbox" />
														</div>
													</div>
												</li>
												<li className="dropdown-item d-flex align-items-center justify-content-between">
													<a href="#">
														<h6 className="mb-0 text-secondary f-s-14">Search
															Suggestions</h6>
													</a>
													<div className="flex-shrink-0">
														<div className="form-check form-switch">
															<input className="form-check-input form-check-primary"
																   id="searchSwitch1"
																   type="checkbox" />
														</div>
													</div>
												</li>
												<li className="dropdown-item d-flex align-items-center justify-content-between">
													<h6 className="mb-0 text-secondary f-s-14"> Search History</h6>
													<i className="ti ti-message-circle me-3  text-success"></i>
												</li>
												<li className="dropdown-divider"></li>
												<li className="dropdown-item d-flex align-items-center justify-content-between mb-2">
													<a href="#">
														<h6 className="mb-0 text-dark f-s-14">Custom Search
															Preferences</h6>
													</a>
													<div className="flex-shrink-0">
														<div className="form-check form-switch">
															<input className="form-check-input form-check-primary"
																   id="searchSwitch2"
																   type="checkbox" />
														</div>
													</div>
												</li>
											</ul>
										</div>
									</div>
									<p className="mb-0 text-secondary f-s-15 mt-2">Recently Searched Data:</p>
								</div>
								<div className="offcanvas-body app-scroll p-0">
									<div>
										<ul className="search-list">
											<li className="search-list-item">
												<div
														className="h-35 w-35 d-flex-center b-r-15 overflow-hidden bg-light-primary search-list-avtar">
													<i className="ph-duotone  ph-gear f-s-20"></i>
												</div>
												<div className="search-list-content">
													<a href="api.html" target="_blank"><h6
															className="mb-0 text-dark">user management</h6></a>
													<p className="f-s-13 mb-0 text-secondary">#RA789</p>
												</div>
											</li>
											<li className="search-list-item">
												<div
														className="h-35 w-35 d-flex-center b-r-15 overflow-hidden bg-light-warning search-list-avtar">
													<i className="ph-duotone  ph-projector-screen-chart f-s-20"></i>
												</div>
												<div className="search-list-content">
													<a href="privacy_policy.html" target="_blank"><h6
															className="mb-0 text-dark">data visualization</h6></a>
													<p className="f-s-13 mb-0 text-secondary">#RY810</p>
												</div>
											</li>
											<li className="search-list-item">
												<div
														className="h-35 w-35 d-flex-center b-r-15 overflow-hidden bg-light-danger search-list-avtar">
													<i className="ph-duotone  ph-shield-check f-s-20"></i>
												</div>
												<div className="search-list-content">
													<a href="terms_condition.html" target="_blank"><h6
															className="mb-0 text-dark">security protocols</h6></a>
													<p className="f-s-13 mb-0 text-secondary">#ATR56</p>
												</div>
											</li>
											<li className="search-list-item">
												<div
														className="h-35 w-35 d-flex-center b-r-15 overflow-hidden bg-light-info search-list-avtar">
													<i className="ph-duotone  ph-app-window f-s-20"></i>
												</div>
												<div className="search-list-content">
													<a href="sign_in.html" target="_blank"><h6
															className="mb-0 text-dark">authentication methods</h6>
													</a>
													<p className="f-s-13 mb-0 text-secondary">#YE615</p>
												</div>
											</li>
											<li className="search-list-item">
												<div
														className="h-35 w-35 d-flex-center b-r-15 overflow-hidden bg-light-dark search-list-avtar">
													<i className="ph-duotone  ph-table f-s-20"></i>
												</div>
												<div className="search-list-content">
													<a href="data_table.html" target="_blank"><h6
															className="mb-0 text-dark">Data Table</h6></a>
													<p className="f-s-13 mb-0 text-secondary">#YE615</p>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</li>

						<li className="header-apps">
							<a aria-controls="appscanvasRights" className="d-block head-icon"
							   data-bs-target="#appscanvasRights" data-bs-toggle="offcanvas"
							   href="#" role="button">
								<i className="iconoir-key-command"></i>
							</a>

							<div aria-labelledby="appscanvasRightsLabel"
								 className="offcanvas offcanvas-end header-apps-canvas"
								 id="appscanvasRights"
								 >
								<div className="offcanvas-header">
									<h5 className="offcanvas-title" id="appscanvasRightsLabel">Shortcut</h5>
									<div className="app-dropdown flex-shrink-0">
										<a aria-expanded="false" className=" p-1" data-bs-auto-close="outside"
										   data-bs-toggle="dropdown"
										   href="#"
										   role="button">
											<i className="ph-bold  ph-faders-horizontal f-s-20"></i>
										</a>
										<ul className="dropdown-menu mb-3 p-2">
											<li className="dropdown-item">
												<a href="setting.html" target="_blank">
													Privacy Settings
												</a>
											</li>
											<li className="dropdown-item">
												<a href="setting.html" target="_blank">
													Account Settings
												</a>
											</li>
											<li className="dropdown-item">
												<a href="setting.html" target="_blank">
													Accessibility
												</a>
											</li>
											<li className="dropdown-divider"></li>
											<li className="dropdown-item border-0">
												<a aria-expanded="false" data-bs-toggle="dropdown" href="#"
												   role="button">
													More Settings
												</a>
												<ul className="dropdown-menu sub-menu">
													<li className="dropdown-item">
														<a href="setting.html" target="_blank">
															Backup and Restore
														</a>
													</li>
													<li className="dropdown-item">
														<a href="setting.html" target="_blank">
															<span>Data Usage</span>
														</a>
													</li>
													<li className="dropdown-item">
														<a href="setting.html" target="_blank">
															<span>Theme</span>
														</a>
													</li>
													<li className="dropdown-item d-flex align-items-center justify-content-between">
														<a href="setting.html" target="_blank">
															<p className="mb-0">Notification</p>
														</a>
														<div className="flex-shrink-0">
															<div className="form-check form-switch">
																<input className="form-check-input  form-check-primary"
																	   id="notificationSwitch"
																	   type="checkbox" />
															</div>
														</div>
													</li>
												</ul>
											</li>

										</ul>
									</div>
								</div>
								<div className="offcanvas-body app-scroll">
									<div className="row row-cols-3">
										<div className="d-flex-center text-center mb-3">
											<a href="product.html" target="_blank">
												 <span className="text-light-info h-45 w-45 d-flex-center b-r-15">
												   <i className="ph-duotone  ph-shopping-bag-open f-s-30"></i>
												 </span>
												<p className="mb-0 f-w-500 text-info">E-shop</p>
											</a>
										</div>
										<div className="d-flex-center text-center mb-3">
											<a href="email.html" target="_blank">
												<span className="text-light-primary h-45 w-45 d-flex-center b-r-15 position-relative">
												  <i className="ph-duotone  ph-envelope f-s-30"></i>
													<span className="position-absolute top-space-5 start-100 translate-middle p-1 bg-primary-dark rounded-circle animate__animated animate__fadeIn animate__infinite animate__fast"></span>
												</span>
												<p className="mb-0 f-w-500 text-primary">Email</p>
											</a>
										</div>
										<div className="d-flex-center text-center mb-3">
											<a href="chat.html" target="_blank">
												 <span className="text-light-danger h-45 w-45 d-flex-center b-r-15 position-relative">
												   <i className="ph-duotone  ph-chat-circle-text f-s-30"></i>
													 <span className="position-absolute top-space-5 start-100 translate-middle badge rounded-pill bg-success badge-notification">
															99+
															<span className="visually-hidden">unread messages</span>
													 </span>
												 </span>
												<p className="mb-0 f-w-500 text-danger">Chat</p>
											</a>
										</div>
										<div className="d-flex-center text-center mb-3">
											<a href="project_app.html" target="_blank">
												 <span className="text-light-warning h-45 w-45 d-flex-center b-r-15">
													 <i className="ph-duotone ph-projector-screen-chart f-s-30"></i>
												 </span>
												<p className="mb-0 f-w-500 text-warning">Project</p>
											</a>
										</div>
										<div className="d-flex-center text-center mb-3">
											<a href="invoice.html" target="_blank">
												<span className="text-light-secondary h-45 w-45 d-flex-center b-r-15">
													<i className="ph-duotone ph-scroll f-s-30"></i>
												</span>
												<p className="mb-0 f-w-500 text-secondary">Invoice</p>
											</a>
										</div>
										<div className="d-flex-center text-center mb-3">
											<a href="blog.html" target="_blank">
												<span className="text-light-primary h-45 w-45 d-flex-center b-r-15">
													<i className="ph-duotone ph-notebook f-s-30"></i>
												</span>
												<p className="mb-0 f-w-500 text-primary">Blog</p>
											</a>
										</div>
										<div className="d-flex-center text-center mb-3">
											<a href="profile.html" target="_blank">
												<span className="text-light-primary h-45 w-45 d-flex-center b-r-15 position-relative">
													<i className="ph-duotone ph-users-three f-s-30"></i>
													<span className="position-absolute top-space-5 start-100 translate-middle badge rounded-pill bg-danger badge-notification">
														<i className="ti ti-bell-ringing"></i>
													</span>
												</span>
												<p className="mb-0 f-w-500 text-primary">Profile</p>
											</a>
										</div>
										<div className="d-flex-center text-center mb-3">
											<a href="gallery.html" target="_blank">
												<span className="text-light-success h-45 w-45 d-flex-center b-r-15">
													<i className="ph-duotone ph-google-photos-logo f-s-30"></i>
												</span>
												<p className="mb-0 f-w-500 text-success">Gallery</p>
											</a>
										</div>
										<div className="d-flex-center text-center mb-3">
											<a href="kanban_board.html" target="_blank">
												<span className="text-light-info h-45 w-45 d-flex-center b-r-15">
													<i className="ph-duotone ph-selection-foreground text-info f-s-30"></i>
												</span>
												<p className="mb-0 f-w-500 text-secondary">Task </p>
											</a>
										</div>
										<div className="d-flex-center text-center mb-3">
											<a href="calendar.html" target="_blank">
												<span className="text-light-dark h-45 w-45 d-flex-center b-r-15">
													<i className="ph-duotone ph-calendar f-s-30"></i>
												</span>
												<p className="mb-0 f-w-500 text-dark">Calen..</p>
											</a>
										</div>
										<div className="d-flex-center text-center mb-3">
											<a href="filemanager.html" target="_blank">
												<span className="text-light-danger h-45 w-45 d-flex-center b-r-15">
													<i className="ph-duotone ph-folder-open f-s-30"></i>
												</span>
												<p className="mb-0 f-w-500 text-danger">File Ma..</p>
											</a>
										</div>


									</div>
								</div>
							</div>
						</li>

						<li className="header-cart">
							<a aria-controls="cartcanvasRight" className="d-block head-icon position-relative"
							   data-bs-target="#cartcanvasRight"
							   data-bs-toggle="offcanvas"
							   href="#" role="button">
								<i className="iconoir-shopping-bag"></i>
								<span
										className="position-absolute translate-middle badge rounded-pill bg-danger badge-notification">4</span>
							</a>
							<div aria-labelledby="cartcanvasRightLabel"
								 className="offcanvas offcanvas-end header-cart-canvas"
								 id="cartcanvasRight"
								 >
								<div className="offcanvas-header">
									<h5 className="offcanvas-title" id="cartcanvasRightLabel">Cart</h5>
									<button aria-label="Close" className="btn-close" data-bs-dismiss="offcanvas"
											type="button"></button>
								</div>
								<div className="offcanvas-body app-scroll p-0">
									<div className="head-container">
										<div className="head-box">
											<img alt="cart" className="h-50 me-3 b-r-10"
												 src="/assets/images/ecommerce/19.jpg" />
											<div className="flex-grow-1">
												<a className="text-primary-dark mb-0 f-w-600 f-s-16"
												   href="product_details.html" target="_blank">
													Backpacks <span className="text-warning-dark"> (3<i
														className="ti ti-star-filled text-warning f-s-12"></i>)</span>
												</a>
												<div>
													<span className="text-secondary"><span
															className="text-dark f-w-500">size</span> : medium</span>
													<span className="text-secondary ms-2"><span
															className="text-dark f-w-500">Color</span> :Pink</span>
												</div>

											</div>
											<div className="text-end">
												<i className="iconoir-xmark close-btn"></i>
												<p className="text-success f-w-500 mb-0">$600.50 x 1</p>
											</div>
										</div>
										<div className="head-box">
											<img alt="cart" className="h-50 object-fit-cover me-3 b-r-10"
												 src="/assets/images/ecommerce/13.jpg" />
											<div className="flex-grow-1">
												<a className="text-info-dark mb-0 f-w-600 f-s-16"
												   href="product_details.html" target="_blank">
													Women's Watch<span className="text-warning-dark"> (4<i
														className="ti ti-star-filled text-warning f-s-12"></i>)</span>
												</a>
												<div>
													<span className="text-secondary"><span
															className="text-dark f-w-500">size</span> : small</span>
													<span className="text-secondary ms-2"><span
															className="text-dark f-w-500">Color</span> : RoseGold</span>
												</div>
											</div>
											<div className="text-end">
												<i className="iconoir-xmark close-btn"></i>
												<p className="text-success f-w-500 mb-0">$519.10 x 2</p>
											</div>
										</div>
										<div className="head-box">
											<img alt="cart" className="h-50 object-fit-cover me-3 b-r-10"
												 src="/assets/images/ecommerce/09.jpg" />
											<div className="flex-grow-1">
												<a className="text-danger-dark mb-0 f-w-600 f-s-16"
												   href="product_details.html" target="_blank">Sandals<span
														className="text-warning-dark"> (5<i
														className="ti ti-star-filled text-warning f-s-12"></i>)</span>
												</a>
												<div>
													<span className="text-secondary"><span
															className="text-dark f-w-500">size</span> : 8</span>
													<span className="text-secondary ms-2"><span
															className="text-dark f-w-500">Color</span> :White</span>
												</div>
											</div>
											<div className="text-end">
												<i className="iconoir-xmark close-btn"></i>
												<p className="text-success f-w-500 mb-0">$390 x 2</p>
											</div>
										</div>
										<div className="head-box ">
											<img alt="cart" className="h-50 object-fit-cover me-3 b-r-10"
												 src="/assets/images/ecommerce/23.jpg" />
											<div className="flex-grow-1">
												<a className="text-success-dark mb-0 f-w-600 f-s-16"
												   href="product_details.html" target="_blank">
													Jackets<span className="text-warning-dark"> (3<i
														className="ti ti-star-filled text-warning f-s-12"></i>)</span>
												</a>
												<div>
													<span className="text-secondary"><span
															className="text-dark f-w-500">size</span> : XL</span>
													<span className="text-secondary ms-2"><span
															className="text-dark f-w-500">Color</span> :Blue</span>
												</div>

											</div>
											<div className="text-end">
												<i className="iconoir-xmark close-btn"></i>
												<p className="text-success f-w-500 mb-0">$300.00 x 2</p>
											</div>
										</div>
										<div className="head-box ">
											<img alt="cart" className="h-50 object-fit-cover me-3 b-r-10"
												 src="/assets/images/ecommerce/11.jpg" />
											<div className="flex-grow-1">
												<a className="text-dark-dark mb-0 f-w-600 f-s-16"
												   href="product_details.html" target="_blank">
													Shoes<span className="text-warning-dark"> (2<i
														className="ti ti-star-filled text-warning f-s-12"></i>)</span>
												</a>
												<div>
													<span className="text-secondary"><span
															className="text-dark f-w-500">size</span> : 9</span>
													<span className="text-secondary ms-2"><span
															className="text-dark f-w-500">Color</span> :White</span>
												</div>
											</div>
											<div className="text-end">
												<i className="iconoir-xmark close-btn"></i>
												<p className="text-success f-w-500 mb-0">$450.00 x 1</p>
											</div>
										</div>
										<div className="hidden-massage py-4 px-3">
											<img alt="cart" className="img-fluid mb-3"
												 src="/assets/images/header/cart_empty.gif" />
											<div>
												<h6 className="mb-0">Your Cart is Empty</h6>
												<p className="text-secondary mb-0">Add some items :)</p>
												<a className="btn btn-light-primary btn-xs mt-2"
												   href="product_details.html">Shop
													Now</a>
											</div>
										</div>
									</div>
								</div>
								<div className="offcanvas-footer">
									<div className="head-box-footer p-3">
										<div className="mb-4">
											<h6 className="text-muted f-w-600">Total <span className="float-end">$3,468.00</span>
											</h6>
										</div>
										<div className="header-cart-btn">
											<a className="btn btn-light-primary" href="cart.html" role="button"
											   target="_blank">
												<i className="ti ti-eye"></i> View Cart</a>
											<a className="btn btn-light-success" href="checkout.html"
											   role="button" target="_blank">
												Checkout <i className="ti ti-shopping-cart"></i></a>
										</div>
									</div>
								</div>
							</div>
						</li>

						<li className="header-dark">
							<div className="sun-logo head-icon">
								<i className="iconoir-sun-light"></i>
							</div>
							<div className="moon-logo head-icon">
								<i className="iconoir-half-moon"></i>
							</div>
						</li>

						<li className="header-notification">
							<a aria-controls="notificationcanvasRight"
							   className="d-block head-icon position-relative"
							   data-bs-target="#notificationcanvasRight"
							   data-bs-toggle="offcanvas"
							   href="#"
							   role="button">
								<i className="iconoir-bell"></i>
								<span
										className="position-absolute translate-middle p-1 bg-success border border-light rounded-circle animate__animated animate__fadeIn animate__infinite animate__slower"></span>
							</a>
							<div aria-labelledby="notificationcanvasRightLabel"
								 className="offcanvas offcanvas-end header-notification-canvas"
								 id="notificationcanvasRight" >
								<div className="offcanvas-header">
									<h5 className="offcanvas-title" id="notificationcanvasRightLabel">
										Notification</h5>
									<button aria-label="Close" className="btn-close" data-bs-dismiss="offcanvas"
											type="button"></button>
								</div>
								<div className="offcanvas-body notification-offcanvas-body app-scroll p-0">
									<div className="head-container notification-head-container">
										<div className="notification-message head-box">
											<div className="message-images">
												  <span className="bg-secondary h-35 w-35 d-flex-center b-r-10 position-relative">
													<img alt="avtar" className="img-fluid b-r-10"
														 src="/assets/images/ai_avtar/6.jpg" />
													<span
															className="position-absolute bottom-30 end-0 p-1 bg-secondary border border-light rounded-circle notification-avtar"></span>
												  </span>
											</div>
											<div className="message-content-box flex-grow-1 ps-2">

												<a className="f-s-15 text-secondary mb-0"
												   href="read_email.html" target="_blank"><span
														className="f-w-500 text-secondary">Gene Hart</span> wants to
													edit <span
															className="f-w-500 text-secondary">Report.doc</span></a>
												<div>
													<a className="d-inline-block f-w-500 text-success me-1"
													   href="#">Approve</a>
													<a className="d-inline-block f-w-500 text-danger"
													   href="#">Deny</a>
												</div>
												<span className="badge text-light-primary mt-2"> sep 23 </span>

											</div>
											<div className="align-self-start text-end">
												<i className="iconoir-xmark close-btn"></i>
											</div>
										</div>
										<div className="notification-message head-box">
											<div className="message-images">
												<span className="bg-light-dark h-35 w-35 d-flex-center b-r-10 position-relative">
												  <i className="ph-duotone  ph-truck f-s-18"></i>
												</span>
											</div>
											<div className="message-content-box flex-grow-1 ps-2">
												<a className="f-s-15 text-secondary mb-0" href="read_email.html"
												   target="_blank">Hey
													<span
															className="f-w-500 text-secondary">Emery McKenzie</span>,
													get ready: Your order from <span
															className="f-w-500 text-secondary">@Shopper.com</span>
													is out for delivery today!</a>
												<span className="badge text-light-info mt-2"> sep 23 </span>

											</div>
											<div className="align-self-start text-end">
												<i className="iconoir-xmark close-btn"></i>
											</div>
										</div>
										<div className="notification-message head-box">
											<div className="message-images">
											   <span className="bg-secondary h-35 w-35 d-flex-center b-r-10 position-relative">
												 <img alt="" className="img-fluid b-r-10"
													  src="/assets/images/ai_avtar/2.jpg" />
												 <span
														 className="position-absolute  end-0 p-1 bg-secondary border border-light rounded-circle notification-avtar"></span>
											   </span>
											</div>
											<div className="message-content-box flex-grow-1 ps-2">
												<a className="f-s-15 text-secondary mb-0"
												   href="read_email.html" target="_blank"><span
														className="f-w-500 text-secondary">Simon Young</span> shared
													a file called <span
															className="f-w-500 text-secondary">Dropdown.pdf</span></a>
												<span className="badge text-light-success mt-2"> 30 min</span>

											</div>
											<div className="align-self-start text-end">
												<i className="iconoir-xmark close-btn"></i>
											</div>
										</div>
										<div className="notification-message head-box">
											<div className="message-images">
											   <span className="bg-secondary h-35 w-35 d-flex-center b-r-10 position-relative">
												 <img alt="" className="img-fluid b-r-10"
													  src="/assets/images/ai_avtar/5.jpg" />
												 <span
														 className="position-absolute end-0 p-1 bg-secondary border border-light rounded-circle notification-avtar"></span>
											   </span>
											</div>
											<div className="message-content-box flex-grow-1 ps-2">
												<a className="f-s-15 text-secondary mb-0"
												   href="read_email.html" target="_blank"><span
														className="f-w-500 text-secondary">Becky G. Hayes</span> has
													added a comment to <span
															className="f-w-500 text-secondary">Final_Report.pdf</span></a>
												<span className="badge text-light-warning mt-2"> 45 min</span>
											</div>
											<div className="align-self-start text-end">
												<i className="iconoir-xmark close-btn"></i>
											</div>
										</div>
										<div className="notification-message head-box">
											<div className="message-images">
												<span className="bg-secondary h-35 w-35 d-flex-center b-r-10 position-relative">
												  <img alt="" className="img-fluid b-r-10"
													   src="/assets/images/ai_avtar/1.jpg" />
												  <span
														  className="position-absolute  end-0 p-1 bg-secondary border border-light rounded-circle notification-avtar"></span>
												</span>
											</div>
											<div className="message-content-box flex-grow-1 ps-2">
												<a className="f-s-15 text-secondary mb-0"
												   href="read_email.html" target="_blank"><span
														className="f-w-600 text-secondary">Romaine Nadeau</span>
													invited you to join a meeting
												</a>
												<div>
													<a className="d-inline-block f-w-500 text-success me-1"
													   href="#">Join</a>
													<a className="d-inline-block f-w-500 text-danger" href="#">Decline</a>
												</div>

												<span className="badge text-light-secondary mt-2"> 1 hour ago </span>
											</div>
											<div className="align-self-start text-end">
												<i className="iconoir-xmark close-btn"></i>
											</div>
										</div>

										<div className="hidden-massage py-4 px-3">
											<img alt=""
												 className="w-50 h-50 mb-3 mt-2"
												 src="/assets/images/icons/bell.png" />
											<div>
												<h6 className="mb-0">Notification Not Found</h6>
												<p className="text-secondary">When you have any notifications added
													here,will
													appear here.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>

						</li>

						<li className="header-profile">
							<a aria-controls="profilecanvasRight" className="d-block head-icon"
							   data-bs-target="#profilecanvasRight" data-bs-toggle="offcanvas"
							   href="#" role="button">
								<img alt="avtar" className="b-r-50 h-35 w-35 bg-dark"
									 src="/assets/images/avtar/woman.jpg" />
							</a>

							<div aria-labelledby="profilecanvasRight"
								 className="offcanvas offcanvas-end header-profile-canvas"
								 id="profilecanvasRight"
								 >
								<div className="offcanvas-body app-scroll">
									<ul className="">
										<li className="d-flex gap-3 mb-3">
											<div className="d-flex-center">
											<span className="h-45 w-45 d-flex-center b-r-10 position-relative">
											  <img alt="" className="img-fluid b-r-10"
												   src="/assets/images/avtar/woman.jpg" />
											</span>
											</div>
											<div className="text-center mt-2">
												<h6 className="mb-0"> Laura Monaldo <img
														alt="instagram-check-mark"
														className="w-20 h-20"
														src="/assets/images/profile-app/01.png" /></h6>
												<p className="f-s-12 mb-0 text-secondary">lauradesign@gmail.com</p>
											</div>
										</li>

										<li>
											<a className="f-w-500" href="profile.html" target="_blank">
												<i className="iconoir-user-love pe-1 f-s-20"></i> Profile
												Details
											</a>
										</li>
										<li>
											<a className="f-w-500" href="setting.html" target="_blank">
												<i className="iconoir-settings pe-1 f-s-20"></i> Settings
											</a>
										</li>
										<li className="app-divider-v dotted py-1"></li>
										<li>
											<a className="f-w-500" href="setting.html" target="_blank">
												<i className="iconoir-eye-closed pe-1 f-s-20"></i> Hide Settings
											</a>
										</li>
										<li>
											<div className="d-flex align-items-center justify-content-between">
												<a className="f-w-500" href="#">
													<i className="iconoir-bell-notification pe-1 f-s-20"></i>
													Notification
												</a>
												<div className="flex-shrink-0">
													<div className="form-check form-switch">
														<input checked
															   className="form-check-input form-check-primary"
															   id="basicSwitch"
															   type="checkbox" />
													</div>
												</div>
											</div>
										</li>
										<li>
											<div className="d-flex align-items-center justify-content-between">
												<div>
													<a className="f-w-500" href="#">
														<i className="ph-duotone  ph-detective pe-1 f-s-20"></i>
														Incognito
													</a>
												</div>
												<div className="flex-shrink-0">
													<div className="form-check form-switch">
														<input className="form-check-input form-check-primary"
															   id="incognitoSwitch"
															   type="checkbox" />
													</div>
												</div>
											</div>
										</li>
										<li className="app-divider-v dotted py-1"></li>
										<li>
											<a className="f-w-500" href="faq.html" target="_blank">
												<i className="iconoir-help-circle pe-1 f-s-20"></i> Help
											</a>
										</li>
										<li>
											<a className="f-w-500" href="pricing.html" target="_blank">
												<i className="iconoir-dollar pe-1 f-s-20"></i>
												Pricing
											</a>
										</li>
										<li>
											<a className="mb-0 text-secondary f-w-500" href="sign_up.html"
											   target="_blank">
												<i className="iconoir-plus pe-1 f-s-20"></i> Add account
											</a>
										</li>
										<li>
											<a className="mb-0 btn btn-light-danger btn-sm justify-content-center "
											   href="sign_in.html"
											   role="button">
												<i className="ph-duotone  ph-sign-out pe-1 f-s-20"></i> Log Out
											</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</header>
		
	);
};

export default HeaderMenu;