import React from 'react';
import { ArrowLeft, Send, Facebook } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-white via-[#f7fbf1] to-[#eef7ff] text-gray-900 dark:from-[#0b2220] dark:via-[#0f2f2b] dark:to-[#0b2220] dark:text-gray-100 px-4">
      <div className="max-w-5xl w-full grid lg:grid-cols-2 gap-10 items-center">
        {/* Text side */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Ops, halaman yang Anda tuju tidak ditemukan.
          </h1>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://t.me/openSUSE_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#73ba25] px-5 py-3 font-semibold text-[#73ba25] hover:bg-[#73ba25]/10 transition"
            >
              <Send className="h-4 w-4" />
              Telegram Group
            </a>
            <a
              href="https://www.facebook.com/groups/opensuse.indonesia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#1c9dd9] px-5 py-3 font-semibold text-[#1c9dd9] hover:bg-[#1c9dd9]/10 transition"
            >
              <Facebook className="h-4 w-4" />
              Facebook Group
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#73ba25] px-5 py-3 text-white font-semibold hover:bg-[#5ea01d] transition"
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali
            </button>
            
          </div>
        </div>

        {/* Illustration side */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#73ba25]/10 via-[#1c9dd9]/10 to-transparent blur-3xl rounded-full" />
          <div className="relative bg-white dark:bg-[#12322f] rounded-3xl shadow-xl border border-gray-100 dark:border-[#1f4540] p-10 flex flex-col items-center gap-4">
            <div className="text-7xl sm:text-8xl font-black text-[#1c1c46] dark:text-white">404</div>
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-200">
              <p className="text-lg font-semibold">Halaman tidak ditemukan</p>
            </div>
            <div className="h-24 w-full bg-gradient-to-r from-[#73ba25]/10 to-[#1c9dd9]/10 rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
