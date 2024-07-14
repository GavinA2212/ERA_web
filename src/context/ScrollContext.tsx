import React, {
  createContext,
  useState,
  useMemo,
  useContext,
} from "react";

const ScrollContext = createContext<{
  scrollTo: string;
  setScrollTo: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [scrollTo, setScrollTo] = useState("");

  const value = useMemo(() => ({ scrollTo, setScrollTo }), [scrollTo]);
  return (
    <ScrollContext.Provider value={value}>
      {children}
    </ScrollContext.Provider>
  );
};

//hook to use context to avoid possible null values
function useScroll() {
  const context = useContext(ScrollContext);
  if (context === null) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { ScrollContext, ScrollProvider, useScroll };
