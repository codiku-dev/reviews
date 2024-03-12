export const InputFilter = ({ onChange }) => {

    const handleChange = (ev) => {
        onChange(ev.target.value)
    }
//rlebhar : pas de <br/> , écris du style
    return (

        <div>
            <br />
            <form className="d-flex">
                <input className="form-control me-2" type="text" placeholder="Filter Task" onChange={handleChange} />
            </form>
            <br />
        </div>
    )
}