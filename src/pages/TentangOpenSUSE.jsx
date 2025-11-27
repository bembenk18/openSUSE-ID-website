import React from 'react';
import { ExternalLink } from 'lucide-react';
import ImageWithFallback from '../components/ImageWithFallback';

const TentangOpenSUSE = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#73ba25] to-[#5ea01d] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Tentang openSUSE</h1>
            <p className="text-xl opacity-90">Distribusi Linux yang stabil, mudah digunakan, dan lengkap</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <ImageWithFallback
                src="https://counter.opensuse.org/medium" 
                alt="openSUSE Counter" 
                className="h-20"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed space-y-6 text-lg">
                <p>
                  Proyek openSUSE adalah kegiatan berskala dunia untuk mempromosikan penggunaan Linux di mana saja. 
                  openSUSE membuat salah satu distribusi Linux terbaik, berkerja bersama-sama secara terbuka, transparan 
                  dan dengan cara bersahabat sebagai bagian dari komunitas perangkat lunak bebas dan bersumber terbuka (FOSS).
                </p>

                <p>
                  Distribusi openSUSE adalah distribusi beragam fungsi yang stabil, mudah digunakan dan lengkap. Ditujukan 
                  untuk pengguna dan pengembang yang bekerja pada desktop atau server. Sangat bagus juga untuk pemula, 
                  pengguna yang berpengalaman dan geek, singkatnya, distribusi yang sempurna untuk semua orang!
                </p>

                <p>
                  Rilis terbaru, openSUSE Leap 16.0, menampilkan fitur versi baru dan peningkatan besar-besaran untuk semua 
                  aplikasi server dan desktop dengan lebih dari 1.000 aplikasi sumber terbuka. openSUSE meliputi 2 versi, 
                  Leap sebagai distribusi stabil dan Tumbleweed yang merupakan versi rilis bergulir (rolling release).
                </p>
              </div>

              <div className="mt-16 bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Fitur Utama openSUSE</h3>
                <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-[#73ba25]">YaST - Yet another Setup Tool</h4>
                    <p>Tool konfigurasi sistem yang powerful dan mudah digunakan untuk mengatur seluruh aspek sistem Anda.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-[#73ba25]">openQA</h4>
                    <p>Sistem testing otomatis yang memastikan kualitas setiap rilis openSUSE.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-[#73ba25]">OBS - Open Build Service</h4>
                    <p>Platform untuk membangun dan mendistribusikan paket software untuk berbagai distribusi Linux.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-[#73ba25]">Snapper</h4>
                    <p>Tool untuk membuat dan mengelola snapshot sistem file, memudahkan recovery sistem.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <a 
                  href="https://www.opensuse.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-[#73ba25] hover:bg-[#5ea01d] text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  Kunjungi openSUSE.org <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TentangOpenSUSE;
