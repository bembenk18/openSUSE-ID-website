import React from 'react';
import { Calendar, MapPin, Users, Award } from 'lucide-react';

const AsiaSummit2016 = () => {
  return (
    <div className="bg-white dark:bg-[#0b2220] text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1c9dd9] via-[#1889c0] to-[#1675a7] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl font-semibold mb-4 opacity-90">24-25 September 2016</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              openSUSE.Asia Summit 2016
            </h1>
            <p className="text-xl opacity-95">
              Yogyakarta, Indonesia
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-white dark:bg-[#0b2220]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-xl dark:bg-[#12322f] dark:border dark:border-[#1f4540]">
              <Calendar className="h-8 w-8 text-[#1c9dd9] mx-auto mb-3" />
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Tanggal</p>
              <p className="font-bold text-gray-900 dark:text-gray-100">24-25 Sept 2016</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl dark:bg-[#12322f] dark:border dark:border-[#1f4540]">
              <MapPin className="h-8 w-8 text-[#1c9dd9] mx-auto mb-3" />
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Lokasi</p>
              <p className="font-bold text-gray-900 dark:text-gray-100">Yogyakarta</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl dark:bg-[#12322f] dark:border dark:border-[#1f4540]">
              <Users className="h-8 w-8 text-[#1c9dd9] mx-auto mb-3" />
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Peserta</p>
              <p className="font-bold text-gray-900 dark:text-gray-100">150+</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl dark:bg-[#12322f] dark:border dark:border-[#1f4540]">
              <Award className="h-8 w-8 text-[#1c9dd9] mx-auto mb-3" />
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Pembicara</p>
              <p className="font-bold text-gray-900 dark:text-gray-100">25+</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50 dark:bg-[#0b2220]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm p-12 md:p-16 text-center dark:bg-[#12322f] dark:border dark:border-[#1f4540]">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Informasi Lengkap Konferensi
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-200 mb-10 max-w-2xl mx-auto">
                Lihat informasi lengkap tentang openSUSE.Asia Summit 2016 termasuk jadwal, pembicara, dan materi di website resmi acara.
              </p>
              <a 
                href="https://events.opensuse.org/conferences/summitasia16" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#1c9dd9] to-[#1675a7] text-white text-lg font-bold rounded-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
                Kunjungi Website Resmi Acara
                <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AsiaSummit2016;
