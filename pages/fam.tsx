/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from 'components/organism/Footer';
import Navbar from 'components/organism/Navbar';
import Event from 'components/organism/Event';
import Header from 'components/organism/EventHeader';
import Image from 'next/image';
import EventTitle from 'components/organism/EventTitle';
import EventFam from 'components/organism/EventFam'

export default function uni() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="fam">
        <Navbar />
        <Header title="FAMILY" />
        
        <div className="gambarAtas">
          <span id="bg_biru">
          <Image src="/foto/fam.jpg" alt="" width={450} height={350}></Image>
          </span>
        </div>
        <Event
        title="MOM & DAD"
        subtitle=""
        description='Happy Birthday, my boy
        May you always be healthy and be blessed,
        Successful in achieving your goals,
        And become a child who fears God'
        illustrationPath="/foto/momndad.jpg"
        anchorTarget="_blank"
        />
        <Event
        title="EVELYN"
        subtitle=""
        description='Hepibertdei bos trav*loka
        Panjang umur, sehat selalu, semangat kerjanya,, jan lupa suka traktir" o7
        GBU WUATBB'
        illustrationPath="/foto/evelyn.jpg"
        anchorTarget="_blank"
        />
      <EventFam/>

        <Footer />
    </div>
  );
}