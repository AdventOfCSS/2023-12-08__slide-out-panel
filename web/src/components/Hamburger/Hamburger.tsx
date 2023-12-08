import { useState } from 'react'

const Hamburger = () => {
  const [isHamburger, setIsHamburger] = useState(true)

  const toggleNav = () => {
    setIsHamburger((prevValue) => !prevValue)
  }

  return (
    <button
      className="flex h-[58px] w-[68px] flex-col items-center justify-center bg-supernova"
      onClick={toggleNav}
    >
      <div
        className={`absolute h-[3px] w-12  bg-black transition-transform ${
          isHamburger ? '-translate-y-3' : 'rotate-45'
        }`}
      />
      <div className={`h-[3px] w-12 bg-black ${isHamburger ? '' : 'hidden'}`} />
      <div
        className={`absolute h-[3px] w-12 bg-black transition-transform ${
          isHamburger ? 'translate-y-3' : '-rotate-45'
        }`}
      />
    </button>
  )
}

export default Hamburger
