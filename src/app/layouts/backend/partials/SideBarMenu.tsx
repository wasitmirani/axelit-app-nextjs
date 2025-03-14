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

                    {menuList?.length > 0 &&
                        menuList.map((item, index) => (
                            item.type === 'heading' && (

                                <li key={index} className="menu-title">
                                    <span>{item.title}</span>
                                </li>
                            ) ||
                            item.type === 'single' && (

                                <li key={index} className="no-sub">
                                    <Link className="" href={item.link}>
                                        <i className={`${item.icon}`} ></i> {item.title}
                                    </Link>
                                </li>
                            )
                            || item.type === 'multi' && (
                                <li key={index} >

                                    <Link aria-expanded="false" className="" data-bs-toggle="collapse" href={`#multi-${index}`}>
                                        <i className={`${item.icon}`}></i>
                                        {item.title}
                                        {/* <span className="badge text-primary-dark bg-primary-300  badge-notification ms-2">4</span> */}
                                    </Link>

                                    <ul className="collapse" id={`multi-${index}`}>

                                        {item.sub_menu?.map((sub_item: any, sub_index: any) => (
                                            // side-menu__label1
                                            // ${sub_index == 1 ? 'side-menu__label1' : ''}
                                            <li key={sub_index} className={`slide`}>
                                                <Link href={sub_item.link} >
                                                    {sub_item.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>



                                </li>
                            )
                        ))}
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