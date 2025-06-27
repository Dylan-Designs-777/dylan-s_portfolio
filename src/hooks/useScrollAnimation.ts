import { useEffect, useState } from 'react'

interface ScrollAnimationOptions {
  threshold?: number
  triggerOnce?: boolean
}

export const useScrollAnimation = (
  ref: React.RefObject<HTMLElement>,
  options: ScrollAnimationOptions = {}
) => {
  const { threshold = 0.1, triggerOnce = true } = options
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const currentRef = ref.current
    
    if (!currentRef) return
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          
          if (triggerOnce) {
            observer.unobserve(currentRef)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold }
    )
    
    observer.observe(currentRef)
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [ref, threshold, triggerOnce])
  
  return isVisible
}

export default useScrollAnimation