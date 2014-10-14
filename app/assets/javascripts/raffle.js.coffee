@RaffleCtrl = ($scope) ->
  $scope.entries = [
    {name: "Adam"}
    {name: "Mark"}
    {name: "Ted"}
  ]
  
  $scope.addEntry = ->
    $scope.entries.push($scope.newEntry)
    $scope.newEntry = {}