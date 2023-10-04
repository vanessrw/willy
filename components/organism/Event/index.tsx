import cx from 'classnames';

import SubHeader from 'components/atoms/SubHeader';

interface EventProps {
  left?: boolean;
  right?: boolean;
  title: string;
  subtitle: string;
  description: any;
  illustrationPath: string;
  anchorTarget?: string;
}

export default function Event(props: EventProps) {
  const {
    left,
    right,
    title,
    subtitle,
    description,
    illustrationPath,
    anchorTarget = '_self',
  } = props;
  const classTitle = cx({
    'event-wrapper': true,
    'wrapper': true,
    'right': right,
  });

  return (
    <section className="event">
      <div className={classTitle}>
        <div
          className="event-illustration"
          data-aos="fade-up"
          style={{backgroundImage: `url(${illustrationPath})`}}
        ></div>
        <div className="event-content">
          <div className="content">
            <SubHeader title={title} subtitle={subtitle} left fade="fade-up" />
            <p data-aos="fade-up">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
