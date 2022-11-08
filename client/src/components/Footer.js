import React from "react";
import github_icon from "../resources/github_icon.png";

function Footer(){
    return (
        <>
            <footer className="footer fixed-bottom mt-auto py-1 bg-primary">
                <div className="container text-center">
                    <div className="">
                        <a className="btn " href="https://github.com/jacobboney/CovidAnalyzer" role="button">
                            <img src={github_icon} alt={""} />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );

}

export default Footer;