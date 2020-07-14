export function qoutereplace(str) {
 return str.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": ')
}