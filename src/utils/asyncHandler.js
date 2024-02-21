// for promise.then.catch

const asyncHandler = (requestHandlerFn) => {
    return (req, res, next) => {
        Promise.resolve(requestHandlerFn(req, res, next))
        .catch((err) => next(err))
    }
}


export {asyncHandler}





// asyncHandler is a HOF 

// const asyncHandler = () => {}
// const asyncHandler = (func) => { () => {}}
// const asyncHandler = (func) =>  () => {}
// const asyncHandler = (func) => aync () => {}

// for try catch

// const asyncHandler = (fn) =>  async (req, res, next) => {
//     try{
//         await fn(req, res, next)
//     }catch(error){
//         res.status(err.code || 500).json({
//             success: false,
//             message : err.message
//         })

//     }
// }
