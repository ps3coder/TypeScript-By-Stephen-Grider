import { User } from "./models/User";



const user = new User({ name: 'NEW', age: 20 })


user.events.on('change', () => {
    console.log('change')
})
user.events.trigger('change');