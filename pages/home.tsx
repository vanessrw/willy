import type {NextPage} from 'next';
import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from 'components/organism/Navbar';
import Footer from 'components/organism/Footer';
import Hero from 'components/organism/Hero';
import Benefit from 'components/organism/Benefit';
import Image from 'next/image';
import Button from 'components/atoms/Button';

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className='kotak-container'>
        <div className='gbr'>
          <span id="kotak">
            <Image src="/foto/fam-kotak.jpg" alt="" width={350} height={350}></Image>
          </span>
          <h3> since day 1</h3>
          <Button
            text="see fam"  
            destination ="fam" 
          />
        </div>
        <div className='gbr'>
          <span id="kotak">
            <Image src="/foto/uni.jpg" alt="" width={350} height={350}></Image>
          </span>
          <h3>ITB</h3>
          <Button
            text="see uni"  
            destination ="uni" 
          />
        </div>
        <div className='gbr'>
          <span id="kotak">
            <Image src="/foto/nessy5.jpg" alt="" width={350} height={350}></Image>
          </span>
          <h3> loves willy </h3>
          <Button
            text="see nessy"  
            destination ="nessy" 
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
