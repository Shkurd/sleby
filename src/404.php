<!DOCTYPE html>
<html lang="ru">
<head>
    ${require('./headlinks.php')}
    <meta name="description" content="Страница ошибки 404">
    <title>Ошибка 404</title>
</head>
<body>
    <div class="container">
        <header class="header">
            ${require('./header.php')}
        </header>
        <article>
             <section class="error">
                 <P class="centered">
                    <img src="img/404.jpg" title="Лофт интерьер" alt="Ошибка 404">
                 </P>
                 <p class="centered">Ох!:(  К сожалению, запрашиваемая Вами страница не найдена.</p>
                 <p class="centered">Почему?</p>
                 <ul>
                     <li>Ссылка, по которой Вы пришли, неверна.</li>
                     <li>Вы неправильно указали путь или название страницы.</li>
                     <li>Страница была удалёна или пермещена со времени Вашего последнего посещения.</li>
                 </ul>
                  <p class="centered">Для продолжения работы вы можете перейти на:</p>
                 <ul>
                     <li><a class="linkFollow" href="/">Главную страницу сайта.</a></li>
                     <li><a class="linkFollow" href="/sitemap">Карту сайта</a></li>
                 </ul>
            </section>
        </article>
        <a href="#" id="back-to-top" title="Наверх">&uarr;</a> <!-- Кнопка вверх -->
        <footer class="footer">
            <a href="#" id="back-to-top" title="Наверх">&uarr;</a> <!-- Кнопка вверх -->
            ${require('./footer.php')}
        </footer>
    </div>
</body>
</html>
