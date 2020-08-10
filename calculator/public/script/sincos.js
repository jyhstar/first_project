var flag = '';
function typing(input){
    if(flag ==='R'){
        $('#inputBox').val('0');
        flag = '';
    }
    var inputText = $('#inputBox').val();
    switch(input){
        case 'C':
            $('#inputBox').val('0');
            break;
        case 'del':
            $('#inputBox').val(inputText.substring(0,inputText.length - 1));
            break;
        case 'sin':
        case 'cos':
            var value = 0;
            var digit = 100000000000000;
            if(input === 'sin'){
                value = Math.round(Math.sin((inputText * Math.PI)/180)*digit)/digit;
            }else if(input === 'cos'){
                value = Math.round(Math.cos(inputText * Math.PI/180)*digit)/digit;         
            }
            
            $('#inputBox').val(input+'('+inputText+'°)='+value);
            flag = 'R';
            break;
        default:
            if(inputText === '0' && input != '.'){
                $('#inputBox').val(input);
            }
            else{
                $('#inputBox').val(inputText+input);
            }
            break;
    }
};