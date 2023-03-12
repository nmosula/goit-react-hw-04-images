import { useState } from "react";
import { Header, Searchform, Searchformbutton, Searchformbuttonlabel, Searchforminput } from './Searchbar.styled';
import { FaSearch } from "react-icons/fa";


const Searchbar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = ({ target: { value } }) => {
        setQuery(value);   
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
        setQuery('');
    }

        return (
            <Header>
            <Searchform onSubmit={handleSubmit}>
                    <Searchformbutton>
                        <FaSearch></FaSearch>
                    <Searchformbuttonlabel>Search</Searchformbuttonlabel>
                </Searchformbutton>

                <Searchforminput
                    className="input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={query}
                    onChange = {handleChange}
                />
            </Searchform>
            </Header>
        );
}

export default Searchbar;