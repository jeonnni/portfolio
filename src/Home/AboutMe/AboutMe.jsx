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
                안녕하세요. 신입 개발자 전은미입니다. 고객 니즈를 파악하는 서비스직 경험을 바탕으로, 사용자 중심 사고를 개발 역량으로 확장하고자 IT 분야에 도전했습니다. React와 Spring Boot를 활용해 프론트엔드와 백엔드를 아우르는 웹 애플리케이션 개발에 집중하고 있으며, 문제를 주도적으로 해결하고 서비스의 완성도를 높이는 개발자가 되고자 합니다.
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
  