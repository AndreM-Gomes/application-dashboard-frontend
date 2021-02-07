import { Image } from '../shared/utils/image';

export class Client{
    constructor(
        public id: number | null,
        public name: string,
        public occupation: string,
        public description: string,
        public logo: File | string
    ){}
}
