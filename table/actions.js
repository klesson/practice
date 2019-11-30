(function() {
    window.onload = function() {
        var data = [
            {
                index: 1,
                name: 'Джокер',
                country: 'США, Канада',
                type: 'триллер, драма, криминал',
                rating: '8.188',
                link: '1048334'
            },
            {
                index: 2,
                name: 'Ford против Ferrari',
                country: 'США, Франция',
                type: 'биография, спорт, драма',
                rating: '8.173',
                link: '835086'
            },
            {
                index: 3,
                name: 'Паразиты',
                country: 'Южная Корея',
                type: 'триллер, драма, комедия',
                rating: '8.081',
                link: '1043758'
            },
            {
                index: 4,
                name: 'Собачья жизнь 2',
                country: 'США, Китай, Индия',
                type: 'фентези, комедия, семейный',
                rating: '7.974',
                link: '1122114'
            },
            {
                index: 5,
                name: 'Ирландец',
                country: 'США',
                type: 'биография, драма, криминал',
                rating: '7.947',
                link: '1048334'
            },
            {
                index: 6,
                name: 'Достать ножи',
                country: 'США',
                type: 'детектив, драма, криминал',
                rating: '7.809',
                link: '1188529'
            },
            {
                index: 7,
                name: 'История игрушек 4',
                country: 'США',
                type: 'мультфильм, семейный, комедия',
                rating: '7.688',
                link: '846824'
            },
            {
                index: 8,
                name: 'Однажды в… Голливуде',
                country: 'США, Великобритания, Китай',
                type: 'драма, комедия',
                rating: '7.687',
                link: '1047883'
            },
            {
                index: 9,
                name: 'Как приручить дракона 3',
                country: 'США, Япония',
                type: 'мультфильм, фентези, семейный',
                rating: '7.715',
                link: '706655'
            },
            {
                index: 10,
                name: 'Мстители: Финал',
                country: 'США, Великобритания, Канада',
                type: 'фантастика, боевик, приключения',
                rating: '7.615',
                link: '843650'
            },

        ];

        var listContainer = document.getElementById('list');

        data.forEach(function (film) {
            function addToRow(row, attrName) {
                var rowIndex = document.createElement('td');
                if (attrName === 'link') {
                    var rowLink = document.createElement('a');
                    rowLink.textContent = 'Открыть';
                    rowLink.setAttribute('href', 'https://www.kinopoisk.ru/film/' + film[attrName]);
                    rowLink.setAttribute('target',  '_blank');
                    rowIndex.appendChild(rowLink);
                } else {
                    rowIndex.textContent = film[attrName];
                }
                row.appendChild(rowIndex);
            }
            var row = document.createElement('tr');
            addToRow(row, 'index');
            addToRow(row, 'name');
            addToRow(row, 'country');
            addToRow(row, 'type');
            addToRow(row, 'rating');
            addToRow(row, 'link');
            listContainer.appendChild(row);
        });
    }
})();
