// import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';
import { Sync } from './Sync';



export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootURL = 'http://localhost:3000/users';

export class User {

  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootURL);

  // constructor(private data: UserProps) { }

  // get(propName: string): number | string {
  //   return this.data[propName];
  // }

  // set(update: UserProps): void {
  //   Object.assign(this.data, update);
  // }

  // fetch(): void {
  //   axios.get(`http://localhost:3000/users/${this.get('id')}`).then(
  //     (response: AxiosResponse): void => {
  //       this.set(response.data);
  //     }
  //   );
  // }

  // save(): void {
  //   const id = this.get('id');

  //   if (id) {
  //     axios.put(`http://localhost:3000/users/${id}`, this.data);
  //   } else {
  //     axios.post('http://localhost:3000/users', this.data);
  //   }
  // }
}
