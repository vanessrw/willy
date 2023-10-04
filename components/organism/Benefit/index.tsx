import BenefitCard from "./BenefitCard";

export default function Benefit() {
  return (
    <div className="benefit">
        <div className="benefit-wrapper" >
          
            <BenefitCard 
            title="Fam" 
            description="Since day 1" 
            iconPath="/foto/fam.jpg" 
            buttonDestination="/fam" 
            buttonText="See more" />

            <BenefitCard 
            title="Uni" 
            description="life at uni" 
            iconPath="/foto/hskotak.jpg" 
            buttonDestination="/uni" 
            buttonText="See more" />

            <BenefitCard title="Nessy" 
            description="<3 willy forever" 
            iconPath="/foto/gzkotak.jpg" 
            buttonDestination="/nessy" 
            buttonText="See more" />
        </div>
    </div>
  )
}
