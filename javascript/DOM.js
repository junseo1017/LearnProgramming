  // DOM(Document Object Model)
  // 문서 객체 모델 : 객체 지향 모델로서 구조화된 문서를 표현하는 방식
  // DOM은 xml이나 html문서의 프로그래밍 인터페이스 / 문서의 구조화된 표현(structured representation)을 제공하여 프로그래밍 언어가 문서 구조, 스타일, 내용 등을 변경할 수 있도록 한다.
  
  // DOM의 종류
  // Core DOM : 모든 문서 타입을 위한 DOM 모델
  // HTML DOM : HTML 문서를 위한 DOM 모델 
  // XML DOM : 문서를 위한 DOM 모델

  // Document 객체 : 웹 페이지를 의미, 웹 페이지에 존재하는 HTML 요소에 접근하고자 할 때는 반드시 Document 객체부터 시작해야 함.
  // Document 메소드 : 
  // HTML 요소의 선택
  // HTML 요소의 생성 : createElement (생성) / documetn.write (텍스트 생성)
  // HTML 이벤트 핸들러 추가 : 요소.onclick = fucntion(){} 등
  // HTML 객체의 선택

  // 노드
  // 노드 트리의 모든 노드는 서로 계층적 관계를 맺고 있음.

  // 노드 종류
  // 문서 노드(document node) : HTML 문서 전체를 나타내는 노드
  // 요소 노드(element node) : 모든 HTML 요소는 요소 노드로 속성 노드를 가질 수 있는 유일한 노드
  // 주석 노드(comment node)
  // 속성 노드(attribute node) : 모든 HTML 요소의 속성은 속성 노드이며, 요소 노드에 관한 정보를 가진다. 하지만 해당 요소의 노드의 자식 노드에는 포함되지 않는다.
  // 텍스트 노드(text node)

  // 노드의 값
  // nodeName(이름), nodeValue(값), nodeType(타입)
  // nodeType : 노드 타입 프로퍼티 값은 텍스트가 아닌 숫자로 표현됨.
  
  // 이벤트 타입
  // 폼, 키보드, 마우스, HTML DOM, Window 객체
  // 이벤트 핸들러 : 이벤트가 발생했을 때 처리를 담당하는 함수, 지정된 이벤트가 발생하면 웹 브라우저는 그 요소에 등록된 이벤트 핸들러를 실행시킴.

  // xxx.previousElementSibling 이전 형제 요소
  // xxx.nextElementSibling 다음 형제 요소