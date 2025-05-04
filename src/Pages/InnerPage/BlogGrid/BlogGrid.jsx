import { useEffect, useState } from 'react';
import { FaAngleRight, FaArrowRightLong, FaCircle } from 'react-icons/fa6';
import blogGridThumb from '/images/blog1.png';
import blogGridThumb2 from '/images/blog2.png';
import blogGridThumb3 from '/images/blog3.png';
import blogGridThumb4 from '/images/blog4.png';
import blogGridThumb5 from '/images/blog5.png';
import blogGridThumb6 from '/images/blog6.png';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import BlogGridCard from './BlogGridCard';
import { BsArrowRight } from 'react-icons/bs';

const BlogGrid = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/blogs`);

        if (!res.ok) {
          throw new Error('Failed to fetch blog');
        }
        const data = await res.json();

        const formattedBlogs = data.map((item) => ({
          id: item.id,
          blogGridThumb: item.image_path,
          blogGridDateIcon: <FaCircle />,
          blogGridDate: new Date(item.created_at).toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          }),
          blogGridPostBy: item.category || 'Uncategorized',
          blogGridUrl: `/blog_details/${item.id}`,
          blogGridTitle: item.title,
          blogGridBtn: 'Read More',
          blogGridBtnIcon: <BsArrowRight />,
        }));
        setBlogs(formattedBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'Our Blogs'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Our Blogs'}
      />
      <section className="pt-28">
        <div className="Container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {blogs.map(
              ({
                id,
                blogGridThumb,
                blogGridDateIcon,
                blogGridDate,
                blogGridPostBy,
                blogGridUrl,
                blogGridTitle,
                blogGridBtn,
                blogGridBtnIcon,
              }) => {
                return (
                  <div key={id}>
                    <BlogGridCard
                      blogGridThumb={blogGridThumb}
                      blogGridDateIcon={blogGridDateIcon}
                      blogGridDate={blogGridDate}
                      blogGridPostBy={blogGridPostBy}
                      blogGridUrl={blogGridUrl}
                      blogGridTitle={blogGridTitle}
                      blogGridBtn={blogGridBtn}
                      blogGridBtnIcon={blogGridBtnIcon}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
      {/* Pagination */}
      <div className="flex items-center gap-2 justify-center pb-[90px] pt-[80px]">
        {totalPages > 1 && (
          <>
            {/* Previous button */}
            {currentPage > 1 && (
              <button
                onClick={() => paginate(currentPage - 1)}
                className="h-[50px] w-[50px] rounded-full border border-BorderColor2-0 flex justify-center items-center text-HeadingColor-0 hover:text-white hover:bg-PrimaryColor-0 transition-all"
              >
                <FaAngleLeft />
              </button>
            )}

            {/* Numbered buttons */}
            {[...Array(totalPages)].map((_, i) => {
              const page = i + 1;
              return (
                <button
                  key={page}
                  onClick={() => paginate(page)}
                  className={`h-[50px] w-[50px] rounded-full border border-BorderColor2-0 flex justify-center items-center transition-all ${
                    currentPage === page
                      ? 'bg-PrimaryColor-0 text-white'
                      : 'bg-BodyBg-0 text-HeadingColor-0 hover:bg-PrimaryColor-0 hover:text-white'
                  }`}
                >
                  {page.toString().padStart(2, '0')}
                </button>
              );
            })}

            {/* Next button */}
            {currentPage < totalPages && (
              <button
                onClick={() => paginate(currentPage + 1)}
                className="h-[50px] w-[50px] rounded-full border border-BorderColor2-0 flex justify-center items-center text-HeadingColor-0 hover:text-white hover:bg-PrimaryColor-0 transition-all"
              >
                <FaAngleRight />
              </button>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default BlogGrid;
