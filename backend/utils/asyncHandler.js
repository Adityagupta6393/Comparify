export const asyncHandler = (fn) => {
    Promise
    .resolve()
    .then(() => fn(req, res, next))
    .catch(err)
}