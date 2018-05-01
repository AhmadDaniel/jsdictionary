function jsdictionary() {
    this.dictionary = [];
    this.type = "JS Dictionary";
    this.count = function () {
        var count = 0, key;
        for (key in this.dictionary) {
            count++;
        }
        return count;
    };
    this.containsKey = function (k) {
        var has = false, key;
        for (key in this.dictionary) {
            if (key == k) {
                has = true;
                break;
            }
        }
        return has;
    };
    this.containsValue = function (v) {
        var has = false, key;
        for (key in this.dictionary) {
            if (typeof (v.outerHTML) == "undefined") {
                if (this.dictionary[key].toString() == v.toString()) {
                    has = true;
                    break;
                }
            }
            else {
                if (this.dictionary[key].outerHTML == v.outerHTML) {
                    has = true;
                    break;
                }
            }
        }
        return has;
    };
    this.keys = function () {
        var keys = new Array(), i = 0;
        for (key in this.dictionary) {
            keys[i] = key;
            i++;
        }
        return keys;
    }
    this.values = function () {
        var values = new Array(), i = 0;
        for (key in this.dictionary) {
            values[i] = this.dictionary[key];
            i++;
        }
        return values;
    }
    this.add = function (k, v) {
        if (!this.containsKey(k) && k != "" && typeof(k) == "string") {
            this.dictionary[k] = v;
            this[k] = v;
        }
    };
    this.remove = function (k) {
        if (this.containsKey(k)) {
            delete this.dictionary[k];
            delete this[k];
        }
    };
    this.clear = function () {
        var ids = new Array();
        for (key in this.dictionary) {
            ids.push(key)            
        }
        for(id in ids)
        {
            delete this.dictionary[ids[id]];
            delete this[ids[id]];
        }
    };
}
