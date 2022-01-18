sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../utils/Validator",
    "sap/m/MessageToast",
    "../utils/Common"


],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Validator, Common, MessageToast) {
        "use strict";

        return Controller.extend("tutorial.controller.View1", {
            onInit: function () {
                this.getOwnerComponent().setModel(new JSONModel({name: "Clase Fiori"}), "{ToolModel/}");
                this.getView().setModel(new JSONModel("../model/cities.json"), "CitiesModel");
            },

            onSayHello: function(oEvent){
                /*
                //mensaje flotante "Hello world" que aparece durante 3s cuando pulsamos el boton.
                    MessageToast.show("Hello World!", {
                        duration: 3000,
                    });
    
                }
                */
               if(!Validator.isNotEmpty(this.getView().byId("city-combobox").getSelectedKey())){
                   sap.m.MessageToast.show("Selected a City", {
                       duration: 3000,
                   });
                   return;
               }
                Common.openDialogFromFragment(this, "isSayHelloDialog", "tutorial1.fragment.sayHelloDialog");
            },
            //Si clickamos a "cerrar" la ventana de dialogo cerrará
            onClose: function () {
                if ( this._dialogSayHello ) {
                    this._dialogSayHello.close()
                }
            },

            onNavigateToView2: function(){
                Common.onNavigateTo(this, "RouteView2");
            }
        });

    });