export class Planete {
    id: number;
    name: string;
    img: string;
    bio: string;

    constructor(id, name, img, bio) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.bio = bio;
    }
}
