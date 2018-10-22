var app = angular.module('craftApp',[]);

app.controller('craftController', function($scope){
    $scope.nbr_craft=0;
    
    $scope.item = {
        "nom" : "",
        "quantite" : 0,
        "prix_unitaire" : 0,
        "prix_craft_unitaire" : 0
    };

    $scope.recette = [{
        "nom" : "",
        "quantite" : 0,
        "prix_unitaire" : 0,
    },{
        "nom" : "",
        "quantite" : 0,
        "prix_unitaire" : 0,
    },{
        "nom" : "",
        "quantite" : 0,
        "prix_unitaire" : 0,
    },{
        "nom" : "",
        "quantite" : 0,
        "prix_unitaire" : 0,
    },{
        "nom" : "",
        "quantite" : 0,
        "prix_unitaire" : 0,
    },{
        "nom" : "",
        "quantite" : 0,
        "prix_unitaire" : 0,
    },{
        "nom" : "",
        "quantite" : 0,
        "prix_unitaire" : 0,
    },{
        "nom" : "",
        "quantite" : 0,
        "prix_unitaire" : 0,
    }];

    $scope.prix_craft_unitaire = 0;

    $scope.calcul_prix_recette = function(){
        var sommes =0;
        var recette= [];
        recette=$scope.recette;
        for(var i in recette){
            var prix_ressource = recette[i].quantite * recette[i].prix_unitaire;
            sommes += prix_ressource;
        }

        $scope.prix_craft_unitaire = sommes;
    };
})

app.controller('xpController', function($scope){
    $scope.tabxp = {
        '10' : 1911,
        '20' :8097,
        '40' :36641,
        '60' :100421,
        '65' : 125671,
        '80' :240964,
        '100':581687
    }
    $scope.xp_actuel = 0;
    $scope.xp_craft =0;
    $scope.lvl_viser = 0;
    $scope.xp_necessaire =0;
    $scope.nbr_craft = 0;


    $scope.calcul_xp = function(){
        var tab_xp = $scope.tabxp;
        $scope.xp_necessaire = tab_xp[$scope.lvl_viser]- $scope.xp_actuel;
        $scope.nbr_craft = $scope.xp_necessaire / $scope.xp_craft;
    }

})