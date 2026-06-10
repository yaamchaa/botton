import { Link } from 'react-router';

function Frame() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[50px] items-center left-0 pl-[100px] py-[20px] top-0 w-[1920px]">
      <Link to="/" className="h-[38px] relative shrink-0 w-[133px] no-underline cursor-pointer hover:opacity-80 transition-opacity" data-name="logo">
        <div className="absolute h-[38px] inset-0 pointer-events-none">
          <div className="[word-break:break-word] flex flex-col font-['Gmarket Sans',sans-serif] font-light justify-center leading-[0] not-italic pointer-events-auto sticky text-[#3b3b3b] text-[25px] top-0 whitespace-nowrap">
            <p>
              <span className="leading-[1.5]">bo</span>
              <span className="[word-break:break-word] font-['Gmarket_Sans_TTF:Bold',sans-serif] leading-[1.5] not-italic">tton.</span>
              <span className="leading-[1.5]">co</span>
            </p>
          </div>
        </div>
      </Link>
      <div className="h-[38px] relative shrink-0 w-[133px]" data-name="logo">
        <div className="absolute h-[38px] inset-0 pointer-events-none">
          <div className="[word-break:break-word] flex flex-col font-['Gmarket Sans',sans-serif] font-light justify-center leading-[0] not-italic pointer-events-auto sticky text-[#3b3b3b] text-[25px] top-0 whitespace-nowrap">
            <p className="leading-[1.5]">CMS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Cms() {
  return (
    <div className="bg-white relative size-full" data-name="cms페이지">
      <Frame />
    </div>
  );
}