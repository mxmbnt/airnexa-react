import Blog from '../sections/Blog.jsx'
import Cta from '../sections/Cta.jsx'

export default function BlogPost({ post }) {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="grid-cols cc-blog">
            <div className="header-col cc-post">
              <div data-header-eyebrow="" className="text-wrapper">
                <div className="text-md">{post.date}</div>
              </div>
              <div data-header-title="" className="title-wrapper cc-top-16">
                <h1 className="text-h2">{post.title}</h1>
              </div>
            </div>
            <div data-header-text="" className="image-wrapper">
              <img
                src={post.image}
                srcSet={post.imageSrcSet || undefined}
                sizes="100vw"
                alt={post.imageAlt}
                loading="lazy"
                className="blog-main"
              />
            </div>
            <div data-header-item="" className="text-wrapper cc-max-900">
              <div className="rich-text w-richtext" dangerouslySetInnerHTML={{ __html: post.body }} />
            </div>
          </div>
        </div>
      </section>
      <Blog />
      <Cta />
    </>
  )
}
