<?php
require_once "db_connection.php";

function getUsers(){
    global $con;
    $getUsersQuery = "select * from users";
    $getUsersResult = mysqli_query($con,$getUsersQuery);
    while($row = mysqli_fetch_assoc($getUsersResult)){
        $user_id = $row['user_id'];
        $user_email = $row['user_email'];
        echo "<tr>
                <td>$user_id</td>
                <td>$user_email</td>
              </tr>";
    }
}
function getRecipes(){
    global $con;
    $getRecipesQuery = "select * from recipes";
    $getRecipesResult = mysqli_query($con,$getRecipesQuery);
    while($row = mysqli_fetch_assoc($getRecipesResult)){
        $recipe_id = $row['recipe_id'];
        $recipe_name = $row['recide_name'];
        $recipe_cat = $row['recipe_cat'];
        $recipe_desc = $row['recipe_desc'];
        echo "<tr>
                <td>$recipe_id</td>
                <td>$recipe_name</td>
                <td>$recipe_cat</td>
                <td>$recipe_desc</td>
              </tr>";
    }
}

function getPro(){
    global $con;
    $getProQuery = '';
    if(!isset($_GET['cat']) && !isset($_GET['brand']) && !isset($_GET['search'])){
        $getProQuery = "select * from products order by RAND();";
    }
    else if(isset($_GET['cat'])){
        $pro_cat_id = $_GET['cat'];
        $getProQuery = "select * from products where pro_cat = '$pro_cat_id'";
    }
    else if(isset($_GET['brand'])){
        $pro_brand_id = $_GET['brand'];
        $getProQuery = "select * from products where pro_brand = '$pro_brand_id'";
    }
    else if(isset($_GET['search'])){
        $user_query = $_GET['search'];
        $getProQuery = "select * from products where pro_keywords like '%$user_query%'";
    }
    $getProResult = mysqli_query($con,$getProQuery);
    $count_pro = mysqli_num_rows($getProResult);
    if($count_pro==0){
        echo "<h4 class='alert-warning align-center my-2 p-2'> No Product found in selected criteria </h4>";
    }
    while($row = mysqli_fetch_assoc($getProResult)){
        $pro_id = $row['pro_id'];
        $pro_title = $row['pro_title'];
        $pro_price = $row['pro_price'];
        $pro_image = $row['pro_image'];
        echo "
                <div class='col-sm-6 col-md-4 col-lg-3 text-center product-summary'>
                    <h5 class='text-capitalize'>$pro_title</h5>
                    <img src='admin/product_images/$pro_image'>
                    <p> <b> Rs $pro_price/-  </b> </p>
                    <a href='detail.php' class='btn btn-info btn-sm'>Details</a>
                    <a href='#'>
                        <button class='btn btn-primary btn-sm'>
                            <i class='fas fa-cart-plus'></i> Add to Cart
                        </button>
                    </a>
                </div>
        ";
    }
}