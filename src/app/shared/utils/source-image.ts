import { Image } from "./image";

export class SourceImage extends Image{

    constructor(private sourceLink: string){
        super();
    }
    
    getSrc(){
        return this.sourceLink;
    }
}