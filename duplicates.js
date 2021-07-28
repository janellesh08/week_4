let arr = ["dog", "cat", "mouse", "cat", "horse", "dog", "chicken"]

function removeDuplicates(data){
    let noDuplicates = []
    data.forEach(element => {
        if (!noDuplicates.includes(element)){
            noDuplicates.push(element)
        }
    })
    return noDuplicates;
}

console.log(removeDuplicates(arr))