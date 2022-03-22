import { document } from "../schema/documentSchema.js";
const getDocument = async (id)=>{
    if (id===null) return ;
    const documents = await document.findById(id);
    if(documents){
        return documents;
    }else{
        return document.create({_id:id,data:""})
    }

};
const updateDocument = async (id,data)=>{
    return await document.findByIdAndUpdate(id,{data});
};
export {getDocument,updateDocument};