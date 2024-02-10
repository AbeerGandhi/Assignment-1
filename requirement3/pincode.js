const fetch = import ('node-fetch');

// Function to fetch pincode data for a given offset
function fetchPincodeData(offset) {
    return fetchPincodeData(`https://api.postalpincode.in/pincode?page=${offset}&limit=10`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => data)
        .catch(error => {
            console.error('Error fetching data:', error);
            throw error; // Rethrow the error to propagate it further
        });
}

// Array of offsets
const offsets = [31, 51, 61];

// Array to store promises
const promises = offsets.map(offset => fetchPincodeData(offset));

// Using Promise.all to combine data from all promises
Promise.all(promises)
    .then(dataArray => {
        // Combining data using the spread operator
        const combinedData = [...dataArray.flat()];
        console.log(combinedData);
    })
    .catch(error => console.error('Error:', error));
