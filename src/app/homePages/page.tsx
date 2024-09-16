import type { NextPage } from "next";
import { useCallback } from "react";

// import styles from "./_components/homePages.module.css";

const HomePage: NextPage = () => {
  const onFrameContainerClick = useCallback(() => {
    // Add your code here
  }, []);

  return (
    <div className="w-full relative bg-white h-[5194px] overflow-hidden text-left text-2xl text-[#3a3a3a] font-['Amazon_Ember_Display']">
      <section className="absolute top-[1538px] left-[calc(50%-217px)] leading-[150%] font-extrabold text-center hidden">
        Frequently Asked Questions
      </section>

      <section className="absolute top-[1615px] left-[320px] w-[800px] hidden flex flex-col items-start justify-start gap-[32px] text-[18px] font-['Amazon_Ember']">
        <h2 className="relative text-[24px] leading-[150%] font-extrabold font-['Amazon_Ember_Display']">
          Fellowships
        </h2>

        <article className="w-full flex flex-row items-start justify-center gap-[16px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
            <h3 className="relative leading-[170%]">
              What is the purpose of the Code India Fellowship?
            </h3>
            <p className="w-full relative leading-[170%] font-medium">
              Code India Fellowship aims to transform the learning and life
              outcomes of young women/girl students studying in government high
              schools by placing fellows. CIF will enable young women to have
              jobs or admission to advanced training opportunities by the time
              they finish their school education.
            </p>
          </div>
          <img
            className="relative w-[24px] h-[24px] flex-shrink-0"
            alt="Remove"
            src="./HomeImages/remove_circle_outline.svg"
          />
        </article>

        <hr className="w-full relative border-t border-[#dedede] box-border h-[1px]" />

        {/* Repeat the FAQ Question structure */}
        <article className="w-full flex flex-row items-center justify-center gap-[16px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
            <h3 className="relative leading-[170%]">
              What will a Code India Fellow do?
            </h3>
            <p className="relative w-[759px] leading-[170%] font-['Noto_Sans'] text-[#2e2e2e] hidden">
              Code India Fellowship aims to transform the learning and life
              outcomes of young women/girl students studying in government high
              schools by placing fellows. CIF will enable young women to have
              jobs or admission to advanced training opportunities by the time
              they finish their school education.
            </p>
          </div>
          <img
            className="relative w-[24px] h-[24px] flex-shrink-0"
            alt="Add"
            src="./HomeImages/add_circle_outline.svg"
          />
        </article>

        <hr className="w-[800px] relative border-t border-[#dedede] box-border h-[1px] hidden" />
      </section>
      {/* <section className="absolute top-0 left-0 w-[1728px] h-[1117px] text-center text-[56px] text-gray-200 font-['Amazon_Ember']">
  <video
    src="video.mp4"
    className="absolute top-0 left-0 w-[1728px] h-[1117px] shadow-[0_4px_4px_rgba(0,0,0,0.06),0_8px_12px_rgba(0,0,0,0.04),0_4px_24px_rgba(0,0,0,0.08)] bg-gradient-to-b from-black/80 to-black/0"
    autoPlay
    muted
  ></video>
  <img
    className="absolute top-12 left-12 w-[72px] h-[72px] overflow-hidden"
    alt=""
    src="reshot-icon-molecules-YBNSD562JC 1.svg"
  />

  <header className="absolute top-[200px] left-12 w-[1215px] flex flex-col gap-12 items-start text-left font-['Amazon_Ember_Display']">
    <div className="w-full flex flex-col gap-4 items-start">
      <h1 className="w-full relative font-extrabold leading-[150%]">
        WELCOME TO AMAZON FUTURE ENGINEERS INNOVATION HUB
      </h1>
      <h2 className="relative text-[32px] leading-[150%] font-extrabold">
        A tinkering lab for every future engineer
      </h2>
    </div>

    <div className="flex flex-row gap-8 items-start text-[18px] text-white font-['Amazon_Ember']">
      <button className="flex items-center justify-center px-8 py-2 bg-[#f55c38] rounded-full h-14 cursor-pointer">
        <span className="relative font-medium leading-[170%]">
          Book a Session
        </span>
      </button>
      <button className="flex items-center justify-center px-8 py-2 bg-gray-200 text-[#f55c38] rounded-full h-14">
        <span className="relative font-medium leading-[170%]">
          Take a Virtual Tour
        </span>
      </button>
    </div>
  </header>

  <nav className="absolute top-12 left-[1569px] flex items-center justify-center px-8 py-2 bg-gray-200 text-[#f55c38] rounded-full h-14 text-[18px] cursor-pointer">
    <span className="relative font-medium leading-[170%]">Login</span>
  </nav>

  <div className="absolute top-[52px] left-[1407px] flex items-center justify-center px-2 bg-gray-200/70 rounded-full h-12 gap-1 text-[14px] text-white">
    <button className="flex items-center justify-center px-3 py-2 bg-[#f55c38] rounded-full h-8 font-medium leading-5">
      Eng
    </button>
    <button className="flex items-center justify-center px-3 py-2 rounded-full h-8 text-[#3a3a3a]">
      ಅಇಈ
    </button>
  </div>
</section> */}
      <section className="relative w-[1728px] h-[1117px] text-center text-[56px] text-gray-200 font-['Amazon_Ember']">
        <video
          src="./HomeImages/video.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover shadow-[0_4px_4px_rgba(0,0,0,0.06),0_8px_12px_rgba(0,0,0,0.04),0_4px_24px_rgba(0,0,0,0.08)] bg-gradient-to-b from-black/80 to-black/0"
          autoPlay
          muted
        ></video>
        <img
          className="absolute top-12 left-12 w-[72px] h-[72px] overflow-hidden"
          alt=""
          src="./HomeImages/reshot-icon-molecules-YBNSD562JC 1.svg"
        />

        <header className="absolute top-[200px] left-12 w-[1215px] flex flex-col gap-12 items-start text-left font-['Amazon_Ember_Display']">
          <div className="w-full flex flex-col gap-4 items-start">
            <h1 className="w-full relative font-extrabold leading-[150%]">
              WELCOME TO AMAZON FUTURE ENGINEERS INNOVATION HUB
            </h1>
            <h2 className="relative text-[32px] leading-[150%] font-extrabold">
              A tinkering lab for every future engineer
            </h2>
          </div>

          <div className="flex flex-row gap-8 items-start text-[18px] text-white font-['Amazon_Ember']">
            <button className="flex items-center justify-center px-8 py-2 bg-[#f55c38] rounded-full h-14 cursor-pointer">
              <span className="relative font-medium leading-[170%]">
                Book a Session
              </span>
            </button>
            <button className="flex items-center justify-center px-8 py-2 bg-gray-200 text-[#f55c38] rounded-full h-14">
              <span className="relative font-medium leading-[170%]">
                Take a Virtual Tour
              </span>
            </button>
          </div>
        </header>

        <nav className="absolute top-12 left-[1569px] flex items-center justify-center px-8 py-2 bg-gray-200 text-[#f55c38] rounded-full h-14 text-[18px] cursor-pointer">
          <span className="relative font-medium leading-[170%]">Login</span>
        </nav>

        <div className="absolute top-[52px] left-[1407px] flex items-center justify-center px-2 bg-gray-200/70 rounded-full h-12 gap-1 text-[14px] text-white">
          <button className="flex items-center justify-center px-3 py-2 bg-[#f55c38] rounded-full h-8 font-medium leading-5">
            Eng
          </button>
          <button className="flex items-center justify-center px-3 py-2 rounded-full h-8 text-[#3a3a3a]">
            ಅಇಈ
          </button>
        </div>
      </section>

      <section className="absolute top-[3420px] left-8 w-[1664px] hidden flex-row items-center justify-start gap-8 text-[18px] font-['Amazon_Ember']">
        <article className="flex-shrink-0 w-[815px] rounded-[16px] bg-[#d4dae8] flex flex-col items-start justify-between p-8 text-[24px] font-['Amazon_Ember_Display']">
          <header className="w-[567px] flex flex-col items-start justify-start gap-6">
            <h3 className="w-full relative leading-[150%] font-extrabold">
              Nano Sprints
            </h3>
            <p className="relative text-[18px] leading-[170%] font-medium">
              One day sessions designed to spark interest and build aspiration
            </p>
          </header>
          <footer className="w-[240px] h-14 rounded-full bg-white flex items-center justify-center px-4 py-2 text-center text-[#29458c] text-[18px]">
            <button className="relative font-medium leading-[170%]">
              Book a Session
            </button>
          </footer>
        </article>

        <article className="flex-1 rounded-[16px] bg-[#fce9f0] flex flex-col items-start justify-start p-8 gap-6">
          <header className="w-full relative text-[24px] leading-[150%] font-extrabold">
            Mini Sprints
          </header>
          <p className="relative leading-[170%] font-medium">
            Multi-day workshops focusing on specific STEM topics
          </p>
          <footer className="w-[240px] h-14 rounded-full bg-white flex items-center justify-center px-4 py-2 text-center text-[#29458c]">
            <button className="relative font-medium leading-[170%]">
              Know More
            </button>
          </footer>
        </article>

        <article className="flex-1 rounded-[16px] bg-[#ffefd6] flex flex-col items-start justify-start p-8 gap-6">
          <header className="w-full relative text-[24px] leading-[150%] font-extrabold">
            Mega Sprints
          </header>
          <p className="relative leading-[170%] font-medium">
            Multi-day workshops focusing on specific STEM topics
          </p>
          <footer className="w-[240px] h-14 rounded-full bg-white flex items-center justify-center px-4 py-2 text-center text-[#29458c]">
            <button className="relative font-medium leading-[170%]">
              Know More
            </button>
          </footer>
        </article>
      </section>
      <section className="absolute top-[4917px] left-12 flex flex-col items-start justify-start gap-4 text-[#29458c]">
        <h2 className="relative font-extrabold leading-[150%]">
          Have Any Questions?
        </h2>
        <p className="w-full relative text-[18px] leading-[170%] font-['Amazon_Ember'] text-[#3a3a3a]">
          <strong>
            <span>{`Reach out to us at `}</span>
            <a href="mailto:afeinnovation@ihub.com" className="text-[#f55c38]">
              afeinnovation@ihub.com
            </a>
          </strong>
        </p>
      </section>
      <section className="absolute top-[1197px] left-12 w-[1632px] flex flex-col items-start justify-start gap-8 text-[#29458c]">
        <article className="w-[790px] flex flex-col items-start justify-start gap-4">
          <h2 className="relative font-extrabold leading-[150%]">
            What is the AFE Innovation Hub?
          </h2>
          <p className="w-full relative text-[18px] leading-[170%] font-medium text-[#3a3a3a] font-['Amazon_Ember']">
            AFE Studio is a state-of-the-art Robotics and AI lab dedicated to
            empowering over 4,000 students by 2024. Our lab offers an
            unparalleled opportunity for students to dive into the fascinating
            realms of computer science and robotics. Designed with innovation in
            mind, AFE Studio provides an interactive and immersive environment
            where students can experiment, learn, and grow.
          </p>
        </article>
        <figure className="w-[534px] h-[436px] rounded-[16px] hidden">
          <img
            className="object-cover"
            alt="AFE Innovation Hub"
            src="./HomeImages/Rectangle 1.png"
          />
        </figure>

        <div className="w-full flex flex-row items-start justify-start gap-4">
          <figure className="flex-1 h-[360px]">
            <img
              className="object-cover"
              alt="AFE Hub Image 1"
              src="./HomeImages/Rectangle 4.svg"
            />
          </figure>
          <figure className="w-[800px] h-[360px]">
            <img
              className="object-cover"
              alt="AFE Hub Image 2"
              src="./HomeImages/Rectangle 3.svg"
            />
          </figure>
          <figure className="flex-1 h-[360px]">
            <img
              className="object-cover"
              alt="AFE Hub Image 3"
              src="./HomeImages/Rectangle 5.svg"
            />
          </figure>
        </div>
      </section>
      <section className="absolute top-[4397px] left-12 w-[1632px] flex flex-col items-start justify-start gap-8 text-[#29458c]">
        <header className="w-full relative font-extrabold leading-[150%]">
          Latest From The Innovation Hub
        </header>

        <figure className="w-[534px] relative rounded-lg h-[436px] hidden">
          <img
            className="object-cover"
            alt="Latest innovation"
            src="./HomeImages/Rectangle 1.png"
          />
        </figure>

        <div className="w-full flex flex-col items-start justify-start">
          <div className="w-full rounded-lg h-[360px] flex flex-row items-center justify-start gap-4">
            <button className="w-12 relative h-12 overflow-hidden flex-shrink-0">
              <img
                className="object-cover"
                alt="Previous"
                src="./HomeImages/chevron_left.svg"
              />
            </button>

            <figure className="w-full relative max-w-full overflow-hidden max-h-full">
              <img
                className="object-cover"
                alt="Innovation Hub Image 1"
                src="./HomeImages/Rectangle 6.svg"
              />
            </figure>

            <figure className="w-full relative max-w-full overflow-hidden max-h-full">
              <img
                className="object-cover"
                alt="Innovation Hub Image 2"
                src="./HomeImages/Rectangle 7.svg"
              />
            </figure>

            <figure className="w-full relative max-w-full overflow-hidden max-h-full">
              <img
                className="object-cover"
                alt="Innovation Hub Image 3"
                src="./HomeImages/Rectangle 8.svg"
              />
            </figure>

            <button className="w-12 relative h-12 overflow-hidden flex-shrink-0">
              <img
                className="object-cover"
                alt="Next"
                src="./HomeImages/chevron_right_black.svg"
              />
            </button>
          </div>
        </div>
      </section>
      <section className="absolute top-[2662px] left-[calc(50%-816px)] w-[1632px] flex flex-col items-start justify-start gap-[48px] text-[#29458c]">
        <article className="w-[765px] flex flex-col items-start justify-start gap-[24px]">
          <h2 className="self-stretch relative leading-[150%] font-extrabold">
            Value - Driven programs
          </h2>
          <p className="self-stretch relative text-[18px] leading-[170%] font-medium font-[Amazon Ember] text-[#3a3a3a]">
            Teachers can easily schedule lab sessions and integrate Maker's
            Space into their lesson plans/ Curriculum. Pick a program and embark
            on a transformative STEM journey with your students.
          </p>
        </article>

        <div className="self-stretch flex flex-row items-start justify-start gap-4 text-[18px] text-white font-[Amazon Ember]">
          <section className="self-stretch w-[1120px] bg-[#29458c] overflow-hidden flex-shrink-0 flex flex-col items-start justify-start p-12 box-border relative gap-8">
            <div className="w-[567px] flex flex-col items-start justify-start gap-4 z-0">
              <header className="flex flex-row items-center justify-start gap-4 text-[24px] font-[Amazon Ember Display]">
                <h3 className="relative leading-[150%] font-extrabold">
                  Nano Sprints
                </h3>
                <span className="rounded-full bg-[#049796] h-8 flex flex-row items-center justify-center px-2 box-border text-sm font-[Amazon Ember]">
                  <p className="relative leading-[170%] font-medium">Active</p>
                </span>
              </header>
              <p className="self-stretch relative leading-[170%] font-medium">
                One day sessions designed to spark interest and build
                aspiration.
              </p>
              <div className="flex flex-row items-center justify-start gap-2">
                <figure className="w-11 h-8 relative overflow-hidden flex-shrink-0">
                  <img
                    src="./HomeImages/reshot-icon-search-time-schedule-YKN4SVFGAU.svg"
                    alt="Icon"
                  />
                </figure>
                <p className="flex flex-row items-center justify-start relative leading-[170%] font-medium">
                  1 Day (3 hours)
                </p>
              </div>
              <div className="flex flex-row items-center justify-start gap-2">
                <figure className="w-[44px] h-[32px] relative overflow-hidden flex-shrink-0">
                  <img
                    src="./HomeImages/reshot-icon-student-boy-L9ESXQZ3WU.svg"
                    alt="Student icon"
                  />
                </figure>
                <p className="relative leading-[170%] font-medium">
                  30 to 40 students per session
                </p>
              </div>
            </div>
            <img
              className="absolute w-[558.7px] h-[523.7px] top-[131px] left-[534px] object-contain z-20 m-0"
              alt="Decorative graphic"
              src="./HomeImages/Vector.svg"
            />
          </section>

          <aside className="flex-1 flex flex-col items-start justify-start gap-4 text-[#29458c]">
            <article className="self-stretch bg-[#cdeaea] overflow-hidden flex flex-col items-start justify-start p-12 gap-6">
              <header className="flex flex-row items-center justify-start gap-4 text-2xl font-['Amazon_Ember_Display']">
                <h3 className="relative leading-[1.5] font-extrabold">
                  Mini Sprints
                </h3>
                <span className="rounded-full bg-[#f55c38] h-8 flex flex-row items-center justify-center px-2 box-border text-sm text-white font-sans">
                  <p className="relative leading-[170%] font-medium">
                    Upcoming
                  </p>
                </span>
              </header>
              <p className="relative leading-[170%] font-medium text-[#3a3a3a] self-stretch">
                Multi-day workshops focusing on specific STEM topics.
              </p>
              <div className="flex flex-row items-center justify-start gap-1 text-[#f55c38]">
                <p className="relative leading-[170%] font-medium">
                  Learn More
                </p>
                <img
                  className="w-6 h-6 relative overflow-hidden flex-shrink-0"
                  alt="Chevron"
                  src="./HomeImages/chevron_right.svg"
                />
              </div>
            </article>

            <article className="self-stretch bg-[#fff2f2] overflow-hidden flex flex-col items-start justify-start p-12 gap-6">
              <header className="flex flex-row items-center justify-start gap-4 text-2xl font-display">
                <h3 className="relative leading-[150%] font-extrabold">
                  Mega Sprints
                </h3>
                <span className="rounded-full bg-[#f55c38] h-[32px] flex flex-row items-center justify-center px-2 box-border text-xs text-white font-[Amazon Ember]">
                  <p className="relative leading-[170%] font-medium">
                    Upcoming
                  </p>
                </span>
              </header>
              <p className="self-stretch relative leading-[170%] font-medium text-[#3a3a3a]">
                Comprehensive Programs Leading to Exciting Competitive Robotics
                Challenges.
              </p>
              <div className="flex flex-row items-center justify-start gap-1 text-[#f55c38]">
                <p className="relative leading-[170%] font-medium">
                  Learn More
                </p>
                <img
                  className="relative w-6 h-6 overflow-hidden flex-shrink-0"
                  alt="Chevron"
                  src="./HomeImages/chevron_right.svg"
                />
              </div>
            </article>
          </aside>
        </div>
      </section>
      <footer className="absolute bottom-0 left-0 bg-[#ffad33] w-[1728px] h-[102px] text-[24px]">
        <section className="absolute top-[32px] left-[48px] flex flex-row items-center justify-start gap-[16px]">
          <img
            className="relative w-[38px] h-[38px] overflow-hidden flex-shrink-0"
            alt="Innovation Hub Logo"
            src="./HomeImages/reshot-icon-molecules-YBNSD562JC 1.svg"
          />
          <h1 className="relative leading-[150%] font-extrabold">
            Innovation Hub
          </h1>
        </section>

        <b className="absolute top-[35.5px] left-[calc(50%-59px)] text-[18px] leading-[170%] font-[AmazonEmber]">
          Privacy Policy
        </b>

        <nav className="absolute top-[35px] left-[1584px] flex flex-row items-center justify-start gap-[32px]">
          <a href="https://www.linkedin.com">
            <img
              className="w-[32px] relative h-[32px] overflow-hidden flex-shrink-0"
              alt="LinkedIn"
              src="./HomeImages/Linkedin.svg"
            />
          </a>
          <a href="https://www.twitter.com">
            <img
              className="w-[32px] relative h-[32px] overflow-hidden flex-shrink-0"
              alt="Twitter"
              src="./HomeImages/Twitter.svg"
            />
          </a>
        </nav>
      </footer>
      <section className="absolute top-[1914px] left-0 bg-[#29458c] w-[1728px] flex flex-col items-start justify-start p-[80px] px-[48px] box-border gap-[48px] text-white">
        <header className="w-[793px] flex flex-col items-start justify-start gap-[16px]">
          <h2 className="relative leading-[150%] font-extrabold">
            How it Works?
          </h2>
          <p className="self-stretch relative text-[18px] leading-[170%] font-medium font-[Amazon Ember]">
            There are a few simple steps that you can take to book a sprint
            session for your students
          </p>
        </header>

        <div className="self-stretch flex flex-col items-center justify-start gap-8 text-[24px]">
          <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-y-12 gap-x-8">
            <figure className="w-[383px] flex flex-col items-center justify-start">
              <img
                className="w-[140px] h-[140px] relative object-cover"
                alt="Step 1"
                src="./HomeImages/Lottie flies.gif"
              />
              <figcaption>Step 1</figcaption>
            </figure>
            <figure className="w-[383px] flex flex-col items-center justify-start">
              <img
                className="w-[140px] h-[140px] relative object-cover"
                alt="Step 2"
                src="./HomeImages/Lottie flies.gif"
              />
              <figcaption>Step 2</figcaption>
            </figure>
            <figure className="w-[383px] flex flex-col items-center justify-start">
              <img
                className="w-[140px] h-[140px] relative object-cover"
                alt="Step 3"
                src="./HomeImages/Lottie flies.gif"
              />
              <figcaption>Step 3</figcaption>
            </figure>
            <figure className="w-[383px] flex flex-col items-center justify-start">
              <img
                className="w-[140px] h-[140px] relative object-cover"
                alt="Step 4"
                src="./HomeImages/Lottie flies.gif"
              />
              <figcaption>Step 4</figcaption>
            </figure>
          </div>

          <img
            className="w-[1276px] relative h-[24px]"
            alt="Process Overview"
            src="./HomeImages/Frame 31704.svg"
          />

          <div className="self-stretch flex flex-row items-start justify-start gap-[33px]">
            <article className="w-[383px] flex flex-col items-center justify-start gap-[8px]">
              <h3 className="relative leading-[150%] font-extrabold">
                Get to Know Innovation Hub
              </h3>
              <p className="self-stretch relative text-center text-[18px] leading-[170%] font-medium font-['Amazon Ember']">
                Take a look around at what we do at Innovation Hub with the
                latest happenings or our virtual tour
              </p>
            </article>

            <article className="w-[383px] flex flex-col items-center justify-start gap-[8px]">
              <h3 className="relative leading-[150%] font-extrabold">
                Check Out Sprint Details
              </h3>
              <p className="self-stretch relative text-center text-[18px] leading-[170%] font-medium font-['Amazon Ember']">
                Explore if the sprint fits your needs and learning goals
              </p>
            </article>

            <article className="w-[383px] flex flex-col items-center justify-start gap-[8px]">
              <h3 className="relative leading-[150%] font-extrabold">
                Book and Get Ready
              </h3>
              <p className="self-stretch relative text-center text-[18px] leading-[170%] font-medium font-['Amazon Ember']">
                Easily find suitable slots and book via our system or call us
              </p>
            </article>

            <article className="w-[383px] flex flex-col items-center justify-start gap-[8px]">
              <h3 className="relative leading-[150%] font-extrabold">
                Visit & Enjoy the Tinkering
              </h3>
              <p className="self-stretch relative text-center text-[18px] leading-[170%] font-medium font-['Amazon Ember']">
                Get hands-on for the actual fun at the lab
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="absolute top-[3517px] left-[48px] w-[1632px] h-[800px] text-center text-[42px] text-white">
        <img
          className="absolute top-0 left-0 w-[1632px] h-[800px] object-cover"
          alt="Background video"
          src="./HomeImages/video 2.svg"
        />

        <div className="absolute top-12 left-[calc(50%-768px)] flex flex-col items-start justify-start gap-8">
          <h2 className="relative leading-[150%] font-extrabold">
            Take a Sneak Peak at AFE Innovation Hub
          </h2>

          <a
            href="#"
            className="rounded-full bg-white h-16 flex flex-row items-center justify-center px-8 py-2 text-lg text-[#29458c] font-[Amazon Ember]"
          >
            <span className="relative leading-[170%] font-medium">
              Start Virtual Tour
            </span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;