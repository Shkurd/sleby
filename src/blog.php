<!DOCTYPE html>
<html lang="ru">
<head>
    <head>
        ${require('./headlinks.php')}
        <meta name="description" content="Блог. Статьи о древесине и слэбах сайта sleby.by">
        <meta name="keywords" content="новости, статьи, блог">
        <title>Блог. Статьи о древесине и слэбах.</title>
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
                <h1>Блог, статьи, новости</h1>
                <h2 class="blog__subTitle"> Список наших статей и новостей:</h2>
                <p class="main__text">
                <ul class="blog__list_wrap">
                <li class="blog__list">
                        <h4 class="blog__list_title">Мебель Ваби Саби</h4>
                        <p  class="blog__list_description">Мебель в стиле ваби-саби отражает принципы этой японской эстетики, подчеркивая естественность, простоту и уникальность. Она обычно создается из натуральных материалов, таких как дерево, ротанг, бамбук, хлопок, лен и шелк. Важным аспектом мебели в стиле ваби-саби является использование ручного труда...
                        </p>
                        <p class="blog__list_read">
                            <a href="/article_06_mebel_vabi_sabi"><span>Читать далее...</span></a>
                        </p>
                    </li>
                    <li class="blog__list">
                        <h4 class="blog__list_title">Могут ли широкие быть недорогими?</h4>
                        <p  class="blog__list_description">Наверное, каждый понимает, что массив дерева не может быть сравним с мебельным щитом ни по качеству, ни по цене. Но, скорее всего, мало кто внятно ответит, почему же мебель из массива значительно дороже...
                        </p>
                        <p class="blog__list_read">
                            <a href="/article_05_shirokie_sleby"><span>Читать далее...</span></a>
                        </p>
                    </li>
                    <li class="blog__list">
                        <h4 class="blog__list_title">Почему дуб выгодно покупать у нас?</h4>
                        <p  class="blog__list_description">Дуб &mdash; один из наиболее востребованных материалов, используемых в строительстве, отделке, производстве мебели и предметов из дерева. Всем известно, что дуб имеет высокую прочность, надежность и долговечность. Мы не станем подробно останавливаться на свойстах, а расскажем вам почему купить дуб у нас...</p>
                        <p class="blog__list_read">
                            <a href="/dub"><span>Читать далее...</span></a>
                        </p>
                    </li>
                    <li class="blog__list">
                        <h4 class="blog__list_title">Сухая доска дуба. Влажность 6-8%</h4>
                        <p  class="blog__list_description">Мы всегда предлагали доску дуба и слэбы естественной влажности. Но любому столяру известно, что для того, чтобы сделать качественное и долговечное изделие, древесина должна быть сухая. И мы решили пойти вперед и начали сушить древесину, чтобы предлагать вам готовую сухую доску дуба и сухие слэбы...</p>
                        <p class="blog__list_read">
                            <a href="/article_04_doska_duba_suhaya"><span>Читать далее...</span></a>
                        </p>
                    </li>
                    <li class="blog__list">
                        <h4 class="blog__list_title">Слэбы из мореного дуба возрастом 1160 лет!</h4>
                        <p  class="blog__list_description">Распилили на слэбы мореный дуб, возраст которого согласно проведенной экспертизе 1160 лет! 1160 лет он лежал - прикрытый песком, илом, землей &mdash; на дне реки...</p>
                        <p class="blog__list_read">
                            <a href="/article_03"><span>Читать далее...</span></a>
                        </p>
                    </li>
                    <li class="blog__list">
                        <h4 class="blog__list_title">Готовим новые слэбы, доску дуба и мореного дуба</h4>
                        <p  class="blog__list_description">Каждый новый распил &mdash; это значимое событие для нас. После того, как мы видим то, что получилось в результате распила, начинают рождаться идеи...</p>
                        <p class="blog__list_read">
                            <a href="/article_02"><span>Читать далее...</span></a>
                        </p>
                    </li>
                    <li class="blog__list">
                        <h4 class="blog__list_title">Сайт sleby.by начинает свою работу</h4>
                        <p  class="blog__list_description">sleby.by &mdash; это сайт для тех, кто хочет приобрести древесину и слэбы дуба, ясеня, мореного дуба, акации, груши и прочих видов деревьев...</p>
                        <p class="blog__list_read">
                            <a href="/article_01"><span>Читать далее...</span></a>
                        </p>
                    </li>

                </ul>
                </p>
            </section>
        </div>
    </main>
    <footer class="footer">
        <a href="#" id="back-to-top" title="Наверх">&uarr;</a> <!-- Кнопка вверх -->
        ${require('./footer.php')}
    </footer>
</div>
<!--<script src="../dist/js/main.js"></script>-->
</body>
</html>