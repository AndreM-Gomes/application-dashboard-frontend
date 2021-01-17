import { Image } from '../shared/utils/image';

export class Client{
    constructor(
        public id: number,
        public title: string,
        public lineOfBusiness: string,
        public description: string,
        public logo: Image
    ){}
}