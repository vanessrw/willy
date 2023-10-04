import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from 'components/organism/Footer';
import Navbar from 'components/organism/Navbar';
import Header from 'components/organism/EventHeader';

export default function Nessy() {
  const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        moveCarousel(1);
      }, 1500);

      return () => clearInterval(interval);
    }, [currentIndex]);

    const moveCarousel = (direction: number) => {
      setCurrentIndex((prevIndex) => (prevIndex + direction + images.length) % images.length);
    };

    const images = [
      "/foto/nessy1.jpg",
      "/foto/nessy2.jpg",
      "/foto/nessy3.jpg",
      "/foto/nessy4.jpg",
      "/foto/nessy6.jpg",
      "/foto/nessy7.jpg",
      "/foto/nessy8.jpg",
      "/foto/nessy5.jpg",
    ];

    return (
      <div className="carousel">
        <div className="carousel-inner">
          <span id="bg_biru" key={currentIndex}>
            <img src={images[currentIndex]} alt="" width={300} height={300} />
          </span>
        </div>
      </div>
    );
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="nessy">
      <Navbar />
      <Header title="wishes-nessy" />
      <div className='nessy-wish'>
        <Carousel />
        <p>
          Happy birthday, baby! Selamat juga uda bebas dari infus, yeyyy.
          Semoga di usia yang makin tua, kamu juga semakin dewasa (udah sih) lagi,
          selalu happy walau kerjaanmu banyak, panjang umur sehat selalu,
          lancar-lancar kerjanya, dan semoga nanti bisa kerja dan tinggal di luar &lt;3.
        </p>
      
        <p>
          Semakin sayang orang tua, temen-temenmu (jangan apatis :&lt;), dan semakin sayang aku juga yaa hehehe.
          Aku mau bilang semoga kamu jadi orang yang lebih baik lagi tapi kamu udah baik banget..
          Sukses terus ya, baby.. sampai nanti bisa punya Porsche pink mwehehe.
        </p>

        <p>
          Terima kasih banget udah hadir di hidupku dan mau sama aku (maaf kalau cringe tapi beneran.. 1x" gpp).
          Kamu benar-benar bikin aku happy dan lebih termotivasi untuk nerjain segala hal.
          Kamu yang selalu nyemangatin aku dan sabar banget. Semoga kita bisa bareng terus selamanya yaa &lt;3.
        </p>

        <p>
          Oh iya.. aku pengen kamu tau kalau banyak yang peduli sama kamu..
          keluarga kamu, temen-temen kamu, dan aku. Jadi apapun itu, bakal selalu ada yang support kamu kok &lt;3.
        </p>

        <p>
          Once again, happy birthday Wilson Tandya aka baby. Hope you have a blast, God bless you always &lt;3.
        </p>



      </div>

      <Footer />
    </div>
  );
}
