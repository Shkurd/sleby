<!DOCTYPE html>
<html lang="ru">
<head>
    <head>
        ${require('./headlinks.php')}
        <meta name="description" content="Каталог доски ясеня и прочих видов древесины в Минске по доступным ценам. В наличии сузая доска. Возможна доставка по Минску и РБ. Звоните: +375(29)-186-00-31">
        <meta name="keywords" content="каталог, доска, доска ясеня, сухая доска ясеня, купить доску ясеня, доска ясеня минск">
        <title>Доска ясеня в Минске &mdash; каталог.</title>
    </head>
</head>
<body>
<div class="container">
    <header class="header">
        ${require('./header.php')}
    </header>
    <main class="main">
        <div class="main__wrap">
            <section>
                <h1>Доска ясеня</h1>
                <p class="main__text">
                    В этой категории товаров представлена доска ясеня (как правило шириной менее 60см).<br>
                    По любым вопросам:<br>
                    Звоните  <a class="linkFollow" href="tel:+375291860031">+375 (29) 186-00-31</a><br>
                    Пишите <a class="linkFollow" href="mailto:ecodesignbel@gmail.com">ecodesignbel@gmail.com</a>
                </p>
                <p>
                    Всего товаров в данной категории: <b><span id="product_yasen_amount"></span></b>.
                </p>
                <p class="filter__wrap">
                    <select class="custom-select select-filter">
                        <option selected>Сортировать товар по...</option>
                        <option value="1">По цене с наименьшей</option>
                        <option value="2">По цене с наибольшей</option>
                        <option value="3">По ширине с наименьшей</option>
                        <option value="4">По ширине с наибольшей</option>
                        <option value="5">По длинне с наименьшей</option>
                        <option value="6">По длинне с наибольшей</option>
                        <option value="7">По толщине с наименьшей</option>
                        <option value="8">По толщине с наибольшей</option>
                    </select>
                    <button type="button" class="btn btn-filter">Применить</button>
                </p>
                <div id="product_yasen" class="catlog row justify-content-around imageGallery">

                </div>
            </section>
        </div> <!--/main__wrap -->
    </main>
    <footer class="footer">
        <a href="#" id="back-to-top" title="Наверх">&uarr;</a> <!-- Кнопка вверх -->
        ${require('./footer.php')}
    </footer>
</div>
<!--<script src="../dist/js/main.js"></script>-->
</body>
</html>