import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

export const SplashScreen: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem('ia_splash_seen');
    if (hasSeenSplash) {
      setShowSplash(false);
      return;
    }

    const timer = setTimeout(() => {
      setShowSplash(false);
      sessionStorage.setItem('ia_splash_seen', 'true');
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          id="brand-splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[10000] bg-[#1C1A17] text-[#FAF8F5] flex flex-col items-center justify-center p-6 select-none"
        >
          {/* Official Red Roof & White/Black Text Logo */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Logo roofColor="#B21E27" textColor="#FAF8F5" isDarkHero={true} showTagline={true} />
          </motion.div>

          {/* Red Progress Bar */}
          <div className="w-48 h-[2px] bg-[#3B3835] rounded-full overflow-hidden mt-8">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
              className="w-full h-full bg-[#B21E27]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
