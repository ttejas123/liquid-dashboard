import React, { ReactElement } from 'react';
import './GalleryLayout.css';

interface GalleryLayoutProps {
  children: React.ReactNode;
}

export const GalleryLayoutState = {

}

const GalleryLayout: React.FC<GalleryLayoutProps> = ({ children }) => {

  // Map over children and clone each element with the additional class
  const updatedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as ReactElement<any>, {
        className: `${child.props.className || ''} gallery-item`,
      });
    }
    return child;
  });

  return <div className='gallery-layout'>{updatedChildren}</div>;
};

export default GalleryLayout;