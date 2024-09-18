import styles from "./_components/CreateAClass.module.css";
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

interface CreateAClassProps {
  closePopup: () => void; // Add closePopup as a prop
}

const CreateAClass: NextPage<CreateAClassProps> = ({ closePopup }) => {
  const router = useRouter();
  
  const onYesClick = useCallback(() => {
    router.push('/login'); 
  }, [router]);

  const onNoClick = useCallback(() => {
    closePopup(); // Close the popup when "No, I am not" is clicked
  }, [closePopup]);

  return (
    <div className={styles.createAClass}>
      <div className={styles.createAClassChild} />
      <div className={styles.dearUserCurrently}>
        Dear User. Currently, we are only able to support lab bookings for
        government schools. Please confirm if you are from a government school
      </div>
      <div className={styles.ftracks}>
        <div className={styles.fieldLabel}>Foundation Track</div>
        <div className={styles.course}>
          <img className={styles.courseicon} alt="" src="courseicon.svg" />
          <div className={styles.python}>Python</div>
        </div>
        <div className={styles.tracks}>
          <div className={styles.radiobuttons}>
            <img
              className={styles.radioButtonIcon}
              alt=""
              src="Radio Button.svg"
            />
            <div className={styles.python}>Web Dev</div>
          </div>
          <div className={styles.radiobuttons}>
            <img
              className={styles.radioButtonIcon}
              alt=""
              src="Radio Button.svg"
            />
            <div className={styles.python}>Soft Skills</div>
          </div>
          <div className={styles.radiobuttons}>
            <img
              className={styles.radioButtonIcon}
              alt=""
              src="Radio Button.svg"
            />
            <div className={styles.python}>Miscellaneous</div>
          </div>
        </div>
      </div>
      <div className={styles.textfield} />
      <div className={styles.textfield} />
      <div className={styles.textfield2}>
        <div className={styles.fieldLabel1}>Description</div>
        <div className={styles.contents}>
          <div className={styles.fieldText}>
            Learn about different datatypes that govern how values are stored in
            Python. We will talk about how to identify variables, naming
            schemes, and usage in programs.
          </div>
        </div>
      </div>
      <div className={styles.textfield} />
      <div className={styles.textfield4}>
        <div className={styles.fieldLabel1}>On Days</div>
        <div className={styles.selectionsParent}>
          <div className={styles.selections}>
            <b className={styles.python}>Mon</b>
          </div>
          <div className={styles.selections1}>
            <div className={styles.python}>Tue</div>
          </div>
          <div className={styles.selections1}>
            <div className={styles.python}>Wed</div>
          </div>
          <div className={styles.selections1}>
            <div className={styles.python}>Thurs</div>
          </div>
          <div className={styles.selections1}>
            <div className={styles.python}>Fri</div>
          </div>
          <div className={styles.selections1}>
            <div className={styles.python}>Sat</div>
          </div>
          <div className={styles.selections1}>
            <div className={styles.python}>Sun</div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.noIAmNotWrapper} onClick={onNoClick}>
          <div className={styles.noIAm}>No, I am not</div>
        </div>
        <div className={styles.yesIConfirmWrapper} onClick={onYesClick}>
          <div className={styles.noIAm}>Yes, I confirm</div>
        </div>
      </div>
    </div>
  );
};

export default CreateAClass;
