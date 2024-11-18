// import { createContext, useContext, useReducer } from 'react'
// import reducer from '@/reducers/sidebar_reducer'

// type SidebarState = {
//   isSidebarOpen: boolean
//   isGetInTouch: boolean
// }

// type SidebarContextProps = SidebarState & {
//   openSidebar: () => void
//   closeSidebar: () => void
// }

// const initialState: SidebarState = {
//   isSidebarOpen: false,
//   isGetInTouch: false,
// }

// const SidebarContext = createContext('light')

// export const SidebarProvider = ({
//   children,
// }: {
//   children: React.ReactNode
// }) => {
//   // const [state, dispatch] = useReducer(reducer, initialState)
//   // const openSidebar = () => {
//   //   dispatch({ type: 'SIDEBAR_OPEN' })
//   // }
//   // const closeSidebar = () => {
//   //   dispatch({ type: 'SIDEBAR_CLOSE' })
//   // }
// }

// export const useSidebarContext = () => {
//   // const context = useContext(SidebarContext)
//   // if (!context) {
//   //   throw new Error('useSidebarContext must be used within a SidebarProvider')
//   // }
//   // return context
// }
