class EasyHttp {
    // --------------------------------请求数据  fetch---------------------------------------------
    // get(url) {
    //     return new Promise((resolve, reject) => {
    //         fetch(url)
    //             .then((res) => res.json())
    //             .then((data) => { resolve(data) })
    //             .catch(err => { reject(err) });
    //     });
    // }
    // --------------------------------请求数据  async---------------------------------------------
    async get(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    // --------------------------------传输数据 fetch---------------------------------------------
    // post(url, data) {
    //     return new Promise((resolve, reject) => {
    //         fetch(url, {
    //             method: 'POST',
    //             headers: {
    //                 'content-type': 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         })
    //             .then(res => res.json())
    //             .then(data => resolve(data))
    //             .catch(err => reject(err))
    //     });
    // }
    // --------------------------------传输数据 async---------------------------------------------
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const postData = await response.json();
        return postData;
    }
    // --------------------------------更新数据 fetch--------------------------------------------
    // put(url, data) {
    //     return new Promise((resolve, reject) => {
    //         fetch(url, {
    //             method: 'PUT',
    //             headers: {
    //                 'content-type': 'application/json'
    //             },
    //             //对象转字符串
    //             body: JSON.stringify(data)
    //         }).then(res => res.json())
    //             .then(data => resolve(data))
    //             .catch(err => reject(err))
    //     });
    // }
    // --------------------------------更新数据 async--------------------------------------------
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const putData = await response.json();
        return putData;
    }
    // --------------------------------删除数据 fetch--------------------------------------------
    // delete(url) {
    //     return new Promise((resolve, reject) => {
    //         fetch(url, {
    //             method: 'DELETE',
    //             headers: {
    //                 'Content-type': 'application/json'
    //             }
    //         }).then(res => res.json())
    //             .then(data => resolve("删除成功"))
    //             .catch(err => reject(err));
    //     });
    // };
    // --------------------------------删除数据 async--------------------------------------------
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        const deleteData = await "成功删除数据";
        return deleteData;
    };

};


