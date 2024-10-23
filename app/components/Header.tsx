import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
        <Image 
          src="/interactive-pricing-component-main/images/bg-pattern.svg" 
          alt="Background Pattern"
          width={1440}
          height={350} // Set the desired height
        />
    </div>
  )
}

export default Header
