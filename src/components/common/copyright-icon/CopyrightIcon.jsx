import { FaCopyright } from "react-icons/fa";

import "./CopyrightIcon.scss";

const CopyrightIcon = ({ title }) => {
  return (
    <div className="copyright-icon" title={title}>
      <FaCopyright />
    </div>
  );
};

export default CopyrightIcon;
