import { useEffect, useState } from 'react';
import { FaCircle } from 'react-icons/fa6';
import blogThumb from '/images/blog_01.png';
import blogThumb2 from '/images/blog_02.png';
import blogThumb3 from '/images/blog_03.png';
import BlogCard from './BlogCard';
import 'swiper/css';
import 'swiper/css/pagination';
import { BsArrowRight } from 'react-icons/bs';

const Blog = ({ id }) => {
  const [blogs, setBlogs] = useState([]);
  const getRelatedBlogById = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/blogs/related/${id}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch related blogs');
      }

      const data = await response.json();
      const formattedBlogs = data.map((item) => ({
        id: item.id,
        blogThumb: item.image_path,
        blogDateIcon: <FaCircle />,
        blogDate: new Date(item.created_at).toLocaleDateString('en-US', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        }),
        blogPostBy: item.category || 'Uncategorized',
        blogUrl: `/blog_details/${item.id}`,
        blogTitle: item.title,
        blogBtn: 'Read More',
        blogBtnIcon: <BsArrowRight />,
      }));
      setBlogs(formattedBlogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  useEffect(() => {
    getRelatedBlogById();
  }, [id]);

  return (
    <section className="py-28 bg-BodyBg4-0">
      <div className="Container">
        <div className="text-center">
          <h1 className="font-FiraSans font-semibold text-HeadingColor-0 text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[38px] lg:leading-[48px] xl:text-[42px] xl:leading-[52px]">
            Related Blog Posts
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-[56px]">
          {blogs.map(
            ({
              id,
              blogThumb,
              blogDateIcon,
              blogDate,
              blogPostBy,
              blogUrl,
              blogTitle,
              blogBtn,
              blogBtnIcon,
            }) => {
              return (
                <div key={id}>
                  <BlogCard
                    blogThumb={blogThumb}
                    blogDateIcon={blogDateIcon}
                    blogDate={blogDate}
                    blogPostBy={blogPostBy}
                    blogUrl={blogUrl}
                    blogTitle={blogTitle}
                    blogBtn={blogBtn}
                    blogBtnIcon={blogBtnIcon}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
