import { useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LIBRARY':
      return {
        library: action.payload,
      }
    default: {
      return state
    }
  }
}

const useGlobalState = () => {
  const [globalState, globalDispatch] = useReducer(reducer, {
    library: null,
  })

  return { globalState, globalDispatch }
}

export default useGlobalState
