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

        return Controller.extend("tutorial1.controller.View", {

            Formatter: Formatter,

            onInit: function () {
                //this.getOwnerComponent().setModel(new JSONModel("../model/cities.json"), "CitiesModel");
                //console.log(sap.ui.getCore().getModel("DetailModel").getData());
                //const oDetailModel = sap.ui.getCore().getModel("DetailModel");
                //this.getView().setModel(oDetailModel, "DetailModel");

                this.getOwnerComponent().getRouter().getRoute("RouteView4").attachPatternMatched ( function () {
                    console.log(sap.ui.getCore().getModel("DetailModel").getData());
                    const oDetailModel = sap.ui.getCore().getModel("DetailModel");
                    this.getView().setModel(oDetailModel, "DetailModel");
                },this);


            },
            onSayHello: function (oEvent) { 
                var oToolsModel = this.getOwnerComponent().getModel("ToolModel");
                var row= oEvent.getSource().getCells();
                row[0].getText();
                oToolsModel.setProperty("/cityName", row[0].getText());

                Common.openDialogFromFragment(this, "idSayHelloDialog", "tutorial1.fragment.sayHelloDialog");
                
                return;          
            },
            onShowImage: function (oVent) {
           
                Common.openDialogFromFragment(this, "idSayHelloDialog", "tutorial1.fragment.showImage");
            }
        
            
            
        });
    });