import React, { useEffect, useState} from 'react';
import axios from 'axios';

const MyComponent = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () =>{
            setLoading(true);
            try {

                const {data: response} =
                    await axios({
                    method: 'get',
                    url: 'http://34.125.190.3/api/logos/',
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                        'X-Amz-Cf-Id' : 'ykQnGSNOQDNBYEbqJnUO7pSs9zV4gWBryVMh9nNN1nblbEQtc3GH2A'
                    }
                });
                setData(response);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }

        fetchData().then(r => console.log(r));
    }, []);

    return (
        <div>
            {loading && <div>Loading</div>}
            {!loading && (
                <div>
                    <h2>Doing stuff with data</h2>
                    {data}
                </div>
            )}
        </div>
    )
}

export default MyComponent;