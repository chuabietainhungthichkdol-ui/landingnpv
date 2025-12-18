
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, Award, 
  ShieldCheck, Zap, Factory, BarChart3, 
  ChevronRight, Users, Globe, Building2,
  CheckCircle2
} from 'lucide-react';

// --- Thành phần giao diện dùng chung ---

const SectionTitle: React.FC<{ title: string; subtitle?: string; light?: boolean }> = ({ title, subtitle, light }) => (
  <div className="mb-16 text-center">
    <h2 className={`text-3xl md:text-5xl font-extrabold mb-6 tracking-tight ${light ? 'text-white' : 'text-slate-900'}`}>
      {title}
    </h2>
    <div className="h-1.5 w-20 mx-auto mb-6 bg-red-600 rounded-full"></div>
    {subtitle && (
      <p className={`max-w-3xl mx-auto text-lg md:text-xl font-medium ${light ? 'text-slate-300' : 'text-slate-600'}`}>
        {subtitle}
      </p>
    )}
  </div>
);

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-red-500/30 hover:shadow-xl transition-all duration-300">
    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-slate-50 text-blue-900 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-slate-800">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

// --- Trang chính ---

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Giới thiệu', href: '#about' },
    { name: 'Hoạt động', href: '#operations' },
    { name: 'Công nghệ', href: '#tech' },
    { name: 'Thành tựu', href: '#awards' },
    { name: 'Văn hóa', href: '#culture' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  return (
    <div className="min-h-screen font-['Inter'] bg-white selection:bg-red-600 selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-600 flex items-center justify-center rounded-lg shadow-lg shadow-red-600/20">
              <Zap className="text-white" size={28} fill="currentColor" />
            </div>
            <div className={`flex flex-col leading-none ${scrolled ? 'text-blue-900' : 'text-white'}`}>
              <span className="text-xl font-black tracking-tighter">PV POWER</span>
              <span className="text-xs font-bold tracking-widest opacity-80 uppercase">Cà Mau</span>
            </div>
          </div>

          <div className="hidden lg:flex gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-bold uppercase tracking-wider transition-all hover:text-red-600 ${scrolled ? 'text-slate-700' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <button 
            className="lg:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={32} className={scrolled ? 'text-slate-900' : 'text-white'} />
            ) : (
              <Menu size={32} className={scrolled ? 'text-slate-900' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-bold text-slate-800 hover:text-red-600 border-b border-slate-100 pb-2"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom" 
            alt="Power Plant Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-slate-900/40 to-slate-900"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center lg:text-left">
          <div className="max-w-4xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
              <span className="text-red-500 text-sm font-bold uppercase tracking-[0.2em]">Cụm Khí - Điện - Đạm Cà Mau</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              CÔNG TY ĐIỆN LỰC<br />
              <span className="text-red-600">DẦU KHÍ CÀ MAU</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl leading-relaxed">
              Trái tim năng lượng của khu vực Tây Nam Bộ, vận hành an toàn và hiệu quả hai nhà máy điện khí hiện đại bậc nhất Việt Nam.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <a href="#about" className="px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-black text-lg rounded-xl shadow-xl shadow-red-600/30 transition-all transform hover:-translate-y-1">
                KHÁM PHÁ NGAY
              </a>
              <a href="#contact" className="px-10 py-5 bg-white/10 hover:bg-white hover:text-blue-900 text-white font-bold text-lg rounded-xl backdrop-blur-md transition-all border border-white/20">
                LIÊN HỆ CÔNG TÁC
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="about" className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-100 rounded-full -z-10 blur-3xl opacity-60"></div>
              <img 
                src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80" 
                alt="Industrial Facility" 
                className="rounded-3xl shadow-2xl border-8 border-slate-50 relative z-10"
              />
              <div className="absolute -bottom-10 -right-10 bg-blue-900 text-white p-10 rounded-3xl shadow-2xl hidden md:block max-w-xs z-20">
                <p className="text-4xl font-black mb-2 tracking-tighter">15.03</p>
                <p className="text-red-500 font-bold uppercase tracking-widest text-sm mb-4">2007</p>
                <p className="text-slate-300 text-sm italic font-medium">"Ngày thành lập chi nhánh Tổng Công ty Điện lực Dầu khí Việt Nam - CTCP."</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-blue-900 leading-tight">
                Vị Thế & <span className="text-red-600">Quy Mô</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Tọa lạc trên diện tích <span className="text-blue-900 font-bold">54 ha</span> tại xã Khánh An, huyện U Minh, tỉnh Cà Mau, nhà máy là mắt xích trọng yếu trong Hệ thống điện Miền Nam và là điểm cuối cùng của hệ thống điện Quốc gia.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex gap-5">
                  <div className="mt-1"><CheckCircle2 className="text-red-600" size={24} /></div>
                  <div>
                    <h4 className="font-bold text-blue-900 text-xl mb-1">Cà Mau 1 & 2</h4>
                    <p className="text-slate-500 text-sm font-medium">Vận hành thương mại lần lượt từ 2008.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="mt-1"><CheckCircle2 className="text-red-600" size={24} /></div>
                  <div>
                    <h4 className="font-bold text-blue-900 text-xl mb-1">1.500 MW</h4>
                    <p className="text-slate-500 text-sm font-medium">Tổng công suất thiết kế ấn tượng.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="mt-1"><CheckCircle2 className="text-red-600" size={24} /></div>
                  <div>
                    <h4 className="font-bold text-blue-900 text-xl mb-1">8 Tỷ kWh</h4>
                    <p className="text-slate-500 text-sm font-medium">Sản lượng điện cung ứng bình quân năm.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="mt-1"><CheckCircle2 className="text-red-600" size={24} /></div>
                  <div>
                    <h4 className="font-bold text-blue-900 text-xl mb-1">260 CBCNV</h4>
                    <p className="text-slate-500 text-sm font-medium">Nguồn nhân lực chất lượng cao.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operations Section */}
      <section id="operations" className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Lĩnh Vực Hoạt Động" 
            subtitle="Tập trung vào quản lý, vận hành và duy trì hệ thống điện khí an toàn, bền vững."
          />
          
          <div className="grid md:grid-cols-3 gap-10">
            <FeatureCard 
              icon={<Zap size={32} />} 
              title="Vận Hành Sản Xuất" 
              desc="Quản lý vận hành các tổ máy phát điện ổn định, tiêu thụ khoảng 1,55 tỷ Sm³ khí/năm cho hệ thống, đảm bảo an ninh năng lượng."
            />
            <FeatureCard 
              icon={<ShieldCheck size={32} />} 
              title="Bảo Dưỡng Kỹ Thuật" 
              desc="Thực hiện bảo trì định kỳ nghiêm ngặt: Tiểu tu (8.3k giờ), Trung tu (25k giờ) và Đại tu (50k giờ) để duy trì hiệu suất tối ưu."
            />
            <FeatureCard 
              icon={<Users size={32} />} 
              title="Phát Triển Nhân Lực" 
              desc="Sở hữu đội ngũ chuyên gia lành nghề, trên 70% có trình độ Đại học trở lên, liên tục được đào tạo theo chuẩn quốc tế."
            />
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="tech" className="py-32 bg-blue-900 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-red-500 font-bold uppercase tracking-widest mb-4 block">Siemens (Đức)</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                Công Nghệ <span className="text-red-600">Hiện Đại</span> Bậc Nhất
              </h2>
              <p className="text-slate-300 text-lg mb-10 leading-relaxed font-medium">
                Nhà máy sử dụng thiết kế Chu trình hỗn hợp (CCGT) tiên tiến với cấu hình <span className="text-white font-bold">2-2-1</span>:
              </p>
              
              <div className="space-y-6">
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                  <h4 className="text-red-500 font-bold mb-2">Tổ hợp phát điện</h4>
                  <p className="text-slate-100">02 Tuabine khí công suất 250 MW/máy kết hợp 02 Lò thu hồi nhiệt (HRSG) và 01 Tuabine hơi 250 MW.</p>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                  <h4 className="text-red-500 font-bold mb-2">Cơ sở hạ tầng bền vững</h4>
                  <p className="text-slate-100">Áp dụng công nghệ hút chân không của Pháp để gia cố nền móng trên vùng đất bùn U Minh đặc thù, đảm bảo chống lún tuyệt đối.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-48 rounded-2xl bg-blue-800/50 flex items-center justify-center p-8 border border-white/5">
                    <Factory className="text-red-600" size={48} />
                  </div>
                  <div className="h-64 rounded-2xl overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Power Plant Detail" />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="h-64 rounded-2xl overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1454165833767-027eeed15c3e?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Engineer" />
                  </div>
                  <div className="h-48 rounded-2xl bg-red-600 flex flex-col items-center justify-center p-8 shadow-xl shadow-red-600/20">
                    <p className="text-white text-3xl font-black">750 MW</p>
                    <p className="text-white/80 font-bold text-xs uppercase tracking-widest text-center">Mỗi nhà máy</p>
                  </div>
                </div>
              </div>
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/20 rounded-full blur-[120px] -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="awards" className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
          <SectionTitle 
            title="Thành Tựu Rực Rỡ" 
            subtitle="Những con số minh chứng cho sự nỗ lực không ngừng sau hơn 15 năm hình thành và phát triển."
          />
          
          <div className="grid md:grid-cols-4 gap-8 mb-24">
            <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:-translate-y-2 transition-transform">
              <p className="text-5xl font-black text-blue-900 mb-2">84 Tỷ</p>
              <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">kWh Sản Lượng</p>
            </div>
            <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:-translate-y-2 transition-transform">
              <p className="text-5xl font-black text-red-600 mb-2">117k</p>
              <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Tỷ Doanh Thu</p>
            </div>
            <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:-translate-y-2 transition-transform">
              <p className="text-5xl font-black text-blue-900 mb-2">2.9k</p>
              <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Tỷ Nộp Ngân Sách</p>
            </div>
            <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:-translate-y-2 transition-transform">
              <p className="text-5xl font-black text-red-600 mb-2">12 Tỷ</p>
              <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">An Sinh Xã Hội</p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 text-left">
            <div className="flex gap-6 p-8 bg-blue-900 rounded-3xl shadow-xl items-center border-l-8 border-red-600">
              <div className="w-16 h-16 shrink-0 bg-white/10 rounded-2xl flex items-center justify-center text-red-500">
                <Award size={40} />
              </div>
              <div>
                <h4 className="text-white font-black text-lg mb-1">Huân chương Lao động hạng Ba</h4>
                <p className="text-slate-300 text-sm">Ghi nhận những đóng góp đặc biệt năm 2012.</p>
              </div>
            </div>
            <div className="flex gap-6 p-8 bg-slate-900 rounded-3xl shadow-xl items-center border-l-8 border-blue-600">
              <div className="w-16 h-16 shrink-0 bg-white/10 rounded-2xl flex items-center justify-center text-blue-500">
                <Award size={40} />
              </div>
              <div>
                <h4 className="text-white font-black text-lg mb-1">Cờ thi đua của Chính phủ</h4>
                <p className="text-slate-300 text-sm">Vinh danh đơn vị dẫn đầu phong trào năm 2015.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Standards */}
      <section id="culture" className="py-32 bg-slate-900">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Văn Hóa & Hệ Thống" 
            subtitle="Xây dựng ngôi nhà chung PV Power Cà Mau dựa trên sự Yêu thương - Hài hòa - Trách nhiệm."
            light
          />
          
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h3 className="text-3xl font-black text-white italic">"Ngôi nhà chung PV Power Cà Mau"</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Chúng tôi không chỉ sản xuất điện, chúng tôi kiến tạo môi trường làm việc thân thiện, minh bạch và tôn trọng sự khác biệt vùng miền.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                  <ShieldCheck className="text-green-500 mx-auto mb-2" />
                  <p className="text-xs font-bold text-slate-300">ISO 9001:2015</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                  <Globe className="text-blue-500 mx-auto mb-2" />
                  <p className="text-xs font-bold text-slate-300">ISO 14001:2015</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                  <ShieldCheck className="text-red-500 mx-auto mb-2" />
                  <p className="text-xs font-bold text-slate-300">OHSAS 18001</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-10 shadow-2xl">
              <h4 className="text-2xl font-black text-blue-900 mb-6">Giá trị cốt lõi</h4>
              <ul className="space-y-5">
                {[
                  "Làm việc với tinh thần trách nhiệm cao nhất.",
                  "Hợp tác hài hòa, tôn trọng lẫn nhau.",
                  "Luôn yêu thương, hỗ trợ đồng nghiệp như người thân.",
                  "Cam kết an toàn tuyệt đối và bảo vệ môi trường."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <ChevronRight className="text-red-600 shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Kết Nối Với Chúng Tôi" 
            subtitle="Đội ngũ của chúng tôi luôn sẵn sàng tiếp nhận và giải đáp mọi thông tin."
          />
          
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
            <div className="space-y-10">
              <div className="flex gap-6 items-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-900 shadow-sm border border-blue-100">
                  <MapPin size={32} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-800 uppercase tracking-widest text-xs mb-1">Địa chỉ</h5>
                  <p className="text-slate-600 font-medium text-lg">Ấp 1, xã Khánh An, huyện U Minh, tỉnh Cà Mau</p>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center text-red-600 shadow-sm border border-red-100">
                  <Phone size={32} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-800 uppercase tracking-widest text-xs mb-1">Điện thoại / Fax</h5>
                  <p className="text-slate-600 font-medium text-lg">ĐT: 0290.3650072 - Fax: 0290.3819818</p>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-900 shadow-sm border border-blue-100">
                  <Mail size={32} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-800 uppercase tracking-widest text-xs mb-1">Email</h5>
                  <p className="text-slate-600 font-medium text-lg">dldkcm@cm.pvpower.vn</p>
                </div>
              </div>
            </div>

            <form className="bg-slate-50 p-10 rounded-3xl border border-slate-200/50 shadow-inner" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-6">
                <input 
                  type="text" 
                  placeholder="Họ và tên" 
                  className="w-full px-6 py-4 bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-red-600/10 focus:border-red-600 transition-all font-medium"
                />
                <input 
                  type="email" 
                  placeholder="Địa chỉ Email" 
                  className="w-full px-6 py-4 bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-red-600/10 focus:border-red-600 transition-all font-medium"
                />
                <textarea 
                  rows={4} 
                  placeholder="Nội dung lời nhắn..." 
                  className="w-full px-6 py-4 bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-red-600/10 focus:border-red-600 transition-all font-medium"
                ></textarea>
                <button className="w-full py-5 bg-blue-900 text-white font-black text-lg rounded-xl hover:bg-slate-900 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-900/20">
                  GỬI YÊU CẦU
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-red-600 flex items-center justify-center rounded-lg">
                  <Zap className="text-white" size={24} fill="currentColor" />
                </div>
                <div className="flex flex-col leading-none text-white">
                  <span className="text-lg font-black tracking-tighter uppercase">PV Power Cà Mau</span>
                </div>
              </div>
              <p className="text-slate-500 leading-relaxed font-medium">
                Chi nhánh Tổng Công ty Điện lực Dầu khí Việt Nam - CTCP. Đảm bảo nguồn điện ổn định, chất lượng cho sự phát triển của quốc gia.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 col-span-1 md:col-span-2">
              <div>
                <h6 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Liên kết nhanh</h6>
                <ul className="space-y-4">
                  {navLinks.slice(0, 4).map(link => (
                    <li key={link.name}>
                      <a href={link.href} className="text-slate-500 hover:text-red-500 transition-colors font-medium">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h6 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Thông tin khác</h6>
                <ul className="space-y-4">
                  <li><a href="#" className="text-slate-500 hover:text-red-500 transition-colors font-medium">Tuyển dụng</a></li>
                  <li><a href="#" className="text-slate-500 hover:text-red-500 transition-colors font-medium">Quan hệ cổ đông</a></li>
                  <li><a href="#" className="text-slate-500 hover:text-red-500 transition-colors font-medium">Tin tức doanh nghiệp</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-600 text-sm font-medium">
              &copy; {new Date().getFullYear()} Công ty Điện lực Dầu khí Cà Mau. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-slate-600 hover:text-white transition-colors"><Globe size={20} /></a>
              <a href="#" className="text-slate-600 hover:text-white transition-colors"><Users size={20} /></a>
              <a href="#" className="text-slate-600 hover:text-white transition-colors"><Building2 size={20} /></a>
            </div>
          </div>
        </div>
      </footer>

      {/* Global CSS Overrides */}
      <style>{`
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s linear infinite alternate;
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          -webkit-font-smoothing: antialiased;
        }
      `}</style>
    </div>
  );
};

export default App;
