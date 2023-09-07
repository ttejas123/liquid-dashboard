import React from 'react';
import { tableRegistry } from './TableComponentRegistory';
import { GraphCompoentRegistory } from "./GraphCompoentRegistory"

const ComponentRegistry = {
  table: tableRegistry,
  graph: GraphCompoentRegistory,
//   custom1: CustomComponent1,
//   custom2: CustomComponent2,
  // Add more custom components as needed
};

export { ComponentRegistry };