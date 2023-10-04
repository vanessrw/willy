import React from 'react'

interface AccountProps {
    type: string;
    name: string;
    number: string
}

export default function Account(props: AccountProps) {
    const { type, name, number } = props;

  return (  
    <div className='account'>
        <p>{type}</p>
        <p>{name}</p>
        <p>{number}</p>
    </div>
  ) 
}
