export const starFirst = (data)=> {
  let stars = [];
  let leftArr = [];
  for (let i =  0; i < data.length;  i++) {
    if(data[i].star) {
      stars.push(data[i])
    }else {
      leftArr.push(data[i])
    }
  }
  // console.log(stars.concat(arr))

  return stars.concat(leftArr);
}

