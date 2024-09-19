import styles from "./index.module.css";
import type { NextPage } from "next";

const HomeSprints: NextPage = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.homeSprintsContainer}>
        <span className={styles.home}>
          <b className={styles.home1}>Home</b>
        </span>
        <span className={styles.sprints}>
          <span className={styles.home}>{` / `}</span>
          <span className={styles.sprints1}>Sprints</span>
        </span>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="../../nanopage/Vector.svg" />
          <div className={styles.nanoSprints}>Nano Sprints</div>
        </div>
        <div
          className={styles.vectorGroup}
          // onClick={onFrameContainerClick}
        >
          <img className={styles.vectorIcon1} alt="" src="../../nanopage/Vector.svg" />
          <div className={styles.miniSprints}>Mini Sprints</div>
        </div>
        <div
          className={styles.vectorGroup}
          // onClick={onFrameContainerClick}
        >
          <img className={styles.vectorIcon1} alt="" src="../../nanopage/Vector.svg" />
          <div className={styles.miniSprints}>Mega Sprints</div>
        </div>
      </div>
    </div>
  );
};

export default HomeSprints;
