// import css from './SearchBar.module.css'
// import toast, { Toaster } from 'react-hot-toast';
// import {useRef} from 'react';
// import { FormEvent } from 'react';

// type SearchBarProps = {
//     onSubmit: (value: string) => void;
// };

// export default function SearchBar({ onSubmit }: SearchBarProps) {
//     const inputRef = useRef<HTMLInputElement>(null);

//     const handleSubmit = (evt: FormEvent) => {
//         evt.preventDefault();
//         if (!inputRef.current) return;
//         const value = inputRef.current.value.trim();
//         if (value === '') {
//             toast.error('Enter a search!');
//             return;
//         }
//         onSubmit(value);
//         inputRef.current.value = '';

//     }

//     return (
//         <header>
//             <Toaster/>
//         <form onSubmit ={handleSubmit} className={css.searchBox}>
//             <input
//                 type="text"
//                 autoComplete="off"
//                 autoFocus
//                 placeholder="Search images and photos"
//                 ref={inputRef}
//             />
//             <button type="submit">Search</button>
//         </form>
//     </header>

//     )
// }

import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { useRef } from 'react';
import { FormEvent } from 'react';

type SearchBarProps = {
  onSubmit: (value: string) => void;
};

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if (!inputRef.current) return;
    const value = inputRef.current.value.trim();
    if (value === '') {
      toast.error('Enter a search!');
      return;
    }
    onSubmit(value);
    inputRef.current.value = '';
  };

  return (
    <header className={css.header}>
      <Toaster />
      <form onSubmit={handleSubmit} className={css.searchBox}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          ref={inputRef}
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
    </header>
  );
}
