import Link from 'next/link';
import Image from 'next/image';

import SubHeader from 'components/atoms/SubHeader';
import Button from 'components/atoms/Button';
export default function EventFam() {

  return (
    <div className="eventfam">
      <div className="vidfam">
        <div className="vid1fam">
          <Link href="puisi" passHref>
            <Image
              data-aos="fade-up"
              className="thumbnail"
              src="/foto/vincent.jpg"
              alt="vid thumbnail"
              width={300}
              height={300}
            ></Image>
          </Link>
        </div>
        <div className="event-content">
          <div className="content">
            <SubHeader title="VICENT" subtitle="" left fade="fade-up" />
            <Button
            text="CLICK ME"  
            destination ="puisi" 
            />
            <p data-aos="fade-up">{""}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
