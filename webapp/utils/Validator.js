sap.ui.define([

], function (){

    var Validator= {
        isNotEmpty: function (value){
            return !!value;    
        }
    }

    return Validator;
    

},true);