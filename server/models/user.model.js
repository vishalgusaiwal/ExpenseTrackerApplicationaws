import mongoose from 'mongoose';
import crypto from 'crypto';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
    },
    email: {
        type: String,
        trim: true,
        unique: 'Email Already Exists',
        match: [/.+\@.+\..+/,'Please fill a valid email address']
    },
    created: {
        type: Date,
        default: Date.now()
    },
    updated: Date,
    hashed_password: {
        type: String,
        required: "Password is required"
    },
    salt: String
});

UserSchema.virtual('password').set(function (password) {
    console.log("came here");
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
}).get(function () {
    return this._password;
});

UserSchema.methods = {
    authenticate: function (plainText) {
        return this.encryptPassword(plainText) === this.hashed_password;
    },
    encryptPassword: function (password) {
        console.log(password);
        if (!password) {
            return '';
        }
        try {
            var result = crypto.createHmac('sha1', this.salt).update(password).digest('hex');
            console.log(result);
            return result;
        } catch (err) {
            console.log(err);
            return '';
        }
    },
    makeSalt: function () {
        return Math.round((new Date().valueOf() * Math.random())) + '';
    }
}

UserSchema.path('hashed_password').validate(function (v) {
    if (this._password && this._password.length < 6) {
        this.invalidate('password', 'Password must be atleast 6 character.');
    }
    if (this.isNew && !this._password) {
        this.invalidate('password', 'Password is required');
    }
});

export default mongoose.model('User', UserSchema);