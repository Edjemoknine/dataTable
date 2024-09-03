import { TabaleItemProps } from "@/components/shared/TableRow";
import { fakedata } from "@/consatnt/data";
import { createContext, ReactNode, useContext, useState } from "react";
type Initail = {
  data: TabaleItemProps[];
  term: string;
  setData: (data: TabaleItemProps[]) => void;
  setTerm: (term: string) => void;
};
const SongContext = createContext<Initail>({
  data: fakedata,
  term: "",
  setData: () => {},
  setTerm: () => {},
});

const SongProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<TabaleItemProps[]>(fakedata);
  const [term, setTerm] = useState("");
  return (
    <SongContext.Provider value={{ data, setData, term, setTerm }}>
      {children}
    </SongContext.Provider>
  );
};

export default SongProvider;

export const useSongs = () => {
  const SongData = useContext(SongContext);
  return SongData;
};
