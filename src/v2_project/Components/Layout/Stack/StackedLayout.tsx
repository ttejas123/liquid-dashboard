import React, { ReactElement } from 'react';

interface StackedLayoutProps {
  children: React.ReactNode;
  spacing?: string;
  additionalClass?: string;
}

export const StackedLayoutState = {

}

const StackedLayout: React.FC<StackedLayoutProps> = ({ children, spacing, additionalClass }) => {
  const stackedStyle = {
    display: 'flex',
    gap: spacing || '10px',
  };

  // Map over children and clone each element with the additional class
  const updatedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as ReactElement<any>, {
        className: `${child.props.className || ''} `,
      });
    }
    return child;
  });

  return <div style={{...stackedStyle, flexDirection: 'column'}}>{updatedChildren}</div>;
};

export default StackedLayout;