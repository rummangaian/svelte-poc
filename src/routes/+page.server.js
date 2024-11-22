import { dummyJsonDomainEndpoint } from "../services/constant";

export async function load () {
    const data = await fetch(`${dummyJsonDomainEndpoint}/todos`)
    const res = data.json()
    return {
        res : res
    }
}