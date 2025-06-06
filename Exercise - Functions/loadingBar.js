function loadingBar(n) {

    function showLoading(num) {
        let loaded = parseInt(num / 10);
        let remain = parseInt((100 - num) / 10);
        result = `${num}% [` + "%".repeat(loaded) + ".".repeat(remain) + "]";
        return result;
    }

    if (n < 100) {
        console.log(showLoading(n));
        console.log("Still loading..."); 
    } else {
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);