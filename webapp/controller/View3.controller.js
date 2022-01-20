sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../utils/Formatter",
    "../utils/Common"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */

    function (Controller, JSONModel, Formatter, Common) {
        "use strict";

        return Controller.extend("tutorial1.controller.View3", {

            Formatter: Formatter,

            onInit: function () {
                //this.getOwnerComponent().setModel(new JSONModel("../model/cities.json"), "CitiesModel");
                const oCitiesModel = new JSONModel();
                oCitiesModel.loadData("../model/cities.json");
                this.getView().setModel(oCitiesModel, "CitiesModel");
            },
            onSayHello: function (oEvent) { 
                
                console.log(oEvent.getSource().getCells());
                Common.openDialogFromFragment(this, "idSayHelloDialog", "tutorial1.fragment.sayHelloDialog");
                
                return;          
            }
            
            
        });
    });