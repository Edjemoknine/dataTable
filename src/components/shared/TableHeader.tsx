import SongSearch from "./SongSearch";
import AddSong from "./AddSong";
export type HeaderProps = {
  setTerm: (term: string) => void;
  term: string;
};

const TableHeader = ({ setTerm, term }: HeaderProps) => {
  return (
    <div className="flex items-center justify-between pb-8">
      <h1 className="text-2xl font-semibold">Fake Data</h1>
      <SongSearch setTerm={setTerm} term={term} />
      <AddSong />
    </div>
  );
};

export default TableHeader;
