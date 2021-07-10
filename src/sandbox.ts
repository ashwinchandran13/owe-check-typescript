// type def
type StringOrNum = string | number;
type objectWithName = {
    name: string,
    uid: StringOrNum
};
// const logDetails = (uid: string | number, item: string) => {
    // console.log(`${item} has a uid of ${uid}`);
// }
const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

// const logDetailsAgain = (user: {name: string, uid: string | number}) => {
    // console.log(`${user.name} has a uid of ${user.uid}`);
// }
const logDetailsAgain = (user: objectWithName) => {
    console.log(`${user.name} has a uid of ${user.uid}`);
}