import { BiCaretDown } from 'react-icons/bi';
import { useTheme } from '../../context/ThemeProvider';
function Stat({ icon, increase, type, count }) {
  const { cardBg, cardBgHover, secondaryText, mainText } = useTheme();
  return (
    <div
      className={`p-4 shadow-sm rounded-md flex flex-col gap-4 cursor-pointer ${cardBg} transition-all ${cardBgHover}`}
    >
      <div className={`flex items-center justify-between`}>
        <div className={`${secondaryText} text-sm font-bold`}>Page views</div>
        <img src={icon} alt={type} />
      </div>
      <div className={`flex items-center justify-between`}>
        <div className={`${mainText} text-3xl font-bold`}>{count}</div>
        <div
          className={`flex items-center gap-1 ${
            increase < 0 ? 'text-bright-red' : 'text-lime-green'
          }`}
        >
          <BiCaretDown />
          <span className="text-sm font-bold">{increase}%</span>
        </div>
      </div>
    </div>
  );
}

export default Stat;
