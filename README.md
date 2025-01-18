## React 18
<a href="https://www.youtube.com/watch?v=Flbw5BX_AX0&list=PLnHJACx3NwAep5koWkniVHw8PK7dWCO21&index=124">Reference</a>

### Topics
#### Fundamentals
- Basics
- Using local images
- Styling
  - Inline CSS
  - `.css`
- JS in JSX
- Props
  - Destructure
  - `children` prop
- Dynamically create components
  - Unique `key`
- Passing entire object to component
  - Spread operator
- Events
  - Event object
  - Form submission
- Prop drilling
  - Common bugs
- ES6 Modules
  - Default imports and exports
  - Named imports and exports
- Local image optimization
- Vite

#### Advanced
- `useState`
  - Re-render
  - `setState` is async
  - Array as state
  - Auto-batching
  - Synchronize multiple `setState` by passing function
- `useEffect`
  - Dependencies
  - `fetch` API with `useEffect`
- Multiple returns
- Adding loading, error and success for `fetch` API
- Don't use hooks conditionally
  - Short-circuit evaluation
  - Truthy and falsey values
  - Ternary operator
- Gotcha: `useEffect` and conditional rendering
  - Clean-up function
- Project structure
  - `index.jsx`
- Forms
  - Controlled inputs
  - Dynamic object keys
  - Other inputs
    - Checkbox
    - Drop-down
  - `FormData` API
    - Using for uncontrolled inputs
- `useRef`
  - Using for uncontrolled inputs
  - Checking for component mounting
  - Focusing input
- Custom hooks
  - `useToggle`
  - `useFetch`
- `Context` API
  - `useContext`
  - Global context
- `useReducer`
  - Conventions
  - Actions
  - Dispatch
    - Payload
  - Refactor
- Performance
  - Lowering state
  - `memo`ized Component
  - `useCallback`
    - Avoid infinite loop with function in dependency of `useEffect`
  - `useMemo` to cache computations
  - `Suspense` API
    - Code-splitting
    - Lazy loading
