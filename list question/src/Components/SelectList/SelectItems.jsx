import React, { useContext } from "react";
import { selectedList } from "../../App";
import SelectLists from "./SelectLists";

const SelectItems = () => {

    const lists = useContext(selectedList)

    return (
        <div>
            <h1>Selected Items</h1>
            {
                lists.length > 0 && (
                    lists.map(list => <SelectLists key={list.id} list={list} />)
                ) 
            }
        </div>
    );
}
 
export default SelectItems;

