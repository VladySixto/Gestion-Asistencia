export const handleError = (res, error, message = "Internal error") => {
    // Here we can add our monitoring logic in the future
    console.error(error)
    return res.status(500).json({ message, error: error.message })
}