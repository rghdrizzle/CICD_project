import React, {useState} from "react";

const SelectCategory = ({lists}) => {
    const [selected, setSelected] = useState("");

    return (
        <select value={selected} onChange={(event) => setSelected(event.target.value)}>
            {lists.map((list) => <option key={list.category} value={list.category}>{list.category}</option>)}
        </select>
    )

}

export default SelectCategory