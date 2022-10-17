<?php
//echo $_SERVER['DOCUMENT_ROOT'];
$home = "/project/family_history/index.php";
$stories = "/project/family_history/stories.php";
$people = "/project/family_history/people.php";
$admin = "/project/family_history/admin/admin.php";
$about = "/project/family_history/about.php";
$logo = "/project/family_history/images/tree-of-life-drawing-celtic-style-gold.png";
$css = "./styles/other.css";
spl_autoload_register(function ($class) {
    require_once $_SERVER['DOCUMENT_ROOT'] . "/project/family_history/includes/classes/{$class}.php";
});
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Price Family History | <?= $page_title ?></title>
    <link rel="stylesheet" href=<?= $css ?>>
    <link rel="icon" type="image/x-icon" href="<?= $logo ?>">
</head>

<body>
    <header class="other-page">

        <nav id="desktop-nav">
            <a class="logo header-text" href=<?= $home ?>>
                <img src="/project/family_history/images/tree-of-life-drawing-celtic-style-gold.png"></a>
            <div class="nav-text">
                <a href=<?= $home ?>>
                    <h1 class="header-text">Price Family History</h1>
                </a>
                <ul class="header-text">
                    <li><a href=<?= $stories ?>>Stories</a></li>
                    <li><a href=<?= $people ?>>People</a></li>
                    <li><a href=<?= $about ?>>About</a></li>
                    <li><a href=<?= $admin ?>>Login</a></li>
                </ul>
            </div>
        </nav>
        <nav id="mobile-nav">
            <a class="logo header-text" href=<?= $home ?>>
                <img src="/project/family_history/images/tree-of-life-drawing-celtic-style-gold.png"></a>
            <div class="nav-text">
                <a href=<?= $home ?>>
                    <h1 class="header-text">Price Family History</h1>
                </a>
                <div class="dropdown">Menu</div>
                <ul class="header-text" id="mobile-overlay">
                    <div class="exit">&times;</div>
                    <li><a href=<?= $stories ?>>Stories</a></li>
                    <li><a href=<?= $people ?>>People</a></li>
                    <li><a href=<?= $about ?>>About</a></li>
                    <li><a href=<?= $admin ?>>Login</a></li>
                </ul>
            </div>
        </nav>

        <div class="title-section header-text">
            <h2>
                <?= $page_title ?>
            </h2>
        </div>
    </header>