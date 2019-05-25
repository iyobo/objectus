/**
 * The purpose of this lib is to be a keeper of things for other things.
 * @type {{add: objects.add}}
 */

const objects = {
    add: (name, obj) => {
        objects[name] = obj;
    }
};


module.exports = objects;