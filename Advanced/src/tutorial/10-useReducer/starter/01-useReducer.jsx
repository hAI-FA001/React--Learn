import React from 'react'
import { data } from '../../../data'
import { useReducer } from 'react'
import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from './actions'
import reducer from './reducer'

const defaultState = { people: data, isLoading: false }

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)
  console.log(state)

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id)
    // setPeople(newPeople)
    dispatch({ type: REMOVE_ITEM, payload: { id: id } })
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
