<!DOCTYPE html>
<html lang="ru">

<head>
    ${require('./headlinks.php')}
    <meta name="description" content="Контакты">
    <meta name="keywords" content="Контакты, Слэбы в Минске, телефон, электронная почта, социальные сети.">
    <!--<script src='https://www.google.com/recaptcha/api.js'></script>-->
    <title>Слэбы, доска, лофт в Минске &mdash; наши контакты</title>
</head>
<body>
<div class="container">
    <header class="header">
        ${require('./header.php')}
    </header>
    <main>
		<section>
			<h1>Наши контакты</h1>
				<div class=" col-xs-12">
							<p>
								Свяжитесь со нами наиболее удобным из нижеперечисленных способов, и мы оперативно ответим на любые интересующие Вас вопросы.
							</p>
							<br>
							<ul class="contactslist contactslistLinks">
								<li>
									Тел, Viber: <a class="linkFollow" href="tel:+375291860031" title="Звоните прямо сейчас!">+375(29) 186-00-31</a>
								</li>
								<li>
									E-mail: <a class="linkFollow" href="mailto:ecodesignbel@gmail.com" title="Напишите прямо сейчас!">ecodesignbel@gmail.com</a>
								</li>
                                <li>
                                    Наша страница в<a class="linkFollow" href="https://www.instagram.com/ecodesignbel/" title="Перейти в Instagram" rel="noopener" target="_blank"> Instagram </a>
                                </li>
                                <!--
                                    <li>
                                        Наша группа<a class="linkFollow" href="https://vk.com/ecodesignbel" title="Перейти в группу ВК" rel="noopener" target="_blank"> Вконтакте </a>
                                    </li>
                                    <li>
                                        Наша группа в<a class="linkFollow" href="https://www.facebook.com/ecodesignbel/" title="Перейти в Facebook" rel="noopener" target="_blank"> Facebook </a>
                                    </li>
                                -->
                                <li>
                                    Наш основной сайт<a class="linkFollow" href="https://xn--80ahjdhb0ac7k.xn--90ais/" title="Перейти на основной сайт" rel="noopener" target="_blank"> Экодизайн.бел</a>
                                </li>
								<li>
									Или воспользуйтесь формой обратной связи (при отправке перенаправляет на сторонний ресурс, где необходимо поставить галочку подтверждающую, что вы не робот):
								</li>

							</ul>

                            <form class="form-horizontal" role="form" action="https://formspree.io/ecodesignbel@gmail.com" method="POST">
                                <div class="form-group contactslist">
                                    <label for="name" class="col-sm-2 control-label"> Ваше имя </label>
                                    <div class="col-sm-12">
                                        <input type="text" class="form-control" id="name" name="name" placeholder="Введите Ваше имя">
                                    </div>
                                </div>
                                <div class="form-group contactslist">
                                    <label for="email" class="col-sm-2 control-label"> Ваш email </label>
                                    <div class="col-sm-12">
                                        <input type="email" class="form-control" id="email" name="email" placeholder="пример@mail.ru">
                                    </div>
                                </div>
                                <div class="form-group contactslist">
                                    <label for="message" class="col-sm-2 control-label"> Сообщение </label>
                                    <div class="col-sm-12">
                                        <textarea class="form-control" rows="4" name="message" placeholder="В сообщении, по желанию, можете указать дополнительные способы связи с Вами (например номер телефона в международном формате, skype, viber, ссылку на страницу vk и т.д.)"><?php echo htmlspecialchars($_POST['message']);?></textarea>
                                    </div>
                                </div>
                                <div class="form-group contactslist">
                                    <div class="col-sm-12 col-sm-offset-2">
                                        <input id="submit" name="submit" type="submit" value="Отправить сообщение" class="btn button">
                                    </div>
                                </div>
                            </form>
				</div>
		</section>
    </main>
    <footer class="footer">
        <a href="#" id="back-to-top" title="Наверх">&uarr;</a> <!-- Кнопка вверх -->
        ${require('./footer.php')}
    </footer>
</div><!-- container -->
</body>
</html>
