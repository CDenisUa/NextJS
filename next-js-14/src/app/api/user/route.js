// Core


export const GET = async (request) => {
    const users = [
        {id: 1, name: 'JOHN'},
        {id: 2, name: 'BOB'},
        {id: 3, name: 'Rebeka'},
        {id: 4, name: 'Lisa'},
        {id: 5, name: 'Gary'},
    ];

    return new Response(JSON.stringify(users));
}

export const POST = async (request) => {
    return new Response('Post request')
}

export const HEAD = async (request) => {
    return new Response('Post request')
}

export const PUT = async (request) => {
    return new Response('Post request')
}

export const DELETE = async (request) => {
    return new Response('Post request')
}

export const PATCH = async (request) => {
    return new Response('Post request')
}