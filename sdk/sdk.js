const HOST = "192.168.2.139";
const PORT = "9901";

const client = new WebSocket(`ws://${HOST}:${PORT}`);

// console.log(client);
client.onopen = function() {
    console.log('open');
}

/**
 * 工具类方法
 */
const Tools = {
    paramTransfor(type, data) {
        /**
         * 下发数据格式转换函数
         * 
         * 上报的结构
         * {
         *      "dp_key_array": ["WorkMode", "Power"],
         *      "dp_value": {
         *          "WorkMode": "1",
         *          "Power": "1"   
         *      }
         * }
         * 
         * 下发的结构
         * 
         * {
         *      "WorkMode": "1",
         *      "Power": "1"
         * }
         */
        
         // 接收到的上报数据
        const innerReceviedFactory = (data) => {
            // 这里只接受dp_value
            if (data.dp_value) {
                return data.dp_value;
            }
            return {};
        }

        // 下发的数据
        const innerSendFactory = (data) => {
            const keys = this._keys(data);
            // const sendData = {
            //     'dp_key_array': keys,
            //     'dp_value': data
            // }
            return [data];
        }

        // 判断是上报还是下发
        
        if (!type) {
            throw new Error('please select type');
        }
        
        if (type === 'received') {
            return innerReceviedFactory(data);
        } else if (type === 'send') {
            return innerSendFactory(data);
        }
    },
    _keys(obj) {
        const hasProperty = Object.prototype.hasOwnProperty;
        const keys = [];
        if (toString.call(obj) !== '[object Object]') {
            return obj;
        }
        for (let item in obj) {
            if (hasProperty.call(obj, item)) {
                keys.push(item);
            }
        }
        return keys;
    }
}

/**
 * SDK 遵循ali接口定义规范
 */

const RNSDK = {
    DataBridge: {
        bindPushData(callback) {
            client.onmessage = function(data) {
                const receivedData = JSON.parse(data.data).data.data;
                if (data) {
                    const transData = Tools.paramTransfor('received', receivedData);
                    callback(transData);
                }
            }
        },
        setDeviceStatus(data) {
            if (data) {
                const sendData = Tools.paramTransfor('send', data);
                client.send(JSON.stringify(sendData));
            }
        }
    }
}

export default RNSDK;