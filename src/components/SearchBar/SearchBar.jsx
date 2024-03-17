export const SearchBar = ({onChange})=>{

	function updateSearchBar(e){
		// rlebhar : Tout en anglais, et nommage, => inputValue
		const valeur = e.target.value
		onChange(valeur)
	}


	return <input type="text" onChange={updateSearchBar} />
}