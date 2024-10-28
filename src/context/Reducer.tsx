type State = {
    isLanguageEnglish: boolean;
  };
  type Action = { type: "TOGGLE_LANGUAGE" };
  // export const initialState: State = {
  //   isLanguageEnglish: true, // Default to English
  // };

  export const initialState: State = {
    isLanguageEnglish: JSON.parse(localStorage.getItem("isLanguageEnglish") || "true"), // Default to English or load saved state
  };
  
  export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "TOGGLE_LANGUAGE":
        const newLanguageState = !state.isLanguageEnglish;
        localStorage.setItem("isLanguageEnglish", JSON.stringify(newLanguageState));
        return { ...state, isLanguageEnglish: newLanguageState };
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  };