import { Input } from "../ui/input";
import { HeaderProps } from "./TableHeader";

const SongSearch = ({ setTerm, term }: HeaderProps) => {
  return (
    <div className="w-1/3">
      <Input
        type="text"
        placeholder="Search "
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
    </div>
  );
};

export default SongSearch;
