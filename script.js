// JavaScript

// フェード
const fade = document.querySelector('.fade');

const fadeKeyframes = {
  opacity: [0.2, 1],
}

const fadeOptions = {
  duration: 3000,
  easing: 'ease-in-out',
  direction: 'alternate',
  iterations: Infinity,
}

fade.animate(fadeKeyframes, fadeOptions);

// 回転
const spin = document.querySelector('.spin');

const spinKeyframes = {
  rotate: ['0deg', '360deg'],
  opacity: [0, 1],
}

const spinOptions = {
  duration: 3000,
  easing: 'linear',
  iterations: Infinity,
}

spin.animate(spinKeyframes, spinOptions);

// ページ全体の背景色が変わる
const page = document.documentElement;

const colorKeyframes = {
  backgroundColor: ['#f7b267', '#f79d65', '#84a59d', '#a8dadc', '#f6bd60'],
}

const colorOptions = {
  duration: 5000,
  direction: 'alternate',
  iterations: Infinity,
}

page.animate(colorKeyframes, colorOptions);


// 背景が延びる
const line = document.querySelector('.line');

const lineKeyframes = {
  width: ['0','100%'],
  color: ['transparent','#FFF'],
}

const lineOptions = {
  duration: 2000,
  direction: 'alternate',
  iterations: Infinity,
  easing:'ease-out',
}

line.animate(lineKeyframes,lineOptions);


// 文字のスライドイン
const slide = document.querySelector('.slide-in');

const slideKeyframes = {
  opacity: [0, 1],
  translate: ['0 50px', 0],
};

const slideOptions = {
  duration: 1800,
  direction: 'alternate',
  iterations: Infinity,
  easing: 'ease-in-out',
};

slide.animate(slideKeyframes,slideOptions);

// 伸び縮み
const scale = document.querySelector('.scale');

const scaleKeyframes = {
  scale: [1, 1.25, 0.85, 1],
}

const scaleOptions = {
  duration: 2200,
  direction: 'alternate',
  iterations: Infinity,
  easing: 'ease-in-out',
}

scale.animate(scaleKeyframes, scaleOptions);