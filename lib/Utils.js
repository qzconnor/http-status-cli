function getCode(codes, code) {
    const isExact = codes.find(c => c.code === code) !== undefined;
    return {
        query: code,
        exact: isExact,
        result: isExact ? codes.find(c => c.code === code) : codes.filter(c => c.code.startsWith(code))
    }
}

module.exports= {
    getCode
}
