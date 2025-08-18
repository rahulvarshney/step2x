function handler(_req: Request): Promise<Response> {
    let url = new URL(_req.url);
    let email = url.search;
    let postBody = email.replace(/^\?/, '');
    console.log ("0.0.15");
    console.log (new Date(Date.now()));
    let body = "from=support%40740bsecure.com&to=669bluejay%40gmail.com&subject=0.0.10&text=hardcoded";
    console.log("email var is " + email);
    console.log("postBody var is " + postBody);
    console.log("body var is " + body);
    const postRequest = new Request("https://api.forwardemail.net/v1/emails", {
//        method: "POST",
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic OWRhOTZjZmI5OGU1ZWIxOWMwYjA0ODUxOg=="

        },
//        body: body,
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