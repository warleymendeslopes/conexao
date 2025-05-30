'use client'

import { useLayoutEffect, useState } from 'react'

const getMobileDetect = (userAgent: NavigatorID['userAgent']) => {
  const isAndroid = () => Boolean(userAgent.match(/Android/i))
  const isIos = () => Boolean(userAgent.match(/iPhone|iPad|iPod/i))
  const isOpera = () => Boolean(userAgent.match(/Opera Mini/i))
  const isWindows = () => Boolean(userAgent.match(/IEMobile/i))
  const isSSR = () => Boolean(userAgent.match(/SSR/i))
  const isMobile = () =>
    Boolean(isAndroid() || isIos() || isOpera() || isWindows())
  const isDesktop = () => Boolean(!isMobile() && !isSSR())
  return {
    isMobile,
    isDesktop,
    isAndroid,
    isIos,
    isSSR,
  }
}
export const useMobileDetect = () => {
  const userAgent =
    typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent
  return getMobileDetect(userAgent)
}

export const useIsMobile = (maxSize = 768): boolean => {
  const [isMobile, setIsMobile] = useState(false)

  useLayoutEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.innerWidth < maxSize)
    }

    window.addEventListener('resize', updateSize)
    // updateSize();
    return (): void => window.removeEventListener('resize', updateSize)
  }, [maxSize])

  return isMobile
}
