
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, Award, 
  ShieldCheck, Zap, Factory, BarChart3, 
  ChevronRight, Users, Globe 
} from 'lucide-react';

// --- Utility Components ---

const SectionTitle: React.FC<{ title: string; subtitle?: string; light?: boolean }> = ({ title, subtitle, light }) => (
  <div className="mb-12 text-center">
    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-slate-800'}`}>
      {title}
    </h2>
    <div className={`h-1.5 w-24 mx-auto mb-4 bg-pv-red rounded-full`}></div>
    {subtitle && (
      <p className={`max-w-2xl mx-auto text-lg ${light ? 'text-slate-200' : 'text-slate-600'}`}>
        {subtitle}
      </p>
    )}
  </div>
);

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition-all hover:shadow-md h-full">
    <div className="text-pv-blue mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3 text-slate-800">{title}</h3>
    <div className="text-slate-600 leading-relaxed text-sm lg:text-base">
      {children}
    </div>
  </div>
);

// --- Main Page Component ---

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Giới thiệu', href: '#about' },
    { name: 'Năng lực', href: '#capabilities' },
    { name: 'Công nghệ', href: '#technology' },
    { name: 'Thành tựu', href: '#achievements' },
    { name: 'Văn hóa', href: '#culture' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-pv-blue text-white p-2 rounded flex items-center justify-center font-bold text-xl">
              PV
            </div>
            <div className={`font-bold leading-tight ${scrolled ? 'text-pv-blue' : 'text-white'}`}>
              POWER<br />
              <span className="text-sm font-medium">CÀ MAU</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-semibold hover:text-red-500 transition-colors ${scrolled ? 'text-slate-700' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <button 
            className="md:hidden text-pv-blue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={scrolled ? 'text-slate-800' : 'text-white'} size={32} />
            ) : (
              <Menu className={scrolled ? 'text-slate-800' : 'text-white'} size={32} />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 md:hidden flex flex-col gap-4 animate-fade-in-down">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-800 font-semibold py-2 border-b border-slate-100"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Darkened Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url('https://picsum.photos/id/192/1920/1080?grayscale')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-4xl text-white">
            <span className="inline-block px-4 py-1 bg-pv-red text-white text-sm font-bold rounded-sm mb-6 uppercase tracking-widest">
              Đơn vị thành viên PV Power
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              CÔNG TY ĐIỆN LỰC<br />
              <span className="text-pv-red">DẦU KHÍ CÀ MAU</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-slate-200 max-w-2xl leading-relaxed">
              Quản lý và vận hành sản xuất điện tại Cụm công nghiệp Khí - Điện - Đạm Cà Mau. Đảm bảo an ninh năng lượng cho Hệ thống điện Miền Nam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#about" className="px-8 py-4 bg-pv-red hover:bg-red-700 text-white font-bold rounded transition-all text-center">
                Tìm hiểu thêm
              </a>
              <a href="#contact" className="px-8 py-4 border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold rounded transition-all text-center">
                Liên hệ hợp tác
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Tổng Quan Về Công Ty" 
            subtitle="PV Power Ca Mau được thành lập ngày 15/03/2007, là chi nhánh Tổng Công ty Điện lực Dầu khí Việt Nam - CTCP."
          />
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                Nhà máy được xây dựng trên diện tích khoảng <span className="font-bold text-slate-800">54 ha</span> tại xã Khánh An, huyện U Minh, tỉnh Cà Mau. Đây là một phần quan trọng trong Cụm công nghiệp Khí-Điện-Đạm Cà Mau có tổng diện tích trên 231 ha.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 text-pv-blue rounded-lg">
                    <Factory size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">2 Nhà máy</p>
                    <p className="text-sm text-slate-500">Cà Mau 1 & Cà Mau 2</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-50 text-pv-red rounded-lg">
                    <Zap size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">1.500 MW</p>
                    <p className="text-sm text-slate-500">Tổng công suất thiết kế</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-50 text-green-700 rounded-lg">
                    <Globe size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">8 tỷ kWh</p>
                    <p className="text-sm text-slate-500">Sản lượng điện hàng năm</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-50 text-yellow-700 rounded-lg">
                    <BarChart3 size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">860 triệu USD</p>
                    <p className="text-sm text-slate-500">Đầu tư cho 2 nhà máy</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/id/445/800/600" 
                alt="Nhà máy Điện Cà Mau" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-pv-blue text-white p-8 rounded-xl hidden lg:block max-w-xs shadow-lg">
                <p className="text-sm opacity-80 mb-2 uppercase tracking-wide">Vị trí địa lý</p>
                <p className="font-medium text-lg italic">"Điểm cuối của hệ thống điện Quốc gia, giữ ổn định nguồn điện cho Miền Nam."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities & Main Activities */}
      <section id="capabilities" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Năng Lực & Hoạt Động" 
            subtitle="Đội ngũ kỹ thuật chuyên nghiệp cùng hạ tầng hiện đại bậc nhất."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <InfoCard icon={<Zap size={32} />} title="Vận hành & Sản xuất">
              Quản lý vận hành sản xuất điện ổn định, góp phần đảm bảo an ninh năng lượng quốc gia. Tiêu thụ khoảng 1,55 tỷ Sm³ khí/năm cho hệ thống.
            </InfoCard>
            <InfoCard icon={<ShieldCheck size={32} />} title="Sửa chữa & Bảo dưỡng">
              Thực hiện bảo dưỡng định kỳ nghiêm ngặt: Tiểu tu mỗi 8.300 giờ, Trung tu mỗi 25.000 giờ và Đại tu sau mỗi 50.000 giờ vận hành (EOH).
            </InfoCard>
            <InfoCard icon={<Users size={32} />} title="Nguồn Nhân Lực">
              Khoảng 260 CBCNV chuyên môn cao, trên 70% có trình độ đại học trở lên. Tỷ lệ lao động địa phương đạt trên 35%.
            </InfoCard>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-24 bg-pv-blue relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <SectionTitle 
            title="Công Nghệ Tiên Tiến" 
            subtitle="Thiết kế và thiết bị cung cấp bởi Tập đoàn Siemens (Đức)."
            light
          />
          
          <div className="grid lg:grid-cols-2 gap-12 text-white">
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <ChevronRight className="text-pv-red" /> Cấu hình 2-2-1
              </h3>
              <ul className="space-y-4 text-slate-200">
                <li className="flex gap-3 items-start">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-pv-red shrink-0"></div>
                  <span><span className="font-bold text-white">02 Tuabine khí:</span> Công suất 250 MW mỗi tuabin.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-pv-red shrink-0"></div>
                  <span><span className="font-bold text-white">02 Lò thu hồi nhiệt (HRSG):</span> Tận dụng nhiệt khí thoát (575°C) để tạo hơi nước.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-pv-red shrink-0"></div>
                  <span><span className="font-bold text-white">01 Tuabine hơi:</span> Công suất 250 MW, vận hành theo chu trình Rankine.</span>
                </li>
              </ul>
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm font-bold uppercase tracking-widest text-pv-red mb-2">Chu trình nhiệt động</p>
                <p className="text-lg">Chu trình BRAYTON (Khí) & Chu trình RANKINE (Hơi nước)</p>
              </div>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <ChevronRight className="text-pv-red" /> Xây dựng & Nền móng
              </h3>
              <p className="mb-6 text-slate-200 leading-relaxed">
                Khu vực U Minh Hạ có nền đất yếu (lớp than bùn 0,5 - 1,5m), dự án đã áp dụng <span className="text-white font-bold">công nghệ hút chân không của Pháp</span>.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg">
                  <span className="text-pv-red font-bold text-xl">01</span>
                  <span>Tiết giảm chi phí xây dựng tối đa.</span>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg">
                  <span className="text-pv-red font-bold text-xl">02</span>
                  <span>Rút ngắn thời gian gia tải mặt bằng.</span>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg">
                  <span className="text-pv-red font-bold text-xl">03</span>
                  <span>Đảm bảo hiệu quả chống lún cực cao.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Abstract background graphics */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -ml-48 -mb-48"></div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Thành Tựu & Đóng Góp" 
            subtitle="Hơn một thập kỷ nỗ lực không ngừng nghỉ vì sự phát triển của đất nước."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="p-8 border-l-4 border-pv-blue bg-slate-50 text-center">
              <p className="text-4xl font-bold text-pv-blue mb-2">84 Tỷ</p>
              <p className="text-slate-600 font-medium">kWh điện sản xuất</p>
            </div>
            <div className="p-8 border-l-4 border-pv-red bg-slate-50 text-center">
              <p className="text-4xl font-bold text-pv-red mb-2">117.000</p>
              <p className="text-slate-600 font-medium">Tỷ đồng doanh thu</p>
            </div>
            <div className="p-8 border-l-4 border-pv-blue bg-slate-50 text-center">
              <p className="text-4xl font-bold text-pv-blue mb-2">2.900</p>
              <p className="text-slate-600 font-medium">Tỷ đồng nộp ngân sách</p>
            </div>
            <div className="p-8 border-l-4 border-pv-red bg-slate-50 text-center">
              <p className="text-4xl font-bold text-pv-red mb-2">12 Tỷ</p>
              <p className="text-slate-600 font-medium">An sinh xã hội</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <div className="flex items-center gap-6 p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
              <div className="shrink-0 w-16 h-16 bg-yellow-100 flex items-center justify-center rounded-full text-yellow-600">
                <Award size={32} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Huân chương Lao động hạng Ba (2012)</h4>
                <p className="text-sm text-slate-500">Ghi nhận những đóng góp xuất sắc trong lao động sản xuất.</p>
              </div>
            </div>
            <div className="flex items-center gap-6 p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
              <div className="shrink-0 w-16 h-16 bg-blue-100 flex items-center justify-center rounded-full text-pv-blue">
                <Award size={32} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Cờ thi đua Chính phủ (2015)</h4>
                <p className="text-sm text-slate-500">Đơn vị dẫn đầu trong phong trào thi đua toàn quốc.</p>
              </div>
            </div>
            <div className="flex items-center gap-6 p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
              <div className="shrink-0 w-16 h-16 bg-red-100 flex items-center justify-center rounded-full text-pv-red">
                <Award size={32} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Cờ thi đua hạng nhất tỉnh Cà Mau (2016 - 2018)</h4>
                <p className="text-sm text-slate-500">Ghi nhận những đóng góp cho sự phát triển kinh tế vùng Tây Nam Bộ.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Standards Section */}
      <section id="culture" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Văn Hóa & Tiêu Chuẩn" 
            subtitle="Môi trường làm việc an toàn, thân thiện và trách nhiệm."
            light
          />
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-pv-red">Tiêu chuẩn quốc tế áp dụng</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">OHSAS 18001:2007</h4>
                    <p className="text-slate-400 text-sm">Quản lý an toàn sức khỏe nghề nghiệp.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">ISO 9001:2015</h4>
                    <p className="text-slate-400 text-sm">Hệ thống quản lý chất lượng tiêu chuẩn.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">ISO 14001:2015</h4>
                    <p className="text-slate-400 text-sm">Hệ thống quản lý môi trường.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white text-slate-900 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-pv-blue italic">"Ngôi nhà chung PV Power Ca Mau"</h3>
              <p className="text-lg leading-relaxed mb-6">
                Văn hóa bắt nguồn từ giá trị cốt lõi: <span className="font-bold text-pv-blue">Yêu thương con người - Hài hòa hợp tác - Trách nhiệm.</span>
              </p>
              <div className="space-y-4 text-slate-600">
                <p>• Xây dựng môi trường làm việc thân thiện, công bằng và minh bạch.</p>
                <p>• Tôn trọng sự "Khác biệt" về văn hóa, phong tục các vùng miền.</p>
                <p>• Tạo điều kiện tốt nhất để CBCNV phát huy tối đa năng lực, sở trường.</p>
                <p>• Tầm nhìn: "Trở thành doanh nghiệp năng lượng hàng đầu Việt Nam với công nghệ hiện đại, thân thiện môi trường."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Liên Hệ" 
            subtitle="Mọi thắc mắc hoặc yêu cầu hợp tác xin vui lòng liên hệ trực tiếp với chúng tôi."
          />
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-pv-blue text-white rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 uppercase tracking-wide text-sm">Trụ sở chính</h4>
                  <p className="text-slate-600">Ấp 1, xã Khánh An, huyện U Minh, tỉnh Cà Mau</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-pv-red text-white rounded-full flex items-center justify-center shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 uppercase tracking-wide text-sm">Điện thoại / Fax</h4>
                  <p className="text-slate-600">ĐT: 0290.3650072 - Fax: 0290.3819818</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-pv-blue text-white rounded-full flex items-center justify-center shrink-0">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 uppercase tracking-wide text-sm">Email liên hệ</h4>
                  <p className="text-slate-600">dldkcm@cm.pvpower.vn</p>
                </div>
              </div>
            </div>

            <form className="bg-slate-50 p-8 rounded-2xl border border-slate-100" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-4 mb-4">
                <input 
                  type="text" 
                  placeholder="Họ và tên của bạn" 
                  className="p-4 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pv-blue"
                  required
                />
                <input 
                  type="email" 
                  placeholder="Địa chỉ Email" 
                  className="p-4 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pv-blue"
                  required
                />
                <textarea 
                  rows={4} 
                  placeholder="Nội dung liên hệ..." 
                  className="p-4 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pv-blue"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-4 bg-pv-blue hover:bg-slate-800 text-white font-bold rounded transition-colors"
              >
                Gửi thông tin ngay
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 text-slate-400 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <div className="bg-pv-blue text-white p-1 rounded font-bold text-lg">PV</div>
              <div className="font-bold leading-tight text-white">
                POWER<br />
                <span className="text-xs font-medium">CÀ MAU</span>
              </div>
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Trang chủ</a>
              <a href="#about" className="hover:text-white transition-colors">Giới thiệu</a>
              <a href="#technology" className="hover:text-white transition-colors">Công nghệ</a>
              <a href="#culture" className="hover:text-white transition-colors">Văn hóa</a>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-white/5">
            <p className="text-sm">© {new Date().getFullYear()} Công ty Điện lực Dầu khí Cà Mau. Tất cả quyền được bảo lưu.</p>
            <p className="text-xs mt-2 italic">Thông tin dựa trên tài liệu giới thiệu chính thức của PV Power Ca Mau.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
