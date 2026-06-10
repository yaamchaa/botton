import svgPaths from "./svg-wbzl9967en";
import { Link, useNavigate } from "react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import ScrollToTop from "./ScrollToTop";

function LabelText({ text }: { text: string }) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Gmarket Sans',sans-serif] font-light justify-center leading-[0] not-italic relative shrink-0 text-[#c1c1c1] text-[19px] tracking-[1.9px] whitespace-nowrap">
        <p className="leading-none">{text}</p>
      </div>
    </div>
  );
}

function DividerLine() {
  return (
    <div className="h-[0.5px] relative shrink-0 w-full">
      <div
        aria-hidden
        className="absolute border-[#c6c6c6] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none"
      />
    </div>
  );
}

function InputField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="relative w-full">
      <div className="content-stretch flex flex-col gap-[18px] items-start w-full">
        <LabelText text={label} />
        <div className="relative w-full">
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="block w-full h-[44px] bg-transparent outline-none border-none text-[19px] text-black placeholder:text-[#b7b7b7] font-['Gmarket Sans',sans-serif] font-light tracking-[1px]"
          />
        </div>
        <DividerLine />
      </div>
    </div>
  );
}

function AutoResizeTextarea({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "44px";
    el.style.height = `${Math.max(44, el.scrollHeight)}px`;
  }, [value]);

  return (
    <div className="relative w-full">
      <div className="content-stretch flex flex-col gap-[18px] items-start w-full">
        <LabelText text="Message" />
        <div className="relative w-full">
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            rows={1}
            className="block w-full min-h-[44px] h-[44px] overflow-hidden resize-none bg-transparent outline-none border-none text-[19px] text-black placeholder:text-[#b7b7b7] font-['Gmarket Sans',sans-serif] font-light tracking-[1px]"
            style={{ lineHeight: "44px" }}
          />
        </div>
        <DividerLine />
      </div>
    </div>
  );
}

function RequiredAlert({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/35 flex items-center justify-center px-6">
      <div className="w-full max-w-[420px] rounded-[24px] bg-white px-8 py-7 shadow-2xl">
        <div className="text-[20px] text-black font-['Gmarket Sans',sans-serif] font-medium">
          입력 확인
        </div>
        <p className="mt-4 text-[15px] leading-[1.7] text-[#555] font-['Gmarket Sans',sans-serif]">
          Name, E-Mail, Phone은 필수입니다.
        </p>
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="min-w-[110px] h-[44px] rounded-full bg-black text-white text-[14px] tracking-[1px] hover:opacity-85 transition-opacity"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

function AdminEntryButton({ onAdminOpen }: { onAdminOpen: () => void }) {
  return (
    <div className="relative z-[200] pointer-events-auto">
      <button
        type="button"
        onClick={onAdminOpen}
        className="relative z-[200] pointer-events-auto inline-flex items-center justify-center cursor-pointer select-none bg-transparent border-none p-0"
        aria-label="관리자 신청 내역 보기"
      >
        <span className="font-['Gmarket Sans',sans-serif] font-light text-[#3b3b3b] text-[14px] leading-none whitespace-nowrap">
          <span>bo</span>
          <span className="font-bold">tton.</span>
          <span>co</span>
        </span>
      </button>
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

function FooterBrand({ onAdminOpen }: { onAdminOpen: () => void }) {
  return (
    <div className="relative z-[180] flex items-center gap-[29px] pointer-events-auto">
      <AdminEntryButton onAdminOpen={onAdminOpen} />
      <Frame3 />
    </div>
  );
}

function FooterTel() {
  return (
    <div className="relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Gmarket_Sans_TTF:Medium',sans-serif] justify-center leading-[0] not-italic text-[#b7b7b7] text-[12px] whitespace-nowrap">
        <p className="leading-[1.5] whitespace-pre">{`T  031 729 0741`}</p>
      </div>
    </div>
  );
}

function FooterEmail() {
  return (
    <div className="relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Gmarket_Sans_TTF:Medium',sans-serif] justify-center leading-[0] not-italic text-[#b7b7b7] text-[12px] whitespace-nowrap">
        <p className="leading-[1.5] whitespace-pre">{`E-mail  botton @ naver.com`}</p>
      </div>
    </div>
  );
}

function FooterContact() {
  return (
    <div className="flex flex-wrap gap-[40px] items-center justify-center pt-[2px] relative shrink-0">
      <FooterTel />
      <FooterEmail />
    </div>
  );
}

function FooterSection({ onAdminOpen }: { onAdminOpen: () => void }) {
  return (
    <footer className="relative z-[150] w-full border-t border-[#efefef] pt-[40px] pb-[48px] pointer-events-auto">
      <div className="mx-auto w-full max-w-[1535px] px-[40px] xl:px-[188px]">
        <div className="relative z-[160] flex flex-wrap items-end gap-x-[80px] gap-y-[16px] pointer-events-auto">
          <FooterBrand onAdminOpen={onAdminOpen} />
          <FooterContact />
        </div>
      </div>
    </footer>
  );
}

function Frame1() {
  return <div className="absolute h-[47px] left-0 top-0 w-[135px]" />;
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
          >
            {" "}
          </span>
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

function HeaderBar() {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-50 w-full bg-white/75 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between px-[40px] py-[20px] xl:px-[360px]">
        <div
          onClick={() => navigate("/menu")}
          className="bg-[rgba(255,255,255,0)] flex flex-col gap-[10px] h-[62px] items-start justify-center overflow-clip px-[35px] shrink-0 w-[140px] cursor-pointer hover:opacity-70 transition-opacity"
        >
          <div className="h-0 relative shrink-0 w-[70px]">
            <div className="absolute inset-[-1.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 1.5">
                <line stroke="var(--stroke-0, black)" strokeWidth="1.5" x2="70" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
          <div className="h-0 relative shrink-0 w-[70px]">
            <div className="absolute inset-[-1.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 1.5">
                <line stroke="var(--stroke-0, black)" strokeWidth="1.5" x2="70" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
        </div>

        <div className="h-[38px] relative shrink-0 w-[133px] cursor-pointer" onClick={() => navigate("/")}>
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
          className="backdrop-blur-[5px] h-[47px] relative shrink-0 w-[135px] cursor-pointer hover:rounded-full hover:bg-gray-200 transition-all duration-800"
        >
          <Frame1 />
          <Frame2 />
        </Link>
      </div>
    </div>
  );
}

type Submission = {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
};

export default function Component() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [showAdmin, setShowAdmin] = useState(false);
  const [showRequiredAlert, setShowRequiredAlert] = useState(false);

  const submissionCount = useMemo(() => submissions.length, [submissions]);

  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setShowRequiredAlert(true);
      return;
    }

    const nextItem: Submission = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message: message.trim(),
      createdAt: new Date().toLocaleString("ko-KR"),
    };

    setSubmissions((prev) => [nextItem, ...prev]);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    alert("신청이 정상적으로 접수되었습니다.");
  };

  const handleOpenAdmin = () => {
    const password = window.prompt("관리자 비밀번호를 입력하세요.");
    if (password === "19801106") {
      setShowAdmin(true);
    } else if (password !== null) {
      alert("비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <div className="bg-white min-h-screen w-full relative">
      <HeaderBar />

      <main className="relative z-10 w-full">
        <section className="mx-auto w-full max-w-[1920px] px-[40px] pt-[110px] pb-[70px] xl:px-[168px] xl:pt-[142px]">
          <div className="mx-auto w-full max-w-[1200px]">
            <div className="flex flex-col gap-[82px]">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-[82px]">
                <InputField
                  label="Name*"
                  value={name}
                  onChange={setName}
                  placeholder="이름을 입력해 주세요"
                />
                <InputField
                  label="E-Mail*"
                  value={email}
                  onChange={setEmail}
                  placeholder="이메일을 입력해 주세요"
                  type="email"
                />
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-[82px] items-start">
                <InputField
                  label="Phone*"
                  value={phone}
                  onChange={setPhone}
                  placeholder="전화번호를 입력해 주세요"
                  type="tel"
                />
                <AutoResizeTextarea
                  value={message}
                  onChange={setMessage}
                  placeholder="신청 내용을 입력해 주세요"
                />
              </div>

              <div className="flex justify-end pt-[10px]">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="min-w-[180px] h-[52px] px-6 rounded-full bg-black text-white text-[15px] tracking-[1.5px] hover:opacity-75 transition-opacity"
                >
                  신청하기
                </button>
              </div>
            </div>
          </div>
        </section>

        <FooterSection onAdminOpen={handleOpenAdmin} />
      </main>

      <RequiredAlert
        open={showRequiredAlert}
        onClose={() => setShowRequiredAlert(false)}
      />

      {showAdmin && (
        <div className="fixed inset-0 z-[9999] bg-black/45 flex items-center justify-center p-8">
          <div className="bg-white w-full max-w-[1100px] max-h-[80vh] overflow-auto rounded-[24px] p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-[24px] font-semibold text-black">신청 내역</h2>
                <p className="text-[13px] text-[#7b7b7b] mt-1">총 {submissionCount}건</p>
              </div>
              <button
                type="button"
                onClick={() => setShowAdmin(false)}
                className="px-4 py-2 rounded-full border border-[#d9d9d9] text-[14px] hover:bg-[#f5f5f5]"
              >
                닫기
              </button>
            </div>

            {submissions.length === 0 ? (
              <div className="py-16 text-center text-[#888] text-[15px]">
                아직 접수된 신청이 없습니다.
              </div>
            ) : (
              <div className="space-y-4">
                {submissions.map((item, index) => (
                  <div key={item.id} className="border border-[#e8e8e8] rounded-[18px] p-5">
                    <div className="flex items-center justify-between mb-3 gap-4">
                      <div className="text-[16px] font-medium text-black">
                        {index + 1}. {item.name}
                      </div>
                      <div className="text-[12px] text-[#888] whitespace-nowrap">{item.createdAt}</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[14px] text-[#333]">
                      <div><strong>이름</strong> : {item.name}</div>
                      <div><strong>이메일</strong> : {item.email}</div>
                      <div><strong>전화번호</strong> : {item.phone}</div>
                      <div className="md:col-span-2 break-words"><strong>메시지</strong> : {item.message || "-"}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}