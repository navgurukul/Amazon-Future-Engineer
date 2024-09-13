import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./_components/homePages.module.css";

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
        <div  className={styles.video}/>
        <video className={styles.video} src="video.mp4" autoPlay></video>
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
        <div className={styles.loginWrapper}
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
