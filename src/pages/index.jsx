import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globalStyle.css';
import { Navbar } from "../components/Navbar/Navbar";


//Home page
export default function Home() {
    return (
        <header className="header">
            <Navbar />
            <div className="main-title">
                <h2 id="title-one">Charles Cantin</h2>
                <h2 id="title-two">Photographe</h2>
            </div>
        </header>
      
    )
}
