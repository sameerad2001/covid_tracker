import React from "react";

function Footer() {

    const currentYear = new Date().getFullYear();

    return <footer>
        &copy; {currentYear} Sameer Ahmed @ <a href="https://github.com/sameerad2001"> Github</a>
    </footer>
}

export default Footer;