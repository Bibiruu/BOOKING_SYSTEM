import db from '../../utils/db.js'
import bcrypt from 'bcrypt'

export function findUserByEmail(email) {
    return db.user.findFirst({
        where: {
            email
        }
    })
}

export async function registerUser(userData) {
    // hashing password 10 times
    const { password , ...profileData } = userData
    const hashPassword = await bcrypt.hash(password, 10)
    console.log(hashPassword)
    return db.user.create({ 
        data: {
            password: hashPassword,
            ...profileData
        }
    })
} 