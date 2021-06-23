import './App.css';
import UserFormOne from './components/Hooks/CustomHook/UserFormOne';
// import CounterOne from './components/Hooks/CustomHook/CounterOne';
// import CounterTwo from './components/Hooks/CustomHook/CounterTwo';
// import DocTitleOne from './components/Hooks/CustomHook/DocTitleOne';
// import DocTitleTwo from './components/Hooks/CustomHook/DocTitleTwo';
// import ClassTimer from './components/Hooks/RefHook/ClassTimer';
// import HookTimer from './components/Hooks/RefHook/HookTimer';
// import FocusInput from './components/Hooks/RefHook/FocusInput';
// import Counter from './components/Hooks/MemoHook/Counter';
// import Parent from './components/Hooks/CallbackHook/Parent';
// import React, {useReducer} from 'react'
// import DataFetchOne from './components/Hooks/ReducerDataFetch/DataFetchOne';
// import DataFetchTwo from './components/Hooks/ReducerDataFetch/DataFetchTwo';
// import CompA from './components/Hooks/RducerAndContext/CompA';
// import CompB from './components/Hooks/RducerAndContext/CompB';
// import CompC from './components/Hooks/RducerAndContext/CompC';
// import CounterThree from './components/Hooks/ReducerHook/CounterThree';
// import CounterOne from './components/Hooks/ReducerHook/CounterOne';
// import CounterTwo from './components/Hooks/ReducerHook/CounterTwo';
// import CompoC from './components/Hooks/ContextHook/CompoC';
// import DataFetching from './components/Hooks/EffectHook/DataFetching';
// import IntervalClassCounter from './components/Hooks/EffectHook/IntervalClassCounter';
// import InvtervalHookCounter from './components/Hooks/EffectHook/InvtervalHookCounter';
// import MouseContainer from './components/Hooks/EffectHook/MouseContainer';
// import ClassMouse from './components/Hooks/EffectHook/ClassMouse';
// import HookMouse from './components/Hooks/EffectHook/HookMouse';
// import ClasscounterOne from './components/Hooks/EffectHook/ClasscounterOne';
// import HookCounterOne from './components/Hooks/EffectHook/HookCounterOne';
// import HookCounterFour from './components/Hooks/UseStateHook/HookCounterFour';
// import HookCounterthree from './components/Hooks/UseStateHook/HookCounterthree';
// import HookCounterTwo from './components/Hooks/UseStateHook/HookCounterTwo';
// import Classcounter from './components/Hooks/UseStateHook/Classcounter';
// import Hookcounter from './components/Hooks/UseStateHook/Hookcounter';
// import PostList from './components/Http/PostList';
// import PostForm from './components/Http/PostForm';

// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

// export const CountContext = React.createContext()
// const intialState = 0
// const reducer = (currentState, aciton) => {
//     switch(aciton){
//         case 'increment':
//             return currentState + 1
//         case 'decrement':
//             return currentState - 1
//         case 'reset':
//             return intialState
//         default:
//             return currentState
//     }
// }


function App() {
  // const [count, dispatch] = useReducer(reducer, intialState)

  return (
    
    <div className="App">
      {/* <PostList /> */}
      {/* <PostForm /> */}

      {/* <Classcounter /> */}
      {/* <Hookcounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterthree /> */}
      {/* <HookCounterFour /> */}

      {/* useEffectHook */}
      {/* <ClasscounterOne /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter /> */}
      {/* <InvtervalHookCounter /> */}
      {/* <DataFetching /> */}

      {/* context Hook */}
      {/* <UserContext.Provider value='Ankit' >
        <ChannelContext.Provider value='pewdipie' >
          <CompoC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* reducer hook */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}

      {/* Reducer and context */}
      {/* <CountContext.Provider value={{countState:count, countDispatch:dispatch}}>
        <div>Count {count} </div>
        <CompA />
        <CompB />
        <CompC />
      </CountContext.Provider> */}

      {/* reducer for data fetch */}
      {/* <DataFetchOne /> */}
      {/* <DataFetchTwo /> */}

      {/* callbackHook */}
      {/* <Parent /> */}

      {/* memoHook */}
      {/* <Counter /> */}

      {/* Use ref hook */}
      {/* <FocusInput /> */}
      {/* <ClassTimer />
      <HookTimer /> */}

      {/* custom Hook */}
      {/* <DocTitleOne />
      <DocTitleTwo /> */}
      {/* <CounterOne />
      <CounterTwo /> */}
      <UserFormOne />
    </div>
  );
}

export default App
