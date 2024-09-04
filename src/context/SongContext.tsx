import { fakedata } from "@/consatnt/data";
import { TabaleItemProps } from "@/types/Song";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
type Initail = {
  data: TabaleItemProps[];
  term: string;
  setData: (data: TabaleItemProps[]) => void;

  setTerm: (term: string) => void;
  open: boolean;
  setOpen: (term: boolean) => void;
  deleteSong: (id: number) => void;
  setSelected: (item: TabaleItemProps | null) => void;
  selected: TabaleItemProps | null;
};
const SongContext = createContext<Initail>({
  data: fakedata,
  term: "",
  open: false,
  setOpen: () => {},
  setData: () => {},
  setTerm: () => {},
  deleteSong: () => {},
  setSelected: () => {},
  selected: null,
});
const fetchData = () => {
  let fetchedData;
  if (localStorage.getItem("data")) {
    fetchedData = JSON.parse(localStorage.getItem("data")!);
    return fetchedData;
  }
};
const SongProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<TabaleItemProps[]>(() => fetchData());
  const [term, setTerm] = useState("");
  const [selected, setSelected] = useState(null);
  console.log(selected);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(fakedata));
  }, []);

  const deleteSong = (id: number) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <SongContext.Provider
      value={{
        data,
        setData,
        term,
        setTerm,
        open,
        setOpen,
        deleteSong,
        setSelected,
        selected,
      }}
    >
      {children}
    </SongContext.Provider>
  );
};

export default SongProvider;

export const useSongs = () => {
  const SongData = useContext(SongContext);
  return SongData;
};
