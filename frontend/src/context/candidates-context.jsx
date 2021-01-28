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
  const [users, setUsers] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    if(selectedUser !== null){
      fetch("http://127.0.0.1:3333/candidates?registered_by=" + selectedUser.id)
        .then((res) => res.json())
        .then((result) => {
          setCandidates(result);
        });
    }
  }, [selectedUser]);

  useEffect(() => {
    fetch("http://127.0.0.1:3333/users")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
  }, []);

  const value = useMemo(() => {
    return { candidates, setCandidates, users, selectedUser, setSelectedUser };
  }, [candidates, users, selectedUser]);

  return <CandidatesContext.Provider value={value} {...props} />;
}

export function useCandidates() {
  const context = useContext(CandidatesContext);

  if (!context) {
    throw new Error("useCandidates not found in CandidatesProvider");
  }

  return context;
}
