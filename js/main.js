require (
  [
      'model',
      'view',
      'controller'
  ],

    function (model, view, controller) {
      var firstToDoList = ['Learn JS', 'learn HTML', 'Learn CSS'];
        var data = model.model(firstToDoList);
        var view1 = view.view(data);
        var controller1 = controller.controller(data, view1)
    });
