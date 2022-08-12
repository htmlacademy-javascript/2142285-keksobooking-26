function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
      if(min>=max){
      throw new Error;
    }
    return Math.floor(Math.random()*(max-min+1)+min);
  }
  function getRandomPositiveFloat (min, max, digits = 1) {
    const lower = Math.min(Math.abs(min), Math.abs(max));
    const upper = Math.max(Math.abs(min), Math.abs(max));
    const result = Math.random() * (upper - lower) + lower;
    return +result.toFixed(digits);
  }
  const getRandomArrayElement = (elements) => {
    return elements[getRandomInt(0, elements.length - 1)];
  }
  function getRandomArray(arrays){
    const maxLength = arrays.length;
   const arraysLangth = getRandomInt(0,maxLength)
    const array = []
   for (i=0; i <= arraysLangth; i++){
       const indexElement = getRandomInt(0,maxLength - 1);
       const element = arrays[indexElement];
       if (!array.includes(element))
        array.push(element)
       }
       return array
}  
export {getRandomInt,getRandomPositiveFloat,getRandomArrayElement}