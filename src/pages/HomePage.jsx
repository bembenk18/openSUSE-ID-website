import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Users, Zap, Globe, ArrowRight, Calendar } from 'lucide-react';
import ImageWithFallback from '../components/ImageWithFallback';

const HomePage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Repositori Baru download.opensuse.id',
      excerpt: 'Salam, Komunitas openSUSE Indonesia memiliki 2 repositori lokal yg dikelola mandiri. repo.opensuse.id dan twrepo.opensuse.id.[…]',
      image: 'https://opensuse.id/wp-content/uploads/2025/10/openSUSE-iDxCloudKilat-d.o.i-IG.png',
      category: 'Komunitas',
      date: '18 Oktober 2025',
      slug: 'repositori-baru-download-opensuse-id'
    },
    {
      id: 2,
      title: 'openSUSE-ID Meet Up Desember 2022',
      excerpt: 'Halo teman-teman! Untuk menutup tahun ini openSUSE Indonesia ingin mengadakan meetup terakhir tahun 2022. Skuy[…]',
      image: 'https://opensuse.id/wp-content/uploads/2022/12/openSUSEDesember.png',
      category: 'Kegiatan',
      date: '12 Desember 2022',
      slug: 'opensuse-id-meet-up-desember-2022'
    },
    {
      id: 3,
      title: 'openSUSE-ID di Indonesia Linux Conference 2022',
      excerpt: 'Apa itu ILC? Yang jelas bukan Indonesia Lawyers Club. ILC adalah Indonesia Linux Conference yang[…]',
      image: 'https://opensuse.id/wp-content/uploads/2022/11/Group-1-1232x567.png',
      category: 'Kegiatan',
      date: '12 November 2022',
      slug: 'opensuse-id-di-indonesia-linux-conference-2022'
    }
  ];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section 
        className="relative h-[600px] flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: 'url(https://opensuse.id/wp-content/uploads/2018/03/photo_2018-03-02_16-04-11.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2d5f5d]/90 to-[#1e4746]/90"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              Komunitas openSUSE Indonesia
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-2xl mx-auto">
              Bergabunglah dengan komunitas Linux terbesar di Indonesia. Belajar, berbagi, dan berkembang bersama.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.facebook.com/groups/opensuse.indonesia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#73ba25] hover:bg-[#5ea01d] text-white font-semibold rounded-xl transition-all transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center"
              >
                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook Group
              </a>
              <a 
                href="https://t.me/openSUSE_ID" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold rounded-xl transition-all transform hover:scale-105 inline-flex items-center justify-center"
              >
                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Telegram Group
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#73ba25]/10 rounded-xl mb-3">
                <Users className="h-6 w-6 text-[#73ba25]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">1000+</div>
              <div className="text-sm text-gray-600">Anggota Komunitas</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#73ba25]/10 rounded-xl mb-3">
                <Download className="h-6 w-6 text-[#73ba25]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">10K+</div>
              <div className="text-sm text-gray-600">Downloads per Bulan</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#73ba25]/10 rounded-xl mb-3">
                <Zap className="h-6 w-6 text-[#73ba25]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">3</div>
              <div className="text-sm text-gray-600">Repositori</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#73ba25]/10 rounded-xl mb-3">
                <Globe className="h-6 w-6 text-[#73ba25]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">2007</div>
              <div className="text-sm text-gray-600">Tahun Berdiri</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#73ba25] font-semibold mb-2 block">Tentang openSUSE</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Distribusi Linux Terbaik</h2>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
              <div className="flex justify-center mb-8">
                <ImageWithFallback
                  src="https://counter.opensuse.org/medium" 
                  alt="openSUSE Counter" 
                  className="h-24 w-auto"
                />
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                openSUSE adalah distribusi Linux yang stabil, mudah digunakan, dan lengkap. Ditujukan untuk pengguna dan pengembang yang bekerja pada desktop atau server. Sangat bagus untuk pemula, pengguna berpengalaman, dan geek - distribusi yang sempurna untuk semua orang!
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Proyek openSUSE bekerja secara terbuka, transparan, dan bersahabat sebagai bagian dari komunitas perangkat lunak bebas dan bersumber terbuka (FOSS) di seluruh dunia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Version Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pilih Versi Anda</h2>
            <p className="text-gray-600 text-lg">Dua pilihan distribusi untuk kebutuhan yang berbeda</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-sm hover:shadow-xl transition-all p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <ImageWithFallback
                  src="https://www.opensuse.org/assets/img/monochrome/leap.svg" 
                  alt="openSUSE Leap" 
                  className="h-20 w-20 object-contain mr-4"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">openSUSE Leap</h3>
                  <span className="text-sm text-[#73ba25] font-semibold">Stable Release</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Distribusi stabil dengan dukungan jangka panjang, ideal untuk produksi, server, dan enterprise. Kemudahan migrasi ke tingkat korporasi.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <span className="w-1.5 h-1.5 bg-[#73ba25] rounded-full mr-2"></span>
                  Rilis stabil dan dapat diandalkan
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-1.5 h-1.5 bg-[#73ba25] rounded-full mr-2"></span>
                  Dukungan jangka panjang
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-1.5 h-1.5 bg-[#73ba25] rounded-full mr-2"></span>
                  Sempurna untuk server dan produksi
                </li>
              </ul>
              <a 
                href="https://download.opensuse.id/distribution/leap/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#73ba25] font-semibold hover:underline"
              >
                Download Leap <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-sm hover:shadow-xl transition-all p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <ImageWithFallback
                  src="https://www.opensuse.org/assets/img/monochrome/tumbleweed.svg" 
                  alt="openSUSE Tumbleweed" 
                  className="h-20 w-20 object-contain mr-4"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">openSUSE Tumbleweed</h3>
                  <span className="text-sm text-[#1c9dd9] font-semibold">Rolling Release</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Distribusi rolling release dengan software terbaru. Ditujukan untuk pengguna yang menginginkan teknologi cutting-edge dan update berkelanjutan.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <span className="w-1.5 h-1.5 bg-[#1c9dd9] rounded-full mr-2"></span>
                  Update berkelanjutan
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-1.5 h-1.5 bg-[#1c9dd9] rounded-full mr-2"></span>
                  Software terbaru
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-1.5 h-1.5 bg-[#1c9dd9] rounded-full mr-2"></span>
                  Ideal untuk desktop dan developer
                </li>
              </ul>
              <a 
                href="https://download.opensuse.id/tumbleweed/iso/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#1c9dd9] font-semibold hover:underline"
              >
                Download Tumbleweed <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">Berita & Artikel</h2>
                <p className="text-gray-600">Tutorial, kegiatan, dan update terbaru dari komunitas</p>
              </div>
              <Link 
                to="/blog" 
                className="hidden md:inline-flex items-center text-[#73ba25] font-semibold hover:underline"
              >
                Lihat Semua <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link 
                  key={post.id} 
                  to={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden"
                >
                  <div className="relative overflow-hidden aspect-video">
                    <ImageWithFallback
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-xs font-semibold text-gray-900 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      {post.date}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#73ba25] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8 md:hidden">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-[#73ba25] font-semibold hover:underline"
              >
                Lihat Semua Artikel <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1c9dd9] to-[#1889c0] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Siap Mencoba openSUSE?</h2>
            <p className="text-xl mb-8 opacity-95">
              Download sekarang dari mirror lokal Indonesia untuk kecepatan maksimal
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://download.opensuse.id/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-[#1c9dd9] font-semibold rounded-xl transition-all transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center"
              >
                <Download className="mr-2 h-5 w-5" />
                Download openSUSE
              </a>
              <Link 
                to="/repositori" 
                className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-[#1c9dd9] text-white font-semibold rounded-xl transition-all transform hover:scale-105 inline-flex items-center justify-center"
              >
                Info Repositori
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
