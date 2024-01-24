# Alion 前端面試題目

## 題目:[複製 YouTube Shorts 的介面，取特定頻道的 Shorts 列表並且播放]

## 開發概念
1. 透過TailwindCss為 CSS框架以及自訂義Class，架構Youtube Shorts 介面

2. 將Short 影片區塊製作為Youtube Componet，透過[Youtbue IFrame PlayerApi](https://developers.google.com/youtube/iframe_api_reference?hl=zh-tw)將影片控制播放、停止播放、靜音等功能，編寫在此Component

3. 使用SwiperJs實現 Shorts 上下滑動影片功能，在渲染Youtube Componet 時會將Slide編號接入`:index`，再透過參數`show_index`來取得目前是在哪一個Slide區塊，將此參數傳入Youtube Component`activeIndex`，藉此來判斷該影片是否要自動播放

4. 透過參數`default_show `控制載入網頁是要渲染多少個Youtube Component，並在每次滑動區塊完成動作後，再渲染當前影片的後兩部影片(含當前影片共三部)

### [Live Demo](http://alion.henryegg8.com/)

## 環境需求
1. NodeJs > 21.6

## 安裝流程
1. `git clone https://github.com/asdcxz179/alion.git`
2. `cd alion`
3. `npm install`
4. `npm run dev`

## 打包指令
1. `npm run build`

## 使用技術
1. [VueJs3](https://vuejs.org/)
2. [SwiperJs](https://swiperjs.com/)
3. [Vue3 Ytframe](https://github.com/kiranparajuli589/vue3-ytframe)
4. [TailwindCss](https://tailwindcss.com/)
5. [Fontawesome](https://fontawesome.com/)
