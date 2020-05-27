export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageURL: string;

    constructor(id: number, name: string, description: string = '', price: number = 0, imageURL: string = 'https://w7.pngwing.com/pngs/213/478/png-transparent-electric-guitar-jackson-guitars-jackson-rhoads-gojira-electric-guitar.png') {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.imageURL = imageURL
    }
}
