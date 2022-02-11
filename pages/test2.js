import React, {useState, useEffect} from 'react'
import Select from 'react-select'
import {subSubCategories} from "../services/subSubCategories";
import {filtersBySubsub} from "../services/filtersBySubsub";

let options = []

function App() {
    useEffect(() => {
        let mounted = true;
        subSubCategories()
            .then(items => {
                if(mounted) {
                    const data = items.data.map(e=>{
                        options.push({value:e['id'], label:e['title']})
                    })
                }
            })
        return () => mounted = false;
    }, [])
    let handleChange = (selectedOptions) => {
        sendDataUrl(selectedOptions)
    }
    let sendDataUrl = (selectedOptions) => {
        filtersBySubsub(selectedOptions.label).then(items => {
            if(items) {
                console.log(items)
            }
        })
    }
    return(
        <div>
            <Select
                name="colors"
                options={options}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={handleChange}
            />
        </div>
    )
}

export default App;