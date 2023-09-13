
export async function load({ url }) {
    const tags = url.searchParams
    const filter = tags.get('tag')
    return {
        filter
    }
}