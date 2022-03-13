import {useEffect, useState} from "react"

export const useWindowPosition = () => {
  const [positionY, setPositionY] = useState<number>(window.scrollY)

  useEffect(() => {
    const handleScroll = () => {
      setPositionY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return positionY
}
