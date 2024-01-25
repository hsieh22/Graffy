
type TimeBarProps = {
  timer: number;
  maxTime: number;
  color: string;
}

export default function TimeBar({ timer, maxTime, color = '#2694DB' }: TimeBarProps) {

  return (
    <div className="relative w-full">
      <div className="absolute right-0 bottom-0 h-3 z-[5]" style={{ width: `${timer/maxTime*100}%`, background: `${color}`}} />
      <div className="absolute right-0 bottom-0 w-full h-3 bg-gray-200"/>
    </div>
  );
}