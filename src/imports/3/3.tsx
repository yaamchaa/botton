import { Link, useNavigate } from 'react-router';
import svgPaths from "./svg-exl3g97uvw";
function CenterNav() {
  const linkClass =
    "no-underline cursor-pointer hover:opacity-80 transition-opacity " +
    "font-['Gmarket Sans',sans-serif] font-light text-[#c1c1c1] text-[27px] tracking-[2.7px] whitespace-nowrap leading-none";

  return (
    <div className="absolute left-1/2 top-[340px] -translate-x-1/2 flex items-center gap-[120px]">
      <Link to="/about" className={linkClass}>
        About
      </Link>

      <Link to="/projects" className={linkClass}>
        Projects
      </Link>

      <Link to="/interior-kitchen" className={linkClass}>
        Price
      </Link>

      <Link to="/contact" className={linkClass}>
        Contacts
      </Link>
    </div>
  );
}

function WebsiteBadge() {
  return (
    <div className="relative h-[47px] w-[135px]">
      <div className="absolute left-[11px] top-[12px]">
        <div className="whitespace-nowrap font-['MS_Gothic:Regular',sans-serif] not-italic text-[#b7b7b7] leading-none">
          <p>
            <span className="text-[7px]">Develop for</span>
            <span
              className="ml-1 font-['Noto_Sans:Display_Regular',sans-serif] text-[15px]"
              style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}
            >
              Website
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function HeaderBar() {
  const navigate = useNavigate();

  return (
    <div className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-white/75 px-[360px] py-[20px] backdrop-blur-md">
      <button
        type="button"
        onClick={() => navigate('/menu')}
        aria-label="메뉴 페이지로 이동"
        className="flex h-[62px] w-[140px] shrink-0 cursor-pointer flex-col items-start justify-center gap-[10px] overflow-hidden px-[35px] hover:opacity-70 transition-opacity"
      >
        <span className="block h-px w-[70px] bg-black" />
        <span className="block h-px w-[70px] bg-black" />
      </button>

      <button
        type="button"
        onClick={() => navigate('/page2')}
        aria-label="메인 페이지로 이동"
        className="h-[38px] w-[133px] shrink-0 cursor-pointer hover:opacity-80 transition-opacity text-left"
      >
        <div className="pointer-events-none font-['Gmarket Sans',sans-serif] text-[25px] font-light">
          <span>bo</span>
          <span className="font-bold">tton.</span>
          <span>co</span>
        </div>
      </button>

      <Link
        to="/website"
        aria-label="웹사이트 페이지로 이동"
        className="relative h-[47px] w-[135px] shrink-0 rounded-full cursor-pointer hover:opacity-60 transition-opacity no-underline"
      >
        <WebsiteBadge />
      </Link>
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white">
      <HeaderBar />
      <CenterNav />
      <BobSink />
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
      <div className="[word-break:break-word] flex flex-col font-font-['Gmarket Sans',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#b7b7b7] text-[12px] whitespace-nowrap">
        <p className="leading-[1.5]">{` inc`}</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[29px] items-center relative shrink-0">
      <Group />
      <Frame3 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[18px] relative shrink-0 w-[105px]">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-font-['Gmarket Sans',sans-serif] font-light justify-center leading-[0] left-0 not-italic text-[#b7b7b7] text-[12px] top-[9px] whitespace-nowrap">
        <p className="leading-[1.5] whitespace-pre">{`T  031 729 0741`}</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[18px] relative shrink-0 w-[187px]">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-font-['Gmarket Sans',sans-serif] font-light justify-center leading-[0] left-0 not-italic text-[#b7b7b7] text-[12px] top-[9px] whitespace-nowrap">
        <p className="leading-[1.5] whitespace-pre">{`E-mail  botton @ naver.com`}</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[40px] h-[23px] items-center justify-center pt-[2px] relative shrink-0">
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[80px] items-end relative shrink-0">
      <Frame10 />
      <Frame4 />
    </div>
  );
}

function BobSink() {
  return (
    <div className="absolute content-between flex flex-wrap items-start left-[216px] pl-[188px] top-[647px] w-[1535px]" data-name="Bob' sink">
      <Frame />
    </div>
  );
}
