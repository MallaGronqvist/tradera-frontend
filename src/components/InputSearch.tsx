import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface iProps {
  handleSearch: Function;
  searchTerm: any;
  setSearchTerm: Function;
}

export default function InputSearch() {
  // Global state
  const navigate = useNavigate();

  // Local state
  const [searchTerm, setSearchTerm] = useState("");

  // Methods
  function onSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    navigate(`search/${searchTerm}`);
  }

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm) {
//      navigate("/");
      navigate(`search/${searchTerm}`);
    }
  };

  return (
    <form onSubmit={(event) => handleSearch(event)}>
      <input
        id="search-form"
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="What are you looking for?"
      />
      <input type="submit" value="search" />
    </form>
  );
}
