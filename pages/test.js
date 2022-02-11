import React, { useEffect, useState } from 'react';
import {subCategories} from "../services/subCategories";
function App() {
    const [logoPost, setLogoPost] = React.useState([]);
    useEffect(() => {
        let mounted = true;
        subCategories()
            .then(items => {
                if(mounted) {
                    setLogoPost(items.data)
                }
            })
        return () => mounted = false;
    }, [])

    return(
        <div>
            {logoPost.map(e=>{
                console.log(e)
            })}
        </div>
    )
}

export default App;