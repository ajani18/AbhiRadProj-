<html>
  <body onload= checkScope ();>
    <script type="text/javascript">
      var myVar = "global"; //declaring a global variable
      function checkScope( ) {
        var myVar = "local"; //declaring a local variable (in a fucntion, local var with same name as a global var take precedence)
        document.write(myVar);  //prints local
      }

    </script>
