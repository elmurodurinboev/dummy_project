import React, {createContext, useContext, useState} from 'react';

const SidebarContext = createContext<{
  isMinimized: boolean;
  toggle: () => void;
}>({
  isMinimized: false,
  toggle: () => {
  }
});

export const useSidebar = () => useContext(SidebarContext);

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = (
  {
    children
  }
) => {
  const [isMinimized, setIsMinimized] = useState<boolean>(() => {
    const savedStorage = localStorage.getItem("isMinimized")
    return savedStorage ? JSON.parse(savedStorage) : false;
  });

  const toggle = () => {
    setIsMinimized(prevState => {
      const newState = !prevState
      localStorage.setItem('isMinimized', JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <SidebarContext.Provider value={{isMinimized, toggle}}>
      {children}
    </SidebarContext.Provider>
  );
};
