import React, {
  useState,
  useEffect,
  useMemo,
  useContext,
  createContext,
} from "react";

const CandidatesContext = createContext();

export function CandidatesProvider(props) {
  const [candidates, setCandidates] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:3333/candidates?registered_by=1")
      .then((res) => res.json())
      .then((result) => {
        setCandidates(result);
      });
  }, []);

  const value = useMemo(() => {
    return { candidates };
  }, [candidates]);

  return <CandidatesContext.Provider value={value} {...props} />;
}

export function useCandidates() {
  const context = useContext(CandidatesContext);

  if (!context) {
    throw new Error("useCandidates not found in CandidatesProvider");
  }

  return context;
}
