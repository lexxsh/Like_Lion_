# 멋쟁이 사자처럼 11기 클론코딩 과제 🦁

이번 시간에는 그동안 배운 styled component와 React hook(useState, useEffect)을 사용하여 직접 클론코딩을 진행해볼 겁니다.<br/>
이전 세션에 비해 다소 난이도가 올라갈 수 있으나 실제 구현되어있는 서비스를 직접 따라 만들면서 배우는 것만큼 빠르고 효과적인 공부법은 없으니까요.<br/>
모두 화이팅!
<br/><br/>

# 실습 진행방법

이번 주차는 과제 중심으로 세션이 진행됩니다!<br/>
직접 Component를 만들어서 아래의 홈페이지와 같은 페이지를 구현해보세요.

https://getbootstrap.com/docs/4.3/examples/album/

<br/>

## 어른 사자의 길

1. 우측 상단 햄버거 버튼 클릭 시 진행되는 동적 기능
2. 기타 애니메이션 효과
3. 하단 Footer

## 결과화면
![image](https://github.com/lexxsh/fe-react-clone-coding/assets/110239629/ae547eee-b057-4d34-815f-16e3669ad95d)
![image](https://github.com/lexxsh/fe-react-clone-coding/assets/110239629/cbf51fd6-533d-402d-9e81-ec84c77705aa)
![image](https://github.com/lexxsh/fe-react-clone-coding/assets/110239629/d758dbfa-fe99-4899-a2bb-6c608d86c6e8)
![image](https://github.com/lexxsh/fe-react-clone-coding/assets/110239629/5cbb08b6-2a70-463d-9b08-8d5cfa950b50)

# 컴포넌트 계층 구조

## App.js

---

```jsx
function App() {
  return (
    <div>
    <GlobalStyle />
    <Head></Head>
    <Main></Main>
    <Card></Card>
    <Footer></Footer>
    </div>
  );
}
export default App;
```

- 모든 컴포넌트를 불러온 메인 js 파일

### GlobalStyle

---

- Globle 폴더 내의 Globle.jsx
- 전체 모든 폰트의 스타일을 지정
- body 태그의 margin 과 padding을 0으로 지정하여 페이지의 여백을 없앰.

```jsx
import { createGlobalStyle } from "styled-components";
export const GlobalStyle= createGlobalStyle`
```

### Head.jsx

---

- Headbox
    
    페이지 맨 상단의 Head 부분을 담당하는 박스 형 div. 주어진 모양에 따라 만들어줌.
    
- HeadAll
    
    Head 부분에서 문자 및 글자를 포함하는 div. flex를 사용해 수평, 수직위치를 잡아줌.
    
- HeadText
    
    Head 에서 Album글자인 strong 스타일. 폰트와 위치 링크등을 잡아줌. react icon을 import해서 카메라 모양 아이콘을 사용하였음.
    
- Headbutton
    
    Head 에서 메뉴를  내려오게 하는 햄버거 버튼.  react icon을 사용하였으며 글자 색, 테두리, 크기 , 버튼 hover시에 커서가 포인터가 되도록 스타일을 지정해줌.
    
- Backtop
    
    페이지 맨 상단으로 위치해주게 하는 화살표 함수. window.scrollTo를 사용하였음.
    
- Head
    
    리액트의 훅의 ustState를 사용해 Menu를 열고 닫을 수 있도록 만들어 주었음.
    
    toggleMenu에 onclick시 값이 반전되도록 만들어주어 상태 값을 다르게 가지도록 하였음.
    

```jsx
import styled from "styled-components";
import { FiCamera } from "react-icons/fi";
import { BsList } from "react-icons/bs";
import Menu from "./Menu";
import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
```

- 아이콘을 사용, Menu 컴포넌트 사용, 리액트 훅 사용, 링크기능 사용, framer-motion으로 메뉴가 열고 닫히는 애니메이션 구현

### Menu.jsx

---

<aside>
💡 Head 컴포넌트의 햄버거 버튼을 클릭시 나타나는 Menu를 위한 컴포넌트

</aside>

- MenuBox
    
    전체 Menu를 포함하는 motion div. 크기와 flex를 사용해 자식 요소의 수평 요소를 맞춰줌.
    
- About
    
    Menu에서 왼쪽 글자들을 포함하는 div. flex를 사용해 자식 요소의 위치를 column으로 잡아주었고, overflow를 사용해 부모 요소를 벗어날 경우 보이지 않게 해줌.
    
- AboutTop
    
    왼쪽 글자에서 큰 about 글자인 h1 스타일. 폰트 크기와 두께를 잡아줌.
    
- AboutText
    
    왼쪽 글자에서 아래 내용 부분인 p 스타일. 폰트 크기와 두께, 색을 지정해줌.
    
- Contact
    
    Menu에서 오른쪽 글자들을 포함하는 div. flex를 사용해 자식 요소들의 위치를 잡아주었음.
    
    overflow로 부모 요소에 따라 안 보이도록 설정해 놓음.
    
- ContactTop
    
    오른쪽 글자들 중 위쪽 Contact 글자인 h1 스타일. 폰트 크기와 두께를 잡아줌.
    
- ContactText
    
    오른쪽 글자들 중 아래쪽 링크들을 담당하는 a스타일. 폰트 크기, 두께, 마우스 호버시 밑줄과 커서가 포인터로 바뀌게 지정해줌.
    
- animationHeader
    
    메뉴를 열고 닫을 때 생기는 애니메이션을 구현하기 위한 함수
    
    framer-motion을 사용하였고 초기상태는 height가 0이였다가 이후에는  170크기를 가지도록 지정해 줌.
    
- Menu
    
    showMenu값을 Head로 부터 받아와서 삼항연산자를 이용해 button이 눌렸는지 안눌렸는지 판단하여 애니메이션을 실행할 수 있도록 구현하였음. 
    

```jsx
import styled from "styled-components";
import { motion } from "framer-motion";
```

- 스타일 컴포넌트와 animation 작동을 위한 framer-motion을 import 하였음.

### Globle.jsx

---

- body 
margin과 padding을 0을 주어 페이지의 여백을 없앰.
- font
font-family를 사용하여 전체 페이지의 font를 설정해주었음.

```
import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
```

### Footer.jsx

---

- Footerbox
footer부분의 전체박스를 포함하는 div 내부 요소들의 위치를 flex로 정의해주었음.
- FooterText
footer의 text스타일을 지정해줌. 라우트의 Link를 사용해준 부분은 마우스 호버시 밑줄이 생기고 색이 어두워지도록 설정하였음.
- Backtop
클릭시 페이지의 맨 위쪽으로 이동되게 하는 함수.

```jsx
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
```

### Card.jsx

---

- Cardbox
Card 부분의 전체 배경 부분을 포함하는 div, 배경색과 크기, 내부 요소를 지정해줌.
- Cardbody
카드박스 하나를 포함하는 div. 박스의 그림자와 크기를 설정해줌.
- Cardimg
카드 박스에서의 img 부분. 배경 이미지를 url을 통한 props로 전달 해줌. 이미지를 중앙에 위치하도록 지정해줌.
- Cardtext
카드박스의 글자들을 포함하는 div
- CardMaintext
카드박스의 메인 text 폰트사이즈와 위치, 간격을 지정해줌.
- CardDown
카드박스의 아래쪽 (버튼, 시간) 을 포함하는 div
- CardTime
카드박스의 시간을 나타내는 p 스타일

```jsx
import styled from "styled-components";
import Button from "../Button/Button";
```

### Button.jsx

---

- CardB
카드 안의 버튼 두개를 포함하는 div. 내부요소의 위치, 글자위치, 폰트 사이즈와 크기를 지정해줌.
- CardButton1
첫번째 버튼. 테두리와 border를 적용해주었고 배경화면을 none으로 두어 마우스 클릭시 효과가 잘보이도록 해줌. css를 사용해 클론 페이지의 효과와 동일하게 나타나도록 설정함.
- CardButton2
첫번째 버튼과 동일. 테두리의 효과를 넣기위에 각자 선언해 주었음.

