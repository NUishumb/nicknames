export default class Validator {
    // eslint-disable-next-line class-methods-use-this
    validateUsername(name) {
        return /^[a-zA-Z]+\D+\d{0,3}[^\-_\0-9]$/.test(name);
    }
}
