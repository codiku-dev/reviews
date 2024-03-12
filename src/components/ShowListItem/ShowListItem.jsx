export function ShowListItem({ shows }) {
// rlebhar https://image.tmdb.org/t/p/ à externaliser
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w300${shows.poster_path}`} alt="" />
            <div>
                <p>{shows.name}</p>
            </div>
        </div>
    )

}
