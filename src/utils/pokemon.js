//20種類のポケモンデータ
export const getAllPokemon = (url) => {
    return new Promise((resolve, reject) => {  //非同期処理でpromise objectをreturn
        fetch(url)   //読み込み
            .then((res) => res.json())   //jsonに変換
            .then((data) => resolve(data));  //resolveでdataを返す
    });
};

//ポケモン１体のデータ
export const getPokemon = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                resolve(data);
            });
    });
};