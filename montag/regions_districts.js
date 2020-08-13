ymaps.ready(init);

function init() {

    var myMap,
    bigMap = false;

    var map = new ymaps.Map('map', {
        center: [65, 100],
        zoom: 1,
        type: null,
        controls: ['zoomControl']
    },{
        restrictMapArea: [[10, 10], [85,-160]]
    });
    map.controls.get('zoomControl').options.set({size: 'small'});
    // Добавим заливку цветом.
    var pane = new ymaps.pane.StaticPane(map, {
        zIndex: 100, css: {
            width: '100%', height: '100%', backgroundColor: '#f7f7f7'
        }
    });



    map.panes.append('white', pane);
    // Зададим цвета федеральных округов.
    var districtColors = {
        cfo: '#bac1cc',
        szfo: '#bac1cc',
        yfo: '#bac1cc',
        skfo: '#bac1cc',
        pfo: '#bac1cc',
        urfo: '#bac1cc',
        sfo: '#bac1cc',
        dfo: '#bac1cc',
        moscow: '#bac1cc',
        belgorod: '#bac1cc',
        orel: '#bac1cc',
        ryazan: '#bac1cc',
        bryansk: '#bac1cc',
        vladimir: '#bac1cc',
        ivanovo: '#bac1cc',
        kostroma: '#bac1cc',
        kursk: '#bac1cc',
        lipezk: '#bac1cc',
        kaluga: '#bac1cc',
        voronesh: '#bac1cc',
        smolensk: '#bac1cc',
        tambov: '#bac1cc',
        moscwa: '#bac1cc',
        tver: '#bac1cc',
        tula: '#bac1cc',
        yaroslavl: '#bac1cc',
        arhangel: '#bac1cc',
        vologda: '#bac1cc',
        kalinin: '#bac1cc',
        karelia: '#bac1cc',
        komi: '#bac1cc',
        lenin: '#bac1cc',
        murmansk: '#bac1cc',
        nenezk: '#bac1cc',
        novgorod: '#bac1cc',
        pskov: '#bac1cc',
        peter: '#bac1cc',
        adygea: '#bac1cc',
        astrahan: '#bac1cc',
        volga: '#bac1cc',
        kalmyk: '#bac1cc',
        krasnodar: '#bac1cc',
        sevastopol: '#bac1cc',
        krym: '#bac1cc',
        rostov: '#bac1cc',
        dagestan: '#bac1cc',
        ingush: '#bac1cc',
        kabardino: '#bac1cc',
        cerkesk: '#bac1cc',
        osetia: '#bac1cc',
        stavropol: '#bac1cc',
        cecnya: '#bac1cc',
        bashkort: '#bac1cc',
        kirov: '#bac1cc',
        marii: '#bac1cc',
        mordovia: '#bac1cc',
        nizniy: '#bac1cc',
        orenburg: '#bac1cc',
        penza: '#bac1cc',
        perm: '#bac1cc',
        samara: '#bac1cc',
        saratov: '#bac1cc',
        tatarstan: '#bac1cc',
        udmurtia: '#bac1cc',
        ulyanovsk: '#bac1cc',
        cuvashia: '#bac1cc',
        kurgan: '#bac1cc',
        eburg: '#bac1cc',
        tyumen: '#bac1cc',
        ugra: '#bac1cc',
        chelyaba: '#bac1cc',
        yamal: '#bac1cc',
        altayk: '#bac1cc',
        altayr: '#bac1cc',
        buryatia: '#bac1cc',
        zabaikal: '#bac1cc',
        irkutsk: '#bac1cc',
        kemerovo: '#bac1cc',
        krasnoyarsk: '#bac1cc',
        novosib: '#bac1cc',
        omsk: '#bac1cc',
        tomsk: '#bac1cc',
        tyva: '#bac1cc',
        hakasia: '#bac1cc',
        amur: '#bac1cc',
        yevrey: '#bac1cc',
        kamchatka: '#bac1cc',
        magadan: '#bac1cc',
        primorie: '#bac1cc',
        saha: '#bac1cc',
        sahalin: '#bac1cc',
        habarovsk: '#bac1cc',
        chukotka: '#bac1cc'
    };
    // Зададим подсказки при наведении на федеральный округ.
    var districtsHints = {
        cfo: 'ЦФО',
        szfo: 'СЗФО',
        yfo: 'ЮФО',
        skfo: 'СКФО',
        pfo: 'ПФО',
        urfo: 'УрФО',
        sfo: 'СФО',
        dfo: 'ДФО',
        moscow: 'Москва',
        belgorod: 'Белогород',
        orel: 'Орел',
        ryazan: 'Рязань',
        bryansk: 'Брянск',
        vladimir: 'Владимир',
        ivanovo: 'Иваново',
        kostroma: 'Кострома',
        kursk: 'Курск',
        lipezk: 'Липецк',
        kaluga: 'Калуга',
        voronesh: 'Воронеж',
        smolensk: 'Смоленск',
        tambov: 'Тамбов',
        moscwa: 'Москва',
        tver: 'Тверь',
        tula: 'Тула',
        yaroslavl: 'Ярославль',
        arhangel: 'Архангельск',
        vologda: 'Вологда',
        kalinin: 'Калининград',
        karelia: 'Петрозаводск',
        komi: 'Сыктывкар',
        lenin: 'Санкт-Петербург',
        murmansk: 'Мурманск',
        nenezk: 'Нарьян-Мар',
        novgorod: 'Новгород',
        pskov: 'Псков',
        peter: 'Санкт-Петербург',
        adygea: 'Майкоп',
        astrahan: 'Астрахань',
        volga: 'Волгоград',
        kalmyk: 'Элиста',
        krasnodar: 'Краснодар',
        sevastopol: 'Севастополь',
        krym: 'Симферополь',
        rostov: 'Ростов-на-Дону',
        dagestan: 'Махачкала',
        ingush: 'Магас',
        kabardino: 'Нальчик',
        cerkesk: 'Черкесск',
        osetia: 'Владикавказ',
        stavropol: 'Ставрополь',
        cecnya: 'Грозный',
        bashkort: 'Уфа',
        kirov: 'Киров',
        marii: 'Йошкар Ола',
        mordovia: 'Саранск',
        nizniy: 'Нижний Новгород',
        orenburg: 'Оренбург',
        penza: 'Пенза',
        perm: 'Пермь',
        samara: 'Самара',
        saratov: 'Саратов',
        tatarstan: 'Казань',
        udmurtia: 'Ижевск',
        ulyanovsk: 'Ульяновск',
        cuvashia: 'Чебоксары',
        kurgan: 'Курган',
        eburg: 'Екатеринбург',
        tyumen: 'Тюмень',
        ugra: 'Ханты-Мансийск',
        chelyaba: 'Челябинск',
        yamal: 'Салехард',
        altayk: 'Барнаул',
        altayr: 'Горно-Алтайск',
        buryatia: 'Улан-Удэ',
        zabaikal: 'Чита',
        irkutsk: 'Иркутск',
        kemerovo: 'Кемеров',
        krasnoyarsk: 'Кемерово',
        novosib: 'Новосибирск',
        omsk: 'Омск',
        tomsk: 'Томск',
        tyva: 'Кызыл',
        hakasia: 'Абакан',
        amur: 'Благовещенск',
        yevrey: 'Биробиджан',
        kamchatka: 'Петропавловск-Камчатский',
        magadan: 'Магадан',
        primorie: 'Владивосток',
        saha: 'Якутск',
        sahalin: 'Южно-Сахалинск',
        habarovsk: 'Хабаровск',
        chukotka: 'Анадырь'
    };
    // Создадим балун.
    var districtBalloon = new ymaps.Balloon(map);
    districtBalloon.options.setParent(map.options);
    // Загрузим регионы.
    ymaps.borders.load('RU', {
        lang: 'ru',
        quality: 2
    }).then(function (result) {
        // Создадим объект, в котором будут храниться коллекции с нашими регионами.
        var districtCollections = {};
        // Для каждого федерального округа создадим коллекцию.
        for (var district in districtColors) {
            districtCollections[district] = new ymaps.GeoObjectCollection(null, {
                fillColor: districtColors[district],
                strokeColor: districtColors[district],
                strokeOpacity: 0.3,
                fillOpacity: 0.3,
                hintCloseTimeout: 0,
                hintOpenTimeout: 0
            });
            // Создадим свойство в коллекции, которое позже наполним названиями субъектов РФ.
            districtCollections[district].properties.districts = [];
        }

        result.features.forEach(function (feature) {
            var iso = feature.properties.iso3166;
            var name = feature.properties.name;
            var district = districtByIso[iso];
            // Для каждого субъекта РФ зададим подсказку с названием федерального округа, которому он принадлежит.
            feature.properties.hintContent = districtsHints[district];
            // Добавим субъект РФ в соответствующую коллекцию.
            districtCollections[district].add(new ymaps.GeoObject(feature));
            // Добавим имя субъекта РФ в массив.
            districtCollections[district].properties.districts.push(name);

        });
        // Создадим переменную, в которую будем сохранять выделенный в данный момент федеральный округ.
        var highlightedDistrict;
        for (var districtName in districtCollections) {
            // Добавим коллекцию на карту.
            map.geoObjects.add(districtCollections[districtName]);
            // При наведении курсора мыши будем выделять федеральный округ.
            districtCollections[districtName].events.add('mouseenter', function (event) {
                var district = event.get('target').getParent();
                district.options.set({fillOpacity: 1});
            });
            // При выводе курсора за пределы объекта вернем опции по умолчанию.
            districtCollections[districtName].events.add('mouseleave', function (event) {
                var district = event.get('target').getParent();
                if (district !== highlightedDistrict) {
                    district.options.set({fillOpacity: 0.3});
                }
            });
            // Подпишемся на событие клика.
            districtCollections[districtName].events.add('click', function (event) {
                var target = event.get('target');
                var district = target.getParent();
                // Если на карте выделен федеральный округ, то мы снимаем с него выделение.
                if (highlightedDistrict) {
                    highlightedDistrict.options.set({fillOpacity: 0.3})
                }
                // Откроем балун в точке клика. В балуне будут перечислены регионы того федерального округа,
                // по которому кликнул пользователь.
                districtBalloon.open(event.get('coords'), district.properties.districts.join('<br>'));
                // Выделим федеральный округ.
                district.options.set({fillOpacity: 1});
                // Сохраним ссылку на выделенный федеральный округ.
                highlightedDistrict = district;
            });
        }
    })
}
