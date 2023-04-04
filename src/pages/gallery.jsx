import React, { useState } from 'react';
import { FamilyShooting } from '../components/Shooting/FamilyShooting';
import { EventShooting } from '../components/Shooting/EventShooting';
import { DuoShooting } from '../components/Shooting/DuoShooting';
import { SoloShooting } from '../components/Shooting/SoloShooting';
import { BabyShooting } from '../components/Shooting/BabyShooting';
import { PregnantShooting } from '../components/Shooting/PregnantShooting';
import { Header } from '../components/Navbar/Navbar';
import { Slider } from '../components/Slider/Slider';
import Layout from '../components/Layout/Layout';
import * as styles from '../styles/gallery.module.css';


//Gallery page

const Gallery = () => {

    //State for components of gallery => allow to show or note different element of gallery
    const [showFamily, setShowFamily] = useState(false);
    const [showEvent, setShowEvent] = useState(false);
    const [showDuo, setShowDuo] = useState(false);
    const [showSolo, setShowSolo] = useState(false);
    const [showBaby, setShowBaby] = useState(false);
    const [showPregnant, setShowPregnant] = useState(false);

    return (
        <>
            <Header />
            <Layout>
                <div className={styles.gallery}>
                    <h1>Galerie</h1>
                    <Slider />
                    <section>
                        {/* Buttons who allow to toggle components */}
                        <div className={styles.buttonContainer}>
                            <button onClick={() => {
                                setShowFamily(!showFamily);
                                setShowBaby(false);
                                setShowDuo(false);
                                setShowEvent(false);
                                setShowPregnant(false);
                                setShowSolo(false);
                            }} id='famille'>Famille</button>
                            <button onClick={() => {
                                setShowDuo(!showDuo);
                                setShowFamily(false);
                                setShowBaby(false);
                                setShowEvent(false);
                                setShowPregnant(false);
                                setShowSolo(false);
                            }} id='couple'>Couple</button>
                            <button onClick={() => {
                                setShowSolo(!showSolo);
                                setShowFamily(false);
                                setShowBaby(false);
                                setShowDuo(false);
                                setShowEvent(false);
                                setShowPregnant(false);
                            }} id='portrait'>Portrait</button>
                            <button onClick={() => {
                                setShowPregnant(!showPregnant);
                                setShowFamily(false);
                                setShowBaby(false);
                                setShowDuo(false);
                                setShowEvent(false);
                                setShowSolo(false);
                            }} id='grossesse'>Grossesse</button>
                            <button onClick={() => {
                                setShowBaby(!showBaby);
                                setShowFamily(false);
                                setShowDuo(false);
                                setShowEvent(false);
                                setShowPregnant(false);
                                setShowSolo(false);
                            }} id='baby'>Bébé</button>
                            <button onClick={() => {
                                setShowEvent(!showEvent);
                                setShowFamily(false);
                                setShowBaby(false);
                                setShowDuo(false);
                                setShowPregnant(false);
                                setShowSolo(false);
                            }} id='event'>Mariage & Baptême</button>
                        </div>
                    </section>
                    {
                        showFamily ? <FamilyShooting /> : ""
                    }
                    {
                        showEvent ? <EventShooting /> : ""
                    }
                    {
                        showDuo ? <DuoShooting /> : ""
                    }
                    {
                        showSolo ? <SoloShooting /> : ""
                    }
                    {
                        showBaby ?<BabyShooting /> : ""
                    }
                    {
                        showPregnant ? <PregnantShooting /> : ""
                    }
                </div>
            </Layout>
        </>
    )
}

export default Gallery;
