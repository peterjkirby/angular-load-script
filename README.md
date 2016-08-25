# angular-load-script

Quick and easy way to load scripts dynamically and get notified when they are loaded.

# How to Use

```javascript
angular.module('myApp', ['load-script'])
       .controller('myCtrl', function('$scope'){
           $scope.onScriptLoad = function() {
                console.log("script loaded");
           }
        });
```

```html
<div ng-app='myApp'>
    <div ng-controller='myCtrl'>
        <load-script src="http://some-script.com/script.js" on-load="onScriptLoad()"></load-script>
    </div>
</div>
```