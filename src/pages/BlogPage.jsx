import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Calendar, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { allBlogPosts } from '../data/blogPosts';
import ImageWithFallback from '../components/ImageWithFallback';

const BlogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category');
  const page = parseInt(searchParams.get('page')) || 1;
  const POSTS_PER_PAGE = 10;

  // Filter by category
  const filteredPosts = category 
    ? allBlogPosts.filter(post => post.category === category)
    : allBlogPosts;

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const categoryName = category === 'kegiatan' ? 'Kegiatan' : 
                       category === 'wajah-opensuse-id' ? 'Wajah openSUSE.ID' : 
                       category === 'komunitas' ? 'Komunitas' :
                       category === 'panduan' ? 'Panduan' :
                       category === 'uncategorized' ? 'Lainnya' :
                       'Semua Artikel';

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page, category]);

  const handlePageChange = (newPage) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', newPage.toString());
    setSearchParams(params);
  };

  return (
    <div>
      {/* Modern Hero Section */}
      <section className="bg-gradient-to-br from-[#73ba25] via-[#5ea01d] to-[#4a8b16] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Artikel</h1>
            <p className="text-lg md:text-xl opacity-95">
              Tutorial, kegiatan komunitas, dan berita seputar openSUSE
            </p>
          </div>
        </div>
      </section>

      {/* Modern Category Filter */}
      <section className="bg-white dark:bg-[#12322f] sticky top-16 z-40 shadow-sm dark:shadow-none dark:border-b dark:border-[#1f4540]">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 py-4 overflow-x-auto scrollbar-hide">
            <Link 
              to="/blog" 
              className={`px-5 py-2 rounded-xl font-semibold transition-all whitespace-nowrap ${
                !category ? 'bg-[#73ba25] text-white shadow-lg' : 'bg-gray-50 text-gray-700 hover:bg-gray-100 dark:bg-[#0f3834] dark:text-gray-200 dark:hover:bg-[#12322f]'
              }`}
            >
              Semua
            </Link>
            <Link 
              to="/blog?category=kegiatan" 
              className={`px-5 py-2 rounded-xl font-semibold transition-all whitespace-nowrap ${
                category === 'kegiatan' ? 'bg-[#73ba25] text-white shadow-lg' : 'bg-gray-50 text-gray-700 hover:bg-gray-100 dark:bg-[#0f3834] dark:text-gray-200 dark:hover:bg-[#12322f]'
              }`}
            >
              Kegiatan
            </Link>
            <Link 
              to="/blog?category=komunitas" 
              className={`px-5 py-2 rounded-xl font-semibold transition-all whitespace-nowrap ${
                category === 'komunitas' ? 'bg-[#73ba25] text-white shadow-lg' : 'bg-gray-50 text-gray-700 hover:bg-gray-100 dark:bg-[#0f3834] dark:text-gray-200 dark:hover:bg-[#12322f]'
              }`}
            >
              Komunitas
            </Link>
            <Link 
              to="/blog?category=panduan" 
              className={`px-5 py-2 rounded-xl font-semibold transition-all whitespace-nowrap ${
                category === 'panduan' ? 'bg-[#73ba25] text-white shadow-lg' : 'bg-gray-50 text-gray-700 hover:bg-gray-100 dark:bg-[#0f3834] dark:text-gray-200 dark:hover:bg-[#12322f]'
              }`}
            >
              Panduan
            </Link>
            <Link 
              to="/blog?category=wajah-opensuse-id" 
              className={`px-5 py-2 rounded-xl font-semibold transition-all whitespace-nowrap ${
                category === 'wajah-opensuse-id' ? 'bg-[#73ba25] text-white shadow-lg' : 'bg-gray-50 text-gray-700 hover:bg-gray-100 dark:bg-[#0f3834] dark:text-gray-200 dark:hover:bg-[#12322f]'
              }`}
            >
              Wajah openSUSE
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-gray-50 dark:bg-[#0b2220]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{categoryName}</h2>
              <p className="text-gray-600 dark:text-gray-300 mt-1">{filteredPosts.length} artikel ditemukan</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentPosts.map((post) => (
                <Link 
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden dark:bg-[#12322f] dark:border dark:border-[#1f4540]"
                >
                  <div className="relative overflow-hidden aspect-video">
                    <ImageWithFallback
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-sm text-gray-900">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-300 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      {post.date}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-[#73ba25] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-20 bg-white rounded-2xl">
                <div className="text-gray-400 mb-4">
                  <Tag className="h-16 w-16 mx-auto" />
                </div>
                <p className="text-gray-500 text-lg font-medium">Belum ada artikel dalam kategori ini</p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-2">
                <button
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1}
                  className={`p-2 rounded-lg transition-all ${
                    page === 1 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                      : 'bg-white text-gray-700 hover:bg-[#73ba25] hover:text-white shadow-sm'
                  }`}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {/* Page Numbers */}
                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1;
                  // Show first page, last page, current page, and pages around current
                  if (
                    pageNumber === 1 ||
                    pageNumber === totalPages ||
                    (pageNumber >= page - 1 && pageNumber <= page + 1)
                  ) {
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`min-w-[40px] h-10 rounded-lg font-medium transition-all ${
                          page === pageNumber
                            ? 'bg-[#73ba25] text-white shadow-lg'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  } else if (pageNumber === page - 2 || pageNumber === page + 2) {
                    return <span key={pageNumber} className="text-gray-400">...</span>;
                  }
                  return null;
                })}

                <button
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page === totalPages}
                  className={`p-2 rounded-lg transition-all ${
                    page === totalPages 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                      : 'bg-white text-gray-700 hover:bg-[#73ba25] hover:text-white shadow-sm'
                  }`}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
