// Data Structure
const groceries = ['milk', 'bread', 'eggs', 'flour', 'choose', 'sugar'];

// Algorithm for search
// BigO O(n)
const searchForItem = (item) => {
    for (let i = 0; i < groceries.length; i++) {
        if (groceries[i] == item) {
            console.log(`Found ${item}`);
        }
    }
}

searchForItem("eggs");