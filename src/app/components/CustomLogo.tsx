export default function CustomLogo() {
  return (
    <div className="relative w-full h-full flex items-center justify-start">
      <svg 
        viewBox="0 0 200 40" 
        className="w-full h-full"
        preserveAspectRatio="xMinYMid meet"
      >
        <text 
          x="0" 
          y="28" 
          className="font-black text-[28px]"
          style={{ fill: '#D7001F' }}
        >
          Techno
        </text>
        <text 
          x="92" 
          y="28" 
          className="font-black text-[28px]"
          style={{ fill: '#009343' }}
        >
          LOI
        </text>
      </svg>
    </div>
  );
}
