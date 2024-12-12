// Data Structure
const groceries = ['milk', 'bread', 'eggs', 'flour', 'cheese', 'sugar'];

// Algorithm for search
// BigO O(n)
const searchForItem = (item) => {
    let found = false;

    for (let i = 0; i < groceries.length; i++) {
        if (groceries[i] == item) {
            console.log(`Found ${item}`);
            found = true;
        }
    }

    if (!found) {
        console.log("Not Found");
    }
}

searchForItem("eggs");
searchForItem("salt");