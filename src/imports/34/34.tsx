import svgPaths from "./svg-yxipmg18r9";
import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
import ScrollToTop from "./ScrollToTop";

function Frame5() {
  const navigate = useNavigate();

  const handleMoveInteriorPrice = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    setTimeout(() => {
      navigate('/interior-kitchen');
    }, 500);
  };

  return (
    <div
      onClick={handleMoveInteriorPrice}
      className="[word-break:break-word] content-stretch flex flex-col font-['Gmarket Sans',sans-serif] font-light text-[55px] cursor-pointer"
    >
      <div className="content-stretch flex items-center justify-center relative shrink-0">
        <p className="leading-none">INTERIOR DESIGN</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame5 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip pb-[270px] pointer-events-auto pt-[350px] sticky top-0 w-[1920px]">
      <Frame8 />
    </div>
  );
}

function Frame6() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleMoveInteriorPrice = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    setTimeout(() => {
      navigate('/interior-price-1');
    }, 500);
  };

  return (
    <div
      onClick={handleMoveInteriorPrice}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="[word-break:break-word] content-stretch flex font-['Gmarket Sans',sans-serif] font-light items-center justify-between leading-[0] not-italic relative shrink-0 text-black w-[1198px] whitespace-nowrap cursor-pointer hover:opacity-70 transition-opacity duration-500"
    >
      <div className="flex flex-col justify-center relative shrink-0 text-[19px] tracking-[1.9px]">
        <p className="leading-none">
          {isHovered
            ? "인테리어 디자인"
            : "FULL SERVICE INTERIOR DESIGN"}
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[30px] tracking-[3px]">
        <p className="leading-none">+</p>
      </div>
    </div>
  );
}

function Line() {
  return (
    <div className="h-[0.3px] relative shrink-0 w-[1200px]" data-name="line페이지 구분선">
      <div
        aria-hidden
        className="absolute border-[#c8c8c8] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none"
      />
    </div>
  );
}

function Frame7() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleMoveInteriorPrice = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    setTimeout(() => {
      navigate('/interior-price-2');
    }, 500);
  };

  return (
    <div
      onClick={handleMoveInteriorPrice}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="[word-break:break-word] content-stretch flex font-['Gmarket Sans',sans-serif] font-light items-center justify-between leading-[0] not-italic relative shrink-0 text-black w-[1198px] whitespace-nowrap cursor-pointer hover:opacity-70 transition-opacity duration-500"
    >
      <div className="flex flex-col justify-center relative shrink-0 text-[19px] tracking-[1.9px]">
        <p className="leading-none">
          {isHovered
            ? "인테리어 디자인  +  공사 감리"
            : "FULL SERVICE INTERIOR DESIGN  +  DESIGN SUPERVISION"}
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[30px] tracking-[3px]">
        <p className="leading-none">+</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[word-break:break-word] col-1 flex flex-col font-['Gmarket Sans',sans-serif] font-light justify-center ml-0 mt-0 not-italic relative row-1 text-[#3b3b3b] text-[0px] whitespace-nowrap">
        <p className="text-[14px]">
          <span>bo</span>
          <span className="font-bold">tton.</span>
          <span>co</span>
        </p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex h-[23px] items-center justify-center pt-[2px] relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Gmarket_Sans_TTF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b7b7b7] text-[12px] whitespace-nowrap">
        <p className="leading-[1.5]">{` inc`}</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[29px] items-center relative shrink-0">
      <Group />
      <Frame3 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[18px] relative shrink-0 w-[105px]">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Gmarket_Sans_TTF:Medium',sans-serif] justify-center leading-[0] left-0 not-italic text-[#b7b7b7] text-[12px] top-[9px] whitespace-nowrap">
        <p className="leading-[1.5] whitespace-pre">{`T  031 729 0741`}</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-[18px] relative shrink-0 w-[187px]">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Gmarket_Sans_TTF:Medium',sans-serif] justify-center leading-[0] left-0 not-italic text-[#b7b7b7] text-[12px] top-[9px] whitespace-nowrap">
        <p className="leading-[1.5] whitespace-pre">{`E-mail  botton @ naver.com`}</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[40px] h-[23px] items-center justify-center pt-[2px] relative shrink-0">
      <Frame10 />
      <Frame12 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[80px] items-end relative shrink-0">
      <Frame11 />
      <Frame4 />
    </div>
  );
}

function BobSink() {
  return (
    <div className="content-between flex flex-wrap items-start pl-[188px] relative shrink-0 w-[1575px]" data-name="botton">
      <Frame />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[220px] h-[830px] items-center pb-[20px] pointer-events-auto pt-[320px] sticky top-0 w-[1920px]">
      <div className="content-stretch flex flex-col gap-[70px] items-center justify-center relative shrink-0 w-full">
        <Frame6 />
        <Line />
        <Frame7 />
      </div>
      <BobSink />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[135px]">
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[11px] top-[12px]">
      <div className="[word-break:break-word] flex flex-col font-['MS_Gothic:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b7b7b7] text-[0px] whitespace-nowrap">
        <p>
          <span className="leading-[normal] text-[7px]">Develop for</span>
          <span
            className="[word-break:break-word] font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[normal] text-[#b7b7b7] text-[15px]"
            style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}
          >{` `}</span>
          <span
            className="[word-break:break-word] font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[normal] text-[#b7b7b7] text-[15px]"
            style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}
          >
            W
          </span>
          <span
            className="[word-break:break-word] font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[normal] text-[#b7b7b7] text-[15px]"
            style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}
          >
            e
          </span>
          <span
            className="[word-break:break-word] font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[normal] text-[#b7b7b7] text-[15px]"
            style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}
          >
            b
          </span>
          <span
            className="[word-break:break-word] font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[normal] text-[#b7b7b7] text-[15px]"
            style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}
          >
            s
          </span>
          <span
            className="[word-break:break-word] font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[normal] text-[#b7b7b7] text-[15px]"
            style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}
          >
            i
          </span>
          <span
            className="[word-break:break-word] font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[normal] text-[#b7b7b7] text-[15px]"
            style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}
          >
            t
          </span>
          <span
            className="[word-break:break-word] font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[normal] text-[#b7b7b7] text-[15px]"
            style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}
          >
            e
          </span>
        </p>
      </div>
    </div>
  );
}

function Frame14() {
  const navigate = useNavigate();

  return (
    <div className="fixed bg-white/75 backdrop-blur-md content-stretch flex items-center justify-between left-0 px-[360px] py-[20px] top-0 w-full z-50">
      <div
        onClick={() => navigate('/menu')}
        className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[10px] h-[62px] items-start justify-center overflow-clip px-[35px] shrink-0 sticky top-0 w-[140px] cursor-pointer hover:opacity-70 transition-opacity"
        data-name="메뉴 이동 버튼"
      >
        <div className="h-0 relative shrink-0 w-[70px]">
          <div className="absolute inset-[-1.5px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 1.5">
              <line id="Line 45" stroke="var(--stroke-0, black)" strokeWidth="1.5" x2="70" y1="0.75" y2="0.75" />
            </svg>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-[70px]">
          <div className="absolute inset-[-1.5px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 1.5">
              <line id="Line 45" stroke="var(--stroke-0, black)" strokeWidth="1.5" x2="70" y1="0.75" y2="0.75" />
            </svg>
          </div>
        </div>
      </div>
      <div className="h-[38px] relative shrink-0 w-[133px] cursor-pointer" data-name="logo" onClick={() => navigate('/')}>
        <div className="absolute h-[38px] inset-0 pointer-events-none">
          <div className="font-['Gmarket Sans',sans-serif] font-light text-[25px]">
            <span>bo</span>
            <span className="font-bold">tton.</span>
            <span>co</span>
          </div>
        </div>
      </div>
      <Link
        to="/website"
        className="backdrop-blur-[5px] h-[47px] relative shrink-0 w-[135px] cursor-pointer rounded-full hover:rounded-full hover:bg-gray-200 transition-all duration-800"
        data-name="웹사이트 이동버튼"
      >
        <Frame1 />
        <Frame2 />
      </Link>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="interior">
      <div className="absolute bottom-0 h-[1792px] left-0 pointer-events-none top-0">
        <Frame9 />
      </div>
      <div className="absolute bottom-0 h-[1350px] left-0 pointer-events-none top-[442px]">
        <Frame13 />
      </div>
      <Frame14 />
    </div>
  );
}