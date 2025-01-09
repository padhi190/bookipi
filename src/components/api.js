const corrections = {
    'realy': 'really',
    'wierd': 'weird',
}

export const getCorrection = async (word) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(corrections[word]), 1200);
    })
}