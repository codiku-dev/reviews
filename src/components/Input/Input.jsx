export const Input = ({ onKeyDown }) => {

    const handleChange = (ev) => {
        if (ev.key === 'Enter') {
            onKeyDown(ev.target.value)
        }
    }
//rlebhar : fragment inutile, ( br devrait être du style.)
    return (

        <>
            <div className="d-flex">
                <br />
                <input className="form-control me-2" type="text" placeholder="Search a film" onKeyDown={handleChange} />
                <br />
            </div>
            <br />
        </>
    )
}