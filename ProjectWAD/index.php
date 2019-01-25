<!DOCTYPE html>
<?php
require "server/functions.php";
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="author" content="Zain, Faiq">
    <meta name="keywords" content="Food,hunger,Cooking">
    <meta name="description" content="CookBook">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">


    <link href="https://use.fontawesome.com/releases/v5.3.1/css/all.css">
    <link rel="stylesheet" href="css/styling.css" type="text/css">
    <link rel="stylesheet" href="css/bootstrap.css" type="text/css">


    <title>Index</title>
</head>

<body>

<header>

    <div class="Top-Row">

        <div id="Strip">

            <div class="Logo">

                <img src="img/Logo.png" />

            </div>
               </div>


        <div class="PageTitle">

            <h1> Home </h1>


        </div>
    </div>

</header>

<div class="Nav">

    <ul >
        <li> <a href="index.php"> <u>Index</u> </a> </li>
        <li>|</li>
        <li> <a href="about.php"> About </a> </li>
        <li>|</li>
        <li> <a href="contact.php"> Contact </a> </li>
        <li>|</li>
        <li> <a href="register.php"> Register </a> </li>
        <li>|</li>
        <li> <a href="forgotpassword.php"> Forgot password </a> </li>
    </ul>

</div>
<div>
<h1 style="color: white;margin-top: 50px;">Current Users Registered</h1>
    <table style="border: 1px solid white; color: wheat;margin-left: 10px;" border="1">
        <tr>
            <td>ID</td>
            <td>Email</td>
            <?php getUsers();?>
        </tr>
    </table>
</div>
<div>
    <h1 style="color: white;margin-top: 50px;">Recipes Currently on Site</h1>
    <table border="1" style="border: 1px solid white; color: wheat;margin-left: 10px;">
        <tr>
            <td>ID</td>
            <td>Recipe</td>
            <td>Category</td>
            <td>Description</td>
            <?php getRecipes();?>
        </tr>
    </table>
</div>
</div>
</body>
</html>