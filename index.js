/**
 * The purpose of this lib is to be a keeper of things for other things.
 * @type {{add: objects.add}}
 */

const jlf = {
    add: (name, obj) => {
        objects[name] = obj;
    }
};

exports.jlf = jlf;

module.exports = jlf;