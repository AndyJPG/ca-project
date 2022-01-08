export const getCurrentDateInISOString = (): string => new Date().toISOString()

export const generateUniqueIdPlaceholder = (): string => `uid_placeholder_${(Math.random() * 201).toString()}`
