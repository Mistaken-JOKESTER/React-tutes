import {useEffect} from 'react'

function useDocumentTitle(count) {
    useEffect(() => {
        window.document.title = count      
        return () => {
            window.document.title = 'Done'
        }
    }, [count])
}

export default useDocumentTitle
