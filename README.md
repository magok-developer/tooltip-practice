# Tooltip Component Project

React + TypeScript로 Tooltip 컴포넌트 구현하였으며, 다양한 위치 옵션을 통해 타겟 엘리먼트 주변에 툴팁을 표시할 수 있습니다.

## 🖥️ 프로젝트 설정 및 실행 방법

### 요구 사항
- Node.js (버전 14 이상 권장)
- npm 또는 yarn

### 프로젝트 클론
```git clone https://github.com/magok-developer/tooltip-practice.git```

### 의존성 설치
- npm install
  또는
- yarn install

### 개발 서버 실행
- npm start
  또는
- yarn start

## 🖥️ Tootip Component

### 📃 컴포넌트 구조

컴포넌트는 타겟 엘리먼트와 툴팁 엘리먼트로 구성됩니다.
타겟 엘리먼트에 마우스를 올리면 툴팁이 표시되고, 마우스를 떼면 툴팁이 숨겨집니다.
툴팁 엘리먼트는 ReactDOM.createPortal을 사용하여 document.body에 렌더링됩니다.

### 📃 Props

#### 1. content (React.ReactNode)

  - 툴팁에 표시될 내용입니다.
      
#### 2. direction (string)
   
  - 툴팁이 타겟 엘리먼트에 상대적으로 위치할 방향입니다. 기본값은 topLeft입니다. 사용할 수 있는 값은 다음과 같습니다.
     - "left", "right", "bottom", "top", "topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"
      
#### 3. enterDelay (number)

  - 툴팁을 표시하기 전의 딜레이 시간입니다. 기본값은 0입니다.
  
#### 4. leaveDelay (number)

  - 툴팁을 숨기기 전의 딜레이 시간입니다. 기본값은 0입니다.
    
#### 5. tooltipStyle (React.CSSProperties)

  - 툴팁에 적용될 사용자 정의 스타일입니다.
    
#### 6. style (React.CSSProperties)

  - 타겟 엘리먼트에 적용될 사용자 정의 스타일입니다.
      
#### 7. disabled (boolean)

  - 툴팁을 비활성화할지 여부를 나타내는 값입니다. 기본값은 false입니다.
  
#### 8. children (React.ReactNode)

  - 툴팁을 트리거하는 타겟 엘리먼트입니다.
    
#### 9. hoverNotHidden (boolean)

  - 툴팁 위에 마우스를 올려놓으면 툴팁이 계속 표시될지 여부를 나타내는 값입니다. 기본값은 false입니다.

### 📃 State

#### 1. visible (boolean)

  - 툴팁의 가시성을 제어하는 값입니다.

#### 2. coords ( left: number, top: number )

  - 툴팁을 배치하기 위한 좌표입니다.

#### 3. timeoutId (NodeJS.Timeout)

  - 표시 딜레이를 위한 타임아웃 id입니다.

#### 4. leaveDelayTimeoutId (NodeJS.Timeout)

  - 숨김 딜레이를 위한 타임아웃 id입니다.

### 📃 Ref

#### 1. tooltipRef

  - 툴팁 엘리먼트를 위한 ref입니다.

#### 2. targetRef

  - 타겟 엘리먼트를 위한 ref입니다.

### 📃 Function

#### 1. showTooltip

  - 툴팁을 표시하는 함수입니다. enterDelay가 설정되어 있으면 해당 시간 후에 툴팁이 표시됩니다. 타겟 엘리먼트의 위치를 기준으로 툴팁의 좌표를 계산합니다.

#### 2. hideTooltip

  - 툴팁을 숨기는 함수입니다. leaveDelay가 설정되어 있으면 해당 시간 후에 툴팁이 숨겨집니다.
    
#### 3. handleMouseEnterTooltip

  - 툴팁 위에 마우스를 올려놓았을 때 호출되는 함수입니다. leaveDelay 타임아웃을 취소합니다.

#### 4. calculateTooltipPosition

  - 타겟 엘리먼트의 위치를 기준으로 툴팁의 좌표를 계산하는 함수입니다.

#### 5. getTooltipStyle

- 툴팁의 최종 스타일을 계산하는 함수입니다.
