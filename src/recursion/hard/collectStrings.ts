// Input: nested object
// Output: array of all strings found in object

const collectStrings = (input: any, collection: string[] = []): string[] => {
    for (let field in input) {
        if (typeof input[field] === "string") {
            collection.push(input[field]);
        }
        if (typeof input[field] === "object") {
            collectStrings(input[field], collection);
        }
    }
    return collection;
}

const testCollectStrings = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(testCollectStrings)) // ["foo", "bar", "baz"])