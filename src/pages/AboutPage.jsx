import React, { useEffect } from 'react'

const AboutPage = () => {
    useEffect(() => {
        document.title = 'About - WoraponK';
      }, []);

  return (
    <div>AboutPage</div>
  )
}

export default AboutPage