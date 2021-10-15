export function getObjectLength(obj: object) {
    let result = 0
    for (let _ in obj) result++;
    return result
}