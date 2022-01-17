sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */

    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("tutorial1.controller.App", {
            onInit: function () {
                this.getOwnerComponent().setModel(new JSONModel("../model/cities.json"), "CitiesModel")
            },
            
            onSayHello: function(oEvent) {
                /*

                MessageToast.show("Hola Ricardo", {
                    duration: 3000,
                });
                */
               if(!this._dialogSayHello){
                   this._dialogSayHello = sap.ui.xmlfragment("idSayHelloDialog", "tutorial1.controller.App");
                   this.getView().addDependent(this._dialogSayHello);
               }
               this._dialogSayHello.open();
            },
            onClose: function (){
                if(this._dialogSayHello){
                    this._dialogSayHello.close();
                }
            }
        });
    });
