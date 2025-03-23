// store.js
import {create} from 'zustand';
import wolf1 from '../assets/images/wolf.gif';
import wolf2 from '../assets/images/wolf2.gif';
import wolf3 from '../assets/images/wolf3.gif';
import hows1 from '../assets/images/hows.gif';
import hows2 from '../assets/images/hows2.gif';
import hows3 from '../assets/images/hows3.gif';
import nbti from '../assets/images/nbti.gif';
import gentle1 from '../assets/images/gentle.gif';
import gentle2 from '../assets/images/gentle2.gif';
import gentle3 from '../assets/images/gentle3.gif';
import elemental1 from '../assets/images/elemental.gif';
import elemental2 from '../assets/images/elemental2.gif';
import lock from '../assets/images/lock.gif';
import samsung from '../assets/images/samsung.gif';
import cj from '../assets/images/cj.gif';

export const useProjectStore = create((set) => ({
  projects: [
    {
      id: 1,
      title: 'How’s 인테리어 가구 몰 & 커뮤니티 ',
      subtitle: '2024.08.28 ~ 2024.09.26, 팀 프로젝트',
      images: [hows2,hows1,hows3],
      description:
        '이커머스 웹 서비스 개발을 목표로 하여, 보다 넓은 사용자층을 대상으로 한 플랫폼을 구축했습니다. 저는 Firebase 배포 및 메인 페이지, 베스트 상품, 카테고리, 그리고 상품 리뷰 기능을 담당하여 개발하였습니다. 이를 통해 사용자에게 향상된 쇼핑 경험을 제공하고, 리뷰 시스템을 통해 사용자 피드백을 쉽게 수집할 수 있는 기능을 구현하였습니다.',
      features: [
        'Backend : Java 17, Spring Boot 3.3.3',
        'Frontend : React, Axios, Zustand, Swiper, Star Ratings',
        'Database : Oracle',
        '호스팅 : Firebase, Google Cloud Storage',
        '협업 툴 : GitHub, GitKraken, Jira',
      ],
    },
    {
      id: 2,
      title: '기업관리 전산 프로젝트',
      subtitle: '2024.07.24 ~ 2024.08.23, 팀 프로젝트',
      images: [nbti],
      description:
        'Java GUI를 활용하여 직원의 일상 업무를 지원하고 관리자의 업무를 효율적으로 처리하는 것을 목표로 개발되었습니다. 저는 DB 관리(SQL Developer) 및 일정 관리 시스템, 자원 예약 시스템(회의실, 비품, 차량) 및 관리자 페이지 구현하였습니다.',
      features: [
        'Backend : Java (OpenJDK 17)',
        'Frontend : React',
        'Database : Oracle',
        'VCS : Git, GitHub',
        'IDE : Spring Boot, VSCode, SQL Developer',
        'Libraries : Bootstrap5, JDBC, GSON, AXIOS, React-Router-DOM, Zustand',
      ],
    },
    {
      id: 3,
      title: 'Wolf 게임 포털 사이트',
      subtitle: '2024.06.13 ~ 2024.06.28, 팀 프로젝트',
      images: [wolf1,wolf2,wolf3],
      description:
        '사용자가 다양한 미니게임을 플레이하고 게임 관련 커뮤니티 기능을 제공받을 수 있는 웹 포털 사이트를 구축하는 것을 목표로 하였습니다. 저는 메인 페이지를 총괄하며 게임 목록, 게임 상세 등 여러 페이지를 담당했습니다. 또한, 차피하기 라는 미니게임을 개발하여 포털에 통합하여 사용자들이 직접 즐길 수 있도록 하였습니다.',
      features: [
        'Backend : Java, JSP (OpenJDK 11)',
        'Frontend : HTML5, CSS3, JavaScript',
        'Database : Oracle',
        'WAS : Tomcat',
        'VCS : Git, GitHub',
        'IDE : Eclipse, VSCode, SQL Developer',
        'Library : Phaser3, Bootstrap5, JQuery, JSTL, OJDBC, Tinymce, Sweetalert2, Cos, Gson, Chartjs, Jakarta.activation, Jakarta.mail, Jsoup',
      ],
    },
    {
      id: 4,
      title: '엘리멘탈',
      subtitle: '2024.03.21 ~ 2024.03.22, 개인 프로젝트',
      images: [elemental1, elemental2],
      description:
      '이 애니메이션은 제가 개인적으로 좋아하는 주제에서 영감을 받아 제작한 것입니다. 제가 흥미를 느끼는 요소들을 시각적으로 표현하고, 이를 통해 사용자들에게 감정적 경험을 제공하고자 했습니다.',
      features: [
        'HTML',
        'CSS',
      ],
    },
    {
      id: 5,
      title: '젠틀 몬스터',
      subtitle: '2024.04.01 ~ 2024.04.02 - 개인 프로젝트',
      images: [gentle1, gentle2, gentle3],
      description:
        ' Gentle Monster의 홈페이지를 반응형으로 구현한 것으로, PC, 태블릿, 모바일 화면 크기에 맞춰 콘텐츠가 조정되는 웹 페이지입니다. 순수 HTML과 CSS만을 사용하여 부트스트랩의 반응형 그리드 시스템을 구현했습니다.',
      features: [
        '순수 HTML과 CSS로만 구현되었기 때문에',
        '자바스크립트와 같은 동적 기능 없이 정적인 페이지로 구성되어 있고,',
        '디자인과 레이아웃에 집중한 프로젝트입니다.',
      ],
    },
    {
      id: 6,
      title: '락앤락(Lock&Lock)',
      subtitle: '개인 프로젝트',
      images: [lock],
      description:
        '이 프로젝트는 락앤락(Lock&Lock) 공식 홈페이지를 클론 코딩한 작업입니다. 클론 코딩을 통해 원본 웹사이트의 레이아웃, 기능, 그리고 사용자 경험을 학습하고 재현하는 것이 목적이었습니다.',
      features: [
        'HTML',
        'CSS',
        'JavaScript',
      ],
    },
    {
      id: 7,
      title: 'CJONE',
      subtitle: '개인 프로젝트',
      images: [cj],
      description:
      '이 프로젝트는 CJONE 공식 홈페이지를 클론 코딩한 작업입니다. 클론 코딩을 통해 원본 웹사이트의 레이아웃, 기능, 그리고 사용자 경험을 학습하고 재현하는 것이 목적이었습니다.',
      features: [
        'HTML',
        'CSS',
        'JavaScript',
      ],
    },
    {
      id: 8,
      title: '삼성전기',
      subtitle: '개인 프로젝트',
      images: [samsung],
      description:
        '이 프로젝트는 삼성전기 공식 홈페이지를 클론 코딩한 작업입니다. 클론 코딩을 통해 원본 웹사이트의 레이아웃, 기능, 그리고 사용자 경험을 학습하고 재현하는 것이 목적이었습니다.',
      features: [
        'HTML',
        'CSS',
      ],
    },
  ],
}));
