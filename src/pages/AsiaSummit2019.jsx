import React from 'react';
import { Calendar, MapPin, Users, Award } from 'lucide-react';

const AsiaSummit2019 = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#73ba25] via-[#5ea01d] to-[#4a8b16] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl font-semibold mb-4 opacity-90">5-6 Oktober 2019</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              openSUSE.Asia Summit 2019
            </h1>
            <p className="text-xl opacity-95">
              Bali, Indonesia
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Calendar className="h-8 w-8 text-[#73ba25] mx-auto mb-3" />
              <p className="text-sm text-gray-600 mb-1">Tanggal</p>
              <p className="font-bold text-gray-900">5-6 Oktober 2019</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <MapPin className="h-8 w-8 text-[#73ba25] mx-auto mb-3" />
              <p className="text-sm text-gray-600 mb-1">Lokasi</p>
              <p className="font-bold text-gray-900">Bali</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Users className="h-8 w-8 text-[#73ba25] mx-auto mb-3" />
              <p className="text-sm text-gray-600 mb-1">Peserta</p>
              <p className="font-bold text-gray-900">200+</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Award className="h-8 w-8 text-[#73ba25] mx-auto mb-3" />
              <p className="text-sm text-gray-600 mb-1">Pembicara</p>
              <p className="font-bold text-gray-900">30+</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* CTA Button */}
            <div className="bg-white rounded-2xl shadow-sm p-12 md:p-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Informasi Lengkap Konferensi
              </h2>
              <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
                Lihat informasi lengkap tentang openSUSE.Asia Summit 2019 termasuk jadwal, pembicara, dan materi di website resmi acara.
              </p>
              <a 
                href="https://events.opensuse.org/conferences/oSAS19" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#73ba25] to-[#5ea01d] text-white text-lg font-bold rounded-xl hover:shadow-2xl transition-all transform hover:scale-105"
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

export default AsiaSummit2019;
