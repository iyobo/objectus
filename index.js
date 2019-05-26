/**
 * The purpose of this lib is to be a keeper of things for other things.
 * @type {{add: objects.add}}
 */

export const jlf = {
    add: (name, obj) => {
        objects[name] = obj;
    }
};


export default jlf;