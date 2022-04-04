class GenerateObject {
    /**
     *
     * @param {Object} object
     * @returns Object
     */
    static removeEmptyFields(object) {
        const newObject = {};
        for (let [key, value] of Object.entries(object)) {
            if (value !== '') {
                newObject[key] = value;
            }

            if (typeof value == 'object') {
                for (let [key2, value2] of Object.entries(object[key])) {
                    if (value2 === '') {
                        delete newObject[key][key2];
                    }
                }
            }
        }

        // If the object has a field that is also an object, this delete the empty fields of that object too
        for (let [key, value] of Object.entries(newObject)) {
            if (typeof value == 'object') {
                if (Object.keys(value).length == 0) {
                    delete newObject[key];
                }
            }
        }

        return newObject;
    }

    /**
     *
     * @param {Object} object
     * @returns Object
     */

    static addAddressObject(object) {
        let newObject = object;
        if (object.city || object.street || object.country || object.zipCode) {
            object.address = {};
            if (object.city) newObject.address.city = object.city;
            if (object.street) newObject.address.street = object.street;
            if (object.country) newObject.address.country = object.country;
            if (object.zipCode) newObject.address.zipCode = object.zipCode;
        }

        for (let [key, value] of Object.entries(newObject)) {
            if (
                key == 'city' ||
                key == 'street' ||
                key == 'country' ||
                key == 'zipCode'
            ) {
                delete newObject[key];
            }
        }

        return newObject;
    }

    /**
     *
     * @param {Object} object
     * @returns Object
     */

    static addDescriptionObject(object) {
        let newObject = object;
        if (object.bedrooms || object.bathrooms || object.livingRoom) {
            object.description = {};
            if (object.bedrooms)
                newObject.description.bedrooms = object.bedrooms;
            if (object.bathrooms)
                newObject.description.bathrooms = object.bathrooms;
            if (object.livingRoom)
                newObject.description.livingRoom = object.livingRoom;
        }

        for (let [key, value] of Object.entries(newObject)) {
            if (
                key == 'bedrooms' ||
                key == 'bathrooms' ||
                key == 'livingRoom'
            ) {
                delete newObject[key];
            }
        }

        return newObject;
    }
}

module.exports = GenerateObject;
