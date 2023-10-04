import React from 'react'
import Image from 'next/image'

interface ContactItemProps {
    logoSrc: string;
    contactType: string;
    contactName: string;
    contact: string
}

export default function ContactItem(props: ContactItemProps) {
    const { logoSrc, contactType, contactName, contact } = props;
  return (
    <div className="contact-item">
        <Image src={logoSrc} alt ="" width={24} height={24}></Image>
        <p className="text-detail">{contactType}, {contactName}</p>
        <span className='text-detail text-gradient-horizontal'>{contact}</span>
    </div>
  )
}
