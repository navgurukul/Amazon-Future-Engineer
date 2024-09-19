import React from "react";
import LastPart from "./LastPart";
import styles from "./booking.module.css";

const Booking = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row gap-8">
      {/* <div className="flex-1">
        <div className="w-[633px] relative text-13xl leading-[150%] font-extrabold font-webtypestyles-h5 text-midnight-blue-main text-left inline-block">
          Why is Nano a Perfect Fit for Your Class?{" "}
        </div>
        <img src="/nanopage/Frame 31619.svg"/>
        <LastPart/>
      </div> */}
      <div className={styles.whyIsMegaSprintAPerfectFParent}>
<div className={styles.whyIsMega}>Why is Nano a Perfect Fit for Your Class?</div>
<div className={styles.frameParent}>
<div className={styles.ellipseParent}>
<div className={styles.frameChild} />
<div className={styles.frameItem} />
<div className={styles.frameChild} />
</div>
<div className={styles.polygonParent}>
<img className={styles.polygonIcon} alt="" src="/nanopage/Polygon 1.svg" />
<div className={styles.firstVisitParent}>
<b className={styles.firstVisit}>First Visit</b>
<div className={styles.diveDeeperInto}>A great starting point for schools exploring the AFE Innovation Hub for the first time</div>
</div>
</div>
<div className={styles.polygonGroup}>
<img className={styles.frameChild1} alt="" src="/nanopage/Polygon 1 (1).svg" />
<div className={styles.firstVisitParent}>
<b className={styles.firstVisit}>Getting a Taste of AFE</b>
<div className={styles.diveDeeperInto}>Discover exciting opportunities and resources at AFE Innovation Hub</div>
</div>
</div>
<div className={styles.polygonParent1}>
<img className={styles.polygonIcon} alt="" src="/nanopage/Polygon 1 (2).svg" />
<div className={styles.firstVisitParent}>
<b className={styles.firstVisit}>One-Day Skill-Building</b>
<div className={styles.diveDeeperInto}>Gain foundational skills and insights into robotics and AI in just one day</div>
</div>
</div>
</div>
<div className={styles.polygonGroup1}>
<img className={styles.frameChild1} alt="" src="/nanopage/Star 1.svg" />
<div className={styles.firstVisitParent}>
<b className={styles.firstVisit}>Getting a Taste of AFE</b>
<div className={styles.diveDeeperInto}>Discover exciting opportunities and resources at AFE Innovation Hub</div>
</div>
</div>
{/* <LastPart/> */}
</div>
      <div className="p-2">
        <div className="w-full relative rounded-lg bg-incandescent-light border-incandescent-main border-[2px] border-solid box-border flex flex-col items-start justify-start p-8 gap-8 text-left text-lg text-text-primary font-webtypestyles-buttonlarge">
          <div className="flex flex-row items-center justify-start gap-4">
            <div className="w-[67px] relative h-12 overflow-hidden shrink-0">
              <img src="/nanopage/reshot-icon-time-YEDR7WZV2Q.svg" />
            </div>
            <div className="flex flex-col items-start justify-center gap-1">
              <b className="relative leading-[170%]">Duration</b>
              <div className="relative leading-[170%] font-medium">
                1 Day (3 hours)
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <img
              className="w-[67px] relative h-12 overflow-hidden shrink-0"
              alt=""
              src="/nanopage/reshot-icon-student-DRC3YF56MU.svg"
            />
            <div className="flex flex-col items-start justify-center gap-1">
              <b className="relative leading-[170%]">Batch Strength</b>
              <div className="relative leading-[170%] font-medium">
                30 to 40 students per session
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-4 text-center text-incandescent-contrasttext">
            <div className="self-stretch rounded-81xl bg-incandescent-main h-14 flex flex-row items-center justify-center py-2 px-8 box-border cursor-pointer">
              <div className="relative leading-[170%] font-medium">
                Book Online
              </div>
            </div>
            <div className="self-stretch rounded-81xl bg-orange-main h-14 flex flex-row items-center justify-center py-2 px-8 box-border cursor-pointer text-text-primary">
              <div className="relative leading-[170%] font-medium">
                Book via Helpdesk
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <LastPart />
      </>
  );
};
export default Booking;
