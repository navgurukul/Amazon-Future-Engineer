// import styles from './index.module.css';
// import type { NextPage } from 'next';

// const Footer:NextPage = () => {
//   	return (
//     		<div className={styles.footer}>
//       			<div className={styles.reshotIconMoleculesYbnsd562Parent}>
//         				<img className={styles.reshotIconMoleculesYbnsd562} alt="" src="/nanopage/reshot-icon-molecules-YBNSD562JC 1.svg" />
//         				<div className={styles.afeMakerspaceLab}>AFE Makerspace</div>
//       			</div>
//       			<div className={styles.privacyPolicy}>Privacy Policy</div>
//       			<div className={styles.reshotIconFriendlyCustomerParent}>
//         				<img className={styles.reshotIconFriendlyCustomer} alt="" src="/nanopage/reshot-icon-friendly-customer-service-C63QKLHVB9.svg" />
//         				<div className={styles.callHelpdesk}>Call Helpdesk</div>
//       			</div>
//     		</div>);
// };

// export default Footer;

// import type { NextPage } from 'next';

// const Footer: NextPage = () => {
//   return (
//     <div className="w-full relative bg-[#ffad33] h-24 text-center text-lg text-gray-800 font-amazon-ember">
//       <div className="absolute top-8 left-12 flex flex-row items-center justify-start gap-4 text-left text-xl font-amazon-ember-display">
//         <img
//           className="w-9 h-9 object-cover"
//           alt=""
//           src="/nanopage/reshot-icon-molecules-YBNSD562JC 1.svg"
//         />
//         <div className="relative font-extrabold leading-[150%]">AFE Makerspace</div>
//       </div>
//       <div className="absolute top-9 left-1/2 transform -translate-x-1/2 font-medium leading-[170%]">
//         Privacy Policy
//       </div>
//       <div className="absolute top-1/2 left-[1463px] transform -translate-y-1/2 rounded-full bg-gray-200 h-14 flex flex-row items-center justify-center gap-2 px-8 text-orange-600">
//         <img
//           className="w-8 h-8 object-cover"
//           alt=""
//           src="/nanopage/reshot-icon-friendly-customer-service-C63QKLHVB9.svg"
//         />
//         <div className="relative font-medium leading-[170%]">Call Helpdesk</div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import type { NextPage } from 'next';


const Footer: NextPage = () => {
  return (
    <div className="w-full bg-[#ffad33] h-24 text-center text-lg text-gray-800 font-amazon-ember">
      <div className="flex flex-col md:flex-row justify-between items-center h-full px-6">
        {/* Logo Section */}
        <div className="flex flex-row items-center gap-4 text-xl font-amazon-ember-display">
          <img
            className="w-9 h-9 object-cover"
            alt="AFE Makerspace Logo"
            src="/nanopage/reshot-icon-molecules-YBNSD562JC 1.svg"
          />
          <div className="font-extrabold">AFE Makerspace</div>
        </div>
        
        {/* Privacy Policy */}
        <div className="mt-4 md:mt-0 font-medium leading-[170%]">
          Privacy Policy
        </div>

        {/* Helpdesk Section */}
        <div className="flex flex-row items-center justify-center gap-2 px-6 py-2 mt-4 md:mt-0 rounded-full bg-gray-200 text-orange-600">
          <img
            className="w-8 h-8 object-cover"
            alt="Helpdesk Icon"
            src="/nanopage/reshot-icon-friendly-customer-service-C63QKLHVB9.svg"
          />
          <div className="font-medium leading-[170%]">Call Helpdesk</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;