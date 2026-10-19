// 電源 ON 時の起動アニメーション (bootStep: 1..30, 0 = 起動していない)
// 30ms ごとに bootStep が進み、各要素がこの表に従って点灯 / 消灯する

export const BOOT_LAST_STEP = 30
export const BOOT_STEP_MS = 30

export const getBootActiveLevels = (bootStep: number) => {
  if (bootStep === 0) return [false, true, true, true, true, true, true, true];
  
  const flags = [false, false, false, false, false, false, false, false];
  if (bootStep >= 3) flags[1] = true; 
  if (bootStep >= 4) flags[2] = true; 
  if (bootStep >= 5) { flags[3] = true; flags[4] = true; } 
  if (bootStep >= 6) flags[5] = true; 
  if (bootStep >= 7) flags[6] = true; 
  if (bootStep >= 8) flags[7] = true;
  if (bootStep >= 19) flags[7] = false; 
  if (bootStep >= 20) { flags[6] = false; flags[5] = false; } 
  if (bootStep >= 21) flags[4] = false; 
  if (bootStep >= 22) { flags[3] = false; flags[2] = false; } 
  if (bootStep >= 23) flags[1] = false; 
  
  return flags;
}

export const getBootActiveBands = (bootStep: number) => {
  if (bootStep === 0) return null; 
  const bands = new Array(17).fill(false);
  if (bootStep >= 3) { bands[0] = true; bands[1] = true; }
  if (bootStep >= 4) bands[2] = true;
  if (bootStep >= 5) bands[3] = true;
  if (bootStep >= 6) { bands[4] = true; bands[5] = true; }
  if (bootStep >= 7) bands[6] = true;
  if (bootStep >= 8) { bands[7] = true; bands[8] = true; }
  if (bootStep >= 9) bands[9] = true;
  if (bootStep >= 10) bands[10] = true;
  if (bootStep >= 11) bands[11] = true;
  if (bootStep >= 12) bands[12] = true;
  if (bootStep >= 13) bands[13] = true;
  if (bootStep >= 14) bands[14] = true;
  if (bootStep >= 15) bands[15] = true;
  if (bootStep >= 16) bands[16] = true;
  if (bootStep >= 19) bands[16] = false;
  if (bootStep >= 20) { bands[15] = false; bands[14] = false; }
  if (bootStep >= 21) bands[13] = false;
  if (bootStep >= 22) { bands[12] = false; bands[11] = false; }
  if (bootStep >= 23) bands[10] = false;
  if (bootStep >= 24) { bands[9] = false; bands[8] = false; }
  if (bootStep >= 25) bands[7] = false;
  if (bootStep >= 26) bands[6] = false;
  if (bootStep >= 27) { bands[5] = false; bands[4] = false; }
  if (bootStep >= 28) bands[3] = false;
  if (bootStep >= 29) bands[2] = false;
  if (bootStep >= 30) { bands[1] = false; bands[0] = false; }
  return bands;
}

export const getBootBlockFlags = (bootStep: number) => {
  if (bootStep === 0) return []; 
  const blocks = new Array(12).fill(false);
  
  if (bootStep >= 6) { blocks[0] = true; blocks[1] = true; }
  if (bootStep >= 7) blocks[2] = true;
  if (bootStep >= 8) { blocks[3] = true; blocks[4] = true; }
  if (bootStep >= 9) blocks[5] = true;
  if (bootStep >= 10) blocks[6] = true;
  if (bootStep >= 11) blocks[7] = true;
  if (bootStep >= 12) blocks[8] = true;
  if (bootStep >= 13) blocks[9] = true;
  if (bootStep >= 14) blocks[10] = true;
  if (bootStep >= 15) blocks[11] = true;
  if (bootStep >= 20) { blocks[11] = false; blocks[10] = false; }
  if (bootStep >= 21) blocks[9] = false;
  if (bootStep >= 22) { blocks[8] = false; blocks[7] = false; }
  if (bootStep >= 23) blocks[6] = false;
  if (bootStep >= 24) { blocks[5] = false; blocks[4] = false; }
  if (bootStep >= 25) blocks[3] = false;
  if (bootStep >= 26) blocks[2] = false;
  if (bootStep >= 27) {blocks[1] = false; blocks[0] = false; }
  return blocks;
}

export const getHiddenIconIds = (bootStep: number) => {
  if (bootStep === 0) return [];
  if (bootStep < 8) {
    return ['cd-circle', 'cd', 'rom', 'cd-in']; 
  }
  return []; 
}
