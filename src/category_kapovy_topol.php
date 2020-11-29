<!DOCTYPE html>
<html lang="ru">
<head>
    <head>
        ${require('./headlinks.php')}
        <meta name="description" content="Каталог слэбов из древесинs капового тополя в Минске по доступным ценам. Доска груши больших размеров. Возможна доставка по Минску и РБ. Звоните: +375(29)-186-00-31">
        <meta name="keywords" content="каталог, краповый тополь, слэбы капового тополя, доска капового тополя, широкая доска капового тополя, слэбы из дерева, цена, товар">
        <title>Слэбы капового тополя &mdash; каталог, цены, размер.</title>
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
                <h1>Слэбы капового тополя.</h1>
                <p class="main__text">
                    В этой категории товаров представлены слэбы из древесины капового тополя, как правило шириной более 60см и (или) интересной формы. <!--Если вас интересует менее широкая доска груши, то рекомендуем посетить категорию <a class="linkFollow" href="/category_doska_grushi" title="перейти к доске груши">доски из мореного дуба</a>.-->  <br>
                    По любым вопросам:<br>
                    Звоните  <a class="linkFollow" href="tel:+375291860031">+375 (29) 186-00-31</a><br>
                    Пишите <a class="linkFollow" href="mailto:ecodesignbel@gmail.com">ecodesignbel@gmail.com</a>
                </p>
                <p>
                    Всего товаров в данной категории: <b><span id="kapovy_topol_amount"></span></b>.
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
                <div id="product_kapovy_topol_sleb" class="catlog row justify-content-around imageGallery">

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