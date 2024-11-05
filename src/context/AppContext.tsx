// "use client";
// import React, { createContext, useReducer, useContext, ReactNode, useEffect } from "react";
// import { reducer, initialState } from "./Reducer";
// type AppState = typeof initialState;
// type AppDispatch = React.Dispatch<{ type: "TOGGLE_LANGUAGE" }>;
// const StateContext = createContext<AppState | undefined>(undefined);
// const DispatchContext = createContext<AppDispatch | undefined>(undefined);
// export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   useEffect(() => {
//     const storedLanguage = localStorage.getItem("isLanguageEnglish");
//     if (storedLanguage !== null) {
//       const isLanguageEnglish = JSON.parse(storedLanguage);
//       dispatch({ type: "TOGGLE_LANGUAGE" }); // Ensure state syncs with localStorage on mount.
//     }
//   }, []);
//   return (
//     <StateContext.Provider value={state}>
//       <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
//     </StateContext.Provider>
//   );
// };
// export const useAppState = () => {
//   const context = useContext(StateContext);
//   if (!context) {
//     throw new Error("useAppState must be used within an AppProvider");
//   }
//   return context;
// };
// export const useAppDispatch = () => {
//   const context = useContext(DispatchContext);
//   if (!context) {
//     throw new Error("useAppDispatch must be used within an AppProvider");
//   }
//   return context;
// };




// "use client";
// import React, { createContext, useReducer, useContext, ReactNode, useEffect } from "react";
// import { reducer, initialState } from "./Reducer";

// type AppState = typeof initialState;
// type AppDispatch = React.Dispatch<{ type: "TOGGLE_LANGUAGE" }>;

// const StateContext = createContext<AppState | undefined>(undefined);
// const DispatchContext = createContext<AppDispatch | undefined>(undefined);

// export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     // Check local storage for language preference on initial load
//     const storedLanguage = localStorage.getItem("isLanguageEnglish");
//     if (storedLanguage !== null) {
//       const isLanguageEnglish = JSON.parse(storedLanguage);
//       if (isLanguageEnglish !== state.isLanguageEnglish) {
//         dispatch({ type: "TOGGLE_LANGUAGE" });
//       }
//     } else {
//       // Store the default language if no preference exists in local storage
//       localStorage.setItem("isLanguageEnglish", JSON.stringify(state.isLanguageEnglish));
//     }
//   }, []);

//   return (
//     <StateContext.Provider value={state}>
//       <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
//     </StateContext.Provider>
//   );
// };

// export const useAppState = () => {
//   const context = useContext(StateContext);
//   if (!context) {
//     throw new Error("useAppState must be used within an AppProvider");
//   }
//   return context;
// };

// export const useAppDispatch = () => {
//   const context = useContext(DispatchContext);
//   if (!context) {
//     throw new Error("useAppDispatch must be used within an AppProvider");
//   }
//   return context;
// };



"use client";
import React, { createContext, useReducer, useContext, ReactNode, useEffect } from "react";
import { reducer, initialState } from "./Reducer";

type AppState = typeof initialState;
type AppDispatch = React.Dispatch<{ type: "TOGGLE_LANGUAGE" }>;

const StateContext = createContext<AppState | undefined>(undefined);
const DispatchContext = createContext<AppDispatch | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Clear any stored language preference and set default to English
    localStorage.setItem("isLanguageEnglish", JSON.stringify(true));
    localStorage.setItem("currentLang", "en");

    // Reset state to English if it was toggled to another language
    if (!state.isLanguageEnglish) {
      dispatch({ type: "TOGGLE_LANGUAGE" });
    }
  }, []);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useAppState must be used within an AppProvider");
  }
  return context;
};

export const useAppDispatch = () => {
  const context = useContext(DispatchContext);
  if (!context) {
    throw new Error("useAppDispatch must be used within an AppProvider");
  }
  return context;
};




