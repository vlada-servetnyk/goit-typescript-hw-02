import { ChangeEvent, FormEvent, useState } from 'react';
import s from './SearchBar.module.css';
import { AiOutlineSearch } from "react-icons/ai";
import toast from 'react-hot-toast';

type Props = {
    onSubmit: (query: string) => void;
}

const SearchBar = ({onSubmit}: Props) => {
    const [value, setValue] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!value.trim()) {
            toast.error("Enter a search term");
            return;
        }
        onSubmit(value.trim());
        setValue('');
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
                        onChange={handleChange}
                        value={value}
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