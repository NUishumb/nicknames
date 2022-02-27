export default class Validator {
    // eslint-disable-next-line class-methods-use-this
    validateUsername(name) {
        const pattern = /[A-Za-z]/;
        if (pattern.test(name[0]) && pattern.test(name[name.length - 1])) {
            return name.match(/\d{4,}|[^0-9A-Za-z\-_]/) === null;
        }
        return false;
    }
}
