import React from "react";
import "./Bus.css";
import Footer from "../Footer/Footer";
import TopSection from "../TopSection/TopSection";
import { BusMain } from "../Top1/BusMain";
import { Navbar } from "../BusNavBar/BusNavBar";

export default function Bus() {
    return (
        <div className="index">
            <Navbar />
            <BusMain />
            <TopSection />
            <Footer />
        </div>
    )
}