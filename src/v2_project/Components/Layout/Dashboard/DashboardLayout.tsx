// DashboardLayout.js
import React from 'react';
import './DashboardLayout.css'; // Create corresponding CSS for styling

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export const DashboardLayoutState = {

}
  
const DashboardLayout:React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="dashboard-layout">
      {
        React.Children.map(children, (child, index) => {
            return (<div key={index} className="dashboard-widget">
                        {child}
                    </div>)
        })
      }
    </div>
  );
};

export default DashboardLayout;
