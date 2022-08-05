var dateFormatting = require("date-formatting");

export const RediretToPage  = (path) =>{
    window.location.href = path;  
}

export  const isEmptyString = value => {
    return (value === undefined || value == null || value.trim().length <= 0) ? true : false;
}

export const formateDateTime = (date) => {
    return dateFormatting(new Date(`${date}`), 'dd-MM-yyyy H:mm');
};

export const sumValue = (value) => {
    let sum = 0;
    
    if(value.length > 0){
      value.forEach((element) => {
        sum += parseInt(element.answer);
      });
      return sum;
    }
  };

  