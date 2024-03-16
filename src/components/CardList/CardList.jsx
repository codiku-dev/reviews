import { Card } from '../Card/Card'

// rlebhar : Le style fixe derait être dans un module.css
// Nommag de la props en tvShowList ou movieList et adapter le nommage de "data" dans le map, idem pour le nom des props de <Card/>
export function CardList({ dataList }) {
    return (

        <div style={{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', margin: '0 '}}>
            {dataList.map((data, key) => {
                return (
                    <Card key={key} content={data} />
                )
            })}
        </div>
    )
}