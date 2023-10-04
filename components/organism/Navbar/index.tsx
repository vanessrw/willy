import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

import MenuItem from './MenuItem';

export default function Navbar() {
  const [slide, setSlide] = useState(false);

  const ToggleSlide = () => {
    slide ? setSlide(false) : setSlide(true);
  };

  return (
    <div className="navbar">
      <div className="navbar-wrapper wrapper">
        <Link href="/home" passHref>
          <Image
            className="logo"
            src="/image/home.png"
            alt="home logo"
            width={60}
            height={60}
          ></Image>
        </Link>

        <ul className={slide ? 'menu slide' : 'menu'}>
          <MenuItem destination="FAM" link="/fam" />
          <MenuItem destination="UNI" link="/uni" />
          <MenuItem destination="NESSY" link="/nessy" />
        </ul>

        <div className="menu-toggle">
          <input type="checkbox" onClick={ToggleSlide} />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
