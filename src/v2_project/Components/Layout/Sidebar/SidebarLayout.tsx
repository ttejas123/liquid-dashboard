// SidebarLayout.js
import React from 'react';
import './SidebarLayout.css'; // Create corresponding CSS for styling
interface SidebarLayoutProps {
    gap?: string;
    sidebarContent: React.ReactNode,
    mainContent: React.ReactNode,
    sidebarWidth: string
}

export const SidebarLayoutState = {

}
  
const SidebarLayout:React.FC<SidebarLayoutProps> = ({ sidebarContent, mainContent, sidebarWidth, gap }) => {
  const layoutStyle = {
    display: 'flex',
    gap: gap || '15px',
  };

  const sidebarStyle = {
    width: sidebarWidth || '250px',
    flexShrink: 0,
  };

  const contentStyle = {
    flexGrow: 1,
  };

  return (
    <div style={layoutStyle}>
      <aside style={sidebarStyle} className="sidebar">
        {sidebarContent}
      </aside>
      <main style={contentStyle} className="main-content">
        {mainContent}
      </main>
    </div>
  );
};

export default SidebarLayout;
