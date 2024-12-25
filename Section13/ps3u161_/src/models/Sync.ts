import axios, { AxiosResponse, AxiosPromise } from 'axios';
// import { UserProps } from './User';

// 'http://localhost:3000/users'


interface HasId {
    id?: number
}

export class Sync<T extends HasId> {

    constructor(public rootURL: string) { }

    fetch(id: number): AxiosPromise {
        // axios.get(`${this.rootURL}/${id}`).then(
        //     (response: AxiosResponse): void => {
        //         this.set(response.data);
        //     }
        // );
        return axios.get(`${this.rootURL}/${id}`)
    }
    save(data: T): AxiosPromise {
        // const id = this.get('id');
        // const id = data.id;
        const { id } = data;

        if (id) {
            return axios.put(`${this.rootURL}/${id}`, data);
        } else {
            return axios.post(this.rootURL, data);
        }
    }
}