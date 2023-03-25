import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPortfolio } from '../interfaces/portfolio/portfolio';

@Injectable({
    providedIn: 'root'
})
export class PortfolioService {
    /** Observable кэша списка работ в портфолио */
    cachedPortfolio$!: Observable<IPortfolio[]>

    constructor(private http: HttpClient) {}

    /** Возвращает список работ в портфолио с сервака */
    getAll(): Observable<IPortfolio[]> {
        if (!this.cachedPortfolio$) {
            this.cachedPortfolio$ = this.http.get<IPortfolio[]>(environment.serverEndpoint + '/portfolio').pipe(shareReplay(1));
        }
        return this.cachedPortfolio$;
    }

    // tempPortfolioWorks: IPortfolio[] = [
    //     {
    //         "id": 1,
    //         "name": "AliotDrive",
    //         "link": "https://aliotdrive.thechampguess.ru",
    //         "addDateTimestamp": 1619136000000,
    //         "addDateStr": "23 апреля 2021",
    //         "description": "Был создан сайт для каршеринговой компании в Крыму. Из основной выполненной работы: создание адаптивной и кроссбраузерно верстки, настройка корректной работы модальных окон, слайдеров. Сайт представляет из себя многостраничник. Разработан на собственной gulp сборке. Поддерживает современные стандарты webp, а также максимально адаптирован под поисковую выдачу и Google Page Speed Insights.",
    //         "img": "https://files.thechampguess.ru/base-portfolio/images/screencapture-aliotdrive.png",
    //         "imgWebp": "https://files.thechampguess.ru/base-portfolio/images/webp/screencapture-aliotdrive.webp",
    //         "imgMin": "https://files.thechampguess.ru/base-portfolio/images/min/screencapture-aliotdrive-min.png",
    //         "imgMinWebp": "https://files.thechampguess.ru/base-portfolio/images/min/webp/screencapture-aliotdrive-min.webp"
    //     },
    //     {
    //         "id": 2,
    //         "name": "AliotGo",
    //         "link": "https://aliotgo.thechampguess.ru",
    //         "addDateTimestamp": 1639872000000,
    //         "addDateStr": "19 декабря 2021",
    //         "description": "Был сверстан лендинг для сайта агрегатора услуг AliotGo. Включает в себя адаптив с 1920px и до 320px. В разработке использовался собственный обновленный starterGulp v1.2. Использован новый подход к верстке и дизайну сайтов GlassMorphism. Имеет интерактивные карточки с движением фона при наведении мыши.",
    //         "img": "https://files.thechampguess.ru/base-portfolio/images/screencapture-aliotgo.png",
    //         "imgWebp": "https://files.thechampguess.ru/base-portfolio/images/webp/screencapture-aliotgo.webp",
    //         "imgMin": "https://files.thechampguess.ru/base-portfolio/images/min/screencapture-aliotgo-min.png",
    //         "imgMinWebp": "https://files.thechampguess.ru/base-portfolio/images/min/webp/screencapture-aliotgo-min.webp"
    //     },
    //     {
    //         "id": 3,
    //         "name": "BeatLanding",
    //         "link": "https://beatlanding.thechampguess.ru",
    //         "addDateTimestamp": 1620950400000,
    //         "addDateStr": "14 мая 2021",
    //         "description": "Был сверстан адаптивный лендинг для сайта по инвестициям BeatMarket. Сайт адаптируется с full hd и до 320px. В приоритете было использование векторной графики svg для быстрой загрузки сайта и высокого качества изображений. Сайт содержит в себе 4 страницы, которые доступны из главного меню. В разработке использовался собственный starterGulp v1.1.",
    //         "img": "https://files.thechampguess.ru/base-portfolio/images/screencapture-beatlanding.png",
    //         "imgWebp": "https://files.thechampguess.ru/base-portfolio/images/webp/screencapture-beatlanding.webp",
    //         "imgMin": "https://files.thechampguess.ru/base-portfolio/images/min/screencapture-beatlanding-min.png",
    //         "imgMinWebp": "https://files.thechampguess.ru/base-portfolio/images/min/webp/screencapture-beatlanding-min.webp"
    //     },
    //     {
    //         "id": 4,
    //         "name": "BeatMarket",
    //         "link": "https://beatmarket.thechampguess.ru",
    //         "addDateTimestamp": 1620000000000,
    //         "addDateStr": "3 мая 2021",
    //         "description": "Был сверстан личный кабинет сайта по инвестициям BeatMarket. Личный кабинет состоит из ~= 35 страниц, а также из ~= 20 модальных окон. Включает в себя адаптив с 1920px и до 360px. Основной упор сделан на адаптив графиков и прочего интерактива, которого на сайте более чем достаточно (включая перемещение блоков стратегий, dropdown меню и прочее). В разработке использовался собственный starterGulp v1.1. Демо всех страниц и модальных окон можно просмотреть, перейдя в правом меню по ссылке ''Поддержка''.",
    //         "img": "https://files.thechampguess.ru/base-portfolio/images/screencapture-beatmarket.png",
    //         "imgWebp": "https://files.thechampguess.ru/base-portfolio/images/webp/screencapture-beatmarket.webp",
    //         "imgMin": "https://files.thechampguess.ru/base-portfolio/images/min/screencapture-beatmarket-min.png",
    //         "imgMinWebp": "https://files.thechampguess.ru/base-portfolio/images/min/webp/screencapture-beatmarket-min.webp"
    //     },
    //     {
    //         "id": 5,
    //         "name": "BetYou",
    //         "link": "https://betyou.thechampguess.ru",
    //         "addDateTimestamp": 1616112000000,
    //         "addDateStr": "19 марта 2021",
    //         "description": "Был сверстан лендинг page для сайта ''BetYou''. Основной макет расчитан на 1920px (full hd) и имеет полную адаптивность до 320px (IPhone 5). Имеется адаптивное бургер-меню. Использовался сборщик Gulp. Подробная информация о проекте на GitHub.",
    //         "img": "https://files.thechampguess.ru/base-portfolio/images/screencapture-betyou.png",
    //         "imgWebp": "https://files.thechampguess.ru/base-portfolio/images/webp/screencapture-betyou.webp",
    //         "imgMin": "https://files.thechampguess.ru/base-portfolio/images/min/screencapture-betyou-min.png",
    //         "imgMinWebp": "https://files.thechampguess.ru/base-portfolio/images/min/webp/screencapture-betyou-min.webp"
    //     },
    //     {
    //         "id": 6,
    //         "name": "Collapse",
    //         "link": "https://collapse.thechampguess.ru",
    //         "addDateTimestamp": 1639094400000,
    //         "addDateStr": "10 декабря 2021",
    //         "description": "Был создан сайт для приватных читов для популярных игр. В первом этапе была создана адаптивная верстка главной страницы и страницы товара, разработан функционал GUI и полный интерактив с персонажем. Полностью рабочий функционал главного экрана с сложным функционалом переключения игры и ее статуса. Включает в себя адаптив с 1920px и до 360px. В разработке верстки использовался собственный starterGulp v1.2.Во втором этапе была натяжка на Wordpress, а именно создание темы с нуля, натяжка на нее готовой верстки, создание мультиязычности и максимальное редактирование контента из админки. Использовались плагины Polylang и Advanced Custom Fields Pro.",
    //         "img": "https://files.thechampguess.ru/base-portfolio/images/screencapture-collapse.png",
    //         "imgWebp": "https://files.thechampguess.ru/base-portfolio/images/webp/screencapture-collapse.webp",
    //         "imgMin": "https://files.thechampguess.ru/base-portfolio/images/min/screencapture-collapse-min.png",
    //         "imgMinWebp": "https://files.thechampguess.ru/base-portfolio/images/min/webp/screencapture-collapse-min.webp"
    //     },
    //     {
    //         "id": 7,
    //         "name": "FormulaBI",
    //         "link": "https://formulabi.thechampguess.ru",
    //         "addDateTimestamp": 1658102400000,
    //         "addDateStr": "18 июля 2022",
    //         "description": "Разработка коммерческого сайта для платформы FormulaBI",
    //         "img": "https://files.thechampguess.ru/base-portfolio/images/screencapture-formulabi.png",
    //         "imgWebp": "https://files.thechampguess.ru/base-portfolio/images/webp/screencapture-formulabi.webp",
    //         "imgMin": "https://files.thechampguess.ru/base-portfolio/images/min/screencapture-formulabi-min.png",
    //         "imgMinWebp": "https://files.thechampguess.ru/base-portfolio/images/min/webp/screencapture-formulabi-min.webp"
    //     },
    //     {
    //         "id": 8,
    //         "name": "MedAssist",
    //         "link": "https://med.thechampguess.ru",
    //         "addDateTimestamp": 1556409600000,
    //         "addDateStr": "28 апреля 2019",
    //         "description": "Создание сайта на основе CMS MODX и Vue JS Framework. Разработка дизайна, реализация системы авторизации/регистрации с использованием модуля защитного кода. Возможность создания до 40 тестирований с использованием свойств компонентов Vue. Создание и прохождения тестирований с использованием медиафайлов (картинки, видео, аудио).",
    //         "img": "https://files.thechampguess.ru/base-portfolio/images/screencapture-med.png",
    //         "imgWebp": "https://files.thechampguess.ru/base-portfolio/images/webp/screencapture-med.webp",
    //         "imgMin": "https://files.thechampguess.ru/base-portfolio/images/min/screencapture-med-min.png",
    //         "imgMinWebp": "https://files.thechampguess.ru/base-portfolio/images/min/webp/screencapture-med-min.webp"
    //     },
    //     {
    //         "id": 9,
    //         "name": "ODDSCP",
    //         "link": "https://oddscp.thechampguess.ru",
    //         "addDateTimestamp": 1585353600000,
    //         "addDateStr": "28 марта 2020",
    //         "description": "Был сверстан многостраничный сайт 'API для парсинга спортивных событий'. Сайт насчитывает около 14 макетов, включая модальные окна. Имеет адаптацию под ноутбуки и мобильные устройства. Использовался сборщик Gulp. Подробная информация о проекте на GitHub.",
    //         "img": "https://files.thechampguess.ru/base-portfolio/images/screencapture-oddscp.png",
    //         "imgWebp": "https://files.thechampguess.ru/base-portfolio/images/webp/screencapture-oddscp.webp",
    //         "imgMin": "https://files.thechampguess.ru/base-portfolio/images/min/screencapture-oddscp-min.png",
    //         "imgMinWebp": "https://files.thechampguess.ru/base-portfolio/images/min/webp/screencapture-oddscp-min.webp"
    //     },
    //     {
    //         "id": 10,
    //         "name": "Roland",
    //         "link": "https://roland.thechampguess.ru",
    //         "addDateTimestamp": 1633996800000,
    //         "addDateStr": "12 октября 2021",
    //         "description": "Был разработан и сверстан сайт на основе StarterGulp 1.2. Сайт выполнен в классическом адаптиве с 1920px до 320px, используется full screen сайта с full screen скроллом",
    //         "img": "https://files.thechampguess.ru/base-portfolio/images/screencapture-roland.png",
    //         "imgWebp": "https://files.thechampguess.ru/base-portfolio/images/webp/screencapture-roland.webp",
    //         "imgMin": "https://files.thechampguess.ru/base-portfolio/images/min/screencapture-roland-min.png",
    //         "imgMinWebp": "https://files.thechampguess.ru/base-portfolio/images/min/webp/screencapture-roland-min.webp"
    //     },
    //     {
    //         "id": 11,
    //         "name": "StoneManufactory",
    //         "link": "https://stonemanufactory.thechampguess.ru",
    //         "addDateTimestamp": 1589241600000,
    //         "addDateStr": "12 мая 2020",
    //         "description": "Была сверстана основная страница для сайта 'Мунуфактура камня'. В первую очередь сделан упор на использование пропорциональных значений (замещение rem вместо px). Также добавлены кастомные анимации для элементов, которые делают сайт живим и динамичным. Сайт имеет адаптацию под все устройства, с full hd по 340px. Использовался сборщик Gulp. Подробная информация о проекте на GitHub.",
    //         "img": "https://files.thechampguess.ru/base-portfolio/images/screencapture-stonemanufactory.png",
    //         "imgWebp": "https://files.thechampguess.ru/base-portfolio/images/webp/screencapture-stonemanufactory.webp",
    //         "imgMin": "https://files.thechampguess.ru/base-portfolio/images/min/screencapture-stonemanufactory-min.png",
    //         "imgMinWebp": "https://files.thechampguess.ru/base-portfolio/images/min/webp/screencapture-stonemanufactory-min.webp"
    //     },
    //     {
    //         "id": 12,
    //         "name": "TaskBoard",
    //         "link": "https://taskboard.thechampguess.ru",
    //         "addDateTimestamp": 1597622400000,
    //         "addDateStr": "17 августа 2020",
    //         "description": "Сайт-приложение, с помощью которого можно записывать необходимые Вам задачи, записи и прочую информацию, которая может быть забыта! С менеджером задач и заметок TaskBoard у Вас больше не будет необходимости записывать какие-либо идеи и наработки на кучу бумажек на столе - все это можно сделать на одном сервисе!",
    //         "img": "https://files.thechampguess.ru/base-portfolio/images/screencapture-taskboard.png",
    //         "imgWebp": "https://files.thechampguess.ru/base-portfolio/images/webp/screencapture-taskboard.webp",
    //         "imgMin": "https://files.thechampguess.ru/base-portfolio/images/min/screencapture-taskboard-min.png",
    //         "imgMinWebp": "https://files.thechampguess.ru/base-portfolio/images/min/webp/screencapture-taskboard-min.webp"
    //     },
    //     {
    //         "id": 13,
    //         "name": "TokarMebel",
    //         "link": "https://tokarmebel.thechampguess.ru",
    //         "addDateTimestamp": 1627603200000,
    //         "addDateStr": "30 июля 2021",
    //         "description": "Был сверстан корпоративный сайт по производству жилых строений TokarMebel. Сайт состоит из 8 основных страниц, таких как главная страница, карточки товара, контактные данные, примеры работ и так далее. Включает в себя адаптив с 1920px и до 320px. Также содержит в себе интерактив в виде слайдеров, модальных окон и фильтра товаров. Использует базовый пиксель rem, который позволяет пропорционально масштабировать все элементы на сайте. В разработке использовался обновленный starterGulp v1.2.",
    //         "img": "https://files.thechampguess.ru/base-portfolio/images/screencapture-tokarmebel.png",
    //         "imgWebp": "https://files.thechampguess.ru/base-portfolio/images/webp/screencapture-tokarmebel.webp",
    //         "imgMin": "https://files.thechampguess.ru/base-portfolio/images/min/screencapture-tokarmebel-min.png",
    //         "imgMinWebp": "https://files.thechampguess.ru/base-portfolio/images/min/webp/screencapture-tokarmebel-min.webp"
    //     },
    //     {
    //         "id": 14,
    //         "name": "TrekMovers",
    //         "link": "https://trekmovers.thechampguess.ru",
    //         "addDateTimestamp": 1584576000000,
    //         "addDateStr": "19 марта 2020",
    //         "description": "Был сверстан адаптивный лендинг по макету из Figma. Резиновая адаптация от Full HD до 340px включительно (на свое усмотрение, макет не имел адаптации). Использовался сборщик Gulp, история разработки хранится на GitHub.",
    //         "img": "https://files.thechampguess.ru/base-portfolio/images/screencapture-trekmovers.png",
    //         "imgWebp": "https://files.thechampguess.ru/base-portfolio/images/webp/screencapture-trekmovers.webp",
    //         "imgMin": "https://files.thechampguess.ru/base-portfolio/images/min/screencapture-trekmovers-min.png",
    //         "imgMinWebp": "https://files.thechampguess.ru/base-portfolio/images/min/webp/screencapture-trekmovers-min.webp"
    //     },
    //     {
    //         "id": 15,
    //         "name": "WhiteBit",
    //         "link": "https://whitebit.thechampguess.ru",
    //         "addDateTimestamp": 1627948800000,
    //         "addDateStr": "3 августа 2021",
    //         "description": "Был сверстан лендинг для сайта WhiteBit. Основной макет расчитан на 1920px (full hd) и имеет полную адаптивность до 320px (IPhone 5). Лендинг содержит уникальные дизайнерские фишки, к примеру свечение некоторых блоков. Содержит плавающее меню, также адаптивные таблицы и модальные окна. В разработке использовался собственной разработки обновленный starterGulp v1.2.",
    //         "img": "https://files.thechampguess.ru/base-portfolio/images/screencapture-whitebit.png",
    //         "imgWebp": "https://files.thechampguess.ru/base-portfolio/images/webp/screencapture-whitebit.webp",
    //         "imgMin": "https://files.thechampguess.ru/base-portfolio/images/min/screencapture-whitebit-min.png",
    //         "imgMinWebp": "https://files.thechampguess.ru/base-portfolio/images/min/webp/screencapture-whitebit-min.webp"
    //     },
    //     {
    //         "id": 16,
    //         "name": "WorkTravel",
    //         "link": "https://worktravel.thechampguess.ru",
    //         "addDateTimestamp": 1570147200000,
    //         "addDateStr": "4 октября 2019",
    //         "description": "Сверстаны адаптивные макеты, взятые в Figma. Произведена посадка на CMS Wordpress. Подключен и настроен модуль, который добавляет возможность мультиязычности сайту. Выполнено первичное SEO.",
    //         "img": "https://files.thechampguess.ru/base-portfolio/images/screencapture-worktravel.png",
    //         "imgWebp": "https://files.thechampguess.ru/base-portfolio/images/webp/screencapture-worktravel.webp",
    //         "imgMin": "https://files.thechampguess.ru/base-portfolio/images/min/screencapture-worktravel-min.png",
    //         "imgMinWebp": "https://files.thechampguess.ru/base-portfolio/images/min/webp/screencapture-worktravel-min.webp"
    //     }
    // ];

}