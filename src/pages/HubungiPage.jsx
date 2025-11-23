import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const HubungiPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#73ba25] to-[#5ea01d] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Hubungi Kami</h1>
            <p className="text-xl opacity-90">
              Kami senang mendengar dari Anda. Kirimkan pesan atau pertanyaan Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Informasi Kontak</h2>
              <p className="text-gray-700 mb-8 text-center">
                Jangan ragu untuk menghubungi kami melalui email atau bergabung dengan komunitas kami di media sosial.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="flex items-start bg-white rounded-xl shadow-md p-6">
                  <div className="w-12 h-12 bg-[#73ba25] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:humas@opensuse.id" className="text-[#1c9dd9] hover:text-[#1889c0] transition-colors">
                      humas@opensuse.id
                    </a>
                  </div>
                </div>

                <div className="flex items-start bg-white rounded-xl shadow-md p-6">
                  <div className="w-12 h-12 bg-[#1c9dd9] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Lokasi</h3>
                    <p className="text-gray-700">Indonesia</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Bergabung dengan Komunitas</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <a 
                    href="https://www.facebook.com/groups/opensuse.indonesia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#73ba25] hover:bg-[#5ea01d] text-white font-semibold rounded-lg transition-all transform hover:scale-105"
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
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#1c9dd9] hover:bg-[#1889c0] text-white font-semibold rounded-lg transition-all transform hover:scale-105"
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
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Pertanyaan Umum?</h2>
            <p className="text-gray-700 text-lg mb-8">
              Jika Anda memiliki pertanyaan tentang openSUSE atau ingin berkontribusi pada komunitas, 
              jangan ragu untuk menghubungi kami. Kami selalu senang menyambut anggota baru!
            </p>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-gray-600">
                Untuk dukungan teknis dan diskusi, silakan bergabung dengan grup Facebook atau Telegram kami 
                di mana komunitas aktif siap membantu menjawab pertanyaan Anda.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HubungiPage;
