import styles from "./_components/homePages.module.css";
import type { NextPage } from "next";
import { useCallback } from "react";

const HomePage: NextPage = () => {
  const onFrameContainerClick = useCallback(() => {
    // Add your code here
  }, []);

  return (
    <div className={styles.homepage}>
      <div className={styles.frequentlyAskedQuestions}>
        Frequently Asked Questions
      </div>
      <div className={styles.story}>
        <div className={styles.fellowships}>Fellowships</div>
        <div className={styles.faqQuestion}>
          <div className={styles.question}>
            <b className={styles.whatIsThe}>
              What is the purpose of the Code India Fellowship?
            </b>
            <div className={styles.codeIndiaFellowship}>
              Code India Fellowship aims to transform the learning and life
              outcomes of young women/girl students studying in government high
              schools by placing fellows. CIF will enable young women to have
              jobs or admission to advanced training opportunities by the time
              they finish their school education.
            </div>
          </div>
          <img
            className={styles.removeCircleOutlineIcon}
            alt=""
            src="remove_circle_outline.svg"
          />
        </div>
        <div className={styles.storyChild} />
        <div className={styles.faqQuestion1}>
          <div className={styles.question}>
            <b className={styles.whatIsThe}>
              What will a Code India Fellow do?
            </b>
            <div className={styles.codeIndiaFellowship1}>
              Code India Fellowship aims to transform the learning and life
              outcomes of young women/girl students studying in government high
              schools by placing fellows. CIF will enable young women to have
              jobs or admission to advanced training opportunities by the time
              they finish their school education.
            </div>
          </div>
          <img
            className={styles.removeCircleOutlineIcon}
            alt=""
            src="add_circle_outline.svg"
          />
        </div>
        <div className={styles.storyChild} />
        <div className={styles.faqQuestion1}>
          <div className={styles.question}>
            <b className={styles.whatIsThe}>
              What will a Code India Fellow do?
            </b>
            <div className={styles.codeIndiaFellowship1}>
              Code India Fellowship aims to transform the learning and life
              outcomes of young women/girl students studying in government high
              schools by placing fellows. CIF will enable young women to have
              jobs or admission to advanced training opportunities by the time
              they finish their school education.
            </div>
          </div>
          <img
            className={styles.removeCircleOutlineIcon}
            alt=""
            src="add_circle_outline.svg"
          />
        </div>
        <div className={styles.storyChild} />
        <div className={styles.faqQuestion1}>
          <div className={styles.question}>
            <b className={styles.whatIsThe}>
              What will a Code India Fellow do?
            </b>
            <div className={styles.codeIndiaFellowship1}>
              Code India Fellowship aims to transform the learning and life
              outcomes of young women/girl students studying in government high
              schools by placing fellows. CIF will enable young women to have
              jobs or admission to advanced training opportunities by the time
              they finish their school education.
            </div>
          </div>
          <img
            className={styles.removeCircleOutlineIcon}
            alt=""
            src="add_circle_outline.svg"
          />
        </div>
        <div className={styles.storyChild} />
        <div className={styles.faqQuestion1}>
          <div className={styles.question}>
            <b className={styles.whatIsThe}>
              What will a Code India Fellow do?
            </b>
            <div className={styles.codeIndiaFellowship1}>
              Code India Fellowship aims to transform the learning and life
              outcomes of young women/girl students studying in government high
              schools by placing fellows. CIF will enable young women to have
              jobs or admission to advanced training opportunities by the time
              they finish their school education.
            </div>
          </div>
          <img
            className={styles.removeCircleOutlineIcon}
            alt=""
            src="add_circle_outline.svg"
          />
        </div>
        <div className={styles.storyChild} />
        <div className={styles.faqQuestion1}>
          <div className={styles.question}>
            <b className={styles.whatIsThe}>
              What will a Code India Fellow do?
            </b>
            <div className={styles.codeIndiaFellowship1}>
              Code India Fellowship aims to transform the learning and life
              outcomes of young women/girl students studying in government high
              schools by placing fellows. CIF will enable young women to have
              jobs or admission to advanced training opportunities by the time
              they finish their school education.
            </div>
          </div>
          <img
            className={styles.removeCircleOutlineIcon}
            alt=""
            src="add_circle_outline.svg"
          />
        </div>
        <div className={styles.storyChild} />
        <div className={styles.faqQuestion1}>
          <div className={styles.question}>
            <b className={styles.whatIsThe}>
              What will a Code India Fellow do?
            </b>
            <div className={styles.codeIndiaFellowship1}>
              Code India Fellowship aims to transform the learning and life
              outcomes of young women/girl students studying in government high
              schools by placing fellows. CIF will enable young women to have
              jobs or admission to advanced training opportunities by the time
              they finish their school education.
            </div>
          </div>
          <img
            className={styles.removeCircleOutlineIcon}
            alt=""
            src="add_circle_outline.svg"
          />
        </div>
        <div className={styles.storyChild3} />
      </div>
      <div className={styles.videoParent}>
        {/* <div className={styles.video} /> */}
        <video className={styles.video} autoPlay muted>
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <img
          className={styles.reshotIconMoleculesYbnsd562}
          alt=""
          src="reshot-icon-molecules-YBNSD562JC 1.svg"
        />
        <div className={styles.frameParent}>
          <div className={styles.welcomeToAmazonFutureEnginParent}>
            <div className={styles.welcomeToAmazon}>
              WELCOME TO AMAZON FUTURE ENGINEERS INNOVATION HUB
            </div>
            <div className={styles.aTinkeringLab}>
              A tinkering lab for every future engineer
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div
              className={styles.bookASessionWrapper}
              //   onClick={onFrameContainerClick}
            >
              <div className={styles.bookASession}>Book a Session</div>
            </div>
            <div className={styles.takeAVirtualTourWrapper}>
              <div className={styles.bookASession}>Take a Virtual Tour</div>
            </div>
          </div>
        </div>
        <div
          className={styles.loginWrapper}
          //  onClick={onFrameContainerClick}
        >
          <div className={styles.bookASession}>Login</div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.engWrapper}>
            <div className={styles.eng}>Eng</div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.eng}>ಅಇಈ</div>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameParent1}>
          <div className={styles.nanoSprintsParent}>
            <div className={styles.welcomeToAmazon}>Nano Sprints</div>
            <div className={styles.oneDaySessions}>
              One day sessions designed to spark interest and build aspiration
            </div>
          </div>
          <div className={styles.bookASessionContainer}>
            <div className={styles.bookASession}>Book a Session</div>
          </div>
        </div>
        <div className={styles.miniSprintsParent}>
          <div className={styles.miniSprints}>Mini Sprints</div>
          <div className={styles.codeIndiaFellowship}>
            Multi-day workshops focusing on specific STEM topics
          </div>
          <div className={styles.knowMoreWrapper}>
            <div className={styles.bookASession}>Know More</div>
          </div>
        </div>
        <div className={styles.megaSprintsParent}>
          <div className={styles.miniSprints}>Mega Sprints</div>
          <div className={styles.codeIndiaFellowship}>
            Multi-day workshops focusing on specific STEM topics
          </div>
          <div className={styles.knowMoreWrapper}>
            <div className={styles.bookASession}>Know More</div>
          </div>
        </div>
      </div>
      <div className={styles.haveAnyQuestionsParent}>
        <div className={styles.welcomeToAmazon}>Have Any Questions?</div>
        <b className={styles.reachOutToContainer}>
          <span>{`Reach out to us at `}</span>
          <span className={styles.afeinnovationihubcom}>
            afeinnovation@ihub.com
          </span>
        </b>
      </div>
      <div className={styles.frameParent2}>
        <div className={styles.whatIsTheAfeInnovationHubParent}>
          <div className={styles.innovationHub}>
            What is the AFE Innovation Hub?
          </div>
          <div className={styles.afeStudioIs}>
            AFE Studio is a state-of-the-art Robotics and AI lab dedicated to
            empowering over 4,000 students by 2024. Our lab offers an
            unparalleled opportunity for students to dive into the fascinating
            realms of computer science and robotics. Designed with innovation in
            mind, AFE Studio provides an interactive and immersive environment
            where students can experiment, learn, and grow
          </div>
        </div>
        <img className={styles.frameChild} alt="" src="Rectangle 1.png" />
        <div className={styles.rectangleParent}>
          <img className={styles.frameItem} alt="" src="Rectangle 4.svg" />
          <img className={styles.frameInner} alt="" src="Rectangle 3.svg" />
          <img className={styles.frameItem} alt="" src="Rectangle 5.svg" />
        </div>
      </div>
      <div className={styles.latestFromTheInnovationHubParent}>
        <div className={styles.welcomeToAmazon}>
          Latest From The Innovation Hub
        </div>
        <img className={styles.frameChild} alt="" src="Rectangle 1.png" />
        <div className={styles.frameWrapper}>
          <div className={styles.chevronLeftParent}>
            <img
              className={styles.chevronLeftIcon}
              alt=""
              src="chevron_left.svg"
            />
            <img className={styles.frameChild2} alt="" src="Rectangle 4.svg" />
            <img className={styles.frameChild2} alt="" src="Rectangle 5.svg" />
            <img className={styles.frameChild4} alt="" src="Rectangle 3.svg" />
            <img
              className={styles.chevronLeftIcon}
              alt=""
              src="chevron_right.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameParent3}>
        <div className={styles.valueDrivenProgramsParent}>
          <div className={styles.welcomeToAmazon}>Value - Driven programs</div>
          <div className={styles.afeStudioIs}>
            Teachers can easily schedule lab sessions and integrate Maker's
            Space into their lesson plans/ Curriculum. Pick a program and embark
            on a transformative STEM journey with your students
          </div>
        </div>
        <div className={styles.frameParent4}>
          <div className={styles.frameParent5}>
            <div className={styles.frameParent6}>
              <div className={styles.nanoSprintsGroup}>
                <div className={styles.innovationHub}>Nano Sprints</div>
                <div className={styles.activeWrapper}>
                  <div className={styles.bookASession}>Active</div>
                </div>
              </div>
              <div className={styles.codeIndiaFellowship}>
                One day sessions designed to spark interest and build aspiration
              </div>
              <div className={styles.reshotIconSearchTimeScheduParent}>
                <div className={styles.reshotIconSearchTimeSchedu}>
                  <div className={styles.group}>
                    <img className={styles.groupIcon} alt="" src="Group.svg" />
                    <img className={styles.groupIcon1} alt="" src="Group.svg" />
                    <img className={styles.groupIcon2} alt="" src="Group.svg" />
                    <img className={styles.groupIcon3} alt="" src="Group.svg" />
                    <img className={styles.groupIcon4} alt="" src="Group.svg" />
                    <div className={styles.group1}>
                      <div className={styles.group2}>
                        <img
                          className={styles.groupIcon5}
                          alt=""
                          src="Group.svg"
                        />
                        <img
                          className={styles.groupIcon6}
                          alt=""
                          src="Group.svg"
                        />
                      </div>
                      <img
                        className={styles.groupIcon7}
                        alt=""
                        src="Group.svg"
                      />
                      <div className={styles.group3}>
                        <img
                          className={styles.groupIcon8}
                          alt=""
                          src="Group.svg"
                        />
                        <img
                          className={styles.groupIcon9}
                          alt=""
                          src="Group.svg"
                        />
                      </div>
                      <img
                        className={styles.groupIcon10}
                        alt=""
                        src="Group.svg"
                      />
                    </div>
                    <img
                      className={styles.groupIcon11}
                      alt=""
                      src="Group.svg"
                    />
                    <img
                      className={styles.groupIcon12}
                      alt=""
                      src="Group.svg"
                    />
                    <img
                      className={styles.groupIcon13}
                      alt=""
                      src="Group.svg"
                    />
                    <img
                      className={styles.groupIcon14}
                      alt=""
                      src="Group.svg"
                    />
                    <img
                      className={styles.groupIcon15}
                      alt=""
                      src="Group.svg"
                    />
                  </div>
                </div>
                <div className={styles.day3HoursWrapper}>
                  <div className={styles.bookASession}>1 Day (3 hours)</div>
                </div>
              </div>
              <div className={styles.reshotIconSearchTimeScheduParent}>
                <img
                  className={styles.reshotIconSearchTimeSchedu}
                  alt=""
                  src="reshot-icon-student-boy-L9ESXQZ3WU.svg"
                />
                <div className={styles.bookASession}>
                  30 to 50 students per session
                </div>
              </div>
            </div>
            {/* <div
              className={styles.bookASessionFrame}
              onClick={onFrameContainerClick}
            >
              <div className={styles.bookASession}>Book a Session</div>
            </div> */}
            <img className={styles.vectorIcon} alt="" src="Vector.svg" />
          </div>
          <div className={styles.frameParent7}>
            <div className={styles.frameParent8}>
              <div className={styles.nanoSprintsGroup}>
                <div className={styles.innovationHub}>Mini Sprints</div>
                <div className={styles.upcomingWrapper}>
                  <div className={styles.bookASession}>Upcoming</div>
                </div>
              </div>
              <div className={styles.comprehensiveProgramsLeading}>
                Multi-day workshops focusing on specific STEM topics
              </div>
              <div className={styles.learnMoreParent}>
                <div className={styles.bookASession}>Learn More</div>
                <img
                  className={styles.removeCircleOutlineIcon}
                  alt=""
                  src="chevron_right.svg"
                />
              </div>
            </div>
            <div className={styles.frameParent9}>
              <div className={styles.nanoSprintsGroup}>
                <div className={styles.innovationHub}>Mega Sprints</div>
                <div className={styles.upcomingWrapper}>
                  <div className={styles.bookASession}>Upcoming</div>
                </div>
              </div>
              <div className={styles.comprehensiveProgramsLeading}>
                Comprehensive Programs Leading to Exciting Competitive Robotics
                Challenges
              </div>
              <div className={styles.learnMoreParent}>
                <div className={styles.bookASession}>Learn More</div>
                <img
                  className={styles.removeCircleOutlineIcon}
                  alt=""
                  src="chevron_right.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent10}>
        <div className={styles.reshotIconMoleculesYbnsd562Parent}>
          <img
            className={styles.reshotIconMoleculesYbnsd5621}
            alt=""
            src="reshot-icon-molecules-YBNSD562JC 1.svg"
          />
          <div className={styles.innovationHub}>Innovation Hub</div>
        </div>
        <b className={styles.privacyPolicy}>Privacy Policy</b>
        <div className={styles.linkedinParent}>
          <img className={styles.linkedinIcon} alt="" src="Linkedin.svg" />
          <img className={styles.linkedinIcon} alt="" src="Twitter.svg" />
        </div>
      </div>
      <div className={styles.frameParent11}>
        <div className={styles.howItWorksParent}>
          <div className={styles.innovationHub}>How it Works?</div>
          <div className={styles.oneDaySessions}>
            There are a few simple steps that you can take to book a sprint
            session for your students
          </div>
        </div>
        <div className={styles.frameParent12}>
          <div className={styles.frameParent13}>
            <div className={styles.httpslottiefilescomanimatWrapper}>
              <img
                className={styles.httpslottiefilescomanimatIcon}
                alt=""
                src="Lottie flies.gif"
              />
            </div>
            <div className={styles.httpslottiefilescomanimatWrapper}>
              <img
                className={styles.httpslottiefilescomanimatIcon}
                alt=""
                src="Lottie flies.gif"
              />
            </div>
            <div className={styles.httpslottiefilescomanimatWrapper}>
              <img
                className={styles.httpslottiefilescomanimatIcon}
                alt=""
                src="Lottie flies.gif"
              />
            </div>
            <div className={styles.httpslottiefilescomanimatWrapper}>
              <img
                className={styles.httpslottiefilescomanimatIcon}
                alt=""
                src="Lottie flies.gif"
              />
            </div>
          </div>
          <img className={styles.frameIcon} alt="" src="Frame 31704.svg" />
          <div className={styles.frameParent14}>
            <div className={styles.getToKnowInnovationHubParent}>
              <div className={styles.innovationHub}>
                Get to Know Innovation Hub
              </div>
              <div className={styles.takeALook}>
                Take a look around at what we do at Innovation Hub with the
                latest happenings or our virtual tour
              </div>
            </div>
            <div className={styles.getToKnowInnovationHubParent}>
              <div className={styles.innovationHub}>
                Check Out Sprint Details
              </div>
              <div className={styles.takeALook}>
                Explore if the sprint fits your needs and learning goals
              </div>
            </div>
            <div className={styles.getToKnowInnovationHubParent}>
              <div className={styles.innovationHub}>Book and Get Ready</div>
              <div className={styles.takeALook}>
                Easily find suitable slots and book via our system or call us
              </div>
            </div>
            <div className={styles.getToKnowInnovationHubParent}>
              <div
                className={styles.innovationHub}
              >{`Visit & Enjoy the Tinkering`}</div>
              <div className={styles.takeALook}>
                Get hands-on for the actual fun at the lab
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.videoGroup}>
        <img className={styles.videoIcon} alt="" src="video 2.svg" />
        <div className={styles.takeASneakPeakAtAfeInnovParent}>
          <div className={styles.innovationHub}>
            Take a Sneak Peak at AFE Innovation Hub
          </div>
          <div className={styles.startVirtualTourWrapper}>
            <div className={styles.bookASession}>Start Virtual Tour</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;









// import type { NextPage } from "next";
// import { useCallback } from "react";
// import "../globals.css";
// import styles from "./_components/homePages.module.css";

// const HomePage: NextPage = () => {
//   const onFrameContainerClick = useCallback(() => {
//     // Add your code here
//   }, []);
//   return (
//     <div className={styles.homepage}>
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 line-height-150% font-bold text-center hidden">
//         Frequently Asked Questions
//       </div>
//       <div className="relative font-size-2xl line-height-150% font-bold font-amazon-ember-display">
//         Fellowships
//       </div>
//       <div className="relative line-height-170%">
//         <b className="relative line-height-170%">
//           What is the purpose of the Code India Fellowship?
//         </b>
//         <div className="align-self-stretch relative line-height-170% font-weight-500">
//           Code India Fellowship aims to transform the learning and life outcomes
//           of young women/girl students studying in government high schools by
//           placing fellows. CIF will enable young women to have jobs or admission
//           to advanced training opportunities by the time they finish their
//           school education.
//         </div>
//       </div>
//       <img
//         className="removeCircleOutlineIcon"
//         alt=""
//         src="remove_circle_outline.svg"
//       />
//       <div className="align-self-stretch relative border-t border-gray-300 h-1"></div>
//       <div className="align-self-stretch flex flex-row items-center justify-center gap-4">
//         <div className="flex flex-col items-start justify-start gap-4">
//           <b className="relative line-height-170%">
//             What will a Code India Fellow do?
//           </b>
//           <div className="w-759 relative line-height-170% font-family-noto-sans text-gray-800 hidden">
//             Code India Fellowship aims to transform the learning and life
//             outcomes of young women/girl students studying in government high
//             schools by placing fellows. CIF will enable young women to have jobs
//             or admission to advanced training opportunities by the time they
//             finish their school education.
//           </div>
//         </div>
//         <img
//           className="removeCircleOutlineIcon"
//           alt=""
//           src="add_circle_outline.svg"
//         />
//       </div>
//       <div className="align-self-stretch relative border-t border-gray-300 h-1"></div>
//       <div className="align-self-stretch flex flex-row items-center justify-center gap-4">
//         <div className="flex flex-col items-start justify-start gap-4">
//           <b className="relative line-height-170%">
//             What will a Code India Fellow do?
//           </b>
//           <div className="w-759 relative line-height-170% font-family-noto-sans text-gray-800 hidden">
//             Code India Fellowship aims to transform the learning and life
//             outcomes of young women/girl students studying in government high
//             schools by placing fellows. CIF will enable young women to have jobs
//             or admission to advanced training opportunities by the time they
//             finish their school education.
//           </div>
//         </div>
//         <img
//           className="removeCircleOutlineIcon"
//           alt=""
//           src="add_circle_outline.svg"
//         />
//       </div>
//       <div className="align-self-stretch relative border-t border-gray-300 h-1"></div>
//       <div className="align-self-stretch flex flex-row items-center justify-center gap-4">
//         <div className="flex flex-col items-start justify-start gap-4">
//           <b className="relative line-height-170%">
//             What will a Code India Fellow do?
//           </b>
//           <div className="w-759 relative line-height-170% font-family-noto-sans text-gray-800 hidden">
//             Code India Fellowship aims to transform the learning and life
//             outcomes of young women/girl students studying in government high
//             schools by placing fellows. CIF will enable young women to have jobs
//             or admission to advanced training opportunities by the time they
//             finish their school education.
//           </div>
//         </div>
//         <img
//           className="removeCircleOutlineIcon"
//           alt=""
//           src="add_circle_outline.svg"
//         />
//       </div>
//       <div className="align-self-stretch relative border-t border-gray-300 h-1"></div>
//       <div className="align-self-stretch flex flex-row items-center justify-center gap-4">
//         <div className="flex flex-col items-start justify-start gap-4">
//           <b className="relative line-height-170%">
//             What will a Code India Fellow do?
//           </b>
//           <div className="w-759 relative line-height-170% font-family-noto-sans text-gray-800 hidden">
//             Code India Fellowship aims to transform the learning and life
//             outcomes of young women/girl students studying in government high
//             schools by placing fellows. CIF will enable young women to have jobs
//             or admission to advanced training opportunities by the time they
//             finish their school education.
//           </div>
//         </div>
//         <img
//           className="removeCircleOutlineIcon"
//           alt=""
//           src="add_circle_outline.svg"
//         />
//       </div>
//       <div className="align-self-stretch relative border-t border-gray-300 h-1"></div>
//       <div className="align-self-stretch flex flex-row items-center justify-center gap-4">
//         <div className="flex flex-col items-start justify-start gap-4">
//           <b className="relative line-height-170%">
//             What will a Code India Fellow do?
//           </b>
//           <div className="w-759 relative line-height-170% font-family-noto-sans text-gray-800 hidden">
//             Code India Fellowship aims to transform the learning and life
//             outcomes of young women/girl students studying in government high
//             schools by placing fellows. CIF will enable young women to have jobs
//             or admission to advanced training opportunities by the time they
//             finish their school education.
//           </div>
//         </div>
//         <img
//           className="removeCircleOutlineIcon"
//           alt=""
//           src="add_circle_outline.svg"
//         />
//       </div>
//       <div className="align-self-stretch relative border-t border-gray-300 h-1"></div>
//       <div className="align-self-stretch flex flex-row items-center justify-center gap-4">
//         <div className="flex flex-col items-start justify-start gap-4">
//           <b className="relative line-height-170%">
//             What will a Code India Fellow do?
//           </b>
//           <div className="w-759 relative line-height-170% font-family-noto-sans text-gray-800 hidden">
//             Code India Fellowship aims to transform the learning and life
//             outcomes of young women/girl students studying in government high
//             schools by placing fellows. CIF will enable young women to have jobs
//             or admission to advanced training opportunities by the time they
//             finish their school education.
//           </div>
//         </div>
//         <img
//           className="removeCircleOutlineIcon"
//           alt=""
//           src="add_circle_outline.svg"
//         />
//       </div>
//       <div className="align-self-stretch relative border-t border-gray-300 h-1 w-800 hidden"></div>
//       <div className="absolute top-0 left-0 box-shadow-sm bg-gradient-to-b from-black-800 to-black-0 w-full h-full">
//         {/* <div className={styles.video} /> */}
//         <video className="video" autoPlay muted>
//           <source src="video.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <img
//           className="absolute top-48 left-48 w-72 h-72"
//           alt=""
//           src="reshot-icon-molecules-YBNSD562JC 1.svg"
//         />
//         <div className="absolute top-200 left-48 w-1215 flex flex-col items-start justify-start gap-48 text-left font-amazon-ember-display">
//           <div className="align-self-stretch flex flex-col items-start justify-start gap-16">
//             <h2 className="align-self-stretch line-height-150% font-bold">
//               WELCOME TO AMAZON FUTURE ENGINEERS INNOVATION HUB
//             </h2>
//             <h1 className="text-3xl line-height-150% font-bold">
//               A tinkering lab for every future engineer
//             </h1>
//           </div>
//           <div className="flex flex-row items-center justify-center gap-32 text-center text-white font-amazon-ember">
//             <div className="border-radius-100 bg-red-500 h-56 flex flex-row items-center justify-center p-8 px-32 box-sizing-border-box cursor-pointer">
//               <span className="line-height-170% font-weight-500">
//                 Book a Session
//               </span>
//             </div>
//             <div className="border-radius-100 bg-gray-200 h-56 flex flex-row items-center justify-center p-8 px-32 box-sizing-border-box cursor-pointer">
//               <span className="line-height-170% font-weight-500 text-red-500">
//                 Take a Virtual Tour
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-48 left-1569 border-radius-100 bg-gray-200 h-56 flex flex-row items-center justify-center p-8 px-32 box-sizing-border-box cursor-pointer font-size-18 text-red-500">
//           <span className="line-height-170% font-weight-500">Login</span>
//         </div>
//         <div className="absolute top-52 left-1407 border-radius-100 bg-gray-300 h-48 flex flex-row items-center justify-center p-8 box-sizing-border-box gap-4 font-size-14 text-white">
//           <div className="border-radius-100 bg-red-500 h-32 flex flex-row items-center justify-center p-8 px-12 box-sizing-border-box">
//             <span className="line-height-20px font-weight-500">Eng</span>
//           </div>
//           <div className="border-radius-100 h-32 flex flex-row items-center justify-center p-8 px-12 box-sizing-border-box text-gray-700">
//             <span className="line-height-20px font-weight-500">ಅಇಈ</span>
//           </div>
//         </div>
//       </div>
//       <div className="absolute top-0 left-0 w-full h-full text-center font-size-56 text-gray-200 font-amazon-ember">
//         {/* <div className={styles.video} /> */}
//         <video className="video" autoPlay muted>
//           <source src="video.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <img
//           className="absolute top-48 left-48 w-72 h-72"
//           alt=""
//           src="reshot-icon-molecules-YBNSD562JC 1.svg"
//         />
//         <div className="absolute top-200 left-48 w-1215 flex flex-col items-start justify-start gap-48 text-left font-amazon-ember-display">
//           <div className="align-self-stretch flex flex-col items-start justify-start gap-16">
//             <h2 className="align-self-stretch line-height-150% font-bold">
//               WELCOME TO AMAZON FUTURE ENGINEERS INNOVATION HUB
//             </h2>
//             <h1 className="text-3xl line-height-150% font-bold">
//               A tinkering lab for every future engineer
//             </h1>
//           </div>
//           <div className="flex flex-row items-start justify-start gap-32 text-center font-size-18 text-white font-amazon-ember">
//             <div className="border-radius-100 bg-red-500 h-56 flex flex-row items-center justify-center p-8 px-32 box-sizing-border-box cursor-pointer">
//               <span className="line-height-170% font-weight-500">
//                 Book a Session
//               </span>
//             </div>
//             <div className="border-radius-100 bg-gray-200 h-56 flex flex-row items-center justify-center p-8 px-32 box-sizing-border-box cursor-pointer">
//               <span className="line-height-170% font-weight-500 text-red-500">
//                 Take a Virtual Tour
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-48 left-1569 border-radius-100 bg-gray-200 h-56 flex flex-row items-center justify-center p-8 px-32 box-sizing-border-box cursor-pointer font-size-18 text-red-500">
//           <span className="line-height-170% font-weight-500">Login</span>
//         </div>
//         <div className="absolute top-52 left-1407 border-radius-100 bg-gray-300 h-48 flex flex-row items-center justify-center p-8 box-sizing-border-box gap-4 font-size-14 text-white">
//           <div className="border-radius-100 bg-red-500 h-32 flex flex-row items-center justify-center p-8 px-12 box-sizing-border-box">
//             <span className="line-height-20px font-weight-500">Eng</span>
//           </div>
//           <div className="border-radius-100 h-32 flex flex-row items-center justify-center p-8 px-12 box-sizing-border-box text-gray-700">
//             <span className="line-height-20px font-weight-500">ಅಇಈ</span>
//           </div>
//         </div>
//       </div>
//       <div className="absolute top-3420 left-32 w-1664 flex flex-row items-center justify-flex-start gap-32 font-size-18 font-amazon-ember hidden">
//         <div className="align-self-stretch w-815 border-radius-16 bg-gray-200 overflow-hidden flex flex-col items-start justify-between p-32 box-sizing-border-box font-size-24 font-amazon-ember-display">
//           <div className="flex flex-col items-start justify-start gap-24">
//             <h2 className="align-self-stretch line-height-150% font-bold">
//               Nano Sprints
//             </h2>
//             <p className="align-self-stretch font-size-18 line-height-170% font-weight-500 font-amazon-ember">
//               One day sessions designed to spark interest and build aspiration
//             </p>
//           </div>
//           <div className="w-240 border-radius-100 bg-white h-56 flex flex-row items-center justify-center p-8 px-16 box-sizing-border-box text-center font-size-18 color-blue-500 font-amazon-ember">
//             <span className="line-height-170% font-weight-500">
//               Book a Session
//             </span>
//           </div>
//         </div>
//         <div className="align-self-stretch flex-1 border-radius-16 bg-pink-200 overflow-hidden flex flex-col items-start justify-flex-start p-32 gap-24">
//           <h2 className="align-self-stretch line-height-150% font-bold font-amazon-ember-display">
//             Mini Sprints
//           </h2>
//           <p className="align-self-stretch line-height-170% font-weight-500">
//             Multi-day workshops focusing on specific STEM topics
//           </p>
//           <div className="w-240 border-radius-100 bg-white h-56 flex flex-row items-center justify-center p-8 px-16 box-sizing-border-box text-center color-blue-500">
//             <span className="line-height-170% font-weight-500">Know More</span>
//           </div>
//         </div>
//         <div className="align-self-stretch flex-1 border-radius-16 bg-yellow-200 overflow-hidden flex flex-col items-start justify-flex-start p-32 gap-24">
//           <h2 className="align-self-stretch line-height-150% font-bold font-amazon-ember-display">
//             Mega Sprints
//           </h2>
//           <p className="align-self-stretch line-height-170% font-weight-500">
//             Multi-day workshops focusing on specific STEM topics
//           </p>
//           <div className="w-240 border-radius-100 bg-white h-56 flex flex-row items-center justify-center p-8 px-16 box-sizing-border-box text-center color-blue-500">
//             <span className="line-height-170% font-weight-500">Know More</span>
//           </div>
//         </div>
//       </div>
//       <div className="absolute top-4917 left-48 flex flex-col items-start justify-flex-start gap-16 text-blue-500">
//         <h2 className="align-self-stretch line-height-150% font-bold">
//           Have Any Questions?
//         </h2>
//         <b className="align-self-stretch line-height-170% font-size-18 font-amazon-ember text-gray-700">
//           <span>Reach out to us at </span>
//           <span className="text-red-500">afeinnovation@ihub.com</span>
//         </b>
//       </div>
//       <div className="absolute top-1197 left-48 w-1632 flex flex-col items-start justify-flex-start gap-32 text-blue-500">
//         <div className="w-790 flex flex-col items-start justify-flex-start gap-16">
//           <h2 className="align-self-stretch line-height-150% font-bold">
//             What is the AFE Innovation Hub?
//           </h2>
//           <p className="align-self-stretch font-size-18 line-height-170% font-weight-500">
//             AFE Studio is a state-of-the-art Robotics and AI lab dedicated to
//             empowering over 4,000 students by 2024. Our lab offers an
//             unparalleled opportunity for students to dive into the fascinating
//             realms of computer science and robotics. Designed with innovation in
//             mind, AFE Studio provides an interactive and immersive environment
//             where students can experiment, learn, and grow
//           </p>
//         </div>
//         <img className="frameChild" alt="" src="Rectangle 1.png" />
//         <div className="align-self-stretch flex flex-row items-center justify-flex-start gap-16">
//           <div className="flex-1 relative max-width-100% overflow-hidden h-360 object-fit-cover">
//             <img className="frameItem" alt="" src="Rectangle 4.svg" />
//           </div>
//           <div className="relative h-360 object-fit-cover">
//             <img className="frameInner" alt="" src="Rectangle 3.svg" />
//           </div>
//           <div className="flex-1 relative max-width-100% overflow-hidden h-360 object-fit-cover">
//             <img className="frameItem" alt="" src="Rectangle 5.svg" />
//           </div>
//         </div>
//       </div>
//       <div className="absolute top-4397 left-48 w-1632 flex flex-col items-start justify-flex-start gap-32 text-blue-500">
//         <h2 className="align-self-stretch line-height-150% font-bold">
//           Latest From The Innovation Hub
//         </h2>
//         <img className="frameChild" alt="" src="Rectangle 1.png" />
//         <div className="align-self-stretch flex flex-col items-start justify-flex-start">
//           <div className="flex flex-row items-center justify-flex-start gap-16">
//             <img className="w-48 h-48" alt="" src="chevron_left.svg" />
//             <div className="flex-1 relative max-width-100% overflow-hidden max-height-100% object-fit-cover">
//               <img className="frameChild2" alt="" src="Rectangle 4.svg" />
//             </div>
//             <div className="flex-1 relative max-width-100% overflow-hidden max-height-100% object-fit-cover">
//               <img className="frameChild2" alt="" src="Rectangle 5.svg" />
//             </div>
//             <div className="align-self-stretch relative max-width-100% object-fit-cover">
//               <img className="frameChild4" alt="" src="Rectangle 3.svg" />
//             </div>
//             <img className="w-48 h-48" alt="" src="chevron_right.svg" />
//           </div>
//         </div>
//       </div>
//       <div className="absolute top-2662 left-calc-50%-816px w-1632 flex flex-col items-start justify-flex-start gap-48 text-blue-500">
//         <div className="w-765 flex flex-col items-start justify-flex-start gap-24">
//           <h2 className="align-self-stretch line-height-150% font-bold">
//             Value - Driven programs
//           </h2>
//           <p className="align-self-stretch font-size-18 line-height-170% font-weight-500">
//             Teachers can easily schedule lab sessions and integrate Maker's
//             Space into their lesson plans/ Curriculum. Pick a program and embark
//             on a transformative STEM journey with your students
//           </p>
//         </div>
//         <div className="align-self-stretch flex flex-row items-start justify-flex-start gap-16 font-size-18 color-white font-amazon-ember">
//           <div className="w-567 flex flex-col items-start justify-flex-start gap-16">
//             <div className="flex flex-row items-center justify-flex-start gap-16 font-size-24 font-amazon-ember-display">
//               <div className="border-radius-100 bg-green-500 h-32 flex flex-row items-center justify-center p-0 px-8 box-sizing-border-box font-size-14 font-amazon-ember">
//                 <span className="line-height-170% font-weight-500">Active</span>
//               </div>
//               <h2 className="align-self-stretch line-height-150% font-bold font-amazon-ember-display">
//                 Nano Sprints
//               </h2>
//             </div>
//             <p className="align-self-stretch line-height-170% font-weight-500">
//               One day sessions designed to spark interest and build aspiration
//             </p>
//             <div className="flex flex-row items-center justify-flex-start gap-8">
//               <div className="w-44 h-32">
//                 <img
//                   className="reshotIconSearchTimeSchedu"
//                   alt=""
//                   src="reshot-icon-student-boy-L9ESXQZ3WU.svg"
//                 />
//               </div>
//               <div className="flex flex-col items-start justify-flex-start">
//                 <div className="align-self-stretch line-height-170% font-weight-500">
//                   30 to 50 students per session
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="border-radius-100 bg-white h-64 flex flex-row items-center justify-center p-8 px-32 box-sizing-border-box cursor-pointer z-1 text-center color-blue-500">
//             <span className="line-height-170% font-weight-500">
//               Book a Session
//             </span>
//           </div>
//           <img className="vectorIcon" alt="" src="Vector.svg" />
//         </div>
//         <div className="align-self-stretch flex flex-col items-start justify-flex-start gap-16">
//           <div className="align-self-stretch flex flex-col items-start justify-flex-start gap-16">
//             <div className="flex flex-row items-center justify-flex-start gap-16 font-size-24 font-amazon-ember-display">
//               <div className="border-radius-100 bg-green-500 h-32 flex flex-row items-center justify-center p-0 px-8 box-sizing-border-box font-size-14 font-amazon-ember">
//                 <span className="line-height-170% font-weight-500">
//                   Upcoming
//                 </span>
//               </div>
//               <h2 className="align-self-stretch line-height-150% font-bold font-amazon-ember-display">
//                 Mini Sprints
//               </h2>
//             </div>
//             <p className="align-self-stretch line-height-170% font-weight-500 text-gray-700">
//               Multi-day workshops focusing on specific STEM topics
//             </p>
//             <div className="flex flex-row items-center justify-flex-start gap-4 color-red-500">
//               <span className="line-height-170% font-weight-500">
//                 Learn More
//               </span>
//               <img
//                 className="removeCircleOutlineIcon"
//                 alt=""
//                 src="chevron_right.svg"
//               />
//             </div>
//           </div>
//           <div className="align-self-stretch flex flex-col items-start justify-flex-start gap-16">
//             <div className="flex flex-row items-center justify-flex-start gap-16 font-size-24 font-amazon-ember-display">
//               <div className="border-radius-100 bg-green-500 h-32 flex flex-row items-center justify-center p-0 px-8 box-sizing-border-box font-size-14 font-amazon-ember">
//                 <span className="line-height-170% font-weight-500">
//                   Upcoming
//                 </span>
//               </div>
//               <h2 className="align-self-stretch line-height-150% font-bold font-amazon-ember-display">
//                 Mega Sprints
//               </h2>
//             </div>
//             <p className="align-self-stretch line-height-170% font-weight-500 text-gray-700">
//               Comprehensive Programs Leading to Exciting Competitive Robotics
//               Challenges
//             </p>
//             <div className="flex flex-row items-center justify-flex-start gap-4 color-red-500">
//               <span className="line-height-170% font-weight-500">
//                 Learn More
//               </span>
//               <img
//                 className="removeCircleOutlineIcon"
//                 alt=""
//                 src="chevron_right.svg"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="absolute bottom-0 left-0 bg-yellow-400 w-full h-102 font-size-24">
//           <div className="absolute top-32 left-48 flex flex-row items-center justify-flex-start gap-16">
//             <img
//               className="w-38 h-38"
//               alt=""
//               src="reshot-icon-molecules-YBNSD562JC 1.svg"
//             />
//             <h2 className="align-self-stretch line-height-150% font-bold">
//               Innovation Hub
//             </h2>
//           </div>
//           <p className="absolute top-35.5 left-calc-50%-59px font-size-18 line-height-170% font-amazon-ember">
//             Privacy Policy
//           </p>
//           <div className="absolute top-35 left-1584 flex flex-row items-center justify-flex-start gap-32">
//             <img className="w-32 h-32" alt="" src="Linkedin.svg" />
//             <img className="w-32 h-32" alt="" src="Twitter.svg" />
//           </div>
//         </div>
//         <div className="absolute top-1914 left-0 bg-blue-500 w-full flex flex-col items-start justify-flex-start p-80 px-48 box-sizing-border-box gap-48 text-white">
//           <div className="w-793 flex flex-col items-start justify-flex-start gap-16">
//             <h2 className="align-self-stretch line-height-150% font-bold">
//               How it Works?
//             </h2>
//             <p className="align-self-stretch font-size-18 line-height-170% font-weight-500">
//               There are a few simple steps that you can take to book a sprint
//               session for your students
//             </p>
//           </div>
//           <div className="align-self-stretch flex flex-row items-start justify-flex-start flex-wrap align-content-flex-start gap-48 px-32">
//             <div className="w-383 flex flex-col items-center justify-flex-start">
//               <img
//                 className="w-140 h-140 object-fit-cover"
//                 alt=""
//                 src="Lottie flies.gif"
//               />
//             </div>
//             <div className="w-383 flex flex-col items-center justify-flex-start">
//               <img
//                 className="w-140 h-140 object-fit-cover"
//                 alt=""
//                 src="Lottie flies.gif"
//               />
//             </div>
//             <div className="w-383 flex flex-col items-center justify-flex-start">
//               <img
//                 className="w-140 h-140 object-fit-cover"
//                 alt=""
//                 src="Lottie flies.gif"
//               />
//             </div>
//             <div className="w-383 flex flex-col items-center justify-flex-start">
//               <img
//                 className="w-140 h-140 object-fit-cover"
//                 alt=""
//                 src="Lottie flies.gif"
//               />
//             </div>
//           </div>
//           <img className="w-1276 h-24" alt="" src="Frame 31704.svg" />
//           <div className="align-self-stretch flex flex-row items-start justify-flex-start gap-33">
//             <div className="w-383 flex flex-col items-center justify-flex-start gap-8">
//               <h2 className="align-self-stretch line-height-150% font-bold">
//                 Get to Know Innovation Hub
//               </h2>
//               <p className="align-self-stretch font-size-18 line-height-170% font-weight-500 text-center">
//                 Take a look around at what we do at Innovation Hub with the
//                 latest happenings or our virtual tour
//               </p>
//             </div>
//             <div className="w-383 flex flex-col items-center justify-flex-start gap-8">
//               <h2 className="align-self-stretch line-height-150% font-bold">
//                 Check Out Sprint Details
//               </h2>
//               <p className="align-self-stretch font-size-18 line-height-170% font-weight-500 text-center">
//                 Explore if the sprint fits your needs and learning goals
//               </p>
//             </div>
//             <div className="w-383 flex flex-col items-center justify-flex-start gap-8">
//               <h2 className="align-self-stretch line-height-150% font-bold">
//                 Book and Get Ready
//               </h2>
//               <p className="align-self-stretch font-size-18 line-height-170% font-weight-500 text-center">
//                 Easily find suitable slots and book via our system or call us
//               </p>
//             </div>
//             <div className="w-383 flex flex-col items-center justify-flex-start gap-8">
//               <h2 className="align-self-stretch line-height-150% font-bold">
//                 Visit & Enjoy the Tinkering
//               </h2>
//               <p className="align-self-stretch font-size-18 line-height-170% font-weight-500 text-center">
//                 Get hands-on for the actual fun at the lab
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="absolute top-3517 left-48 w-1632 h-800 text-center font-size-42 text-white">
//         <img className="videoIcon" alt="" src="video 2.svg" />
//         <div className="absolute top-48 left-calc-50%-768px flex flex-col items-start justify-flex-start gap-32">
//           <h2 className="align-self-stretch line-height-150% font-bold">
//             Take a Sneak Peak at AFE Innovation Hub
//           </h2>
//           <div className="border-radius-100 bg-white h-64 flex flex-row items-center justify-center p-8 px-32 box-sizing-border-box font-size-18 text-blue-500">
//             <span className="line-height-170% font-weight-500">
//               Start Virtual Tour
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
