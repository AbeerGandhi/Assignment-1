const response = [
    {
        "name": "Amit",
        "city": "Mumbai",
        "skills": [
            "Actng",
            "Singing",
            "Dancing"
        ],
        "vehicle": {
            "model": "BMW",
            "year": 2021
        }
    },
    {
        "name": "Rahul",
        "city": "Jaipur",
        "skills": [
            "Swiming",
            "Walking",
            "Dancing"
        ],
        "vehicle": {
            "model": "Scoda",
            "year": 2019
        }
    },
    {
        "name": "Vijay",
        "city": "Pune",
        "skills": [
            "Sarcasm",
            "Debate",
            "RTI"
        ],
        "vehicle": {
            "model": "M80",
            "year": 1999
        }
    }
];

const fectchedData = response.filter(item => item.vehicle.year > 2020);

console.log('Fecthced data:', fectchedData);
