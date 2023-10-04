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
import EventUni from 'components/organism/EventUni';

export default function uni() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (

    <div className="uni">
      <div className="fam">
          <Navbar />
          <Header title="ITB" />
          
          <div className="gambarAtas">
            <span id="bg_biru">
            <Image src="/foto/itb.jpg" alt="" width={450} height={320}></Image>
            </span>
          </div>
          <Event
          title="DION"
          subtitle=""
          description='Happy birthday winston, semoga bisa cepet2 s2
           dan kerja di luar sana, semakin jago baking dan pingpong. 
           semoga sehat selalu dan sembuh dari dbd. tetap menjadi orang
            yang lurus dan baik2. ditunggu undangan nikahnya'
          illustrationPath="/foto/dion.jpg"
          anchorTarget="_blank"
          />
          <Event
          title="DIMAS"
          subtitle=""
          description='Dirgahayu untuk rekan saya Wilson Tandya, 
          warga kelurahan X, kecamatan X, kabupaten/kota X dan provinsi X.
           Semoga diberikan kelancaran rezekinya serta dibalas amal ibadahnya. 
           Tetap jauhi minum2an yang tidak sehat dan obat2an terlarang. Selalu
            berpikiran global, namun setia kepada nusa dan bangsa.'
          illustrationPath="/foto/dimas.jpg"
          anchorTarget="_blank"
          />
          <Event
          title="NIEL"
          subtitle=""
          description='Selamat ulang tahun winson, semoga sehat, sukses
           dan diberkati selalu. Semoga makin banyak juga hidden talent 
           nya. Dan semoga jangan sering sering itu lagi ytta'
          illustrationPath="/foto/niel.jpg"
          anchorTarget="_blank"
          />
          <Event
          title="JOEL"
          subtitle=""
          description='Upin ipin main ke sawah, selamat ultah yah. 
          Semoga makin happy dan jangan cepet" dewasa dalam semua hal 🎂🥳'
          illustrationPath="/foto/joel.jpg"
          anchorTarget="_blank"
          />
          <Event
          title="RIZKY"
          subtitle=""
          description='Hbd senn, semoga panjang umur sehat selalu. Semoga bisa jadi 
          subject matter expert di Infra dan makin jago kerjaannya. Semoga kecapai 
          impian pindah ke luar negeri. Ditunggu kabar baik dengan Vanessa wkwkwk'
          illustrationPath="/foto/rizky.jpg"
          anchorTarget="_blank"
          />
                    <Event
          title="CHRIS"
          subtitle=""
          description='hbd winston, semoga sehat di burung biru kurus, 
          bisa balik ke jianada, dan langgeng sama yg buat web, minta info loker gan'
          illustrationPath="/foto/chris.jpg"
          anchorTarget="_blank"
          />

          <Footer />
      </div>
    </div>
  );
}