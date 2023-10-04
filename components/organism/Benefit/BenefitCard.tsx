import Image from 'next/image';
import Button from 'components/atoms/Button';

interface BenefitCardProps {
    title: string;
    description: string;
    iconPath: string;
    buttonText: string;
    buttonDestination: string;
    anchorTarget?: string;
    
}

export default function BenefitCard(props: BenefitCardProps) {
    const { title, description, iconPath, buttonText, buttonDestination, anchorTarget = '_self', } = props;
  return (
    <div className="benefit-card" data-aos="fade-up">
        <Image src={iconPath} alt="benefit icon" width={74} height={74}></Image>
        <span className='text-gradient-horizontal h3'>{title}</span>
        <p>{description}</p>
        <Button
            text={buttonText}
            destination={buttonDestination}
            fade="fade-up"
            anchorTarget={anchorTarget}
        />
    </div>
    )
}
