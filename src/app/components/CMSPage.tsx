import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { projectId, publicAnonKey } from '/utils/supabase/info';

interface Project {
  id: number;
  image: string;
  title: string;
  date: string;
  name: string;
  type: string;
  area: { m2: number; pyeong: number };
}

export default function CMSPage() {
  const [activeTab, setActiveTab] = useState<'hero' | 'projects' | 'partners' | 'footer'>('hero');
  const [heroContent, setHeroContent] = useState({ image: '', title: '', subtitle: '' });
  const [projects, setProjects] = useState<Project[]>([]);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

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
        setHeroContent(data.content.hero);
        setProjects(data.content.projects);
      }
    } catch (error) {
      console.error('Error fetching content:', error);
      showMessage('콘텐츠를 불러오는데 실패했습니다', 'error');
    }
  };

  const saveContent = async (section: string, content: any) => {
    setSaving(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-df9cde4b/content/${section}`,
        {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ content }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to save content');
      }

      const data = await response.json();
      if (data.success) {
        showMessage('저장되었습니다', 'success');
      }
    } catch (error) {
      console.error('Error saving content:', error);
      showMessage('저장에 실패했습니다', 'error');
    } finally {
      setSaving(false);
    }
  };

  const showMessage = (msg: string, type: 'success' | 'error') => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 3000);
  };

  const handleSaveHero = () => {
    saveContent('hero', heroContent);
  };

  const handleSaveProjects = () => {
    saveContent('projects', projects);
  };

  const addProject = () => {
    const newProject: Project = {
      id: Date.now(),
      image: '',
      title: 'ARTICLE',
      date: new Date().toISOString().split('T')[0].replace(/-/g, '. '),
      name: '새 프로젝트',
      type: 'APT',
      area: { m2: 211, pyeong: 65 },
    };
    setProjects([...projects, newProject]);
  };

  const updateProject = (id: number, field: string, value: any) => {
    setProjects(projects.map(p => {
      if (p.id === id) {
        if (field.startsWith('area.')) {
          const areaField = field.split('.')[1];
          return { ...p, area: { ...p.area, [areaField]: value } };
        }
        return { ...p, [field]: value };
      }
      return p;
    }));
  };

  const deleteProject = (id: number) => {
    if (confirm('이 프로젝트를 삭제하시겠습니까?')) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">botton CMS</h1>
          <Link
            to="/"
            className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            홈페이지 보기
          </Link>
        </div>
      </header>

      {message && (
        <div className={`fixed top-20 right-4 px-6 py-3 rounded-md shadow-lg ${
          message.includes('성공') ? 'bg-green-500' : 'bg-red-500'
        } text-white z-50`}>
          {message}
        </div>
      )}

      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <div className="mb-6">
          <div className="flex gap-2 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('hero')}
              className={`px-4 py-2 font-medium ${
                activeTab === 'hero'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              히어로 섹션
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-4 py-2 font-medium ${
                activeTab === 'projects'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              프로젝트
            </button>
            <button
              onClick={() => setActiveTab('partners')}
              className={`px-4 py-2 font-medium ${
                activeTab === 'partners'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              파트너
            </button>
            <button
              onClick={() => setActiveTab('footer')}
              className={`px-4 py-2 font-medium ${
                activeTab === 'footer'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              푸터
            </button>
          </div>
        </div>

        {activeTab === 'hero' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">히어로 섹션 관리</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  이미지 URL
                </label>
                <input
                  type="text"
                  value={heroContent.image}
                  onChange={(e) => setHeroContent({ ...heroContent, image: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  제목
                </label>
                <input
                  type="text"
                  value={heroContent.title}
                  onChange={(e) => setHeroContent({ ...heroContent, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="ROCK"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  부제목
                </label>
                <input
                  type="text"
                  value={heroContent.subtitle}
                  onChange={(e) => setHeroContent({ ...heroContent, subtitle: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Modular kitchens from steininger.designers"
                />
              </div>
              <button
                onClick={handleSaveHero}
                disabled={saving}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
              >
                {saving ? '저장 중...' : '저장'}
              </button>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">프로젝트 관리</h2>
              <div className="flex gap-2">
                <button
                  onClick={addProject}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  + 프로젝트 추가
                </button>
                <button
                  onClick={handleSaveProjects}
                  disabled={saving}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
                >
                  {saving ? '저장 중...' : '저장'}
                </button>
              </div>
            </div>
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        이미지 URL
                      </label>
                      <input
                        type="text"
                        value={project.image}
                        onChange={(e) => updateProject(project.id, 'image', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        프로젝트명
                      </label>
                      <input
                        type="text"
                        value={project.name}
                        onChange={(e) => updateProject(project.id, 'name', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        타입
                      </label>
                      <input
                        type="text"
                        value={project.type}
                        onChange={(e) => updateProject(project.id, 'type', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        날짜
                      </label>
                      <input
                        type="text"
                        value={project.date}
                        onChange={(e) => updateProject(project.id, 'date', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        면적 (m2)
                      </label>
                      <input
                        type="number"
                        value={project.area.m2}
                        onChange={(e) => updateProject(project.id, 'area.m2', Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        면적 (평)
                      </label>
                      <input
                        type="number"
                        value={project.area.pyeong}
                        onChange={(e) => updateProject(project.id, 'area.pyeong', Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                      onClick={() => deleteProject(project.id)}
                      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm"
                    >
                      삭제
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'partners' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">파트너 관리</h2>
            <p className="text-gray-600">파트너 섹션은 준비 중입니다.</p>
          </div>
        )}

        {activeTab === 'footer' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">푸터 관리</h2>
            <p className="text-gray-600">푸터 섹션은 준비 중입니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
