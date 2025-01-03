import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

interface UserProps {
    id?: number;
    name?: string;
    age?: number
}

export class User {

    public events = new Eventing();

    constructor(private data: UserProps) { }

    get(propName: string): number | string {
        return this.data[propName];
    }
    set(update: UserProps) {
        Object.assign(this.data, update);
    }

    fetch() {
        axios.get(`http://localhost:3000/users/${this.get('id')}`).then((response: AxiosResponse) => {
            this.set(response.data);
        })
    }
    save(): void {
        const id = this.get('id');

        if (id) {
            axios.put(`http://localhost:3000/users/${id}`, this.data);
        } else {
            axios.post('http://localhost:3000/users', this.data);
        }
    }

}
