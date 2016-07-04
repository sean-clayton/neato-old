const pipeline = (...functions: any[]) => functions.reduce.bind(functions, (accumulated, f) => f(accumulated))

export default pipeline
