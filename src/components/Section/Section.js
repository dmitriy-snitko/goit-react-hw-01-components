import s from '../Section/Section.module.css';

function Section({ children }) {
  return <section className={s.statistics}>{children}</section>;
}

export default Section;
