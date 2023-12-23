
function label_create(ele_label,ele_att1,ele_at1Val,content)
{
    var ele = document.createElement(ele_label);
    ele.setAttribute(ele_att1,ele_at1Val);
    ele.innerHTML= content;
    return ele;
}

function break_create(ele_break)
{
    var ele_ts = document.createElement(ele_break);
    
    return ele_ts;
}

function input_create(ele_input,ele_att1,ele_att2,ele_att3)
{
    var ele_in = document.createElement(ele_input);
    ele_in.setAttribute(ele_att1,ele_att2);
    ele_in.id = ele_att3;
    return ele_in;
}

var label1 = label_create("label","for","text1","firstname");
var break1 = break_create("br");
var input1 = input_create("input","type","text","text1");
var break2 = break_create("br");


var label2 = label_create("label","for","text2","middlename");
var break3 = break_create("br");
var input2 = input_create("input","type","text","text2");
var break4 = break_create("br");

var label3 = label_create("label","for","text3","lastname");
var break5 = break_create("br");
var input3 = input_create("input","type","text","text3");
var break6 = break_create("br");

var label4 = label_create("label","for","email","Email");
var break7 = break_create("br");
var input4 = input_create("input","type","email","email");
var break8 = break_create("br");

var label5 = label_create("label","for","password","Password");
var break9 = break_create("br");
var input5 = input_create("input","type","password","password");
var break10 = break_create("br");

var label6 = label_create("label","for","phonenumber","Phone number");
var break11 = break_create("br");
var input6 = input_create("input","type","phonenumber","phonenumber");
var break12 = break_create("br");






document.body.append(label1,break1,input1,break2, label2,break3,input2,break4,label3,break5,input3,break6,label4,break7,input4,break8,label5,break9,input5,break10,label6,break11,input6,break12)


