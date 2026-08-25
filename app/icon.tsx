import { ImageResponse } from 'next/og';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(<div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 16, background: 'linear-gradient(145deg,#a066ff,#6429d8)', color: 'white', fontSize: 22, fontWeight: 900, letterSpacing: -2 }}>DP</div>, size);
}
