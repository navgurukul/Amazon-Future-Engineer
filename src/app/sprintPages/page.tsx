import type { NextPage } from 'next';
import { useCallback } from 'react';
import styles from './_components/sprintPages.module.css';
import Image from 'next/image';


const NanoSprints: NextPage = () => {

    const onFrameContainerClick = useCallback(() => {
        // Add your code here
    }, []);

    return (
        <div className={styles.nanoSprints}>
            <div className={styles.frequentlyAskedQuestions}>Frequently Asked Questions</div>
            <div className={styles.story}>
                <div className={styles.fellowships}>Fellowships</div>
                <div className={styles.faqQuestion}>
                    <div className={styles.question}>
                        <b className={styles.whatIsThe}>What is the purpose of the Code India Fellowship?</b>
                        <div className={styles.codeIndiaFellowship}>Code India Fellowship aims to transform the learning and life outcomes of young women/girl students studying in government high schools by placing fellows. CIF will enable young women to have jobs or admission to advanced training opportunities by the time they finish their school education.</div>
                    </div>
                    <img className={styles.removeCircleOutlineIcon} alt="" src="remove_circle_outline.svg" />
                </div>
                <div className={styles.storyChild} />
                <div className={styles.faqQuestion1}>
                    <div className={styles.question}>
                        <b className={styles.whatIsThe}>What will a Code India Fellow do?</b>
                        <div className={styles.codeIndiaFellowship1}>Code India Fellowship aims to transform the learning and life outcomes of young women/girl students studying in government high schools by placing fellows. CIF will enable young women to have jobs or admission to advanced training opportunities by the time they finish their school education.</div>
                    </div>
                    <img className={styles.removeCircleOutlineIcon} alt="" src="add_circle_outline.svg" />
                </div>
                <div className={styles.storyChild} />
                <div className={styles.faqQuestion1}>
                    <div className={styles.question}>
                        <b className={styles.whatIsThe}>What will a Code India Fellow do?</b>
                        <div className={styles.codeIndiaFellowship1}>Code India Fellowship aims to transform the learning and life outcomes of young women/girl students studying in government high schools by placing fellows. CIF will enable young women to have jobs or admission to advanced training opportunities by the time they finish their school education.</div>
                    </div>
                    <img className={styles.removeCircleOutlineIcon} alt="" src="@/assets/images/sprints/add_circle_outline.svg" />
                </div>
                <div className={styles.storyChild} />
                <div className={styles.faqQuestion1}>
                    <div className={styles.question}>
                        <b className={styles.whatIsThe}>What will a Code India Fellow do?</b>
                        <div className={styles.codeIndiaFellowship1}>Code India Fellowship aims to transform the learning and life outcomes of young women/girl students studying in government high schools by placing fellows. CIF will enable young women to have jobs or admission to advanced training opportunities by the time they finish their school education.</div>
                    </div>
                    <img className={styles.removeCircleOutlineIcon} alt="" src="@/assets/images/sprints/add_circle_outline.svg" />
                </div>
                <div className={styles.storyChild} />
                <div className={styles.faqQuestion1}>
                    <div className={styles.question}>
                        <b className={styles.whatIsThe}>What will a Code India Fellow do?</b>
                        <div className={styles.codeIndiaFellowship1}>Code India Fellowship aims to transform the learning and life outcomes of young women/girl students studying in government high schools by placing fellows. CIF will enable young women to have jobs or admission to advanced training opportunities by the time they finish their school education.</div>
                    </div>
                    <img className={styles.removeCircleOutlineIcon} alt="" src="@/assets/images/sprints/add_circle_outline.svg" />
                </div>
                <div className={styles.storyChild} />
                <div className={styles.faqQuestion1}>
                    <div className={styles.question}>
                        <b className={styles.whatIsThe}>What will a Code India Fellow do?</b>
                        <div className={styles.codeIndiaFellowship1}>Code India Fellowship aims to transform the learning and life outcomes of young women/girl students studying in government high schools by placing fellows. CIF will enable young women to have jobs or admission to advanced training opportunities by the time they finish their school education.</div>
                    </div>
                    <img className={styles.removeCircleOutlineIcon} alt="" src="@/assets/images/sprints/add_circle_outline.svg" />
                </div>
                <div className={styles.storyChild} />
                <div className={styles.faqQuestion1}>
                    <div className={styles.question}>
                        <b className={styles.whatIsThe}>What will a Code India Fellow do?</b>
                        <div className={styles.codeIndiaFellowship1}>Code India Fellowship aims to transform the learning and life outcomes of young women/girl students studying in government high schools by placing fellows. CIF will enable young women to have jobs or admission to advanced training opportunities by the time they finish their school education.</div>
                    </div>
                    <img className={styles.removeCircleOutlineIcon} alt="" src="@/assets/images/sprints/add_circle_outline.svg" />
                </div>
                <div className={styles.storyChild3} />
            </div>
            <div className={styles.nanoSprintsOneDay}>Nano Sprints: One-Day Introductory Sessions to Spark Interest and Build Aspiration </div>
            <div className={styles.whyIsNano}>Why is Nano a Perfect Fit for Your Class? </div>
            <div className={styles.whyScheduleANanoSprintParent}>
                <div className={styles.whyScheduleA}>Why Schedule a Nano Sprint? </div>
                <div className={styles.nanoSprintsAre}>Nano Sprints are designed to fuel students' curiosity and enthusiasm. They provide an engaging and hands-on introduction to robotics and AI. This program is an excellent way for schools and teachers to enrich their STEM curriculum and inspire the next generation of innovators. </div>
            </div>
            <div className={styles.readyToInspireParent}>
                <div className={styles.whyScheduleA}>Ready to Inspire? </div>
                <div className={styles.nanoSprintsAre}>Book a Nano Sprint today and give your students an exciting glimpse into the future of technology. Contact us now to schedule your session and start a transformative STEM journey! </div>
            </div>
            <div className={styles.frameParent}>
                <div className={styles.vectorParent}>
                    <img className={styles.vectorIcon} alt="" src="assets/images/sprints/Vector.png" />
                    <div className={styles.innovationHub}>Nano Sprints</div>
                </div>
                {/* <div className={styles.vectorGroup} onClick={onFrameContainerClick}>
                    <img className={styles.vectorIcon1} alt="" src="Vector.png" />
                    <div className={styles.miniSprints}>Mini Sprints</div>
                </div> */}
                <div className={styles.vectorContainer}>
                    <img className={styles.vectorIcon1} alt="" src="assets/images/sprints/Vector.png" />
                    <div className={styles.miniSprints}>Mega Sprints</div>
                </div>
            </div>
            <div className={styles.frameGroup}>
                <div className={styles.frameContainer}>
                    <div className={styles.nanoSprintsParent}>
                        <div className={styles.whyScheduleA}>Nano Sprints</div>
                        <div className={styles.oneDaySessions}>One day sessions designed to spark interest and build aspiration</div>
                    </div>
                    <div className={styles.bookASessionWrapper}>
                        <div className={styles.bookASession}>Book a Session</div>
                    </div>
                </div>
                <div className={styles.miniSprintsParent}>
                    <div className={styles.miniSprints1}>Mini Sprints</div>
                    <div className={styles.codeIndiaFellowship}>Multi-day workshops focusing on specific STEM topics</div>
                    <div className={styles.knowMoreWrapper}>
                        <div className={styles.bookASession}>Know More</div>
                    </div>
                </div>
                <div className={styles.megaSprintsParent}>
                    <div className={styles.miniSprints1}>Mega Sprints</div>
                    <div className={styles.codeIndiaFellowship}>Multi-day workshops focusing on specific STEM topics</div>
                    <div className={styles.knowMoreWrapper}>
                        <div className={styles.bookASession}>Know More</div>
                    </div>
                </div>
            </div>
            <div className={styles.rectangleParent}>
                <img className={styles.frameChild} alt="" src="./assets/images/sprints/Rectangle 4.png" />
                <img className={styles.frameChild} alt="" src="./assets/images/sprints/Rectangle 3.png" />
            </div>
            <div className={styles.rectangleGroup}>
                <img className={styles.frameChild} alt="" src="assets/images/sprints/Rectangle 4.png" />
                <img className={styles.frameChild} alt="" src="assets/images/sprints/Rectangle 3.png" />
                <img className={styles.frameChild} alt="" src="assets/images/sprints/Rectangle 5.png" />
            </div>
            <div className={styles.nanoSprintsInner}>
                <div className={styles.frameDiv}>
                    <div className={styles.reshotIconSearchTimeScheduParent}>
                        <div className={styles.reshotIconSearchTimeSchedu}>
                            <div className={styles.group}>
                                <img className={styles.groupIcon} alt="" src="assets/images/sprints/Group.svg" />
                                <img className={styles.groupIcon1} alt="" src="assets/images/sprints/Group.svg" />
                                <img className={styles.groupIcon2} alt="" src="assets/images/sprints/Group.svg" />
                                <img className={styles.groupIcon3} alt="" src="assets/images/sprints/Group.svg" />
                                <img className={styles.groupIcon4} alt="" src="assets/images/sprints/Group.svg" />
                                <div className={styles.group1}>
                                    <div className={styles.group2}>
                                        <img className={styles.groupIcon5} alt="" src="assets/images/sprints/Group.svg" />
                                        <img className={styles.groupIcon6} alt="" src="assets/images/sprints/Group.svg" />
                                    </div>
                                    <img className={styles.groupIcon7} alt="" src="assets/images/sprints/Group.svg" />
                                    <div className={styles.group3}>
                                        <img className={styles.groupIcon8} alt="" src="assets/images/sprints/Group.svg" />
                                        <img className={styles.groupIcon9} alt="" src="assets/images/sprints/Group.svg" />
                                    </div>
                                    <img className={styles.groupIcon10} alt="" src="assets/images/sprints/Group.svg" />
                                </div>
                                <img className={styles.groupIcon11} alt="" src="assets/images/sprints/Group.svg" />
                                <img className={styles.groupIcon12} alt="" src="assets/images/sprints/Group.svg" />
                                <img className={styles.groupIcon13} alt="" src="assets/images/sprints/Group.svg" />
                                <img className={styles.groupIcon14} alt="" src="assets/images/sprints/Group.svg" />
                                <img className={styles.groupIcon15} alt="" src="assets/images/sprints/Group.svg" />
                            </div>
                        </div>
                        <div className={styles.durationParent}>
                            <b className={styles.whatIsThe}>Duration</b>
                            <div className={styles.bookASession}>1 Day (3 hours)</div>
                        </div>
                    </div>
                    <div className={styles.reshotIconSearchTimeScheduParent}>
                        <img className={styles.reshotIconSearchTimeSchedu} alt="" src="assets/images/sprints/reshot-icon-student-boy-L9ESXQZ3WU.svg" />
                        <div className={styles.durationParent}>
                            <b className={styles.whatIsThe}>Batch Strength</b>
                            <div className={styles.bookASession}>30 to 50 students per session</div>
                        </div>
                    </div>
                    {/* <div className={styles.frameParent1}>
                        <div className={styles.bookNanoSprintTodayWrapper} onClick={onFrameContainerClick}>
                            <div className={styles.bookASession}>Book Nano Sprint Today</div>
                        </div>
                        <div className={styles.bookOverCallWrapper} onClick={onFrameContainerClick}>
                            <div className={styles.bookASession}>Book over Call</div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className={styles.groupDiv}>
                <div className={styles.ellipseParent}>
                    <div className={styles.ellipseDiv} />
                    <div className={styles.rectangleDiv} />
                    <div className={styles.ellipseDiv} />
                </div>
                <div className={styles.polygonParent}>
                    <img className={styles.polygonIcon} alt="" src="assets/images/sprints/Polygon 1.svg" />
                    <div className={styles.firstVisitParent}>
                        <b className={styles.firstVisit}>First Visit</b>
                        <div className={styles.codeIndiaFellowship}>A great starting point for schools exploring the AFE Innovation Hub for the first time</div>
                    </div>
                </div>
                <div className={styles.polygonGroup}>
                    <img className={styles.frameChild3} alt="" src="assets/images/sprints/Polygon 1.svg" />
                    <div className={styles.firstVisitParent}>
                        <b className={styles.firstVisit}>Getting a Taste of AFE</b>
                        <div className={styles.codeIndiaFellowship}>Discover exciting opportunities and resources at AFE Innovation Hub</div>
                    </div>
                </div>
                <div className={styles.polygonContainer}>
                    <img className={styles.polygonIcon} alt="" src="assets/images/sprints/Polygon 1.svg" />
                    <div className={styles.firstVisitParent}>
                        <b className={styles.firstVisit}>One-Day Skill-Building</b>
                        <div className={styles.codeIndiaFellowship}>Gain foundational skills and insights into robotics and AI in just one day</div>
                    </div>
                </div>
                <div className={styles.polygonParent1}>
                    <img className={styles.frameChild5} alt="" src="assets/images/sprints/Polygon 1.svg" />
                    <img className={styles.starIcon} alt="" src="assets/images/sprints/Star 1.svg" />
                    <div className={styles.inspiringFutureAspirationsParent}>
                        <b className={styles.firstVisit}>Inspiring Future Aspirations</b>
                        <div className={styles.codeIndiaFellowship}> Spark curiosity and inspire students to dive deeper into STEM fields</div>
                    </div>
                </div>
            </div>
            <div className={styles.haveAnyQuestionsParent}>
                <div className={styles.whyScheduleA}>Have Any Questions?</div>
                <b className={styles.reachOutToContainer}>
                    <span>{`Reach out to us at `}</span>
                    <span className={styles.afeinnovationihubcom}>afeinnovation@ihub.com</span>
                </b>
            </div>
            <div className={styles.frameParent2}>
                <div className={styles.reshotIconMoleculesYbnsd562Parent}>
                    <img className={styles.reshotIconMoleculesYbnsd562} alt="" src="assets/images/sprints/reshot-icon-molecules-YBNSD562JC 1.svg" />
                    <div className={styles.innovationHub}>Innovation Hub</div>
                </div>
                <b className={styles.privacyPolicy}>Privacy Policy</b>
                <div className={styles.linkedinParent}>
                    <img className={styles.linkedinIcon} alt="" src="assets/images/sprints/Linkedin.svg" />
                    <img className={styles.linkedinIcon} alt="" src="assets/images/sprints/Twitter.svg" />
                </div>
            </div>
            <div className={styles.homeSprintsContainer}>
                <span className={styles.home}>
                    <b className={styles.home1}>Home</b>
                </span>
                <span className={styles.sprints}>
                    <span className={styles.home}>{` / `}</span>
                    <span className={styles.sprints1}>Sprints</span>
                </span>
            </div>
            <div className={styles.header}>
                <div className={styles.frameParent3}>
                    <div className={styles.frameParent4}>
                        <div className={styles.engWrapper}>
                            <div className={styles.eng}>Eng</div>
                        </div>
                        <div className={styles.wrapper}>
                            <div className={styles.eng}>ಅಇಈ</div>
                        </div>
                    </div>
                    <img className={styles.ellipseIcon} alt="" src="assets/images/sprints/Ellipse 1.png" />
                </div>
                <img className={styles.reshotIconMoleculesYbnsd5621} alt="" src="assets/images/sprints/reshot-icon-molecules-YBNSD562JC 1.svg" />
            </div>
        </div>);
};

export default NanoSprints;
