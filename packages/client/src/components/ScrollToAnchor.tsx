import {useLocation} from "react-router-dom"
import {useEffect} from "react"

export const ScrollToAnchor = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const anchor = document.querySelector(location.hash)
      if (anchor) {
        anchor.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }, [location])

  return null
}
