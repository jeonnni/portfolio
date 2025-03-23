import styles from './AboutMe.module.css';
import me from '../../assets/images/eunmi.jpeg';
const AboutMe = () => {
    const keywords = [
      '성실함', 
      '문제 해결 능력', 
      '팀워크', 
      '사용자 경험', 
      '풀스택 개발', 
      'React', 
      'Spring Boot',
      'Java', 
      'Oracle DB', 
      'JavaScript', 
      'UI/UX 디자인', 
      'GitHub', 
      '지속적인 학습',
      '의사소통 능력',
      '책임감', 
      '주도성', 
      '효율성', 
      '데이터베이스 설계',
      '버전 관리',
      '문서화 능력'
    ];
    // 키워드를 랜덤하게 섞기
    const shuffledKeywords = keywords.sort(() => Math.random() - 0.5);
  
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>About Me</h1> 
          <div className={styles.about}>
              <div className={styles.aboutMe}>
                <div className={styles.img}>
                  <div>
                    <img src={me} alt='me'/>
                  </div>
                </div>
                <div>
                  안녕하세요. 신입 개발자 전은미입니다. 저는 주도적으로 무언가를 만들어가는 개발자의 모습에 매력을 느껴 IT 분야로 전향하였고, 프론트엔드와 백엔드 모두에서 사용자 중심의 웹 애플리케이션을 개발하는 데 열정을 가지고 있습니다. 특히, React와 Spring Boot를 활용한 풀스택 개발에 집중하고 있으며, 사용자 맞춤형 인터페이스 제공과 코드 최적화를 통해 서비스의 효율성을 높이는 데 기여하고자 합니다.
                </div>
              </div>
              <div className={styles.keywords}>
                {shuffledKeywords.map((keyword, index) => (
                    <button key={index} className={styles.keywordButton}>
                        {keyword}
                    </button>
                ))}
              </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutMe;
  