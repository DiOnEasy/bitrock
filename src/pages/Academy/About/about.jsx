import s from "./about.module.css";

export const About = () => {
  return (
    <div className={s.about}>
      <p className={s.aboutHeader}>ABOUT US</p>
      <div className={s.aboutItems}>
        <div className={s.aboutItem}>
          <p className={s.itemHeader}>Who we are</p>
          <p className={s.itemText}>
            BitRock Technology is a Limited Liability Company specializing in
            private wealth management within the digital asset ecosystem. We
            offer private investors the opportunity to invest at attractive
            rates, not easily found elsewhere.
          </p>
          <p className={s.itemText}>
            Established in 2022, we are at the forefront of a transformative
            journey. Our commitment to reshaping the future lies at the core of
            everything we do. The main focus of the company is the derivative
            market, which includes futures and the spot markets. With a cohesive
            team of traders with Category "A" licenses, we are poised to
            significantly enhance your income. Success is built upon the
            foundation of analytics and strategic transactions.
          </p>
        </div>
        <div className={s.aboutItem}>
          <p className={s.itemHeader}>Beyond Financial Markets</p>
          <p className={s.itemText}>
            BitRock Technology goes beyond financial market trading. We invest
            in promising startups in the fields of information technology and
            artificial intelligence. We own two modern mining data centers and
            are involved in buying and selling mining equipment from
            industry-leading brands such as Bitmain and Whatsminer.
          </p>
        </div>
        <div className={s.aboutItem}>
          <p className={s.itemHeader}>
          Where Finance Meets Innovation
          </p>
          <p className={s.itemText}>
            We are more than just a trading company. BitRock Technology
            represents a holistic ecosystem where financial expertise
            intertwines with innovative technologies. Join us on this
            exhilarating journey, where each transaction is strategic, every
            investment is future-oriented, and every endeavor contributes to
            shaping a future defined by financial success and technological
            advancement.
          </p>
        </div>
      </div>
    </div>
  );
};
