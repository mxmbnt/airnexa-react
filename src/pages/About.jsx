import Blog from '../sections/Blog.jsx'
import Cta from '../sections/Cta.jsx'
import Faq from '../sections/Faq.jsx'

export default function About() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="grid-cols cc-column">
            <div className="header-col cc-max-640">
              <div data-header-eyebrow="" className="text-wrapper">
                <div
                  data-wf--eyebrow--variant="dark"
                  className="eyebrow w-variant-cbe092bf-db71-450d-2685-e3d14466c853"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="icon u-text-accent-2 w-variant-cbe092bf-db71-450d-2685-e3d14466c853"
                  >
                    <g clipPath="url(#clip0_2131_12410)">
                      <path
                        d="M14.8758 1.15791L12.5736 0.541016L10.6334 7.78174L8.88183 1.24477L6.57953 1.86166L8.47202 8.92437L3.75828 4.21066L2.0729 5.89604L7.24328 11.0665L0.804392 9.34115L0.1875 11.6434L7.22279 13.5285C7.14224 13.1811 7.09963 12.8191 7.09963 12.4472C7.09963 9.81442 9.23387 7.68018 11.8666 7.68018C14.4994 7.68018 16.6336 9.81442 16.6336 12.4472C16.6336 12.8167 16.5915 13.1765 16.512 13.5218L22.9057 15.235L23.5226 12.9328L16.4593 11.0402L22.8987 9.31475L22.2817 7.01251L15.2188 8.905L19.9325 4.19131L18.2471 2.50593L13.1484 7.60461L14.8758 1.15791Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M16.5023 13.5469C16.3049 14.3814 15.8882 15.1311 15.3164 15.7317L19.9484 20.3638L21.6338 18.6784L16.5023 13.5469Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M15.2707 15.7812C14.692 16.3723 13.9607 16.8134 13.1406 17.0407L14.8261 23.331L17.1284 22.7141L15.2707 15.7812Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M13.055 17.0627C12.6745 17.1605 12.2757 17.2125 11.8647 17.2125C11.4244 17.2125 10.9981 17.1528 10.5933 17.041L8.90625 23.3371L11.2085 23.954L13.055 17.0627Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M10.5135 17.0183C9.70592 16.7797 8.98762 16.333 8.42075 15.7402L3.77734 20.3836L5.46272 22.069L10.5135 17.0183Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M8.3794 15.6988C7.82225 15.1023 7.41641 14.3626 7.22324 13.541L0.808594 15.2598L1.42548 17.5621L8.3794 15.6988Z"
                        fill="currentColor"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_2131_12410">
                        <rect width="24" height="24" fill="currentColor"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="text-md">Simplify your transactions.</div>
                </div>
              </div>
              <div className="title-wrapper cc-md">
                <h1 data-header-title="" className="text-h1">
                  Fueled by tech to help you crush it
                </h1>
              </div>
              <div className="text-wrapper">
                <p data-header-text="" className="text-md">
                  At AirNexa, we're all about making customer management easier and helping businesses grow in
                  a real way.
                </p>
              </div>
            </div>
            <div className="content-col">
              <div
                data-poster-url="/img/video-1002720156268866-poster.0000000.jpg"
                data-video-urls="/video/video-1002720156268866-mp4.mp4,/video/video-1002720156268866-webm.webm"
                data-autoplay="true"
                data-loop="true"
                data-wf-ignore="true"
                data-header-image=""
                className="about-header-video w-background-video w-background-video-atom"
              >
                <video
                  id="72708fd4-2560-a298-497f-b09021ab230c-video"
                  autoPlay
                  loop
                  style={{ backgroundImage: 'url("/img/video-1002720156268866-poster.0000000.jpg")' }}
                  muted
                  playsInline
                  data-wf-ignore="true"
                  data-object-fit="cover"
                >
                  <source src="/video/video-1002720156268866-mp4.mp4" data-wf-ignore="true" />
                  <source src="/video/video-1002720156268866-webm.webm" data-wf-ignore="true" />
                </video>
                <noscript>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        '\n  [data-wf-bgvideo-fallback-img] {\n    display: none;\n  }\n  @media (prefers-reduced-motion: reduce) {\n    [data-wf-bgvideo-fallback-img] {\n      position: absolute;\n      z-index: -100;\n      display: inline-block;\n      height: 100%;\n      width: 100%;\n      object-fit: cover;\n    }\n  }',
                    }}
                  />
                  <img
                    data-wf-bgvideo-fallback-img="true"
                    src="/img/video-1002720156268866-poster.0000000.jpg"
                    alt=""
                  />
                </noscript>
                <div aria-live="polite">
                  <button
                    type="button"
                    data-w-bg-video-control="true"
                    aria-controls="72708fd4-2560-a298-497f-b09021ab230c-video"
                    data-wf--video-button--variant="white"
                    className="w-backgroundvideo-backgroundvideoplaypausebutton video-button w-variant-df06a2ad-ca4a-a87c-ea08-01a329efe170 w-background-video--control"
                  >
                    <span className="play-state w-variant-df06a2ad-ca4a-a87c-ea08-01a329efe170">
                      <img loading="lazy" src="/img/icons8-play-24.png" alt="Pause video" />
                    </span>
                    <span hidden className="pause-state w-variant-df06a2ad-ca4a-a87c-ea08-01a329efe170">
                      <img loading="lazy" src="/img/icons8-play-50.png" alt="Play video" />
                    </span>
                  </button>
                </div>
              </div>
              <div data-header-item="" className="grid-cols cc-left-sm cc-48">
                <div id="w-node-_8b095458-e8ea-35a5-9a9e-1f6bc5b9c732-6c3596c0" className="column-left">
                  <div className="title-wrapper">
                    <h2 className="text-xl">Supported by top global finance services.</h2>
                  </div>
                </div>
                <div className="column-right cc-about">
                  <div className="about-card">
                    <div className="text-h5">10,000+</div>
                    <div className="text-md">Happy Customers</div>
                  </div>
                  <div className="about-card">
                    <div className="text-h5">$1 Billion+</div>
                    <div className="text-md">Secure Transactions</div>
                  </div>
                  <div className="about-card">
                    <div className="text-h5">$1 Billion+</div>
                    <div className="text-md">Secure Transactions</div>
                  </div>
                  <div className="about-card">
                    <div className="text-h5">99.9%</div>
                    <div className="text-md">Smooth Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid-cols cc-column">
            <div data-header-item="" className="header-col cc-2col">
              <div className="column-left cc-max-470">
                <div
                  data-wf--eyebrow--variant="dark"
                  className="eyebrow w-variant-cbe092bf-db71-450d-2685-e3d14466c853"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="icon u-text-accent-2 w-variant-cbe092bf-db71-450d-2685-e3d14466c853"
                  >
                    <g clipPath="url(#clip0_2131_12410)">
                      <path
                        d="M14.8758 1.15791L12.5736 0.541016L10.6334 7.78174L8.88183 1.24477L6.57953 1.86166L8.47202 8.92437L3.75828 4.21066L2.0729 5.89604L7.24328 11.0665L0.804392 9.34115L0.1875 11.6434L7.22279 13.5285C7.14224 13.1811 7.09963 12.8191 7.09963 12.4472C7.09963 9.81442 9.23387 7.68018 11.8666 7.68018C14.4994 7.68018 16.6336 9.81442 16.6336 12.4472C16.6336 12.8167 16.5915 13.1765 16.512 13.5218L22.9057 15.235L23.5226 12.9328L16.4593 11.0402L22.8987 9.31475L22.2817 7.01251L15.2188 8.905L19.9325 4.19131L18.2471 2.50593L13.1484 7.60461L14.8758 1.15791Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M16.5023 13.5469C16.3049 14.3814 15.8882 15.1311 15.3164 15.7317L19.9484 20.3638L21.6338 18.6784L16.5023 13.5469Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M15.2707 15.7812C14.692 16.3723 13.9607 16.8134 13.1406 17.0407L14.8261 23.331L17.1284 22.7141L15.2707 15.7812Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M13.055 17.0627C12.6745 17.1605 12.2757 17.2125 11.8647 17.2125C11.4244 17.2125 10.9981 17.1528 10.5933 17.041L8.90625 23.3371L11.2085 23.954L13.055 17.0627Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M10.5135 17.0183C9.70592 16.7797 8.98762 16.333 8.42075 15.7402L3.77734 20.3836L5.46272 22.069L10.5135 17.0183Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M8.3794 15.6988C7.82225 15.1023 7.41641 14.3626 7.22324 13.541L0.808594 15.2598L1.42548 17.5621L8.3794 15.6988Z"
                        fill="currentColor"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_2131_12410">
                        <rect width="24" height="24" fill="currentColor"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="text-md">Check out our features</div>
                </div>
                <div className="title-wrapper">
                  <div className="title-wrapper">
                    <h2 className="text-h5">
                      Streamlined Dashboard A modern, user-friendly layout for managing all your activities.
                    </h2>
                  </div>
                </div>
              </div>
              <div id="w-node-b06b7a67-9e81-0bc1-49cc-1f72de782e0c-6c3596c0" className="column-right">
                <div
                  id="w-node-_0adc29dc-22b0-263f-293b-31831d5d8ebe-1d5d8ebe"
                  style={{ maxWidth: '29rem' }}
                  className="text-wrapper"
                >
                  <p className="text-sm">
                    We believe in creating a digital ecosystem where financial interactions are not just
                    functional but also beautifully designed. AirNexa combines technology and design to
                    deliver a product that feels simple yet powerful.
                  </p>
                </div>
              </div>
            </div>
            <div data-about-card="" className="content-col cc-4col">
              <div card-1="" className="card">
                <div className="features-text-card">
                  <div className="image-wrapper">
                    <img
                      width="83"
                      height="70"
                      alt="Green light bulb icon with light rays indicating an idea or innovation."
                      src="/img/logo-10.webp"
                      loading="lazy"
                      className="features-img"
                    />
                  </div>
                  <div className="title-wrapper cc-top-24">
                    <div className="title-wrapper">
                      <h2 className="text-h5">Innovation</h2>
                    </div>
                  </div>
                  <div className="text-wrapper cc-top-16">
                    <div
                      id="w-node-_0adc29dc-22b0-263f-293b-31831d5d8ebe-1d5d8ebe"
                      style={{ maxWidth: '40rem' }}
                      className="text-wrapper"
                    >
                      <p className="text-sm">
                        We aim to revolutionize financial interactions with cutting-edge technology and
                        intuitive design.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div card-2="" className="card">
                <div className="features-text-card">
                  <div className="image-wrapper">
                    <img
                      width="83"
                      height="70"
                      alt="Green shield icon with a dark green outline."
                      src="/img/logo-13.webp"
                      loading="lazy"
                      className="features-img"
                    />
                  </div>
                  <div className="title-wrapper cc-top-24">
                    <div className="title-wrapper">
                      <h2 className="text-h5">Trust</h2>
                    </div>
                  </div>
                  <div className="text-wrapper cc-top-16">
                    <div
                      id="w-node-_0adc29dc-22b0-263f-293b-31831d5d8ebe-1d5d8ebe"
                      style={{ maxWidth: '40rem' }}
                      className="text-wrapper"
                    >
                      <p className="text-sm">
                        Fostering confidence with strong security, transparency, and reliable performance in
                        every transaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div card-3="" className="card">
                <div className="features-text-card">
                  <div className="image-wrapper">
                    <img
                      width="83"
                      height="70"
                      alt="Green open hand icon with fingers slightly apart on white background."
                      src="/img/logo-12.webp"
                      loading="lazy"
                      className="features-img"
                    />
                  </div>
                  <div className="title-wrapper cc-top-24">
                    <div className="title-wrapper">
                      <h2 className="text-h5">Accessibility</h2>
                    </div>
                  </div>
                  <div className="text-wrapper cc-top-16">
                    <div
                      id="w-node-_0adc29dc-22b0-263f-293b-31831d5d8ebe-1d5d8ebe"
                      style={{ maxWidth: '40rem' }}
                      className="text-wrapper"
                    >
                      <p className="text-sm">
                        Creating inclusive solutions that empower individuals and businesses across all
                        backgrounds.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div card-4="" className="card">
                <div className="features-text-card">
                  <div className="image-wrapper">
                    <img
                      width="83"
                      height="70"
                      alt="Green arrow pointing upward with leaves growing along its stem symbolizing growth or sustainability."
                      src="/img/logo-11.webp"
                      loading="lazy"
                      className="features-img"
                    />
                  </div>
                  <div className="title-wrapper cc-top-24">
                    <div className="title-wrapper">
                      <h2 className="text-h5">Growth</h2>
                    </div>
                  </div>
                  <div className="text-wrapper cc-top-16">
                    <div
                      id="w-node-_0adc29dc-22b0-263f-293b-31831d5d8ebe-1d5d8ebe"
                      style={{ maxWidth: '40rem' }}
                      className="text-wrapper"
                    >
                      <p className="text-sm">
                        Supporting sustainable growth by enabling smarter, faster, and more efficient
                        financial ecosystems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container cc-0">
          <div
            data-poster-url="/img/animate-16-poster.0000000.jpg"
            data-video-urls="/video/animate-16-mp4.mp4,/video/animate-16-webm.webm"
            data-autoplay="true"
            data-loop="true"
            data-wf-ignore="true"
            className="bg-video w-background-video w-background-video-atom"
          >
            <video
              id="a0f0f918-828b-a88f-582c-f826a9193294-video"
              autoPlay
              loop
              style={{ backgroundImage: 'url("/img/animate-16-poster.0000000.jpg")' }}
              muted
              playsInline
              data-wf-ignore="true"
              data-object-fit="cover"
            >
              <source src="/video/animate-16-mp4.mp4" data-wf-ignore="true" />
              <source src="/video/animate-16-webm.webm" data-wf-ignore="true" />
            </video>
            <div className="grid-cols cc-column">
              <div data-header-item="" className="column-left cc-max-700">
                <div className="text-wrapper">
                  <div
                    data-wf--eyebrow--variant="transparent"
                    className="eyebrow w-variant-5b94b686-7ba5-b8ee-8aad-dbaa24f111c0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="icon u-text-accent-2 w-variant-5b94b686-7ba5-b8ee-8aad-dbaa24f111c0"
                    >
                      <g clipPath="url(#clip0_2131_12410)">
                        <path
                          d="M14.8758 1.15791L12.5736 0.541016L10.6334 7.78174L8.88183 1.24477L6.57953 1.86166L8.47202 8.92437L3.75828 4.21066L2.0729 5.89604L7.24328 11.0665L0.804392 9.34115L0.1875 11.6434L7.22279 13.5285C7.14224 13.1811 7.09963 12.8191 7.09963 12.4472C7.09963 9.81442 9.23387 7.68018 11.8666 7.68018C14.4994 7.68018 16.6336 9.81442 16.6336 12.4472C16.6336 12.8167 16.5915 13.1765 16.512 13.5218L22.9057 15.235L23.5226 12.9328L16.4593 11.0402L22.8987 9.31475L22.2817 7.01251L15.2188 8.905L19.9325 4.19131L18.2471 2.50593L13.1484 7.60461L14.8758 1.15791Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M16.5023 13.5469C16.3049 14.3814 15.8882 15.1311 15.3164 15.7317L19.9484 20.3638L21.6338 18.6784L16.5023 13.5469Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M15.2707 15.7812C14.692 16.3723 13.9607 16.8134 13.1406 17.0407L14.8261 23.331L17.1284 22.7141L15.2707 15.7812Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M13.055 17.0627C12.6745 17.1605 12.2757 17.2125 11.8647 17.2125C11.4244 17.2125 10.9981 17.1528 10.5933 17.041L8.90625 23.3371L11.2085 23.954L13.055 17.0627Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M10.5135 17.0183C9.70592 16.7797 8.98762 16.333 8.42075 15.7402L3.77734 20.3836L5.46272 22.069L10.5135 17.0183Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M8.3794 15.6988C7.82225 15.1023 7.41641 14.3626 7.22324 13.541L0.808594 15.2598L1.42548 17.5621L8.3794 15.6988Z"
                          fill="currentColor"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_2131_12410">
                          <rect width="24" height="24" fill="currentColor"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="text-md">Check out our features</div>
                  </div>
                </div>
                <div className="title-wrapper">
                  <div className="title-wrapper">
                    <h2 className="text-h3">
                      We're always coming up with new ways to make managing your money easier with cool,
                      user-friendly tech.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <noscript>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n  [data-wf-bgvideo-fallback-img] {\n    display: none;\n  }\n  @media (prefers-reduced-motion: reduce) {\n    [data-wf-bgvideo-fallback-img] {\n      position: absolute;\n      z-index: -100;\n      display: inline-block;\n      height: 100%;\n      width: 100%;\n      object-fit: cover;\n    }\n  }',
                }}
              />
              <img data-wf-bgvideo-fallback-img="true" src="/img/animate-16-poster.0000000.jpg" alt="" />
            </noscript>
            <div aria-live="polite">
              <button
                type="button"
                data-w-bg-video-control="true"
                aria-controls="a0f0f918-828b-a88f-582c-f826a9193294-video"
                data-wf--video-button--variant="white"
                className="w-backgroundvideo-backgroundvideoplaypausebutton video-button w-variant-df06a2ad-ca4a-a87c-ea08-01a329efe170 w-background-video--control"
              >
                <span className="play-state w-variant-df06a2ad-ca4a-a87c-ea08-01a329efe170">
                  <img loading="lazy" src="/img/icons8-play-24.png" alt="Pause video" />
                </span>
                <span hidden className="pause-state w-variant-df06a2ad-ca4a-a87c-ea08-01a329efe170">
                  <img loading="lazy" src="/img/icons8-play-50.png" alt="Play video" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid-cols cc-column">
            <div data-header-item="" className="header-col cc-max-700">
              <div className="text-wrapper">
                <div data-wf--eyebrow--variant="base" className="eyebrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="icon u-text-accent-2"
                  >
                    <g clipPath="url(#clip0_2131_12410)">
                      <path
                        d="M14.8758 1.15791L12.5736 0.541016L10.6334 7.78174L8.88183 1.24477L6.57953 1.86166L8.47202 8.92437L3.75828 4.21066L2.0729 5.89604L7.24328 11.0665L0.804392 9.34115L0.1875 11.6434L7.22279 13.5285C7.14224 13.1811 7.09963 12.8191 7.09963 12.4472C7.09963 9.81442 9.23387 7.68018 11.8666 7.68018C14.4994 7.68018 16.6336 9.81442 16.6336 12.4472C16.6336 12.8167 16.5915 13.1765 16.512 13.5218L22.9057 15.235L23.5226 12.9328L16.4593 11.0402L22.8987 9.31475L22.2817 7.01251L15.2188 8.905L19.9325 4.19131L18.2471 2.50593L13.1484 7.60461L14.8758 1.15791Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M16.5023 13.5469C16.3049 14.3814 15.8882 15.1311 15.3164 15.7317L19.9484 20.3638L21.6338 18.6784L16.5023 13.5469Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M15.2707 15.7812C14.692 16.3723 13.9607 16.8134 13.1406 17.0407L14.8261 23.331L17.1284 22.7141L15.2707 15.7812Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M13.055 17.0627C12.6745 17.1605 12.2757 17.2125 11.8647 17.2125C11.4244 17.2125 10.9981 17.1528 10.5933 17.041L8.90625 23.3371L11.2085 23.954L13.055 17.0627Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M10.5135 17.0183C9.70592 16.7797 8.98762 16.333 8.42075 15.7402L3.77734 20.3836L5.46272 22.069L10.5135 17.0183Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M8.3794 15.6988C7.82225 15.1023 7.41641 14.3626 7.22324 13.541L0.808594 15.2598L1.42548 17.5621L8.3794 15.6988Z"
                        fill="currentColor"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_2131_12410">
                        <rect width="24" height="24" fill="currentColor"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="text-md">Team members</div>
                </div>
              </div>
              <div className="title-wrapper">
                <div className="title-wrapper">
                  <h2 className="text-h2">Our dedicated team helping your business succeed</h2>
                </div>
              </div>
            </div>
            <div data-header-item="" className="content-col cc-3col cc-gap-20">
              <div className="team-card">
                <div className="image-wrapper">
                  <img
                    width="411"
                    height="458"
                    alt="Young man with tousled hair wearing a beige suit and white shirt standing on a sunlit cobblestone street."
                    src="/img/frame1321321418.webp"
                    loading="lazy"
                    sizes="411px"
                    srcSet="/img/frame1321321418-p-500.webp 500w, /img/frame1321321418-p-800.webp 800w, /img/frame1321321418.webp 822w"
                    className="team-img"
                  />
                </div>
                <div className="team-info">
                  <div className="text-wrapper">
                    <div className="text-sm cc-font-weight-500">James Bergson</div>
                    <div className="text-sm">Medical Assistant</div>
                  </div>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    className="linkedin-link w-inline-block"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="icon"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.5 3.24219C3.67157 3.24219 3 3.91376 3 4.74219V19.7422C3 20.5706 3.67157 21.2422 4.5 21.2422H19.5C20.3284 21.2422 21 20.5706 21 19.7422V4.74219C21 3.91376 20.3284 3.24219 19.5 3.24219H4.5ZM8.52076 7.24491C8.52639 8.20116 7.81061 8.79038 6.96123 8.78616C6.16107 8.78194 5.46357 8.14491 5.46779 7.24632C5.47201 6.40116 6.13998 5.72194 7.00764 5.74163C7.88795 5.76132 8.52639 6.40679 8.52076 7.24491ZM12.2797 10.0039H9.75971H9.7583V18.5638H12.4217V18.3641C12.4217 17.9842 12.4214 17.6042 12.4211 17.2241C12.4203 16.2103 12.4194 15.1954 12.4246 14.1819C12.426 13.9358 12.4372 13.6799 12.5005 13.445C12.7381 12.5675 13.5271 12.0008 14.4074 12.1401C14.9727 12.2286 15.3467 12.5563 15.5042 13.0893C15.6013 13.4225 15.6449 13.7811 15.6491 14.1285C15.6605 15.1761 15.6589 16.2237 15.6573 17.2714C15.6567 17.6412 15.6561 18.0112 15.6561 18.381V18.5624H18.328V18.3571C18.328 17.9051 18.3278 17.4532 18.3275 17.0013C18.327 15.8718 18.3264 14.7423 18.3294 13.6124C18.3308 13.1019 18.276 12.5985 18.1508 12.1049C17.9638 11.3708 17.5771 10.7633 16.9485 10.3246C16.5027 10.0124 16.0133 9.81129 15.4663 9.78879C15.404 9.7862 15.3412 9.78281 15.2781 9.7794C14.9984 9.76428 14.7141 9.74892 14.4467 9.80285C13.6817 9.95613 13.0096 10.3063 12.5019 10.9236C12.4429 10.9944 12.3852 11.0663 12.2991 11.1736L12.2797 11.1979V10.0039ZM5.68164 18.5666H8.33242V10.0095H5.68164V18.5666Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="team-card">
                <div className="image-wrapper">
                  <img
                    width="411"
                    height="458"
                    alt="Young man with tousled hair wearing round glasses, a beige coat, black turtleneck, and red scarf on city street."
                    src="/img/frame1321321418-1.webp"
                    loading="lazy"
                    sizes="411px"
                    srcSet="/img/frame1321321418-1-p-500.webp 500w, /img/frame1321321418-1-p-800.webp 800w, /img/frame1321321418-1.webp 822w"
                    className="team-img"
                  />
                </div>
                <div className="team-info">
                  <div className="text-wrapper">
                    <div className="text-sm cc-font-weight-500">James Bergson</div>
                    <div className="text-sm">Medical Assistant</div>
                  </div>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    className="linkedin-link w-inline-block"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="icon"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.5 3.24219C3.67157 3.24219 3 3.91376 3 4.74219V19.7422C3 20.5706 3.67157 21.2422 4.5 21.2422H19.5C20.3284 21.2422 21 20.5706 21 19.7422V4.74219C21 3.91376 20.3284 3.24219 19.5 3.24219H4.5ZM8.52076 7.24491C8.52639 8.20116 7.81061 8.79038 6.96123 8.78616C6.16107 8.78194 5.46357 8.14491 5.46779 7.24632C5.47201 6.40116 6.13998 5.72194 7.00764 5.74163C7.88795 5.76132 8.52639 6.40679 8.52076 7.24491ZM12.2797 10.0039H9.75971H9.7583V18.5638H12.4217V18.3641C12.4217 17.9842 12.4214 17.6042 12.4211 17.2241C12.4203 16.2103 12.4194 15.1954 12.4246 14.1819C12.426 13.9358 12.4372 13.6799 12.5005 13.445C12.7381 12.5675 13.5271 12.0008 14.4074 12.1401C14.9727 12.2286 15.3467 12.5563 15.5042 13.0893C15.6013 13.4225 15.6449 13.7811 15.6491 14.1285C15.6605 15.1761 15.6589 16.2237 15.6573 17.2714C15.6567 17.6412 15.6561 18.0112 15.6561 18.381V18.5624H18.328V18.3571C18.328 17.9051 18.3278 17.4532 18.3275 17.0013C18.327 15.8718 18.3264 14.7423 18.3294 13.6124C18.3308 13.1019 18.276 12.5985 18.1508 12.1049C17.9638 11.3708 17.5771 10.7633 16.9485 10.3246C16.5027 10.0124 16.0133 9.81129 15.4663 9.78879C15.404 9.7862 15.3412 9.78281 15.2781 9.7794C14.9984 9.76428 14.7141 9.74892 14.4467 9.80285C13.6817 9.95613 13.0096 10.3063 12.5019 10.9236C12.4429 10.9944 12.3852 11.0663 12.2991 11.1736L12.2797 11.1979V10.0039ZM5.68164 18.5666H8.33242V10.0095H5.68164V18.5666Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="team-card">
                <div className="image-wrapper">
                  <img
                    width="411"
                    height="458"
                    alt="Young man with curly hair wearing a dark suit jacket and white shirt standing outdoors with blurred greenery and orange flowers in the background."
                    src="/img/frame1321321418-2.webp"
                    loading="lazy"
                    sizes="411px"
                    srcSet="/img/frame1321321418-2-p-500.webp 500w, /img/frame1321321418-2-p-800.webp 800w, /img/frame1321321418-2.webp 822w"
                    className="team-img"
                  />
                </div>
                <div className="team-info">
                  <div className="text-wrapper">
                    <div className="text-sm cc-font-weight-500">James Bergson</div>
                    <div className="text-sm">Medical Assistant</div>
                  </div>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    className="linkedin-link w-inline-block"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="icon"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.5 3.24219C3.67157 3.24219 3 3.91376 3 4.74219V19.7422C3 20.5706 3.67157 21.2422 4.5 21.2422H19.5C20.3284 21.2422 21 20.5706 21 19.7422V4.74219C21 3.91376 20.3284 3.24219 19.5 3.24219H4.5ZM8.52076 7.24491C8.52639 8.20116 7.81061 8.79038 6.96123 8.78616C6.16107 8.78194 5.46357 8.14491 5.46779 7.24632C5.47201 6.40116 6.13998 5.72194 7.00764 5.74163C7.88795 5.76132 8.52639 6.40679 8.52076 7.24491ZM12.2797 10.0039H9.75971H9.7583V18.5638H12.4217V18.3641C12.4217 17.9842 12.4214 17.6042 12.4211 17.2241C12.4203 16.2103 12.4194 15.1954 12.4246 14.1819C12.426 13.9358 12.4372 13.6799 12.5005 13.445C12.7381 12.5675 13.5271 12.0008 14.4074 12.1401C14.9727 12.2286 15.3467 12.5563 15.5042 13.0893C15.6013 13.4225 15.6449 13.7811 15.6491 14.1285C15.6605 15.1761 15.6589 16.2237 15.6573 17.2714C15.6567 17.6412 15.6561 18.0112 15.6561 18.381V18.5624H18.328V18.3571C18.328 17.9051 18.3278 17.4532 18.3275 17.0013C18.327 15.8718 18.3264 14.7423 18.3294 13.6124C18.3308 13.1019 18.276 12.5985 18.1508 12.1049C17.9638 11.3708 17.5771 10.7633 16.9485 10.3246C16.5027 10.0124 16.0133 9.81129 15.4663 9.78879C15.404 9.7862 15.3412 9.78281 15.2781 9.7794C14.9984 9.76428 14.7141 9.74892 14.4467 9.80285C13.6817 9.95613 13.0096 10.3063 12.5019 10.9236C12.4429 10.9944 12.3852 11.0663 12.2991 11.1736L12.2797 11.1979V10.0039ZM5.68164 18.5666H8.33242V10.0095H5.68164V18.5666Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="team-card">
                <div className="image-wrapper">
                  <img
                    width="411"
                    height="458"
                    alt="Young man with short brown hair and blue eyes wearing a navy blue long-sleeve shirt and jeans standing confidently on a cobblestone street with hands in pockets."
                    src="/img/frame1321321418-5.webp"
                    loading="lazy"
                    sizes="411px"
                    srcSet="/img/frame1321321418-5-p-500.webp 500w, /img/frame1321321418-5-p-800.webp 800w, /img/frame1321321418-5.webp 822w"
                    className="team-img"
                  />
                </div>
                <div className="team-info">
                  <div className="text-wrapper">
                    <div className="text-sm cc-font-weight-500">James Bergson</div>
                    <div className="text-sm">Medical Assistant</div>
                  </div>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    className="linkedin-link w-inline-block"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="icon"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.5 3.24219C3.67157 3.24219 3 3.91376 3 4.74219V19.7422C3 20.5706 3.67157 21.2422 4.5 21.2422H19.5C20.3284 21.2422 21 20.5706 21 19.7422V4.74219C21 3.91376 20.3284 3.24219 19.5 3.24219H4.5ZM8.52076 7.24491C8.52639 8.20116 7.81061 8.79038 6.96123 8.78616C6.16107 8.78194 5.46357 8.14491 5.46779 7.24632C5.47201 6.40116 6.13998 5.72194 7.00764 5.74163C7.88795 5.76132 8.52639 6.40679 8.52076 7.24491ZM12.2797 10.0039H9.75971H9.7583V18.5638H12.4217V18.3641C12.4217 17.9842 12.4214 17.6042 12.4211 17.2241C12.4203 16.2103 12.4194 15.1954 12.4246 14.1819C12.426 13.9358 12.4372 13.6799 12.5005 13.445C12.7381 12.5675 13.5271 12.0008 14.4074 12.1401C14.9727 12.2286 15.3467 12.5563 15.5042 13.0893C15.6013 13.4225 15.6449 13.7811 15.6491 14.1285C15.6605 15.1761 15.6589 16.2237 15.6573 17.2714C15.6567 17.6412 15.6561 18.0112 15.6561 18.381V18.5624H18.328V18.3571C18.328 17.9051 18.3278 17.4532 18.3275 17.0013C18.327 15.8718 18.3264 14.7423 18.3294 13.6124C18.3308 13.1019 18.276 12.5985 18.1508 12.1049C17.9638 11.3708 17.5771 10.7633 16.9485 10.3246C16.5027 10.0124 16.0133 9.81129 15.4663 9.78879C15.404 9.7862 15.3412 9.78281 15.2781 9.7794C14.9984 9.76428 14.7141 9.74892 14.4467 9.80285C13.6817 9.95613 13.0096 10.3063 12.5019 10.9236C12.4429 10.9944 12.3852 11.0663 12.2991 11.1736L12.2797 11.1979V10.0039ZM5.68164 18.5666H8.33242V10.0095H5.68164V18.5666Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="team-card">
                <div className="image-wrapper">
                  <img
                    width="411"
                    height="458"
                    alt="Young man with medium-length brown hair wearing a brown blazer, navy blue sweater, patterned scarf, and white pocket square against a plain gray background."
                    src="/img/frame1321321418-4.webp"
                    loading="lazy"
                    sizes="411px"
                    srcSet="/img/frame1321321418-4-p-500.webp 500w, /img/frame1321321418-4-p-800.webp 800w, /img/frame1321321418-4.webp 822w"
                    className="team-img"
                  />
                </div>
                <div className="team-info">
                  <div className="text-wrapper">
                    <div className="text-sm cc-font-weight-500">James Bergson</div>
                    <div className="text-sm">Medical Assistant</div>
                  </div>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    className="linkedin-link w-inline-block"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="icon"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.5 3.24219C3.67157 3.24219 3 3.91376 3 4.74219V19.7422C3 20.5706 3.67157 21.2422 4.5 21.2422H19.5C20.3284 21.2422 21 20.5706 21 19.7422V4.74219C21 3.91376 20.3284 3.24219 19.5 3.24219H4.5ZM8.52076 7.24491C8.52639 8.20116 7.81061 8.79038 6.96123 8.78616C6.16107 8.78194 5.46357 8.14491 5.46779 7.24632C5.47201 6.40116 6.13998 5.72194 7.00764 5.74163C7.88795 5.76132 8.52639 6.40679 8.52076 7.24491ZM12.2797 10.0039H9.75971H9.7583V18.5638H12.4217V18.3641C12.4217 17.9842 12.4214 17.6042 12.4211 17.2241C12.4203 16.2103 12.4194 15.1954 12.4246 14.1819C12.426 13.9358 12.4372 13.6799 12.5005 13.445C12.7381 12.5675 13.5271 12.0008 14.4074 12.1401C14.9727 12.2286 15.3467 12.5563 15.5042 13.0893C15.6013 13.4225 15.6449 13.7811 15.6491 14.1285C15.6605 15.1761 15.6589 16.2237 15.6573 17.2714C15.6567 17.6412 15.6561 18.0112 15.6561 18.381V18.5624H18.328V18.3571C18.328 17.9051 18.3278 17.4532 18.3275 17.0013C18.327 15.8718 18.3264 14.7423 18.3294 13.6124C18.3308 13.1019 18.276 12.5985 18.1508 12.1049C17.9638 11.3708 17.5771 10.7633 16.9485 10.3246C16.5027 10.0124 16.0133 9.81129 15.4663 9.78879C15.404 9.7862 15.3412 9.78281 15.2781 9.7794C14.9984 9.76428 14.7141 9.74892 14.4467 9.80285C13.6817 9.95613 13.0096 10.3063 12.5019 10.9236C12.4429 10.9944 12.3852 11.0663 12.2991 11.1736L12.2797 11.1979V10.0039ZM5.68164 18.5666H8.33242V10.0095H5.68164V18.5666Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="team-card">
                <div className="image-wrapper">
                  <img
                    width="411"
                    height="458"
                    alt="Young man with short curly dark hair wearing an olive green button-up short-sleeve shirt and a pendant necklace, against a beige background."
                    src="/img/frame1321321418-3.webp"
                    loading="lazy"
                    sizes="411px"
                    srcSet="/img/frame1321321418-3-p-500.webp 500w, /img/frame1321321418-3-p-800.webp 800w, /img/frame1321321418-3.webp 822w"
                    className="team-img"
                  />
                </div>
                <div className="team-info">
                  <div className="text-wrapper">
                    <div className="text-sm cc-font-weight-500">James Bergson</div>
                    <div className="text-sm">Medical Assistant</div>
                  </div>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    className="linkedin-link w-inline-block"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="icon"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.5 3.24219C3.67157 3.24219 3 3.91376 3 4.74219V19.7422C3 20.5706 3.67157 21.2422 4.5 21.2422H19.5C20.3284 21.2422 21 20.5706 21 19.7422V4.74219C21 3.91376 20.3284 3.24219 19.5 3.24219H4.5ZM8.52076 7.24491C8.52639 8.20116 7.81061 8.79038 6.96123 8.78616C6.16107 8.78194 5.46357 8.14491 5.46779 7.24632C5.47201 6.40116 6.13998 5.72194 7.00764 5.74163C7.88795 5.76132 8.52639 6.40679 8.52076 7.24491ZM12.2797 10.0039H9.75971H9.7583V18.5638H12.4217V18.3641C12.4217 17.9842 12.4214 17.6042 12.4211 17.2241C12.4203 16.2103 12.4194 15.1954 12.4246 14.1819C12.426 13.9358 12.4372 13.6799 12.5005 13.445C12.7381 12.5675 13.5271 12.0008 14.4074 12.1401C14.9727 12.2286 15.3467 12.5563 15.5042 13.0893C15.6013 13.4225 15.6449 13.7811 15.6491 14.1285C15.6605 15.1761 15.6589 16.2237 15.6573 17.2714C15.6567 17.6412 15.6561 18.0112 15.6561 18.381V18.5624H18.328V18.3571C18.328 17.9051 18.3278 17.4532 18.3275 17.0013C18.327 15.8718 18.3264 14.7423 18.3294 13.6124C18.3308 13.1019 18.276 12.5985 18.1508 12.1049C17.9638 11.3708 17.5771 10.7633 16.9485 10.3246C16.5027 10.0124 16.0133 9.81129 15.4663 9.78879C15.404 9.7862 15.3412 9.78281 15.2781 9.7794C14.9984 9.76428 14.7141 9.74892 14.4467 9.80285C13.6817 9.95613 13.0096 10.3063 12.5019 10.9236C12.4429 10.9944 12.3852 11.0663 12.2991 11.1736L12.2797 11.1979V10.0039ZM5.68164 18.5666H8.33242V10.0095H5.68164V18.5666Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Faq />
      <Blog />
      <Cta />
    </>
  )
}
