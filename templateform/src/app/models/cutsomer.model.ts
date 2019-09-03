export class ICustomer {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public fulltime: boolean,
        public gender: string,
        public codelang: string
    ) {}
}
