app.filter('status', function () {
    return function (status) {
        if (status == 'A+') {
            return "1st Class";
        }
        if (status == 'A' || status == 'A-') {
            return "2nd Class";
        }
        if (status == 'B+' || status == 'B') {
            return "3rd Class";
        }
        if (status == 'F') {
            return "Failed";
        }
    };
});