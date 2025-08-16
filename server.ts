function handler(_req: Request): Response {
    let searchParams = new URLSearchParams(_req.url);
    let url = new URL(_req.url);
    let params = new URLSearchParams(url.search);
    console.log(url.search);
    console.log(params);
    console.log(searchParams.size)
//    console.log(searchParams[0]);
//        console.log(JSON.stringify(searchParams.entries));


    return new Response(_req.url);
    //  return new Response("Hello, World!");
}
Deno.serve(handler);