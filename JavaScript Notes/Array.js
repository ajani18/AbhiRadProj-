//array An array is a special variable, which can hold more than one value at a time.
//var array_name = [item1, item2, ...];
//var cars = new Array("Saab", "Volvo", "BMW");
//You refer to an array element by referring to the index number. (starts at 0)

<!DOCTYPE html>
<html>
  <body>

      <h2>JavaScript Arrays</h2>

      <p>JavaScript array elements are accesses using numeric indexes (starting from 0).</p>

      <p id="demo"></p>

      <script>

        var cars = ["Saab", "Volvo", "BMW"];
        cars[0] = "Hello"; //changes Saab to Hello
        document.getElementById("demo").innerHTML = cars[0]; //prints Hello but if not change then it would print Saab

      </script>

    </body>

</html>
