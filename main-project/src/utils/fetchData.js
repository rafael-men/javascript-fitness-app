export const exerciseOptions = {
	method: 'GET',
	headers: {
        'x-rapidapi-key': '65201c87cemsh2ac054ff675952fp11026ejsna5422f9595c9',
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
};


export const fetchData = async (url,options) => {
    const response = await fetch(url,options)
    const data = await response.json()
    return data
}