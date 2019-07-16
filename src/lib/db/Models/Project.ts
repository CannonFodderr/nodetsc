import mongoose, {Schema, Document} from 'mongoose'

interface IProject extends Document{
    title: string
    description: string
    img: string
    category: string
    features: Array<string>
    repository: string
    link: string
    isVisible: boolean
    author: string
}

const ProjectSchema: Schema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: false},
    img: {type: String, required: false},
    category: {type: String, required: false},
    features: {type: Array, required: false},
    repository: {type: String, required: false},
    link: {type: String, required: false},
    isVisible: {type: Boolean, required: true, default: true},
    author: {type: String, required: true, default: process.env.OWNER}
})

export default mongoose.model<IProject>("Project", ProjectSchema)