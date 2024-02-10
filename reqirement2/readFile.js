// Importing the fs module
import { readFile } from 'fs';

// File path
const filePath = 'poem.txt';

// Reading file contents
readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:');
    console.log(data);
});
