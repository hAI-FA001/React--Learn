import React from 'react'
import { data } from '../../../data'
import { useReducer } from 'react'

const CLEAR_LIST = 'CLEAR_LIST'
const RESET_LIST = 'RESET_LIST'
const REMOVE_ITEM = 'REMOVE_ITEM'

const defaultState = { people: data, isLoading: false }
const reducer = (state, action) => {
  console.log(state, action)
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] }
  }

  // return state
  throw new Error(`No matching "${action.type}" action`)
}

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)
  console.log(state)

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id)
    // setPeople(newPeople)
  }

  const clear = () => {
    // setPeople([])
    dispatch({ type: CLEAR_LIST })
  }

  const reset = () => {
    dispatch({ type: RESET_LIST })
    // setPeople(data)
  }

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      {state.people.length != 0 ? (
        <button className="btn" style={{ marginTop: '2rem' }} onClick={clear}>
          clear items
        </button>
      ) : (
        <button className="btn" style={{ marginTop: '2rem' }} onClick={reset}>
          Reset
        </button>
      )}
    </div>
  )
}

export default ReducerBasics
