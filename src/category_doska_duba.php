<!DOCTYPE html>
<html lang="ru">
<head>
    <head>
        ${require('./headlinks.php')}
        <meta name="description" content="Каталог дубовой доски и слэбов в Минске по доступным ценам. Доска дуба. Возможна доставка по Минску и РБ. Звоните: +375(29)-186-00-31">
        <meta name="keywords" content="каталог, слэбы в минске, купить слэбы, слэбы из дуба, доска дуба, слэбы из дерева">
        <title>Доска дуба в Минске &mdash; каталог.</title>
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
                <h1>Доска дуба.</h1>
                <p class="main__text">
                    В этой категории товаров представлена доска дуба (как правило шириной менее 60см), а так же типовая дубовая доска (шириной 30-50см).<br>
                    По любым вопросам:<br>
                    Звоните  <a class="linkFollow" href="tel:+375291860031">+375 (29) 186-00-31</a><br>
                    Пишите <a class="linkFollow" href="mailto:ecodesignbel@gmail.com">ecodesignbel@gmail.com</a>
                </p>
                <h3>Доска дубовая широкая (типовая - №DDT_001).</h3>
                <div class="row justify-content-around imageGallery">
                    <div class="col-lg-6 col-sm-12">
                        <p>
                            <a href="img/category_doska_dub/full/DDT_001.jpg" title="Доска дуба широкая, типовая"><img src="img/category_doska_dub/resize/DDT_001.jpg" alt="Доска дуба широкая, типовая" /></a>
                        </p>
                    </div>
                    <div class="col-lg-6 col-sm-12">
                        <p class="ddt_description">
                            Размеры:<br>
                            Длинна: 300-340см;<br>
                            Ширина: 40-50см;<br>
                            Толщина: 4,5-5см<br>
                            Цена: <span class="price">80 руб</span><br>
                            Фото типовой доски (№DDT_001) представлено для образца. Из каждой такой доски можно сделать стол в стиле лофт.<br>
                            В наличии около сотни похожих досок, каждая из которых продается по указанной цене. Можно выбрать на складе из имеющихся.<br>
                        </p>
                    </div>
                </div>
                <p>
                    Всего товаров в данной категории: <b><span id="product_dub_amount"></span></b>.
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
                <div id="product_dub" class="catlog row justify-content-around imageGallery">

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