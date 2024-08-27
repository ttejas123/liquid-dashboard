import React, { ReactElement } from 'react';

interface GridLayoutProps {
  children: React.ReactNode;
  columns?: string;
  gap?: string;
}

export const GridLayoutState = {

}

const GridLayout: React.FC<GridLayoutProps> = ({ children, columns, gap }) => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: gap || '10px',
  };

  // Map over children and clone each element with the additional class
  const updatedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as ReactElement<any>, {
        className: `${child.props.className || ''} grid-item`,
      });
    }
    return child;
  });

  return <div style={{...gridStyle}}>{updatedChildren}</div>;
};

export default GridLayout;