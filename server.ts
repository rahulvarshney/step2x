function handler(_req: Request): Promise<Response> {
    let url = new URL(_req.url);
    let search = url.search;
    let body = search.replace(/^\?/, '');
    console.log ("0.1.1");
    console.log (new Date(Date.now()));
    console.log("body var is " + body);
    const postRequest = new Request("https://api.forwardemail.net/v1/emails", {
        method: "POST",
//        method: "GET",
        headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": "Basic OWRhOTZjZmI5OGU1ZWIxOWMwYjA0ODUxOg=="

        },
        body: body,
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