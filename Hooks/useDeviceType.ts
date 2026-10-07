'use client';

import { useState, useEffect } from 'react';

interface DeviceTypeReturn {
  isDesktop: boolean;
  isMobile: boolean;
  isTablet: boolean;
}

export const useDeviceType = (): DeviceTypeReturn => {
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const desktop = width >= 1024;
      const tablet = width >= 768 && width < 1024;
      const mobile = width < 768;
      
      setIsDesktop(desktop);
      setIsTablet(tablet);
      setIsMobile(mobile);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return { isDesktop, isMobile, isTablet };
};