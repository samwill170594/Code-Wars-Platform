// https://www.codewars.com/kata/52a382ee44408cea2500074c/train/javascript

function determinant(m) {
    let sign = -1;
    let first_row = m[0];
    let deter = 0;

    if(m.length === 0) return 0;
    else if(m.length === 1) return m[0][0];
    else if (m.length=== 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];
    else {
        for(let index in first_row){
            sign *= -1;
            let sub_matrix = generate_sub_matrix(m,0,index);
            deter += sign * first_row[index] * determinant(sub_matrix);
        }
        return deter;
    }
  }

function generate_sub_matrix(m, position_x, position_y){

    let tab = [...m];
    let remove_x = tab.slice(position_x + 1);
    let result = [];
    for(let item of remove_x){
        let r = [];
        for(let i = 0; i < item.length; i++){
            if(i != position_y){
                r.push(item[i]);
            }
        }
        result.push(r);
    }
    return result;
}


console.log(determinant([[1]]));