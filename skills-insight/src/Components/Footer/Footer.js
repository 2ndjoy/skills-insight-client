import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => <footer className="footer bg-primary mt-5 text-white pt-4">
    <p className="text-center">Follow us on social media</p>
    <div className="d-flex my-1 justify-content-around gap-5">
        <a className="text-white" href="https://www.facebook.com/"><FaFacebook></FaFacebook></a>
        <a className="text-white" href="https://www.twitter.com/"><FaTwitter></FaTwitter></a>
        <a className="text-white" href="https://www.youtube.com/"><FaYoutube></FaYoutube></a>
    </div>
    <div className="footer-copyright text-center py-3">© 2020 Copyright
    </div>

</footer>

export default Footer