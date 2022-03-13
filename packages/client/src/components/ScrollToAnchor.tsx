import {useLocation} from "react-router-dom"
import {useEffect} from "react"

export const ScrollToAnchor = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const anchor = document.querySelector(location.hash) as HTMLElement
      if (anchor) {
        window.scrollTo({
          top: anchor.offsetTop - 60,
          behavior: "smooth"
        })
      }
    }
  }, [location])

  return null
}
