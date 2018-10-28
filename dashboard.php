<?php
include 'inc_session.php';
?>

<!DOCTYPE html>
<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Dashboard</title>
    <!--Bootstrap-->
        <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

    <!--Fonts-->
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>

<body>
	<div class="container">
		<div class="jumbotron mt-2 dash col-12 d-flex justify-content-center">
		  <h1 class="display-6">Dashboard (leads tracking)</h1>
		</div>
	<?php
	$query = "select *,DATEDIFF(NOW(),createdon) as days from leads";
	$result=mysql_query($query);
	?>
	<table class="table">
	  <thead>
	    <tr>
	      <th scope="col">S No.</th>
	      <th scope="col">Name</th>
	      <th scope="col">Email</th>
	      <th scope="col">Mobile</th>
	      <th scope="col">days left</th>
	    </tr>
	  </thead>
	  <tbody>
			<?php
			while($rows = mysql_fetch_array($result)){
				$formdata= json_decode($rows['formdata']);
			?>
			<tr>
		      <th scope="row"><?=$rows['id']?></th>
		      <td><?=$formdata->name?></td>
		      <td><?=$formdata->Email?></td>
		      <td><?=$formdata->Mobile?></td>
		      <td><?=$rows['days']?></td>
		    </tr>
			<?php
			}
			
			?>
	</tbody>
	</table>

    </div>

   <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"  crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>


</body>

</html>
