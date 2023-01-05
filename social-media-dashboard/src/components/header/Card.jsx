import { BiCaretDown } from 'react-icons/bi';
import { useTheme } from '../../context/ThemeProvider';
function Card({ social, followers, increase, bg, imgsrc }) {
  const { cardBg, secondaryText, mainText, cardBgHover } = useTheme();
  return (
    <div
      className={`cursor-pointer shadow-md rounded-md overflow-hidden h-52 w-full md:w-1/4 ${cardBg} transition-all ${cardBgHover}`}
      style={{ borderTopWidth: '4px', borderStyle: 'solid', borderColor: bg }}
    >
      <div className="flex flex-col items-center justify-center gap-4 h-full">
        <div className="flex gap-1 items-center">
          <img src={imgsrc} alt={social} className="h-6 w-auto" />
          <span className={`text-xs font-bold ${secondaryText}`}>
            @nckmackenzie
          </span>
        </div>
        <div>
          <p className={`text-6xl font-bold ${mainText}`}>{followers}</p>
          <div
            className={`text-base tracking-[.25em] uppercase ${secondaryText} text-center`}
          >
            Followers
          </div>
        </div>
        <div
          className={`flex items-center gap-1 text-sm font-bold ${
            increase < 0 ? 'text-bright-red' : 'text-lime-green'
          }`}
        >
          <BiCaretDown />
          <span className="inline-flex">{Math.abs(increase)} Today</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
