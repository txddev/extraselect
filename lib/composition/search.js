import { computed, ref, watchEffect } from 'vue'

const fetchOptions = async function (url, searchTerm = null, options = {}){
    const opts = {
        method: 'POST',
        credentials: 'include',
        ...options,
        headers: { 'Content-Type': 'application/json', ...options.headers ?? {} },
        body: JSON.stringify({search: searchTerm, ...options.body}),
    }
    const response = await fetch(url, opts)
    return await response.json()
}

export const loadSearch = (options, url, searchableUrl, filterText, minChars, filterValues, fetchMode = 'limited', fetchData = {}) => {
    const searchingCounter = ref(0)
    const searchingBool = ref(false)
    const searchingFlag = computed(() => searchingBool.value || searchingCounter.value > 0)
    
    if(url != null && url.length > 0){
        
        if(searchableUrl){
            const searchedTerms = []
            watchEffect((onCleanup)=>{
                if(filterText.value.length>= minChars){
                    let shouldFetch = true;
                    switch(fetchMode){
                        case 'always':
                            break;
                        default:
                        case 'limited':
                            shouldFetch = !searchedTerms.includes(filterText.value)
                            break;
                        case 'complete':
                            shouldFetch = searchedTerms.reduce((c,term)=>c&&!filterText.value.startsWith(term),true)
                            break;
                    }
                    if(shouldFetch){
                        searchingBool.value = true
                        const debounce = setTimeout(()=>{
                            searchedTerms.push(filterText.value)
                            searchingCounter.value += 1
                            fetchData.body = { ...fetchData.body, ...filterValues.value }
                            fetchOptions(url,filterText.value,fetchData).then(results => {
                                options.actions.addRange(results)
                                options.actions.sort()
                                searchingCounter.value -= 1 
                                searchingBool.value = false
                            })
                        },500)
                        onCleanup(()=>{
                            clearTimeout(debounce)
                        })
                    }
                }
            })
        }else{
            fetchOptions(url,null,fetchData).then(results => {
                options.actions.addRange(results)
                options.actions.sort()
            })
        }
    }
    

    return {searchingFlag}
}