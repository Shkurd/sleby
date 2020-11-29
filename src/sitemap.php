<!DOCTYPE html>
<html lang="ru">

<head>
    ${require('./headlinks.php')}
    <meta name="description" content="Слэбы, доска, лофт &mdash; карта сайта. Наши контакты. Тел:+375(29) 186-00-31, email:ecodesignbel@gmail.com">
    <meta name="keywords" content="карта сайта, слэбы, доска, лофт">
    <title>Слэбы, доска, лофт &mdash; карта сайта</title>
</head>
<body>
<div class="container">
    <header class="header">
        ${require('./header.php')}
    </header>
		<section class="site__map">
			<h1> Карта сайта </h1>
            <p>Сайт содержит следующие страницы:</p>
            <ul>
                <li><a class="linkFollow" href="/">Главная</a></li>
                <li><a class="linkFollow" href="#">Каталог (никуда не ведет, а раскрывает список категорий основых товаров)</a>
                    <ul>
                        <li><a class="linkFollow" href="/catalog">Весь каталог</a></li>
                        <li><a class="linkFollow" href="/category_sleby_dub">Слэбы дуба</a></li>
                        <li><a class="linkFollow" href="/category_doska_duba">Доска дуба</a></li>
                        <li><a class="linkFollow" href="/category_doska_dub_moreny">Мореный дуб доска</a></li>
                        <li><a class="linkFollow" href="/category_sleby_dub_moreny">Мореный дуб слэбы</a></li>
                    </ul>
                </li>
                <li><a class="linkFollow" href="#">Древесина (никуда не ведет, а раскрывает список тематических статей)</a>
                    <ul>
                        <li><a class="linkFollow" href="/">Слэбы (главная)</a></li>
                        <li><a class="linkFollow" href="/doska_duba">Доска дуба</a></li>
                        <li><a class="linkFollow" href="/doska_dub_moreny">Мореный дуб</a></li>
                    </ul>
                </li>
                <li><a class="linkFollow" href="#">Лофт (никуда не ведет, а раскрывает список тематических статей)</a>
                    <ul>
                        <li><a class="linkFollow" href="/loft">Лофт</a></li>
                        <li><a class="linkFollow" href="/stol_loft">Стол лофт</a></li>
                        <li><a class="linkFollow" href="/stol_reka">Стол река</a></li>
                    </ul>
                </li>
                <li><a class="linkFollow" href="/blog">Блог</a></li>
                <li><a class="linkFollow" href="/contacts">Контакты</a></li>
            </ul>
		</section>
    <a href="#" id="back-to-top" title="Наверх">&uarr;</a> <!-- Кнопка вверх -->
    <footer class="footer">
        <a href="#" id="back-to-top" title="Наверх">&uarr;</a> <!-- Кнопка вверх -->
        ${require('./footer.php')}
    </footer
</div>

</body>
</html>
