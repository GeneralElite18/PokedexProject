

export function getTypes(data, types){
    let typeList = [];
    for(let i = 0; i < data.length; i++){
        const typeArray = data[i].type
        if(!typeList.includes(typeArray[0])){
            typeList.push(typeArray[0]);
        }
        if(typeArray.length > 1){
            if(!typeList.includes(typeArray[1])){
                typeList.push(typeArray[1]);
            }
        }
    }
    return typeList;
}

export function filterByType(data, type){
    if(type == ""){
        return data;
    }
    let filteredTypes = data.filter((element) => {
        return element.type.includes(type);
    })
    return filteredTypes;
}

export function filterByWeakness(data, weakness){
    if(weakness == ""){
        return data;
    }
    let filteredWeaknesses = data.filter((element) => {
        return element.weaknesses.includes(weakness);
    })
    return filteredWeaknesses;
}