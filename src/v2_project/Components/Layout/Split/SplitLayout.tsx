// SplitViewLayout.js
import React from 'react';
import './SplitViewLayout.css'; // Create corresponding CSS for styling

interface SplitViewLayoutProps {
    sidebar: React.ReactNode;
    mainContent: React.ReactNode;
    sidebarWidth?: string;
    gap?: string
}
  
export const SplitViewLayoutState = {

}

const SplitViewLayout: React.FC<SplitViewLayoutProps> = ({ sidebar, mainContent, sidebarWidth, gap }) => {
  const splitViewStyle = {
    display: 'flex',
    gap: gap || '10px',
  };

  const sidebarStyle = {
    width: sidebarWidth || '250px',
    flexShrink: 0,
  };

  const mainContentStyle = {
    flexGrow: 1,
  };

  return (
    <div style={splitViewStyle}>
      <div style={sidebarStyle}>{sidebar}</div>
      <div style={mainContentStyle}>{mainContent}</div>
    </div>
  );
};

export default SplitViewLayout;