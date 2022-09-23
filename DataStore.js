const _storage =  new WeakMap()

class DataStore {
    static put(element, key, obj) {
        if (!_storage.has(element)) {
            _storage.set(element, new Map());
        }
        _storage.get(element).set(key, obj);
    }
    
    static get(element, key) {
        return _storage.get(element).get(key);
    }
    
    static has(element, key) {
        return _storage.has(element) && _storage.get(element).has(key);
    }
    
    static remove(element, key) {
        var ret = _storage.get(element).delete(key);
        if (!_storage.get(element).size === 0) {
            _storage.delete(element);
        }
        return ret;
    }
    
    static lock(element,key,callback){
        if(!DataStore.has(element,key)){
            DataStore.put(element,key,true)
            return callback()
            
        }
        return false
    }
}

window.__Store = _storage;

export default DataStore