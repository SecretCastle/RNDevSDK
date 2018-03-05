const HOST = "192.168.19.71";
const PORT = "9901";

const client = new WebSocket(`ws://${HOST}:${PORT}`);

// console.log(client);
client.onopen = function() {
    console.log('open');
}

/**
 * SDK 遵循ali接口定义规范
 */

const RNSDK = {
    DataBridge: {
        isOnline() {

        },
        bindPushData(callback) {
            client.onmessage = function(data) {
                if (data) {
                    callback(data);
                }
            }
        },
        setDeviceStatus(params) {

        }
    }
}

export default RNSDK;