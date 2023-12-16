import React from "react";
import './Footer.css';
import {Link} from "@mui/material";

export default function Footer() {
    const handleScrollToTop = () => {
        const rootElement = document.documentElement;
        rootElement.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <footer className="footer mt-5">
            <div className="container  justify-content-center">
                <div className="row border_bo1 mt-5 ">
                    <div className="col-md-4 mt-5 ">
                        <Link to='/' className="firstCol ml-5 removeLinkBorder" onClick={handleScrollToTop}>
                            <h1>LOGO</h1>
                        </Link>
                        <br/>
                        <Link to='/risk-disclousure-terms-conditions' className="firstCol ml-5 removeLinkBorder"
                              onClick={handleScrollToTop}>
                            <p className="font-weight-bold ml-1">
                                Address:
                                <br/>
                                Your Address here
                                <span>

                                </span>
                            </p>
                        </Link>
                    </div>

                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div className="infoma mt-5">
                            <h3><Link to="/" className="removeLinkBorder">Media</Link></h3>
                            <ul>
                                <li className="mb-1 mt-2">
                                    <Link to='/' className="removeLinkBorder" target='_blank'>Facebook</Link>
                                </li>
                                <li className="mb-1 mt-2">
                                    <Link to='/' className="removeLinkBorder" target='_blank'>
                                        Instagram
                                    </Link>
                                </li>
                                <li className=" mt-2">
                                    <Link to='/' className="removeLinkBorder" target='_blank'>
                                        BG MAMA
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div className="infoma mt-5">
                            <h3><Link to="/" className="removeLinkBorder">Pricing plans</Link></h3>
                            <ul>
                                <li className="mb-1 mt-2">
                                    <Link to='/' className="removeLinkBorder" target='_blank'>Plan for Kids</Link>
                                </li>
                                <li className="mb-1 mt-2">
                                    <Link to='/' className="removeLinkBorder" target='_blank'>Plan for teenagers</Link>
                                </li>
                                <li className="mb-1 mt-2">
                                    <Link to='/' className="removeLinkBorder" target='_blank'>Plan for adults</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div className="infoma mt-5">
                            <h3><Link to="/" className="removeLinkBorder">Legal</Link></h3>
                            <ul>
                                <li className="mb-1 mt-2">
                                    <Link to='/' className="removeLinkBorder" target='_blank'>Privacy Policy</Link>
                                </li>
                                <li className="mb-1 mt-2">
                                    <Link to='/' className="removeLinkBorder" target='_blank'>Terms of Use</Link>
                                </li>
                                <li className="mb-1 mt-2">
                                    <Link to='/' className="removeLinkBorder" target='_blank'>Sitemap</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div className="infoma mt-5">
                            <h3><Link to="/" className="removeLinkBorder">Contact us</Link></h3>
                            <ul>
                                <li className="mb-1 mt-2">
                                    <Link to='/' className="removeLinkBorder" target='_blank'>Phone: +123 45678944</Link>
                                </li>
                                <li className="mb-1 mt-2">
                                    <Link to='/' className="removeLinkBorder" target='_blank'>Email: blabla@adsd.bg </Link>
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>
            </div>

            <div className="container mt-4">
                <div className="row">
                    <div className="legal d-flex justify-content-between ">
                        <p>&copy; 2019 Something. All rights reserved.</p>
                        <span>Made with <span className="heart">♥</span> remotely from Anywhere</span>
                    </div>
                </div>
            </div>

        </footer>
    );
};