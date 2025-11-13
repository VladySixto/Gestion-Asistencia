export const handleError = (coderes,res, error, message = "Internal error") => {
    console.error(error)
    //devuelve el que se pasa por parametro o 500 si es nulo
    return res.status(toNumber(coderes) || 500).json({ message, error: error.message })
}