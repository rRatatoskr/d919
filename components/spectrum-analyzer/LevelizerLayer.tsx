"use client";

import React from "react";
import { RingLevelizer, RingConfig } from "./RingLevelizer";
import { VFD_COLORS } from '@/lib/constants';

const basePath = process.env.NODE_ENV === 'production' ? '/d919' : '';

const BASE_CONFIG: RingConfig = {
  rotationSpeed: 0.2,
  numSets: 2,
  setSize: 4,
  litColor: VFD_COLORS.BLUE,
  dimColor: VFD_COLORS.OFF,
  direction: 1,
};

interface LevelizerLayerProps {
  width: number;
  height: number;
}

export const LevelizerLayer: React.FC<LevelizerLayerProps> = ({ width, height }) => {
  return (
    <div 
      className="absolute top-0 left-0 pointer-events-none z-20 w-full h-full"
    >
      <div 
        className="absolute"
        style={{ 
          top: '42%', 
          right: '85.21%',
          width: '9.57%', 
          height: '25.57%' 
        }}
      >
        <RingLevelizer
          src={`${basePath}/images/masks/ring-level7.svg`}
          config={{ ...BASE_CONFIG, rotationSpeed: 0.15, direction: 1 }}
        />
      </div>
      <div 
        className="absolute"
        style={{ 
          top: '38.1%', 
          right: '86.1%',
          width: '9.57%', 
          height: '25.5%' 
        }}
      >
        <RingLevelizer
          src={`${basePath}/images/masks/ring-level6.svg`}
          config={{ ...BASE_CONFIG, rotationSpeed: 0.15, direction: 1 }}
        />
      </div>
      <div 
        className="absolute"
        style={{ 
          top: '33.5%', 
          right: '86.95%',
          width: '9.57%', 
          height: '25.7%' 
        }}
      >
        <RingLevelizer
          src={`${basePath}/images/masks/ring-level5.svg`}
          config={{ ...BASE_CONFIG, rotationSpeed: 0.15, direction: 1 }}
        />
      </div>
      <div 
        className="absolute"
        style={{ 
          top: '28.5%', 
          right: '88%',
          width: '9.57%', 
          height: '25.5%' 
        }}
      >
        <RingLevelizer
          src={`${basePath}/images/masks/ring-level4.svg`}
          config={{ ...BASE_CONFIG, rotationSpeed: 0.15, direction: 1 }}
        />
      </div>
      <div 
        className="absolute"
        style={{ 
          top: '22.7%', 
          right: '89.2%',
          width: '9.57%', 
          height: '25.5%' 
        }}
      >
        <RingLevelizer
          src={`${basePath}/images/masks/ring-level3.svg`}
          config={{ ...BASE_CONFIG, rotationSpeed: 0.15, direction: 1 }}
        />
      </div>
      <div 
        className="absolute"
        style={{ 
          top: '15.2%', 
          right: '90.7%',
          width: '9.57%', 
          height: '25.5%' 
        }}
      >
        <RingLevelizer
          src={`${basePath}/images/masks/ring-level2.svg`}
          config={{ ...BASE_CONFIG, rotationSpeed: 0.15, direction: 1 }}
        />
      </div>
      <div 
        className="absolute"
        style={{ 
          top: '15.2%', 
          right: '90.7%',
          width: '9.57%', 
          height: '25.6%' 
        }}
      >
        <RingLevelizer
          src={`${basePath}/images/masks/ring-level1.svg`}
          config={{ ...BASE_CONFIG, rotationSpeed: 0.15, direction: 1 }}
        />
      </div>
      
      

    </div>
  );
};