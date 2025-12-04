import React from 'react';
import { Users, Globe, Heart, Code } from 'lucide-react';

const TentangKami = () => {
  return (
    <div className="bg-white dark:bg-[#0b2220] text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1c9dd9] to-[#1889c0] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Tentang Kami</h1>
            <p className="text-xl opacity-90">Komunitas openSUSE Indonesia</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-gray-700 dark:text-gray-200 leading-relaxed space-y-6 text-lg mb-16">
              <p>
                Komunitas openSUSE Indonesia adalah komunitas pengguna dan pengembang openSUSE di Indonesia. 
                Kami adalah bagian dari komunitas global openSUSE yang tersebar di seluruh dunia.
              </p>
              <p>
                Komunitas kami terdiri dari berbagai latar belakang, mulai dari pemula yang baru mengenal Linux 
                hingga professional IT yang berpengalaman. Kami berkumpul untuk berbagi pengetahuan, pengalaman, 
                dan membantu satu sama lain dalam menggunakan openSUSE.
              </p>
              <p>
                Melalui berbagai kegiatan seperti meetup, workshop, dan konferensi, kami berusaha untuk 
                mempromosikan penggunaan Linux dan open source software di Indonesia.
              </p>
            </div>

            {/* Values Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow dark:bg-[#12322f] dark:border dark:border-[#1f4540]">
                <div className="w-16 h-16 bg-[#73ba25] rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">Komunitas Terbuka</h3>
                <p className="text-gray-700 dark:text-gray-200">
                  Kami menyambut siapa saja yang tertarik dengan openSUSE dan Linux. Baik pemula maupun expert, 
                  semua orang dipersilakan untuk bergabung dan berkontribusi.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow dark:bg-[#12322f] dark:border dark:border-[#1f4540]">
                <div className="w-16 h-16 bg-[#1c9dd9] rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">Bagian dari Komunitas Global</h3>
                <p className="text-gray-700 dark:text-gray-200">
                  Sebagai bagian dari komunitas openSUSE global, kami berkontribusi pada proyek-proyek internasional 
                  dan berkolaborasi dengan komunitas dari berbagai negara.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow dark:bg-[#12322f] dark:border dark:border-[#1f4540]">
                <div className="w-16 h-16 bg-[#73ba25] rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">Berbagi Pengetahuan</h3>
                <p className="text-gray-700 dark:text-gray-200">
                  Kami percaya bahwa pengetahuan harus dibagikan. Melalui blog, tutorial, dan meetup, kami berbagi 
                  pengalaman dan membantu anggota komunitas untuk belajar dan berkembang.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow dark:bg-[#12322f] dark:border dark:border-[#1f4540]">
                <div className="w-16 h-16 bg-[#1c9dd9] rounded-full flex items-center justify-center mb-4">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">Open Source Spirit</h3>
                <p className="text-gray-700 dark:text-gray-200">
                  Kami mengusung semangat open source dalam segala aktivitas kami. Transparansi, kolaborasi, 
                  dan kebebasan adalah nilai-nilai yang kami junjung tinggi.
                </p>
              </div>
            </div>

            {/* Activities Section */}
            <div className="bg-gray-50 rounded-xl p-8 mb-16 dark:bg-[#12322f] dark:border dark:border-[#1f4540]">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Kegiatan Kami</h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-200">
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p><strong>Meetup Rutin:</strong> Pertemuan komunitas untuk berbagi pengetahuan dan pengalaman</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p><strong>Workshop & Tutorial:</strong> Pelatihan dan workshop untuk belajar menggunakan openSUSE</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p><strong>Konferensi:</strong> Menyelenggarakan dan berpartisipasi dalam konferensi Linux dan open source</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p><strong>Repositori Lokal:</strong> Menyediakan mirror lokal untuk mempercepat download openSUSE</p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#73ba25] font-bold text-xl mr-3">•</span>
                  <p><strong>Dukungan Komunitas:</strong> Membantu anggota komunitas melalui forum, grup, dan media sosial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TentangKami;
