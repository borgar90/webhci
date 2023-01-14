/*******************
 * A validator that validates all the forms on the site. 
 */


function validateFormModal (){
    var modalForm = $('#modalForm');
    return validator($(modalForm));
}
function validateFormContactPage(contactForm){
    return validator($(contactForm));
}

function inqueryFormValidate(inqueryForm){
    return validator($(inqueryForm));
}

function validator(form){ // a validator to validate all the forms on my site. 
    var error = $('.error');
    var isValid = true;
    var labels = $(form).children('label');
    console.log(error);
    labels.each((i)=>{ // for each label on the page 
        var input = $(form).children('input')[i]; //input that relates to current label
        if($(input).val() == ''){ //input is empty
            addCheckmark(false, $(labels[i]).children('.label'));
            if(isEmail($(input))){
                $(error[i]).html('<p>You must fill out this field, with a valid email. I.e. Borgar@gmail.com</p>');
            }
            else{
                $(error[i]).html('<p>You must fill out this field</p>');
            }
            $(input).css('border', '1px solid red');
            isValid = false;
            
        }else{ //input contains data, now for the validation of the data
           
            if(isAge($(input))) // is age input
                if(!validateAge($(input), i, labels)){
                 isValid =false;
                }
            else if(isPhone($(input))) // is phone input
                if(!validatePhone($(input), i, labels)){
                    isValid = false;
                }
            
            if(isValid){ // data is valid
                $(input).css('border', '1px solid green');
                $(error[i]).html('');
                addCheckmark(true, $(labels[i]).children('.label')); 
            }
        }
        if($(labels[i]).attr("for") == "message"){ //validation for message
            var textField = $(form).children('#message');
            if($(textField) && $(textField).val() == ''){
                $(error[i]).html('<p>You must fill out this field</p>');
                $(textField).css('border', '1px solid red');
                isValid = false;
                addCheckmark(false, $(labels[i]).children('.label')); 
            }else{
                $(textField).css('border', '1px solid green');
                $(error[i]).html('');
                addCheckmark(true, $(labels[i]).children('.label')); 
            }
        }
        
    })
    
    return isValid;
}


function validatePhone(input,i, labels){
    var error = $('.error');
    if(isPhone($(input)) && $(input).val() > 99999999 || isPhone($(input)) && $(input).val() < 10000000){ //Check if phone is within bounds
        $(input).css('border', '1px solid red');
        addCheckmark(false, $(labels[i]).children('.label'));
        $(error[i]).html('<p>You must fill out your eight digit number</p>');
        return false;
    } 
    return true
}
function validateAge(input,i, labels){
    var error = $('.error');
    if(isAge($(input)) && $(input).val() < 1 || isAge($(input)) && $(input).val() > 199){
        $(input).css('border', '1px solid red');
        addCheckmark(false, $(labels[i]).children('.label'));
        $(error[i]).html('<p>You must fill out your age between 0 and 200</p>');
        return false;
    }
    return true
}




function isEmail(inputField){
    return inputField.attr('type')=='email';
}
function isPhone(inputField){
    return inputField.attr('type')=='tel';
}
function isAge(inputField){
    return inputField.attr('type')=='number';
}

function addCheckmark(isValid, modalElement){
    if(isValid){
        return $(modalElement).html('&#10004;').css('color', 'green');
    }else{
        return $(modalElement).html('X').removeClass('success').css('color', 'red');
    }
}