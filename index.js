function myEach(collection, callback){
 for (let ans in collection){
   callback(collection[ans])
 }
 return collection
}

function myMap(collection, callback){
  let newArray = []
  for (let ans in collection){
    newArray.push(callback(collection[ans]))
  }
  return newArray
}

function myReduce(collection, callback, acc){
  let copy = [...collection]
  acc = acc || copy.shift()
  for (let ans in copy){
    acc = callback(acc, copy[ans], collection)
  }
  return acc
}