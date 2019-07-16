import mongoose, {Schema, Document} from 'mongoose'

interface IUser extends Document{
    email: string;
    firstName: string;
    lastName: string;
    age: number;
}

const UserSchema: Schema = new Schema({
    email: {type: String, required: true, unique: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    age: {type: Number, required: false}
})


export default mongoose.model<IUser>('User', UserSchema)