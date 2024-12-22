import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true)

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("Failed Fetch");
                }

                const data = await response.json();
                setData(data);
            } catch ({ message }) {
                console.log(message);
                setError(message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return [data, error, isLoading];
}

export default useFetch;