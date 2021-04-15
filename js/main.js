'use strict';


// 基本的な作り方(Math.floor)
// {
//   // IDにより要素を取得
//   const btn = document.getElementById('btn');

//   // クリックしたら何かを起こすイベントを設定
//   btn.addEventListener('click', () => {
//     // 下記のSwitch文より短く書くには、配列を使う
//     const results = ['おおあたり!!', 'あたり!', 'はずれ(><)'];
//     // 配列の数だけの整数値をランダムで生成する 
//     const n = Math.floor(Math.random() * results.length);
//     btn.textContent = results[n];

//     // switch分を使って、n（数値)を読み替える
//     // switch(n) {
//     //   case 0:
//     //     btn.textContent ='おおあたり!!';
//     //     break;
//     //   case 1:
//     //     btn.textContent ='あたり!';
//     //     break;
//     //   case 2:
//     //     btn.textContent ='はずれ(><)';
//     //     break;
//     // }

//   });
// }

// 確率を操作して作る(Math.random)
{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const n = Math.random();
    if (n < 0.2) {
      btn.textContent = 'おおあたり!!';
    }else if (n < 0.7) {
      btn.textContent = 'あたり!';
    }else {
      btn.textContent ='はずれ(>o<)';
    }
  });
}

{
  const reload =document.getElementById('reload');
  reload.addEventListener('click',function(){
    window.location.reload();
});
}