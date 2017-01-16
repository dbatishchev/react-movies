import bcrypt from 'bcrypt';

export default function hashPassword(password) {
    var salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}
