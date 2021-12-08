// Input: Array of strings
// Output: Array of strings with the start of each element capitalized

const capitalize = (input: string): string => {
    return input.charAt(0).toUpperCase() + input.slice(1);
}

const capitalizeFirst = (list: string[]): string[] => {
    if (list.length === 1) {
        return [capitalize(list[0])];
    }
    const capitalizedList = capitalizeFirst(list.slice(0, -1)); // keep removing last element from list until array is of length 1
    console.log('capitalized list before push ', capitalizedList)
    console.log('list', list)
    capitalizedList.push(capitalize(list.slice(-1)[0]));
    console.log('capitalized list after push', capitalizedList)
    return capitalizedList;
}

console.log(capitalizeFirst(['car', 'taco', 'banana', 'tree', 'parrot', 'dog'])); // ['Car','Taco','Banana']

// car taco banana
// capitalizeFirst([car, taco])
// car taco
// capitalizeFirst([car])
// returning [Car]
// back at L.23 