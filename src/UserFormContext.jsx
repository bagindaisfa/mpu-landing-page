import { createContext, useContext, useState } from 'react';

const UserFormContext = createContext();

export const UserFormProvider = ({ children }) => {
  const [hasSubmittedForm, setHasSubmittedForm] = useState(
    localStorage.getItem('hasSubmittedForm') === 'true'
  );

  const markFormSubmitted = () => {
    localStorage.setItem('hasSubmittedForm', 'true');
    setHasSubmittedForm(true);
  };

  return (
    <UserFormContext.Provider value={{ hasSubmittedForm, markFormSubmitted }}>
      {children}
    </UserFormContext.Provider>
  );
};

export const useUserForm = () => useContext(UserFormContext);
