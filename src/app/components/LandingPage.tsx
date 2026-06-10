import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { projectId, publicAnonKey } from '/utils/supabase/info';

interface HeroContent {
  image: string;
  title: string;
  subtitle: string;
}

interface Project {
  id: number;
  image: string;
  title: string;
  date: string;
  name: string;
  type: string;
  area: { m2: number; pyeong: number };
}

interface Partner {
  id: number;
  name: string;
  logo: string;
}

interface FooterContent {
  companyName: string;
  contact: string;
  address: string;
  email: string;
  social: {
    instagram: string;
    youtube: string;
    facebook: string;
    twitter: string;
  };
}

interface Content {
  hero: HeroContent;
  projects: Project[];
  partners: Partner[];
  footer: FooterContent;
}

const getDefaultContent = (): Content => ({
  hero: {
    image: '',
    title: 'ROCK',
    subtitle: 'Modular kitchens from steininger.designers'
  },
  projects: [
    { id: 1, image: '', title: 'ATICLE', date: '2024. 10. 07', name: '래미안 이스트 팰리스', type: 'APT', area: { m2: 211, pyeong: 65 } },
    { id: 2, image: '', title: 'ATICLE', date: '2024. 10. 07', name: 'h', type: 'APT', area: { m2: 211, pyeong: 65 } },
    { id: 3, image: '', title: 'ATICLE', date: '2024. 10. 07', name: '숲타운하우스', type: 'APT', area: { m2: 211, pyeong: 65 } },
    { id: 4, image: '', title: 'ATICLE', date: '2024. 10. 07', name: '래미안대치팰리스', type: 'APT', area: { m2: 211, pyeong: 65 } },
    { id: 5, image: '', title: 'ATICLE', date: '2024. 10. 07', name: '시범한양아파트', type: 'APT', area: { m2: 211, pyeong: 65 } },
    { id: 6, image: '', title: 'ATICLE', date: '2024. 10. 07', name: '트라지움', type: 'APT', area: { m2: 211, pyeong: 65 } },
    { id: 7, image: '', title: 'ATICLE', date: '2024. 10. 07', name: '101', type: 'APT', area: { m2: 211, pyeong: 65 } },
    { id: 8, image: '', title: 'ATICLE', date: '2024. 10. 07', name: '타미힐', type: 'APT', area: { m2: 211, pyeong: 65 } },
  ],
  partners: [
    { id: 1, name: '리바트', logo: '' },
    { id: 2, name: '한샘', logo: '' },
    { id: 3, name: '아파트멘터리', logo: '' },
    { id: 4, name: 'LX 지인', logo: '' },
    { id: 5, name: 'KCC', logo: '' },
    { id: 6, name: '까사미아', logo: '' },
    { id: 7, name: '에넥스', logo: '' },
    { id: 8, name: '롯데백화점', logo: '' },
  ],
  footer: {
    companyName: 'botton',
    contact: '',
    address: '경기도 하남시 미사강변서로22 에코큐브 1016호',
    email: '',
    social: {
      instagram: '',
      youtube: '',
      facebook: '',
      twitter: ''
    }
  }
});

export default function LandingPage() {
  const [content, setContent] = useState<Content>(getDefaultContent());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-df9cde4b/content`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch content');
      }

      const data = await response.json();
      if (data.success) {
        setContent(data.content);
      }
    } catch (error) {
      console.error('Error fetching content:', error);
      console.log('Using default content. Please deploy Supabase Edge Function.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <Hero content={content.hero} />
      <PhotoGallery projects={content.projects} />
      <LatestProjects projects={content.projects} />
      <Partners partners={content.partners} />
      <Footer content={content.footer} />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-200">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-[360px] py-4 md:py-5 flex items-center justify-between">
        <div className="text-xl md:text-[25px] text-[#3b3b3b]">
          <span className="font-light">bo</span>
          <span className="font-bold">tton.</span>
          <span className="font-light">co</span>
        </div>
        <Link
          to="/cms"
          className="text-xs md:text-sm px-4 py-2 rounded-full bg-black bg-opacity-10 backdrop-blur-sm text-gray-600 hover:bg-opacity-20 transition-all"
        >
          CMS Admin
        </Link>
      </div>
    </header>
  );
}

function Hero({ content }: { content?: HeroContent }) {
  return (
    <section className="mt-[60px] md:mt-[78px] relative w-full h-[400px] md:h-[675px] flex items-center justify-center overflow-hidden">
      {content?.image && (
        <img
          src={content.image}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute bottom-8 md:bottom-[109px] right-4 md:right-[455px] text-right text-white">
        <p className="text-sm md:text-[15px] mb-1">{content?.title || 'ROCK'}</p>
        <p className="text-xs md:text-[15px] opacity-80">
          {content?.subtitle || 'Modular kitchens from steininger.designers'}
        </p>
      </div>
      <button className="absolute bottom-12 md:bottom-[-25px] left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-[50px] md:h-[50px] rounded-full bg-[#ececec] flex items-center justify-center hover:bg-gray-300 transition-all">
        <svg className="w-5 h-5 md:w-[19px] md:h-[7px]" fill="currentColor" viewBox="0 0 20 7.36396">
          <path d="M0.146447 3.32843C-0.0488155 3.52369 -0.0488155 3.84027 0.146447 4.03553L3.32843 7.21751C3.52369 7.41278 3.84027 7.41278 4.03553 7.21751C4.2308 7.02225 4.2308 6.70567 4.03553 6.51041L1.20711 3.68198L4.03553 0.853554C4.2308 0.658291 4.2308 0.341709 4.03553 0.146447C3.84027 -0.0488155 3.52369 -0.0488155 3.32843 0.146447L0.146447 3.32843ZM8.5 4.18198C8.77614 4.18198 9 3.95812 9 3.68198C9 3.40584 8.77614 3.18198 8.5 3.18198V3.68198V4.18198ZM0.5 3.68198V4.18198H8.5V3.68198V3.18198H0.5V3.68198Z" />
        </svg>
      </button>
    </section>
  );
}

function PhotoGallery({ projects }: { projects: Project[] }) {
  return (
    <section className="py-8 md:py-16 overflow-hidden">
      <div className="flex gap-4 md:gap-[27px] overflow-x-auto px-4 md:px-8 lg:px-[365px] scrollbar-hide">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex-shrink-0 w-[180px] h-[180px] md:w-[230px] md:h-[230px]"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function LatestProjects({ projects }: { projects: Project[] }) {
  return (
    <section className="py-8 md:py-16 px-4 md:px-8 lg:px-[365px]">
      <div className="border-t border-[#5f5e5e] pt-8 md:pt-16">
        <div className="mb-8 md:mb-16">
          <div className="flex items-center gap-1 md:gap-2 mb-4">
            <h2 className="text-xl md:text-[25px] font-medium">
              LATEST<br />PROJECTS
            </h2>
            <div className="text-3xl md:text-[58px] text-[#f0c63c]">+</div>
            <div className="text-xl md:text-[25px] text-[#f0c63c] font-medium">57</div>
          </div>
          <p className="text-xs md:text-[12px] uppercase">PROJECT :</p>
        </div>

        <div className="space-y-0">
          {projects.slice(0, 8).map((project) => (
            <div
              key={project.id}
              className="flex items-center justify-between py-4 md:py-5 border-b border-[#4d4d4d] hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-2 md:gap-[6px]">
                <span className="text-xs md:text-[12px] text-[#090909] font-medium truncate max-w-[150px] md:max-w-none">
                  {project.name}
                </span>
                <span className="text-xs md:text-[12px] text-[#5f5e5e]">
                  {project.type}
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-[6px]">
                <div className="flex items-center gap-1">
                  <span className="text-xs md:text-[12px] text-[#5f5e5e]">TYPE:</span>
                  <span className="text-xs md:text-[15px] text-[#090909] font-medium">
                    {project.area.m2}
                  </span>
                  <span className="text-xs md:text-[12px] text-[#5f5e5e]">m2</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs md:text-[15px] text-[#090909] font-medium">
                    {project.area.pyeong}
                  </span>
                  <span className="text-xs md:text-[12px] text-[#5f5e5e]">평</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners({ partners }: { partners: Partner[] }) {
  return (
    <section className="py-8 md:py-16 px-4 md:px-8 lg:px-[360px]">
      <div className="border-t border-black pt-8 md:pt-12">
        <h2 className="text-xl md:text-[25px] font-medium mb-8 md:mb-12">
          LIST OF PARTNERS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-x-[119px] md:gap-y-[83px] max-w-4xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center h-16 md:h-20"
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain opacity-70"
                />
              ) : (
                <span className="text-sm md:text-[17px] font-bold text-center">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer({ content }: { content?: FooterContent }) {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 md:py-16 px-4 md:px-8 lg:px-[407px]">
      <div className="max-w-[1106px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-6 md:mb-8 gap-4">
          <div>
            <div className="text-2xl md:text-[25px] mb-4">
              <span className="font-light">bo</span>
              <span className="font-bold">tton.</span>
              <span className="font-light">co</span>
            </div>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-xs md:text-[12px] text-[#b7b7b7] hover:text-black">FAQ</a>
            <a href="#" className="text-xs md:text-[12px] text-[#b7b7b7] hover:text-black">이용약관</a>
            <a href="#" className="text-xs md:text-[12px] text-[#b7b7b7] hover:text-black">고객센터</a>
            <a href="/cms" className="text-xs md:text-[12px] text-[#b7b7b7] hover:text-black">IM서비스</a>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6 md:pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-[10px] text-[#b7b7b7]">
            <div className="space-y-2">
              <p>
                {content?.companyName || 'botton'} A&S Development  대표: 오미연
              </p>
              <p>사업자등록번호 432 87 01380</p>
            </div>
            <div className="space-y-2">
              <p>본사: 경기도 하남시 미사강변서로22 에코큐브 1016호</p>
              <p>통신판매업신고증: 제2024-경기하남-1550호</p>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 flex gap-4 justify-center md:justify-end">
          {content?.social?.instagram && (
            <a href={content.social.instagram} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300">
              <span className="sr-only">Instagram</span>
            </a>
          )}
          {content?.social?.youtube && (
            <a href={content.social.youtube} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300">
              <span className="sr-only">YouTube</span>
            </a>
          )}
          {content?.social?.facebook && (
            <a href={content.social.facebook} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300">
              <span className="sr-only">Facebook</span>
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
