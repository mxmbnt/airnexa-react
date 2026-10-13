export default function Navbar() {
  return (
    <div
      data-animation="default"
      className="navbar w-nav"
      data-easing2="ease-in-sine"
      data-wf-component-id="dec4be79-9c5f-924f-fb15-0aa8d075f80e"
      data-easing="ease-out-sine"
      data-wf-variant-state="base"
      data-collapse="medium"
      role="banner"
      data-duration="400"
    >
      <div className="nav-top-wrap">
        <div className="nav-top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 16 16"
            fill="none"
            className="icon cc-sm"
          >
            <path
              d="M12.333 10.6667C13.6217 10.6667 14.6663 8.72657 14.6663 6.33333C14.6663 3.9401 13.6217 2 12.333 2M12.333 10.6667C11.0443 10.6667 9.99967 8.72657 9.99967 6.33333C9.99967 3.9401 11.0443 2 12.333 2M12.333 10.6667L3.6287 9.08407C3.01038 8.97164 2.70121 8.91543 2.45122 8.79263C1.94265 8.54282 1.56391 8.08901 1.4091 7.54395C1.33301 7.27603 1.33301 6.9618 1.33301 6.33333C1.33301 5.70487 1.33301 5.39063 1.4091 5.12271C1.56391 4.57766 1.94265 4.12385 2.45122 3.87403C2.70121 3.75124 3.01038 3.69502 3.6287 3.5826L12.333 2M3.33301 9.33333L3.59558 13.0093C3.62051 13.3584 3.63298 13.533 3.70892 13.6653C3.77579 13.7817 3.87627 13.8753 3.9972 13.9337C4.13456 14 4.30955 14 4.65954 14H5.84781C6.2479 14 6.44795 14 6.59602 13.9202C6.72612 13.8501 6.82923 13.7387 6.88916 13.6037C6.95736 13.4499 6.94202 13.2504 6.91133 12.8515L6.66634 9.66667"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <div className="text-sm">
            Kick off your money journey with us—check out the cool opportunities just for you.
          </div>
          <img
            src="/img/icons8-wrong-50.png"
            loading="lazy"
            alt="White close icon with two crossing lines forming an X on a black square background."
            className="nav-close-icon"
          />
        </div>
      </div>
      <div className="container">
        <div className="nav-wrapper">
          <a
            id="w-node-dec4be79-9c5f-924f-fb15-0aa8d075f816-d075f80e"
            href="/"
            className="brand-logo w-nav-brand"
          >
            <img
              width="126"
              height="32"
              alt="Purple gear or cogwheel icon with a square cutout in the center on a transparent background."
              src="/img/originallogo.webp"
              loading="lazy"
              className="nav-logo-img"
            />
          </a>
          <nav role="navigation" className="nav-menu w-nav-menu">
            <ul role="list" className="nav-list">
              <li className="nav-list-item">
                <a data-nav-close="" href="#features" className="nav-link w-inline-block">
                  <div>Features</div>
                </a>
              </li>
              <li className="nav-list-item">
                <a href="/about" className="nav-link w-inline-block">
                  <div>About</div>
                </a>
              </li>
              <li className="nav-list-item">
                <a href="/pricing" className="nav-link w-inline-block">
                  <div>Pricing</div>
                </a>
              </li>
              <li className="nav-list-item">
                <a href="/resources" className="nav-link w-inline-block">
                  <div>Resources</div>
                </a>
              </li>
            </ul>
            <div className="nav-right cc-phone">
              <a
                data-wf--button--variant="secondary"
                data-wf-component-id="364c8e17-73bd-f898-61b9-c3e020d4ec6f"
                data-wf-variant-state="968441c1-b8dc-f118-b928-54fbfb1b4e29"
                href="/contact"
                className="button w-variant-968441c1-b8dc-f118-b928-54fbfb1b4e29 w-inline-block"
              >
                <div className="button-text-wrap">
                  <div button-text-top="" className="button-text">
                    Get Started for Free
                  </div>
                  <div
                    button-text-bottom=""
                    className="button-text cc-bottom w-variant-968441c1-b8dc-f118-b928-54fbfb1b4e29"
                  >
                    Get Started for Free
                  </div>
                </div>
              </a>
            </div>
          </nav>
          <div nav-icon-wrap="" className="nav-menu-btn w-nav-button">
            <div className="nav-icon-wrap">
              <div nav-icon-top="" className="nav-icon"></div>
              <div nav-icon-mid="" className="nav-icon"></div>
              <div nav-icon-bottom="" className="nav-icon"></div>
            </div>
          </div>
          <div id="w-node-_49aa1fbd-02ae-19d2-e382-b93d17e01055-d075f80e" className="nav-right cc-hide">
            <a
              data-wf--button--variant="secondary"
              data-wf-component-id="364c8e17-73bd-f898-61b9-c3e020d4ec6f"
              data-wf-variant-state="968441c1-b8dc-f118-b928-54fbfb1b4e29"
              href="/contact"
              className="button w-variant-968441c1-b8dc-f118-b928-54fbfb1b4e29 w-inline-block"
            >
              <div className="button-text-wrap">
                <div button-text-top="" className="button-text">
                  Get Started for Free
                </div>
                <div
                  button-text-bottom=""
                  className="button-text cc-bottom w-variant-968441c1-b8dc-f118-b928-54fbfb1b4e29"
                >
                  Get Started for Free
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
