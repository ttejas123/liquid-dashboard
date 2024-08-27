// TabbedLayout.js
import React, { useState } from 'react';
import './TabbedLayout.css'; // Create corresponding CSS for styling

interface TabbedLayoutProps {
    tabs: { label: string, content: React.ReactNode }[];
}

export const TabbedLayoutState = {

}

const TabbedLayout: React.FC<TabbedLayoutProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabbed-layout">
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default TabbedLayout;
