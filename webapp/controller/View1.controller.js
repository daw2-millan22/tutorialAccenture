sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
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
                if( !this._dialogSayHello ) {
                    this._dialogSayHello = sap.ui.xmlfragment("idSayHelloDialog", "tutorial1.fragment.sayHelloDialog", this);
                    this.getView().addDependent(this._dialogSayHello);
                }
                this._dialogSayHello.open();
            },
            //Si clickamos a "cerrar" la ventana de dialogo cerrará
            onClose: function () {
                if ( this._dialogSayHello ) {
                    this._dialogSayHello.close()
                }
            },

            onNavigateToView2: function(){
                var router=this.getOwnerComponent().getRouter();
                router.navTo("RouteView2");
            }
        });

    });