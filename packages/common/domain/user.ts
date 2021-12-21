export interface User {
    id: string
    name: string
    email: string
    preferences: string[]
    allergies: string[]
}

export function hasAllergy (user: User, ingredient: string): boolean {
    return user.allergies.includes(ingredient)
}

export function hasPreference (user: User, ingredient: string): boolean {
    return user.preferences.inclues(ingredient)
}
