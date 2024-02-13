const fs = import('fs').promises;

// Attach 'exit' and 'unhandledRejection' events to the 'process' object
process.on('exit', (code) => {
    console.log(`'exit' event called with code ${code}`);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    console.log("'unhandledRejection' event called");
});

// Promisified version of fs.readFile function
const readFileAsync = async (fileName) => {
    try {
        const data = await fs.readFile(fileName);
        return data.toString();
    } catch (error) {
        throw new Error(`Error reading file: ${error.message}`);
    }
};

// Example usage with incorrect file name
readFileAsync('nonexistentfile.txt')
    .then(data => {
        console.log('File contents:', data);
    })
    .catch(error => {
        console.error(error.message);
        throw new Error('An error occurred in the catch handler');
    });
