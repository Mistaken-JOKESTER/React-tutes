// import logo from './logo.svg';
// import { Fragment } from 'react';
import './App.css';
import ComponentC from './compnents/ContexApi/ComponentC';
import { UserProvider } from './compnents/ContexApi/UserContext';
// import ClickCounter2 from './compnents/RenderProps/ClickCounter2';
// import Counter from './compnents/RenderProps/Counter';
// import HoverCounter2 from './compnents/RenderProps/HoverCounter2';
// import User from './compnents/RenderProps/User';
// import ErrorBoundry from './compnents/ErrorBoundry/ErrorBoundry';
// import Hero from './compnents/ErrorBoundry/Hero';
// import ClickCounter from './compnents/HeigherOrderComponents/ClickCounter';
// import HoverCounter from './compnents/HeigherOrderComponents/HoverCounter';
// import PortalDemo from './compnents/Portal/PortalsDemo'
// import ForwardRef from './compnents/FRInput/parent'
// import Focus from './compnents/ClassRef/Focus';
// import Parent from './compnents/PureComponents/Parent';
// import RefsDemo from './compnents/RefsDemo';
// import DemoFragment from './compnents/Fragemts/DemoFragment';
// import Greet from './compnents/Greet'
// import Welcome from './compnents/Welcome'
// import Subscribe from "./compnents/Subscribe";
// import Count from './compnents/Count'
// import FunctionClick from "./compnents/FunctionClick";
// import ClassClick from "./compnents/ClassClick";
// import EventBind from './compnents/EventBind'
// import Parent from './compnents/MethodAsProps/Parent'
// import UserGreeting from "./compnents/UserGreeting";
// import NameList from './compnents/NameList'
// import Stylesheet from "./compnents/CssStyles/Stylesheet";
// import Inline from "./compnents/CssStyles/Inline";
// import CssModule from "./compnents/CssStyles/CssModule";
// import Form from './compnents/Form'
// import LifecycleA from './compnents/Lifecycles/LifecycleA'

function App() {
  return (
    <div className="App">
      {/* <Greet name="Ankit"><h4>I am elder brother.</h4></Greet> */}
      {/* <Welcome name="Deep Ikka"><h6>I am younger sister.</h6></Welcome> */}
      {/* <Subscribe /> */}
      {/* <Count amount="3"/> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <Parent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <Stylesheet primary={false}/>
      <Inline />
      <CssModule /> */}
      {/* <Form /> */}
      {/* <LifecycleA /> */}
      {/* <DemoFragment /> */}
      {/* <RefsDemo /> */}
      {/* <Parent /> */}
      {/* <Focus /> */}
      {/* <ForwardRef /> */}
      {/* <PortalDemo /> */}
      {/* <ErrorBoundry>
        <Hero heroName="Batman"/>
      </ErrorBoundry>
      <ErrorBoundry>
        <Hero heroName="superMan"/>
      </ErrorBoundry>
      <ErrorBoundry>
        <Hero heroName="Joker"/>
      </ErrorBoundry> */}
      {/* <ClickCounter name="ankit"/>
      <HoverCounter /> */}



      {/* Render props using two ways */}
      {/* 1ST */}
      {/* <Counter>
        {(count, incrementCount) =>(
          <ClickCounter2 count={count} incrementCount={incrementCount}/>
        )}
      </Counter>

      <Counter>
        {(count, incrementCount) =>(
          <HoverCounter2 count={count} incrementCount={incrementCount}/>
        )}
      </Counter> */}

      {/* 2nd */}
      {/* <Counter 
        render={(count, incrementCount) =>(
          <HoverCounter2 count={count} incrementCount={incrementCount}/>
        )}
      /> */}
      {/* <Counter 
        render={(count, incrementCount) =>(
          <ClickCounter2 count={count} incrementCount={incrementCount}/>
        )}
      /> */}


      {/* <ClickCounter2 />
      <HoverCounter2 />
      <User render={(isLogedIn) => isLogedIn?'Ankit':'Guest'}/> */}

      <UserProvider value="Ankit">
        <ComponentC />
      </UserProvider>
    </div>
  )
}

export default App;
