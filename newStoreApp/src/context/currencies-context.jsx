import { useContext, createContext, useState } from "react";
import { courseDB } from "../db/courseDB";
import { currenciesDB } from "../db/currenciesDB";

// 1.Defination
export const CurrencyContext = createContext();

// 2.Provider Component
export const CurrencyContextProvider = ({ children }) => {
  const [currency, setCurrency] = useState(currenciesDB);
  const [course, setCourse] = useState(courseDB);
  const [changeCurr, setChangeCurr] = useState(currenciesDB.Euro);

  const values = {
    course,
    setCourse,
    currency,
    setCurrency,
    changeCurr,
    setChangeCurr,
  };

  return (
    <CurrencyContext.Provider value={values}>
      {children}
    </CurrencyContext.Provider>
  );
};

// 3.Consume

export const useCurrCourse = () => {
  return useContext(CurrencyContext);
};
