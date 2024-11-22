//get instances list from a schema 

import { domain, token } from "./constant"

export const getInstancesList = async(schemaId:string) :Promise<any>=> {
    const url = `${domain}tf-entity-ingestion/v1.0/schemas/${schemaId}/instances/list`;
    try{
        const res = await fetch(url,{
            headers:{
                authorization:`Bearer ${token}`
            }
        });
        let result = await res.json()
        return result
    }
    catch(err : any){
        return {
            res : false,
            message : err.message
        }
    }
}