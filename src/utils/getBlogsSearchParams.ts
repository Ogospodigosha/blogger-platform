export const getBlogsSearchParams = (searchParams: URLSearchParams) => {
    const params = Object.fromEntries(searchParams)

    return {

        pageNumber: +params.pageNumber || undefined,
        pageSize: +params.pageSize || undefined

    }
}
