import React, { useEffect, useState } from 'react';
import BreadCrumb2 from '../../../Shared/BreadCrumb/BreadCrumb2';
import {
  FaCheck,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from 'react-icons/fa6';
import { Link, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import Icon from '/images/pagination_icon1.png';
import Icon2 from '/images/pagination_icon2.png';
import image from '/images/image.jpg';
import { BsArrowRight } from 'react-icons/bs';
import Blog from './Blog/Blog';

const BlogDetails = () => {
  const { id } = useParams();
  const [blogContent, setBlogContent] = useState('');
  const [blogComments, setBlogComments] = useState(null);
  const [nav, setNav] = useState({ previous: null, next: null });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getBlogById = async (id) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/blogs/${id}`);

    if (!response.ok) {
      throw new Error('Failed to fetch blog');
    }

    const data = await response.json();
    fetchNav();
    return data;
  };

  const fetchNav = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/blogs/nav/${id}`);
    const data = await res.json();
    setNav(data);
  };

  const getCommentsByBlog = async (id) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/comments/${id}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch comments');
    }

    const data = await response.json();
    return data;
  };

  const addComment = async (name, email, comment, id) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/comments/${id}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, comment }),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to submit comment');
    }

    return response.json();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await addComment(name, email, comment, id);
      setName('');
      setEmail('');
      setComment('');
      getCommentsByBlog(id)
        .then((data) => {
          setBlogComments(data);
        })
        .catch((error) => {
          console.error('Error fetching comments:', error);
        });
    } catch (err) {
      setError('Failed to submit comment.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getBlogById(id)
        .then((data) => {
          setBlogContent(data);
          getCommentsByBlog(id)
            .then((data) => {
              setBlogComments(data);
            })
            .catch((error) => {
              console.error('Error fetching comments:', error);
            });
        })
        .catch((error) => {
          console.error('Error fetching blog:', error);
        });
    }
  }, [id]);

  const sanitizedContent = DOMPurify.sanitize(blogContent.content, {
    ADD_TAGS: ['iframe'], // Izinkan tag iframe
    ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'src'], // Izinkan atribut iframe
  });

  return (
    <>
      <BreadCrumb2
        breadCrumbTitle={blogContent.title}
        breadCrumbImage={blogContent.image_path}
        breadCrumbCategory={blogContent.category}
        breadCrumbDate={blogContent.created_at}
      />
      <section className="pb-[120px]">
        <div className="Container">
          <div className="pt-6 sm:pt-10 lg:pt-[66px] px-4 md:px-10 2xl:px-[110px] relative z-10 sm:-mt-[60px] bg-white rounded-3xl md:mx-10 lg:mx-0 xl:mx-14 2xl:mx-0">
            <div className="blog-content font-FiraSans text-TextColor2-0 mt-3">
              <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
            </div>
            <div className="pt-5">
              <div className="flex items-center gap-7 justify-between flex-wrap mt-14 pt-6">
                <div>
                  <ul className="flex items-center gap-4">
                    <li>
                      <Link
                        to={
                          'https://www.instagram.com/mpupeoplesolution?igsh=MWU3OHZqaXU0bzc0Ng=='
                        }
                        className="text-sm size-10 bg-BodyBg4-0 rounded-full flex items-center justify-center text-PrimaryColor-0 transition-all duration-500 hover:text-white relative z-10 before:absolute before:left-0 before:top-0 before:size-full before:bg-PrimaryColor-0 before:scale-0 before:transition-all before:rounded-full before:-z-10 before:duration-500 hover:before:scale-100"
                      >
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={'https://www.youtube.com/@MitraPrabhutvaUtama'}
                        className="text-sm size-10 bg-BodyBg4-0 rounded-full flex items-center justify-center text-PrimaryColor-0 transition-all duration-500 hover:text-white relative z-10 before:absolute before:left-0 before:top-0 before:size-full before:bg-PrimaryColor-0 before:scale-0 before:transition-all before:rounded-full before:-z-10 before:duration-500 hover:before:scale-100"
                      >
                        <FaYoutube />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center gap-7 justify-between flex-wrap border-y border-BorderColor-0 py-7 mt-12 mb-20">
                <div>
                  {nav.previous && (
                    <Link to={`/blog_details/${nav.previous.id}`}>
                      <button className="flex items-center gap-2 font-FiraSans font-medium text-lg text-HeadingColor-0">
                        <img src={Icon} alt="Icon" draggable="false" /> Previous
                        Posts
                      </button>
                    </Link>
                  )}
                </div>
                <div>
                  {nav.next && (
                    <Link to={`/blog_details/${nav.next.id}`}>
                      <button className="flex items-center gap-2 font-FiraSans font-medium text-lg text-HeadingColor-0">
                        Next Posts{' '}
                        <img src={Icon2} alt="Icon" draggable="false" />
                      </button>
                    </Link>
                  )}
                </div>
              </div>
              <div id="comment" className="pt-4">
                <h4 className="font-FiraSans text-HeadingColor-0 text-[28px] font-medium">
                  Comments ({blogComments ? blogComments.length : 0})
                </h4>

                {blogComments && blogComments.length > 0 ? (
                  blogComments.map((comment) => (
                    <div
                      key={comment.id}
                      className="flex flex-col sm:flex-row gap-5 relative z-10 bg-white shadow-shades px-4 md:px-10 pt-6 md:pt-12 pb-5 md:pb-11 rounded-2xl mt-7"
                    >
                      <div className="flex-1">
                        <h6 className="font-FiraSans text-xl font-medium text-HeadingColor-0">
                          {comment.name}
                        </h6>
                        <p className="font-FiraSans text-[15px] text-TextColor2-0 mt-1">
                          {new Date(comment.created_at).toLocaleDateString(
                            'en-US',
                            {
                              day: '2-digit',
                              month: 'long',
                              year: 'numeric',
                            }
                          )}
                        </p>
                        <p className="font-FiraSans text-TextColor2-0 2xl:pr-7 mt-6">
                          {comment.comment}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="mt-4 text-TextColor2-0">No comments yet.</p>
                )}
              </div>

              <div>
                <h4 className="font-FiraSans text-HeadingColor-0 text-[28px] font-medium mt-20 pt-2 mb-2">
                  Post A Comment
                </h4>
                <p className="font-FiraSans text-TextColor2-0">{`Your E-Mail address will not be published.So, don't worry.`}</p>
                <form onSubmit={handleSubmit} className="space-y-[30px] mt-8">
                  <textarea
                    name="meassage"
                    id="meassage"
                    placeholder="Write Meassage..."
                    className="w-full h-[194px] rounded-md bg-BodyBg4-0 text-HeadingColor-0 font-FiraSans placeholder:text-TextColor2-0 outline-none border border-transparent focus:border-PrimaryColor-0 transition-all duration-500 py-3 px-7 resize-none -mb-[6px]"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                  <div className="flex flex-col sm:flex-row gap-[30px]">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Name*"
                      required
                      className="w-full h-[65px] rounded-md bg-BodyBg4-0 text-HeadingColor-0 font-FiraSans placeholder:text-TextColor2-0 outline-none border border-transparent focus:border-PrimaryColor-0 transition-all duration-500 py-3 px-7"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter E-Mail*"
                      required
                      className="w-full h-[65px] rounded-md bg-BodyBg4-0 text-HeadingColor-0 font-FiraSans placeholder:text-TextColor2-0 outline-none border border-transparent focus:border-PrimaryColor-0 transition-all duration-500 py-3 px-7"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="py-5 w-full bg-PrimaryColor-0 font-FiraSans rounded-md text-white flex items-center justify-center gap-2 uppercase relative z-10 group overflow-hidden"
                  >
                    {loading ? 'Submitting...' : 'Submit Comments'}
                    <span>
                      <BsArrowRight size={'20'} />
                    </span>
                    <span className="absolute bg-HeadingColor-0 left-[12.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-0"></span>
                    <span className="absolute bg-HeadingColor-0 left-[37.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[25%]"></span>
                    <span className="absolute bg-HeadingColor-0 left-[62.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-1/2"></span>
                    <span className="absolute bg-HeadingColor-0 left-[87.5%] top-0 h-full w-0 transition-all duration-500 -z-10 group-hover:w-[25%] group-hover:left-[75%]"></span>
                  </button>
                  {error && <p className="text-red-500">{error}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Blog id={id} />
    </>
  );
};

export default BlogDetails;
