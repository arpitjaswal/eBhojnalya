import React from 'react'

const Home = () => {
  const initialState = {food:[]};
  const reducer = (state,action)=>{
      switch (action.type) {
        case "DATA_PULLED":
            return {...state, foods:action.payload};
        default:
          return state;
      }
  }

    <div>Home</div>
  )
}

export default Home;