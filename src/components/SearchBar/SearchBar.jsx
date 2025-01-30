import { useState } from 'react';
import s from './SearchBar.module.css';
import { AiOutlineSearch } from "react-icons/ai";
import toast from 'react-hot-toast';

const SearchBar = () => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const searchValue = e.target.elements.search.value.trim();
        
        if (!searchValue) {
            toast.error("Enter a search term");
            return;
        }
        setValue(searchValue);
        form.reset();
    };

    return (
        <header className={s.header}>
            <form onSubmit={handleSubmit} className={s.form_search}>
                <div className={s.input_wrapper}>
                    <button  className={s.btn_search} type="submit">
                        <AiOutlineSearch />
                    </button>
                    <input
                        className={s.input_search}
                        name="search"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                     />
                </div>
            </form>
        </header>

    )
};

export default SearchBar;