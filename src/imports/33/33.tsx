import { Link, useNavigate } from 'react-router';

function Frame5() {
  return (
    <Link to="/interior" className="flex min-w-0 items-center justify-center no-underline">
      <div
        className="min-w-0 text-center font-['Gmarket Sans',sans-serif] font-light
        text-[#7b7b7b] text-[22px] sm:text-[25px] tracking-[1.2px] sm:tracking-[1.9px]
        hover:opacity-30 transition-opacity"
      >
        <p className="leading-none break-words">INTERIOR DESIGN</p>
      </div>
    </Link>
  );
}

function Line() {
  return (
    <div
      className="w-full max-w-[1200px] border-t border-[#c8c8c8]"
      data-name="line페이지 구분선"
    />
  );
}

function Frame6() {
  return (
    <Link to="/sink" className="flex min-w-0 items-center justify-center no-underline">
      <div
        className="min-w-0 text-center font-['Gmarket Sans',sans-serif] font-light
        text-[#7b7b7b] text-[22px] sm:text-[25px] tracking-[1.2px] sm:tracking-[1.9px]
        hover:opacity-30 transition-opacity"
      >
        <p className="leading-none break-words">KITCHEN</p>
      </div>
    </Link>
  );
}

function Frame7() {
  return (
    <section className="w-full bg-white pt-[180px] sm:pt-[220px] lg:pt-[250px] pb-[120px] sm:pb-[150px] lg:pb-[170px] overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-[1200px] min-w-0 flex-col items-center justify-center gap-[36px] sm:gap-[44px] px-4 sm:px-6 lg:px-8">
        <Frame5 />
        <Line />
        <Frame6 />
      </div>
    </section>
  );
}

function Group() {
  return (
    <div className="inline-grid min-w-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]">
      <div className="font-['Gmarket Sans',sans-serif] font-light not-italic text-[#3b3b3b] text-[14px] whitespace-nowrap">
        <p>
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
    <div className="flex h-[23px] items-center justify-center pt-[2px]">
      <div className="font-['Gmarket Sans',sans-serif] font-light text-[#b7b7b7] text-[12px] whitespace-nowrap">
        <p className="leading-[1.5]">inc</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="flex min-w-0 flex-wrap items-center gap-[16px] sm:gap-[29px]">
      <Group />
      <Frame3 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="min-w-0 font-['Gmarket Sans',sans-serif] font-light text-[#b7b7b7] text-[12px]">
      <p className="leading-[1.5] break-words">T 031 729 0741</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="min-w-0 font-['Gmarket Sans',sans-serif] font-light text-[#b7b7b7] text-[12px]">
      <p className="leading-[1.5] break-all sm:break-normal">E-mail botton @ naver.com</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="flex min-w-0 flex-wrap items-center gap-[20px] sm:gap-[40px] pt-[2px]">
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function FooterInfo() {
  return (
    <footer className="w-full overflow-x-hidden bg-white">
      <div className="mx-auto flex w-full max-w-[1920px] min-w-0 flex-wrap items-end justify-start gap-[28px] sm:gap-[40px] lg:gap-[60px] px-4 sm:px-6 md:px-8 xl:px-20 pb-10 pt-16 sm:pt-20">
        <Frame10 />
        <Frame4 />
      </div>
    </footer>
  );
}

function WebsiteBadge() {
  return (
    <div className="relative h-[47px] w-[110px] sm:w-[135px]">
      <div className="absolute left-[8px] sm:left-[11px] top-[12px]">
        <div className="whitespace-nowrap font-['MS_Gothic:Regular',sans-serif] not-italic text-[#b7b7b7] leading-none">
          <p>
            <span className="text-[7px]">Develop for</span>
            <span
              className="ml-1 font-['Noto_Sans:Display_Regular',sans-serif] text-[13px] sm:text-[15px]"
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
    <header className="fixed left-0 top-0 z-50 w-full overflow-x-hidden bg-white/75 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1920px] min-w-0 items-center justify-between px-4 sm:px-6 md:px-8 xl:px-20 py-[16px] sm:py-[20px]">
        <button
          type="button"
          onClick={() => navigate('/menu')}
          aria-label="메뉴 페이지로 이동"
          className="flex h-[56px] sm:h-[62px] w-[92px] sm:w-[120px] lg:w-[140px] shrink-0 flex-col items-start justify-center gap-[8px] sm:gap-[10px] overflow-hidden px-[14px] sm:px-[20px] lg:px-[35px] hover:opacity-70 transition-opacity"
        >
          <span className="block h-px w-[40px] sm:w-[50px] lg:w-[70px] bg-black" />
          <span className="block h-px w-[40px] sm:w-[50px] lg:w-[70px] bg-black" />
        </button>

        <button
          type="button"
          className="min-w-0 h-[38px] w-[96px] sm:w-[110px] lg:w-[133px] shrink-0 cursor-pointer text-left hover:opacity-80 transition-opacity"
          onClick={() => navigate('/')}
          aria-label="메인 페이지로 이동"
        >
          <div className="pointer-events-none whitespace-nowrap font-['Gmarket Sans',sans-serif] font-light text-[20px] sm:text-[22px] lg:text-[25px]">
            <span>bo</span>
            <span className="font-bold">tton.</span>
            <span>co</span>
          </div>
        </button>

        <Link
          to="/website"
          className="relative h-[47px] w-[110px] sm:w-[120px] lg:w-[135px] shrink-0 cursor-pointer no-underline transition-all duration-300 hover:rounded-full hover:bg-gray-200"
          aria-label="웹사이트 이동버튼"
        >
          <WebsiteBadge />
        </Link>
      </div>
    </header>
  );
}

export default function Component() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <HeaderBar />

      <main className="w-full min-w-0 overflow-x-hidden pt-[72px] sm:pt-[84px]">
        <Frame7 />
        <FooterInfo />
      </main>
    </div>
  );
}