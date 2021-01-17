import { Image } from "./image";

export class Base64Image extends Image{

    constructor(private data: string){
        super();
    }
    
    getSrc(){
        return `data:image/png;base64,${this.data}`;
    }
}