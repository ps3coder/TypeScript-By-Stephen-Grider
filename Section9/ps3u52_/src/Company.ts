import { faker } from '@faker-js/faker';


export class Company {
    companyName: string;
    catchPharse: string;
    location: {
        lat: number;
        lng: number;
    }
    constructor() {
        this.companyName = faker.company.name();
        this.catchPharse = faker.company.catchPhrase();
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude(),
        };
    }
}
