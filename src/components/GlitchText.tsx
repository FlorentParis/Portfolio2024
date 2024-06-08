import React from 'react';

type GlitchTextProps = {
  children: React.ReactElement;
};

const GlitchText = ({ children }: GlitchTextProps) => {
  return (
    <div className="relative">
      <div className="inset-0 overflow-hidden">
        <div className="inset-0 text-white">{children}</div>
        <div className="absolute inset-0 text-white hover:animate-glitch glitch text-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default GlitchText;
