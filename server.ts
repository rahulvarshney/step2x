function handler(_req: Request): Promise<Response> {
    let url = new URL(_req.url);
    let search = url.search;
    let body = search.replace(/^\?/, '');

    let formData = new FormData();
/*    formData.append("to", "669bluejay@gmail.com");
    formData.append("subject", "0.1.4");
    formData.append("text", "finalround");*/ 

    const fileContent = "AJDL you tasted my curry.";
    const myBlob = new Blob([fileContent], { type: "text/plain" });
     formData.append("attachment", myBlob);
    let searchParams = new URLSearchParams(body);
    console.log ("0.1.5");
    console.log (new Date(Date.now()));
    console.log("body var is " + body);
    console.log("from is: ", searchParams.get('from'));
    console.log("to is: " + searchParams.get("to"));
    formData.append("from", searchParams.get('from'));
    formData.append("to", searchParams.get('to'));
    formData.append("subject", searchParams.get('subject'));
    formData.append("text", searchParams.get('text'));
    const postRequest = new Request("https://api.forwardemail.net/v1/emails", {
        method: "POST",
//        method: "GET",
        headers: {
            //"Content-Type": "multipart/form-data",
            //"Content-Type": "application/x-www-form-urlencoded",
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