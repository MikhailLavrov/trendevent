import { projectsData } from '../../data/projectsData';
import c from './Projects.module.css';
import { Image } from 'antd';

export const ProjectsComponent = () => {
  const projectItems = projectsData.map((item, index) => {
    return (
      <li className={c.projects__item} key={index}>
        <div className={c.projects__imageWrapper}>
          <Image.PreviewGroup
            items={item.images || [item.image]} // Если `images` отсутствует, используется основное изображение
          >
            <Image
              src={item.image}
              alt={item.title}
              style={{ width: '100%', height: 'auto' }} 
            />
          </Image.PreviewGroup>
        </div>
        <p className={c.projects__itemTitle}>{item.title}</p>
        <p className={c.projects__itemDescription}>{item.description}</p>
      </li>
    )
  })

  return (
    <section className={c.projects} id='projects'>
      <div className={`${c.projects__container} container`}>
        <div className={c.projects__header}>
          <h2 className={c.projects__headerTitle}>Наши проекты</h2>
          <div className={c.projects__listWrapper}>
            <ul className={c.projects__list}>
              {projectItems}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
