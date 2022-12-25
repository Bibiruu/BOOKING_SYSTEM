import db from '../../utils/db.js'

export function fetchServices() {
    return db.service.findMany()
}