//function is a block of code that is used to perform certian task when called - reusable
//function keyword (keyname) -> (list of parameters - can be empty) -> (statement block - thing that needs to executed {})

<script type="text/javascript">
<!--
  function functionname(parameter-list)
  {
     statements
  }
//-->
</script>
//Calling a function use name of the function
<html>
   <head>

      <script type="text/javascript">
         function sayHello()
         {
            document.write ("Hello there!");
         }
      </script>

   </head>
   <body>
      <p>Click the following button to call the function</p>

      <form>
         <input type="button" onclick="sayHello()" value="Say Hello">
      </form>

      <p>Use different text in write method and then try...</p>
   </body>
</html>


//Return statements ends execution of function

var x = myFunction(4, 3);        // Function is called, return value will end up in x

function myFunction(a, b) {
    return a * b;                // Function returns the product of a and b
}
