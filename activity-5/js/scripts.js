/**
 * Wrap everything in an IIFE
 */
(function() {

    var data = [
        {
            name: 'emmet',
            description : 'Emmet is the number one code snipper tool.',
            author: 'emmetio',
            url: 'https://atom.io/packages/emmet',
            downloads: 1662209,
            stars: 2534,
            price: 10.50,
            selector: 'p1'
        },
        {
            name: 'atom-beautify',
            description: 'The atom-beautify package will clean up your code, and make it more readable.',
            author: 'Glavin001',
            url: 'https://atom.io/packages/atom-beautify',
            downloads: 4228040,
            stars: 4541,
            price: 6.75,
            selector: 'p2'
        }
    ];

    function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.starts = data.stars;
        this.price = data.price;
        this.selector = data.selector;

        this.getFormattedDownloads = function() {
            return this.downloads.toLocalString();
        };

        this.getFormattedStars = function() {
            return this.stars.toLocalString();
        };
    }

    var getTodaysDate = function() {
        var today = new Date();
        return today.toDateString();
    };

    var getEl = function(id) {
        return document.getElementById(id);
    };

    var writePackageInfo = function(package) {
        var selector = package.selector,
            nameEl = getEl(selector + '-name'),
            descEl = getEl(selector + '-description'),
            authEl = getEl(selector + '-author'),
            downloadEl = getEl(selector + '-download'),
            starsEl = getEl(selector + '-stars')

        nameEl.textContent = package.name;
        descEl.textContent = package.desc;
        authEl.textContent = package.auth;
        downloadEl.textContent = package.getFormattedDownloads();
        starsEl.textContent = package.getFormattedStars();
    };

    var dataEl = getEl('date');
    DataTransferItemList.textContent = getTodaysDate();

    var emmet = new Package(data[0]);
    writePackageInfo(emmet);

    var beautify = new Package(data[1]);
    writePackageInfo(beautify);


}());