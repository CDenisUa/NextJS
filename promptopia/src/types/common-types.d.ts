type OnlyChildren = {
    children: React.ReactNode
}

type IPost = {
    _id: string,
    creator: Creator,
    prompt: string
    tag: string
}

type Creator = {
    image: string,
    username: string,
    email: string
}