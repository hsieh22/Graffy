## Graffy.io是一款多元操作模式的繪圖遊戲，玩家可透過滑鼠與鍵盤操作畫筆創作，目標是繪製近似題目的圖形。除了遊戲內容外，Graffy亦處處充滿驚喜，等待玩家們發掘~
## 操作方式 : 
## 其他說明

## 使用與參考之框架/模組/原始碼 : 
### Drawing Board: https://youtu.be/p3jJ5z7i3KE?si=w1cTfF7WH60-wib3
### Take Snapshot of element: https://dev.to/saranshk/how-to-convert-a-react-component-to-an-image-2jon
### Interactive Background https://www.fabiofranchino.com/blog/how-to-use-matter-js-in-react-functional-component/

## 使用之第三方套件、框架、程式碼
### NextJs / Python / Firebase / Typescript / MaterialUI / Lucide / TailwindCss / EsLint
### PhaserJs (create game) / MatterJs (physic engine) / FramerJs (animation) / Lottie (animation)/ html2canvas (take snapshot) / skimage (python module)

## 專題製作心得 :

B11901098謝沅瓏：
這次實作網頁遊戲，運用到相當多上課沒有使用到的外部套件，為了順利把不同套件甚至是python整合進專題花了相當大的功夫，不過也在此學到很多。
B11901009任涵聿：
總之又壓線了，但莫名其妙學了怎麼做動畫還蠻特別的。謝謝Ric，看我現在還能打字似乎沒溺死。

# Installation

## install packages
```bash
cd .
yarn install
```

## Install python virtual environment and packages
```bash
cd .
virtualenv .env 
source .env/bin/activate 
pip install -r requirements.txt
```
### python in used in this project for calculating image similarities, so we need to create a virtual environment and install the packages.

# Run the code
First, run the development server:

```bash
yarn dev
```
Then,
Open [http://localhost:3000](http://localhost:3000) with your browser to see the page.

## 請注意，可能需重新載入一次才能順利運作

# Testing

## 主畫面：
### 點擊任意處開始播放背景音樂，並進入遊戲
### 點擊"Graphy.io"字樣可開始遊戲
### 點擊"Mode", "Difficulty"可切換遊戲模式、難度
### 滑鼠滑至畫面右側會出現side bar
### 互動式背景：點擊空白處可產生隨機圖形，點按並移動滑鼠可連續產生，每間隔一段時間也會自動產生圖形。畫面左下方Logo（圓形、三角形、方形）可自由拖曳，並有碰撞、回彈效果。

## Side Bar
### 可進入Tutorial Page
### 滑鼠Hover至Setting，可以調整音量

## 遊戲畫面
### 遊戲機制為一局三關，畫完三張圖後進入到結果頁面
### 畫板：在Draw模式下，可使用滑鼠左鍵來繪畫。在Car模式下，可使用上下左右按鍵操控Cursor繪畫
### Time bar：位於畫板下方，顯示關卡剩餘時間
### 左側顯示題目
### 左側Finish按鈕可以進入下一關，時間到也會自動進入下一關
### 右下角設定鈕，可以調整音量
### 右下角暫停鈕，可暫停遊戲，繼續遊戲，離開遊戲

## 結果畫面
### 計算分數，以及最終得分
### 音效
### 可回到主畫面，開始新的一局遊戲

# Work Distribution

## B11901098謝沅瓏
### 各個頁面功能建制、遊戲流程控制、python計算圖形相似度、Draw模式畫板、Car模式PhaserJs遊戲、音樂、、互動式背景、Firebase檔案上傳
## B11901009任涵聿
### 所有頁面Css、轉場動畫、SideBar、主視覺設計、Logo設計
