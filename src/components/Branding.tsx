'use client';
import { useState, useEffect } from 'react';

export default function Branding() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Handle incoming messages
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === "TOGGLE_BRANDING") {
        setIsVisible(event.data.visible);
      }
    };

    // Check if running in iframe
    const isInIframe = window !== window.parent;
    if (isInIframe) {
      setIsVisible(false);
    }

    // Add message listener
    window.addEventListener("message", handleMessage);
    
    // Cleanup
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  if (!isVisible) return null;

  return (
     <a
      href="https://getcreatr.xyz"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 flex items-center bg-black/90 hover:bg-black text-white px-2.5 py-1.5 rounded-md font-sans text-xs shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl backdrop-blur-sm group z-50"
    >
      <span className="flex items-center gap-1">
        Made with        
        <svg width="40" height="10" viewBox="0 0 1600 373" fill="none" xmlns="http://www.w3.org/2000/svg"
          className="transform -translate-y-[1px] inline-block align-middle group-hover:scale-110 transition-transform duration-300"
        >
          <path d="M191.364 372.023C80.6309 372.023 0 284.335 0 185.752C0 86.6496 80.6309 0 191.364 0C253.718 0 298.872 24.9053 332.199 60.1878L278.983 112.593C260.706 92.8759 233.292 73.1593 191.364 73.1593C122.559 73.1593 75.793 128.158 75.793 185.752C75.793 246.977 126.322 298.863 191.364 298.863C229.529 298.863 260.169 283.816 278.445 259.949L332.199 311.316C298.872 349.193 250.493 372.023 191.364 372.023ZM380.997 363.202V85.6119H452.49V117.781C465.928 92.876 507.319 84.0553 541.721 85.6119V158.252C498.181 150.988 456.253 177.45 456.253 221.034V363.202H380.997ZM707.271 368.391C620.19 368.391 561.598 294.194 561.598 222.591C561.598 147.875 612.665 77.3101 700.284 77.829C795.965 78.3479 862.62 150.988 835.743 254.76H643.842C647.605 279.666 678.244 303.533 714.797 303.533C734.686 304.052 769.089 295.231 778.764 282.26L835.743 324.288C806.716 355.938 759.95 368.391 707.271 368.391ZM643.304 191.978H762.1C764.788 173.299 749.2 141.649 702.971 141.649C663.193 141.649 643.304 169.667 643.304 191.978ZM1020.28 366.315C938.031 366.315 871.376 301.977 871.376 222.591C871.376 143.724 938.031 79.3856 1020.28 79.3856C1101.98 79.3856 1168.64 143.724 1168.64 222.591V368.391H1093.38V334.146C1076.72 353.344 1050.38 366.315 1020.28 366.315ZM1020.28 293.675C1060.59 293.675 1093.38 262.024 1093.38 222.591C1093.38 183.676 1060.59 152.026 1020.28 152.026C979.422 152.026 946.632 183.676 946.632 222.591C946.632 262.024 979.422 293.675 1020.28 293.675ZM1390.42 364.759C1329.68 364.759 1235.07 349.193 1235.07 248.534V158.252H1208.73V85.6119H1235.07V28.0184H1310.33V85.6119H1380.21V158.252H1310.33V232.449C1310.33 286.93 1352.25 292.118 1390.42 292.118V364.759ZM1439.28 363.202V85.6119H1510.77V117.781C1524.21 92.876 1565.6 84.0553 1600 85.6119V158.252C1556.46 150.988 1514.53 177.45 1514.53 221.034V363.202H1439.28Z" 
          fill="currentColor"
          className="group-hover:text-purple-300 transition-colors duration-300"/>

        </svg>
      </span>
      
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsVisible(false);
        }}
        className="ml-1 p-1 opacity-70 hover:opacity-100 transition-opacity duration-200 rounded-full hover:bg-white/10"
      >
        <svg 
          width="12" 
          height="12" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </a>  );
}
