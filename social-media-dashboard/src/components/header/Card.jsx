import { useTheme } from '../../context/ThemeProvider';
function Card({ social, followers, increase, bg, imgsrc }) {
  const { cardBg, secondaryText } = useTheme();
  return (
    <div
      className={`shadow-md rounded-md overflow-hidden h-32 basis-full md:basis-1/4 ${cardBg}`}
      style={{ borderTopWidth: '4px', borderStyle: 'solid', borderColor: bg }}
    >
      <div className="flex items-center justify-center gap-6 h-full">
        <div className="flex gap-1">
          <img src={imgsrc} alt={social} className="h-6 w-auto" />
          <span className={`text-[10px] font-bold ${secondaryText}`}>
            @nathanf
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
