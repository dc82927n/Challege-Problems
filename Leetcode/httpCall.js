function getCountries(s, p) {
    https.get(`https://jsonmock.hackerrank.com/api/countries/search?name=${s}`, res => {
        res.setEncoding("utf8");
        let body = "";
        res.on("data", data => {
            body += data; 
        });
        res.on("end", () => {
            body = JSON.parse(body);
            var count = 0;
   
            if (body.total_pages > 1) {
                for (let i = 1; i < body.total_pages; i++) {
                    https.get(`https://jsonmock.hackerrank.com/api/countries/search?name=${s}&page=${i}`, res => {
                        res.setEncoding("utf8");
                        let body = "";
                        res.on("data", data => {
                            
                            body += data;
                        });
                        res.on("end", () => {
                            body = JSON.parse(body);
                            
                            const countries = body.data
                            for (let i = 0; i < countries.length; i++) {
                                console.log(countries[i].population > p)
                                if (countries[i].population > p) {
                                    count++;
                                   
                                }
                            }
                        })
                    })
                }

                console.log('inner loop count', count);
            }
            else {
                const countries = body.data
                for (let i = 0; i < countries.length; i++) {
                    if (countries[i].population > p) {
                        count++;
                    }

                }
                console.log(count)
            }
            

        })    
    })
}
