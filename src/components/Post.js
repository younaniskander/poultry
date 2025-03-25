import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { useParams } from 'react-router-dom';

function Post() {
  const [showComments, setShowComments] = useState(false);
  const [postData, setPostData] = useState(null);
  const [comments, setComments] = useState([]);
  const [images, setImages] = useState([]);
  const swiperRef = useRef(null);
  const { id } = useParams();

  // Fetch post data and comments
  useEffect(() => {
    if (!id) return;

    // Fetch post data
    fetch(`https://the-poultry-api.aiotgroups.com/api/post/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Post Data:', data);
        setPostData(data);
        setImages(data?.media);

        // Fetch comments for the post
        return fetch(`https://the-poultry-api.aiotgroups.com/api/comment/post/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });
      })
      .then((response) => response.json())
      .then((commentsData) => {
        console.log('Comments Data:', commentsData);
        setComments(commentsData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  // Handle icon clicks (like, comment, share)
  const handleIcons = (type) => {
    switch (type) {
      case 'like':
        window.open('/');
        break;
      case 'comment':
        setShowComments(!showComments);
        break;
      case 'share':
        const shareUrl = `${window.location.origin}/post/${id}`;
        navigator.clipboard
          .writeText(shareUrl)
          .then(() => {
            alert('URL copied to clipboard!');
          })
          .catch((err) => {
            console.error('Failed to copy URL: ', err);
          });
        break;
      default:
        console.log('Unknown action');
    }
  };

  // Handle image click to stop autoplay
  const handleImageClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  // Calculate time difference for the post
  const timeDifference = (postDate) => {
    const now = new Date();
    const difference = now - new Date(postDate);
    const minutes = Math.floor(difference / (1000 * 60));
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else if (hours < 24) {
      return `${hours} hours ago`;
    } else if (days < 30) {
      return `${days} days ago`;
    } else {
      const months = Math.floor(days / 30);
      return `${months} months ago`;
    }
  };

  // Handle post click to redirect to Google Play
  const handlePostClick = () => {
    window.open('/');
  };

  if (!postData) {
    return (
      <main className="container">
        <section className="flex justify-center py-20">
          <div className="w-full text-center">
            <p>Loading...</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="container" classNamw="ltr">
      <section className="flex h-auto justify-center py-3">
        <div
          className="postContainer h-full w-full border-2 border-solid border-[#F7B712] rounded-xl overflow-hidden p-4 flex flex-col gap-3"
          onClick={handlePostClick} // Add onClick handler here
          style={{ cursor: 'pointer' }} // Change cursor to pointer to indicate clickability
        >
          {/* User Data Section */}
          <div className="userData w-full flex gap-3 items-center">
            <div className="userImage w-16 h-16 rounded-full overflow-hidden">
              <img src={`https://the-poultry-api.aiotgroups.com/api/image/${postData?.user?.image}`} alt="User profile" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-lg font-bold">{postData.user.fullName}</h2>
              <h3>
                {postData?.regular?.tag || ""} | {postData?.user?.country || ""}
              </h3>
              <h3>{timeDifference(postData.createdAt)}</h3>
            </div>
          </div>

          {/* Post Description Section */}
          <div className="commentContent text-lg">
            <p>{postData.text}</p>
          </div>

          {/* Image Carousel Section */}
          <div className="images relative rounded-xl overflow-hidden">
            <Swiper
              ref={swiperRef}
              spaceBetween={10}
              slidesPerView={1} // Show one slide at a time
              autoplay={{ delay: 2000, disableOnInteraction: false }} // Autoplay every 3 seconds
              speed={1000} // Transition speed
              loop={true} // Enable infinite loop
              modules={[Autoplay]}
              className="h-full"
            >
              {images?.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    className="w-full h-full object-contain rounded-xl"
                    style={{
                      width: '100%', // Default width
                      height: 'auto', // Default height
                      maxWidth: '100%', // Ensure it doesn't exceed container width
                      maxHeight: '500px', // Set a max height for larger screens
                      // Adjust based on screen size
                      '@media (min-width: 768px)': {
                        width: '50%', // Adjust width for medium screens
                        height: 'auto',
                      },
                      '@media (min-width: 1024px)': {
                        width: '33.33%', // Adjust width for large screens
                        height: 'auto',
                      },
                    }}
                    src={`https://the-poultry-api.aiotgroups.com/api/image/${image}`}
                    alt={`Post content ${index + 1}`}
                    onClick={handleImageClick}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Icons Section (Like, Comment, Share) */}
          <div className="fontAweosomeIcon flex gap-3">
            <div className="likes flex gap-2">
              <p>{postData.likes}</p>
              <FontAwesomeIcon
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the post click event from firing
                  handleIcons('like');
                }}
                icon={faThumbsUp}
                className="text-xl cursor-pointer md:hover:text-[#F7B712] transition-all duration-200"
              />
            </div>

            <div className="likes flex gap-2">
              <p>{postData.comments}</p>
              <FontAwesomeIcon
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the post click event from firing
                  handleIcons('comment');
                }}
                icon={faComment}
                className="text-xl cursor-pointer md:hover:text-[#F7B712] transition-all duration-200"
              />
            </div>

            <div className="likes flex gap-1">
              <p> </p>
              <FontAwesomeIcon
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the post click event from firing
                  handleIcons('share');
                }}
                icon={faShare}
                className="text-xl cursor-pointer md:hover:text-[#F7B712] transition-all duration-200"
              />
            </div>
          </div>

          {/* Comments Section */}
          {showComments && (
            <div className="commentsSection p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Comments</h3>
              <ul className="flex flex-col gap-1">
                {comments.length > 0 ? (
                  comments.map((comment, index) => (
                    <div key={index} className='mb-3 border bg-gray-200 p-3 rounded-xl'>
                      {/* User Data Section */}
                      <div className="userData w-full flex gap-3 items-center">
                        <div className="userImage w-12 h-12 rounded-full overflow-hidden">
                          <img src={`https://the-poultry-api.aiotgroups.com/api/image/${comment.user.image}`} alt="User profile" className="w-full object-contain" />
                        </div>
                        <div >
                          <h2 className="text-lg font-bold">{comment.user.fullName}</h2>
                          <h3>
                            {comment.user.country}
                          </h3>
                        </div>
                      </div>

                      {/* comment Data */}
                      <div className="commentContent text-lg">
                        <p>{comment.text}</p>
                      </div>

                    </div>
                  ))
                ) : (
                  <li>No comments available</li>
                )}
              </ul>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Post;