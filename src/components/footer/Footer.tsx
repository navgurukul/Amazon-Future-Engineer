// import type { NextPage } from 'next';

// const Footer: NextPage = () => {
//   return (
//     <footer className="w-full bg-orange-main text-left text-5xl text-text-primary font-webtypestyles-h6 py-4 px-6 md:px-12 lg:px-24">
//       <div className="relative flex flex-row items-center justify-between">
//         <div className="flex flex-row items-center gap-4">
//           <img
//             className="w-10 h-10 object-cover"
//             alt="Innovation Hub"
//             src="/nanopage/reshot-icon-molecules-YBNSD562JC 1.svg"
//           />
//           <div className="text-lg font-extrabold">Innovation Hub</div>
//         </div>
//         <b className="text-base leading-[170%] font-webtypestyles-subtitle1 md:text-lg lg:text-xl">
//           Privacy Policy
//         </b>
//         <div className="flex flex-row items-center gap-4">
//           <img
//             className="w-6 h-6 object-cover"
//             alt="LinkedIn"
//             src="/nanopage/Linkedin.svg"
//           />
//           <img
//             className="w-6 h-6 object-cover"
//             alt="Twitter"
//             src="/nanopage/Twitter.svg"
//           />
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import styles from './index.module.css';
import type { NextPage } from 'next';


const Footer:NextPage = () => {
  	return (
    		<div className={styles.footer}>
      			<div className={styles.reshotIconMoleculesYbnsd562Parent}>
        				<img className={styles.reshotIconMoleculesYbnsd562} alt="" src="/nanopage/reshot-icon-molecules-YBNSD562JC 1.svg" />
        				<div className={styles.afeMakerspaceLab}>AFE Makerspace</div>
      			</div>
      			<div className={styles.privacyPolicy}>Privacy Policy</div>
      			<div className={styles.reshotIconFriendlyCustomerParent}>
        				<img className={styles.reshotIconFriendlyCustomer} alt="" src="/nanopage/reshot-icon-friendly-customer-service-C63QKLHVB9.svg" />
        				<div className={styles.callHelpdesk}>Call Helpdesk</div>
      			</div>
    		</div>);
};

export default Footer;