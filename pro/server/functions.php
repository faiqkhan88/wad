<?php

require "db_connection.php";

function getCats()
{
    global $connection;
    $getQuery = "select * from categories";
    $getRes = mysqli_query($connection,$getQuery);
    while($row = mysqli_fetch_assoc($getRes))
    {
        $id = $row['cat_id'];
        $title = $row['cat_title'];
        echo"<li><a class='nav-link'href='#'>$title</a></li>";
    }

}

function getBrands()
{
    global  $connection;
    $getQuery = "select * from brands";
    $getRes = mysqli_query($connection,$getQuery);
    while($row = mysqli_fetch_assoc($getRes))
    {
        $id = $row['brand_id'];
        $title = $row['brand_title'];
        echo"<li><a class='nav-link'href='#'>$title</a></li>";
    }
}

function getCatsAdmin()
{
    global $connection;
    $getQuery = "select * from categories";
    $getRes = mysqli_query($connection,$getQuery);
    while($row = mysqli_fetch_assoc($getRes))
    {
        $id = $row['cat_id'];
        $title = $row['cat_title'];
        echo"<option>$title</option>";
    }

}

function getBrandsAdmin()
{
    global  $connection;
    $getQuery = "select * from brands";
    $getRes = mysqli_query($connection,$getQuery);
    while($row = mysqli_fetch_assoc($getRes))
    {
        $id = $row['brand_id'];
        $title = $row['brand_title'];
        echo"<option>$title</option>";
    }
}


