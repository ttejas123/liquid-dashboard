import React, { useEffect, useState } from 'react';
import EnhancedErrorBoundary from '../Helper/EnhancedErrorBoundary';

const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
  console.log("Error reported to external service", error, errorInfo);
};

function withStateAndPropsLogger(WrappedComponent) {
  return function(props) {
    if(!props) throw new Error("Issue with props")
    if(!props.initstate) throw new  Error("Issue With state");
    const [state, setState] = useState(props.initstate);

    useEffect(() => {
      if(props.debug) console.log("Component State: "+props.id+" ", state);
    }, [state]);

    useEffect(() => {
      if(props.debug) console.log("Component Props: "+props.id+" ", props);
    }, [props]);

    return <EnhancedErrorBoundary onError={handleError}><WrappedComponent {...props} state={state} setState={setState} /></EnhancedErrorBoundary>
  };
}

export default withStateAndPropsLogger;