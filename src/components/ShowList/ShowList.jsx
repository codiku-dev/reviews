import { ShowListItem } from '../ShowListItem/ShowListItem';


export function ShowList({ shows }) {

    return (
        <div>
            {shows.map((item) => (
                <ShowListItem
                    key = {item.id}
                    shows = {item}
                />
            ))}
        </div>
    )

}
