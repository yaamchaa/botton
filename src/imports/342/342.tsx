import svgPaths from "./svg-vjauj36982";
import { Link, useNavigate } from 'react-router';
import ScrollToTop from "./ScrollToTop";

function Frame7() {
  const navigate = useNavigate();

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
      className="[word-break:break-word] content-stretch flex font-['Gmarket Sans',sans-serif] font-light items-center justify-between leading-[0] not-italic relative shrink-0 text-black w-[1198px] whitespace-nowrap cursor-pointer hover:opacity-70 transition-opacity duration-500"
    >
      <div className="flex flex-col justify-center relative shrink-0 text-[19px] tracking-[1.9px]">
        <p className="leading-none">FULL SERVICE INTERIOR DESIGN</p>
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
      <div aria-hidden className="absolute border-[#c8c8c8] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none" />
    </div>
  );
}

function Frame8() {
  const navigate = useNavigate();

  const handleMoveInteriorPrice = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    setTimeout(() => {
      navigate('/interior');
    }, 500);
  };

  return (
    <div
      onClick={handleMoveInteriorPrice}
      className="[word-break:break-word] content-stretch flex font-['Gmarket Sans',sans-serif] font-light items-center justify-between leading-[0] not-italic relative shrink-0 text-black w-[1198px] whitespace-nowrap cursor-pointer hover:opacity-70 transition-opacity duration-500"
    >
      <div className="flex flex-col justify-center relative shrink-0 text-[19px] tracking-[1.9px]">
        <p className="leading-none">FULL SERVICE INTERIOR DESIGN  +  DESIGN SUPERVISION</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[30px] tracking-[3px]">
        <p className="leading-none">-</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Gmarket Sans',sans-serif] font-light gap-[300px] items-start leading-[0] not-italic relative shrink-0 tracking-[1.9px] w-[1199px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[19px] text-black">
        <p className="leading-none whitespace-pre">{`Interior Design  costs`}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#9a9a9a] text-[0px]">
        <p className="whitespace-pre">
          <span className="leading-none text-[19px]">45</span>
          <span className="leading-none text-[#9a9a9a] text-[19px]">{`5,000 `}</span>
          <span className="leading-none text-[#9a9a9a] text-[11px]">\</span>
          <span className="leading-none text-[#9a9a9a] text-[19px]">{`  /  m2`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Gmarket Sans',sans-serif] font-light gap-[20px] items-start leading-[0] not-italic relative shrink-0 w-[1199px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[19px] text-black tracking-[1.9px]">
        <p className="whitespace-pre">
          <span className="leading-none">{`Concept development. /  `}</span>
          <span className="leading-none text-[#9a9a9a]">{`컨셉 개발  /  1,2차 편집`}</span>
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[19px] text-black tracking-[1.9px]">
        <p className="whitespace-pre">
          <span className="leading-none">{`Preliminary design  /`}</span>
          <span className="leading-none text-[#9a9a9a]">{`  예비 설계`}</span>
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[19px] text-black tracking-[1.9px]">
        <p className="whitespace-pre">
          <span className="leading-none">{`3D-visualization.  / `}</span>
          <span className="leading-none text-[#9a9a9a]">3D 시뮬레이션</span>
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[19px] text-black tracking-[1.9px]">
        <p className="whitespace-pre">
          <span className="leading-none">{`Working documentation  /  `}</span>
          <span className="leading-none text-[#9a9a9a]">작업문서 ( 설게도, 자재 및 가구 사양, 도면등 )</span>
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[19px] text-black tracking-[1.9px]">
        <p className="leading-none mb-0 whitespace-pre">​</p>
        <p className="leading-none mb-0 whitespace-pre">​</p>
        <p className="leading-none mb-0 text-[#adadad] whitespace-pre">{`Design Supervision  /  디자인 감독`}</p>
        <p className="leading-none mb-0 whitespace-pre">​</p>
        <p className="leading-none whitespace-pre">​</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[19px] text-black tracking-[1.9px]">
        <p className="whitespace-pre">
          <span className="leading-none">{`Assistance in the selection of filling  /`}</span>
          <span className="leading-none text-[#9a9a9a]">{`  기초 구조체 시방 지원`}</span>
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[19px] text-black tracking-[1.9px]">
        <p className="whitespace-pre">
          <span className="leading-none">{`Calculation of project specifications.  / `}</span>
          <span className="leading-none text-[#9a9a9a]">디자인 시방 체크</span>
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[19px] text-black tracking-[1.9px]">
        <p className="whitespace-pre">
          <span className="leading-none">{`Organization and control of deliveries  /  `}</span>
          <span className="leading-none text-[#9a9a9a]">지정자재 배송 및 검수</span>
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[19px] text-black tracking-[1.9px]">
        <p className="whitespace-pre">
          <span className="leading-none">{`Online сhat for consultations to the customer and foreman  /  `}</span>
          <span className="leading-none text-[#9a9a9a]">고객과 원활한 소통을 위한 온라인 채팅</span>
        </p>
      </div>
      <div className="flex flex-col justify-center opacity-10 relative shrink-0 text-[1px] text-black tracking-[0.1px]">
        <p className="leading-none">/</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#adadad] text-[19px] tracking-[1.9px]">
        <p className="leading-none">The customer gets:</p>
      </div>
      <div className="flex flex-col justify-center opacity-10 relative shrink-0 text-[#adadad] text-[1px] tracking-[0.1px]">
        <p className="leading-none">/</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[19px] text-black tracking-[1.9px]">
        <p className="whitespace-pre">
          <span className="leading-none">{`Flooring plan  /  `}</span>
          <span className="leading-none text-[#9a9a9a]">평면도</span>
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[19px] text-black tracking-[1.9px]">
        <p className="whitespace-pre">
          <span className="leading-none">{`Ceiling plan  /  `}</span>
          <span className="leading-none text-[#9a9a9a]">천정도</span>
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[19px] text-black tracking-[1.9px]">
        <p className="whitespace-pre">
          <span className="leading-none">{`Floor section drawing  /  `}</span>
          <span className="leading-none text-[#9a9a9a]">평면 단면도</span>
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[19px] text-black tracking-[1.9px]">
        <p className="whitespace-pre">
          <span className="leading-none">{`Ceiling section drawing  /  `}</span>
          <span className="leading-none text-[#9a9a9a]">천정 단면도</span>
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[19px] text-black tracking-[1.9px]">
        <p className="whitespace-pre">
          <span className="leading-none">{`Plan of light groups,  /  `}</span>
          <span className="leading-none text-[#9a9a9a]">조명계획 ( 스위치, 소켓 및 전기 콘센트 계획 )</span>
          <span className="leading-none">{` `}</span>
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[19px] text-black tracking-[1.9px]">
        <p className="whitespace-pre">
          <span className="leading-none">{`Specification of doors  /  `}</span>
          <span className="leading-none text-[#9a9a9a]">도어 사양</span>
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[19px] text-black tracking-[1.9px]">
        <p className="whitespace-pre">
          <span className="leading-none">{`Specification of furniture  /  `}</span>
          <span className="leading-none text-[#9a9a9a]">기성 가구 및 맞춤 가구 사양</span>
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[19px] text-black tracking-[1.9px]">
        <p className="whitespace-pre">
          <span className="leading-none">{`Specification of household appliances  /  `}</span>
          <span className="leading-none text-[#9a9a9a]">가전제품 추천 사양</span>
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[19px] text-black tracking-[1.9px]">
        <p className="whitespace-pre">
          <span className="leading-none">{`Ventilation and air conditioning plan  /  `}</span>
          <span className="leading-none text-[#9a9a9a]">필요시 공기 및 정화 계획</span>
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[19px] text-black tracking-[1.9px]">
        <p className="whitespace-pre">
          <span className="leading-none">{`Heating plan  /  `}</span>
          <span className="leading-none text-[#9a9a9a]">필요시 난방 계획</span>
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[19px] text-black tracking-[1.9px]">
        <p className="whitespace-pre">
          <span className="leading-none">{`Specification of finishing materials  /  `}</span>
          <span className="leading-none text-[#9a9a9a]">마감 자재표</span>
        </p>
      </div>
      <div className="flex flex-col justify-center opacity-10 relative shrink-0 text-[1px] text-black tracking-[0.1px]">
        <p className="leading-none">/</p>
      </div>
      <div className="flex flex-col justify-center opacity-10 relative shrink-0 text-[1px] text-black tracking-[0.1px]">
        <p className="leading-none">/</p>
      </div>
      <div className="flex flex-col justify-center opacity-10 relative shrink-0 text-[1px] text-black tracking-[0.1px]">
        <p className="leading-none">/</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[25px] text-black tracking-[2.5px]">
        <p className="leading-none">Order</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[70px] items-center justify-center relative shrink-0 w-full">
      <Frame7 />
      <Line />
      <Frame8 />
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Frame1290Variant() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[1772px] items-center left-[-2px] pb-[20px] pt-[320px] top-[4px] w-[1920px]" data-name="Frame 1290/Variant2">
      <Frame11 />
    </div>
  );
}



function Frame2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[11px] top-[12px]">
      <div className="[word-break:break-word] flex flex-col font-['MS_Gothic:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e5e5e5] text-[0px] whitespace-nowrap">
        <p>
          <span className="leading-[normal] text-[7px]">exclusively for</span>
          <span className="[word-break:break-word] font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[normal] text-[#e5e5e5] text-[15px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>{` Member`}</span>
        </p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[893px] top-[42px]">
      
    </div>
  );
}

function Group1() {
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

function Frame5() {
  return (
    <div className="content-stretch flex h-[23px] items-center justify-center pt-[2px] relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Gmarket_Sans_TTF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b7b7b7] text-[12px] whitespace-nowrap">
        <p className="leading-[1.5]">{` inc`}</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[29px] items-center relative shrink-0">
      <Group1 />
      <Frame5 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-[18px] relative shrink-0 w-[105px]">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Gmarket_Sans_TTF:Medium',sans-serif] justify-center leading-[0] left-0 not-italic text-[#b7b7b7] text-[12px] top-[9px] whitespace-nowrap">
        <p className="leading-[1.5] whitespace-pre">{`T  031 729 0741`}</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[18px] relative shrink-0 w-[187px]">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Gmarket_Sans_TTF:Medium',sans-serif] justify-center leading-[0] left-0 not-italic text-[#b7b7b7] text-[12px] top-[9px] whitespace-nowrap">
        <p className="leading-[1.5] whitespace-pre">{`E-mail  botton @ naver.com`}</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[40px] h-[23px] items-center justify-center pt-[2px] relative shrink-0">
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[80px] items-end relative shrink-0">
      <Frame14 />
      <Frame6 />
    </div>
  );
}

function BobSink() {
  return (
    <div className="absolute content-between flex flex-wrap items-start left-[192px] pl-[188px] top-[1879px] w-[1535px]" data-name="Bob' sink">
      <Frame />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[135px]">
      
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[11px] top-[12px]">
      <div className="[word-break:break-word] flex flex-col font-['MS_Gothic:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b7b7b7] text-[0px] whitespace-nowrap">
        <p>
          <span className="leading-[normal] text-[7px]">Develop for</span>
          <span className="[word-break:break-word] font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[normal] text-[#b7b7b7] text-[15px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>{` `}</span>
          <span className="[word-break:break-word] font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[normal] text-[#b7b7b7] text-[15px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            W
          </span>
          <span className="[word-break:break-word] font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[normal] text-[#b7b7b7] text-[15px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            e
          </span>
          <span className="[word-break:break-word] font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[normal] text-[#b7b7b7] text-[15px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            b
          </span>
          <span className="[word-break:break-word] font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[normal] text-[#b7b7b7] text-[15px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            s
          </span>
          <span className="[word-break:break-word] font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[normal] text-[#b7b7b7] text-[15px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            i
          </span>
          <span className="[word-break:break-word] font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[normal] text-[#b7b7b7] text-[15px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            t
          </span>
          <span className="[word-break:break-word] font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[normal] text-[#b7b7b7] text-[15px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            e
          </span>
        </p>
      </div>
    </div>
  );
}

function Frame15() {
 const navigate = useNavigate();

  return (
    <div className="fixed bg-white/75 backdrop-blur-md content-stretch flex items-center justify-between left-0 px-[360px] py-[20px] top-0 w-full z-50">
      <div onClick={() => navigate('/menu')} className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[10px] h-[62px] items-start justify-center overflow-clip px-[35px] shrink-0 sticky top-0 w-[140px] cursor-pointer hover:opacity-70 transition-opacity" data-name="메뉴 이동 버튼">
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
      <Link to="/website" className="backdrop-blur-[5px] h-[47px] relative shrink-0 w-[135px] cursor-pointer rounded-full 
                    hover:opacity-60 transition-all duration-800" data-name="웹사이트 이동버튼">
        <Frame3 />
        <Frame4 />
      </Link>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="3-4(2).">
      <Frame1290Variant />
      <div className="absolute bg-white content-stretch flex flex-col gap-[10px] h-[62px] items-start justify-end left-[352px] overflow-clip pb-[5px] px-[35px] top-0 w-[196px]" data-name="메뉴 이동 버튼">
        <div className="h-0 relative shrink-0 w-[70px]">
          <div className="absolute inset-[-1.5px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 1.5">
              <line id="Line 45" stroke="var(--stroke-0, black)" strokeWidth="1.5" x2="70" y1="0.75" y2="0.75" />
            </svg>
          </div>
        </div>
      </div>
      <Link to="/website" className="absolute backdrop-blur-[5px] h-[47px] left-[1425px] top-[33px] w-[135px] cursor-pointer hover:opacity-80 transition-opacity" data-name="웹사이트 이동버튼">
        
        <Frame2 />
      </Link>
      <Group />
      <BobSink />
      <Frame15 />
    </div>
  );
}