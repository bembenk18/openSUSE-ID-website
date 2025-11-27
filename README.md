# openSUSE Indonesia Website

Website resmi komunitas openSUSE Indonesia - Mempromosikan penggunaan Linux dan open source di Indonesia.

![openSUSE Indonesia](https://raw.githubusercontent.com/opensuse-id/openSUSE-ID-artwork/master/openSUSE-ID-logo/openSUSE-ID-logo.png)

## 📋 Daftar Isi

- [Tentang Project](#tentang-project)
- [Teknologi](#teknologi)
- [Prerequisite](#prerequisite)
- [Instalasi](#instalasi)
- [Development](#development)
- [Build Production](#build-production)
- [Struktur Project](#struktur-project)
- [Fitur](#fitur)
- [Troubleshooting](#troubleshooting)
- [Kontribusi](#kontribusi)
- [Lisensi](#lisensi)

## 🎯 Tentang Project

Website komunitas openSUSE Indonesia yang dibangun dengan React, menampilkan informasi tentang openSUSE, blog/artikel, repositori lokal, dan informasi komunitas.

### URL Terkait
- **Website**: https://opensuse.id
- **Repository**: https://github.com/opensuse-id/openSUSE-ID-website
- **Repositori Download**: https://download.opensuse.id

## 🛠️ Teknologi

Project ini dibangun menggunakan teknologi modern:

- **React 19** - UI Framework
- **React Router DOM 7** - Routing
- **Tailwind CSS 3** - Styling
- **CRACO** - Configuration Override untuk CRA
- **Radix UI** - Component Library
- **Lucide React** - Icons
- **React Hook Form** - Form Management
- **Zod** - Schema Validation

## 📦 Prerequisite

Pastikan sistem Anda sudah terinstall:

- **Node.js** >= 18.x
- **Yarn** 1.22.x (Package Manager)
- **Git**

Cek versi:
```bash
node --version
yarn --version
git --version
```

## 🚀 Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/opensuse-id/openSUSE-ID-website.git
cd openSUSE-ID-website
```

### 2. Install Dependencies

```bash
yarn install
```

### 3. Setup Environment

Buat file `.env` atau gunakan yang sudah ada:

```bash
HOST=localhost
PORT=8080
DEBUG=true
```

> **Note**: Jika Anda memiliki environment variable `HOST` yang ter-set di shell (misalnya di `.zshrc`), gunakan perintah `HOST=localhost yarn start` untuk override.

## 💻 Development

### Menjalankan Development Server

```bash
yarn start
# atau jika ada konflik HOST
HOST=localhost yarn start
```

Server akan berjalan di `http://localhost:8080`

### Hot Reload
Development server mendukung hot reload. Perubahan pada code akan otomatis ter-refresh di browser.

### Available Scripts

```bash
# Development server
yarn start

# Build production
yarn build

# Run tests
yarn test
```

## 🏗️ Build Production

### Build untuk Deployment

```bash
yarn build
```

Output akan tersimpan di folder `build/` yang siap untuk di-deploy ke production server.

### Preview Build

Setelah build, Anda bisa preview menggunakan static server:

```bash
npx serve -s build
```

## 📁 Struktur Project

```
openSUSE-ID-website/
├── public/                 # Static files
│   ├── index.html         # HTML template
│   ├── manifest.json      # PWA manifest
│   └── _redirects         # Netlify redirects
├── src/
│   ├── components/        # React components
│   │   ├── Layout.jsx     # Main layout (Header & Footer)
│   │   ├── ImageWithFallback.jsx  # Image component dengan error handling
│   │   └── ui/            # Shadcn/UI components
│   ├── pages/             # Page components
│   │   ├── HomePage.jsx
│   │   ├── BlogPage.jsx
│   │   ├── BlogPost.jsx
│   │   ├── TentangKami.jsx
│   │   ├── TentangOpenSUSE.jsx
│   │   ├── HubungiPage.jsx
│   │   ├── Repositori.jsx
│   │   └── AsiaSummit*.jsx
│   ├── data/              # Data files
│   │   └── blogPosts.js   # Blog posts data
│   ├── hooks/             # Custom React hooks
│   │   └── use-toast.js
│   ├── lib/               # Utilities
│   │   └── utils.js
│   ├── App.js             # Main app component
│   ├── index.js           # Entry point
│   └── index.css          # Global styles
├── plugins/               # Custom webpack plugins
│   ├── health-check/      # Health check endpoint
│   └── visual-edits/      # Visual editing support
├── .env                   # Environment variables
├── craco.config.js        # CRACO configuration
├── tailwind.config.js     # Tailwind CSS config
├── postcss.config.js      # PostCSS config
├── jsconfig.json          # JavaScript config
└── package.json           # Dependencies
```

## ✨ Fitur

### 1. **Homepage**
- Hero section dengan animasi
- Informasi tentang openSUSE
- Download links untuk Leap & Tumbleweed
- Preview blog terbaru
- Statistik komunitas

### 2. **Blog**
- List artikel/berita
- Filter berdasarkan kategori
- Pagination
- Detail artikel

### 3. **Repository**
- Informasi repositori lokal Indonesia
- Mirror list
- Panduan konfigurasi

### 4. **About**
- Tentang openSUSE
- Tentang komunitas Indonesia
- Timeline kegiatan

### 5. **Contact**
- Form kontak
- Social media links
- Informasi komunitas

### 6. **Component Features**
- Image lazy loading dengan fallback
- Responsive design
- Dark mode ready (dengan next-themes)
- Smooth animations
- SEO friendly

## 🔧 Troubleshooting

### Error: `ENOTFOUND` hostname

Jika Anda mendapat error seperti `Error: getaddrinfo ENOTFOUND $HOSTNAME`, ini karena environment variable `HOST` belum di-set.

**Solusi:**
```bash
# Temporary fix
HOST=localhost yarn start

# Permanent fix - tambahkan alias di ~/.zshrc
echo 'alias yarn-start="HOST=localhost yarn start"' >> ~/.zshrc
source ~/.zshrc
```

### Port sudah digunakan

Jika port 8080 sudah digunakan, ubah di file `.env`:
```bash
PORT=3000
```

### Webpack Deprecation Warnings

Warning tentang `onAfterSetupMiddleware` dan `onBeforeSetupMiddleware` adalah normal dan tidak mempengaruhi development. Ini karena webpack-dev-server API yang deprecated.

### Image tidak muncul

Project ini sudah dilengkapi dengan `ImageWithFallback` component yang otomatis handle gambar yang gagal load. Jika gambar tidak muncul:
1. Cek koneksi internet
2. Pastikan URL gambar valid
3. Lihat console browser untuk error details

## 🤝 Kontribusi

Kontribusi sangat diterima! Berikut cara berkontribusi:

1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

### Coding Guidelines

- Gunakan functional components dengan hooks
- Follow existing code style
- Tambahkan comments untuk logic yang kompleks
- Test perubahan Anda sebelum commit
- Gunakan Tailwind CSS untuk styling
- Komponen reusable disimpan di `src/components/`
- Page components di `src/pages/`

## 📝 Lisensi

Project ini dilisensikan untuk komunitas openSUSE Indonesia.

## 👥 Tim

Dikembangkan dan dimaintain oleh [Komunitas openSUSE Indonesia](https://opensuse.id)

## 📞 Kontak

- Website: https://opensuse.id
- Email: opensuse.id@gmail.com
- Telegram: https://t.me/openSUSE_ID
- Forum: https://forums.opensuse.org

## 🙏 Acknowledgments

- openSUSE Project
- Cloudkilat untuk donasi server repositori
- Semua kontributor komunitas openSUSE Indonesia
