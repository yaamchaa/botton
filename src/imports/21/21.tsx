import { Link, useNavigate } from 'react-router';
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import svgPaths from "./svg-ivncwt0ifw";
import ScrollToTop from "./ScrollToTop";
import { useState } from 'react'; 
import imgFrame540 from "./1.png";
import imgFrame541 from "./2.png";
import imgFrame542 from "./3.png";
import imgFrame543 from "./4.png";
import imgFrame544 from "./5.png";
import imgFrame545 from "./6.png";
import imgFrame546 from "./7.png";
import imgRectangle24 from "./Cammeo.png";
import imgRectangle29 from "./Calacatta_Luxe.png";
import imgRectangle33 from "./TITLIS_WHITE.png";
import imgRectangle37 from "./Azure.png";
import imgRectangle30 from "./Colorado_Dunes.png";
import imgRectangle34 from "./WhiteSands.png";
import imgRectangle38 from "./ABSOLUTE_GREEN.png";
import imgRectangle31 from "./Himalaya_Crystal.png";
import imgRectangle35 from "./Mont_Blanc.png";
import imgRectangle39 from "./Capraia.png";
import imgRectangle32 from "./Layla.png";
import imgRectangle36 from "./San_Simone.png";
import imgRectangle40 from "./Colosseo.png";
import imgRectangle26 from "./ABUDHABI_WHITE.png";
import imgRectangle27 from "./AMAZONICO.png";
import imgRectangle28 from "./ARABESQUE_SILK.png";
import imgRectangle41 from "./BLANCO_CARARRA.png";
import img1 from "./instgram.png";
import img from "./pinter.png";

function BobSink() {
  return <div className="absolute h-0 left-[192px] top-[647px] w-[1535px]" data-name="Bob' sink" />;
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[528px] top-[309px] cursor-default">
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-[865px]">
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Gmarket Sans',sans-serif] font-light 
                          justify-center leading-[0] min-w-px not-italic relative text-[#c1c1c1] text-[30px] tracking-[3px]">
          <p>
            <span className="[word-break:break-word] font-['Gmarket Sans',sans-serif] font-light leading-none not-italic">{`Mould Zero Lower price`}</span>
            <span className="leading-none">{` but `}</span>
            <span className="[word-break:break-word] font-['Gmarket Sans',sans-serif] font-light leading-none not-italic">excellent design.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[528px] top-[2606px] cursor-default">
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-[865px]">
        <div
          className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Gmarket Sans',sans-serif] font-light
                     justify-center leading-[0] min-w-px not-italic relative text-[#c1c1c1] text-[30px] tracking-[3px]"
        >
          <p>
            <span className="leading-none">{` Mould Zero `}</span>
            <span className="[word-break:break-word] font-['Gmarket Sans',sans-serif] font-light leading-none not-italic">
              excellent design.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-[460px] relative shrink-0 w-[509px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.02%] left-0 max-w-none top-[-0.26%] w-full" src={imgFrame543} />
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[482px] items-start left-[360px] top-[4381px] w-[1200px]">
      <Frame12 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Gmarket Sans',sans-serif] font-light 
                      justify-center leading-[0] left-[550px] not-italic text-[12px] text-black top-[409px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[1.5]">all in one - kitchen system</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <div className="[word-break:break-word] col-1 flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[12px] justify-center ml-px mt-0 not-italic relative row-1 text-[#101010] text-[12px] w-[11px]">
        <p className="leading-[normal]">W</p>
      </div>
      <div className="col-1 h-px ml-0 mt-[5px] relative row-1 w-[13px]" data-name="Line 172 (Stroke)">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 1">
          <path d="M13 0V1H0V0H13Z" fill="var(--fill-0, #101010)" id="Line 172 (Stroke)" />
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group1 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[5px] w-[13px]">
      <Group2 />
    </div>
  );
}

function Frame28({ price }) {
  return (
    <div className="absolute content-stretch flex items-center justify-end left-[19px] top-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[normal]">{price}</p>
      </div>
    </div>
  );
}

function Frame30({ price }) {
  return (
    <div className="absolute h-[18px] left-[982px] top-[822px] w-[92px]">
      <Frame29 />
      <Frame28 price={price} />
    </div>
  );
}

function Frame26({ title }) {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[982px] top-[713px]">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[15px] text-black whitespace-pre">
        {title}
      </p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[15px] text-black whitespace-nowrap">Applicable</p>
    </div>
  );
}

function Frame19({ note }) {
  return (
    <div className="content-stretch flex h-[13px] items-end justify-center pt-[2px] relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#b7b7b7] text-[10px] text-right whitespace-pre">
        {note}
      </p>
    </div>
  );
}

function Frame20({ note }) {
  return (
    <div className="absolute content-stretch flex gap-[36px] items-center justify-center left-[477px] pb-[10px] top-[1055px]">
      <div aria-hidden className="absolute border-b border-black border-solid inset-0 pointer-events-none" />
      <Frame33 />
      <Frame19 note={note} />
    </div>
  );
}

function Frame27({ spec }) {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[982px] top-[749px]">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[15px] text-black whitespace-pre">
        {spec}
      </p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[779px] top-[945px]">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#b7b7b7] text-[10px] text-right whitespace-nowrap">*싱크볼제작 별도 / 싱크하부장(가구)별도</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[990px] top-[854px]">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#b7b7b7] text-[10px] text-right whitespace-nowrap">*싱크대 길이 및 디자인에 따라 가격은 변동 됩니다.</p>
    </div>
  );
}

function Frame22({ size }) {
  return (
    <div className="absolute border-[#b7b7b7] border-b border-solid h-[21px] left-[1278px] top-[781px] w-[282px]">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[15px] text-black top-0 whitespace-pre">
        {size}
      </p>
    </div>
  );
}

function Frame23({ brand }) {
  return (
    <div className="absolute border-[#b7b7b7] border-b border-solid h-[21px] left-[1278px] top-[826px] w-[282px]">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[15px] text-black top-0 whitespace-pre">
        {brand}
      </p>
    </div>
  );
}

function Frame24({ pattern }) {
  return (
    <div className="absolute border-[#b7b7b7] border-b border-solid h-[21px] left-[1278px] top-[869px] w-[282px]">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[15px] text-black top-0 whitespace-nowrap">
        {pattern}
      </p>
    </div>
  );
}

function Frame25({ finish }) {
  return (
    <div className="absolute border-[#b7b7b7] border-b border-solid h-[21px] left-[1278px] top-[912px] w-[282px]">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[15px] text-black top-0 whitespace-nowrap">
        {finish}
      </p>
    </div>
  );
}

function Frame34() {
  return <div className="absolute h-[15px] left-[679px] top-[519px] w-[224px]" />;
}

function Frame14() {
  return (
    <div className="h-[325px] overflow-clip relative shrink-0 w-[650px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame541} />
      <Frame34 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[550px] p-[10px] top-[544px]">
      <div className="[word-break:break-word] flex flex-col font-['Gmarket_Sans_TTF:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black tracking-[1.5px] whitespace-nowrap">
        <p className="leading-none">Sink System</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex gap-[40px] h-[676px] items-center justify-end left-[360px] top-[3643px] w-[1200px]">
      <Frame14 />
      <Frame35 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="h-[689px] relative shrink-0 w-[458px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-0.11%] max-w-none top-[0.38%] w-[100.27%]" src={imgFrame542} />
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="h-[689px] relative shrink-0 w-[511px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[43.82%] left-0 max-w-none top-[-0.38%] w-full" src={imgFrame540} />
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex h-[850px] items-center justify-between left-[351px] top-[2793px] w-[1200px]">
      <Frame17 />
      <Frame18 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Gmarket_Sans_TTF:Medium',sans-serif] justify-center leading-[0] left-[689px] not-italic text-[12px] text-black top-[445px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[1.5]">{`Under T:3 Aluminum MOULD brace `}</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Gmarket_Sans_TTF:Medium',sans-serif] justify-center leading-[0] left-0 not-italic text-[12px] text-black top-[34px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[1.5]">{`6mm 슬랩 측판위 상판 맞춤`}</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[23px] relative shrink-0 w-[351px]">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Display_Light',sans-serif] font-light justify-center leading-[0] left-0 text-[#b7b7b7] text-[0px] top-[11px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="whitespace-pre">
          <span className="[word-break:break-word] font-['Noto_Sans_CJK_KR:Regular',sans-serif] leading-[1.5] not-italic text-[12px]">botton</span>
          <span className="leading-[1.5] text-[12px]">{` `}</span>
          <span className="[word-break:break-word] font-['Noto_Sans_CJK_KR:Regular',sans-serif] leading-[1.5] not-italic text-[12px]">A</span>
          <span className="[word-break:break-word] font-['Noto_Sans_CJK_KR:Light',sans-serif] leading-[1.5] not-italic text-[7px]">{`&`}</span>
          <span className="[word-break:break-word] font-['Noto_Sans_CJK_KR:Regular',sans-serif] leading-[1.5] not-italic text-[12px]">S D</span>
          <span className="[word-break:break-word] font-['Noto_Sans_CJK_KR:Light',sans-serif] leading-[1.5] not-italic text-[12px]">evelopment</span>
          <span className="leading-[1.5] text-[12px]">{` `}</span>
          <span className="leading-[1.5] text-[10px]">{`          `}</span>
          <span className="[word-break:break-word] font-['Noto_Sans_CJK_KR:Regular',sans-serif] leading-[1.5] not-italic text-[10px]">{`대표 :  오 미연`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[18px] relative shrink-0 w-[172px]">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Display_Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] left-[6px] text-[#b7b7b7] text-[10px] top-[10px] tracking-[0.5px] w-[191px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[1.5] whitespace-pre-wrap">{`사업자등록번호  685 07 02278`}</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[50px] items-center left-0 top-0 w-[602px]">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute h-[23px] left-0 top-[23px] w-[360px]">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Display_Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] left-0 text-[#b7b7b7] text-[10px] top-[11.5px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[1.5]">본사 : 경기도 하남시 미사강변서로22 에코큐브 1016호</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[23px] left-0 top-[46px] w-[298px]">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Display_Light','Noto_Sans_KR:Light',sans-serif] font-light justify-center leading-[0] left-0 text-[#b7b7b7] text-[10px] top-[11.5px] tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[1.5]">통신판매업신고증 : 제2024-경기하남-1550호</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute h-[69px] left-[444px] top-[56px] w-[613px]">
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[33px] left-[444px] top-[22px] w-[227px]">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Gmarket_Sans_TTF:Medium',sans-serif] justify-center leading-[0] left-0 not-italic text-[#b7b7b7] text-[15px] top-[16.5px] tracking-[0.75px] whitespace-nowrap">
        <p className="leading-[1.5]">kakao chanel talk</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[27.17%_25.17%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.37 18.2664">
        <g id="Group 134">
          <path d={svgPaths.p9cb6200} fill="var(--fill-0, #B7B7B7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute h-[40px] left-[650px] overflow-clip top-[182px] w-[39px]" data-name="네이버로고">
      <Group />
    </div>
  );
}

function Component3() {
  return (
    <div className="relative shrink-0 size-[39.252px]" data-name="카톡로고">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.2518 39.2518">
        <g id="ì¹´í¡ë¡ê³ ">
          <path d={svgPaths.p27516100} fill="var(--fill-0, #B7B7B7)" id="Polygon 1" stroke="var(--stroke-0, #B7B7B7)" strokeLinejoin="round" />
          <path d={svgPaths.p21ab5c80} fill="var(--fill-0, #B7B7B7)" id="Exclude" />
        </g>
      </svg>
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute content-stretch flex items-center left-[704px] top-[182.37px]" data-name="카톡로고">
      <Component3 />
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute h-[39.553px] left-[758.25px] overflow-clip top-[182.22px] w-[39px]" data-name="인스타로고">
      <div className="absolute h-[21.553px] left-[9px] right-[9px] top-[9px]" data-name="인스타그램_라인_아이콘 1">
        <img alt="" className="absolute inset-0 max-w-none mix-blend-difference object-cover pointer-events-none size-full" src={img1} />
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute h-[34.959px] left-[812.25px] top-[184.52px] w-[21.466px]" data-name="핀터레스트">
      <div className="absolute h-[34.959px] left-0 top-0 w-[21.466px]" data-name="핀터로고 사진">
        <img alt="" className="absolute inset-0 max-w-none mix-blend-difference object-cover pointer-events-none size-full" src={img} />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="[word-break:break-word] absolute font-['Gmarket_Sans_TTF:Medium',sans-serif] h-[18px] leading-[0] left-[444px] not-italic text-[#b7b7b7] text-[12px] top-[4px] w-[532px] whitespace-nowrap">
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 top-[9px]">
        <p className="leading-[1.5]">FAQ</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[148px] top-[9px]">
        <p className="leading-[1.5]">이용약관</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[315px] top-[9px]">
        <p className="leading-[1.5]">고객센터</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[482px] top-[9px]">
        <p className="leading-[1.5]">IM서비스</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute h-[315px] left-[407px] right-[407px] top-[235px]">
      <Frame7 />
      <Frame1 />
      <div className="absolute h-px left-0 top-[153px] w-[1106px]" data-name="Line 17 (Stroke)">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1106 1">
          <path clipRule="evenodd" d="M1106 1H0V0H1106V1Z" fill="var(--fill-0, #B7B7B7)" fillRule="evenodd" id="Line 17 (Stroke)" />
        </svg>
      </div>
      <Component1 />
      <Component2 />
      <Component4 />
      <Component5 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Gmarket Sans',sans-serif] font-light justify-center leading-[0] left-[99px] not-italic text-[#3b3b3b] text-[25px] top-[78px] whitespace-nowrap">
        <p>
          <span>bo</span>
  <span className="font-bold">tton.</span>
  <span>co</span>
        </p>
      </div>
      <Frame />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute bg-white h-[550px] left-0 overflow-auto top-[5095px] w-[1920px]" data-name="푸터 바탕">
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute h-[47px] left-0 top-0 w-[135px]">
      
    </div>
  );
}

function Frame10() {
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

function Frame36() {
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
      <div className="h-[38px] relative shrink-0 w-[133px] cursor-pointer" data-name="logo" onClick={() => navigate('/page2')}>
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
        <Frame9 />
        <Frame10 />
      </Link>
    </div>
  );
}

export default function Component6() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedThickness, setSelectedThickness] = useState<"6mm" | "12mm">("6mm");
  
  const [abuDhabiThickness, setAbuDhabiThickness] = useState<"6mm" | "12mm">("6mm");
  const [amazonicoThickness, setAmazonicoThickness] = useState<"6mm" | "12mm">("6mm");
  const [ARABESQUESILKThickness, setARABESQUESILKThickness] = useState<"6mm" | "12mm">("6mm");
  const [BLANCO_CARARRAThickness, setBLANCO_CARARRAThickness] = useState<"6mm" | "12mm">("6mm");

  const [Calacatta_LuxeThickness, setCalacatta_LuxeThickness] = useState<"6mm" | "12mm">("6mm");
  const [coloradoDunesThickness, setColoradoDunesThickness] = useState<"6mm" | "12mm">("6mm");
  const [himalayaCrystalThickness, setHimalayaCrystalThickness] = useState<"6mm" | "12mm">("6mm");
  const [laylaThickness, setLaylaThickness] = useState<"6mm" | "12mm">("6mm");

  const [TITLIS_WHITEThickness, setTITLIS_WHITEThickness] = useState<"6mm" | "12mm">("6mm");
  const [whiteSandsThickness, setWhiteSandsThickness] = useState<"6mm" | "12mm">("6mm");
  const [montBlancThickness, setMontBlancThickness] = useState<"6mm" | "12mm">("6mm");
  const [sanSimoneThickness, setSanSimoneThickness] = useState<"6mm" | "12mm">("6mm");

  const [AzureThickness, setAzureThickness] = useState<"6mm" | "12mm">("6mm");
  const [absoluteGreenThickness, setAbsoluteGreenThickness] = useState<"6mm" | "12mm">("6mm");
  const [CapraiaThickness, setCapraiaThickness] = useState<"6mm" | "12mm">("6mm");
  const [colosseoThickness, setColosseoThickness] = useState<"6mm" | "12mm">("6mm");  
  
  const thicknessInfo = {
    "6mm": {
      title: "OC09 Cammeo   FE640 IS",
      spec: "L : 3200  W : 640  Height : 900",
      price: "5,620,000",
      size: "Size : 3200 x 1500   T : 6mm",
      brand: "Brand : Infinite   Italy",
      pattern: "Pattern : 3 Continuous",
      finish: "Finish : Glam",
      note: "6mm 가격임  / *12mm  선택 시 가격 표시",
    },
    "12mm": {
      title: "OC09 Cammeo   FE640 IS",
      spec: "L : 3200  W : 640  Height : 900",
      price: "6,800,000",
      size: "Size : 3200 x 1600   T : 12mm",
      brand: "Brand : Infinite   Italy",
      pattern: "Pattern : 1 Continuous",
      finish: "Finish : Glam",
      note: "6mm 가격임  / *12mm  선택 시 가격 표시",
    },
  };

    {/* Applicable  1단 */}
  const abuDhabiInfo = {
  "6mm": {
    price: "4,860,000",
    size: "Size : 3200 X 1500   T : 6mm",
    brand: "Brand : NEOLITH",
    pattern: "Pattern : 2 Continuous",
    finish: "Finish : Matt",
  },
  "12mm": {
    price: "5,980,000",
    size: "Size : 3200 X 1600   T : 12mm",
    brand: "Brand : NEOLITH",
    pattern: "Pattern : 1 Continuous",
    finish: "Finish : Matt",
  },
};

  const amazonicoInfo = {
  "6mm": {
    price: "4,400,000",
    size: "Size : 3200 X 1500   T : 6mm",
    brand: "Brand : NEOLITH",
    pattern: "Pattern : 2 Continuous",
    finish: "Finish : Matt",
  },
  "12mm": {
    price: "5,680,000",
    size: "Size : 3200 X 1600   T : 12mm",
    brand: "Brand : NEOLITH",
    pattern: "Pattern : 1 Continuous",
    finish: "Finish : Matt",
  },
};

  const ARABESQUESILKInfo = {
  "6mm": {
    price: "3,800,000",
    size: "Size : 3200 X 1500   T : 6mm",
    brand: "Brand : NEOLITH",
    pattern: "Pattern : 2 Continuous",
    finish: "Finish : Matt",
  },
  "12mm": {
    price: "5,080,000",
    size: "Size : 3200 X 1600   T : 12mm",
    brand: "Brand : NEOLITH",
    pattern: "Pattern : 1 Continuous",
    finish: "Finish : Matt",
  },
};

  const BLANCO_CARARRAInfo = {
  "6mm": {
    price: "4,250,000",
    size: "Size : 3200 X 1500   T : 6mm",
    brand: "Brand : NEOLITH",
    pattern: "Pattern : 2 Continuous",
    finish: "Finish : Matt",
  },
  "12mm": {
    price: "5,460,000",
    size: "Size : 3200 X 1600   T : 12mm",
    brand: "Brand : NEOLITH",
    pattern: "Pattern : 1 Continuous",
    finish: "Finish : Matt",
  },
};

      {/* Applicable  2단 */}
  const Calacatta_LuxeInfo = {
  "6mm": {
    price: "4,670,000",
    size: "Size : 3200 X 1500   T : 6mm",
    brand: "Brand : NEOLITH",
    pattern: "Pattern : 2 Continuous",
    finish: "Finish : Matt",
  },
  "12mm": {
    price: "5,860,000",
    size: "Size : 3200 X 1600   T : 12mm",
    brand: "Brand : NEOLITH",
    pattern: "Pattern : 1 Continuous",
    finish: "Finish : Matt",
  },
};

  const ColoradoDunesInfo = {
  "6mm": {
    price: "4,820,000",
    size: "Size : 3200 X 1500   T : 6mm",
    brand: "Brand : NEOLITH",
    pattern: "Pattern : 2 Continuous",
    finish: "Finish : Matt",
  },
  "12mm": {
    price: "6,060,000",
    size: "Size : 3200 X 1600   T : 12mm",
    brand: "Brand : NEOLITH",
    pattern: "Pattern : 1 Continuous",
    finish: "Finish : Matt",
  },
};

  const HimalayaCrystalInfo = {
  "6mm": {
    price: "4,420,000",
    size: "Size : 3200 X 1500   T : 6mm",
    brand: "Brand : NEOLITH",
    pattern: "Pattern : 2 Continuous",
    finish: "Finish : Matt",
  },
  "12mm": {
    price: "5,660,000",
    size: "Size : 3200 X 1600   T : 12mm",
    brand: "Brand : NEOLITH",
    pattern: "Pattern : 1 Continuous",
    finish: "Finish : Matt",
  },
};

  const LaylaInfo = {
  "6mm": {
    price: "3,970,000",
    size: "Size : 3200 X 1500   T : 6mm",
    brand: "Brand : NEOLITH",
    pattern: "Pattern : 2 Continuous",
    finish: "Finish : Matt",
  },
  "12mm": {
    price: "5,230,000",
    size: "Size : 3200 X 1600   T : 12mm",
    brand: "Brand : NEOLITH",
    pattern: "Pattern : 1 Continuous",
    finish: "Finish : Matt",
  },
};

        {/* Applicable  3단 */}
  const TITLIS_WHITEInfo = {
  "6mm": {
    price: "0",
    size: "Size : ",
    brand: "Brand : INOL",
    pattern: "Pattern : Not Continuous",
    finish: "Finish : Matt",
  },
  "12mm": {
    price: "9,980,000",
    size: "Size : 3200 X 1600   T : 12mm",
    brand: "Brand : INOL",
    pattern: "Pattern : 1 Continuous",
    finish: "Finish : Matt",
  },
};

  const WhiteSandsInfo = {
  "6mm": {
    price: "4,250,000",
    size: "Size : 3200 X 1500   T : 6mm",
    brand: "Brand : NEOLITH",
    pattern: "Pattern : 2 Continuous",
    finish: "Finish : Matt",
  },
  "12mm": {
    price: "5,400,000",
    size: "Size : 3200 X 1600   T : 12mm",
    brand: "Brand : NEOLITH",
    pattern: "Pattern : 1 Continuous",
    finish: "Finish : Matt",
  },
};

  const MontBlancInfo = {
  "6mm": {
    price: "3,450,000",
    size: "Size : 3200 X 1500   T : 6mm",
    brand: "Brand : NEOLITH",
    pattern: "Pattern : 2 Continuous",
    finish: "Finish : Matt",
  },
  "12mm": {
    price: "4,620,000",
    size: "Size : 3200 X 1600   T : 12mm",
    brand: "Brand : NEOLITH",
    pattern: "Pattern : 1 Continuous",
    finish: "Finish : Matt",
  },
};

  const SanSimoneInfo = {
  "6mm": {
    price: "4,350,000",
    size: "Size : 3200 X 1500   T : 6mm",
    brand: "Brand : NEOLITH",
    pattern: "Pattern : 2 Continuous",
    finish: "Finish : Matt",
  },
  "12mm": {
    price: "5,560,000",
    size: "Size : 3200 X 1600   T : 12mm",
    brand: "Brand : NEOLITH",
    pattern: "Pattern : 1 Continuous",
    finish: "Finish : Matt",
  },
};

        {/* Applicable  4단 */}
  const AzureInfo = {
  "6mm": {
    price: "4,280,000",
    size: "Size : 3200 X 1500   T : 6mm",
    brand: "Brand : NEOLITH",
    pattern: "Pattern : 2 Continuous",
    finish: "Finish : Matt",
  },
  "12mm": {
    price: "5,520,000",
    size: "Size : 3200 X 1600   T : 12mm",
    brand: "Brand : NEOLITH",
    pattern: "Pattern : 1 Continuous",
    finish: "Finish : Matt",
  },
};

  const AbsoluteGreenInfo = {
  "6mm": {
    price: "2,860,000",
    size: "Size : 2800 X 1200   T : 6mm",
    brand: "Brand : INOL ENTERPRISE",
    pattern: "Pattern : 2 Continuous",
    finish: "Finish : Matt",
  },
  "12mm": {
    price: "0",
    size: "Size :",
    brand: "Brand : not provide",
    pattern: "Pattern :",
    finish: "Finish : ",
  },
};

  const CapraiaInfo = {
  "6mm": {
    price: "5,620,000",
    size: "Size : 3200 X 1500   T : 6mm",
    brand: "Brand : Marizzi   Italy",
    pattern: "Pattern : 2 Continuous",
    finish: "Finish : Lux / Naturale Matt",
  },
  "12mm": {
    price: "6,800,000",
    size: "Size : 3200 X 1600   T : 12mm",
    brand: "Brand : Marizzi   Italy",
    pattern: "Pattern : 1 Continuous",
    finish: "Finish : Lux / Naturale Matt",
  },
};

  const ColosseoInfo = {
  "6mm": {
    price: "3,620,000",
    size: "Size : 3200 X 1500   T : 6mm",
    brand: "Brand : NEOLITH",
    pattern: "Pattern : 2 Continuous",
    finish: "Finish : Matt",
  },
  "12mm": {
    price: "4,770,000",
    size: "Size : 3200 X 1600   T : 12mm",
    brand: "Brand : NEOLITH",
    pattern: "Pattern : 1 Continuous",
    finish: "Finish : Matt",
  },
};

          {/* Main Tatle 6/12mm 사이즈 */}
  const currentInfo = thicknessInfo[selectedThickness];

  return (
    <div className="bg-white relative size-full" data-name="2-2.">
      <BobSink />
      <Frame11 />
      <Frame32 />
      <Frame15 />
      <div
        className="absolute h-[282px] left-[360px] rounded-[15px] top-[649px] w-[588px] cursor-zoom-in overflow-hidden"
        onClick={() => setSelectedImage(imgRectangle24)}
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover rounded-[15px] size-full"
          src={imgRectangle24}
        />
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/55 p-8 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
  <img
    src={selectedImage}
    alt=""
    className="max-w-[70vw] max-h-[70vh] object-contain shadow-2xl"
  />

  <div className="absolute bottom-6 right-12 text-white text-sm tracking-[0.12em]">
    OC09 Cammeo &nbsp;&nbsp;&nbsp; FE640 IS
  </div>
</div>
        </div>
      )}

      {/* 두께 - 6mm */}
<div
  className="group absolute left-[388px] top-[679px] h-[46px] w-[60px] cursor-pointer"
  onClick={() => setSelectedThickness("6mm")}
>
  <div className="absolute left-0 top-0 size-[46px]">
    <svg
      className={`absolute block inset-0 size-full transition-opacity duration-200 ${
        selectedThickness === "6mm" ? "opacity-100" : "opacity-55 group-hover:opacity-100"
      }`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23" cy="23" fill="var(--fill-0, white)" id="Ellipse 21" r="23" />
    </svg>
  </div>

  <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[11px] not-italic text-[0px] text-black top-[23px] whitespace-nowrap">
    <p>
      <span
        className={`leading-[normal] text-[20px] transition-opacity duration-200 ${
          selectedThickness === "6mm" ? "opacity-100" : "opacity-30 group-hover:opacity-100"
        }`}
      >
        6
      </span>
      <span
        className={`leading-[normal] text-[8px] text-black transition-opacity duration-200 ${
          selectedThickness === "6mm" ? "opacity-100" : "opacity-30 group-hover:opacity-100"
        }`}
      >
        mm
      </span>
    </p>
  </div>
</div>

      {/* 두께 - 12mm */}
<div
  className="group absolute left-[388px] top-[746px] h-[46px] w-[60px] cursor-pointer"
  onClick={() => setSelectedThickness("12mm")}
>
  <div className="absolute left-0 top-0 size-[46px]">
    <svg
      className={`absolute block inset-0 size-full transition-opacity duration-200 ${
        selectedThickness === "12mm" ? "opacity-100" : "opacity-55 group-hover:opacity-100"
      }`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23" cy="23" fill="var(--fill-0, white)" id="Ellipse 21" r="23" />
    </svg>
  </div>

  <div className="absolute left-[7px] top-[23px] -translate-y-1/2 [word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic text-[0px] text-black whitespace-nowrap">
    <p>
      <span
        className={`leading-[normal] text-[20px] text-black transition-opacity duration-200 ${
          selectedThickness === "12mm" ? "opacity-100" : "opacity-30 group-hover:opacity-100"
        }`}
      >
        12
      </span>
      <span
        className={`leading-[normal] text-[8px] text-black transition-opacity duration-200 ${
          selectedThickness === "12mm" ? "opacity-100" : "opacity-30 group-hover:opacity-100"
        }`}
      >
        mm
      </span>
    </p>
  </div>
</div>

         {/* Sample Table 16ea */}

         {/* Calacatta_Luxe */}
      
      <div 
        className="group absolute left-[360px] rounded-[15px] size-[282px] top-[1441px] overflow-hidden cursor-pointer"
        data-name="적용가능 자재 Calacatta_Luxe"
  onMouseLeave={() => setCalacatta_LuxeThickness("6mm")}
>
  <div className="absolute inset-0 rounded-[15px]">
    <img
      alt=""
      src={imgRectangle29}
      className="absolute inset-0 size-full max-w-none rounded-[15px] object-cover transition-transform duration-300 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/35" />

    {/* 가격 - 우측 상단 */}
    <div className="absolute top-12 right-4 z-10 text-right opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <p className="flex items-start justify-end gap-1 leading-none text-white">
        <span className="relative top-[2px] text-[11px] font-light">￦</span>
        <span className="text-[15px] font-midium tracking-[0.02em]">
          {Calacatta_LuxeInfo[Calacatta_LuxeThickness].price}
        </span>
      </p>
    </div>

    {/* 제품 정보 - 우측 하단 */}
    <div className="absolute bottom-4 right-4 z-10 text-right text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <p className="text-[13px] font-medium tracking-[0.12em]">
        Calacatta Luxe
      </p>

      <div className="mt-3 space-y-1 text-[11px] leading-[1.5] text-white/90">
        <p>{Calacatta_LuxeInfo[Calacatta_LuxeThickness].size}</p>
        <p>{Calacatta_LuxeInfo[Calacatta_LuxeThickness].brand}</p>
        <p>{Calacatta_LuxeInfo[Calacatta_LuxeThickness].pattern}</p>
        <p>{Calacatta_LuxeInfo[Calacatta_LuxeThickness].finish}</p>
      </div>
    </div>
  </div>

  {/* 6mm */}
  <div
    className="absolute inset-[10.64%_73.76%_73.05%_9.93%] cursor-pointer"
    onMouseEnter={() => setCalacatta_LuxeThickness("6mm")}
  >
    <svg
      className={`absolute block inset-0 size-full transition-opacity duration-200 ${
        Calacatta_LuxeThickness === "6mm" ? "opacity-100" : "opacity-55"
      }`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23" cy="23" fill="white" r="23" />
    </svg>
  </div>

  <div
    className={`[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[14.54%_76.6%_76.95%_13.83%] justify-center leading-[0] not-italic text-[0px] text-black whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
      Calacatta_LuxeThickness === "6mm" ? "opacity-100" : "opacity-55"
    }`}
  >
    <p>
      <span className="leading-[normal] text-[20px]">6</span>
      <span className="leading-[normal] text-[8px]">mm</span>
    </p>
  </div>

  {/* 12mm */}
  <div
    className="absolute inset-[34.4%_73.76%_49.29%_9.93%] cursor-pointer"
    onMouseEnter={() => setCalacatta_LuxeThickness("12mm")}
  >
    <svg
      className={`absolute block inset-0 size-full transition-opacity duration-200 ${
        Calacatta_LuxeThickness === "12mm" ? "opacity-100" : "opacity-55"
      }`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23" cy="23" fill="white" r="23" />
    </svg>
  </div>

  <div
    className={`[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[38.3%_74.82%_53.19%_12.41%] justify-center leading-[0] not-italic text-[0px] text-black whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
      Calacatta_LuxeThickness === "12mm" ? "opacity-100" : "opacity-55"
    }`}
  >
    <p>
      <span className="leading-[normal] text-[20px] text-black">12</span>
      <span className="leading-[normal] text-[8px]">mm</span>
    </p>
  </div>
</div>
      
      {/* TITLIS_WHITE */}
     <div
  className="group absolute left-[360px] rounded-[15px] size-[282px] top-[1744px] overflow-hidden cursor-pointer"
  data-name="적용가능 자재 TITLIS_WHITE"
  onMouseLeave={() => setTITLIS_WHITEThickness("6mm")}
  onClick={() => navigate("/project/TITLIS-WHITE")}     
>
  <div className="absolute inset-0 rounded-[15px]">
    <img
      alt=""
      src={imgRectangle33}
      className="absolute inset-0 size-full max-w-none rounded-[15px] object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/35" />

    <div className="absolute top-12 right-4 z-10 text-right opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <p className="flex items-start justify-end gap-1 leading-none text-white">
        <span className="relative top-[2px] text-[11px] font-light">￦</span>
        <span className="text-[15px] font-midium tracking-[0.02em]">
          {TITLIS_WHITEInfo[TITLIS_WHITEThickness].price}
        </span>
      </p>
    </div>

    <div className="absolute bottom-4 right-4 z-10 text-right text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <p className="text-[13px] font-medium tracking-[0.12em]">TITLIS WHITE   IS650 SH</p>
      <div className="mt-3 space-y-1 text-[11px] leading-[1.5] text-white/90">
        <p>{TITLIS_WHITEInfo[TITLIS_WHITEThickness].size}</p>
        <p>{TITLIS_WHITEInfo[TITLIS_WHITEThickness].brand}</p>
        <p>{TITLIS_WHITEInfo[TITLIS_WHITEThickness].pattern}</p>
        <p>{TITLIS_WHITEInfo[TITLIS_WHITEThickness].finish}</p>
      </div>
    </div>
  </div>

  {/* 6mm */}
  <div
    className="absolute inset-[10.64%_73.76%_73.05%_9.93%] cursor-pointer"
    onMouseEnter={() => setTITLIS_WHITEThickness("6mm")}
    onClick={(e) => e.stopPropagation()}
  >
    <svg
      className={`absolute block inset-0 size-full transition-opacity duration-200 ${
        TITLIS_WHITEThickness === "6mm" ? "opacity-100" : "opacity-55"
      }`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23" cy="23" fill="white" r="23" />
    </svg>
  </div>

  <div
    className={`[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[14.54%_76.6%_76.95%_13.83%] justify-center leading-[0] not-italic text-[0px] text-black whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
      TITLIS_WHITEThickness === "6mm" ? "opacity-100" : "opacity-55"
    }`}
  >
    <p>
      <span className="leading-[normal] text-[20px]">6</span>
      <span className="leading-[normal] text-[8px]">mm</span>
    </p>
  </div>

  {/* 12mm */}
  <div
    className="absolute inset-[34.4%_73.76%_49.29%_9.93%] cursor-pointer"
    onMouseEnter={() => setTITLIS_WHITEThickness("12mm")}
    onClick={(e) => e.stopPropagation()}
  >
    <svg
      className={`absolute block inset-0 size-full transition-opacity duration-200 ${
        TITLIS_WHITEThickness === "12mm" ? "opacity-100" : "opacity-55"
      }`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23" cy="23" fill="white" r="23" />
    </svg>
  </div>

  <div
    className={`[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[38.3%_74.82%_53.19%_12.41%] justify-center leading-[0] not-italic text-[0px] text-black whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
      TITLIS_WHITEThickness === "12mm" ? "opacity-100" : "opacity-55"
    }`}
  >
    <p>
      <span className="leading-[normal] text-[20px] text-black">12</span>
      <span className="leading-[normal] text-[8px]">mm</span>
    </p>
  </div>
</div>

      {/* Azure */}
      
      <div 
        className="group absolute left-[360px] rounded-[15px] size-[282px] top-[2047px] overflow-hidden cursor-pointer"
        data-name="적용가능 자재 Azure"
        onMouseLeave={() => setAzureThickness("6mm")}
      >
  <div className="absolute inset-0 rounded-[15px]">
    <img
      alt=""
      src={imgRectangle37}
      className="absolute inset-0 size-full max-w-none rounded-[15px] object-cover transition-transform duration-300 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/35" />

    {/* 가격 - 우측 상단 */}
    <div className="absolute top-12 right-4 z-10 text-right opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <p className="flex items-start justify-end gap-1 leading-none text-white">
        <span className="relative top-[2px] text-[11px] font-light">￦</span>
        <span className="text-[15px] font-midium tracking-[0.02em]">
          {AzureInfo[AzureThickness].price}
        </span>
      </p>
    </div>

    {/* 제품 정보 - 우측 하단 */}
    <div className="absolute bottom-4 right-4 z-10 text-right text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <p className="text-[13px] font-medium tracking-[0.12em]">
        Azure
      </p>

      <div className="mt-3 space-y-1 text-[11px] leading-[1.5] text-white/90">
        <p>{AzureInfo[AzureThickness].size}</p>
        <p>{AzureInfo[AzureThickness].brand}</p>
        <p>{AzureInfo[AzureThickness].pattern}</p>
        <p>{AzureInfo[AzureThickness].finish}</p>
      </div>
    </div>
  </div>

  {/* 6mm */}
  <div
    className="absolute inset-[10.64%_73.76%_73.05%_9.93%] cursor-pointer"
    onMouseEnter={() => setAzureThickness("6mm")}
  >
    <svg
      className={`absolute block inset-0 size-full transition-opacity duration-200 ${
        AzureThickness === "6mm" ? "opacity-100" : "opacity-55"
      }`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23" cy="23" fill="white" r="23" />
    </svg>
  </div>

  <div
    className={`[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[14.54%_76.6%_76.95%_13.83%] justify-center leading-[0] not-italic text-[0px] text-black whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
      AzureThickness === "6mm" ? "opacity-100" : "opacity-55"
    }`}
  >
    <p>
      <span className="leading-[normal] text-[20px]">6</span>
      <span className="leading-[normal] text-[8px]">mm</span>
    </p>
  </div>

  {/* 12mm */}
  <div
    className="absolute inset-[34.4%_73.76%_49.29%_9.93%] cursor-pointer"
    onMouseEnter={() => setAzureThickness("12mm")}
  >
    <svg
      className={`absolute block inset-0 size-full transition-opacity duration-200 ${
        AzureThickness === "12mm" ? "opacity-100" : "opacity-55"
      }`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23" cy="23" fill="white" r="23" />
    </svg>
  </div>

  <div
    className={`[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[38.3%_74.82%_53.19%_12.41%] justify-center leading-[0] not-italic text-[0px] text-black whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
      AzureThickness === "12mm" ? "opacity-100" : "opacity-55"
    }`}
  >
    <p>
      <span className="leading-[normal] text-[20px] text-black">12</span>
      <span className="leading-[normal] text-[8px]">mm</span>
    </p>
  </div>
</div>
      
      {/* Colorado Dunes */}
<div
  className="group absolute left-[666px] rounded-[15px] size-[282px] top-[1441px] overflow-hidden cursor-pointer"
  data-name="적용가능 자재 Colorado Dunes"
  onMouseLeave={() => setColoradoDunesThickness("6mm")}
>
  <div className="absolute inset-0 rounded-[15px]">
    <img
      alt=""
      src={imgRectangle30}
      className="absolute inset-0 size-full max-w-none rounded-[15px] object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/35" />

    <div className="absolute top-12 right-4 z-10 text-right opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <p className="flex items-start justify-end gap-1 leading-none text-white">
        <span className="relative top-[2px] text-[11px] font-light">￦</span>
        <span className="text-[15px] font-midium tracking-[0.02em]">
          {ColoradoDunesInfo[coloradoDunesThickness].price}
        </span>
      </p>
    </div>

    <div className="absolute bottom-4 right-4 z-10 text-right text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <p className="text-[13px] font-medium tracking-[0.12em]">Colorado Dunes</p>
      <div className="mt-3 space-y-1 text-[11px] leading-[1.5] text-white/90">
        <p>{ColoradoDunesInfo[coloradoDunesThickness].size}</p>
        <p>{ColoradoDunesInfo[coloradoDunesThickness].brand}</p>
        <p>{ColoradoDunesInfo[coloradoDunesThickness].pattern}</p>
        <p>{ColoradoDunesInfo[coloradoDunesThickness].finish}</p>
      </div>
    </div>
  </div>

  <div
    className="absolute inset-[10.64%_73.76%_73.05%_9.93%] cursor-pointer"
    onMouseEnter={() => setColoradoDunesThickness("6mm")}
  >
    <svg
      className={`absolute block inset-0 size-full transition-opacity duration-200 ${
        coloradoDunesThickness === "6mm" ? "opacity-100" : "opacity-55"
      }`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23" cy="23" fill="white" r="23" />
    </svg>
  </div>

  <div
    className={`[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[14.54%_76.6%_76.95%_13.83%] justify-center leading-[0] not-italic text-[0px] text-black whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
      coloradoDunesThickness === "6mm" ? "opacity-100" : "opacity-55"
    }`}
  >
    <p>
      <span className="leading-[normal] text-[20px]">6</span>
      <span className="leading-[normal] text-[8px]">mm</span>
    </p>
  </div>

  <div
    className="absolute inset-[34.4%_73.76%_49.29%_9.93%] cursor-pointer"
    onMouseEnter={() => setColoradoDunesThickness("12mm")}
  >
    <svg
      className={`absolute block inset-0 size-full transition-opacity duration-200 ${
        coloradoDunesThickness === "12mm" ? "opacity-100" : "opacity-55"
      }`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23" cy="23" fill="white" r="23" />
    </svg>
  </div>

  <div
    className={`[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[38.3%_74.82%_53.19%_12.41%] justify-center leading-[0] not-italic text-[0px] text-black whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
      coloradoDunesThickness === "12mm" ? "opacity-100" : "opacity-55"
    }`}
  >
    <p>
      <span className="leading-[normal] text-[20px] text-black">12</span>
      <span className="leading-[normal] text-[8px]">mm</span>
    </p>
  </div>
</div>

{/* White Sands */}
<div
  className="group absolute left-[666px] rounded-[15px] size-[282px] top-[1744px] overflow-hidden cursor-pointer"
  data-name="적용가능 자재 White Sands"
  onMouseLeave={() => setWhiteSandsThickness("6mm")}
>
  <div className="absolute inset-0 rounded-[15px]">
    <img
      alt=""
      src={imgRectangle34}
      className="absolute inset-0 size-full max-w-none rounded-[15px] object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/35" />

    <div className="absolute top-12 right-4 z-10 text-right opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <p className="flex items-start justify-end gap-1 leading-none text-white">
        <span className="relative top-[2px] text-[11px] font-light">￦</span>
        <span className="text-[15px] font-midium tracking-[0.02em]">
          {WhiteSandsInfo[whiteSandsThickness].price}
        </span>
      </p>
    </div>

    <div className="absolute bottom-4 right-4 z-10 text-right text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <p className="text-[13px] font-medium tracking-[0.12em]">White Sands</p>
      <div className="mt-3 space-y-1 text-[11px] leading-[1.5] text-white/90">
        <p>{WhiteSandsInfo[whiteSandsThickness].size}</p>
        <p>{WhiteSandsInfo[whiteSandsThickness].brand}</p>
        <p>{WhiteSandsInfo[whiteSandsThickness].pattern}</p>
        <p>{WhiteSandsInfo[whiteSandsThickness].finish}</p>
      </div>
    </div>
  </div>

  <div
    className="absolute inset-[10.64%_73.76%_73.05%_9.93%] cursor-pointer"
    onMouseEnter={() => setWhiteSandsThickness("6mm")}
  >
    <svg
      className={`absolute block inset-0 size-full transition-opacity duration-200 ${
        whiteSandsThickness === "6mm" ? "opacity-100" : "opacity-55"
      }`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23" cy="23" fill="white" r="23" />
    </svg>
  </div>

  <div
    className={`[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[14.54%_76.6%_76.95%_13.83%] justify-center leading-[0] not-italic text-[0px] text-black whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
      whiteSandsThickness === "6mm" ? "opacity-100" : "opacity-55"
    }`}
  >
    <p>
      <span className="leading-[normal] text-[20px]">6</span>
      <span className="leading-[normal] text-[8px]">mm</span>
    </p>
  </div>

  <div
    className="absolute inset-[34.4%_73.76%_49.29%_9.93%] cursor-pointer"
    onMouseEnter={() => setWhiteSandsThickness("12mm")}
  >
    <svg
      className={`absolute block inset-0 size-full transition-opacity duration-200 ${
        whiteSandsThickness === "12mm" ? "opacity-100" : "opacity-55"
      }`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23" cy="23" fill="white" r="23" />
    </svg>
  </div>

  <div
    className={`[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[38.3%_74.82%_53.19%_12.41%] justify-center leading-[0] not-italic text-[0px] text-black whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
      whiteSandsThickness === "12mm" ? "opacity-100" : "opacity-55"
    }`}
  >
    <p>
      <span className="leading-[normal] text-[20px] text-black">12</span>
      <span className="leading-[normal] text-[8px]">mm</span>
    </p>
  </div>
</div>

{/* Absolute Green */}
<div
  className="group absolute left-[666px] rounded-[15px] size-[282px] top-[2047px] overflow-hidden cursor-pointer"
  data-name="적용가능 자재 Absolute Green"
  onMouseLeave={() => setAbsoluteGreenThickness("6mm")}
>
  <div className="absolute inset-0 rounded-[15px]">
    <img
      alt=""
      src={imgRectangle38}
      className="absolute inset-0 size-full max-w-none rounded-[15px] object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/35" />

    <div className="absolute top-12 right-4 z-10 text-right opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <p className="flex items-start justify-end gap-1 leading-none text-white">
        <span className="relative top-[2px] text-[11px] font-light">￦</span>
        <span className="text-[15px] font-midium tracking-[0.02em]">
          {AbsoluteGreenInfo[absoluteGreenThickness].price}
        </span>
      </p>
    </div>

    <div className="absolute bottom-4 right-4 z-10 text-right text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <p className="text-[13px] font-medium tracking-[0.12em]">Absolute Green</p>
      <div className="mt-3 space-y-1 text-[11px] leading-[1.5] text-white/90">
        <p>{AbsoluteGreenInfo[absoluteGreenThickness].size}</p>
        <p>{AbsoluteGreenInfo[absoluteGreenThickness].brand}</p>
        <p>{AbsoluteGreenInfo[absoluteGreenThickness].pattern}</p>
        <p>{AbsoluteGreenInfo[absoluteGreenThickness].finish}</p>
      </div>
    </div>
  </div>

  <div
    className="absolute inset-[10.64%_73.76%_73.05%_9.93%] cursor-pointer"
    onMouseEnter={() => setAbsoluteGreenThickness("6mm")}
  >
    <svg
      className={`absolute block inset-0 size-full transition-opacity duration-200 ${
        absoluteGreenThickness === "6mm" ? "opacity-100" : "opacity-55"
      }`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23" cy="23" fill="white" r="23" />
    </svg>
  </div>

  <div
    className={`[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[14.54%_76.6%_76.95%_13.83%] justify-center leading-[0] not-italic text-[0px] text-black whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
      absoluteGreenThickness === "6mm" ? "opacity-100" : "opacity-55"
    }`}
  >
    <p>
      <span className="leading-[normal] text-[20px]">6</span>
      <span className="leading-[normal] text-[8px]">mm</span>
    </p>
  </div>

  <div
    className="absolute inset-[34.4%_73.76%_49.29%_9.93%] cursor-pointer"
    onMouseEnter={() => setAbsoluteGreenThickness("12mm")}
  >
    <svg
      className={`absolute block inset-0 size-full transition-opacity duration-200 ${
        absoluteGreenThickness === "12mm" ? "opacity-100" : "opacity-55"
      }`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23" cy="23" fill="white" r="23" />
    </svg>
  </div>

  <div
    className={`[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[38.3%_74.82%_53.19%_12.41%] justify-center leading-[0] not-italic text-[0px] text-black whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
      absoluteGreenThickness === "12mm" ? "opacity-100" : "opacity-55"
    }`}
  >
    <p>
      <span className="leading-[normal] text-[20px] text-black">12</span>
      <span className="leading-[normal] text-[8px]">mm</span>
    </p>
  </div>
</div>

{/* Himalaya Crystal */}
<div
  className="group absolute left-[972px] rounded-[15px] size-[282px] top-[1441px] overflow-hidden cursor-pointer"
  data-name="적용가능 자재 Himalaya Crystal"
  onMouseLeave={() => setHimalayaCrystalThickness("6mm")}
>
  <div className="absolute inset-0 rounded-[15px]">
    <img
      alt=""
      src={imgRectangle31}
      className="absolute inset-0 size-full max-w-none rounded-[15px] object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/35" />

    <div className="absolute top-12 right-4 z-10 text-right opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <p className="flex items-start justify-end gap-1 leading-none text-white">
        <span className="relative top-[2px] text-[11px] font-light">￦</span>
        <span className="text-[15px] font-midium tracking-[0.02em]">
          {HimalayaCrystalInfo[himalayaCrystalThickness].price}
        </span>
      </p>
    </div>

    <div className="absolute bottom-4 right-4 z-10 text-right text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <p className="text-[13px] font-medium tracking-[0.12em]">Himalaya Crystal</p>
      <div className="mt-3 space-y-1 text-[11px] leading-[1.5] text-white/90">
        <p>{HimalayaCrystalInfo[himalayaCrystalThickness].size}</p>
        <p>{HimalayaCrystalInfo[himalayaCrystalThickness].brand}</p>
        <p>{HimalayaCrystalInfo[himalayaCrystalThickness].pattern}</p>
        <p>{HimalayaCrystalInfo[himalayaCrystalThickness].finish}</p>
      </div>
    </div>
  </div>

  <div
    className="absolute inset-[10.64%_73.76%_73.05%_9.93%] cursor-pointer"
    onMouseEnter={() => setHimalayaCrystalThickness("6mm")}
  >
    <svg
      className={`absolute block inset-0 size-full transition-opacity duration-200 ${
        himalayaCrystalThickness === "6mm" ? "opacity-100" : "opacity-55"
      }`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23" cy="23" fill="white" r="23" />
    </svg>
  </div>

  <div
    className={`[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[14.54%_76.6%_76.95%_13.83%] justify-center leading-[0] not-italic text-[0px] text-black whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
      himalayaCrystalThickness === "6mm" ? "opacity-100" : "opacity-55"
    }`}
  >
    <p>
      <span className="leading-[normal] text-[20px]">6</span>
      <span className="leading-[normal] text-[8px]">mm</span>
    </p>
  </div>

  <div
    className="absolute inset-[34.4%_73.76%_49.29%_9.93%] cursor-pointer"
    onMouseEnter={() => setHimalayaCrystalThickness("12mm")}
  >
    <svg
      className={`absolute block inset-0 size-full transition-opacity duration-200 ${
        himalayaCrystalThickness === "12mm" ? "opacity-100" : "opacity-55"
      }`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23" cy="23" fill="white" r="23" />
    </svg>
  </div>

  <div
    className={`[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[38.3%_74.82%_53.19%_12.41%] justify-center leading-[0] not-italic text-[0px] text-black whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
      himalayaCrystalThickness === "12mm" ? "opacity-100" : "opacity-55"
    }`}
  >
    <p>
      <span className="leading-[normal] text-[20px] text-black">12</span>
      <span className="leading-[normal] text-[8px]">mm</span>
    </p>
  </div>
</div>

{/* Mont Blanc */}
<div
  className="group absolute left-[972px] rounded-[15px] size-[282px] top-[1744px] overflow-hidden cursor-pointer"
  data-name="적용가능 자재 Mont Blanc"
  onMouseLeave={() => setMontBlancThickness("6mm")}
>
  <div className="absolute inset-0 rounded-[15px]">
    <img
      alt=""
      src={imgRectangle35}
      className="absolute inset-0 size-full max-w-none rounded-[15px] object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/35" />

    <div className="absolute top-12 right-4 z-10 text-right opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <p className="flex items-start justify-end gap-1 leading-none text-white">
        <span className="relative top-[2px] text-[11px] font-light">￦</span>
        <span className="text-[15px] font-midium tracking-[0.02em]">
          {MontBlancInfo[montBlancThickness].price}
        </span>
      </p>
    </div>

    <div className="absolute bottom-4 right-4 z-10 text-right text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <p className="text-[13px] font-medium tracking-[0.12em]">Mont Blanc</p>
      <div className="mt-3 space-y-1 text-[11px] leading-[1.5] text-white/90">
        <p>{MontBlancInfo[montBlancThickness].size}</p>
        <p>{MontBlancInfo[montBlancThickness].brand}</p>
        <p>{MontBlancInfo[montBlancThickness].pattern}</p>
        <p>{MontBlancInfo[montBlancThickness].finish}</p>
      </div>
    </div>
  </div>

  <div
    className="absolute inset-[10.64%_73.76%_73.05%_9.93%] cursor-pointer"
    onMouseEnter={() => setMontBlancThickness("6mm")}
  >
    <svg
      className={`absolute block inset-0 size-full transition-opacity duration-200 ${
        montBlancThickness === "6mm" ? "opacity-100" : "opacity-55"
      }`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23" cy="23" fill="white" r="23" />
    </svg>
  </div>

  <div
    className={`[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[14.54%_76.6%_76.95%_13.83%] justify-center leading-[0] not-italic text-[0px] text-black whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
      montBlancThickness === "6mm" ? "opacity-100" : "opacity-55"
    }`}
  >
    <p>
      <span className="leading-[normal] text-[20px]">6</span>
      <span className="leading-[normal] text-[8px]">mm</span>
    </p>
  </div>

  <div
    className="absolute inset-[34.4%_73.76%_49.29%_9.93%] cursor-pointer"
    onMouseEnter={() => setMontBlancThickness("12mm")}
  >
    <svg
      className={`absolute block inset-0 size-full transition-opacity duration-200 ${
        montBlancThickness === "12mm" ? "opacity-100" : "opacity-55"
      }`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23" cy="23" fill="white" r="23" />
    </svg>
  </div>

  <div
    className={`[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[38.3%_74.82%_53.19%_12.41%] justify-center leading-[0] not-italic text-[0px] text-black whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
      montBlancThickness === "12mm" ? "opacity-100" : "opacity-55"
    }`}
  >
    <p>
      <span className="leading-[normal] text-[20px] text-black">12</span>
      <span className="leading-[normal] text-[8px]">mm</span>
    </p>
  </div>
</div>

{/* Capraia */}
<div
  className="group absolute left-[972px] rounded-[15px] size-[282px] top-[2047px] overflow-hidden cursor-pointer"
  data-name="적용가능 자재 Capraia"
  onMouseLeave={() => setCapraiaThickness("6mm")}
  onClick={() => navigate("/project/Capraia")}
>
  <div className="absolute inset-0 rounded-[15px]">
    <img
      alt=""
      src={imgRectangle39}
      className="absolute inset-0 size-full max-w-none rounded-[15px] object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/35" />

    <div className="absolute top-12 right-4 z-10 text-right opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <p className="flex items-start justify-end gap-1 leading-none text-white">
        <span className="relative top-[2px] text-[11px] font-light">￦</span>
        <span className="text-[15px] font-midium tracking-[0.02em]">
          {CapraiaInfo[CapraiaThickness].price}
        </span>
      </p>
    </div>

    <div className="absolute bottom-4 right-4 z-10 text-right text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <p className="text-[13px] font-medium tracking-[0.12em]">Capraia</p>
      <div className="mt-3 space-y-1 text-[11px] leading-[1.5] text-white/90">
        <p>{CapraiaInfo[CapraiaThickness].size}</p>
        <p>{CapraiaInfo[CapraiaThickness].brand}</p>
        <p>{CapraiaInfo[CapraiaThickness].pattern}</p>
        <p>{CapraiaInfo[CapraiaThickness].finish}</p>
      </div>
    </div>
  </div>

  <div
    className="absolute inset-[10.64%_73.76%_73.05%_9.93%] cursor-pointer"
    onMouseEnter={() => setCapraiaThickness("6mm")}
    onClick={(e) => e.stopPropagation()}
  >
    <svg
      className={`absolute block inset-0 size-full transition-opacity duration-200 ${
        CapraiaThickness === "6mm" ? "opacity-100" : "opacity-55"
      }`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23" cy="23" fill="white" r="23" />
    </svg>
  </div>

  <div
    className={`[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[14.54%_76.6%_76.95%_13.83%] justify-center leading-[0] not-italic text-[0px] text-black whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
      CapraiaThickness === "6mm" ? "opacity-100" : "opacity-55"
    }`}
  >
    <p>
      <span className="leading-[normal] text-[20px]">6</span>
      <span className="leading-[normal] text-[8px]">mm</span>
    </p>
  </div>

  <div
    className="absolute inset-[34.4%_73.76%_49.29%_9.93%] cursor-pointer"
    onMouseEnter={() => setCapraiaThickness("12mm")}
    onClick={(e) => e.stopPropagation()}
  >
    <svg
      className={`absolute block inset-0 size-full transition-opacity duration-200 ${
        CapraiaThickness === "12mm" ? "opacity-100" : "opacity-55"
      }`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23" cy="23" fill="white" r="23" />
    </svg>
  </div>

  <div
    className={`[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[38.3%_74.82%_53.19%_12.41%] justify-center leading-[0] not-italic text-[0px] text-black whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
      CapraiaThickness === "12mm" ? "opacity-100" : "opacity-55"
    }`}
  >
    <p>
      <span className="leading-[normal] text-[20px] text-black">12</span>
      <span className="leading-[normal] text-[8px]">mm</span>
    </p>
  </div>
</div>

{/* Layla */}
<div
  className="group absolute left-[1278px] rounded-[15px] size-[282px] top-[1441px] overflow-hidden cursor-pointer"
  data-name="적용가능 자재 Layla"
  onMouseLeave={() => setLaylaThickness("6mm")}
>
  <div className="absolute inset-0 rounded-[15px]">
    <img
      alt=""
      src={imgRectangle32}
      className="absolute inset-0 size-full max-w-none rounded-[15px] object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/35" />

    <div className="absolute top-12 right-4 z-10 text-right opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <p className="flex items-start justify-end gap-1 leading-none text-white">
        <span className="relative top-[2px] text-[11px] font-light">￦</span>
        <span className="text-[15px] font-midium tracking-[0.02em]">
          {LaylaInfo[laylaThickness].price}
        </span>
      </p>
    </div>

    <div className="absolute bottom-4 right-4 z-10 text-right text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <p className="text-[13px] font-medium tracking-[0.12em]">Layla</p>
      <div className="mt-3 space-y-1 text-[11px] leading-[1.5] text-white/90">
        <p>{LaylaInfo[laylaThickness].size}</p>
        <p>{LaylaInfo[laylaThickness].brand}</p>
        <p>{LaylaInfo[laylaThickness].pattern}</p>
        <p>{LaylaInfo[laylaThickness].finish}</p>
      </div>
    </div>
  </div>

  <div
    className="absolute inset-[10.64%_73.76%_73.05%_9.93%] cursor-pointer"
    onMouseEnter={() => setLaylaThickness("6mm")}
  >
    <svg
      className={`absolute block inset-0 size-full transition-opacity duration-200 ${
        laylaThickness === "6mm" ? "opacity-100" : "opacity-55"
      }`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23" cy="23" fill="white" r="23" />
    </svg>
  </div>

  <div
    className={`[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[14.54%_76.6%_76.95%_13.83%] justify-center leading-[0] not-italic text-[0px] text-black whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
      laylaThickness === "6mm" ? "opacity-100" : "opacity-55"
    }`}
  >
    <p>
      <span className="leading-[normal] text-[20px]">6</span>
      <span className="leading-[normal] text-[8px]">mm</span>
    </p>
  </div>

  <div
    className="absolute inset-[34.4%_73.76%_49.29%_9.93%] cursor-pointer"
    onMouseEnter={() => setLaylaThickness("12mm")}
  >
    <svg
      className={`absolute block inset-0 size-full transition-opacity duration-200 ${
        laylaThickness === "12mm" ? "opacity-100" : "opacity-55"
      }`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23" cy="23" fill="white" r="23" />
    </svg>
  </div>

  <div
    className={`[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[38.3%_74.82%_53.19%_12.41%] justify-center leading-[0] not-italic text-[0px] text-black whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
      laylaThickness === "12mm" ? "opacity-100" : "opacity-55"
    }`}
  >
    <p>
      <span className="leading-[normal] text-[20px] text-black">12</span>
      <span className="leading-[normal] text-[8px]">mm</span>
    </p>
  </div>
</div>

{/* San Simone */}
<div
  className="group absolute left-[1278px] rounded-[15px] size-[282px] top-[1744px] overflow-hidden cursor-pointer"
  data-name="적용가능 자재 San Simone"
  onMouseLeave={() => setSanSimoneThickness("6mm")}
>
  <div className="absolute inset-0 rounded-[15px]">
    <img
      alt=""
      src={imgRectangle36}
      className="absolute inset-0 size-full max-w-none rounded-[15px] object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/35" />

    {/* 가격 - 우측 상단 */}
    <div className="absolute top-12 right-4 z-10 text-right opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <p className="flex items-start justify-end gap-1 leading-none text-white">
        <span className="relative top-[2px] text-[11px] font-light">￦</span>
        <span className="text-[15px] font-midium tracking-[0.02em]">
          {SanSimoneInfo[sanSimoneThickness].price}
        </span>
      </p>
    </div>

    {/* 제품 정보 - 우측 하단 */}
    <div className="absolute bottom-4 right-4 z-10 text-right text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <p className="text-[13px] font-medium tracking-[0.12em]">San Simone</p>
      <div className="mt-3 space-y-1 text-[11px] leading-[1.5] text-white/90">
        <p>{SanSimoneInfo[sanSimoneThickness].size}</p>
        <p>{SanSimoneInfo[sanSimoneThickness].brand}</p>
        <p>{SanSimoneInfo[sanSimoneThickness].pattern}</p>
        <p>{SanSimoneInfo[sanSimoneThickness].finish}</p>
      </div>
    </div>
  </div>

  <div
    className="absolute inset-[10.64%_73.76%_73.05%_9.93%] cursor-pointer"
    onMouseEnter={() => setSanSimoneThickness("6mm")}
  >
    <svg
      className={`absolute block inset-0 size-full transition-opacity duration-200 ${
        sanSimoneThickness === "6mm" ? "opacity-100" : "opacity-55"
      }`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23" cy="23" fill="white" r="23" />
    </svg>
  </div>

  <div
    className={`[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[14.54%_76.6%_76.95%_13.83%] justify-center leading-[0] not-italic text-[0px] text-black whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
      sanSimoneThickness === "6mm" ? "opacity-100" : "opacity-55"
    }`}
  >
    <p>
      <span className="leading-[normal] text-[20px]">6</span>
      <span className="leading-[normal] text-[8px]">mm</span>
    </p>
  </div>

  <div
    className="absolute inset-[34.4%_73.76%_49.29%_9.93%] cursor-pointer"
    onMouseEnter={() => setSanSimoneThickness("12mm")}
  >
    <svg
      className={`absolute block inset-0 size-full transition-opacity duration-200 ${
        sanSimoneThickness === "12mm" ? "opacity-100" : "opacity-55"
      }`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23" cy="23" fill="white" r="23" />
    </svg>
  </div>

  <div
    className={`[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[38.3%_74.82%_53.19%_12.41%] justify-center leading-[0] not-italic text-[0px] text-black whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
      sanSimoneThickness === "12mm" ? "opacity-100" : "opacity-55"
    }`}
  >
    <p>
      <span className="leading-[normal] text-[20px] text-black">12</span>
      <span className="leading-[normal] text-[8px]">mm</span>
    </p>
  </div>
</div>

{/* Colosseo */}
<div
  className="group absolute left-[1278px] rounded-[15px] size-[282px] top-[2047px] overflow-hidden cursor-pointer"
  data-name="적용가능 자재 Colosseo"
  onMouseLeave={() => setColosseoThickness("6mm")}
>
  <div className="absolute inset-0 rounded-[15px]">
    <img
      alt=""
      src={imgRectangle40}
      className="absolute inset-0 size-full max-w-none rounded-[15px] object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/35" />

    <div className="absolute top-12 right-4 z-10 text-right opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <p className="flex items-start justify-end gap-1 leading-none text-white">
        <span className="relative top-[2px] text-[11px] font-light">￦</span>
        <span className="text-[15px] font-midium tracking-[0.02em]">
          {ColosseoInfo[colosseoThickness].price}
        </span>
      </p>
    </div>

    <div className="absolute bottom-4 right-4 z-10 text-right text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <p className="text-[13px] font-medium tracking-[0.12em]">Colosseo</p>
      <div className="mt-3 space-y-1 text-[11px] leading-[1.5] text-white/90">
        <p>{ColosseoInfo[colosseoThickness].size}</p>
        <p>{ColosseoInfo[colosseoThickness].brand}</p>
        <p>{ColosseoInfo[colosseoThickness].pattern}</p>
        <p>{ColosseoInfo[colosseoThickness].finish}</p>
      </div>
    </div>
  </div>

  <div
    className="absolute inset-[10.64%_73.76%_73.05%_9.93%] cursor-pointer"
    onMouseEnter={() => setColosseoThickness("6mm")}
  >
    <svg
      className={`absolute block inset-0 size-full transition-opacity duration-200 ${
        colosseoThickness === "6mm" ? "opacity-100" : "opacity-55"
      }`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23" cy="23" fill="white" r="23" />
    </svg>
  </div>

  <div
    className={`[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[14.54%_76.6%_76.95%_13.83%] justify-center leading-[0] not-italic text-[0px] text-black whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
      colosseoThickness === "6mm" ? "opacity-100" : "opacity-55"
    }`}
  >
    <p>
      <span className="leading-[normal] text-[20px]">6</span>
      <span className="leading-[normal] text-[8px]">mm</span>
    </p>
  </div>

  <div
    className="absolute inset-[34.4%_73.76%_49.29%_9.93%] cursor-pointer"
    onMouseEnter={() => setColosseoThickness("12mm")}
  >
    <svg
      className={`absolute block inset-0 size-full transition-opacity duration-200 ${
        colosseoThickness === "12mm" ? "opacity-100" : "opacity-55"
      }`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23" cy="23" fill="white" r="23" />
    </svg>
  </div>

  <div
    className={`[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[38.3%_74.82%_53.19%_12.41%] justify-center leading-[0] not-italic text-[0px] text-black whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
      colosseoThickness === "12mm" ? "opacity-100" : "opacity-55"
    }`}
  >
    <p>
      <span className="leading-[normal] text-[20px] text-black">12</span>
      <span className="leading-[normal] text-[8px]">mm</span>
    </p>
  </div>
</div>
      
<Frame30 price={currentInfo.price} />
<Frame26 title={currentInfo.title} />
<Frame20 note={currentInfo.note} />
<Frame27 spec={currentInfo.spec} />
<Frame21 />
<Frame31 />
<Frame22 size={currentInfo.size} />
<Frame23 brand={currentInfo.brand} />
<Frame24 pattern={currentInfo.pattern} />
<Frame25 finish={currentInfo.finish} />

      {/* ABU DHABI WHITE */}
<div
  className="group absolute left-[360px] top-[1138px] size-[282px] rounded-[15px] overflow-hidden cursor-pointer"
  data-name="적용가능 자재 ABU DHABI WHITE"
  onMouseLeave={() => setAbuDhabiThickness("6mm")}
>
  <div className="absolute inset-0 rounded-[15px]">
    <img
      alt=""
      src={imgRectangle26}
      className="absolute inset-0 size-full max-w-none rounded-[15px] object-cover transition-transform duration-300 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/35" />

    {/* 가격 - 우측 상단 */}
    <div className="absolute top-12 right-4 z-10 text-right opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <p className="flex items-start justify-end gap-1 leading-none text-white">
        <span className="relative top-[2px] text-[11px] font-light">￦</span>
        <span className="text-[15px] font-midium tracking-[0.02em]">
          {abuDhabiInfo[abuDhabiThickness].price}
        </span>
      </p>
    </div>

    {/* 제품 정보 - 우측 하단 */}
    <div className="absolute bottom-4 right-4 z-10 text-right text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <p className="text-[13px] font-medium tracking-[0.12em]">
        ABU DHABI WHITE
      </p>

      <div className="mt-3 space-y-1 text-[11px] leading-[1.5] text-white/90">
        <p>{abuDhabiInfo[abuDhabiThickness].size}</p>
        <p>{abuDhabiInfo[abuDhabiThickness].brand}</p>
        <p>{abuDhabiInfo[abuDhabiThickness].pattern}</p>
        <p>{abuDhabiInfo[abuDhabiThickness].finish}</p>
      </div>
    </div>
  </div>

  {/* 6mm */}
  <div
    className="absolute inset-[10.64%_73.76%_73.05%_9.93%] cursor-pointer"
    onMouseEnter={() => setAbuDhabiThickness("6mm")}
  >
    <svg
      className={`absolute block inset-0 size-full transition-opacity duration-200 ${
        abuDhabiThickness === "6mm" ? "opacity-100" : "opacity-55"
      }`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23" cy="23" fill="white" r="23" />
    </svg>
  </div>

  <div
    className={`[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[14.54%_76.6%_76.95%_13.83%] justify-center leading-[0] not-italic text-[0px] text-black whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
      abuDhabiThickness === "6mm" ? "opacity-100" : "opacity-55"
    }`}
  >
    <p>
      <span className="leading-[normal] text-[20px]">6</span>
      <span className="leading-[normal] text-[8px]">mm</span>
    </p>
  </div>

  {/* 12mm */}
  <div
    className="absolute inset-[34.4%_73.76%_49.29%_9.93%] cursor-pointer"
    onMouseEnter={() => setAbuDhabiThickness("12mm")}
  >
    <svg
      className={`absolute block inset-0 size-full transition-opacity duration-200 ${
        abuDhabiThickness === "12mm" ? "opacity-100" : "opacity-55"
      }`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23" cy="23" fill="white" r="23" />
    </svg>
  </div>

  <div
    className={`[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[38.3%_74.82%_53.19%_12.41%] justify-center leading-[0] not-italic text-[0px] text-black whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
      abuDhabiThickness === "12mm" ? "opacity-100" : "opacity-55"
    }`}
  >
    <p>
      <span className="leading-[normal] text-[20px] text-black">12</span>
      <span className="leading-[normal] text-[8px]">mm</span>
    </p>
  </div>
</div>

      {/* AMAZONICO SLATE */}
<div
  className="group absolute left-[666px] top-[1138px] size-[282px] rounded-[15px] overflow-hidden cursor-pointer"
  data-name="적용가능 자재 AMAZONICO SLATE"
  onMouseLeave={() => setAmazonicoThickness("6mm")}
>
  <div className="absolute inset-0 rounded-[15px]">
    <img
      alt=""
      src={imgRectangle27}
      className="absolute inset-0 size-full max-w-none rounded-[15px] object-cover transition-transform duration-300 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/35" />

    {/* 가격 - 우측 상단 */}
    <div className="absolute top-12 right-4 z-10 text-right opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <p className="flex items-start justify-end gap-1 leading-none text-white">
        <span className="relative top-[2px] text-[11px] font-light">￦</span>
        <span className="text-[15px] font-midium tracking-[0.02em]">
          {amazonicoInfo[amazonicoThickness].price}
        </span>
      </p>
    </div>

    {/* 제품 정보 - 우측 하단 */}
    <div className="absolute bottom-4 right-4 z-10 text-right text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <p className="text-[13px] font-medium tracking-[0.12em]">
        AMAZONICO SLATE
      </p>

      <div className="mt-3 space-y-1 text-[11px] leading-[1.5] text-white/90">
        <p>{amazonicoInfo[amazonicoThickness].size}</p>
        <p>{amazonicoInfo[amazonicoThickness].brand}</p>
        <p>{amazonicoInfo[amazonicoThickness].pattern}</p>
        <p>{amazonicoInfo[amazonicoThickness].finish}</p>
      </div>
    </div>
  </div>

  {/* 6mm */}
  <div
    className="absolute inset-[10.64%_73.76%_73.05%_9.93%] cursor-pointer"
    onMouseEnter={() => setAmazonicoThickness("6mm")}
  >
    <svg
      className={`absolute block inset-0 size-full transition-opacity duration-200 ${
        amazonicoThickness === "6mm" ? "opacity-100" : "opacity-55"
      }`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23" cy="23" fill="white" r="23" />
    </svg>
  </div>

  <div
    className={`[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[14.54%_76.6%_76.95%_13.83%] justify-center leading-[0] not-italic text-[0px] text-black whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
      amazonicoThickness === "6mm" ? "opacity-100" : "opacity-55"
    }`}
  >
    <p>
      <span className="leading-[normal] text-[20px]">6</span>
      <span className="leading-[normal] text-[8px]">mm</span>
    </p>
  </div>

  {/* 12mm */}
  <div
    className="absolute inset-[34.4%_73.76%_49.29%_9.93%] cursor-pointer"
    onMouseEnter={() => setAmazonicoThickness("12mm")}
  >
    <svg
      className={`absolute block inset-0 size-full transition-opacity duration-200 ${
        amazonicoThickness === "12mm" ? "opacity-100" : "opacity-55"
      }`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23" cy="23" fill="white" r="23" />
    </svg>
  </div>

  <div
    className={`[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[38.3%_74.82%_53.19%_12.41%] justify-center leading-[0] not-italic text-[0px] text-black whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
      amazonicoThickness === "12mm" ? "opacity-100" : "opacity-55"
    }`}
  >
    <p>
      <span className="leading-[normal] text-[20px] text-black">12</span>
      <span className="leading-[normal] text-[8px]">mm</span>
    </p>
  </div>
</div>

      {/* ARABESQUE SILK */}
      <div
  className="group absolute left-[972px] top-[1138px] size-[282px] rounded-[15px] overflow-hidden cursor-pointer"
  data-name="적용가능 자재 ARABESQUE SILK"
  onMouseLeave={() => setARABESQUESILKThickness("6mm")}
>
  <div className="absolute inset-0 rounded-[15px]">
    <img
      alt=""
      src={imgRectangle28}
      className="absolute inset-0 size-full max-w-none rounded-[15px] object-cover transition-transform duration-300 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/35" />

    {/* 가격 - 우측 상단 */}
    <div className="absolute top-12 right-4 z-10 text-right opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <p className="flex items-start justify-end gap-1 leading-none text-white">
        <span className="relative top-[2px] text-[11px] font-light">￦</span>
        <span className="text-[15px] font-midium tracking-[0.02em]">
          {ARABESQUESILKInfo[ARABESQUESILKThickness].price}
        </span>
      </p>
    </div>

    {/* 제품 정보 - 우측 하단 */}
    <div className="absolute bottom-4 right-4 z-10 text-right text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <p className="text-[13px] font-medium tracking-[0.12em]">
        ARABESQUE SILK
      </p>

      <div className="mt-3 space-y-1 text-[11px] leading-[1.5] text-white/90">
        <p>{ARABESQUESILKInfo[ARABESQUESILKThickness].size}</p>
        <p>{ARABESQUESILKInfo[ARABESQUESILKThickness].brand}</p>
        <p>{ARABESQUESILKInfo[ARABESQUESILKThickness].pattern}</p>
        <p>{ARABESQUESILKInfo[ARABESQUESILKThickness].finish}</p>
      </div>
    </div>
  </div>

  {/* 6mm */}
  <div
    className="absolute inset-[10.64%_73.76%_73.05%_9.93%] cursor-pointer"
    onMouseEnter={() => setARABESQUESILKThickness("6mm")}
  >
    <svg
      className={`absolute block inset-0 size-full transition-opacity duration-200 ${
        ARABESQUESILKThickness === "6mm" ? "opacity-100" : "opacity-55"
      }`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23" cy="23" fill="white" r="23" />
    </svg>
  </div>

  <div
    className={`[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[14.54%_76.6%_76.95%_13.83%] justify-center leading-[0] not-italic text-[0px] text-black whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
      ARABESQUESILKThickness === "6mm" ? "opacity-100" : "opacity-55"
    }`}
  >
    <p>
      <span className="leading-[normal] text-[20px]">6</span>
      <span className="leading-[normal] text-[8px]">mm</span>
    </p>
  </div>

  {/* 12mm */}
  <div
    className="absolute inset-[34.4%_73.76%_49.29%_9.93%] cursor-pointer"
    onMouseEnter={() => setARABESQUESILKThickness("12mm")}
  >
    <svg
      className={`absolute block inset-0 size-full transition-opacity duration-200 ${
        ARABESQUESILKThickness === "12mm" ? "opacity-100" : "opacity-55"
      }`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23" cy="23" fill="white" r="23" />
    </svg>
  </div>

  <div
    className={`[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[38.3%_74.82%_53.19%_12.41%] justify-center leading-[0] not-italic text-[0px] text-black whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
      ARABESQUESILKThickness === "12mm" ? "opacity-100" : "opacity-55"
    }`}
  >
    <p>
      <span className="leading-[normal] text-[20px] text-black">12</span>
      <span className="leading-[normal] text-[8px]">mm</span>
    </p>
  </div>
</div>

      {/* BLANCO CARARRA BC02 SILK */}      
<div
  className="group absolute left-[1278px] top-[1138px] size-[282px] rounded-[15px] overflow-hidden cursor-pointer"
  data-name="적용가능 자재 BLANCO_CARARRA"
  onMouseLeave={() => setBLANCO_CARARRAThickness("6mm")}
>
  <div className="absolute inset-0 rounded-[15px]">
    <img
      alt=""
      src={imgRectangle41}
      className="absolute inset-0 size-full max-w-none rounded-[15px] object-cover transition-transform duration-300 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/35" />

    {/* 가격 - 우측 상단 */}
    <div className="absolute top-12 right-4 z-10 text-right opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <p className="flex items-start justify-end gap-1 leading-none text-white">
        <span className="relative top-[2px] text-[11px] font-light">￦</span>
        <span className="text-[15px] font-midium tracking-[0.02em]">
          {BLANCO_CARARRAInfo[BLANCO_CARARRAThickness].price}
        </span>
      </p>
    </div>

    {/* 제품 정보 - 우측 하단 */}
    <div className="absolute bottom-4 right-4 z-10 text-right text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <p className="text-[13px] font-medium tracking-[0.12em]">
        BLANCO CARARRA BC02 SILK
      </p>

      <div className="mt-3 space-y-1 text-[11px] leading-[1.5] text-white/90">
        <p>{BLANCO_CARARRAInfo[BLANCO_CARARRAThickness].size}</p>
        <p>{BLANCO_CARARRAInfo[BLANCO_CARARRAThickness].brand}</p>
        <p>{BLANCO_CARARRAInfo[BLANCO_CARARRAThickness].pattern}</p>
        <p>{BLANCO_CARARRAInfo[BLANCO_CARARRAThickness].finish}</p>
      </div>
    </div>
  </div>

  {/* 6mm */}
  <div
    className="absolute inset-[10.64%_73.76%_73.05%_9.93%] cursor-pointer"
    onMouseEnter={() => setBLANCO_CARARRAThickness("6mm")}
  >
    <svg
      className={`absolute block inset-0 size-full transition-opacity duration-200 ${
        BLANCO_CARARRAThickness === "6mm" ? "opacity-100" : "opacity-55"
      }`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23" cy="23" fill="white" r="23" />
    </svg>
  </div>

  <div
    className={`[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[14.54%_76.6%_76.95%_13.83%] justify-center leading-[0] not-italic text-[0px] text-black whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
      BLANCO_CARARRAThickness === "6mm" ? "opacity-100" : "opacity-55"
    }`}
  >
    <p>
      <span className="leading-[normal] text-[20px]">6</span>
      <span className="leading-[normal] text-[8px]">mm</span>
    </p>
  </div>

  {/* 12mm */}
  <div
    className="absolute inset-[34.4%_73.76%_49.29%_9.93%] cursor-pointer"
    onMouseEnter={() => setBLANCO_CARARRAThickness("12mm")}
  >
    <svg
      className={`absolute block inset-0 size-full transition-opacity duration-200 ${
        BLANCO_CARARRAThickness === "12mm" ? "opacity-100" : "opacity-55"
      }`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23" cy="23" fill="white" r="23" />
    </svg>
  </div>

  <div
    className={`[word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[38.3%_74.82%_53.19%_12.41%] justify-center leading-[0] not-italic text-[0px] text-black whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
      BLANCO_CARARRAThickness === "12mm" ? "opacity-100" : "opacity-55"
    }`}
  >
    <p>
      <span className="leading-[normal] text-[20px] text-black">12</span>
      <span className="leading-[normal] text-[8px]">mm</span>
    </p>
  </div>
</div>
      
      <Frame13 />
      <Frame16 />
      <Component />
      <Frame36 />
    </div>
  );
}