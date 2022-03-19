class GenerateObject {
    // constructor(object) {
    //     this.object = object
    // }

    static removeEmptyFields(object) {
        const newObject = {}
        for (let [key, value] of Object.entries(object)) {
    
            if (value !== '') {
                newObject[key] = value
            }
    
            if (typeof value == 'object') {
                for (let [key2, value2] of Object.entries(object[key])) {
                    if (value2 === '') {
                        delete newObject[key][key2]
                    }
                }
            }
            
        }
        
        // If the object has a field that is also an object, this delete the empty fields of that object too
        for (let [key, value] of Object.entries(newObject)) {
            if (typeof value == 'object') {
                if (Object.keys(value).length == 0) {
                    delete newObject[key]
                }
            }
        }
        
        return newObject
    }

    static addAddressObject(object) {
        let newObject = object
        if(object.city || object.street || object.country || object.zipCode) {
            object.address = {}
            if(object.city) newObject.address.city = object.city
            if(object.street) newObject.address.street = object.street
            if(object.country) newObject.address.country = object.country
            if(object.zipCode) newObject.address.zipCode = object.zipCode
        }

        for(let [key, value] of Object.entries(newObject)) {
            if(key == 'city' || key == 'street' || key == 'country' || key == 'zipCode') {
                delete object[key]
            }
        }

        return newObject

    }
    
}

module.exports = GenerateObject

// function removeEmptyField(object){
//     const newObject = {}
//     for(let [key, value] of Object.entries(object)) {

//         if(value !== '') {
//             newObject[key] = value
//         }

//     }

//     return newObject

// }

// function createSchemaObjectModel(object) {
//     let noEmptyfieldsObject = removeEmptyField(object)

//     if(object.city || object.street || object.country || object.zipCode) {
//         noEmptyfieldsObject.address = {}

//         if(object.city) {
//             delete noEmptyfieldsObject.city
//             noEmptyfieldsObject.address.city = object.city
//         }

//         if(object.street) {
//             delete noEmptyfieldsObject.street
//             noEmptyfieldsObject.address.street = object.street
//         } 

//         if(object.country) {
//             delete noEmptyfieldsObject.country
//             noEmptyfieldsObject.address.country = object.country
//         }

//         if(object.zipCode) {
//             delete noEmptyfieldsObject.zipCode
//             noEmptyfieldsObject.address.zipCode = object.zipCode
//         }

//     }

//     return noEmptyfieldsObject
// }

// function generateObject(object) {
// 	const newObject = {}
// 	for (let [key, value] of Object.entries(object)) {

// 		if (value !== '') {
// 			newObject[key] = value
// 		}

// 		if (typeof value == 'object') {
// 			for (let [key2, value2] of Object.entries(object[key])) {
// 				if (value2 === '') {
// 					console.log('vazio')
// 					delete newObject[key][key2]
// 				}
// 			}
// 		}

// 	}

// 	for (let [key, value] of Object.entries(newObject)) {
// 		if (typeof value == 'object') {
// 			if (Object.keys(value).length == 0) {
// 				delete newObject[key]
// 			}
// 		}
// 	}

// 	return newObject

// }

