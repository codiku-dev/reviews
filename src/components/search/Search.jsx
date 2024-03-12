import { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import SearchCSS from './Search.module.css';

// rlebhar : naming un callback c'est generalement "on" suivit de l'evenemnt ici onSubmit ferait mieux l'affaire
export function Search({ setSearch }){

    // rlebhar : pas certain qu'on ai besoin d'un state, tu peux onChange de l'input, appeler un callBack onChange,
    // Et au formSubmit  appeler onSubmit directement , rien a stocker et pas besoin de useEffect
    const [input, setInput] = useState('');
    
    // rlebhar : On ne veut submit que quand press Enter
    function formSubmit(e){
        e.preventDefault();
        console.log("submit")
        setSearch(input);
    }

    useEffect(() => {
        setSearch(input);      
    }, [input])

    return(
        <form onSubmit={formSubmit} className={SearchCSS.search}>
            <input value={input} onChange={(e) => setInput(e.target.value)} type='text' className={SearchCSS.input} />
            <button type='submit' className={SearchCSS.btn}><CiSearch className={SearchCSS.img} /></button>
        </form>
    )
}