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
  const sound1 = new Audio("fanfare.mp3"); 
  const sound2 = new Audio("pafu.mp3");
  const sound3 = new Audio("chanchan.mp3");

  btn.addEventListener('click', () => {
    window.setTimeout(() => {
      const n = Math.random();
      if (n < 0.5) {
        btn.textContent = 'おおあたり!!';
        sound1.play();
      }else if (n < 0.8) {
        btn.textContent = 'あたり!';
        sound2.play();
      }else {
        btn.textContent ='はずれ(>o<)';
        sound3.play();
      };
    },4800);
  },{once: true});
}

{
  const reload =document.getElementById('reload');
  reload.addEventListener('click',function(){
    document.getElementById('reset').play();
    window.location.reload();
});
}
{
  document.getElementById('btn').onclick = function(){
    document.getElementById('hiku').play();
  };
}