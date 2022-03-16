function removeEmptyField(object){
    const newObject = {}
    for(let [key, value] of Object.entries(object)) {

        if(value !== '') {
            newObject[key] = value
        }

    }

    return newObject

}

function createSchemaObjectModel(object) {
    let noEmptyfieldsObject = removeEmptyField(object)

    if(object.city || object.street || object.country || object.zipCode) {
        noEmptyfieldsObject.address = {}

        if(object.city) {
            delete noEmptyfieldsObject.city
            noEmptyfieldsObject.address.city = object.city
        }

        if(object.street) {
            delete noEmptyfieldsObject.street
            noEmptyfieldsObject.address.street = object.street
        } 

        if(object.country) {
            delete noEmptyfieldsObject.country
            noEmptyfieldsObject.address.country = object.country
        }

        if(object.zipCode) {
            delete noEmptyfieldsObject.zipCode
            noEmptyfieldsObject.address.zipCode = object.zipCode
        }

    }

    return noEmptyfieldsObject
}


module.exports = createSchemaObjectModel