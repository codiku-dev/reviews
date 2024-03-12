import { useEffect, useState } from "react"
import { APIFilm } from "../../api/APIFilm"
import { FilmList } from "../../components/FilmList/FilmList"
import { Header } from "../../components/Header/Header"
import { Input } from "../../components/Input/Input"

export function HomePage() {

    const [filmList, setFilmList] = useState([])
    // const [searchQuery, setSearchQuery] = useState("")
    // const filteredListFilm = filmSearchList.filter((t) => t.original_name.toLowerCase().includes(searchQuery.toLowerCase()))

    useEffect(() => {
        // rlebhar : ne fetch pas tous les films, seulement les populairs
        fetchAllFilm()
    }, [])

    async function fetchAllFilm() {
        const films = await APIFilm.fetchAllFilm()
        setFilmList(films)
    }

    // rlebhar : Nom un peu config, fetchFilmListByTitle ou loadFilmListByTitle
    async function fetchSearchFilmList(title) {
        const filmsByTitle = await APIFilm.fetchFilmByTitle(title)
        setFilmList(filmsByTitle)
    }

    // rlebhar : logs à supprimer
    console.log(filmList)

    const onKeyDown = (text) => {
        fetchSearchFilmList(text)
    }

    // const onChange = (text) => {
    //     setSearchQuery(text)
    // }

    return (
        <>
            <Header />
            <Input onKeyDown={onKeyDown} />
            {/* <InputFilter onChange={onChange} /> */}
            <FilmList listFilm={filmList} />
        </>
    )

}