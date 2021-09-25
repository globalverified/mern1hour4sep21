import mongoose from 'mongoose';
//ek id field a jaye and autoincrement kare 0 se
import autoincrement from 'mongoose-auto-increment';

const userSchema = mongoose.Schema({ 
    name: String,
    username: String,
    email: String,
    phone: Number
});

//connnection ko auto increment k sath initialize karana hoga
autoincrement.initialize(mongoose.connection);
//apne schema ko auto increment k sath sync karna hai
userSchema.plugin(autoincrement.plugin,'user');
const user = mongoose.model('user',userSchema);

export default user;

