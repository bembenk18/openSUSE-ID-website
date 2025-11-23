import React from 'react';
import { Calendar, MapPin, Users, Award, ExternalLink } from 'lucide-react';

const AsiaSummit2026 = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#73ba25] via-[#5ea01d] to-[#4a8b16] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
              Coming Soon
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              openSUSE.Asia Summit 2026
            </h1>
            <p className="text-xl opacity-95 mb-8">
              Informasi akan segera diumumkan
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tentang openSUSE.Asia Summit 2026</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                openSUSE.Asia Summit adalah konferensi tahunan yang mempertemukan komunitas openSUSE dan open source di kawasan Asia. Konferensi ini menjadi platform untuk berbagi pengetahuan, pengalaman, dan membangun kolaborasi antar komunitas.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Informasi lengkap mengenai openSUSE.Asia Summit 2026 termasuk tanggal, lokasi, tema, dan pendaftaran akan segera diumumkan. Pantau terus website dan media sosial kami untuk update terbaru.
              </p>
            </div>

            {/* What to Expect */}
            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Yang Dapat Anda Harapkan</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#73ba25] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Networking</h3>
                    <p className="text-gray-600 text-sm">Bertemu dengan kontributor dan pengguna openSUSE dari berbagai negara</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#1c9dd9] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Keynote & Talks</h3>
                    <p className="text-gray-600 text-sm">Presentasi dari expert dan pembicara internasional</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#73ba25] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Workshop</h3>
                    <p className="text-gray-600 text-sm">Sesi hands-on dan tutorial praktis</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#1c9dd9] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Community</h3>
                    <p className="text-gray-600 text-sm">Diskusi dan kolaborasi dengan komunitas open source</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stay Updated */}
            <div className="bg-gradient-to-br from-[#73ba25] to-[#5ea01d] text-white rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Tetap Terhubung</h2>
              <p className="text-lg opacity-95 mb-8">
                Ikuti media sosial kami untuk mendapatkan update terbaru tentang openSUSE.Asia Summit 2026
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://www.facebook.com/groups/opensuse.indonesia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#73ba25] hover:text-[#5ea01d] font-semibold rounded-xl transition-all transform hover:scale-105"
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
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#73ba25] hover:text-[#5ea01d] font-semibold rounded-xl transition-all transform hover:scale-105"
                >
                  <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Telegram Group
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AsiaSummit2026;