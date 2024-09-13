import type { NextPage } from "next";
import { useCallback } from "react";
// import styles from "./_components/homePages.module.css";



const HomePage: NextPage = () => {
  const onFrameContainerClick = useCallback(() => {
    // Add your code here
  }, []);

  return (
    <div className="w-full relative bg-white h-[5194px] overflow-hidden text-left text-2xl text-[#3a3a3a] font-['Amazon_Ember_Display']">
      <div className="absolute top-[1538px] left-[calc(50%-217px)] leading-[150%] font-extrabold text-center hidden">
  Frequently Asked Questions
</div>
<div className="absolute top-[1615px] left-[320px] w-[800px] hidden flex flex-col items-start justify-start gap-[32px] text-[18px] font-['Amazon_Ember']">
  <div className="relative text-[24px] leading-[150%] font-extrabold font-['Amazon_Ember_Display']">
    Fellowships
  </div>
  <div className="w-full flex flex-row items-start justify-center gap-[16px]">
    <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
      <b className="relative leading-[170%]">
        What is the purpose of the Code India Fellowship?
      </b>
      <div className="w-full relative leading-[170%] font-medium">
        Code India Fellowship aims to transform the learning and life outcomes
        of young women/girl students studying in government high schools by
        placing fellows. CIF will enable young women to have jobs or admission
        to advanced training opportunities by the time they finish their school
        education.
      </div>
    </div>
    <img
      className="relative w-[24px] h-[24px] flex-shrink-0"
      alt=""
      src="remove_circle_outline.svg"
    />
  </div>
  <div className="w-full relative border-t border-[#dedede] box-border h-[1px]" />
  
  {/* Repeat the FAQ Question structure */}
  <div className="w-full flex flex-row items-center justify-center gap-[16px]">
    <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
      <b className="relative leading-[170%]">
        What will a Code India Fellow do?
      </b>
      <div className="relative w-[759px] leading-[170%] font-['Noto_Sans'] text-[#2e2e2e] hidden">
        Code India Fellowship aims to transform the learning and life outcomes
        of young women/girl students studying in government high schools by
        placing fellows. CIF will enable young women to have jobs or admission
        to advanced training opportunities by the time they finish their school
        education.
      </div>
    </div>
    <img
      className="relative w-[24px] h-[24px] flex-shrink-0"
      alt=""
      src="add_circle_outline.svg"
    />
  </div>
  <div className="w-[800px] relative border-t border-[#dedede] box-border h-[1px] hidden" />
</div>
<div className="absolute top-0 left-0 w-[1728px] h-[1117px] text-center text-[56px] text-gray-200 font-['Amazon_Ember']">
  <video className="absolute top-0 left-0 w-[1728px] h-[1117px] shadow-[0_4px_4px_rgba(0,0,0,0.06),0_8px_12px_rgba(0,0,0,0.04),0_4px_24px_rgba(0,0,0,0.08)] bg-gradient-to-b from-black/80 to-black/0" autoPlay muted>
    <source src="video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <img
    className="absolute top-12 left-12 w-[72px] h-[72px] overflow-hidden"
    alt=""
    src="reshot-icon-molecules-YBNSD562JC 1.svg"
  />
  <div className="absolute top-[200px] left-12 w-[1215px] flex flex-col gap-12 items-start text-left font-['Amazon_Ember_Display']">
    <div className="w-full flex flex-col gap-4 items-start">
      <div className="w-full relative font-extrabold leading-[150%]">
        WELCOME TO AMAZON FUTURE ENGINEERS INNOVATION HUB
      </div>
      <div className="relative text-[32px] leading-[150%] font-extrabold">
        A tinkering lab for every future engineer
      </div>
    </div>
    <div className="flex flex-row gap-8 items-start text-[18px] text-white font-['Amazon_Ember']">
      <div className="flex items-center justify-center px-8 py-2 bg-[#f55c38] rounded-full h-14 cursor-pointer">
        <div className="relative font-medium leading-[170%]">Book a Session</div>
      </div>
      <div className="flex items-center justify-center px-8 py-2 bg-gray-200 text-[#f55c38] rounded-full h-14">
        <div className="relative font-medium leading-[170%]">Take a Virtual Tour</div>
      </div>
    </div>
  </div>
  <div className="absolute top-12 left-[1569px] flex items-center justify-center px-8 py-2 bg-gray-200 text-[#f55c38] rounded-full h-14 text-[18px] cursor-pointer">
    <div className="relative font-medium leading-[170%]">Login</div>
  </div>
  <div className="absolute top-[52px] left-[1407px] flex items-center justify-center px-2 bg-gray-200/70 rounded-full h-12 gap-1 text-[14px] text-white">
    <div className="flex items-center justify-center px-3 py-2 bg-[#f55c38] rounded-full h-8 font-medium leading-5">Eng</div>
    <div className="flex items-center justify-center px-3 py-2 rounded-full h-8 text-[#3a3a3a]">ಅಇಈ</div>
  </div>
</div>
<div className="absolute top-[3420px] left-8 w-[1664px] hidden flex-row items-center justify-start gap-8 text-[18px] font-['Amazon_Ember']">
  <div className="flex-shrink-0 w-[815px] rounded-[16px] bg-[#d4dae8] flex flex-col items-start justify-between p-8 text-[24px] font-['Amazon_Ember_Display']">
    <div className="w-[567px] flex flex-col items-start justify-start gap-6">
      <div className="w-full relative leading-[150%] font-extrabold">
        Nano Sprints
      </div>
      <div className="relative text-[18px] leading-[170%] font-medium">
        One day sessions designed to spark interest and build aspiration
      </div>
    </div>
    <div className="w-[240px] h-14 rounded-full bg-white flex items-center justify-center px-4 py-2 text-center text-[#29458c] text-[18px]">
      <div className="relative font-medium leading-[170%]">Book a Session</div>
    </div>
  </div>

  <div className="flex-1 rounded-[16px] bg-[#fce9f0] flex flex-col items-start justify-start p-8 gap-6">
    <div className="w-full relative text-[24px] leading-[150%] font-extrabold">
      Mini Sprints
    </div>
    <div className="relative leading-[170%] font-medium">
      Multi-day workshops focusing on specific STEM topics
    </div>
    <div className="w-[240px] h-14 rounded-full bg-white flex items-center justify-center px-4 py-2 text-center text-[#29458c]">
      <div className="relative font-medium leading-[170%]">Know More</div>
    </div>
  </div>

  <div className="flex-1 rounded-[16px] bg-[#ffefd6] flex flex-col items-start justify-start p-8 gap-6">
    <div className="w-full relative text-[24px] leading-[150%] font-extrabold">
      Mega Sprints
    </div>
    <div className="relative leading-[170%] font-medium">
      Multi-day workshops focusing on specific STEM topics
    </div>
    <div className="w-[240px] h-14 rounded-full bg-white flex items-center justify-center px-4 py-2 text-center text-[#29458c]">
      <div className="relative font-medium leading-[170%]">Know More</div>
    </div>
  </div>
</div>

<div className="absolute top-[4917px] left-12 flex flex-col items-start justify-start gap-4 text-[#29458c]">
  <div className="relative font-extrabold leading-[150%]">Have Any Questions?</div>
  <b className="w-full relative text-[18px] leading-[170%] font-['Amazon_Ember'] text-[#3a3a3a]">
    <span>{`Reach out to us at `}</span>
    <span className="text-[#f55c38]">afeinnovation@ihub.com</span>
  </b>
</div>

<div className="absolute top-[1197px] left-12 w-[1632px] flex flex-col items-start justify-start gap-8 text-[#29458c]">
  <div className="w-[790px] flex flex-col items-start justify-start gap-4">
    <div className="relative font-extrabold leading-[150%]">
      What is the AFE Innovation Hub?
    </div>
    <div className="w-full relative text-[18px] leading-[170%] font-medium text-[#3a3a3a] font-['Amazon_Ember']">
      AFE Studio is a state-of-the-art Robotics and AI lab dedicated to
      empowering over 4,000 students by 2024. Our lab offers an unparalleled
      opportunity for students to dive into the fascinating realms of computer
      science and robotics. Designed with innovation in mind, AFE Studio
      provides an interactive and immersive environment where students can
      experiment, learn, and grow.
    </div>
  </div>
  <img className="w-[534px] h-[436px] rounded-[16px] object-cover hidden" alt="" src="Rectangle 1.png" />
  
  <div className="w-full flex flex-row items-start justify-start gap-4">
    <img className="flex-1 h-[360px] object-cover" alt="" src="Rectangle 4.svg" />
    <img className="w-[800px] h-[360px] object-cover" alt="" src="Rectangle 3.svg" />
    <img className="flex-1 h-[360px] object-cover" alt="" src="Rectangle 5.svg" />
  </div>
</div>
<div className="absolute top-[4397px] left-12 w-[1632px] flex flex-col items-start justify-start gap-8 text-[#29458c]">
  <div className="w-full relative font-extrabold leading-[150%]">
    Latest From The Innovation Hub
  </div>
  <img
    className="w-[534px] relative rounded-lg h-[436px] object-cover hidden"
    alt=""
    src="Rectangle 1.png"
  />
  <div className="w-full flex flex-col items-start justify-start">
    <div className="w-full rounded-lg h-[360px] flex flex-row items-center justify-start gap-4">
      <img
        className="w-12 relative h-12 overflow-hidden flex-shrink-0"
        alt=""
        src="chevron_left.svg"
      />
      <img
        className="w-full relative max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="Rectangle 6.svg"
      />
      <img
        className="w-full relative max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="Rectangle 7.svg"
      />
      <img
        className="w-[523px] relative max-h-full object-cover"
        alt=""
        src="Rectangle 8.svg"
      />
      <img
        className="w-12 relative h-12 overflow-hidden flex-shrink-0"
        alt=""
        src="chevron_right.svg"
      />
    </div>
  </div>
</div>
<div className="absolute top-[2662px] left-[calc(50%-816px)] w-[1632px] flex flex-col items-start justify-start gap-[48px] text-[#29458c]">
        <div className="w-[765px] flex flex-col items-start justify-start gap-[24px]">
          <div className="self-stretch relative leading-[150%] font-extrabold">Value - Driven programs</div>
          <div className="self-stretch relative text-[18px] leading-[170%] font-medium font-[Amazon Ember] text-[#3a3a3a]">
            Teachers can easily schedule lab sessions and integrate Maker's
            Space into their lesson plans/ Curriculum. Pick a program and embark
            on a transformative STEM journey with your students
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-4 text-[18px] text-white font-[Amazon Ember]">
          <div className="self-stretch w-[1120px] bg-[#29458c] overflow-hidden flex-shrink-0 flex flex-col items-start justify-start p-12 box-border relative gap-8">
            <div className="w-[567px] flex flex-col items-start justify-start gap-4 z-0">
              <div className="flex flex-row items-center justify-start gap-4 text-[24px] font-[Amazon Ember Display]">
                <div className="relative leading-[150%] font-extrabold">Nano Sprints</div>
                <div className="rounded-full bg-[#049796] h-8 flex flex-row items-center justify-center px-2 box-border text-sm font-[Amazon Ember]">
                  <div className="relative leading-[170%] font-medium">Active</div>
                </div>
              </div>
              <div className="self-stretch relative leading-[170%] font-medium">
                One day sessions designed to spark interest and build aspiration
              </div>
              <div className="flex flex-row items-center justify-start gap-2">
                <div className="w-11 h-8 relative overflow-hidden flex-shrink-0">
                  <div className="absolute h-full w-[57.73%] top-0 right-[21.82%] bottom-0 left-[20.45%]">
                    <img className="absolute h-[63.44%] w-[79.92%] top-[28.68%] right-[10%] bottom-[7.88%] left-[10.08%] max-w-full max-h-full overflow-hidden" alt="" src="Group.svg" />
                    <img className="absolute h-[79.38%] w-full top-[20.68%] right-0 bottom-[-0.06%] left-0 max-w-full max-h-full overflow-hidden" alt="" src="Group.svg" />
                    <img className="absolute h-[10%] w-[14.96%] top-[13.14%] right-[42.58%] bottom-[76.86%] left-[42.46%] max-w-full max-h-full overflow-hidden" alt="" src="Group.svg" />
                    <img className="absolute h-[13.13%] w-[28.74%] top-[1%] right-[35.76%] bottom-[85.88%] left-[35.5%] max-w-full max-h-full overflow-hidden" alt="" src="Group.svg" />
                    <img className="absolute h-[15%] w-[31.5%] top-0 right-[34.26%] bottom-[85%] left-[34.24%] max-w-full max-h-full overflow-hidden" alt="" src="Group.svg" />
                    <div className="absolute h-[67.81%] w-[85.43%] top-[26.42%] right-[7.33%] bottom-[5.77%] left-[7.23%]">
                      <div className="absolute h-full w-[2.76%] top-0 right-[48.69%] bottom-0 left-[48.55%]">
                        <img
                          className="absolute h-[6.45%] w-full top-0 right-0 bottom-[93.55%] left-0 max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="Group.svg"
                        />
                        <img
                          className="absolute h-[6.45%] w-full top-[93.64%] right-[-0.02%] bottom-[-0.09%] left-[0.02%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="Group.svg"
                        />
                      </div>
                      <img
                        className="absolute h-[71.43%] w-[71.43%] top-[14.19%] right-[14.36%] bottom-[14.38%] left-[14.22%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="Group.svg"
                      />
                      <div className="absolute h-[2.76%] w-full top-[48.54%] right-0 bottom-[48.69%] left-0">
                        <img
                          className="absolute h-full w-[6.45%] top-0 right-[-0.09%] bottom-0 left-[93.64%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="Group.svg"
                        />
                        <img
                          className="absolute h-full w-[6.45%] top-0 right-[93.55%] bottom-0 left-0 max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="Group.svg"
                        />
                      </div>
                      <img
                        className="absolute h-[71.43%] w-[71.43%] top-[14.19%] right-[14.33%] bottom-[14.38%] left-[14.25%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="Group.svg"
                      />
                    </div>
                    <img
                      className="absolute h-[13.44%] w-[2.36%] top-[36.06%] right-[48.93%] bottom-[50.5%] left-[48.71%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="Group.svg"
                    />
                    <img
                      className="absolute h-[1.88%] w-[14.17%] top-[59.34%] right-[63.7%] bottom-[38.79%] left-[22.12%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="Group.svg"
                    />
                    <img
                      className="absolute h-[15%] w-[17.32%] top-0 right-[41.35%] bottom-[85%] left-[41.32%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="Group.svg"
                    />
                    <img
                      className="absolute h-[27.81%] w-[35.04%] top-[46.44%] right-[32.53%] bottom-[25.75%] left-[32.43%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="Group.svg"
                    />
                    <img
                      className="absolute h-[29.69%] w-[37.4%] top-[45.4%] right-[31.43%] bottom-[24.91%] left-[31.17%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="Group.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start">
                  <div className="relative leading-[170%] font-medium">1 Day (3 hours)</div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-2">
                <img
                  className="w-[44px] h-[32px] relative overflow-hidden flex-shrink-0"
                  alt=""
                  src="reshot-icon-student-boy-L9ESXQZ3WU.svg"
                />
                <div className="relative leading-[170%] font-medium">
                  30 to 40 students per session
                </div>
              </div>
            </div>
            {/* <div
              className={styles.bookASessionFrame}
              onClick={onFrameContainerClick}
            >
              <div className={styles.bookASession}>Book a Session</div>
            </div> */}
            <img className="absolute w-[558.7px] h-[523.7px] top-[131px] left-[534px] object-contain z-20 m-0" alt="" src="Vector.svg" />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-4 text-[#29458c]">
            <div className="self-stretch bg-[#cdeaea] overflow-hidden flex flex-col items-start justify-start p-12 gap-6">
              <div className="flex flex-row items-center justify-start gap-4 text-2xl font-['Amazon_Ember_Display']">
                <div className="relative leading-[1.5] font-extrabold">Mini Sprints</div>
                <div className="rounded-full bg-[#f55c38] h-8 flex flex-row items-center justify-center px-2 box-border text-sm text-white font-sans">
                  <div className="relative leading-[170%] font-medium">Upcoming</div>
                </div>
              </div>
              <div className="relative leading-[170%] font-medium text-[#3a3a3a] self-stretch">
                Multi-day workshops focusing on specific STEM topics
              </div>
              <div className="flex flex-row items-center justify-start gap-1 text-[#f55c38]">
                <div className="relative leading-[170%] font-medium">Learn More</div>
                <img
                  className="w-6 h-6 relative overflow-hidden flex-shrink-0"
                  alt=""
                  src="chevron_right.svg"
                />
              </div>
            </div>
            <div className="self-stretch bg-[#fff2f2] overflow-hidden flex flex-col items-start justify-start p-12 gap-6">
              <div className="flex flex-row items-center justify-start gap-4 text-2xl font-display">
                <div className="relative leading-[150%] font-extrabold">Mega Sprints</div>
                <div className="rounded-full bg-[#f55c38] h-[32px] flex flex-row items-center justify-center px-2 box-border text-xs text-white font-[Amazon Ember]">
                  <div className="relative leading-[170%] font-medium">Upcoming</div>
                </div>
              </div>
              <div className="self-stretch relative leading-[170%] font-medium text-[#3a3a3a]">
                Comprehensive Programs Leading to Exciting Competitive Robotics
                Challenges
              </div>
              <div className="flex flex-row items-center justify-start gap-1 text-[#f55c38]">
                <div className="relative leading-[170%] font-medium">Learn More</div>
                <img
                  className="relative w-6 h-6 overflow-hidden flex-shrink-0"
                  alt=""
                  src="chevron_right.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
<div className="absolute bottom-0 left-0 bg-[#ffad33] w-[1728px] h-[102px] text-[24px]">
        <div className="absolute top-[32px] left-[48px] flex flex-row items-center justify-start gap-[16px]">
          <img
            className="relative w-[38px] h-[38px] overflow-hidden flex-shrink-0"
            alt=""
            src="reshot-icon-molecules-YBNSD562JC 1.svg"
          />
          <div className="relative leading-[150%] font-extrabold">Innovation Hub</div>
        </div>
        <b className="absolute top-[35.5px] left-[calc(50%-59px)] text-[18px] leading-[170%] font-[AmazonEmber]">Privacy Policy</b>
        <div className="absolute top-[35px] left-[1584px] flex flex-row items-center justify-start gap-[32px]">
          <img className="w-[32px] relative h-[32px] overflow-hidden flex-shrink-0" alt="" src="Linkedin.svg" />
          <img className="w-[32px] relative h-[32px] overflow-hidden flex-shrink-0" alt="" src="Twitter.svg" />
        </div>
      </div>
      <div className="absolute top-[1914px] left-0 bg-[#29458c] w-[1728px] flex flex-col items-start justify-start p-[80px] px-[48px] box-border gap-[48px] text-white">
        <div className="w-[793px] flex flex-col items-start justify-start gap-[16px]">
          <div className="relative leading-[150%] font-extrabold">How it Works?</div>
          <div className="self-stretch relative text-[18px] leading-[170%] font-medium font-[Amazon Ember]">
            There are a few simple steps that you can take to book a sprint
            session for your students
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-8 text-[24px]">
          <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-y-12 gap-x-8">
            <div className="w-[383px] flex flex-col items-center justify-start">
              <img
                className="w-[140px] h-[140px] relative object-cover"
                alt=""
                src="Lottie flies.gif"
              />
            </div>
            <div className="w-[383px] flex flex-col items-center justify-start">
              <img
                className="w-[140px] h-[140px] relative object-cover"
                alt=""
                src="Lottie flies.gif"
              />
            </div>
            <div className="w-[383px] flex flex-col items-center justify-start">
              <img
                className="w-[140px] h-[140px] relative object-cover"
                alt=""
                src="Lottie flies.gif"
              />
            </div>
            <div className="w-[383px] flex flex-col items-center justify-start">
              <img
                className="w-[140px] h-[140px] relative object-cover"
                alt=""
                src="Lottie flies.gif"
              />
            </div>
          </div>
          <img className="w-[1276px] relative h-[24px]" alt="" src="Frame 31704.svg" />
          <div className="self-stretch flex flex-row items-start justify-start gap-[33px]">
            <div className="w-[383px] flex flex-col items-center justify-start gap-[8px]">
              <div className="relative leading-[150%] font-extrabold">
                Get to Know Innovation Hub
              </div>
              <div className="self-stretch relative text-center text-[18px] leading-[170%] font-medium font-['Amazon Ember']">
                Take a look around at what we do at Innovation Hub with the
                latest happenings or our virtual tour
              </div>
            </div>
            <div className="w-[383px] flex flex-col items-center justify-start gap-[8px]">
              <div className="relative leading-[150%] font-extrabold">
                Check Out Sprint Details
              </div>
              <div className="self-stretch relative text-center text-[18px] leading-[170%] font-medium font-['Amazon Ember']">
                Explore if the sprint fits your needs and learning goals
              </div>
            </div>
            <div className="w-[383px] flex flex-col items-center justify-start gap-[8px]">
              <div className="relative leading-[150%] font-extrabold">Book and Get Ready</div>
              <div className="self-stretch relative text-center text-[18px] leading-[170%] font-medium font-['Amazon Ember']">
                Easily find suitable slots and book via our system or call us
              </div>
            </div>
            <div className="w-[383px] flex flex-col items-center justify-start gap-[8px]">
              <div
                className="relative leading-[150%] font-extrabold"
              >{`Visit & Enjoy the Tinkering`}</div>
              <div className="self-stretch relative text-center text-[18px] leading-[170%] font-medium font-['Amazon Ember']">
                Get hands-on for the actual fun at the lab
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[3517px] left-[48px] w-[1632px] h-[800px] text-center text-[42px] text-white">
        <img className="absolute top-0 left-0 w-[1632px] h-[800px] object-cover" alt="" src="video 2.svg" />
        <div className="absolute top-12 left-[calc(50%-768px)] flex flex-col items-start justify-start gap-8">
          <div className="relative leading-[150%] font-extrabold">
            Take a Sneak Peak at AFE Innovation Hub
          </div>
          <div className="rounded-full bg-white h-16 flex flex-row items-center justify-center px-8 py-2 text-lg text-[#29458c] font-[Amazon Ember]">
            <div className="relative leading-[170%] font-medium">Start Virtual Tour</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;