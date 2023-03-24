export default function UserInfo({data}: any) {
    console.log("hello from user-info")
    return JSON.stringify(data, null, 2)
}