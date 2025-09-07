const getPages = (current, total) => {
    let page = []
    if (total <= 5) {
        for (let i = 1; i <= total; i++) {
            page.push(i);
        }
    }
    else {
        if (current <= 3) {
            page.push(1, 2, 3, ' ... ', total)
        }
        else if (current >= total - 2) {
            page.push(1, ' ... ', total - 2, total - 1, total)
        }
        else {
            page.push(1, ' ... ', current - 1, current, current + 1, ' ... ', total)
        }
    }
    return page
}

const PageCount = ({ pageHandler, pages, dynamicPages }) => {
    return (
        <div className="flex items-center gap-2">
            <button disabled={pages === 1}
                onClick={() => pageHandler(Math.max(1, pages - 1))}
                className={`${pages === 1 ? 'bg-red-400' : 'bg-red-600 hover:bg-red-700 active:bg-red-800'} text-white uppercase rounded-xl py-2 px-4 cursor-pointer transition duration-300 w-fit`}>
                prev
            </button>
            <div className="flex gap-2 items-center">
                {
                    getPages(pages, dynamicPages)?.map((item, idx) => (
                        <span key={idx}
                        className={`${pages===item && 'text-red-600 font-bold text-lg'} cursor-pointer`}
                        onClick={() => typeof item === 'number' && pageHandler(item)}>
                            {item}
                        </span>
                    ))
                }
            </div>
            <button disabled={pages === dynamicPages}
                onClick={() => pageHandler(Math.min(dynamicPages, pages + 1))}
                className={`${pages === dynamicPages ? 'bg-red-400' : 'bg-red-600 hover:bg-red-700 active:bg-red-800'} uppercase text-white rounded-xl py-2 px-4 cursor-pointer transition duration-300 w-fit`}>
                next
            </button>
        </div>
    )
}

export default PageCount