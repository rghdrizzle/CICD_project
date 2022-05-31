import React, {useState} from "react";

const SelectShop = ({lists}) => {
    const [selected, setSelected] = useState("");

    return (

            <select value={selected} onChange={(event) => {
                setSelected(event.target.value.name)
            }}>
                {lists.map((s) => <option key={s.name} value={s}>{s.name}</option>)}
            </select>
    )
}

export default SelectShop