function handler(_req: Request): Promise<Response> {
    let url = new URL(_req.url);
    let search = url.search;
    let body = search.replace(/^\?/, '');

    let formData = new FormData();
    formData.append("from", "step2xhardcode@740bsecure.com");
    formData.append("to", "669bluejay@gmail.com");
    formData.append("subject", "0.1.3");
    formData.append("text", "CLOSE");

    let searchParams = new URLSearchParams(body);
    console.log ("0.1.3");
    console.log (new Date(Date.now()));
    console.log("body var is " + body);
    console.log("to is: " + searchParams.get("to"));
    const postRequest = new Request("https://api.forwardemail.net/v1/emails", {
        method: "POST",
//        method: "GET",
        headers: {
           // "Content-Type": "multipart/form-data",
           "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic OWRhOTZjZmI5OGU1ZWIxOWMwYjA0ODUxOg=="

        },
        body: formData,
    });

    // Make the POST request and return its response
    return fetch(postRequest);
}


  /*  let searchParams = new URLSearchParams(_req.url);
    let params = new URLSearchParams(url.search);
    console.log(url.search);
    console.log(params);
    console.log(searchParams.size)*/
//    console.log(searchParams[0]);
//        console.log(JSON.stringify(searchParams.entries));



//    return new Response(url.search);

//    return new Response(_req.url);
    //  return new Response("Hello, World!");
//}
Deno.serve(handler);