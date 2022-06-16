요구사항

- [x] todo list에 todoItem을 키보드로 입력하여 추가하기
  - [x] 엔터키를 눌러 todoItem을 화면에 표시한다.
- [x] todo list의 체크박스를 클릭하여 complete 상태로 변경 (li tag 에 completed class 추가, input 태그에 checked 속성 추가)
  - [x] li tag에 completed class 추가
  - [x] input 태그에 checked 속성 추가
- [x] todo list의 x버튼을 이용해서 해당 엘리먼트를 삭제
- [x] todo list를 더블클릭했을 때 input 모드로 변경 (li tag 에 editing class 추가) 단 이때 수정을 완료하지 않은 상태에서 esc키를 누르면 수정되지 않은 채로 다시 view 모드로 복귀
  - [x] todo list를 더블클릭했을 때 input 모드로 변경 (li tag 에 editing class 추가)
  - [x] 이때 수정을 완료하지 않은 상태에서 esc키를 누르면 수정되지 않은 채로 다시 view 모드로 복귀
- [x] todo list의 item갯수를 count한 갯수를 리스트의 하단에 보여주기
- [x] todo list의 상태값을 확인하여, 해야할 일과, 완료한 일을 클릭하면 해당 상태의 아이템만 보여주기

심화 요구사항

- [x] localStorage에 데이터를 저장하여, TodoItem의 CRUD를 반영하기. 따라서 새로고침하여도 저장된 데이터를 확인할 수 있어야 함

---

리팩토링

- [x] eol, eof 오류 고치기
  - [x] prettier 툴 설치하고 실행하면 자동으로 해결시켜준다.
- [x] getLocalStorage() 함수명이 어색하다.
  - [x] initData()로 함수명 수정.
- [x] setLocalStorage() 함수명이 어색하다. 인자 값이 비어있어서 무엇을 세팅한건지 알 수 없어 어색함.
  - [x] 유틸함수로 변경하여 좀 더 범용성 있게 수정.
  - [x] 인자값으로 key, value를 추가하여 어떤걸 세팅하는지, 유틸함수로 사용할 수 있도록 함.
- [x] 투두리스트 각 id를 부여했는데 중복의 가능성이 있음.
  - [x] id를 부여하기 전 기존의 id를 체크하여 중복성 검사를 거친 후 부여하도록 수정함.
- [x] 한 파일에 100줄 이상 넘어갈 경우 파일 분리를 고려할 것.
  - [x] 핸들러 함수 하나하나 분리함.
- [x] view 부분에 data가 넘어옴.
  - [x] mvc 패턴 정의 공부하기.
  - [x] view는 model의 데이터를 몰라야하고 model은 view에서 변경된 값을 몰라야 한다.
  - [x] 모르는 부분은 controller 부분에서 model과 view를 각각 컨트롤한다.
- [x] 함수명과 하는 기능이 다름 or 함수명이 너무 광범위하거나 모호함.
  - [x] 함수명 수정. 함수명만 보더라도 어떤 기능을 할지 알 수 있도록 작명하기.
- [x] checked 속성은 false 부분에 빈 값 ""으로 주어도 false로 반환하기 때문에 빈 값으로 수정.
- [x] DOM요소를 가져와 투두리스트 개수를 카운트함.
  - [x] 이 부분도 mvc 패턴에 맞지 않는 기능이었음. 데이터 부분을 가져와 카운트 할 수 있도록 수정.
- [x] 빈값을 입력해도 투두리스트가 작성되는 버그가 있음.
  - [x] trim() 함수로 빈값이라면 작성되지 않도록 수정.
- [x] tagname 태그명으로 요소를 가져온 부분이 안전하지 못함.
  - [x] id나 class로 가져오도록 수정함.
- [x] - 연산자를 사용하여 숫자형변환을 낼거라면 Number()메서드를 활용해서 가독성을 올려보자.
