import * as React from 'react';


const Child = React.forwardRef(({}:any, ref: any) => {
  const [state,setState] = React.useState(false);

  console.log('>>> child render')
  React.useImperativeHandle(ref, () => ({
    toggle: () => {
      console.log('toggle', state);
      setState(!state);
    }
  }));
  console.log('>>> ', state);

  return <span>State: {state}</span>;
});

export function App() {
  const ref = React.createRef<any>();

  React.useLayoutEffect(() => {
    console.log('effect', ref);
    if (ref.current) {
      ref.current.toggle();
    }
  }, [ref]);

  return (
    <Child ref={ref}/>
  );
}

export default App;
