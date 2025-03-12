import React from 'react';
import Link from 'next/link';// Assuming you have some CSS for styling
import SidebarMenu from '../../../utils/sidebarMenu';

const SideBar: React.FC = () => {
	const menu = new SidebarMenu();
	const menuList = menu.getMenuList();

	return (
		<nav>
        <div className="app-logo">
            <a className="logo d-inline-block" href="#">
                <img alt="#" src="/assets/images/logo/1.png" />
            </a>

            <span className="bg-light-primary toggle-semi-nav">
          <i className="ti ti-chevrons-right f-s-20"></i>
        </span>
        </div>
        <div className="app-nav" id="app-simple-bar">
            <ul className="main-nav p-0 mt-2">
                <li className="menu-title">
                    <span>Dashboard</span>
                </li>
                <li>
                    <a aria-expanded="false" className="" data-bs-toggle="collapse" href="#dashboard">
                        <i className="iconoir-home-alt"></i>
                        dashboard
                        <span className="badge text-primary-dark bg-primary-300  badge-notification ms-2">4</span>
                    </a>
                    <ul className="collapse" id="dashboard">
                        <li><a href="#">Project</a></li>
                        <li><a href="ecommerce_dashboard.html">Ecommerce</a></li>
                    </ul>
                </li>
                <li>
                    <a aria-expanded="false" className="" data-bs-toggle="collapse" href="#apps">
                        <i className="iconoir-apple-shortcuts"></i>
                        Apps
                    </a>
                    <ul className="collapse" id="apps">
                        <li><a href="calendar.html">Calender</a></li>
                        <li className="another-level">
                            <a aria-expanded="false" className="" data-bs-toggle="collapse" href="#Profile-page">
                                Profile
                            </a>
                            <ul className="collapse" id="Profile-page">
                                <li><a href="profile.html">Profile</a></li>
                                <li><a href="setting.html">Setting</a></li>
                            </ul>
                        </li>
                        <li className="another-level">
                            <a aria-expanded="false" className="" data-bs-toggle="collapse" href="#projects-page">
                                Projects Page
                            </a>
                            <ul className="collapse" id="projects-page">
                                <li><a href="project_app.html">projects</a></li>
                                <li><a href="project_details.html">projects Details</a></li>
                            </ul>
                        </li>
                        <li><a href="to_do.html">To-Do</a></li>
                        <li><a href="team.html">Team</a></li>
                        <li><a href="api.html">API</a></li>
                        <li className="another-level">
                            <a aria-expanded="false" className="" data-bs-toggle="collapse" href="#ticket-page">
                                Ticket
                            </a>
                            <ul className="collapse" id="ticket-page">
                                <li><a href="ticket.html">Ticket</a></li>
                                <li><a href="ticket_details.html">Ticket Details</a></li>
                            </ul>
                        </li>
                        <li className="another-level">
                            <a aria-expanded="false" className="" data-bs-toggle="collapse" href="#email-page">
                                Email Page
                            </a>
                            <ul className="collapse" id="email-page">
                                <li><a href="email.html"> Email</a></li>
                                <li><a href="read_email.html">Read Email</a></li>
                            </ul>
                        </li>
                        <li className="another-level">
                            <a aria-expanded="false" className="" data-bs-toggle="collapse" href="#e-shop">
                                E-shop
                            </a>
                            <ul className="collapse" id="e-shop">
                                <li><a href="cart.html">Cart</a></li>
                                <li><a href="product.html">Product</a></li>
                                <li><a href="add_product.html">Add Product</a></li>
                                <li><a href="product_details.html">Product-Details</a></li>
                                <li><a href="product_list.html">Product list</a></li>
                                <li><a href="orders.html">Orders</a></li>
                                <li><a href="orders_details.html">Orders Details</a></li>
                                <li><a href="orders_list.html">Orders List</a></li>
                                <li><a href="checkout.html">Check out</a></li>
                                <li><a href="wishlist.html">Wishlist</a></li>
                            </ul>
                        </li>
                        <li><a href="invoice.html">Invoice</a></li>
                        <li><a href="chat.html">Chat</a></li>
                        <li><a href="filemanager.html">File manager</a></li>
                        <li><a href="bookmark.html">Bookmark</a></li>
                        <li><a href="kanban_board.html">Kanban board</a></li>
                        <li><a href="timeline.html">Timeline</a></li>
                        <li><a href="faq.html">FAQS</a></li>
                        <li><a href="pricing.html">Pricing</a></li>
                        <li><a href="gallery.html">Gallery</a></li>
                        <li className="another-level">
                            <a aria-expanded="false" className="" data-bs-toggle="collapse" href="#blog-page">
                                Blog Page
                            </a>
                            <ul className="collapse" id="blog-page">
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="blog_read_more.html">Blog Details</a></li>
                                <li><a href="add_blog.html">Add Blog</a></li>

                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="no-sub">
                    <a className="" href="widget.html">
                        <i className="iconoir-view-grid"></i> Widgets
                    </a>
                </li>

                <li className="menu-title"><span>Component</span></li>
                <li>
                    <a aria-expanded="false" className="" data-bs-toggle="collapse" href="#ui-kits">

                        <i className="iconoir-handbag"></i>
                        UI kits
                    </a>
                    <ul className="collapse" id="ui-kits">
                        <li><a href="cheatsheet.html">Cheatsheet</a></li>
                        <li><a href="alert.html">Alert</a></li>
                        <li><a href="badges.html">Badges</a></li>
                        <li><a href="buttons.html">Buttons</a></li>
                        <li><a href="cards.html">Cards</a></li>
                        <li><a href="dropdown.html">Dropdown</a></li>
                        <li><a href="grid.html">Grid</a></li>
                        <li><a href="avtar.html">Avtar</a></li>
                        <li><a href="tabs.html">Tabs</a></li>
                        <li><a href="accordions.html">Accordions</a></li>
                        <li><a href="progress.html">Progress</a></li>
                        <li><a href="notifications.html">Notifications</a></li>
                        <li><a href="list.html">Lists</a></li>
                        <li><a href="helper_classes.html">Helper Classes</a></li>
                        <li><a href="background.html">Background</a></li>
                        <li><a href="divider.html">Divider</a></li>
                        <li><a href="ribbons.html">Ribbons</a></li>
                        <li><a href="editor.html">Editor </a></li>
                        <li><a href="collapse.html">Collapse</a></li>
                        <li><a href="footer-page.html">Footer</a></li>
                        <li><a href="shadow.html">Shadow</a></li>
                        <li><a href="wrapper.html">Wrapper</a></li>
                        <li><a href="bullet.html">Bullet</a></li>
                        <li><a href="placeholder.html">Placeholder</a></li>
                        <li><a href="alignment.html">Alignment Thing</a></li>
                    </ul>
                </li>




            </ul>
        </div>

        <div className="menu-navs">
            <span className="menu-previous"><i className="ti ti-chevron-left"></i></span>
            <span className="menu-next"><i className="ti ti-chevron-right"></i></span>
        </div>

    </nav>

	);
};

export default SideBar;