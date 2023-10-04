import type {NextPage} from 'next';
import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from 'components/organism/Navbar';
import Footer from 'components/organism/Footer';
import Hero from 'components/organism/Hero';
import Benefit from 'components/organism/Benefit';
import Button from 'components/atoms/Button';

export default function puisi() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className = "fam">
      <Navbar />
      <pre>
        {`
        Dua puluh dua tahun
        Sudah kamu lewati
        Penuh naik dan turun
        Untuk hidup yang berarti
        
        Tetapi di depan sana
        Masih panjang jalan terhampar
        Bila tak dipenuhi makna
        Bukankah hidup menjadi hambar?
        
        Apa yang bisa kuberi
        Mungkin tak ada seberapa
        Apapun yang kuberi
        Mungkin hanyalah hampa
        
        Tapi kau ‘kan selalu kudukung
        Sampai kita tiba di ujung jalan
        Kebahagiaan yang tak terhitung
        Kudoakan untukmu berkian-kian
        
        Hari ini adalah harimu
        Semoga selalu panjang umurmu
        Jadikan hidup ini semakin berwarna
        Untukmu, dan untuk kita semua
        `}
      </pre>
      <Button
      text="BACK"  
      destination ="fam" 
      />
      <Footer />
    </div>
  );
};
