<!DOCTYPE html>
<?php
require "../server/functions.php"
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Insert Product</title>
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="stylesheet" href="../css/bootstrap.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Bangers|Old+Standard+TT">
    <style>
        * {
            font-family: 'Old Standard TT', serif;
        }
    </style>
</head>
<body>
<div class="container">
    <h1 class="text-center my-4"><i class="fas fa-plus fa-md"></i> <span class="d-none d-md-inline"> Add New </span> <span class="d-none d-sm-inline">Product</span> </h1>
    <form>
        <div class="row">
            <div class="col-lg-2 col-md-4 col-sm-2">
                <label for="pro_title" class="float-md-right"> <span class="d-none d-md-inline"> Product </span> <span class="d-none d-sm-inline"> Title:</span></label>
            </div>
            <div class="col-lg-4 col-md-8 col-sm-10">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <div class="input-group-text"><i class="fas fa-file-signature"></i></div>
                    </div>
                    <input type="text" class="form-control" id="pro_title" name="pro_title" placeholder="Enter Product Title" >
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4">
                <label for="pro_cat" class="float-md-right"><span class="d-none d-md-inline"> Product </span> <span class="d-none d-sm-inline"> Category:</span></label>
            </div>
            <div class=" mt-3 mt-lg-0 col-lg-4 col-md-8 col-sm-8">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <div class="input-group-text"><i class="fas fa-list-alt"></i></div>
                    </div>
                    <select class="form-control" id="pro_cat" name="pro_cat">
                        <?php
                        getCatsAdmin();
                        ?>
                    </select>
                </div>
            </div>
        </div>
        <div class="row my-3">
            <div class="col-lg-2 col-md-4 col-sm-4">
                <label for="pro_brand" class="float-md-right"> <span class="d-none d-md-inline"> Product </span> <span class="d-none d-sm-inline">Brand:</span></label>
            </div>
            <div class="col-lg-4 col-md-8 col-sm-8">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <div class="input-group-text"><i class="fas fa-stamp"></i></div>
                    </div>
                    <select class="form-control" id="pro_brand" name="pro_brand">
                        <?php
                        getBrandsAdmin();
                        ?>
                    </select>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4">
                <label for="pro_img" class="float-md-right"><span class="d-none d-md-inline"> Product </span> <span class="d-none d-sm-inline">Image:</span></label>
            </div>
            <div class=" mt-3 mt-lg-0 col-lg-4 col-md-8 col-sm-8">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <div class="input-group-text"><i class="far fa-image"></i></div>
                    </div>
                    <input class="form-control" type="file" id="pro_img" name="pro_img">
                </div>
            </div>
        </div>
        <div class="row my-3">
            <div class="col-lg-2 col-md-4 col-sm-4">
                <label for="pro_price" class="float-md-right"> <span class="d-none d-md-inline"> Product </span><span class="d-none d-sm-inline"> Price:</span></label>
            </div>
            <div class="col-lg-4 col-md-8 col-sm-8">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <div class="input-group-text"><i class="fas fa-money-bill"></i></div>
                    </div>
                    <input class="form-control" id="pro_price" name="pro_price" placeholder="Enter Product Price">
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4">
                <label for="pro_kw" class="float-md-right"><span class="d-none d-md-inline"> Product </span><span class="d-none d-sm-inline"> Keyword:</span></label>
            </div>
            <div class=" mt-3 mt-lg-0 col-lg-4 col-md-8 col-sm-8">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <div class="input-group-text"><i class="fas fa-key"></i></div>
                    </div>
                    <input class="form-control" type="text" id="pro_kw" name="pro_kw" placeholder="Enter Product Keywords">
                </div>
            </div>
        </div>
        <div class="row my-3">
            <div class="col-lg-2 col-md-4 col-sm-4">
                <label for="pro_desc" class="float-md-right"><span class="d-none d-md-inline"> Product </span><span class="d-none d-sm-inline"> Detail:</span></label>
            </div>
            <div class="col-lg-4 col-md-8 col-sm-8">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <div class="input-group-text"><i class="far fa-comment-alt"></i></div>
                    </div>
                    <textarea class="form-control" type="file" id="pro_desc" name="pro_desc" placeholder="Enter Product Detail"></textarea>
                </div>
            </div>
        </div>
        <div class="row my-3">
            <div class="col-lg-2 col-md-4 col-sm-4"></div>
            <div class="col-lg-4 col-md-8 col-sm-8">
                <button type="submit" class="btn btn-primary btn-block"><i class="fas fa-plus"></i> Insert Now </button>
            </div>
        </div>
    </form>
</div>
</body>
</html>
