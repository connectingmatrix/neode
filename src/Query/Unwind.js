export default class UnwindStatement {
    constructor(...args) {
        this._with = args;
    }

    toString() {
        const vars = this._with.join(',');
        return 'UNWIND '+  vars;
    }
}