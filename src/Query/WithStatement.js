export default class WithStatement {
    constructor(...args) {
        this._with = args;
    }

    toString() {
        const vars = this._with.join(',');
        return 'WITH '+  vars;
    }
}

export class UnionStatement {
    constructor(args) {
        this._with = args;
    }

    toString() {
        return 'UNION '+  this._with;
    }
}