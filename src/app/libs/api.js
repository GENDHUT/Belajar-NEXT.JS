const getApiResponse = (resource,query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    return {
        
    }
}

export default getApiResponse