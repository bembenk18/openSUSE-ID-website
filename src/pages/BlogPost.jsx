import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Tag, ArrowLeft, Share2, Check } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const url = window.location.href;
    
    if (navigator.share) {
      // Use native share if available (mobile devices)
      navigator.share({
        title: post.title,
        text: post.excerpt || post.title,
        url: url,
      }).catch((error) => {
        // If share cancelled, copy to clipboard instead
        copyToClipboard(url);
      });
    } else {
      // Fallback to copying link
      copyToClipboard(url);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const blogPosts = {
    'repositori-baru-download-opensuse-id': {
      title: 'Repositori Baru download.opensuse.id',
      content: `
        <p>Salam,</p>
        
        <p>Komunitas openSUSE Indonesia memiliki 2 repositori lokal yg dikelola mandiri. <strong>repo.opensuse.id</strong> dan <strong>twrepo.opensuse.id</strong>. VM repo oi merupakan donasi dari sebuah perusahaan IT di Jakarta telah beroperasi sejak 2018 melayani pengguna openSUSE di Indonesia dan Asia Tenggara. VM twrepo oi adalah donasi dari sebuah provider video-on-demand di Jakarta sejak 2019.</p>
        
        <p>Sayangnya sejak 2024 twrepo mengalami masalah dan berhenti beroperasi, sejak Q3 2024 tidak ada lagi repo lokal tumbleweed. Bandwidth yg melayani repo oi tidak cukup untuk melakukan sinkronisasi repo factory/tumbleweed.</p>
        
        <p>Alhamdulillah orang-orang baik di <strong>Cloudkilat</strong> berbaik hati mendonasikan vm dan bandwidth utk repositori openSUSE di Indonesia. Terima kasih Cloudkilat!</p>
        
        <p>Komunitas menyediakan ssd 5TB utk vm ini, semoga cukup utk melayani repo leap, update, slowroll, dan tumbleweed. <strong>download.opensuse.id</strong> telah kami test dan berfungsi dengan baik. Repo ini melakukan sinkronisasi ke stage dan stage main repo openSUSE.</p>
        
        <p>Setelah berdiskusi dengan pengurus Komunitas openSUSE Indonesia, kami sepakat untuk mempensiunkan <strong>repo.opensuse.id</strong> mulai <strong>1 Januari 2026</strong>. Selanjutnya repositori lokal komunitas openSUSE Indonesia akan dilayani melalui <a href="https://download.opensuse.id" target="_blank" rel="noopener noreferrer">https://download.opensuse.id</a></p>
        
        <p><strong>Have fun!</strong></p>
      `,
      image: 'https://opensuse.id/wp-content/uploads/2025/10/openSUSE-iDxCloudKilat-d.o.i-IG.png',
      category: 'Komunitas',
      date: '18 Oktober 2025',
      author: 'Tim openSUSE Indonesia'
    },
    'opensuse-id-meet-up-desember-2022': {
      title: 'openSUSE-ID Meet Up Desember 2022',
      content: `
        <p>Halo teman-teman!</p>
        <p>Untuk menutup tahun ini openSUSE Indonesia ingin mengadakan meetup terakhir tahun 2022. Skuy hadir dan mari kita berbincang tentang perkembangan openSUSE dan komunitas kita.</p>
        
        <h3>Detail Acara</h3>
        <ul>
          <li><strong>Tanggal:</strong> Desember 2022</li>
          <li><strong>Format:</strong> Hybrid (Online & Offline)</li>
          <li><strong>Topik:</strong> Review tahun 2022 dan rencana 2023</li>
        </ul>

        <h3>Agenda</h3>
        <p>Beberapa hal yang akan kita bahas:</p>
        <ul>
          <li>Pencapaian komunitas di tahun 2022</li>
          <li>Update terbaru openSUSE Leap dan Tumbleweed</li>
          <li>Sharing session dari anggota komunitas</li>
          <li>Rencana kegiatan tahun 2023</li>
          <li>Networking dan diskusi informal</li>
        </ul>

        <p>Acara ini terbuka untuk semua orang, baik yang sudah menggunakan openSUSE maupun yang tertarik untuk mencoba. Mari kita tutup tahun ini dengan penuh semangat!</p>
      `,
      image: 'https://opensuse.id/wp-content/uploads/2022/12/openSUSEDesember.png',
      category: 'Kegiatan',
      date: '12 Desember 2022',
      author: 'Tim openSUSE Indonesia'
    },
    'opensuse-id-di-indonesia-linux-conference-2022': {
      title: 'openSUSE-ID di Indonesia Linux Conference 2022',
      content: `
        <p>Apa itu ILC? Yang jelas bukan Indonesia Lawyers Club.</p>
        <p>ILC adalah Indonesia Linux Conference yang merupakan konferensi tahunan komunitas Linux Indonesia. Tahun ini, komunitas openSUSE Indonesia turut berpartisipasi dalam acara ini dengan berbagai aktivitas menarik.</p>
        
        <h3>Partisipasi openSUSE Indonesia</h3>
        <p>Komunitas kami hadir dengan:</p>
        <ul>
          <li>Booth openSUSE Indonesia</li>
          <li>Presentasi tentang fitur-fitur openSUSE</li>
          <li>Workshop instalasi dan konfigurasi</li>
          <li>Pembagian merchandise openSUSE</li>
          <li>Networking dengan komunitas Linux lainnya</li>
        </ul>

        <h3>Highlight Acara</h3>
        <p>Beberapa momen menarik dari ILC 2022:</p>
        <ul>
          <li>Antusiasme pengunjung yang tinggi terhadap openSUSE</li>
          <li>Banyak pertanyaan seputar migrasi ke openSUSE</li>
          <li>Kolaborasi dengan komunitas Linux lainnya</li>
          <li>Live demo YaST dan fitur openSUSE</li>
        </ul>

        <p>Terima kasih kepada semua yang telah hadir dan mendukung kegiatan kami di ILC 2022. Sampai jumpa di acara berikutnya!</p>
      `,
      image: 'https://opensuse.id/wp-content/uploads/2022/11/Group-1-1232x567.png',
      category: 'Kegiatan',
      date: '12 November 2022',
      author: 'Tim openSUSE Indonesia'
    },
    'opensuse-asia-summit-2019-bali': {
      title: 'openSUSE.Asia Summit 2019',
      content: `
        <p>Komunitas openSUSE Indonesia dengan bangga mengumumkan bahwa kami telah berhasil menyelenggarakan openSUSE.Asia Summit 2019 di Bali, Indonesia.</p>
        
        <h3>Tentang Acara</h3>
        <p>openSUSE.Asia Summit adalah konferensi tahunan komunitas openSUSE di kawasan Asia. Tahun 2019, Indonesia mendapat kehormatan untuk menjadi tuan rumah acara bergengsi ini.</p>
        
        <ul>
          <li><strong>Tanggal:</strong> 5-6 Oktober 2019</li>
          <li><strong>Lokasi:</strong> Bali, Indonesia</li>
          <li><strong>Peserta:</strong> 200+ dari berbagai negara</li>
          <li><strong>Pembicara:</strong> 30+ speaker internasional</li>
        </ul>

        <h3>Tema dan Topik</h3>
        <p>Konferensi ini mengangkat berbagai topik menarik:</p>
        <ul>
          <li>Cloud Computing dan Containerization</li>
          <li>DevOps dan Automation</li>
          <li>Desktop Linux dan User Experience</li>
          <li>Open Source Community Building</li>
          <li>Security dan Privacy</li>
        </ul>

        <h3>Pencapaian</h3>
        <p>Acara ini merupakan pencapaian besar bagi komunitas openSUSE Indonesia:</p>
        <ul>
          <li>Sukses mengorganisir konferensi internasional</li>
          <li>Meningkatkan visibilitas komunitas Indonesia</li>
          <li>Membangun networking dengan komunitas Asia</li>
          <li>Mendapatkan apresiasi dari openSUSE Board</li>
        </ul>

        <p>Terima kasih kepada semua sponsor, volunteer, dan peserta yang telah membuat acara ini sukses besar!</p>
      `,
      image: 'https://opensuse.id/wp-content/uploads/2018/12/cropped-oSAS2018-1.jpg',
      category: 'Kegiatan',
      date: '6 Oktober 2019',
      author: 'Tim openSUSE Indonesia'
    },
    'wajah-opensuse-id-mohammad-edwin-zakaria': {
      title: 'Wajah openSUSE-id: Mohammad Edwin Zakaria',
      content: `
        <p><strong>Nickname:</strong> Mohammad Edwin Zakaria<br/>
        <strong>Pekerjaan:</strong> Pekerja IT<br/>
        <strong>Tempat Tinggal:</strong> Jakarta<br/>
        <strong>Hobi:</strong> Jalan-jalan, baca buku, main gitar kalau ada waktu<br/>
        <strong>Motto:</strong> Gak ada yang spesifik. Hidup seperti air yang mengalir dan berusaha tidak punya banyak keinginan</p>

        <h3>Perkenalkan diri Anda</h3>
        <p>Saya Edwin, saat ini bekerja di salah satu perusahaan IT di Jakarta. Saya menggunakan openSUSE untuk pekerjaan sehari-hari dan sangat menikmati stabilitas serta kemudahan yang ditawarkan oleh distribusi ini.</p>

        <h3>Bagaimana Anda mengenal openSUSE?</h3>
        <p>Saya pertama kali mengenal openSUSE sekitar tahun 2010. Waktu itu saya sedang mencari distribusi Linux yang stabil dan mudah digunakan untuk kebutuhan development. Setelah mencoba beberapa distribusi, saya jatuh cinta pada openSUSE karena YaST-nya yang sangat membantu.</p>

        <h3>Apa yang membuat Anda tetap menggunakan openSUSE?</h3>
        <p>Stabilitasnya luar biasa, terutama untuk kebutuhan profesional. Tool-tool seperti YaST membuat konfigurasi sistem menjadi sangat mudah. Komunitas openSUSE juga sangat supportive dan helpful.</p>

        <h3>Kontribusi Anda di komunitas openSUSE Indonesia</h3>
        <p>Saya aktif di grup Facebook dan Telegram openSUSE Indonesia, sering membantu menjawab pertanyaan dari pengguna baru. Sesekali juga ikut dalam meetup komunitas.</p>
      `,
      image: 'https://opensuse.id/wp-content/uploads/2018/03/oS-AS2015-small-Edwin-Zakaria-250x250.jpg',
      category: 'Wajah openSUSE.ID',
      date: '13 Maret 2018',
      author: 'Tim openSUSE Indonesia'
    },
    'wajah-opensuse-id-adnan-adhy-kurniawan': {
      title: 'Wajah openSUSE-id: Adnan Adhy Kurniawan',
      content: `
        <p><strong>Nickname:</strong> adnan<br/>
        <strong>Pekerjaan:</strong> PNS di Kementerian Hukum dan HAM RI<br/>
        <strong>Tempat Tinggal:</strong> Cilacap<br/>
        <strong>Hobi:</strong> Apa saja yang penting aneh dan ndak umum<br/>
        <strong>Motto:</strong> Hidup sudah susah, jangan dibikin susah</p>

        <h3>Perkenalkan diri anda</h3>
        <p>Hi, nama saya Adnan, saya adalah seorang PNS di Kementerian Hukum dan HAM RI dan salah satu penggemar distro openSUSE.</p>

        <h3>Ceritakan latar belakang anda di openSUSE</h3>
        <p>Saya mulai menggunakan openSUSE sejak versi 11.3. Awalnya hanya iseng mencoba, tapi lama-lama jadi betah karena kemudahan dan kestabilannya.</p>

        <h3>Mengapa memilih openSUSE?</h3>
        <p>Karena mudah digunakan, stabil, dan memiliki komunitas yang solid. YaST sangat membantu untuk konfigurasi sistem tanpa harus menghafal banyak command line.</p>

        <h3>Apa yang menarik dari komunitas openSUSE Indonesia?</h3>
        <p>Komunitasnya ramah dan saling membantu. Tidak ada yang merasa paling pintar atau merendahkan pengguna baru. Semua orang diterima dengan baik.</p>

        <h3>Pesan untuk calon pengguna openSUSE</h3>
        <p>Jangan ragu untuk mencoba openSUSE. Ini adalah distribusi Linux yang sangat baik untuk pemula maupun advanced user. Dan jangan lupa bergabung dengan komunitas openSUSE Indonesia!</p>
      `,
      image: 'https://opensuse.id/wp-content/uploads/2016/03/Adnan-AK-250x250.jpg',
      category: 'Wajah openSUSE.ID',
      date: '22 Maret 2016',
      author: 'Tim openSUSE Indonesia'
    }
  };

  const post = blogPosts[slug] || blogPosts['repositori-baru-download-opensuse-id'];

  return (
    <div className="bg-white dark:bg-[#0b2220] text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${post.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/60"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-white hover:text-[#73ba25] transition-colors mb-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Kembali ke Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center justify-center gap-6 text-sm">
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {post.date}
            </span>
            <span className="flex items-center">
              <Tag className="h-4 w-4 mr-2" />
              {post.category}
            </span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 dark:prose-invert">
              <div 
                className="text-gray-700 dark:text-gray-200 leading-relaxed blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-300">Ditulis oleh</p>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">{post.author}</p>
                </div>
                <button 
                  onClick={handleShare}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors dark:bg-[#12322f] dark:hover:bg-[#0f3834]"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="text-green-600">Link Disalin!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="h-4 w-4" />
                      Bagikan
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
