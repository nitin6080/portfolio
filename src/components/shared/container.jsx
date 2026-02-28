// const Container = ({ children }) => {
//   return (
//     <div className="max-w-6xl mx-auto px-6">
//       {children}
//     </div>
//   );
// };

// export default Container;
import React from "react";

const Container = ({ children }) => {
  return <div className="max-w-7xl mx-auto px-6 lg:px-10">{children}</div>;
};

export default Container;
