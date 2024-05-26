import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// State and action types definition
interface AppState {
  isSideNavOpen: boolean;
  selectedWatchlist: string | null;
}

type Action =
  | { type: 'TOGGLE_SIDENAV' }
  | { type: 'SET_WATCHLIST'; payload: string };

// Initial state
const initialState: AppState = {
  isSideNavOpen: false,
  selectedWatchlist: null,
};

// Reducer function
function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'TOGGLE_SIDENAV':
      return { ...state, isSideNavOpen: !state.isSideNavOpen };
    case 'SET_WATCHLIST':
      return { ...state, selectedWatchlist: action.payload };
    default:
      return state;
  }
}

// Create Contexts
const AppStateContext = createContext<AppState | undefined>(undefined);
const AppDispatchContext = createContext<React.Dispatch<Action> | undefined>(
  undefined
);

// Provider Component
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

// Custom hooks for accessing state and dispatch
export const useContextState = (): AppState => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within a AppProvider');
  }
  return context;
};

export const useContextDispatch = () => {
  const context = useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within a AppProvider');
  }
  return context;
};
