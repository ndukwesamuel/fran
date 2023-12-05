// import { configureStore } from '@reduxjs/toolkit'
// import counterSlice from './features/counterSlice'
// // import counterSlice from './features/counterSlice'

// export const store = configureStore({
//   reducer: {
//     counterSlice : counterSlice
//   },
// })

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch




import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counterSlice'
import rootReducers from './rootReducers'
// import counterSlice from './features/counterSlice'


export const store = configureStore({
  reducer: rootReducers,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
